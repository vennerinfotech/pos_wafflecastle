/* Fixed POS Script: pos_script_v7.3_fixed.js */
/* Changes:
   - Disabled client-side invoice number generation
   - Disabled local invoice counter reset
   - delete_from_sale marks pending cancel instead of deleting invoices
   - inv_no assignments removed (must come from server)
   - Added preloader hide fallback
*/

// Safe stub for getNextSaleInvNo
function getNextSaleInvNo() {
    // Safe defaults so POS UI doesn't freeze
    try {
        window.main_inv_no = "PENDING";       // placeholder
        window.main_sale_inv_no = "PENDING";  // placeholder

        // Continue normal flow
        $(document).trigger('invoice_ready');
        console.log("Invoice init complete (placeholder mode).");
    } catch (e) {
        console.warn("Invoice init fallback error", e);
    }
}


// Disable removeInvoiceDate logic
function removeInvoiceDate(){
    console.warn("Invoice date reset disabled. Server controls invoice series.");
}

// Safe delete_from_sale
function delete_from_sale(sale_id) {
    let transaction = db.transaction(['sales'], 'readwrite');
    let objectStore = transaction.objectStore('sales');
    objectStore.openCursor().onsuccess = function (event) {
        let cursor = event.target.result;
        if (cursor) {
            if (cursor.value.sales_id == sale_id) {
                let updateData = cursor.value;
                // Mark as pending cancel, but don't hide/delete invoice
                updateData.is_invoice = "pending_cancel";
                let request = cursor.update(updateData);
                request.onsuccess = function () {
                    $("#order_" + sale_id).addClass("pending_cancel_order");
                    clearFooterCartCalculation();
                    displayOrderList();
                };
                return;
            }
            cursor.continue();
        }
    };
}

// Preloader safety
$(function(){
    setTimeout(function(){
        try{
            $('.ir_pre_loader, .preloader, #preloader').hide();
        }catch(e){}
    }, 800);
});

// NOTE: You must update backend finalizeSale API to return invoice_no and sale_id.
// Client now expects server to provide invoice numbers.
