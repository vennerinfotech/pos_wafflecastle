(function ($) {
    "use strict";
    toastr.options = {
        positionClass: 'toast-bottom-right'
    };
    const win = $(window);
    const body_el = $("body");
    let main_inv_no = '';
    let main_sale_inv_no = '';
    $('a[href="#"]').attr("href", "javascript:void(0)");
    //geeting hidden files data from views/sale/POS/hidden_input_html.php file.
    let base_url = $("base").attr("data-base");
    let outlet_name = $("#outlet_name").val();
    let txt_kot = $("#txt_kot").val();
    let invoice_logo = $("#invoice_logo").val();
    let outlet_address = $("#outlet_address").val();
    let outlet_phone = $("#outlet_phone").val();
    let please_select_your_kitchen_for_print = $("#please_select_your_kitchen_for_print").val();
    let food_menu_tooltip = $("#food_menu_tooltip").val();
    let inv_collect_tax = $("#inv_collect_tax").val();
    let inv_paid_ticket = $("#inv_paid_ticket").val();
    let outlet_tax_registration_no = $("#outlet_tax_registration_no").val();
    let associate_user_name = $("#associate_user_name").val();
    let invoice_footer = $("#invoice_footer").val();
    let inv_total_item = $("#inv_total_item").val();
    let inv_sub_total = $("#inv_sub_total").val();
    let inv_discount = $("#inv_discount").val();
    let inv_service_charge = $("#inv_service_charge").val();
    let no_item_error = $("#no_item_error").val();
    let inv_delivery_charge = $("#inv_delivery_charge").val();
    let inv_tips = $("#inv_tips").val();
    let inv_grand_total = $("#inv_grand_total").val();
    let att_type = Number($("#attendance_type").val());
    let inv_paid_amount = $("#inv_paid_amount").val();
    let inv_qr_code_enable_status = $("#inv_qr_code_enable_status").val();
    let inv_order_number = $("#inv_order_number").val();
    let inv_due_amount = $("#inv_due_amount").val();
    let inv_total_payable = $("#inv_total_payable").val();
    let inv_payment_method = $("#inv_payment_method").val();
    let inv_usage_points = $("#inv_usage_points").val();
    let inv_invoice_no = $("#inv_invoice_no").val();
    let inv_offline = $("#inv_offline").val();
    let inv_online = $("#inv_online").val();
    let inv_phone = $("#inv_phone").val();
    let inv_tax_registration_no = $("#inv_tax_registration_no").val();
    let inv_date = $("#inv_date").val();
    let status_txt = $("#status_txt").val();
    let inv_checkout = $("#inv_checkout").val();
    let inv_sales_associate = $("#inv_sales_associate").val();
    let inv_customer = $("#inv_customer").val();
    let inv_address = $("#inv_address").val();
    let inv_gst_number = $("#inv_gst_number").val();
    let inv_waiter = $("#inv_waiter").val();
    let inv_given_amount = $("#inv_given_amount").val();
    let inv_change_amount = $("#inv_change_amount").val();
    let inv_table = $("#inv_table").val();
    let inv_delivery_status = $("#inv_delivery_status").val();
    let inv_order_type = $("#inv_order_type").val();
    let inv_vat = $("#inv_vat").val();
    let inv_charge = $("#inv_charge").val();
    let inv_dine = $("#inv_dine").val();
    let inv_take_away = $("#inv_take_away").val();
    let inv_delivery = $("#inv_delivery").val();
    let inv_bill_no = $("#inv_bill_no").val();
    let inv_token_number = $("#inv_token_number").val();
    let menu_not_permit_access = $("#menu_not_permit_access").val();
    let close_order_msg = $("#close_order_msg").val();
    let cancel_order_msg = $("#cancel_order_msg").val();
    let pre_or_post_payment = Number($("#pre_or_post_payment").val());
    let tax_is_gst = $("#tax_is_gst").val();
    let please_select_a_table_for_action = $("#please_select_a_table_for_action").val();
    let you_are_ordering_now_on_your_selected_table = $("#you_are_ordering_now_on_your_selected_table").val();
    let collect_tax = $("base[data-collect-tax]").attr("data-collect-tax");
    let tax_status = $("base[data-tax-status]").attr("data-tax-status");
    let isTaxEnabled = (collect_tax === "Yes" && tax_status === "Yes");
    let currency = '';
    let inv_currency = $("#hidden_currency").val();
    let role = $("base[data-role]").attr("data-role");
    let collect_gst = $("base[data-collect-gst]").attr("data-collect-gst");
    let s_height = Number($(window).height());
    let s_width = Number($(window).width());
    let csrf_value_ = $("#csrf_value_").val();
    let ir_precision = $("#ir_precision").val();
    let register_close = $("#register_close").val();
    let warning = $("#warning").val();
    let a_error = $("#a_error").val();
    let ok = $("#ok").val();
    let cancel = $("#cancel").val();
    let please_select_order_to_proceed = $("#please_select_order_to_proceed").val();
    let exceeciding_seat = $("#exceeciding_seat").val();
    let seat_greater_than_zero = $("#seat_greater_than_zero").val();
    let are_you_sure_cancel_booking = $("#are_you_sure_cancel_booking").val();
    let are_you_sure = $("#are_you_sure").val();
    let are_you_delete_notification = $("#are_you_delete_notification").val();
    let no_notification_select = $("#no_notification_select").val();
    let are_you_delete_all_hold_sale = $("#are_you_delete_all_hold_sale").val();
    let no_hold = $("#no_hold").val();
    let sure_delete_this_hold = $("#sure_delete_this_hold").val();
    let please_select_hold_sale = $("#please_select_hold_sale").val();
    let delete_only_for_admin = $("#delete_only_for_admin").val();
    let this_item_is_under_cooking_please_contact_with_admin = $("#this_item_is_under_cooking_please_contact_with_admin").val();
    let this_item_already_cooked_please_contact_with_admin = $("#this_item_already_cooked_please_contact_with_admin").val();
    let sure_delete_this_order = $("#sure_delete_this_order").val();
    let sure_remove_this_order = $("#sure_remove_this_order").val();
    let sure_cancel_this_order = $("#sure_cancel_this_order").val();
    let sure_close_this_order = $("#sure_close_this_order").val();
    let please_select_an_order = $("#please_select_an_order").val();
    let cart_not_empty = $("#cart_not_empty").val();
    let cart_not_empty_want_to_clear = $("#cart_not_empty_want_to_clear").val();
    let order_type_changing_alert = $("#order_type_changing_alert").val();
    let progress_or_done_kitchen = $("#progress_or_done_kitchen").val();
    let order_in_progress_or_done = $("#order_in_progress_or_done").val();
    let close_order_without = $("#close_order_without").val();
    let want_to_close_order = $("#want_to_close_order").val();
    let please_select_open_order = $("#please_select_open_order").val();
    let cart_empty = $("#cart_empty").val();
    let txt_err_pos_1 = $("#txt_err_pos_1").val();
    let txt_err_pos_2 = $("#txt_err_pos_2").val();
    let txt_err_pos_3 = $("#txt_err_pos_3").val();
    let txt_err_pos_4 = $("#txt_err_pos_4").val();
    let txt_err_pos_5 = $("#txt_err_pos_5").val();
    let fullscreen_1 = $("#fullscreen_1").val();
    let fullscreen_2 = $("#fullscreen_2").val();
    let update_order = $("#update_order").val();
    let place_order = $("#place_order").val();
    let note_txt = $("#note_txt").val();
    let combo_txt = $("#combo_txt").val();
    let price_txt = $("#price_txt").val();
    let modifiers_txt = $("#modifiers_txt").val();
    let waiter_app_status = $("#waiter_app_status").val();
    let system_mode = $("#system_mode").val();
    let item_add_success = $("#item_add_success").val();
    let selected_variation = $("#selected_variation").val();
    let not_booked_yet = $("#not_booked_yet").val();
    let transfer_transferred_msg = $("#transfer_transferred_msg").val();


    //INVOICE LABLE
    let product_label = $("#product_label").val();
    let quantity_label = $("#quantity_label").val();
    let unit_price_label = $("#unit_price_label").val();
    let subtotal_label = $("#subtotal_label").val();
    let category_label = $("#category_label").val();
    let total_quantity_label = $("#total_quantity_label").val();
    let item_discount_label = $("#item_discount_label").val();
    let discount_unit_price_label = $("#discount_unit_price_label").val();

    $(window).on("load", function () {
        $(".preloader").fadeOut(500);
    });

    $(".select2").select2();

    let soundBody = $("body");

    let productSound = new Howl({
        src: [base_url + "assets/media/access.mp3"],
    });
    let productSound2 = new Howl({
        src: [base_url + "assets/media/click.mp3"],
    });
    soundBody.on("click", ".single_item", function () {
        productSound.play();
    });
    soundBody.on("click", ".edit_item", function () {
        productSound2.play();
    });
    soundBody.on("click", ".decrease_item_table", function () {
        productSound2.play();
    });
    soundBody.on("click", ".increase_item_table", function () {
        productSound2.play();
    });

    function focusSearch() {
        if (s_width >= 700) {
            $("#search").focus();
        }
    }

    // //get all images based on category when category button is clicked
    // $(document).on("click", ".category_button", function (e) {
    //     let str = $(this).attr("id");
    //     let res = str.substr(16);
    //     $("#searched_item_found").remove();
    //     $(".specific_category_items_holder").fadeOut(0);
    //     $("#category_" + res).css("display", "grid");
        
    // });

    $(document).on("click", ".category_button", function () {
        let str = $(this).attr("id");
        let res = str.substr(16);

        // Hide all category items
        $(".specific_category_items_holder").fadeOut(0);

        // Show selected category items
        $("#category_" + res).css("display", "grid");

        // Remove 'active' from all category buttons
        $(".category_button").removeClass("active");

        // Add 'active' to clicked button
        $(this).addClass("active");
    });

		// hide empty category
	    $(document).ready(function () {
			$(".category_button").each(function () {
				let str = $(this).attr("id");
				let res = str.substr(16);

				// Check items under this category
				if ($("#category_" + res).find(".single_item").length === 0) {
					$(this).closest("li").remove(); // completely remove button
				}
			});
		});

    $(document).on("click", ".single_item", function () {
        //focus search field
        focusSearch();
        //add for vr01 and clear previous cart before new addd
        $(".prom_txt").html('');
        let modal_item_is_offer = '';
        $("#modal_item_is_offer").html(modal_item_is_offer);
        $("#modal_discount").removeAttr("readonly");
        $("#modal_item_price").html(0);
        let add_to_cart = $("#add_to_cart_txt").val();
        $("#add_to_cart").html(add_to_cart);
        reset_on_modal_close_or_add_to_cart();
        let selected_order_type_object = $(".main_top").find(
            "button[data-selected=selected]");
        //get item/menu price from modal
        let item_price = 0;
        let item_id = $(this).attr("id").substr(5);
        if (selected_order_type_object.length > 0) {
            //vr01
            let is_variation = ($(this).attr('data-is_variation'));
            let parent_id = ($(this).attr('data-parent_id'));
            let item_name = getPlanText($(this).find(".item_name").html());
            let when_clicking_on_item_in_pos = Number($("#when_clicking_on_item_in_pos").val());
            let status_continue = true;
            let if_exist = Number($("#item_quantity_table_" + item_id).html());

            if (when_clicking_on_item_in_pos == 2) {
                if (if_exist && if_exist != undefined) {
                    $("#increase_item_table_" + item_id).click();
                    //do calculation on table
                    status_continue = false;
                }
            } else if (when_clicking_on_item_in_pos == 1) {
                if (if_exist && if_exist != undefined) {
                    $("#edit_item_" + item_id).click();
                    //do calculation on table
                    status_continue = false;
                }
            }
            //get tax information
            let tax_information = "";
            /*added_new_zakir*/
            let item_type = '';
            /*end_added_new_zakir*/
            // iterate over each item in the array
            let product_type = 1;
            let product_comb = '';
            let is_promo = '';
            let promo_type = '';
            let string_text = '';
            let discount = 0;
            let get_food_menu_id = 0;
            let qty = 0;
            let get_qty = 0;
            let modal_item_name_row = '';

            for (let i = 0; i < window.items.length; i++) {
                // look for the entry with a matching `code` value
                if (items[i].item_id == item_id) {
                    tax_information = items[i].tax_information;
                    /*added_new_zakir*/
                    product_type = Number(items[i].product_type);
                    product_comb = (items[i].product_comb);
                    is_promo = (items[i].is_promo);
                    promo_type = (items[i].promo_type);
                    string_text = (items[i].string_text);
                    discount = (items[i].discount);
                    get_food_menu_id = (items[i].get_food_menu_id);
                    qty = (items[i].qty);
                    get_qty = (items[i].get_qty);
                    modal_item_name_row = (items[i].modal_item_name_row);
                    /*end_added_new_zakir*/
                }
            }

            if (status_continue == true) {
                if (is_variation == "Yes") {
                    $("#is_variation_product").html(100);
                    openProductEditModal(item_id, item_name, item_id);
                } else if (is_promo == "Yes") {
                    $("#is_variation_product").html(0);
                    $("#modal_item_is_offer").html('Yes');
                    if (selected_order_type_object.attr("data-id") == "dine_in_button") {
                        item_price = parseFloat($(this).attr('data-price')).toFixed(ir_precision);
                    } else if (selected_order_type_object.attr("data-id") == "take_away_button") {
                        item_price = parseFloat($(this).attr('data-price_take')).toFixed(ir_precision);
                    } else if (selected_order_type_object.attr("data-id") == "delivery_button") {
                        let arr_item_details = search_by_menu_id(item_id, window.items);
                        let check_dl_person = 1;
                        item_price = parseFloat($(this).attr('data-price_delivery')).toFixed(ir_precision);
                        $(".custom_li").each(function () {
                            let row_div = $(this).attr("data-row");
                            if ($("#myCheckbox" + row_div).is(":checked")) {
                                let price_delivery_details_tmp = arr_item_details[0].price_delivery_details.split("|||");

                                for (let x = 0; x < price_delivery_details_tmp.length; x++) {
                                    let price_delivery_details_tmp_separate = price_delivery_details_tmp[x].split("||");
                                    if ("index_" + row_div == price_delivery_details_tmp_separate[0]) {
                                        if (Number(price_delivery_details_tmp_separate[1])) {
                                            item_price = parseFloat(price_delivery_details_tmp_separate[1]).toFixed(ir_precision);
                                        }
                                    }
                                }
                            }

                        });

                    }

                    openProductEditModalForPromo(string_text, item_name, item_id, promo_type, discount, get_food_menu_id, qty, get_qty, item_price, modal_item_name_row);
                } else {
                    if (selected_order_type_object.attr("data-id") == "dine_in_button") {
                        item_price = parseFloat($(this).attr('data-price')).toFixed(ir_precision);
                    } else if (selected_order_type_object.attr("data-id") == "take_away_button") {
                        item_price = parseFloat($(this).attr('data-price_take')).toFixed(ir_precision);
                    } else if (selected_order_type_object.attr("data-id") == "delivery_button") {
                        let arr_item_details = search_by_menu_id(item_id, window.items);
                        let check_dl_person = 1;
                        item_price = parseFloat($(this).attr('data-price_delivery')).toFixed(ir_precision);
                        $(".custom_li").each(function () {
                            let row_div = $(this).attr("data-row");
                            if ($("#myCheckbox" + row_div).is(":checked")) {
                                let price_delivery_details_tmp = arr_item_details[0].price_delivery_details.split("|||");
                                for (let x = 0; x < price_delivery_details_tmp.length; x++) {
                                    let price_delivery_details_tmp_separate = price_delivery_details_tmp[x].split("||");
                                    if ("index_" + row_div == price_delivery_details_tmp_separate[0]) {
                                        if (Number(price_delivery_details_tmp_separate[1])) {
                                            item_price = parseFloat(price_delivery_details_tmp_separate[1]).toFixed(ir_precision);
                                        }
                                    }

                                }


                            }

                        });
                    }

                    let row_number = $("#modal_item_row").html();
                    //get item/menu id from modal

                    let stock_not_available = $("#stock_not_available").val();
                    let qty_current = 1;
                    $(".single_order_column").each(function () {
                        let qty_counter = Number($(this).find('#item_quantity_table_' + item_id).html());
                        if (qty_counter && qty_counter != "NAN") {
                            qty_current += qty_counter;
                        }
                    });

                    //get item/menu name from modal


                    //get item/menu vat percentage from modal
                    let item_vat_percentage = $(this).find(".item_vat_percentage").html();
                    item_vat_percentage =
                        item_vat_percentage == "" ? "0.00" : item_vat_percentage;
                    //discount amount from modal
                    let item_discount_amount = parseFloat(0).toFixed(ir_precision);

                    //discount input value of modal
                    let discount_input_value = '';



                    //get item/menu price from modal without discount
                    let item_total_price_without_discount =
                        parseFloat(item_price).toFixed(ir_precision);

                    tax_information = IsJsonString(tax_information)
                        ? JSON.parse(tax_information)
                        : "";
                    if (tax_information.length > 0) {
                        for (let k in tax_information) {
                            tax_information[k].item_vat_amount_for_unit_item = (
                                (parseFloat(item_price) *
                                    parseFloat(tax_information[k].tax_field_percentage)) /
                                parseFloat(100)
                            ).toFixed(ir_precision);
                            tax_information[k].item_vat_amount_for_all_quantity = (
                                parseFloat(tax_information[k].item_vat_amount_for_unit_item) *
                                parseFloat(1)
                            ).toFixed(ir_precision);
                        }
                    }

                    //get vat amount for specific item/menu
                    let item_vat_amount_for_unit_item = (
                        (parseFloat(item_price) * parseFloat(item_vat_percentage)) /
                        parseFloat(100)
                    ).toFixed(ir_precision);

                    //get item/menu total price from modal
                    let item_total_price = parseFloat(item_price).toFixed(ir_precision);

                    //get item/menu quantity from modal
                    let item_quantity = "1";

                    //get vat amount for specific item/menu
                    let item_vat_amount_for_all_quantity = (
                        parseFloat(item_vat_amount_for_unit_item) * parseFloat(item_quantity)
                    ).toFixed(ir_precision);

                    //get selected modifiers
                    let selected_modifiers = "";
                    let selected_modifiers_id = "";
                    let selected_modifiers_price = "";

                    //get modifiers price
                    let modifiers_price = parseFloat(0).toFixed(ir_precision);

                    //get note
                    let note = "";

                    //construct div
                    let draw_table_for_order = "";

                    draw_table_for_order +=
                        row_number > 0
                            ? ""
                            : '<div data-cp_type="1" class="single_order customer_panel" data-id="' + item_id + '" id="order_for_item_' + item_id + '">';
                    draw_table_for_order += '<div class="first_portion">';
                    draw_table_for_order +=
                        '<span class="item_previous_id ir_display_none" id="item_previous_id_table' +
                        item_id +
                        '"></span>';
                    draw_table_for_order +=
                        '<span class="item_cooking_done_time ir_display_none" id="item_cooking_done_time_table' +
                        item_id +
                        '"></span>';
                    draw_table_for_order +=
                        '<span class="item_cooking_start_time ir_display_none" id="item_cooking_start_time_table' +
                        item_id +
                        '"></span>';
                    draw_table_for_order +=
                        '<span class="item_cooking_status ir_display_none" id="item_cooking_status_table' +
                        item_id +
                        '"></span>';
                    draw_table_for_order +=
                        '<span class="item_type ir_display_none" id="item_type_table' +
                        item_id +
                        '">' +
                        item_type +
                        '</span>';
                    draw_table_for_order +=
                        '<span class="item_vat ir_display_none" id="item_vat_percentage_table' +
                        item_id +
                        '">' +
                        JSON.stringify(tax_information) +
                        "</span>";
                    draw_table_for_order +=
                        '<span class="item_discount ir_display_none" id="item_discount_table' +
                        item_id +
                        '">' +
                        item_discount_amount +
                        "</span>";
                    draw_table_for_order +=
                        '<span class="item_price_without_discount ir_display_none" id="item_price_without_discount_' +
                        item_id +
                        '">' +
                        item_total_price_without_discount +
                        "</span>";
                    $("#is_variation_product").html(search_by_menu_id_getting_parent_id(item_id, window.items));
                    draw_table_for_order +=
                        '<div class="single_order_column first_column cart_item_counter  arabic_text_left fix" data-id="' + item_id + '"><i  data-parent_id="' + search_by_menu_id_getting_parent_id(item_id, window.items) + '"   class="fas fa-pencil-alt edit_item txt_5" id="edit_item_' +
                        item_id +
                        '"></i> <span class="arabic_text_left 1_cp_name_' + item_id + '"  id="item_name_table_' +
                        item_id +
                        '">' +
                        item_name +
                        "</span></div>";
                    draw_table_for_order +=
                        '<div class="single_order_column second_column fix">' +
                        currency +
                        ' <span class="1_cp_price_' + item_id + '" id="item_price_table_' +
                        item_id +
                        '">' +
                        item_price +
                        "</span></div>";
                    draw_table_for_order +=
                        '<div class="single_order_column third_column fix"><i class="fal fa-minus decrease_item_table txt_5" id="decrease_item_table_' +
                        item_id +
                        '"></i> <span data-is_kot_print="1" class="qty_item_custom 1_cp_qty_' + item_id + '" id="item_quantity_table_' +
                        item_id +
                        '">' +
                        item_quantity +
                        '</span> <i class="fal fa-plus increase_item_table txt_5" id="increase_item_table_' +
                        item_id +
                        '"></i></div>';
                    draw_table_for_order +=
                        '<div class="single_order_column forth_column fix"><input type="" name="" placeholder="Amt or %" class="1_cp_discount_' + item_id + ' discount_cart_input" id="percentage_table_' +
                        item_id +
                        '" value="' +
                        discount_input_value +
                        '" disabled></div>';
                    draw_table_for_order +=
                        '<div class="single_order_column fifth_column">' +
                        currency +
                        ' <span class="1_cp_total_' + item_id + '" id="item_total_price_table_' +
                        item_id +
                        '">' +
                        item_total_price +
                        "</span> <i  data-id='" +
                        item_id +
                        "'  class='fal fa-times removeCartItem'></i></div>";
                    draw_table_for_order += "</div>";
                    if (product_type == 2 && product_comb != "") {
                        draw_table_for_order += '<div class="third_portion fix">';
                        draw_table_for_order +=
                            '<div  data-cp_type="33" class="customer_panel_child_' + item_id + ' single_order_column first_column cart_item_counter arabic_text_left fix modifier_txt_custom" data-id="' + item_id + '">' +
                            combo_txt +
                            ': <span id="item_combo_table_' +
                            item_id +
                            '">' +
                            product_comb +
                            "</span></div>";
                        draw_table_for_order += "</div>";
                    }

                    if (selected_modifiers != "") {
                        draw_table_for_order +=
                            '<div data-id="' + item_id + '" class="second_portion fix">';
                        draw_table_for_order +=
                            '<span id="item_modifiers_id_table_' +
                            item_id +
                            '" class="ir_display_none">' +
                            selected_modifiers_id +
                            "</span>";
                        draw_table_for_order +=
                            '<span id="item_modifiers_price_table_' +
                            item_id +
                            '" class="ir_display_none">' +
                            selected_modifiers_price +
                            "</span>";
                        draw_table_for_order +=
                            '<div class="single_order_column first_column cart_item_counter  arabic_text_left fix"  data-id="' + item_id + '"><span class="modifier_txt_custom" id="item_modifiers_table_' +
                            item_id +
                            '">' +
                            selected_modifiers +
                            "</span></div>";
                        draw_table_for_order +=
                            '<div class="single_order_column fifth_column fix">' +
                            currency +
                            ' <span id="item_modifiers_price_table_' +
                            item_id +
                            '">' +
                            modifiers_price +
                            "</span></div>";
                        draw_table_for_order += "</div>";
                    }
                    if (note != "") {
                        draw_table_for_order += '<div class="third_portion fix">';
                        draw_table_for_order +=
                            '<div class="single_order_column first_column cart_item_counter  arabic_text_left fix modifier_txt_custom"  data-id="' + item_id + '">' +
                            note_txt +
                            ': <span id="item_note_table_' +
                            item_id +
                            '">' +
                            note +
                            "</span></div>";
                        draw_table_for_order += "</div>";
                    }

                    draw_table_for_order += row_number > 0 ? "" : "</div>";

                    //add to top if new it or update the row
                    if (row_number > 0) {
                        $(
                            ".order_holder .single_order[data-single-order-row-no=" +
                            row_number +
                            "]"
                        ).empty();
                        $(
                            ".order_holder .single_order[data-single-order-row-no=" +
                            row_number +
                            "]"
                        ).html(draw_table_for_order);
                    } else {
                        $(".order_holder").prepend(draw_table_for_order);
                    }
                    if (waiter_app_status == "Yes") {
                        $.notifyBar({ cssClass: "success", html: item_add_success });
                    } else {
                        if (s_width <= 700) {
                            $.notifyBar({ cssClass: "success", html: item_add_success });
                        }
                    }

                    reset_on_modal_close_or_add_to_cart();
                    // return false;
                    //do calculation on table
                    do_addition_of_item_and_modifiers_price();
                }
            }

        } else {
            $("#last_click_item_id").val(item_id);
            $("#order_type_modal").addClass("active");
            $(".pos__modal__overlay").fadeIn(200);
            return false;
        }
    });

    $(document).on("click", "#combo_item", function () {
        $(".specific_category_items_holder").fadeOut(0);
        let foundItems = searchItemAndConstructGallery("");
        let searched_category_items_to_show =
            '<div id="searched_item_found" class="specific_category_items_holder 003">';

        for (let key in foundItems) {
            if (foundItems.hasOwnProperty(key)) {
                if (foundItems[key].parent_id == '0' && foundItems[key].product_type == 2) {
                    searched_category_items_to_show +=
                        '<div class="single_item animate__animated animate__flipInX"  data-price="' + foundItems[key].price + '"  data-price_take="' + foundItems[key].price_take + '"   data-is_variation="' + foundItems[key].is_variation + '"  data-parent_id="' + foundItems[key].parent_id + '"   data-price_delivery="' + foundItems[key].price_delivery + '"  id="item_' +
                        foundItems[key].item_id +
                        '">';
                    // searched_category_items_to_show +=
                    //   '<img src="' + foundItems[key].image + '" alt="" width="141">';
                    searched_category_items_to_show +=
                        '<p class="item_name" data-tippy-content="' +
                        foundItems[key].item_name +
                        '">' +
                        foundItems[key].item_name +
                        "</p>";
                    searched_category_items_to_show +=
                        '<p class="item_price">' +
                        price_txt +
                        ": " +
                        foundItems[key].price +
                        "</p>";
                    searched_category_items_to_show += "</div>";
                }
            }
        }
        searched_category_items_to_show += "<div>";
        $("#searched_item_found").remove();
        $(".specific_category_items_holder").fadeOut(0);
        $(".category_items").prepend(searched_category_items_to_show);
        if (food_menu_tooltip == "show") {
            tippy(".item_name", {
                placement: "bottom-start",
            });
        }
    }
    );
    $(document).on("click", "#increase_item_modal", function (e) {
        //get recent item price
        let current_item_price_modal = parseFloat(
            $("#modal_item_price").html()
        ).toFixed(ir_precision);
        //get current item quantity
        let current_item_quantity = Number($("#item_quantity_modal").val());
        //increase quantity
        current_item_quantity++;
        //update quantity
        $("#item_quantity_modal").val(current_item_quantity);

        //update all total with item price
        update_all_total_price();
    });

    //get all images based on category when category button is clicked
    $(document).on("click", ".veg_bev_item", function (e) {
        let status = $(this).attr("data-status");
        $(".specific_category_items_holder").fadeOut(0);
        let foundItems = searchItemAndConstructGallery("");
        let searched_category_items_to_show =
            '<div id="searched_item_found" class="specific_category_items_holder 003">';
        for (let key in foundItems) {
            if (foundItems.hasOwnProperty(key)) {
                if (status == "veg" && foundItems[key].veg_item_status == "yes") {
                    if (foundItems[key].parent_id == '0') {
                        searched_category_items_to_show +=
                            '<div class="single_item animate__animated animate__flipInX"   data-price="' + foundItems[key].price + '"  data-price_take="' + foundItems[key].price_take + '"    data-is_variation="' + foundItems[key].is_variation + '"  data-parent_id="' + foundItems[key].parent_id + '"    data-price_delivery="' + foundItems[key].price_delivery + '"  id="item_' +
                            foundItems[key].item_id +
                            '">';
                        // searched_category_items_to_show +=
                        //  '<img src="' + foundItems[key].image + '" alt="" width="141">';
                        searched_category_items_to_show +=
                            '<p class="item_name" data-tippy-content="' +
                            foundItems[key].item_name +
                            '">' +
                            foundItems[key].item_name + "</p>";
                        searched_category_items_to_show +=
                            '<p class="item_price">' +
                            price_txt +
                            ": " +
                            foundItems[key].price +
                            "</p>";

                        searched_category_items_to_show += "</div>";
                    }
                } else if (
                    status == "bev" &&
                    foundItems[key].beverage_item_status == "yes"
                ) {
                    if (foundItems[key].parent_id == '0') {
                        searched_category_items_to_show +=
                            '<div class="single_item animate__animated animate__flipInX"  data-price="' + foundItems[key].price + '"  data-price_take="' + foundItems[key].price_take + '"    data-is_variation="' + foundItems[key].is_variation + '"  data-parent_id="' + foundItems[key].parent_id + '"   data-price_delivery="' + foundItems[key].price_delivery + '"  id="item_' +
                            foundItems[key].item_id +
                            '">';
                        // searched_category_items_to_show +=
                        //    '<img src="' + foundItems[key].image + '" alt="" width="141">';
                        searched_category_items_to_show +=
                            '<p class="item_name" data-tippy-content="' +
                            foundItems[key].item_name +
                            '">' +
                            foundItems[key].item_name +
                            "</p>";
                        searched_category_items_to_show +=
                            '<p class="item_price">' +
                            price_txt +
                            ": " +
                            foundItems[key].price +
                            "</p>";

                        searched_category_items_to_show += "</div>";
                    }
                }
            }
        }
        searched_category_items_to_show += "<div>";
        $("#searched_item_found").remove();
        $(".specific_category_items_holder").fadeOut(0);
        $(".category_items").prepend(searched_category_items_to_show);

        if (food_menu_tooltip == "show") {
            tippy(".item_name", {
                placement: "bottom-start",
            });
        }

    });

    //when anything is searched
    $(document).on("keyup", "#search", function (e) {
        // if (e.keyCode == 13) {
        let searched_string = $(this).val().trim();
        if (searched_string) {
            let foundItems = searchItemAndConstructGallery(searched_string);
            let searched_category_items_to_show =
                '<div id="searched_item_found" class="specific_category_items_holder 002">';
            for (let key in foundItems) {
                if (foundItems.hasOwnProperty(key)) {
                    if (foundItems[key].parent_id == '0') {
                        searched_category_items_to_show +=
                            '<div class="single_item animate__animated animate__flipInX"  data-price="' + foundItems[key].price + '"  data-price_take="' + foundItems[key].price_take + '"    data-is_variation="' + foundItems[key].is_variation + '"  data-parent_id="' + foundItems[key].parent_id + '"   data-price_delivery="' + foundItems[key].price_delivery + '"  id="item_' +
                            foundItems[key].item_id +
                            '">';
                        // searched_category_items_to_show +=
                        //     '<img src="' + foundItems[key].image + '" alt="" width="141">';
                        searched_category_items_to_show +=
                            '<p class="item_name" data-tippy-content="' +
                            foundItems[key].item_name +
                            '">' +
                            foundItems[key].item_name +
                            "</p>";
                        searched_category_items_to_show +=
                            '<p class="item_price">' +
                            price_txt +
                            ": " +
                            foundItems[key].price +
                            "</p>";
                        searched_category_items_to_show +=
                            '<span class="item_vat_percentage ir_display_none">' +
                            foundItems[key].vat_percentage +
                            "</span>";
                        searched_category_items_to_show += "</div>";
                    }
                }
            }
            searched_category_items_to_show += "<div>";
            $("#searched_item_found").remove();
            $(".specific_category_items_holder").fadeOut(0);
            $(".category_items").prepend(searched_category_items_to_show);
            // }
            if (food_menu_tooltip == "show") {
                tippy(".item_name", {
                    placement: "bottom-start",
                });
            }
        } else {
            show_all_items();
        }
    });
    $(document).on(
        "click",
        ".dine_in_button,.take_away_button,.delivery_button",
        function (e) {
            let total_items_in_cart = $(".order_holder .single_order").length;
            let this_action = $(this);

            if (total_items_in_cart > 0) {
                swal(
                    {
                        title: warning + "!",
                        text: order_type_changing_alert,
                        confirmButtonColor: "#3c8dbc",
                        confirmButtonText: ok,
                        showCancelButton: true,
                    },
                    function () {
                        $(".order_table_holder .order_holder").empty();
                        clearFooterCartCalculation();

                        $("#dine_in_button").css("border", "unset");
                        $("#take_away_button").css("border", "unset");
                        $("#delivery_button").css("border", "unset");

                        //set default delivery or service charge modal
                        let service_amount = $("#service_amount").val();
                        let delivery_amount = $("#delivery_amount").val();
                        $("#delivery_charge").val('');
                        $("#charge_type").val('service').change();

                        $(".main_top").find("button").attr("data-selected", "unselected");
                        this_action.attr("data-selected", "selected").addClass("selected__btn");
                        $("#table_button").attr("disabled", false);

                        if (this_action.attr("data-id") == "dine_in_button") {
                            $("#delivery_charge").val(service_amount);
                            $("#charge_type").val('service').change();
                            $(".set_quick_action").removeClass("set_quick_action_active");
                            $(".get_area_table").eq(0).click();

                        } else if (this_action.attr("data-id") == "take_away_button") {
                            $("#table_button").attr("disabled", true);
                            $(".single_table_div[data-table-checked=checked]").attr(
                                "data-table-checked",
                                "unchecked"
                            );
                            // $('.single_table_div[data-table-checked=checked]').css('background-color', 'red');
                        } else if (this_action.attr("data-id") == "delivery_button") {
                            /*delivery partner*/
                            let delivery_partner = Number($("#delivery_partner").val());
                            if (delivery_partner) {
                                $("#show_delivery_partner").addClass("active");
                                $(".pos__modal__overlay").fadeIn(200);
                            }

                            $("#delivery_charge").val(delivery_amount);
                            $("#charge_type").val('delivery').change();

                            $("#table_button").attr("disabled", true);
                            $(".single_table_div[data-table-checked=checked]").attr(
                                "data-table-checked",
                                "unchecked"
                            );
                        }
                        do_addition_of_item_and_modifiers_price();
                    }
                );
            } else {
                $("#dine_in_button").css("border", "unset");
                $("#take_away_button").css("border", "unset");
                $("#delivery_button").css("border", "unset");

                //set default delivery or service charge modal
                let service_amount = $("#service_amount").val();
                let delivery_amount = $("#delivery_amount").val();
                $("#delivery_charge").val('');
                $("#charge_type").val('service').change();

                $(".main_top").find("button").attr("data-selected", "unselected");
                $(this).attr("data-selected", "selected").addClass("selected__btn");
                $("#table_button").attr("disabled", false);

                if ($(this).attr("data-id") == "dine_in_button") {
                    $("#delivery_charge").val(service_amount);
                    $("#charge_type").val('service').change();
                    $(".set_quick_action").removeClass("set_quick_action_active");
                    $(".get_area_table").eq(0).click();
                } else if ($(this).attr("data-id") == "take_away_button") {
                    $("#table_button").attr("disabled", true);
                    $(".single_table_div[data-table-checked=checked]").attr(
                        "data-table-checked",
                        "unchecked"
                    );
                    // $('.single_table_div[data-table-checked=checked]').css('background-color', 'red');
                } else if ($(this).attr("data-id") == "delivery_button") {
                    let delivery_partner = Number($("#delivery_partner").val());
                    if (delivery_partner) {
                        $("#show_delivery_partner").addClass("active");
                        $(".pos__modal__overlay").fadeIn(200);
                    }

                    $("#delivery_charge").val(delivery_amount);
                    $("#charge_type").val('delivery').change();

                    $("#table_button").attr("disabled", true);
                    $(".single_table_div[data-table-checked=checked]").attr(
                        "data-table-checked",
                        "unchecked"
                    );
                }
                do_addition_of_item_and_modifiers_price();
            }
        }
    );

    function do_addition_of_item_and_modifiers_price() {
        //set all hidden discount amount and original item price
        set_all_hidden_item_discount_amount();
        //set visible discounted item price to table
        set_all_visible_discounted_item_price();

        //set total discount amount of items
        set_total_items_discount_for_subtotal();

        //set all hidden discount amount and original item price
        set_all_items_modifiers_amount();

        let total_of_all_items_and_modifiers = get_total_of_all_items_and_modifiers();

        //get total items in cart
        let total_items_in_cart = $(".order_holder .single_order").length;
        //set row number for every single item
        $(".order_holder .single_order").each(function (i, obj) {
            $(this).attr("data-single-order-row-no", i + 1);
        });
        let total_items_in_cart_with_quantity = 0;
        let qty_div = $(".single_order .first_portion").find('.qty_item_custom');
        qty_div.each(function (i, obj) {
            total_items_in_cart_with_quantity += parseInt($(this).html());
        });

        //set total items in cart to view
        $("#total_items_in_cart").html(total_items_in_cart);
        $("#total_items_in_cart_with_quantity").html(total_items_in_cart_with_quantity);
        //set sub total
        $("#sub_total").html(total_of_all_items_and_modifiers);
        $("#sub_total_show").html(total_of_all_items_and_modifiers);

        //get the value of the delivery charge amount

        let delivery_charge_amount = 0;
        let tips_amount = 0;

        let selected_btn_value = "";
        let countable_d_c = "no";

        $(".selected__btn_c").each(function () {
            let this_id_name = $(this).attr("id");
            let this_selected_name = $(this).attr("data-selected");
            let charge_type_custom = $("#charge_type").val();

            if (this_selected_name == "selected") {
                if (
                    charge_type_custom == "delivery" &&
                    this_id_name != "take_away_button" &&
                    this_id_name != "dine_in_button"
                ) {
                    countable_d_c = "yes";
                }
                if (
                    charge_type_custom == "service" &&
                    this_id_name != "take_away_button" &&
                    this_id_name != "delivery_button"
                ) {
                    countable_d_c = "yes";
                }
            }
        });

        let waiter_app_status1 = $("#waiter_app_status").val();
        if (waiter_app_status1 == "Yes") {
            countable_d_c = "yes";
        }
        let sub_total_show = Number($("#sub_total_show").html());

        if ($("#delivery_charge").val() != "" && countable_d_c == "yes") {
            delivery_charge_amount = get_particular_item_discount_amount(
                $("#delivery_charge").val(),
                sub_total_show
            );
            $("#show_charge_amount").html(
                Number(delivery_charge_amount).toFixed(ir_precision)
            );
        } else {
            $("#show_charge_amount").html(Number(0).toFixed(ir_precision));
        }

        if ($("#tips_amount").val() != "") {
            tips_amount = get_particular_item_discount_amount(
                $("#tips_amount").val(),
                sub_total_show
            );
            $("#show_tips_amount").html(
                Number(tips_amount).toFixed(ir_precision)
            );
        } else {
            $("#show_tips_amount").html(Number(0).toFixed(ir_precision));
        }

        //get subtotal amount
        let sub_total_amount = $("#sub_total").html();

        let sub_total_discount_amount = 0;
        //get subtotal discount amount
        if ($("#sub_total_discount").val() != "") {
            sub_total_discount_amount = $("#sub_total_discount").val();
            let tmt_value_sub_total = sub_total_discount_amount.split("%");
            if (tmt_value_sub_total[1] == "") {
                $("#show_discount_amount").html(sub_total_discount_amount);
            } else {
                $("#show_discount_amount").html(
                    Number(sub_total_discount_amount).toFixed(ir_precision)
                );
            }
        } else {
            $("#show_discount_amount").html(Number(0).toFixed(ir_precision));
        }

        let sub_total_discount_value = $("#sub_total_discount").val();

        //check wether value is valid or not
        remove_last_two_digit_with_percentage(
            sub_total_discount_amount,
            $("#sub_total_discount")
        );
        sub_total_discount_amount = get_sub_total_discount_amount(
            sub_total_discount_amount,
            sub_total_amount
        );

        //if sub total discount amount is greater than subtotal then make it blank
        if (parseFloat(sub_total_discount_amount) > parseFloat(sub_total_amount)) {
            $("#sub_total_discount").val("");
            do_addition_of_item_and_modifiers_price();
            return false;
        }
        //get total item discount amount
        let total_item_discount_amount = parseFloat(
            $("#total_item_discount").html()
        ).toFixed(ir_precision);

        //get all discount of table
        let total_discount = (
            parseFloat(sub_total_discount_amount) +
            parseFloat(total_item_discount_amount)
        ).toFixed(ir_precision);

        //set sub total discount amount
        $("#sub_total_discount_amount").html(sub_total_discount_amount);

        //set sub total amount after discount in a hidden field

        let discounted_sub_total_amount = (
            parseFloat(sub_total_amount) - parseFloat(sub_total_discount_amount)
        ).toFixed(ir_precision);
        $("#discounted_sub_total_amount").html(discounted_sub_total_amount);

        //get vat amount

        let vat_amount = isTaxEnabled === true ? get_total_vat() : null;
        let total_vat_section_to_show = "";
        let html_modal = "";
        let total_tax_custom = 0;
        $.each(vat_amount, function (key, value) {
            let row_id = 1;
            let key_value = key;
            total_vat_section_to_show +=
                '<span class="tax_field" id="tax_field_' +
                row_id +
                '">' +
                key_value +
                "</span>: " +
                currency +
                ' <span class="tax_field_amount" id="tax_field_amount_' +
                row_id +
                '">' +
                value +
                "</span><br/>";

            html_modal +=
                "<tr class='tax_field' data-tax_field_id='" +
                row_id +
                "'  data-tax_field_type='" +
                key_value +
                "'  data-tax_field_amount='" +
                value +
                "'>\n" +
                "                            <td>" +
                key_value +
                "</td>\n" +
                "                            <td>" +
                value +
                "</td>\n" +
                "                        </tr>";
            total_tax_custom += parseFloat(value);
        });

        if (total_tax_custom) {
            $("#show_vat_modal").html(total_tax_custom.toFixed(ir_precision));
        } else {
            $("#show_vat_modal").html(Number(0).toFixed(ir_precision));
        }
        $("#tax_row_show").html(html_modal);
        //set vat amount to view
        // $('#all_items_vat').html(vat_amount);
        $("#all_items_vat").html(total_vat_section_to_show);

        //set total discount
        $("#all_items_discount").html(total_discount);

        //calculate total payable amount
        let total_payable_to_show = "";
        let total_vat_amount = 0;
        let tax_type = Number($("#tax_type").val());

        if (tax_type == 1) {
            $.each(vat_amount, function (key, value) {
                let vat_tmp = 0;
                if (value && value != "NaN") {
                    vat_tmp = value;
                }
                total_vat_amount = (
                    parseFloat(total_vat_amount) + parseFloat(vat_tmp)
                ).toFixed(ir_precision);
            });
        }
        let total_payable = (
            parseFloat(discounted_sub_total_amount) +
            parseFloat(total_vat_amount) +
            parseFloat(delivery_charge_amount) +
            parseFloat(tips_amount)
        ).toFixed(ir_precision);

        //set total payable amount to view
        let rounding_value = gettingRoundingAmount(total_payable);

        let rounding_txt = '';
        let rounding_txt_value = (Number(rounding_value[2])).toFixed(ir_precision);


        if (Number(rounding_value[2]) > 0) {
            rounding_txt = "+" + (Number(rounding_value[2])).toFixed(ir_precision);
        }

        $("#rounding_amount_hidden").val(Number(rounding_txt_value).toFixed(ir_precision));
        $("#rounding_amount").html(rounding_txt);
        $("#total_payable").html(Number(rounding_value[0]).toFixed(ir_precision));

        if (checkInternetConnection()) {
            put_cart_content();
        }
    }

    function reset_on_modal_close_or_add_to_cart() {
        $("#item_modal").removeClass("active");
        $(".pos__modal__overlay").fadeOut(300);
        $("#item_quantity_modal").val("1");
        $("#modal_modifier_price_variable").html("0");
        $("#modal_modifiers_unit_price_variable").html("0");
        $("#modal_item_note").val("");
        $("#modal_discount").val("");
        $("#modal_item_price_variable_without_discount").html("0");
        $("#modal_item_vat_percentage").html("0");
        $("#modal_item_row").html("0");
        $("#modal_discount_amount").html("0");
        $("#delivery_charge").val('');
        $("#charge_type").val('service').change();
    }

    function clearFooterCartCalculation() {
        $("#sub_total_show").html(Number(0).toFixed(ir_precision));
        $("#sub_total").html(Number(0).toFixed(ir_precision));
        $("#total_item_discount").html(Number(0).toFixed(ir_precision));
        $("#discounted_sub_total_amount").html(Number(0).toFixed(ir_precision));
        $("#sub_total_discount").val("");
        $("#sub_total_discount1").val("");
        $("#sub_total_discount_amount").html(Number(0).toFixed(ir_precision));
        $("#all_items_vat").html(Number(0).toFixed(ir_precision));
        $("#all_items_discount").html(Number(0).toFixed(ir_precision));
        $("#total_items_in_cart").html("0");
        $("#total_items_in_cart_with_quantity").html("0");
        $("#total_payable").html(Number(0).toFixed(ir_precision));
        $("#show_vat_modal").html(Number(0).toFixed(ir_precision));
        $("#show_discount_amount").html(Number(0).toFixed(ir_precision));
        $("#show_charge_amount").html(Number(0).toFixed(ir_precision));
        $("#show_tips_amount").html(Number(0).toFixed(ir_precision));
        $("#tips_amount").val('');
        $("#self_order_table_person").val('');
        $("#tax_row_show").empty();
        $("#place_edit_order").html(place_order);
        //focus search field
        focusSearch();

        //set default order type
        let waiter_app_status = $("#waiter_app_status").val();
        let default_order_type = Number($("#default_order_type").val());
        let is_self_order = $("#is_self_order").val();
        let is_online_order = $("#is_online_order").val();
        if (is_self_order == "Yes") {
            default_order_type = 1;
        }
        if (waiter_app_status == "Yes") {
            default_order_type = 1;
        }


        $(".main_top").find("button").attr("data-selected", "unselected");
        if (default_order_type) {
            $(".selected__btn_c").each(function () {
                let this_action = $(this);
                if ((this_action.attr("data-id") == "dine_in_button") && default_order_type == 1) {
                    this_action.attr("data-selected", "selected");
                } else if ((this_action.attr("data-id") == "take_away_button") && default_order_type == 2) {
                    this_action.attr("data-selected", "selected");
                } else if ((this_action.attr("data-id") == "delivery_button") && default_order_type == 3) {
                    this_action.attr("data-selected", "selected");
                }
            });
        }
        let default_customer = Number($("#default_customer_hidden").val());
        let default_waiter = Number($("#default_waiter_hidden").val());
        //set default customer
        if (is_online_order != "Yes") {
            if (default_customer) {
                $("#walk_in_customer").val(default_customer).change();
            } else {
                $("#walk_in_customer").val(1).change();
            }
        }

        //set default customer
        if (default_waiter) {
            $("#select_waiter").val(default_waiter).change();
        } else {
            $("#select_waiter").val('').change();
        }
    }

    function getPlanText(txt) {
        let new_str = txt.replace(/'/g, " ").replace(/"/g, " ");
        return new_str;
    }

    function IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    function set_all_hidden_item_discount_amount() {
        $(".single_order .first_portion .fifth_column span").each(function (
            i,
            obj
        ) {
            let this_item_original_price = parseFloat(
                $(this).parent().parent().find(".item_price_without_discount").html()
            ).toFixed(ir_precision);
            let item_discount_value = $(this)
                .parent()
                .parent()
                .find(".forth_column input")
                .val();
            item_discount_value = item_discount_value != "" ? item_discount_value : 0;
            let actual_discount_amount = get_particular_item_discount_amount(
                item_discount_value,
                this_item_original_price
            );
            $(this)
                .parent()
                .parent()
                .find(".item_discount")
                .html(actual_discount_amount);
        });
    }
    function set_all_visible_discounted_item_price() {
        $(".single_order .first_portion .fifth_column span").each(function (
            i,
            obj
        ) {
            let this_item_original_price = parseFloat(
                $(this).parent().parent().find(".item_price_without_discount").html()
            ).toFixed(ir_precision);
            if (this_item_original_price == "NaN") {
                this_item_original_price = 0;
            }
            let item_discount_value = $(this)
                .parent()
                .parent()
                .find(".forth_column input")
                .val();
            item_discount_value = item_discount_value != "" ? item_discount_value : 0;
            let actual_discount_amount = get_particular_item_discount_amount(
                item_discount_value,
                this_item_original_price
            );

            let discounted_item_price = (
                parseFloat(this_item_original_price) -
                parseFloat(actual_discount_amount)
            ).toFixed(ir_precision);

            $(this)
                .parent()
                .parent()
                .find(".fifth_column span")
                .html(discounted_item_price);
        });
    }
    function get_total_of_all_items_and_modifiers() {
        //get all items total price and add
        let all_item_total_price = 0;
        let all_item_total_vat_amount = 0;
        let this_item_discount = 0;
        $(".single_order .first_portion .fifth_column span").each(function (
            i,
            obj
        ) {
            all_item_total_price = (
                parseFloat(all_item_total_price) + parseFloat($(this).html())
            ).toFixed(ir_precision);
        });

        //get all modifiers price and add
        let all_modifiers_total_price = 0;
        $(".modifier_incr_p span").each(function (i, obj) {
            all_modifiers_total_price = (parseFloat(all_modifiers_total_price) + parseFloat($(this).html())).toFixed(ir_precision);
        });

        return (parseFloat(all_item_total_price) + parseFloat(all_modifiers_total_price)).toFixed(ir_precision);
    }
    function checkTaxApply(tax) {
        let return_status = true;
        let same_or_diff_state = Number($("#same_or_diff_state").val());

        if (same_or_diff_state == 1) {
            if (tax == "CGST" || tax == "SGST") {
                return_status = true;
            } else {
                if (tax == "IGST") {
                    return_status = false;
                } else {
                    return_status = true;
                }
            }
        } else if (same_or_diff_state == 2) {
            if (tax == "IGST") {
                return_status = true;
            } else {
                if (tax == "CGST" || tax == "SGST") {
                    return_status = false;
                } else {
                    return_status = true;
                }
            }
        }
        if (tax_is_gst == "No") {
            if (tax == "CGST" || tax == "SGST" || tax == "IGST") {
                return_status = false;
            }
        }
        return return_status;
    }
    function get_total_vat() {
        let all_item_total_vat_amount = 0;
        let tax_object = {};
        let tax_name = [];
        let customer_id = $("#walk_in_customer").val();

        $(".single_order .first_portion .fifth_column span").each(function (
            i,
            obj
        ) {
            let this_item_quantity = 1;
            let this_item_price = parseFloat(
                $(this).parent().parent().find(".second_column span").html()
            ).toFixed(ir_precision);
            let item_total_price = parseFloat(
                $(this).parent().parent().find(".fifth_column span").html()
            ).toFixed(ir_precision);
            let tax_information = JSON.parse(
                $(this).parent().parent().find(".item_vat").html()
            );

            let totalTaxPercentage = tax_information.reduce((sum, tax) => sum + parseFloat(tax.tax_field_percentage || 0), 0);

            if (tax_information.length > 0) {
                for (let k in tax_information) {
                    if (tax_name.includes(tax_information[k].tax_field_name) && checkTaxApply(tax_information[k].tax_field_name)) {
                        let previous_value = tax_object["" + tax_information[k].tax_field_name];
                        let current_value = 0;
                        let tax_type = Number($("#tax_type").val());
                        if (tax_type == 1) {
                            current_value = parseFloat((parseFloat(parseFloat(tax_information[k].tax_field_percentage) * parseFloat(item_total_price)) / parseFloat(100)));
                        } else {
                            let taxAmount = totalTaxPercentage > 0 ? (parseFloat(item_total_price) * totalTaxPercentage) / (100 + totalTaxPercentage) : 0;
                            current_value = (taxAmount / 2).toFixed(ir_precision);
                        }

                        tax_object["" + tax_information[k].tax_field_name] = (parseFloat(previous_value) + Number(current_value)).toFixed(ir_precision);
                    } else {
                        if (checkTaxApply(tax_information[k].tax_field_name)) {
                            tax_name.push(tax_information[k].tax_field_name);
                            let current_value = 0;
                            let tax_type = Number($("#tax_type").val());

                            if (tax_type == 1) {
                                current_value = parseFloat((parseFloat(parseFloat(tax_information[k].tax_field_percentage) * parseFloat(item_total_price)) / parseFloat(100)));
                            } else {
                                let taxAmount = totalTaxPercentage > 0 ? (parseFloat(item_total_price) * totalTaxPercentage) / (100 + totalTaxPercentage) : 0;
                                current_value = (taxAmount / 2).toFixed(ir_precision);
                            }
                            //tax_object["" + tax_information[k].tax_field_name] = (Number(current_value)).tofixed(ir_precision);
							tax_object["" + tax_information[k].tax_field_name] = Number(current_value).toFixed(ir_precision);

                        }

                    }
                }
            }
        });
        $(".item_vat_modifier").each(function (i, obj) {
            let item_id_custom = $(this).attr("data-item_id");
            let this_item_modifer_quantity = parseFloat(
                $("#item_quantity_table_" + item_id_custom).html()
            ).toFixed(ir_precision);
            let this_item_modifier_price = parseFloat(
                $(this).attr("data-modifier_price")
            ).toFixed(ir_precision);

            let item_total_price =
                this_item_modifer_quantity * this_item_modifier_price;
            let tax_information = JSON.parse($(this).html());

            if (tax_information.length > 0) {
                for (let k in tax_information) {
                    if (tax_name.includes(tax_information[k].tax_field_name) && checkTaxApply(tax_information[k].tax_field_name)) {
                        let previous_value = tax_object["" + tax_information[k].tax_field_name];
                        let current_value = 0;
                        let tax_type = Number($("#tax_type").val());
                        if (tax_type == 1) {
                            current_value = parseFloat((parseFloat(parseFloat(tax_information[k].tax_field_percentage) * parseFloat(item_total_price)) / parseFloat(100)));
                        } else {
                            current_value = (parseFloat(item_total_price) - (parseFloat(item_total_price) / (1 + (tax_information[k].tax_field_percentage / 100)))).toFixed(ir_precision);
                        }
                        tax_object["" + tax_information[k].tax_field_name] = (parseFloat(previous_value) + Number(current_value)).toFixed(ir_precision);
                    } else {
                        if (checkTaxApply(tax_information[k].tax_field_name)) {
                            tax_name.push(tax_information[k].tax_field_name);
                            let current_value = 0;
                            let tax_type = Number($("#tax_type").val());

                            if (tax_type == 1) {
                                current_value = parseFloat((parseFloat(parseFloat(tax_information[k].tax_field_percentage) * parseFloat(item_total_price)) / parseFloat(100)));
                            } else {
                                current_value = (parseFloat(item_total_price) - parseFloat(item_total_price) / (1 + (tax_information[k].tax_field_percentage / 100))).toFixed(ir_precision);
                            }
                            tax_object["" + tax_information[k].tax_field_name] = (Number(current_value)).toFixed(ir_precision);
                        }
                    }
                }
            }
        });

        return tax_object;
    }
    function get_particular_item_discount_amount(discount, item_price) {
        if (discount.length > 0 && discount.substr(discount.length - 1) == "%") {
            return (
                (parseFloat(item_price) * parseFloat(discount)) /
                parseFloat(100)
            ).toFixed(ir_precision);
        } else {
            return parseFloat(discount).toFixed(ir_precision);
        }
    }
    function get_sub_total_discount_amount(sub_total_discount, sub_total) {
        if (
            sub_total_discount.length > 0 &&
            sub_total_discount.substr(sub_total_discount.length - 1) == "%"
        ) {
            return (
                (parseFloat(sub_total) * parseFloat(sub_total_discount)) /
                parseFloat(100)
            ).toFixed(ir_precision);
        } else {
            return parseFloat(sub_total_discount).toFixed(ir_precision);
        }
    }

    function put_cart_content() {
        let total_items_in_cart = Number($("#total_items_in_cart_with_quantity").html());
        let total_cart_qty2 = 0;
        let counter = 0;
        $(".decrease_item_table").each(function () {
            total_cart_qty2 += Number($(this).parent().find('span').html());
            counter++;
        });
        let sub_total = parseFloat($("#sub_total_show").html()).toFixed(ir_precision);
        let discounted_sub_total_amount = pOrAmount($("#show_discount_amount").html());
        let total_vat = parseFloat($("#show_vat_modal").html()).toFixed(ir_precision);
        let total_payable = parseFloat($("#total_payable").html()).toFixed(ir_precision);
        let total_tips = parseFloat($("#show_tips_amount").html()).toFixed(ir_precision);
        let total_discount_amount = parseFloat($("#all_items_discount").html()).toFixed(ir_precision);
        let delivery_charge =
            $("#show_charge_amount").html() != "0.00"
                ? parseFloat($("#show_charge_amount").html()).toFixed(ir_precision)
                : parseFloat(0).toFixed(ir_precision);
        let sub_total_discount_value = $("#sub_total_discount1").val();

        let order_info = "{";
        order_info += '"total_items_in_cart":"' + counter + '",';
        order_info += '"total_items_with_qty_in_cart":"' + total_cart_qty2 + '",';
        order_info += '"sub_total":"' + sub_total + '",';
        order_info += '"total_vat":"' + total_vat + '",';
        order_info += '"total_payable":"' + total_payable + '",';
        order_info += '"total_discount_amount":"' + total_discount_amount + '",';
        order_info += '"actual_discount":"' + discounted_sub_total_amount + '",';
        order_info += '"delivery_charge":"' + delivery_charge + '",';
        order_info += '"total_tips":"' + total_tips + '",';
        order_info +=
            '"sub_total_discount_value":"' + sub_total_discount_value + '",';
        let items_info = "";
        items_info += '"items":';
        items_info += "[";
        if (Number($(".customer_panel").length) > 0) {
            let k = 1;
            $(".customer_panel").each(function (i, obj) {
                let item_id = Number($(this).attr('data-id'));
                let cp_type = Number($(this).attr('data-cp_type'));

                let item_name = '';
                let item_modifiers = '';

                let item_vat = 0;
                let item_unit_price = '';
                let percentage_table = '';
                let item_discount_table = '';
                let item_quantity = '';
                let total_price = 0;
                let row_type = cp_type;
                let modifiers_name = '';
                let modifiers_price = '';
                let item_note = '';

                if (cp_type === 1) {
                    item_name = $(this).find(".first_column").find("span").eq(0).text();
                    item_note = $(this).find(".third_portion").find('span').text();
                    let child_name = $(".customer_panel_child_" + item_id).text();
                    let cp_type_tmp = Number($(".customer_panel_child_" + item_id).attr('data-cp_type'));
                    if (child_name && child_name != undefined && cp_type_tmp == 33) {
                        item_name += "<br>" + child_name;
                    }
                    if (child_name && child_name != undefined && cp_type_tmp == 3) {
                        let j = 1;
                        let ii = 1;
                        $(".3_cp_price_" + item_id).each(function (i, obj) {
                            $(this).attr('id', "3_cp_price_" + item_id + "" + ii);
                            ii++;
                        });
                        let m = 1;
                        $(".customer_panel_child_" + item_id).each(function (i, obj) {
                            modifiers_name += $(this).text();
                            modifiers_name += (j == Number($(".customer_panel_child_" + item_id).length)) ? "" : "|||";

                            modifiers_price += $('#3_cp_price_' + item_id + "" + m).text();
                            modifiers_price += (j == Number($(".customer_panel_child_" + item_id).length)) ? "" : "|||";
                            j++;
                        });
                    }
                    item_unit_price = $(this).find(".second_column").find('span').eq(0).text();
                    item_quantity = $(this).find(".third_column").find('span').eq(0).text();
                    item_discount_table = $(this).find(".forth_column").find('input').val();
                    total_price = $(this).find(".fifth_column").find('span').eq(0).text();
                } else if (cp_type === 4) {
                    item_name = $(this).parent().find(".first_column").find("span").eq(0).text();
                    item_quantity = $(this).parent().find(".third_column").find('span').eq(0).text();
                }

                items_info +=
                    '{"item_id":"' +
                    item_id +
                    '", "row_type":"' +
                    row_type +
                    '", "item_name":"' +
                    item_name +
                    '", "item_note":"' +
                    item_note +
                    '", "modifiers_name":"' +
                    modifiers_name +
                    '", "modifiers_price":"' +
                    modifiers_price +
                    '", "item_vat":' +
                    item_vat +
                    ",";
                items_info +=
                    '"item_unit_price":"' +
                    item_unit_price +
                    '", "percentage_table":"' +
                    percentage_table +
                    '", "item_discount_table":"' +
                    item_discount_table +
                    '", "total_price":"' +
                    total_price +
                    '","item_quantity":"' +
                    item_quantity + '"';
                items_info += (k == Number($(".customer_panel").length)) ? "}" : "},";
                k++;
            });
        }
        items_info += "]";
        order_info += items_info + "}";

        let order_object = JSON.stringify(order_info);
        $.ajax({
            url: base_url + "put-customer-panel-data",
            method: "POST",
            dataType: 'json',
            data: {
                order: order_object
            },
            success: function (response) {

            },
            error: function () {

            },
        });
    }

    const dineIn_item_list = new PerfectScrollbar(".dineIn-table-list-of-item", {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
    });
    dineIn_item_list.update();

    const all_dineIn_table = new PerfectScrollbar(".all-dineIn-table", {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
    });
    all_dineIn_table.update();




    /**
     * Order Payment Modal Script
     */


    const payment_list = new PerfectScrollbar(".list-for-payment-type", { //Scrollbar for payment List
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
    });

    const thirdLi = new PerfectScrollbar("li.third ul", { //Scrollbar for demotional
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
    });

    const paid_list = new PerfectScrollbar(".paid-list", { //Scrollbar for paid_list
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
    });

    const payment_content = new PerfectScrollbar("#tabs", { //Scrollbar for payment-content
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
    });

    payment_content.update();
    payment_list.update();
    thirdLi.update();
    paid_list.update();

    function set_default_payment() {
        let default_payment_hidden = Number($("#default_payment_hidden").val());
        if (default_payment_hidden) {
            $(".set_payment").each(function (i, obj) {
                let id = Number($(this).attr('data-id'));
                if (id == default_payment_hidden) {
                    $(this).click();
                }
            });
        } else {
            $(".set_payment").each(function (i, obj) {
                let id = ($(this).text());
                if (id == "Cash") {
                    $(this).click();
                }
            });
        }
    }
    function getRotatedValue(value) {
        return (value * (-1));
    }

    function setRotatedTable() {
        $(".table_bg").find(".get_table_details").each(function () {
            let this_action = $(this);
            let transformValue = this_action.parent().attr('style');
            let rotated_value = '';
            if (transformValue) {
                let rotateDigits = transformValue.match(/rotate\((\d+)deg\)/);
                if (rotateDigits !== null && rotateDigits !== undefined && rotateDigits !== "null") {
                    if (rotateDigits[1]) {
                        $(this).css("transform", "rotate(" + (getRotatedValue(rotateDigits[1])) + "deg)");
                    }
                }
            }
        });
    }

    function setOrderTabless(order_number, table_number, waiter_name, total_payable, sale_id, table_id) {
        $(".table_bg").find(".get_table_details").each(function () {
            let design_table_id = Number($(this).attr('data-id'));
            let this_action = $(this);
            if (design_table_id === table_id) {
                this_action.attr("data-booked_id", sale_id);
                this_action.attr("data-order_number", order_number);
                let ordered_border_color_hidden = $("#ordered_border_color_hidden").val();
                let ordered_bg_color_hidden = $("#ordered_bg_color_hidden").val();
                let ordered_text_color_hidden = $("#ordered_text_color_hidden").val();
                this_action.parent().css("border", "1px solid " + ordered_border_color_hidden);
                this_action.parent().css("background-color", ordered_bg_color_hidden);
                this_action.parent().css("color", ordered_text_color_hidden);
                let tootip_content = '<div><span>' + inv_table + ': ' + table_number + '</span><br><hr>' + inv_waiter + ': ' + waiter_name + '<br>' + inv_order_number + ': ' + order_number + '<br>' + inv_total_payable + ': ' + total_payable + '</div>';
                let split_order = order_number.split("-");
                let html_content = '<div class="set_tooltip" data-tippy-content="' + tootip_content + '"><span class="table_design_table_number">' + table_number + '</span><br><hr class="table_design_hr">' + waiter_name + '<br>' + split_order[1] + '</div>';
                this_action.html(html_content);

                tippy(".set_tooltip", {
                    animation: "scale",
                    allowHTML: true,
                });

            } else {
                let booked_id = this_action.attr("class");
                let booked_i1d = this_action.attr("data-booked_id");
            }
        });

        setRotatedTable();
    }
    function updateTransferTable(transferred_table_id, table_name) {
        let sale_id = $("#active_transfer_sale_id").val();
        update_transfer_table(sale_id, transferred_table_id, table_name);
        setTimeout(function () {
            displayOrderList();
        }, 500);
    }
    $(document).on("click", ".div_rectangular", function (e) {
        let hidden_table_capacity = $(this).find(".get_table_details").attr("data-hidden_table_capacity");
        $("#hidden_table_capacity").val(hidden_table_capacity);

        let is_click_transfer_table = Number($("#is_click_transfer_table").val());
        let this_active = 0;
        let this_action = $(this);
        $(".div_rectangular").each(function (i, obj) {
            if ($(this).hasClass("div_rectangular_active")) {
                this_active = Number($(this).find(".trigger_to_select_other").attr("data-id"));
            }
        });

        $(".div_rectangular").removeClass("div_rectangular_active");

        if (this_action.hasClass("div_rectangular_active")) {
            if (!is_click_transfer_table) {
                this_action.removeClass("div_rectangular_active");
            }
        } else {
            let button_active = Number(this_action.find(".trigger_to_select_other").attr("data-id"));
            if (this_active != button_active) {
                this_action.addClass("div_rectangular_active");
            }
        }
        let is_active_action = '';
        $(".table_bg").find(".div_rectangular").each(function (i, obj) {
            if ($(this).hasClass("div_rectangular_active")) {
                is_active_action = $(this);
            }
        });

        let table_id = is_active_action.find(".get_table_details").attr("data-id");
        let table_name = is_active_action.find(".get_table_details").attr("data-name");
        let booked_id = Number(is_active_action.find(".get_table_details").attr("data-booked_id"));
        let order_number = (is_active_action.find(".get_table_details").attr("data-order_number"));

        if (booked_id) {

        } else {
            if (is_click_transfer_table) {
                updateTransferTable(table_id, table_name);

                $("#is_click_transfer_table").val('');
                $("#active_transfer_table").val('');
                $("#active_transfer_sale_id").val('');

                toastr['success']((transfer_transferred_msg), '');

                $(this)
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .removeClass("active")
                    .addClass("inActive");
                setTimeout(function () {
                    $(".modal").removeClass("inActive");
                }, 1000);

                $("#show_tables_modal2").removeClass("active");
                $(".pos__modal__overlay").fadeOut(300);

            } else {
                toastr['success']((you_are_ordering_now_on_your_selected_table), '');
                $("#hidden_table_id").val(table_id);
                $("#hidden_table_name").val(table_name);

                $(this)
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .removeClass("active")
                    .addClass("inActive");
                setTimeout(function () {
                    $(".modal").removeClass("inActive");
                }, 1000);

                $("#show_tables_modal2").removeClass("active");
                $(".pos__modal__overlay").fadeOut(300);
            }
        }
    });


    $(document).on("click", ".get_area_table", function (e) {
        $(".get_area_table").removeAttr("style");
        let id = $(this).attr('data-id');
        let this_floor_design = $(this).parent().find(".set_design").html();
        $(".table_bg").html(this_floor_design);
        $(".table_bg").html(this_floor_design);

        $(".div_box").find('h5').removeAttr("contenteditable");

        //append ordered tables
        $(".running_order_custom").each(function () {
            let order_number = $(this).find(".running_order_order_number").text();
            let table_number = $(this).find(".running_order_table_name").text();
            let waiter_name = $(this).find(".running_order_waiter_name").text();
            let total_payable = inv_currency + ($(this).attr("data-total_payable"));
            let sale_id = Number($(this).attr("data-sale_id"));
            let table_id = Number($(this).attr("data-table_id"));
            setOrderTabless(order_number, table_number, waiter_name, total_payable, sale_id, table_id);
        });
    });

    function set_all_items_modifiers_amount() {
        $(".order_holder .single_order").each(function (i, obj) {
            let modifiers_price = parseFloat(0).toFixed(ir_precision);
            let item_id = $(this).attr("id").substr(15);

            let item_quantity = $(this)
                .find("#item_quantity_table_" + item_id)
                .html();

            if ($(this).find("#item_modifiers_price_table_" + item_id).length > 0) {
                let comma_separeted_modifiers_price = $(this)
                    .find("#item_modifiers_price_table_" + item_id)
                    .html();
                let modifiers_price_array =
                    comma_separeted_modifiers_price != ""
                        ? comma_separeted_modifiers_price.split(",")
                        : "";
                modifiers_price_array.forEach(function (modifier_price) {
                    modifiers_price = (
                        parseFloat(modifiers_price) + parseFloat(modifier_price)
                    ).toFixed(ir_precision);
                });
                let modifiers_price_as_per_item_quantity = (
                    parseFloat(item_quantity) * parseFloat(modifiers_price)
                ).toFixed(ir_precision);
                $(this)
                    .find(".fifth_column #item_modifiers_price_table_" + item_id)
                    .html(modifiers_price_as_per_item_quantity);

                $(this).find('.modifier_incr_p').each(function (i, obj) {
                    let price_p = $(this).attr("data-price");
                    $(this).find('span').html((parseFloat(item_quantity) * parseFloat(price_p)).toFixed(ir_precision));
                });
            }
        });
    }
    function set_total_items_discount_for_subtotal() {
        let total_discount = 0;
        $(".single_order .first_portion .fifth_column span").each(function (i, obj) {
            let this_item_discount_amount = parseFloat(
                $(this).parent().parent().find(".item_discount").html()
            ).toFixed(ir_precision);
            total_discount = (
                parseFloat(total_discount) + parseFloat(this_item_discount_amount)
            ).toFixed(ir_precision);
            let this_action = $(this).parent().parent().parent();
            let main_menu_qty = Number($(this).parent().parent().find(".qty_item_custom").text());
            this_action.find(".combo_class").each(function (i, obj) {
                let this_qty = Number($(this).attr('data-qty'));
                $(this).text("Qty:" + (main_menu_qty * this_qty));

            });
        });
        $("#total_item_discount").html(total_discount);
    }

    //remove last digits if number is more than 2 digits after decimal
    function remove_last_two_digit_with_percentage(value, object_element) {
        if (value.length > 0 && value.indexOf(".") > 0) {
            let percentage = false;
            let number_without_percentage = value;
            if (value.indexOf("%") > 0) {
                percentage = true;
                number_without_percentage = value
                    .toString()
                    .substring(0, value.length - 1);
            }
            let number = number_without_percentage.split(".");
            if (number[1].length > 2) {
                let value = parseFloat(
                    Math.floor(number_without_percentage * 100) / 100
                );
                let add_percentage = percentage ? "%" : "";
                if (isNaN(value)) {
                    object_element.val("");
                } else {
                    object_element.val(value.toString() + add_percentage);
                }
            }
        }
    }
    function gettingRoundingAmount(amount) {
        let is_rounding_enable = Number($("#is_rounding_enable").val());
        if (is_rounding_enable == 1) {
            let split_value = Number(amount).toFixed(0);
            let rounding = (split_value - Number(amount)).toFixed(2);
            return [Number(split_value), is_rounding_enable, rounding];
        } else {
            return [Number(amount), is_rounding_enable, 0];
        }
    }
    function checkInternetConnection() {
        let is_offline_system = Number($("#is_offline_system").val());
        if (is_offline_system) {
            return true;
        } else {
            return false;
        }
    }

    $(document).on("click", ".plus_button", function (e) {
        let pos_8 = Number($("#pos_8").val());
        let is_self_order = $("#is_self_order").val();
        if (is_self_order == "Yes") {
            pos_8 = 1;
        }
        let title = $(this).attr("data-title");
        $(".add_customer_title").text(title);
        if (pos_8) {
            let html = '<tr><td><label class="pointer_class"><input type="radio" checked="" class="radio_class customer_del_address search_result_address" data-value="New" name="customer_del_address"> New</label></td></tr>';
            $("#is_new_address").val("Yes");
            $(".added_address").html(html);

            $("#add_customer_modal").addClass("active");
            $(".pos__modal__overlay").fadeIn(200);
        } else {
            toastr['error']((menu_not_permit_access + "!"), '');
        }
    });

    // Hide Modal When Click to close Icon
    $("body").on("click", ".alertCloseIcon", function () {
        $(this)
            .parent()
            .parent()
            .parent()
            .removeClass("active")
            .addClass("inActive");
        setTimeout(function () {
            $(".modal").removeClass("inActive");
        }, 1000);
        $(".pos__modal__overlay").fadeOut(300);
        //clear discoount values
        $("#sub_total_discount_finalize").val('');
    });

    $("#walk_in_customer").select2({
        dropdownCssClass: "bigdrop",
    });

    $('#walk_in_customer').select2({
        ajax: {
            url: base_url + "Sale/ajax_get_customers",
            dataType: 'json',
            delay: 250,
            processResults: function (data) {
                return {
                    results: $.map(data, function (item) {
                        return { id: item.id, text: item.name + " (" + item.phone + ")" };
                    })
                };
            },
            cache: true
        },
        placeholder: 'Select Customer',
        minimumInputLength: 1
    });

    $("body").on("click", "#add_customer", function (e) {
        e.preventDefault();

        let is_online_order = $("#is_online_order").val();
        let customer_id = $("#customer_id_modal").val();
        let customer_name = $("#customer_name_modal").val();
        let customer_phone = $("#customer_phone_modal").val();
        let customer_email = $("#customer_email_modal").val();
        let customer_password = $("#customer_password_modal").val();
        let customer_dob = $("#customer_dob_modal").val();
        let customer_doa = $("#customer_doa_modal").val();
        let is_new_address = $("#is_new_address").val();
        let customer_delivery_address_modal_id = $("#customer_delivery_address_modal_id").val();
        let customer_delivery_address = $("#customer_delivery_address_modal").val();
        let customer_default_discount = $("#customer_default_discount_modal").val();
        let customer_gst_number = $("#customer_gst_number_modal").val();
        let same_or_diff_state = Number($(".same_or_diff_state_modal").val());

        let error = 0;

        $("#customer_name_modal").css("border", "1px solid #B5D6F6");
        $("#customer_phone_modal").css("border", "1px solid #B5D6F6");
        $("#customer_gst_number_modal").css("border", "1px solid #B5D6F6");

        if (customer_name == "") {
            $("#customer_name_modal").css("border", "1px solid red");
            error++;
        }

        if (customer_phone == "") {
            $("#customer_phone_modal").css("border", "1px solid red");
            error++;
        }

        if (customer_id == "" && customer_password == '' && is_online_order == "Yes") {
            $("#customer_password_modal").css("border", "1px solid red");
            error++;
        }
        if (error != 0) {
            return false;
        }

        let this_action = $(this);

        $.ajax({
            url: base_url + "Sale/add_customer_by_ajax",
            method: "POST",
            dataType: 'json',
            data: {
                customer_id: customer_id,
                customer_name: customer_name,
                customer_phone: customer_phone,
                customer_email: customer_email,
                customer_dob: customer_dob,
                customer_doa: customer_doa,
                customer_password: customer_password,
                customer_delivery_address: customer_delivery_address,
                customer_default_discount: customer_default_discount,
                customer_gst_number: customer_gst_number,
                same_or_diff_state: same_or_diff_state,
                is_new_address: is_new_address,
                customer_delivery_address_modal_id: customer_delivery_address_modal_id,
                csrf_irestoraplus: csrf_value_,
            },
            success: function (response) {
                // Case 1: Customer already exists
                if (response.already_registered) {
                    let newOption = new Option(
                        response.name + ' ' + response.phone,  // Display text
                        response.customer_id,                  // Value
                        true,                                  // Default selected
                        true                                   // Currently selected
                    );

                    // Append without breaking AJAX Select2 binding
                    $('#walk_in_customer').append(newOption).trigger('change');
                    $('#walk_in_customer1').append($(newOption).clone()).trigger('change');

                    // Close modal
                    $("#add_customer").closest(".modal").removeClass("active").addClass("inActive");
                    // ** Clear modal fields here **
                    clearCustomerModalFields();
                    setTimeout(function () {
                        $(".modal").removeClass("inActive");
                    }, 1000);
                    $(".pos__modal__overlay").fadeOut(300);

                    return; // Exit here
                }

                // Case 2: New customer created
                if (response.customer_id > 0) {
                    let new_customer_id = response.customer_id;


                    // Reload all customers from server
                    $.ajax({
                        url: base_url + "Sale/get_all_customers_for_this_user",
                        method: "GET",
                        success: function (resp) {
                            let customers = JSON.parse(resp);
                            let option_customers = "";

                            customers.forEach(function (customer) {
                                option_customers += '<option ' +
                                    'data-default_discount="' + customer.default_discount + '" ' +
                                    'data-current_due="0" ' +
                                    'data-same_or_diff_state="' + customer.same_or_diff_state + '" ' +
                                    'data-customer_address="' + customer.address + '" ' +
                                    'data-customer_gst_number="' + customer.gst_number + '" ' +
                                    'value="' + customer.id + '"' +
                                    (customer.id == new_customer_id ? ' selected' : '') +
                                    '>' +
                                    customer.name + " " + customer.phone +
                                    '</option>';
                            });

                            $("#walk_in_customer").html(option_customers).val(new_customer_id).trigger('change');
                            $("#walk_in_customer1").html(option_customers).val(new_customer_id).trigger('change');

                            reset_on_modal_close_or_add_customer();
                            setDiscountForSelectedCustomer();

                            // Close modal
                            $("#add_customer").closest(".modal").removeClass("active").addClass("inActive");
                            // ** Clear modal fields here **
                            clearCustomerModalFields();
                            setTimeout(function () {
                                $(".modal").removeClass("inActive");
                            }, 1000);
                            $(".pos__modal__overlay").fadeOut(300);
                        },
                        error: function () {
                            alert('Error loading customers');
                        }
                    });
                }
            },
            error: function () {
                alert('Error adding customer');
            }
        });

        return false;
    });

    function reset_on_modal_close_or_add_customer() {
        $("#customer_id_modal").val("");
        $("#customer_name_modal").val("");
        $("#customer_phone_modal").val("");
        $("#customer_email_modal").val("");
        $("#customer_dob_modal").val("");
        $("#customer_doa_modal").val("");
        $("#customer_delivery_address_modal").val("");
        $("#customer_gst_number_modal").val("");
        $(".same_or_diff_state_modal").val("0").change();
    }

    function setDiscountForSelectedCustomer() {
        let place_edit_order = $("#place_edit_order").html();
        if (place_edit_order != "Update Order") {
            let default_discount = $(".select_walk_in_customer_custom").find(':selected').attr('data-default_discount');
            let default_discount_tmp = $(".select_walk_in_customer_custom").find(':selected').attr('data-default_discount');
            let same_or_diff_state = $(".select_walk_in_customer_custom").find(':selected').attr('data-same_or_diff_state');

            let this_value = $(".select_walk_in_customer_custom").val();
            let discount_amount = default_discount;
            if (checkPercentage(default_discount)) {
                let default_discount_separate = default_discount.split("%");
                discount_amount = default_discount_separate[0];
                $("#discount_type").val("percentage").change();
            } else {
                $("#discount_type").val("fixed").change();
            }
            $("#sub_total_discount").val(default_discount_tmp);
            $("#sub_total_discount1").val(discount_amount);
            $("#same_or_diff_state").val(same_or_diff_state);
            checkDiscountType();
            do_addition_of_item_and_modifiers_price();
        }
    }

    $(document).on("change", ".select_walk_in_customer_custom", function (e) {
        setDiscountForSelectedCustomer();
    });

    function clearCustomerModalFields() {
        $("#customer_id_modal").val('');
        $("#customer_name_modal").val('');
        $("#customer_phone_modal").val('');
        $("#customer_email_modal").val('');
        $("#customer_password_modal").val('');
        $("#customer_dob_modal").val('');
        $("#customer_doa_modal").val('');
        $("#is_new_address").val('');
        $("#customer_delivery_address_modal_id").val('');
        $("#customer_delivery_address_modal").val('');
        $("#customer_default_discount_modal").val('');
        $("#customer_gst_number_modal").val('');
        $(".same_or_diff_state_modal").val('');
    }

    function checkPercentage(value) {
        if (value) {
            if (value.indexOf("%") > -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    }

    function checkDiscountType() {
        let place_edit_order = $("#place_edit_order").html();
        let this_value = $("#discount_type").val();
        let sub_total_discount_value = $("#sub_total_discount1").val();
        if (this_value == "percentage") {
            if (parseFloat(sub_total_discount_value)) {
                $("#sub_total_discount").val(parseFloat(sub_total_discount_value) + "%");
                do_addition_of_item_and_modifiers_price();
            }
        } else {
            if (parseFloat(sub_total_discount_value)) {
                $("#sub_total_discount").val(parseFloat(sub_total_discount_value));
                do_addition_of_item_and_modifiers_price();
            }
        }
    }
    $(document).on("change", "#discount_type", function () {
        checkDiscountType();
    });

    $(document).on("click", "#cancel_button", function (e) {
        //get total items in cart
        let total_items_in_cart = $(".order_holder .single_order").length;
        if (total_items_in_cart > 0) {
            swal(
                {
                    title: warning + "!",
                    text: cart_not_empty_want_to_clear,
                    confirmButtonColor: "#3c8dbc",
                    confirmButtonText: ok,
                    showCancelButton: true,
                },
                function () {
                    $(".order_table_holder .order_holder").empty();
                    clearFooterCartCalculation();
                    $("#table_button").attr("disabled", false);
                    $(".single_table_div[data-table-checked=checked]").attr(
                        "data-table-checked",
                        "unchecked"
                    );
                    let cid = $("#default_customer_hidden").val();
                    let wid = $("#default_waiter_hidden").val();
                    $("#walk_in_customer").val(cid).trigger("change");
                    $("#walk_in_customer1").val(cid).trigger("change");
                    if (wid) {
                        if (waiter_app_status != "Yes") {
                            $("#select_waiter").val(wid).trigger("change");
                            $("#select_waiter1").val(wid).trigger("change");
                        }
                    } else {
                        if (waiter_app_status != "Yes") {
                            $("#select_waiter").val("").trigger("change");
                            $("#select_waiter1").val("").trigger("change");
                        }
                    }

                    //focus search field
                    focusSearch();
                    $("#place_edit_order").html(place_order);
                }
            );
        }
    });

    // Remove when click cross icon in cart item list
    $("body").on("click", ".removeCartItem", function () {
        //focus search field
        focusSearch();
        let waiter_app_status = $("#waiter_app_status").val();
        let sale_no = $(".modification").attr("data-sale-no");
        let id = $(this).attr("data-id");
        let current_status = $(this).attr("data-is_cooked");

        if (current_status == "Started Cooking") {
            toastr['error']((this_item_is_under_cooking_please_contact_with_admin), '');
            return false;
        } else if (current_status == "Done") {
            toastr['error']((this_item_already_cooked_please_contact_with_admin), '');
            return false;
        } else {
            let pos_7 = Number($("#pos_7").val());
            if (waiter_app_status == "Yes") {
                pos_7 = 1;
            }
            let place_edit_order = $("#place_edit_order").html();
            if (place_edit_order != "Update Order") {
                pos_7 = 1;
            }
            let is_self_order = $("#is_self_order").val();
            if (pos_7 || is_self_order == "Yes") {
                if (sale_no && sale_no != undefined) {
                    let this_action = $(this);
                    let food_menu_id = $(this).attr('data-id');;
                    let qty = $(this).parent().parent().find('.qty_item_custom').text();
                    $.ajax({
                        url: base_url + "authentication/remove_item_checking",
                        method: "POST",
                        dataType: 'json',
                        data: { food_menu_id: food_menu_id, qty: qty, sale_no: sale_no },
                        success: function (response) {

                        },
                        error: function () {

                        },
                    });
                }
                $(this)
                    .parent()
                    .parent()
                    .parent()
                    .slideUp(333, function () {
                        $(this).remove();
                    });
            } else {
                toastr['error']((menu_not_permit_access + "!"), '');
            }


        }
        setTimeout(function () {
            do_addition_of_item_and_modifiers_price();
        }, 500);
    });
    $("body").on("click", ".cart__single__item", function () {
        $(this).hide();
        $(this).next(".cart__quantity__trigger").css("display", "flex");
    });


    //when single ite is clicked pop-up modal is appeared
    function openProductEditModal(parent_id, item_name, id) {
        let single_order_element_object = $(this).parent().parent().parent();
        let row_number = 0;
        let menu_id = Number(id);
        let item_price = 0;
        let item_vat_percentage = '';
        let item_discount_input_value = 0;
        let item_discount_amount = 0;
        let item_price_without_discount = 0;
        let item_quantity = 1;
        let item_price_with_discount = 0;
        let modifiers_price = 0;


        let note = '';
        let modifiers_id = "";

        let modifiers_price_as_per_item_quantity = 0;
        let total_price = 0;

        $("#modal_item_row").html(row_number);
        $("#vr01_modal_price_variable").html(0);
        $("#modal_item_id").html(menu_id);
        $("#item_name_modal_custom").html(item_name);
        $("#modal_item_price").html(item_price);
        $("#modal_item_price_variable").html(item_price_with_discount);
        $("#modal_item_price_variable_without_discount").html(item_price_without_discount);

        $("#modal_item_vat_percentage").html(item_vat_percentage);
        $("#modal_discount_amount").html(item_discount_amount);
        $("#item_quantity_modal").val(item_quantity);
        $("#modal_modifiers_unit_price_variable").html(modifiers_price);
        $("#modal_modifier_price_variable").html(modifiers_price_as_per_item_quantity);
        $("#modal_discount").val(item_discount_input_value);
        $("#modal_item_note").val(note);
        $("#modal_total_price").html(total_price);
        //add modifiers to pop up associated to menu
        let foundItems_variations = get_variations_search_by_menu_id(menu_id, window.items);

        let variations = "";
        for (let key1 in foundItems_variations) {

            let vr01_selected_order_type_object = $(".main_top").find("button[data-selected=selected]");
            if (vr01_selected_order_type_object.attr("data-id") == "dine_in_button") {
                item_price = parseFloat(foundItems_variations[key1].price).toFixed(ir_precision);
            } else if (vr01_selected_order_type_object.attr("data-id") == "take_away_button") {
                item_price = parseFloat(foundItems_variations[key1].price_take).toFixed(ir_precision);
            } else if (vr01_selected_order_type_object.attr("data-id") == "delivery_button") {
                let arr_item_details = search_by_menu_id(foundItems_variations[key1].item_id, window.items);
                let check_dl_person = 1;
                item_price = arr_item_details[0].price_delivery;
                $(".custom_li").each(function () {
                    let row_div = $(this).attr("data-row");
                    if ($("#myCheckbox" + row_div).is(":checked")) {
                        let price_delivery_details_tmp = arr_item_details[0].price_delivery_details.split("|||");
                        for (let x = 0; x < price_delivery_details_tmp.length; x++) {
                            let price_delivery_details_tmp_separate = price_delivery_details_tmp[x].split("||");
                            if ("index_" + row_div == price_delivery_details_tmp_separate[0]) {
                                if (Number(price_delivery_details_tmp_separate[1])) {
                                    item_price = parseFloat(price_delivery_details_tmp_separate[1]).toFixed(ir_precision);
                                }
                            }

                        }
                    }
                });
            }

            variations += "<div class='btn_new_custom vr01_modal_class bg_btn_custom' data-id='" + foundItems_variations[key1].item_id + "' data-code='" + foundItems_variations[key1].item_code + "'  data-item_name_tmp='" + foundItems_variations[key1].item_name_tmp + "' data-price='" + item_price + "' data-selected='unselected' data-menu_tax='" + foundItems_variations[key1].tax_information + "'>";
            variations += `<input class="margin_for_vr01" name="vr01_name" type="radio"/>`;
            variations += "<p>" + foundItems_variations[key1].item_name + "</p>";
            variations +=
                '<span class="vr01_modal_price"> <span>' +
                price_txt +
                ":</span> " +
                item_price +
                "</span>";
            variations += "</div>";
        }

        let foundItems = search_by_menu_id(menu_id, window.items);
        let originalMenu = foundItems[0].modifiers;
        let modifiers = "";
        let modifiers_single = "";
        for (let key in originalMenu) {
            let selectedOrNot = "unselected";
            let backgroundColor = "";
            if (
                typeof modifiers_id !== "undefined" &&
                modifiers_id.includes(originalMenu[key].menu_modifier_id)
            ) {
                selectedOrNot = "selected";
                //this is dynamic style
                // backgroundColor = 'style="background-color:#B5D6F6;"';
            } else {
                selectedOrNot = "unselected";
                backgroundColor = "";
            }
            /*new_added_zak*/
            let style_content = "";
            let tmp_class = "";
            let tmp_price = originalMenu[key].menu_modifier_price;
            let modifier_ingrs = '';
            let blank_div = "";
            if (Number(originalMenu[key].type) == 2) {
                style_content = "none";
                tmp_class = "single_modifier";
                modifier_ingrs = get_modifier_ingrs_search_by_menu_modi_id(originalMenu[key].modifier_row_id, window.item_modifier_ingrs);
                let modifier_ingrs_length = Number(modifier_ingrs.length);
                if ((modifier_ingrs_length % 2) != 0) {
                    blank_div = '\n' +
                        '<div class="vr01_modal_class_mod" data-selected="unselected" style="\n' +
                        '    pointer-events: none;\n' +
                        '"></div>';
                }
            }
            modifiers +=
                "<div " +
                backgroundColor +
                ' class="btn_new_custom modal_modifiers bg_btn_custom ' + tmp_class + '" data-type="' + originalMenu[key].type + '" style="display:' + style_content + '"  data-menu_tax="' +
                originalMenu[key].tax_information +
                '"  data-price="' +
                originalMenu[key].menu_modifier_price +
                '" data-selected="' +
                selectedOrNot +
                '" id="modifier_' +
                originalMenu[key].menu_modifier_id +
                '">';
            modifiers += `<input type="checkbox" ${selectedOrNot === "selected" ? "checked" : "unchecked"
                }/>`;
            modifiers += "<p>" + originalMenu[key].menu_modifier_name + "</p>";
            modifiers +=
                '<span class="modifier_price"> <span>' +
                price_txt +
                ":</span> " +
                originalMenu[key].menu_modifier_price +
                "</span>";
            modifiers += "</div>";


            if (Number(originalMenu[key].type) == 2) {
                for (let key1 in modifier_ingrs) {
                    modifiers_single += "<div class='vr01_modal_class_mod vr01_modal_class_mod_" + originalMenu[key].menu_modifier_id + " mod_main_row_div_" + modifier_ingrs[key1].inline_mod_row + "' data-id='" + modifier_ingrs[key1].inline_mod_row + "'   data-parent_id='" + originalMenu[key].menu_modifier_id + "'  data-price='" + modifier_ingrs[key1].menu_ingr_price + "' data-selected='unselected' data-menu_tax='" + originalMenu[key].tax_information + "'>";
                    modifiers_single += `<input class="margin_for_vr01_mod  margin_for_vr01_mod_` + originalMenu[key].menu_modifier_id + `  mod_main_row_value_` + modifier_ingrs[key1].inline_mod_row + `"  data-id="` + originalMenu[key].menu_modifier_id + `_` + modifier_ingrs[key1].inline_mod_row + `"   name="vr01_name_mod" type="radio"/>`;
                    modifiers_single += "<p>" + originalMenu[key].menu_modifier_name + "(" + modifier_ingrs[key1].menu_ingr_name + ") <span> " + price_txt + ": " + modifier_ingrs[key1].menu_ingr_price + " </span></p>";
                    modifiers_single += "</div>";
                }
            }
            /*new_added_zak*/

        }
        $(".variation_div_modal").show();

        if (modifiers.length) {
            $(".modifier_div").show();
        } else {
            $(".modifier_div").hide();
        }

        $("#item_modal .section3_vr").empty();
        $("#item_modal .section3_vr").prepend(variations);


        $("#item_modal .section3_new").empty();
        $("#item_modal .section3_new").prepend(modifiers);

        $("#item_modal .section3_new_single").empty();
        $("#item_modal .section3_new_single").prepend(modifiers_single);
        $("#item_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(200);
    }
    //when single ite is clicked pop-up modal is appeared
    function openProductEditModalForPromo(string_text, item_name, id, promo_type, discount, get_food_menu_id, qty, get_qty, item_price, modal_item_name_row) {
        let single_order_element_object = $(this).parent().parent().parent();
        let row_number = 0;
        let menu_id = Number(id);
        let item_vat_percentage = '';
        let item_discount_input_value = 0;
        let item_discount_amount = 0;
        let item_price_without_discount = item_price;
        let item_quantity = 1;
        let item_price_with_discount = item_price;
        let modifiers_price = 0;


        let note = '';
        let modifiers_id = "";

        let modifiers_price_as_per_item_quantity = 0;
        let total_price = 0;

        $(".prom_txt").html(string_text);
        promo_type = Number(promo_type);
        $("#modal_discount_amount").html(0);
        $("#modal_discount").val(discount);
        if (string_text) {
            $("#modal_discount").attr("readonly", '');
        }
        $("#modal_promo_type_row").html(promo_type);
        $("#modal_discount_row").html(discount);
        $("#modal_get_food_menu_id_row").html(get_food_menu_id);
        $("#modal_qty_row").html(qty);
        $("#modal_get_qty_row").html(get_qty);
        $("#modal_item_name_row").html(modal_item_name_row);

        $("#modal_item_row").html(row_number);
        $("#vr01_modal_price_variable").html(0);
        $("#modal_item_id").html(menu_id);
        $("#item_name_modal_custom").html(item_name);
        $("#modal_item_price").html(item_price);
        $("#modal_item_price_variable").html(item_price_with_discount);
        $("#modal_item_price_variable_without_discount").html(item_price_without_discount);
        $("#modal_item_vat_percentage").html(item_vat_percentage);

        $("#item_quantity_modal").val(item_quantity);
        $("#modal_modifiers_unit_price_variable").html(modifiers_price);
        $("#modal_modifier_price_variable").html(modifiers_price_as_per_item_quantity);

        $("#modal_item_note").val(note);
        $("#modal_total_price").html(total_price);

        let foundItems = search_by_menu_id(menu_id, window.items);
        let originalMenu = foundItems[0].modifiers;
        let modifiers = "";

        for (let key in originalMenu) {
            let selectedOrNot = "unselected";
            let backgroundColor = "";
            if (
                typeof modifiers_id !== "undefined" &&
                modifiers_id.includes(originalMenu[key].menu_modifier_id)
            ) {
                selectedOrNot = "selected";
                //this is dynamic style
                // backgroundColor = 'style="background-color:#B5D6F6;"';
            } else {
                selectedOrNot = "unselected";
                backgroundColor = "";
            }
            /*new_added_zak*/
            let style_content = "";
            let tmp_class = "";
            let tmp_price = originalMenu[key].menu_modifier_price;
            let modifier_ingrs = '';
            let blank_div = "";
            if (Number(originalMenu[key].type) == 2) {
                style_content = "none";
                tmp_class = "single_modifier";
                modifier_ingrs = get_modifier_ingrs_search_by_menu_modi_id(originalMenu[key].modifier_row_id, window.item_modifier_ingrs);
                let modifier_ingrs_length = Number(modifier_ingrs.length);
                if ((modifier_ingrs_length % 2) != 0) {
                    blank_div = '\n' +
                        '<div class="vr01_modal_class_mod" data-selected="unselected" style="\n' +
                        '    pointer-events: none;\n' +
                        '"></div>';
                }
            }
            modifiers +=
                "<div " +
                backgroundColor +
                ' class="btn_new_custom modal_modifiers bg_btn_custom ' + tmp_class + '" data-type="' + originalMenu[key].type + '" style="display:' + style_content + '"  data-menu_tax="' +
                originalMenu[key].tax_information +
                '"  data-price="' +
                originalMenu[key].menu_modifier_price +
                '" data-selected="' +
                selectedOrNot +
                '" id="modifier_' +
                originalMenu[key].menu_modifier_id +
                '">';
            modifiers += `<input type="checkbox" ${selectedOrNot === "selected" ? "checked" : "unchecked"
                }/>`;
            modifiers += "<p>" + originalMenu[key].menu_modifier_name + "</p>";
            modifiers +=
                '<span class="modifier_price"> <span>' +
                price_txt +
                ":</span> " +
                originalMenu[key].menu_modifier_price +
                "</span>";
            modifiers += "</div>";

            /*new_added_zak*/

        }
        $(".variation_div_modal").hide();

        if (modifiers.length) {
            $(".modifier_div").show();
        } else {
            $(".modifier_div").hide();
        }

        $("#item_modal .section3_new").empty();
        $("#item_modal .section3_new").prepend(modifiers);

        update_all_total_price();

        $("#item_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(200);
    }

    //when add to card button is clicked information goes to table of middle to top
    $(document).on("click", "#add_to_cart", function (e) {
        //vr01
        let is_variation_product = Number($("#is_variation_product").html());
        let margin_for_vr01_mod = Number($(".margin_for_vr01_mod").length);
        let status = false;
        let status_ = false;
        $(".vr01_modal_class").each(function () {
            if ($(this).attr("data-selected") == "selected") {
                status = true;
            }
        });
        $(".margin_for_vr01_mod").each(function () {
            if ($(this).is(":checked")) {
                status_ = true;
            }
        });

        if (is_variation_product && !status) {
            toastr['error']((selected_variation), '');
        } else {
            let row_number = $("#modal_item_row").html();

            let modal_item_is_offer = $("#modal_item_is_offer").text();
            $("#modal_item_is_offer").html("");

            //get item/menu id from modal
            let item_id = $("#modal_item_id").html();
            //remove if it is edited update of previous added item based on id
            // if($('#order_for_item_'+item_id).length>0){
            // 	$('#order_for_item_'+item_id).remove();
            // }
            //get item/menu name from modal
            let item_name = $("#item_name_modal_custom").html();
            //get item/menu vat percentage from modal
            let item_vat_percentage = $("#modal_item_vat_percentage").html();
            item_vat_percentage =
                item_vat_percentage == "" ? "0.00" : item_vat_percentage;
            //discount amount from modal
            let item_discount_amount = parseFloat(
                $("#modal_discount_amount").html()
            ).toFixed(ir_precision);

            //discount input value of modal
            let discount_input_value = $("#modal_discount").val();

            //get item/menu price from modal

            let item_price = parseFloat($("#modal_item_price").html()).toFixed(ir_precision);
            if (is_variation_product) {
                item_price = parseFloat($("#vr01_modal_price_variable").html()).toFixed(ir_precision);
            }

            //get item/menu price from modal without discount
            let item_total_price_without_discount = parseFloat(
                $("#modal_item_price_variable_without_discount").html()
            ).toFixed(ir_precision);

            //get vat amount for specific item/menu
            let item_vat_amount_for_unit_item = (
                (parseFloat(item_price) * parseFloat(item_vat_percentage)) /
                parseFloat(100)
            ).toFixed(ir_precision);

            //get item/menu total price from modal
            let item_total_price = parseFloat(
                $("#modal_item_price_variable").html()
            ).toFixed(ir_precision);

            //get item/menu quantity from modal
            let item_quantity = $("#item_quantity_modal").val();

            //get vat amount for specific item/menu
            let item_vat_amount_for_all_quantity = (
                parseFloat(item_vat_amount_for_unit_item) * parseFloat(item_quantity)
            ).toFixed(ir_precision);

            //get selected modifiers
            let selected_modifiers = "";
            let selected_modifiers_id = "";
            let selected_tmp_mul_mod_id = "";
            let selected_modifiers_price = "";
            //get tax information

            let j = 1;
            let draw_table_for_order_tmp_modifier_tax = "";
            let tmp_mul_mod_html_hidden = '';
            $(".modal_modifiers[data-selected=selected]").each(function (i, obj) {
                let modifier_id_custom = $(this).attr("id").substr(9);
                /*new_added_zak*/
                let tmp_mul_type_mod_name = '';
                let tmp_mul_mod_id = 0;
                let tmp_modifier_name = $(this).find("p").html();
                if ($(".margin_for_vr01_mod_" + modifier_id_custom + ":checked").parent().find("p").html()) {
                    tmp_modifier_name = $(".margin_for_vr01_mod_" + modifier_id_custom + ":checked").parent().find("p").html();
                    tmp_mul_mod_id = $(".margin_for_vr01_mod_" + modifier_id_custom + ":checked").attr("data-id");
                    tmp_mul_mod_html_hidden += '<input type="hidden" class="hidden_mod_cart_' + item_id + '_' + modifier_id_custom + '"  value="' + tmp_mul_mod_id + '">';
                    selected_tmp_mul_mod_id += tmp_mul_mod_id;
                    selected_tmp_mul_mod_id += ',';
                }

                /*end_new_added_zak*/
                if (j == $(".modal_modifiers[data-selected=selected]").length) {
                    selected_modifiers += tmp_modifier_name;
                    selected_modifiers_id += $(this).attr("id").substr(9);
                    selected_modifiers_price += $(this).attr("data-price");
                } else {
                    selected_modifiers += tmp_modifier_name + ", ";
                    selected_modifiers_id += $(this).attr("id").substr(9) + ",";
                    selected_modifiers_price += $(this).attr("data-price") + ",";
                }
                let tax_information = "";
                // iterate over each item in the array
                tax_information = $(this).attr("data-menu_tax");
                // iterate over each item in the array
                for (let i = 0; i < window.only_modifiers.length; i++) {
                    // look for the entry with a matching `code` value
                    if (
                        only_modifiers[i].menu_modifier_id ==
                        Number($(this).attr("id").substr(9))
                    ) {
                        tax_information = only_modifiers[i].tax_information;
                    }
                }

                tax_information = IsJsonString(tax_information)
                    ? JSON.parse(tax_information)
                    : "";

                if (tax_information.length > 0) {
                    for (let k in tax_information) {
                        tax_information[k].item_vat_amount_for_unit_item = (
                            (parseFloat($(this).attr("data-price")) *
                                parseFloat(tax_information[k].tax_field_percentage)) /
                            parseFloat(100)
                        ).toFixed(ir_precision);
                        tax_information[k].item_vat_amount_for_all_quantity = (
                            parseFloat(tax_information[k].item_vat_amount_for_unit_item) *
                            parseFloat(1)
                        ).toFixed(ir_precision);
                    }
                }
                draw_table_for_order_tmp_modifier_tax +=
                    '<span class="item_vat_modifier ir_display_none item_vat_modifier_' +
                    item_id +
                    '" data-item_id="' +
                    item_id +
                    '"  data-modifier_price="' +
                    $(this).attr("data-price") +
                    '" data-modifier_id="' +
                    modifier_id_custom +
                    '" id="item_vat_percentage_table' +
                    item_id +
                    "" +
                    modifier_id_custom +
                    '">' +
                    JSON.stringify(tax_information) +
                    "</span>";

                j++;
            });

            let tax_information_item = "";
            for (let i = 0; i < window.items.length; i++) {
                // look for the entry with a matching `code` value
                if (items[i].item_id == item_id) {
                    tax_information_item = items[i].tax_information;
                }
            }

            tax_information_item = IsJsonString(tax_information_item)
                ? JSON.parse(tax_information_item)
                : "";
            if (tax_information_item.length > 0) {
                for (let k in tax_information_item) {
                    tax_information_item[k].item_vat_amount_for_unit_item = (
                        (parseFloat(item_price) *
                            parseFloat(tax_information_item[k].tax_field_percentage)) /
                        parseFloat(100)
                    ).toFixed(ir_precision);
                    tax_information_item[k].item_vat_amount_for_all_quantity = (
                        parseFloat(tax_information_item[k].item_vat_amount_for_unit_item) *
                        parseFloat(1)
                    ).toFixed(ir_precision);
                }
            }

            //get modifiers price
            let modifiers_price = parseFloat(
                $("#modal_modifier_price_variable").html()
            ).toFixed(ir_precision);

            //get note
            let note = escape_output($("#modal_item_note").val());

            //construct div
            let draw_table_for_order = "";
            draw_table_for_order +=
                row_number > 0
                    ? ""
                    : '<div data-cp_type="1"  class="single_order customer_panel"  data-id="' + item_id + '"  id="order_for_item_' + item_id + '">';

            draw_table_for_order += '<div class="first_portion">';
            draw_table_for_order +=
                '<span class="item_previous_id ir_display_none" id="item_previous_id_table' +
                item_id +
                '"></span>';
            draw_table_for_order +=
                '<span class="item_cooking_done_time ir_display_none" id="item_cooking_done_time_table' +
                item_id +
                '"></span>';
            draw_table_for_order +=
                '<span class="item_cooking_start_time ir_display_none" id="item_cooking_start_time_table' +
                item_id +
                '"></span>';
            draw_table_for_order +=
                '<span class="item_cooking_status ir_display_none" id="item_cooking_status_table' +
                item_id +
                '"></span>';
            draw_table_for_order +=
                '<span class="item_type ir_display_none" id="item_type_table' +
                item_id +
                '"></span>';
            draw_table_for_order +=
                '<span class="item_vat ir_display_none" id="item_vat_percentage_table' +
                item_id +
                '">' +
                JSON.stringify(tax_information_item) +
                "</span>";
            draw_table_for_order +=
                '<span class="item_discount ir_display_none" id="item_discount_table' +
                item_id +
                '">' +
                item_discount_amount +
                "</span>";
            draw_table_for_order +=
                '<span class="item_price_without_discount ir_display_none" id="item_price_without_discount_' +
                item_id +
                '">' +
                item_total_price_without_discount +
                "</span>";
            $("#is_variation_product").html(search_by_menu_id_getting_parent_id(item_id, window.items));


            draw_table_for_order +=
                '<div class="single_order_column first_column cart_item_counter  arabic_text_left fix"  data-id="' + item_id + '"><i data-parent_id="' + search_by_menu_id_getting_parent_id(item_id, window.items) + '" data-modal_item_is_offer="' + modal_item_is_offer + '" class="fas fa-pencil-alt edit_item txt_5" id="edit_item_' +
                item_id +
                '"></i> <span class="arabic_text_left 1_cp_name_' + item_id + '"  id="item_name_table_' +
                item_id +
                '">' +
                item_name +
                "</span></div>";
            draw_table_for_order +=
                '<div class="single_order_column second_column fix">' +
                currency +
                ' <span class="1_cp_price_' + item_id + '" id="item_price_table_' +
                item_id +
                '">' +
                item_price +
                "</span></div>";
            draw_table_for_order +=
                '<div class="single_order_column third_column fix"><i class="fal fa-minus decrease_item_table txt_5" id="decrease_item_table_' +
                item_id +
                '"></i> <span data-is_kot_print="1" class="1_cp_qty_' + item_id + ' qty_item_custom" id="item_quantity_table_' +
                item_id +
                '">' +
                item_quantity +
                '</span> <i class="fal fa-plus increase_item_table txt_5" id="increase_item_table_' +
                item_id +
                '"></i></div>';
            draw_table_for_order +=
                '<div class="single_order_column forth_column fix"><input type="" name="" placeholder="Amt or %" class="1_cp_discount_' + item_id + ' discount_cart_input" id="percentage_table_' +
                item_id +
                '" value="' +
                discount_input_value +
                '" disabled></div>';
            draw_table_for_order +=
                '<div class="single_order_column fifth_column">' +
                currency +
                ' <span class="1_cp_total_' + item_id + '" id="item_total_price_table_' +
                item_id +
                '">' +
                item_total_price +
                '</span><i data-id="' +
                item_id +
                '" class="fal fa-times removeCartItem"></i></div>';
            draw_table_for_order += "</div>";


            let product_comb = $("#item_combo_table_" + item_id).text();
            if (product_comb != "" && product_comb != undefined) {
                draw_table_for_order += '<div class="third_portion fix">';
                draw_table_for_order +=
                    '<div  data-cp_type="2"  class="customer_panel single_order_column first_column cart_item_counter  arabic_text_left fix modifier_txt_custom"  data-id="' + item_id + '">' +
                    combo_txt +
                    ': <span class="2_cp_name_' + item_id + '" id="item_combo_table_' +
                    item_id +
                    '">' +
                    product_comb +
                    "</span></div>";
                draw_table_for_order += "</div>";
            }

            if (selected_modifiers != "") {
                draw_table_for_order += '<div class="second_portion fix">';
                draw_table_for_order += draw_table_for_order_tmp_modifier_tax;
                draw_table_for_order +=
                    '<span id="item_modifiers_id_table_' +
                    item_id +
                    '" class="ir_display_none">' +
                    selected_modifiers_id +
                    "</span>";
                draw_table_for_order +=
                    '<span id="item_modifiers_mul_id_table_' +
                    item_id +
                    '" class="ir_display_none">' +
                    selected_tmp_mul_mod_id +
                    "</span>";
                draw_table_for_order +=
                    '<span id="item_modifiers_price_table_' +
                    item_id +
                    '" class="ir_display_none">' +
                    selected_modifiers_price +
                    "</span>";
                draw_table_for_order +=
                    '<div class="single_order_column first_column cart_item_counter  arabic_text_left fix ir_display_none"  data-id="' + item_id + '"><span class="modifier_txt_custom" id="item_modifiers_table_' +
                    item_id +
                    '">' +
                    selected_modifiers +
                    "</span></div>";
                draw_table_for_order +=
                    '<div class="single_order_column ir_display_none fifth_column fix">' +
                    currency +
                    ' <span id="item_modifiers_price_table_' +
                    item_id +
                    '">' +
                    modifiers_price +
                    "</span></div>";
                $(".modal_modifiers[data-selected=selected]").each(function (i, obj) {
                    let tmp_mod_name_m_n = $(this).find("p").html();
                    let tmp_mod_name_m_p = $(this).attr("data-price");

                    draw_table_for_order += '<div data-cp_type="3" data-id="' + item_id + '" class="customer_panel_child_' + item_id + ' single_order_column first_column arabic_text_left modifier_incr_n fix"><span class="modifier_txt_custom">' + tmp_mod_name_m_n + '</span></div>';
                    draw_table_for_order += '<div class="3_cp_price_' + item_id + ' single_order_column fifth_column fix modifier_incr_p" data-price="' + tmp_mod_name_m_p + '"> <span>' + tmp_mod_name_m_p + '</span></div>';
                });
                draw_table_for_order += tmp_mul_mod_html_hidden + "</div>";

            }
            if (note != "") {
                draw_table_for_order += '<div class="third_portion fix">';
                draw_table_for_order +=
                    '<div class="single_order_column first_column cart_item_counter  arabic_text_left fix modifier_txt_custom"  data-id="' + item_id + '">' +
                    note_txt +
                    ': <span id="item_note_table_' +
                    item_id +
                    '">' +
                    note +
                    "</span></div>";
                draw_table_for_order += "</div>";
            }

            let modal_item_name_row = $("#modal_item_name_row").html();
            let modal_promo_type_row = Number($("#modal_promo_type_row").html());
            let modal_discount_row = $("#modal_discount_row").html();
            let modal_get_food_menu_id_row = $("#modal_get_food_menu_id_row").html();
            let modal_qty_row = Number($("#modal_qty_row").html());
            let modal_get_qty_row = Number($("#modal_get_qty_row").html());

            let counting_qty = (parseInt((item_quantity / modal_qty_row)) * modal_get_qty_row);

            if (modal_promo_type_row == 2 && counting_qty) {
                draw_table_for_order +=
                    '<div class="free_item_div_' + item_id + '" data-get_fm_id="' + modal_get_food_menu_id_row + '" data-is_free="Yes"><div  data-cp_type="4"  data-id="' + item_id + '"  class="customer_panel single_order_column first_column  arabic_text_left fix"><i data-parent_id="" class="fas fa-pencil-alt free_edit_item txt_5"></i> <span class="4_cp_name_' + item_id + ' arabic_text_left"  id="free_item_name_table_' +
                    item_id +
                    '">' +
                    modal_item_name_row +
                    "</span></div>";
                draw_table_for_order +=
                    '<div class="single_order_column second_column fix">' +
                    currency +
                    ' <span id="free_item_price_table_' +
                    item_id +
                    '">' + (0).toFixed(ir_precision) + '</span></div>';
                draw_table_for_order +=
                    '<div class="single_order_column third_column fix"><i class="fal fa-minus alert_free_item_increase txt_5" id="free_decrease_item_table_' +
                    item_id +
                    '"></i> <span class="4_cp_qty_' + item_id + ' qty_item_custom" id="free_item_quantity_table_' +
                    item_id +
                    '">' +
                    counting_qty +
                    '</span> <i class="fal fa-plus alert_free_item_increase txt_5" id="free_increase_item_table_' +
                    item_id +
                    '"></i></div>';
                draw_table_for_order +=
                    '<div class="single_order_column forth_column fix"><input type="" name="" placeholder="Amt or %" class="discount_cart_input" id="free_percentage_table_' +
                    item_id +
                    '" value="' +
                    discount_input_value +
                    '" disabled></div>';
                draw_table_for_order +=
                    '<div class="single_order_column fifth_column">' +
                    currency +
                    ' <span id="free_item_total_price_table_' +
                    item_id +
                    '">' + (0).toFixed(ir_precision) + '</span><i data-id="' +
                    item_id +
                    '" class="fal fa-times removeCartItemFree"></i></div>';
                draw_table_for_order += "</div></div>";
            }

            draw_table_for_order += row_number > 0 ? "" : "</div>";

            //add to top if new it or update the row
            if (row_number > 0) {
                $(
                    ".order_holder .single_order[data-single-order-row-no=" +
                    row_number +
                    "]"
                ).empty();
                $(
                    ".order_holder .single_order[data-single-order-row-no=" +
                    row_number +
                    "]"
                ).html(draw_table_for_order);
                $(".order_holder .single_order[data-single-order-row-no=" + row_number + "]").attr("id", 'order_for_item_' + item_id);
            } else {
                $(".order_holder").prepend(draw_table_for_order);
            }

            if (s_width <= 700) {
                $.notifyBar({ cssClass: "success", html: item_add_success });
            }
            reset_on_modal_close_or_add_to_cart();
            // return false;
            //do calculation on table
            do_addition_of_item_and_modifiers_price();
        }
        //focus search field
        focusSearch();
    });

    function check_and_show_promotion(item_id) {
        let product_type = 1;
        let product_comb = '';
        let is_promo = '';
        let promo_type = '';
        let string_text = '';
        let discount = 0;
        let get_food_menu_id = 0;
        let qty = 0;
        let get_qty = 0;
        let modal_item_name_row = '';
        for (let i = 0; i < window.items.length; i++) {
            // look for the entry with a matching `code` value
            if (items[i].item_id == item_id) {
                product_type = Number(items[i].product_type);
                product_comb = (items[i].product_comb);
                is_promo = (items[i].is_promo);
                promo_type = (items[i].promo_type);
                string_text = (items[i].string_text);
                discount = (items[i].discount);
                get_food_menu_id = (items[i].get_food_menu_id);
                qty = (items[i].qty);
                get_qty = (items[i].get_qty);
                modal_item_name_row = (items[i].modal_item_name_row);
                /*end_added_new_zakir*/
            }
        }

        if (promo_type == 2) {
            $(".prom_txt").html(string_text);
            $("#modal_promo_type_row").html(promo_type);
            $("#modal_discount_row").html(discount);
            $("#modal_get_food_menu_id_row").html(get_food_menu_id);
            $("#modal_qty_row").html(qty);
            $("#modal_get_qty_row").html(get_qty);
            $("#modal_item_name_row").html(modal_item_name_row);
        } else {
            $(".prom_txt").html('');
            $("#modal_promo_type_row").html('');
            $("#modal_discount_row").html('');
            $("#modal_get_food_menu_id_row").html('');
            $("#modal_qty_row").html('');
            $("#modal_get_qty_row").html('');
            $("#modal_item_name_row").html('');

        }
        if (promo_type == 1) {
            $(".prom_txt").html(string_text);
            $("#modal_discount_amount").html(0);
            $("#modal_discount").val(discount);
            $("#modal_discount").attr("readonly", '');
        } else {
            $("#modal_discount").removeAttr("readonly");
        }
    }

    $(document).on("click", ".vr01_modal_class:visible", function (e) {
        //get modifier price when it's selected
        $("#modal_discount").val('');
        let vr01_modal_price = parseFloat($(this).attr("data-price")).toFixed(ir_precision);
        let item_id = $(this).attr("data-id");
        check_and_show_promotion(item_id);
        let modal_item_vat_percentage = $(this).attr("data-menu_tax");
        let item_name_tmp = $(this).attr("data-item_name_tmp");
        let modal_code = $(this).attr("data-code");
        $("#modal_item_id").html(item_id);

        $(".vr01_modal_class").attr("data-selected", "unselected");

        if ($(this).attr("data-selected") == "unselected") {
            $(this).attr("data-selected", "selected");
            $(this).children("input").prop("checked", true);
        } else if ($(this).attr("data-selected") == "selected") {
            $(this).attr("data-selected", "unselected");
        }
        $("#vr01_modal_price_variable").html(vr01_modal_price);
        $("#modal_item_vat_percentage").html(modal_item_vat_percentage);
        $("#item_name_modal_custom").html(item_name_tmp);

        //update all total with item price
        update_all_vr01_total_price();
    });
    $(document).on("click", ".vr01_modal_class_mod:visible", function (e) {
        //get modifier price when it's selected
        $(".single_modifier").attr("data-selected", "unselected");
        $(".single_modifier").children("input").prop("checked", false);

        let item_id = $(this).attr("data-id");
        let price = $(this).attr("data-price");
        let parent_id = $(this).attr("data-parent_id");
        $(".vr01_modal_class_mod").attr("data-selected", "unselected");

        if ($(this).attr("data-selected") == "unselected") {
            $(this).attr("data-selected", "selected");
            $(this).children("input").prop("checked", true);


        } else if ($(this).attr("data-selected") == "selected") {
            $(this).attr("data-selected", "unselected");
        }

        if ($("#modifier_" + parent_id).attr("data-selected") == "unselected") {
            if (e.which === 1) {
                $("#modifier_" + parent_id).click();
                $("#modifier_" + parent_id).attr('data-price', price);
                $("#modifier_" + parent_id).find('.modifier_price').html("<span>" + price_txt + ":</span> " + price);
            }
        }

        //update all total with item price
        update_all_vr01_total_price();
    });

    function update_all_vr01_total_price() {
        //get item quantity
        let item_quantity = Number($("#item_quantity_modal").val()).toFixed(
            ir_precision
        );
        //get item unit price
        let item_unit_price = parseFloat($("#vr01_modal_price_variable").html()).toFixed(
            ir_precision
        );
        //get item total price without discount
        let item_total_price_without_discount = (
            parseFloat(item_quantity) * parseFloat(item_unit_price)
        ).toFixed(ir_precision);
        //set item total price without discount
        $("#modal_item_price_variable_without_discount").html(
            item_total_price_without_discount
        );

        //get discount from modal
        let discount_on_modal = $("#modal_discount").val();
        discount_on_modal = discount_on_modal != "" ? discount_on_modal : 0;

        //remove last digits if number is more than 2 digits after decimal
        remove_last_two_digit_with_percentage(
            discount_on_modal,
            $("#modal_discount")
        );

        //get discount actual amount on item price
        let actual_modal_discount_amount = get_particular_item_discount_amount(
            discount_on_modal,
            item_total_price_without_discount
        );
        //set actual discount amouto hidden modal element
        $("#modal_discount_amount").html(
            parseFloat(actual_modal_discount_amount).toFixed(ir_precision)
        );

        //get item price after discount
        let item_price_after_discount = (
            parseFloat(item_total_price_without_discount) -
            parseFloat(actual_modal_discount_amount)
        ).toFixed(ir_precision);

        //set item total price with discount
        $("#modal_item_price_variable").html(item_price_after_discount);

        //get modifiers unit sum price
        let modifiers_unit_sum_price = 0;
        $(".modal_modifiers").each(function () {
            if ($(this).attr("data-selected") == "selected") {
                let this_price = Number($(this).attr("data-price"));
                modifiers_unit_sum_price += this_price;
            }
        });

        //set modifiers price as per item quantity
        let modifiers_price = (
            parseFloat(modifiers_unit_sum_price) * parseFloat(item_quantity)
        ).toFixed(ir_precision);
        $("#modal_modifier_price_variable").html(modifiers_price);
        //add items and modifiers price
        let all_price = (
            parseFloat(item_price_after_discount) + parseFloat(modifiers_price)
        ).toFixed(ir_precision);

        //show to all total
        $("#modal_total_price").html(all_price);
    }

    function escape_output(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace("'", "");
    }

    //when plus sign is clicked in the table
    $(document).on(
        "click",
        ".single_order .first_portion .third_column .increase_item_table",
        function () {
            //focus search field
            focusSearch();
            let item_id = $(this).attr("id").substr(20);
            let stock_not_available = $("#stock_not_available").val();
            let qty_current = 1;
            $(".single_order_column").each(function () {
                let qty_counter = Number(
                    $(this)
                        .find("#item_quantity_table_" + item_id)
                        .html()
                );
                if (qty_counter && qty_counter != "NAN") {
                    qty_current += qty_counter;
                }
            });

            let single_order_element_object = $(this).parent().parent().parent();
            //get item id

            //get this item quantity
            let item_quantity = $(this).parent().find("span").html();

            //get this item's unit price
            let unit_price = $(this)
                .parent()
                .parent()
                .find(".second_column span")
                .html();
            let cooking_status = single_order_element_object
                .find("#item_cooking_status_table" + item_id)
                .html();
            if (cooking_status != "" && cooking_status !== undefined) {
                toastr['error']((progress_or_done_kitchen), '');
                return false;
            }
            //increase item quantity
            item_quantity++;

            //increase item's total price based on unit price and quantity
            let updated_total_price = (
                parseFloat(item_quantity) * parseFloat(unit_price)
            ).toFixed(ir_precision);

            //update total price of this item to view
            $(this)
                .parent()
                .parent()
                .find(".item_price_without_discount")
                .html(updated_total_price);

            //update quantity of this item to view
            $(this).parent().find("span").html(item_quantity);

            increase_free_item_qty(2, item_quantity, item_id);
            //do calculation on update values
            do_addition_of_item_and_modifiers_price();
        }
    );
    //when - sign is clicked in the table
    $(document).on(
        "click",
        ".single_order .first_portion .third_column .decrease_item_table",
        function () {
            //focus search field
            focusSearch();
            let single_order_element_object = $(this).parent().parent().parent();
            //get item id
            let item_id = $(this).attr("id").substr(20);
            //get this item quantity
            let item_quantity = $(this).parent().find("span").html();
            //get this item's unit price
            let unit_price = $(this)
                .parent()
                .parent()
                .find(".second_column span")
                .html();
            let cooking_status = single_order_element_object
                .find("#item_cooking_status_table" + item_id)
                .html();

            if (cooking_status != "" && cooking_status !== undefined) {
                toastr['error']((progress_or_done_kitchen), '');
                return false;
            }
            //decrease item quantity if greater then 1 or remove full item from table
            if (item_quantity > 1) {
                //decrease item quantity
                item_quantity--;

                //decrease item's total price based on unit price and quantity
                let updated_total_price = (
                    parseFloat(item_quantity) * parseFloat(unit_price)
                ).toFixed(ir_precision);

                //update total price of this item to view
                $(this)
                    .parent()
                    .parent()
                    .find(".item_price_without_discount")
                    .html(updated_total_price);

                //update quantity of this item to view
                $(this).parent().find("span").html(item_quantity);

                increase_free_item_qty(1, item_quantity, item_id);

                //do calculation on update values
                do_addition_of_item_and_modifiers_price();
            } else {
                $("#order_for_item_" + item_id).remove();
                // clearFooterCartCalculation();
                do_addition_of_item_and_modifiers_price();
            }
            //decrease item's total price bsed on unit price and quantity
        }
    );
    //add discount for specific item
    $(document).on(
        "keyup",
        ".single_order .first_portion .forth_column input",
        function (e) {
            let this_value = $.trim($(this).val());
            if (isNaN(this_value)) {
                $(this).val("");
            }
            do_addition_of_item_and_modifiers_price();
        }
    );
    //add discount for specific item in modal
    $(document).on("keyup", "#modal_discount", function (e) {
        let this_value = $(this).val();

        let pos_4 = Number($("#pos_4").val());
        if (pos_4) {
            if (
                $.trim(this_value) == "" ||
                $.trim(this_value) == "%" ||
                $.trim(this_value) == "%%" ||
                $.trim(this_value) == "%%%" ||
                $.trim(this_value) == "%%%%"
            ) {
            } else {
                let Disc_fields = this_value.split("%");
                let discP = Disc_fields[1];
                if (discP == "") {
                } else {
                    if (isNaN(this_value)) {
                        $(this).val("");
                    }
                }
            }
        } else {
            $(this).val("");
            toastr['error']((menu_not_permit_access + "!"), '');
        }

        update_all_total_price();
    });
    $(document).on("click", "#submit_discount_custom", function (e) {
        checkDiscountType();
    });
    $(document).on("click", "#cancel_discount_modal", function (e) {
        $("#sub_total_discount").val("");
        $("#sub_total_discount1").val("");
        checkDiscountType();
        do_addition_of_item_and_modifiers_price();
        let sale_id = $("#last_future_sale_id").val();
        if (sale_id && sale_id.length > 0) {
            cancel_order_by_click(sale_id, "Cancelled from payment modal");
        }
        $(".modal").removeClass("active").addClass("inActive");
        $(".pos__modal__overlay").fadeOut(300);
        // $(".order_holder").empty();
    });
    $(document).on("click", "#cancel_charge_value", function (e) {
        do_addition_of_item_and_modifiers_price();
    });

    //update all price of modal
    function update_all_total_price() {
        //get item quantity
        let item_quantity = Number($("#item_quantity_modal").val()).toFixed(
            ir_precision
        );
        //get item unit price
        let item_unit_price = parseFloat($("#modal_item_price").html()).toFixed(
            ir_precision
        );

        //get item total price without discount

        let is_variation_product = Number($("#is_variation_product").html());
        if (is_variation_product) {
            item_unit_price = parseFloat($("#vr01_modal_price_variable:visible").html()).toFixed(ir_precision);
        }
        //get item total price without discount
        let item_total_price_without_discount = (
            parseFloat(item_quantity) * (parseFloat(item_unit_price))
        ).toFixed(ir_precision);
        //set item total price without discount
        $("#modal_item_price_variable_without_discount").html(
            item_total_price_without_discount
        );

        //get discount from modal
        let discount_on_modal = $("#modal_discount").val();
        discount_on_modal = discount_on_modal != "" ? discount_on_modal : 0;

        //remove last digits if number is more than 2 digits after decimal
        remove_last_two_digit_with_percentage(
            discount_on_modal,
            $("#modal_discount")
        );

        //get discount actual amount on item price
        let actual_modal_discount_amount = get_particular_item_discount_amount(
            discount_on_modal,
            item_total_price_without_discount
        );
        //set actual discount amouto hidden modal element
        $("#modal_discount_amount").html(
            parseFloat(actual_modal_discount_amount).toFixed(ir_precision)
        );

        //get item price after discount
        let item_price_after_discount = (
            parseFloat(item_total_price_without_discount) -
            parseFloat(actual_modal_discount_amount)
        ).toFixed(ir_precision);

        //set item total price with discount
        $("#modal_item_price_variable").html(item_price_after_discount);

        //get modifiers unit sum price
        let modifiers_unit_sum_price = 0;
        $(".modal_modifiers").each(function () {
            if ($(this).attr("data-selected") == "selected") {
                let this_price = Number($(this).attr("data-price"));
                modifiers_unit_sum_price += this_price;
            }
        });

        //set modifiers price as per item quantity
        let modifiers_price = (
            parseFloat(modifiers_unit_sum_price) * parseFloat(item_quantity)
        ).toFixed(ir_precision);
        $("#modal_modifier_price_variable").html(modifiers_price);
        //add items and modifiers price
        let all_price = (
            parseFloat(item_price_after_discount) + parseFloat(modifiers_price)
        ).toFixed(ir_precision);

        //show to all total
        $("#modal_total_price").html(all_price);
    }
    function update_all_vr01_total_price() {
        //get item quantity
        let item_quantity = Number($("#item_quantity_modal").val()).toFixed(
            ir_precision
        );
        //get item unit price
        let item_unit_price = parseFloat($("#vr01_modal_price_variable").html()).toFixed(
            ir_precision
        );
        //get item total price without discount
        let item_total_price_without_discount = (
            parseFloat(item_quantity) * parseFloat(item_unit_price)
        ).toFixed(ir_precision);
        //set item total price without discount
        $("#modal_item_price_variable_without_discount").html(
            item_total_price_without_discount
        );

        //get discount from modal
        let discount_on_modal = $("#modal_discount").val();
        discount_on_modal = discount_on_modal != "" ? discount_on_modal : 0;

        //remove last digits if number is more than 2 digits after decimal
        remove_last_two_digit_with_percentage(
            discount_on_modal,
            $("#modal_discount")
        );

        //get discount actual amount on item price
        let actual_modal_discount_amount = get_particular_item_discount_amount(
            discount_on_modal,
            item_total_price_without_discount
        );
        //set actual discount amouto hidden modal element
        $("#modal_discount_amount").html(
            parseFloat(actual_modal_discount_amount).toFixed(ir_precision)
        );

        //get item price after discount
        let item_price_after_discount = (
            parseFloat(item_total_price_without_discount) -
            parseFloat(actual_modal_discount_amount)
        ).toFixed(ir_precision);

        //set item total price with discount
        $("#modal_item_price_variable").html(item_price_after_discount);

        //get modifiers unit sum price
        let modifiers_unit_sum_price = 0;
        $(".modal_modifiers").each(function () {
            if ($(this).attr("data-selected") == "selected") {
                let this_price = Number($(this).attr("data-price"));
                modifiers_unit_sum_price += this_price;
            }
        });

        //set modifiers price as per item quantity
        let modifiers_price = (
            parseFloat(modifiers_unit_sum_price) * parseFloat(item_quantity)
        ).toFixed(ir_precision);
        $("#modal_modifier_price_variable").html(modifiers_price);
        //add items and modifiers price
        let all_price = (
            parseFloat(item_price_after_discount) + parseFloat(modifiers_price)
        ).toFixed(ir_precision);

        //show to all total
        $("#modal_total_price").html(all_price);
    }

    function split_increase_free_item_qty(sale_row_id, qty_cart, item_id) {
        // iterate over each item in the array
        let product_type = 1;
        let product_comb = '';
        let is_promo = '';
        let promo_type = '';
        let string_text = '';
        let discount = 0;
        let get_food_menu_id = 0;
        let qty = 0;
        let get_qty = 0;
        let modal_item_name_row = '';
        let draw_table_for_order = '';

        for (let i = 0; i < window.items.length; i++) {
            // look for the entry with a matching `code` value
            if (items[i].item_id == Number(item_id)) {
                product_type = Number(items[i].product_type);
                product_comb = (items[i].product_comb);
                is_promo = (items[i].is_promo);
                promo_type = Number((items[i].promo_type));
                string_text = (items[i].string_text);
                discount = (items[i].discount);
                get_food_menu_id = (items[i].get_food_menu_id);
                qty = (items[i].qty);
                get_qty = (items[i].get_qty);
                modal_item_name_row = (items[i].modal_item_name_row);
                /*end_added_new_zakir*/
            }
        }
        if (is_promo == "Yes" && promo_type == 2) {
            let counting_qty_cart = (parseInt((qty_cart / qty)) * get_qty);
            let this_action = '';
            $(".custom_li_split").each(function () {
                let row_div = $(this).attr("data-row");
                if ($("#myCheckbox_" + row_div).is(":checked")) {
                    this_action = $(this);
                }
            });
            let main_name = $("#row_items_spit_" + sale_row_id).find(".item_name_split").attr('data-main_name');
            if (counting_qty_cart > 0) {
                let free_item_div = this_action.find(".free_item_div_" + get_food_menu_id).attr('data-is_free');
                if (free_item_div == "Yes") {
                    this_action.find(".free_item_div_" + get_food_menu_id + " .qty_right_box").html(counting_qty_cart);
                    this_action.find(".free_item_div_" + get_food_menu_id + " .qty_right_box").attr('data-added_qty_original', counting_qty_cart);

                } else {
                    let html = '   <tr class="row_box_item free_item_div_' + get_food_menu_id + ' remove_free_item_div_' + sale_row_id + '" data-is_free="Yes" data-sale_row_id="' + sale_row_id + '" data-total_vat_per_unit="0" data-id="' + get_food_menu_id + '">\n' +
                        '                                                    <td class="padding_5 name_right_box" data-main_name="' + main_name + '">' + main_name + '</td>\n' +
                        '                                                    <td class="price_right_box">' + (0).toFixed(ir_precision) + '</td>\n' +
                        '                                                    <td data-added_qty_original="' + counting_qty_cart + '" class="qty_right_box qty_right_box_' + sale_row_id + '">' + counting_qty_cart + '</td>\n' +
                        '                                                    <td data-dis_per_right_box="' + (0) + '" class="dis_right_box">' + (0).toFixed(ir_precision) + '</td>\n' +
                        '                                                    <td><span class="total_right_box">' + (0).toFixed(ir_precision) + '</span></td>\n' +
                        '                                                    <td class="last_td"></td>\n' +
                        '                                                </tr>';
                    this_action.find('.spit_tb_tr').append(html);
                }


            } else {
                this_action.find(".free_item_div_" + get_food_menu_id).remove();
            }

        }
    }

    function increase_free_item_qty(type, qty_cart, item_id) {
        // iterate over each item in the array
        let product_type = 1;
        let product_comb = '';
        let is_promo = '';
        let promo_type = '';
        let string_text = '';
        let discount = 0;
        let get_food_menu_id = 0;
        let qty = 0;
        let get_qty = 0;
        let modal_item_name_row = '';
        let draw_table_for_order = ''
        for (let i = 0; i < window.items.length; i++) {
            // look for the entry with a matching `code` value
            if (items[i].item_id == Number(item_id)) {
                product_type = Number(items[i].product_type);
                product_comb = (items[i].product_comb);
                is_promo = (items[i].is_promo);
                promo_type = Number((items[i].promo_type));
                string_text = (items[i].string_text);
                discount = (items[i].discount);
                get_food_menu_id = (items[i].get_food_menu_id);
                qty = (items[i].qty);
                get_qty = (items[i].get_qty);
                modal_item_name_row = (items[i].modal_item_name_row);
                /*end_added_new_zakir*/
            }
        }
        if (is_promo == "Yes" && promo_type == 2) {
            let counting_qty_cart = (parseInt((qty_cart / qty)) * get_qty);
            if (counting_qty_cart > 0) {
                draw_table_for_order +=
                    '<div class="free_item_div_' + item_id + '"  data-get_fm_id="' + get_food_menu_id + '"  data-is_free="Yes"><div  data-cp_type="4" data-id="' + item_id + '" class="customer_panel single_order_column first_column arabic_text_left fix"><i data-parent_id="" class="fas fa-pencil-alt free_edit_item txt_5"></i> <span class="4_cp_name_' + item_id + ' arabic_text_left"  id="free_item_name_table_' +
                    item_id +
                    '">' +
                    modal_item_name_row +
                    "</span></div>";
                draw_table_for_order +=
                    '<div class="single_order_column second_column fix">' +
                    currency +
                    ' <span id="free_item_price_table_' +
                    item_id +
                    '">' + (0).toFixed(ir_precision) + '</span></div>';
                draw_table_for_order +=
                    '<div class="single_order_column third_column fix"><i class="fal fa-minus alert_free_item_increase txt_5" id="free_decrease_item_table_' +
                    item_id +
                    '"></i> <span class="4_cp_qty_' + item_id + ' qty_item_custom" id="free_item_quantity_table_' +
                    item_id +
                    '">' +
                    counting_qty_cart +
                    '</span> <i class="fal fa-plus alert_free_item_increase increase_item_table txt_5" id="free_increase_item_table_' +
                    item_id +
                    '"></i></div>';
                draw_table_for_order +=
                    '<div class="single_order_column forth_column fix"><input type="" name="" placeholder="Amt or %" class="discount_cart_input" id="free_percentage_table_' +
                    item_id +
                    '" value="" disabled></div>';
                draw_table_for_order +=
                    '<div class="single_order_column fifth_column">' +
                    currency +
                    ' <span id="free_item_total_price_table_' +
                    item_id +
                    '">' + (0).toFixed(ir_precision) + '</span><i data-id="' +
                    item_id +
                    '" class="fal fa-times removeCartItemFree"></i></div>';
                draw_table_for_order += "</div></div>";

                let free_item_div = $(".free_item_div_" + item_id).attr('data-is_free');
                if (free_item_div == "Yes") {
                    $("#free_item_quantity_table_" + item_id).html(counting_qty_cart);
                } else {
                    $("#order_for_item_" + item_id).append(draw_table_for_order);
                }
            } else {
                $(".free_item_div_" + item_id).remove();
            }

        }
    }

    $(document).on("click", ".modal_modifiers", function (e) {
        //get modifier price when it's selected
        let modifier_price = parseFloat($(this).attr("data-price")).toFixed(
            ir_precision
        );
        let this_id = ($(this).attr('id')).split('_');
        //get total modifier price
        // let total_modifier_price = parseFloat($('#modal_modifier_price_variable').html()).toFixed(ir_precision);
        let total_modifier_price = parseFloat(
            $("#modal_modifiers_unit_price_variable").html()
        ).toFixed(ir_precision);

        let update_modifier_price = 0;
        //add current modifier price to total modifier price
        if ($(this).attr("data-selected") == "unselected") {
            // $(this).css("background-color", "#B5D6F6");
            $(this).attr("data-selected", "selected");
            $(this).children("input").prop("checked", true);
            if (e.which === 1) {
                $(".vr01_modal_class_mod_" + this_id[1] + ":first").attr("data-selected", "selected");
                $(".margin_for_vr01_mod_" + this_id[1] + ":first").prop("checked", true);
            }


            update_modifier_price = (
                parseFloat(total_modifier_price) + parseFloat(modifier_price)
            ).toFixed(ir_precision);
        } else if ($(this).attr("data-selected") == "selected") {
            $(this).attr("data-selected", "unselected");
            $(this).children("input").prop("checked", false);

            $(".vr01_modal_class_mod_" + this_id[1]).attr("data-selected", "unselected");
            $(".margin_for_vr01_mod_" + this_id[1]).prop("checked", false);

            update_modifier_price = (
                parseFloat(total_modifier_price) - parseFloat(modifier_price)
            ).toFixed(ir_precision);
        }

        let checkbox = $(this).children('input[type="checkbox"]');
        /*checkbox.prop('checked', checkbox.prop('checked'));*/

        //update total modifier price html element
        // $('#modal_modifier_price_variable').html(update_modifier_price);
        $("#modal_modifiers_unit_price_variable").html(update_modifier_price);

        //update all total with item price
        update_all_total_price();
    });

    $(document).on("click", "#decrease_item_modal", function (e) {
        //get recent item price
        let current_item_price_modal = parseFloat(
            $("#modal_item_price").html()
        ).toFixed(ir_precision);
        //get current item quantity
        let current_item_quantity = Number($("#item_quantity_modal").val());

        //decrease quantity if greater than 1
        if (current_item_quantity > 1) current_item_quantity--;

        //update quantity

        $("#item_quantity_modal").val(current_item_quantity);
        //update all total with item price
        update_all_total_price();
    });

    function searchItemAndConstructGallery(searchedValue) {
        let resultObject = search(searchedValue, window.items);
        return resultObject;
    }

    function show_all_items() {
        $(".specific_category_items_holder").hide();

        setTimeout(function () {
            let foundItems = searchItemAndConstructGallery("");
            let searched_category_items_to_show =
                '<div id="searched_item_found" class="specific_category_items_holder">';
            for (let key in foundItems) {
                if (foundItems.hasOwnProperty(key)) {
                    let veg_status = "no";
                    if (foundItems[key].veg_item_status == "yes") {
                        veg_status = "yes";
                    }
                    let beverage_status = "no";
                    if (foundItems[key].beverage_item_status == "yes") {
                        beverage_status = "yes";
                    }

                    if (foundItems[key].parent_id == '0') {
                        searched_category_items_to_show +=
                            '<div class="single_item animate__animated all_item_custom" data-price="' + foundItems[key].price + '"  data-price_take="' + foundItems[key].price_take + '"    data-is_variation="' + foundItems[key].is_variation + '"  data-parent_id="' + foundItems[key].parent_id + '"    data-price_delivery="' + foundItems[key].price_delivery + '" data-veg_status="' +
                            veg_status +
                            '" data-beverage_status="' +
                            beverage_status +
                            '" id="item_' +
                            foundItems[key].item_id +
                            '">';
                        searched_category_items_to_show +=
                            '<p class="item_name" data-tippy-content="' +
                            foundItems[key].item_name +
                            '">' +
                            foundItems[key].item_name +
                            "</p>";
                        searched_category_items_to_show +=
                            '<p class="item_price">' +
                            price_txt +
                            ": " +
                            foundItems[key].price +
                            "</p>";
                        searched_category_items_to_show +=
                            '<span class="item_vat_percentage ir_display_none">' +
                            foundItems[key].vat_percentage +
                            "</span>";
                        searched_category_items_to_show += "</div>";
                    }
                }
            }
            searched_category_items_to_show += "<div>";
            $("#searched_item_found").remove();
            $(".specific_category_items_holder").fadeOut(0);
            $(".category_items").prepend(searched_category_items_to_show);
            if (food_menu_tooltip == "show") {
                tippy(".item_name", {
                    placement: "bottom-start",
                });
            }
        }, 100);

        $(document).on("click", ".single_table_div", function (e) {
            if ($(this).attr("data-table-checked") != "busy") {
                $(
                    ".single_table_div[data-table-checked=checked],.single_table_div[data-table-checked=unchecked]"
                ).attr("data-table-checked", "unchecked");
                $(
                    ".single_table_div[data-table-checked=checked],.single_table_div[data-table-checked=unchecked]"
                ).css("background-color", "#ffffff");
                $(this).css("background-color", "#b6d6f6");
                $(this).attr("data-table-checked", "checked");
            }
        });
        $(document).on("click", "#close_select_table_modal", function (e) {
            $(".single_table_div[data-table-checked=checked]").css(
                "background-color",
                "#ffffff"
            );
            $(".single_table_div[data-table-checked=checked]").attr(
                "data-table-checked",
                "unchecked"
            );
            $("#show_tables_modal").slideUp(333);
        });
        $(document).on("click", "#selected_table_done", function (e) {
            $("#show_tables_modal").slideUp(333);
        });
        $(document).on("click", "#refresh_order", function (e) {
            $(this).css("color", "#495057");
            $("#stop_refresh_for_search").html("yes");
            set_new_orders_to_view_for_interval();
        });

        
        /*$("body").on("click", ".running_order_right_arrow", function () {
            $(this).parent().parent().attr('style','');
            $(this).parent().parent().toggleClass("active");
        });*/

        $("body").on("click", ".inside_single_order_container", function () {
            $(this).attr('style', '');
            //remove all active
            $(".inside_single_order_container").removeClass("active");
            $(this).addClass("active");
        });

        function update_kitchen_status(sale_no) {
            $.ajax({
                url: base_url + "Kitchen/get_update_kitchen_status_ajax",
                method: "POST",
                datatype: 'json',
                data: { sale_no: sale_no },
                success: function (response) {
                    response = JSON.parse(response);
                    for (let k in response) {
                        let cooking_status = response[k].cooking_status;
                        let item_id = Number(response[k].food_menu_id);
                        $(".update_kitchen_status ").each(function () {
                            let this_item_id = Number($(this).attr("data-id"));
                            if (item_id == this_item_id) {
                                $(this).attr("data-is_cooked", cooking_status);
                            }

                        });

                    }
                },
                error: function () {

                },
            });
        }
        $(document).on("click", "#modify_order", function (e) {
            let pos_3 = Number($("#pos_3").val());
            if (pos_3) {
                //focus search field
                focusSearch();
                if (
                    $(".holder .order_details > .single_order[data-selected=selected]")
                        .length > 0
                ) {
                    //get total items in cart
                    let total_items_in_cart = $(".order_holder .single_order").length;

                    if (total_items_in_cart > 0) {
                        swal(
                            {
                                title: warning + "!",
                                text: txt_err_pos_5,
                                confirmButtonColor: "#3c8dbc",
                                confirmButtonText: ok,
                                showCancelButton: true,
                            },
                            function () {
                                $(".order_holder").empty();
                                let sale_id = $(".holder .order_details .single_order[data-selected=selected]").attr("id").substr(6);
                                let running_order_order_number = $(".holder .order_details .single_order[data-selected=selected]").find(".running_order_order_number").text();
                                $("#update_sale_id").val(sale_id);
                                get_details_of_a_particular_order(sale_id);
                                setTimeout(function () {
                                    update_kitchen_status(running_order_order_number);
                                }, 1000);
                            }
                        );
                    } else {
                        let sale_id = $(
                            ".holder .order_details .single_order[data-selected=selected]"
                        )
                            .attr("id")
                            .substr(6);
                        let running_order_order_number = $(".holder .order_details .single_order[data-selected=selected]").find(".running_order_order_number").text();
                        $("#update_sale_id").val(sale_id);
                        get_details_of_a_particular_order(sale_id);
                        setTimeout(function () {
                            update_kitchen_status(running_order_order_number);
                        }, 1000);

                    }
                } else {
                    toastr['error']((please_select_open_order), '');
                }
            } else {
                toastr['error']((menu_not_permit_access + "!"), '');
            }



        });
        $(document).on("click", "#single_order_details", function (e) {
            if (
                $(".holder .order_details > .single_order[data-selected=selected]")
                    .length > 0
            ) {
                let sale_id = $(
                    ".holder .order_details .single_order[data-selected=selected]"
                )
                    .attr("id")
                    .substr(6);
                get_details_of_a_particular_order_for_modal(sale_id);
            } else {
                toastr['error']((please_select_open_order), '');
            }
        });
        $(document).on("click", "#hold_sale", function (e) {
            if ($(".order_holder .single_order").length > 0) {
                let status = true;
                if (!checkInternetConnection()) {
                    let draft_error = $("#draft_error").val();
                    status = false;
                    toastr['error']((draft_error), '');
                }
                if (status) {
                    $.ajax({
                        url: base_url + "Sale/get_new_hold_number_ajax",
                        method: "GET",
                        success: function (response) {
                            $("#generate_sale_hold_modal").addClass("active");
                            $(".pos__modal__overlay").fadeIn(200);
                            $("#hold_generate_input").val(response);
                        },
                        error: function () {
                            alert(a_error);
                        },
                    });
                }

            } else {
                toastr['error']((cart_empty), '');
            }
            // $('#show_sale_hold_modal').show();
        });
        $(document).on("click", "#close_hold_modal", function (e) {
            $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .removeClass("active")
                .addClass("inActive");
            setTimeout(function () {
                $(".modal").removeClass("inActive");
            }, 1000);
            $(".pos__modal__overlay").fadeOut(300);

            $("#hold_generate_input").val("");
            $("#hold_generate_input").css("border", "1px solid #a0a0a0");
        });
        $(document).on("click", "#hold_cart_info", function (e) {
            //focus search field
            focusSearch();
            let hold_number = $("#hold_generate_input").val();
            if (hold_number == "") {
                $("#hold_generate_input").css("border", "1px solid #dc3545");
                return false;
            } else {
                $("#hold_generate_input").css("border", "1px solid #a0a0a0");
            }
            let selected_order_type_object = $(".main_top")
                .find("button[data-selected=selected]")
                .attr("data-selected", "unselected");
            let total_items_in_cart = $(".order_holder .single_order").length;
            let sub_total = parseFloat($("#sub_total_show").html()).toFixed(
                ir_precision
            );
            let charge_type = $("#charge_type").val();
            let total_vat = parseFloat($("#all_items_vat").html()).toFixed(
                ir_precision
            );
            let total_payable = parseFloat($("#total_payable").html()).toFixed(
                ir_precision
            );
            let total_item_discount_amount = parseFloat(
                $("#total_item_discount").html()
            ).toFixed(ir_precision);
            let sub_total_with_discount = parseFloat(
                $("#discounted_sub_total_amount").html()
            ).toFixed(ir_precision);
            let sub_total_discount_amount = parseFloat(
                $("#sub_total_discount_amount").html()
            ).toFixed(ir_precision);
            let total_discount_amount = parseFloat(
                $("#all_items_discount").html()
            ).toFixed(ir_precision);

            let delivery_charge = '';
            let delivery_charge_actual_charge = '';
            let show_charge_amount_ = Number($("#show_charge_amount").html());
            if (show_charge_amount_) {
                delivery_charge = $("#delivery_charge").val();
                delivery_charge_actual_charge = $("#show_charge_amount").html();
            }

            let tips_amount = $("#tips_amount").val();
            let sub_total_discount_value = $("#sub_total_discount").val();
            let sub_total_discount_type = "";
            let sale_vat_objects = [];
            $("#tax_row_show .tax_field").each(function (i, obj) {
                let tax_field_id = $(this).attr("data-tax_field_id");
                let tax_field_type = $(this).attr("data-tax_field_type");
                let tax_field_amount = $(this).attr("data-tax_field_amount");
                sale_vat_objects.push({
                    tax_field_id: tax_field_id,
                    tax_field_type: tax_field_type,
                    tax_field_amount: parseFloat(tax_field_amount).toFixed(ir_precision),
                });
            });
            if (total_items_in_cart == 0) {
                toastr['error']((cart_empty), '');
                return false;
            }
            if (
                sub_total_discount_value.length > 0 &&
                sub_total_discount_value.substr(sub_total_discount_value.length - 1) ==
                "%"
            ) {
                sub_total_discount_type = "percentage";
            } else {
                sub_total_discount_type = "fixed";
            }
            let selected_table = 0;

            if ($(".single_table_div[data-table-checked=checked]").length > 0) {
                selected_table = $(".single_table_div[data-table-checked=checked]")
                    .attr("id")
                    .substr(13); //1; //demo
            }

            let order_type = 0;
            if (selected_order_type_object.attr("data-id") == "delivery_button") {
                order_type = 3;
            } else if (selected_order_type_object.attr("data-id") == "dine_in_button") {
                order_type = 1;
            } else if (selected_order_type_object.attr("data-id") == "take_away_button") {
                order_type = 2;
            }

            let customer_id = $("#walk_in_customer").val();
            let waiter_id = $("#select_waiter").val();

            let delivery_partner_id = '';
            if (order_type == 3) {
                delivery_partner_id = $("input[name='delivery_partner_id']:checked").val();
            }



            let order_status = 1;
            let open_invoice_date_hidden = $("#open_invoice_date_hidden").val();
            let order_info = "{";
            order_info += '"customer_id":"' + customer_id + '",';
            order_info += '"delivery_partner_id":"' + delivery_partner_id + '",';
            order_info += '"waiter_id":"' + waiter_id + '",';
            order_info +=
                '"open_invoice_date_hidden":"' + open_invoice_date_hidden + '",';
            order_info += '"total_items_in_cart":"' + total_items_in_cart + '",';
            order_info += '"charge_type":"' + charge_type + '",';
            order_info += '"sub_total":"' + sub_total + '",';
            order_info += '"total_vat":"' + total_vat + '",';
            order_info += '"total_payable":"' + total_payable + '",';
            order_info +=
                '"total_item_discount_amount":"' + total_item_discount_amount + '",';
            order_info +=
                '"sub_total_with_discount":"' + sub_total_with_discount + '",';
            order_info +=
                '"sub_total_discount_amount":"' + sub_total_discount_amount + '",';
            order_info += '"total_discount_amount":"' + total_discount_amount + '",';
            order_info += '"delivery_charge":"' + delivery_charge + '",';
            order_info += '"tips_amount":"' + tips_amount + '",';
            order_info += '"delivery_charge_actual_charge":"' + delivery_charge_actual_charge + '",';
            let tips_amount_actual_charge = $("#show_tips_amount").html();
            order_info += '"tips_amount_actual_charge":"' + tips_amount_actual_charge + '",';
            order_info +=
                '"sub_total_discount_value":"' + sub_total_discount_value + '",';
            order_info +=
                '"sub_total_discount_type":"' + sub_total_discount_type + '",';
            order_info += '"selected_table":"' + selected_table + '",';
            order_info += '"order_type":"' + order_type + '",';
            order_info += '"order_status":"' + order_status + '",';
            order_info +=
                '"sale_vat_objects":' + JSON.stringify(sale_vat_objects) + ",";

            let orders_table = "";
            orders_table += '"orders_table":';
            orders_table += "[";
            let x = 1;
            let total_orders_table = $(".new_book_to_table").length;
            $(".new_book_to_table").each(function (i, obj) {
                let table_id = $(this).attr("id").substr(16);
                let person = $(this).find(".third_column").html();
                if (x == total_orders_table) {
                    orders_table +=
                        '{"table_id":"' + table_id + '", "persons":"' + person + '"}';
                } else {
                    orders_table +=
                        '{"table_id":"' + table_id + '", "persons":"' + person + '"},';
                }
                x++;
            });
            orders_table += "],";
            order_info += orders_table;

            let items_info = "";
            items_info += '"items":';
            items_info += "[";

            if ($(".order_holder .single_order").length > 0) {
                let k = 1;
                $(".order_holder .single_order").each(function (i, obj) {
                    let item_id = $(this).attr("id").substr(15);
                    let item_name = $(this)
                        .find("#item_name_table_" + item_id)
                        .html();
                    let item_vat = $(this).find(".item_vat").html();
                    let item_discount = $(this)
                        .find("#percentage_table_" + item_id)
                        .val();
                    let discount_type = "";
                    if (
                        item_discount.length > 0 &&
                        item_discount.substr(item_discount.length - 1) == "%"
                    ) {
                        discount_type = "percentage";
                    } else {
                        discount_type = "fixed";
                    }
                    let item_price_without_discount = $(this)
                        .find(".item_price_without_discount")
                        .html();
                    let item_unit_price = $(this)
                        .find("#item_price_table_" + item_id)
                        .html();
                    let item_quantity = $(this)
                        .find("#item_quantity_table_" + item_id)
                        .html();
                    let item_price_with_discount = $(this)
                        .find("#item_total_price_table_" + item_id)
                        .html();
                    let item_discount_amount = (
                        parseFloat(item_price_without_discount) -
                        parseFloat(item_price_with_discount)
                    ).toFixed(ir_precision);
                    items_info +=
                        '{"item_id":"' +
                        item_id +
                        '", "item_name":"' +
                        item_name +
                        '", "item_vat":' +
                        item_vat +
                        ",";
                    items_info +=
                        '"item_discount":"' +
                        item_discount +
                        '","discount_type":"' +
                        discount_type +
                        '","item_price_without_discount":"' +
                        item_price_without_discount +
                        '",';
                    items_info +=
                        '"item_unit_price":"' +
                        item_unit_price +
                        '","item_quantity":"' +
                        item_quantity +
                        '",';
                    items_info +=
                        '"item_price_with_discount":"' +
                        item_price_with_discount +
                        '","item_discount_amount":"' +
                        item_discount_amount +
                        '"';

                    let ji = 1;
                    let modifier_vat = "";
                    $(".item_vat_modifier_" + item_id).each(function (i, obj) {
                        if (ji == $(".item_vat_modifier_" + item_id).length) {
                            modifier_vat += $(this).html();
                        } else {
                            modifier_vat += $(this).html() + "|||";
                        }
                        ji++;
                    });

                    if ($(this).find(".second_portion").length > 0) {
                        let modifiers_id = $(this)
                            .find("#item_modifiers_id_table_" + item_id)
                            .html();
                        let modifiers_price = $(this)
                            .find("#item_modifiers_price_table_" + item_id)
                            .html();
                        items_info +=
                            ',"modifiers_id":"' +
                            modifiers_id +
                            '", "modifiers_price":"' +
                            modifiers_price +
                            '", "modifier_vat":' +
                            JSON.stringify(modifier_vat);
                    } else {
                        items_info +=
                            ',"modifiers_id":"", "modifiers_price":"", "modifier_vat":""';
                    }
                    if ($(this).find(".third_portion").length > 0) {
                        let item_note = $(this)
                            .find("#item_note_table_" + item_id)
                            .html();
                        items_info += ',"item_note":"' + item_note + '"';
                    } else {
                        items_info += ',"item_note":""';
                    }
                    items_info +=
                        k == $(".order_holder .single_order").length ? "}" : "},";
                    k++;
                });
            }
            items_info += "]";

            order_info += items_info + "}";

            let order_object = JSON.stringify(order_info);

            add_hold_by_ajax(order_object, hold_number);
        });
    }

    //show all when all button is clicked
    $(document).on(
        "click",
        "#button_category_show_all,.button_category_show_all1",
        function () {
            $(".specific_category_items_holder").fadeOut(0);
            let foundItems = searchItemAndConstructGallery("");
            let searched_category_items_to_show =
                '<div id="searched_item_found" class="specific_category_items_holder 003">';

            for (let key in foundItems) {
                if (foundItems.hasOwnProperty(key)) {
                    if (foundItems[key].parent_id == '0') {
                        searched_category_items_to_show +=
                            '<div class="single_item animate__animated animate__flipInX"  data-price="' + foundItems[key].price + '"  data-price_take="' + foundItems[key].price_take + '"   data-is_variation="' + foundItems[key].is_variation + '"  data-parent_id="' + foundItems[key].parent_id + '"   data-price_delivery="' + foundItems[key].price_delivery + '"  id="item_' +
                            foundItems[key].item_id +
                            '">';
                        // searched_category_items_to_show +=
                        //   '<img src="' + foundItems[key].image + '" alt="" width="141">';
                        searched_category_items_to_show +=
                            '<p class="item_name" data-tippy-content="' +
                            foundItems[key].item_name +
                            '">' +
                            foundItems[key].item_name +
                            "</p>";
                        searched_category_items_to_show +=
                            '<p class="item_price">' +
                            price_txt +
                            ": " +
                            foundItems[key].price +
                            "</p>";
                        searched_category_items_to_show += "</div>";
                    }
                }
            }
            searched_category_items_to_show += "<div>";
            $("#searched_item_found").remove();
            $(".specific_category_items_holder").fadeOut(0);
            $(".category_items").prepend(searched_category_items_to_show);
            if (food_menu_tooltip == "show") {
                tippy(".item_name", {
                    placement: "bottom-start",
                });
            }
        }
    );

    setTimeout(function () {
        show_all_items();
    }, 700);

    $(document).on(
        "click",
        "#dp_modal_cancel_button",
        function (e) {
            $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .removeClass("active")
                .addClass("inActive");
            setTimeout(function () {
                $(".modal").removeClass("inActive");
            }, 1000);
            $(".pos__modal__overlay").fadeOut(300);
        }
    );
    //for tablet js
    $(document).on("click", ".tablet_btn", function (e) {
        let id_btn = Number($(this).attr("data-id"));
        $(".type_temp_div").removeClass("active_tmp_btn");
        $(this).addClass("active_tmp_btn");

        if (id_btn == 1) {
            $(".dine_in_button").click();
        } else if (id_btn == 2) {
            $(".take_away_button").click();
        } else if (id_btn == 3) {
            $(".delivery_button").click();
        }
    });

    $(document).on("click", "#click_here_to_uncheck", function (e) {
        $(".class_check").prop('checked', false);
    });

    let open_invoice_date_hidden = $("#open_invoice_date_hidden").val();

    $(".datepicker_custom")
        .datepicker({
            autoclose: true,
            format: "yyyy-mm-dd",
            startDate: "0",
            todayHighlight: true,
        })
        .datepicker("update", open_invoice_date_hidden);

    $(".datepicker_custom").on("changeDate", function (event) {
        $("#open_invoice_date_hidden").val(event.format());
    });

    /**
     * Click to Open Modal
     */
    body_el.on("click", "#cart_item_option_open", function () {
        $("#cart_item_option_modal").addClass("active");
        $(".pos__modal__overlay2").fadeIn(300);
    });
    body_el.on("click", "#open_discount_modal", function () {

        let sub_total_discount = $("#sub_total_discount").val();
        $("#sub_total_discount1").val(removePercentage(sub_total_discount));
        $("#sub_total_discount1").focus();
        $("#discount_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(300);
    });
    body_el.on("click", ".login_modal_btn", function () {
        $("#online_login_phone").focus();
        $("#online_order_login_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(300);
    });
    body_el.on("click", "#customer_open", function () {
        $("#customer_modal_open").addClass("active");
        $(".pos__modal__overlay").fadeIn(300);
    });
    body_el.on("click", "#waiter_open", function () {
        $("#waiter_modal_open").addClass("active");
        $(".pos__modal__overlay").fadeIn(300);
    });
    body_el.on("click", "#open_charge_modal", function () {
        $("#delivery_charge").focus();
        $("#charge_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(300);
    });
    body_el.on("click", ".submit_to_return_modal", function () {
        do_addition_of_item_and_modifiers_price();
        setTimeout(function () {
            $("#cart_item_option_open").click();
        }, 500);
    });
    body_el.on("click", "#open_tips_modal", function () {
        $("#tips_amount").focus();
        $("#tips_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(300);
    });
    body_el.on("click", "#open_tax_modal", function () {
        $("#tax_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(300);
    });

    body_el.on("click", ".cancel", function () {
        $(this)
            .parent()
            .parent()
            .parent()
            .removeClass("active")
            .addClass("inActive");
        setTimeout(function () {
            $(".modal").removeClass("inActive");
        }, 1000);
        $(".pos__modal__overlay").fadeOut(300);
    });
    body_el.on("click", ".submit", function () {
        $(".modal").removeClass("active");
        $(".pos__modal__overlay").fadeOut(300);
    });

    /**
     * Only For Cart Item Options Modal Start
     */
    body_el
        .find("#cart_item_option_modal")
        .find(".item")
        .find(".fal")
        .on("click", function (e) {
            $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .removeClass("active")
                .addClass("inActive");
            setTimeout(function () {
                $(".modal").removeClass("inActive");
            }, 1000);
            $(".pos__modal__overlay2").fadeOut(300);
        });
    body_el
        .find("#cart_item_option_modal")
        .find(".alertCloseIcon")
        .on("click", function () {
            $(this)
                .parent()
                .parent()
                .parent()
                .removeClass("active")
                .addClass("inActive");
            setTimeout(function () {
                $(".modal").removeClass("inActive");
            }, 1000);
            $(".pos__modal__overlay2").fadeOut(300);
        });
    body_el
        .find("#cart_item_option_modal")
        .find(".cancel")
        .on("click", function () {
            $(this)
                .parent()
                .parent()
                .parent()
                .removeClass("active")
                .addClass("inActive");
            setTimeout(function () {
                $(".modal").removeClass("inActive");
            }, 1000);
            $(".pos__modal__overlay2").fadeOut(300);
        });
    body_el
        .find("#cart_item_option_modal")
        .find(".submit")
        .on("click", function () {
            $(".modal").removeClass("active");
            $(".pos__modal__overlay2").fadeOut(300);
        });
    body_el.on("click", ".pos__modal__overlay2", function () {
        $(".modal").removeClass("active");
        $(this).fadeOut(300);
    });

    $(document).on("click", ".place_order_operation", function (e) {
        e.preventDefault();

        // Check if cart is empty
        let totalItems = parseFloat($("#total_items_in_cart").text());
        if (isNaN(totalItems) || totalItems <= 0) {
            toastr.warning("Cart is empty. Please add items before placing the order.");
            return;
        }
        
        // Proceed with order actions
        $("#create_invoice_and_close").click();
        $(".invoice_btn_class").eq(1).click();
    });


    $(document).on("click", "#create_invoice_and_close", function (e) {

        $(".empty_title").show();
        $("#payment_list_div").html('');
        $("#finalize_total_payable").html(Number($("#total_payable").text()).toFixed(ir_precision));
        $("#finalize_total_payable").attr('data-original_payable', Number($("#total_payable").text()).toFixed(ir_precision));
        $("#finalize_total_due").html($("#total_payable").text());
        $("#selected_invoice_sale_customer").val($("#walk_in_customer").val());
        $("#pay_amount_invoice_input").val($("#total_payable").text());

        $("#order_payment_modal").removeClass("inActive");
        $("#order_payment_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(200);
        checkSMSDisabled($("#walk_in_customer").val());
        $("#open_invoice_date_hidden").val($("#open_invoice_date_hidden").val());
        $(".previous_due_div").css('opacity', '0');
        $("#is_multi_currency").val('');
        $(".set_no_access").removeClass('no_access');
        $(".finalize_modal_is_mul_currency").hide(300);
        $("#finalize_amount_input").html('');
        $(".badge_custom").remove();
        $(".previous_due_div").show();
        $(".loyalty_point_div").hide();
        //cart details button
        $("#cart_modal_total_item_text").html(Number($("#total_items_in_cart").text()).toFixed(0));
        $("#cart_modal_total_subtotal_text").html(Number($("#total_payable").text()).toFixed(ir_precision));
        $("#cart_modal_total_discount_text").html(Number($("#discounted_sub_total_amount").text()).toFixed(ir_precision));
        $("#cart_modal_total_discount_all_text").html(Number($("#all_items_discount").text()).toFixed(ir_precision));
        $("#cart_modal_total_discount_all_text").attr('data-original_discount', Number($("#all_items_discount").text()).toFixed(ir_precision));
        $("#cart_modal_total_tax_text").html(Number($("#show_vat_modal").text()).toFixed(ir_precision));
        $("#cart_modal_total_charge_text").html(Number($("#show_charge_amount").text()).toFixed(ir_precision));
        $("#cart_modal_total_tips_text").html(Number($("#show_tips_amount").text()).toFixed(ir_precision));
        $("#cart_modal_total_rounding_texts").html(Number($("#rounding_amount_hidden").text()).toFixed(ir_precision));


        set_default_payment();
        cal_finalize_modal('');
        $("#finalize_update_type").html("2"); //when 2 update payment method, close time and order_status to 3

        $("#order_payment_modal").removeClass("inActive");
        $("#order_payment_modal").addClass("active");
    });

    function checkSMSDisabled(customer_id) {
        if (customer_id == 1) {
            $("#check_send_sms").prop('checked', false);
            $("#check_send_sms").prop('disabled', true);
        } else {
            $("#check_send_sms").prop('disabled', false);
        }
    }

    function cal_finalize_modal(is_ignore) {
        let finalize_total_payable = Number($("#finalize_total_payable").html());
        let is_multi_currency = Number($("#is_multi_currency").val());

        let tmp_total = 0;
        $(".payment_list_amount").each(function (i, obj) {
            let this_txt = Number($(this).text());
            tmp_total += this_txt;
        });

        let multi_currency_amount = Number($("#multi_currency_amount").val());
        if (is_multi_currency == 1 && multi_currency_amount) {
            tmp_total = finalize_total_payable;
        }

        $("#finalize_total_paid").html(tmp_total.toFixed(ir_precision));
        $("#finalize_total_due").html((finalize_total_payable - tmp_total).toFixed(ir_precision));

        let default_remaining_cash = (finalize_total_payable - tmp_total) && (finalize_total_payable - tmp_total) > 0 ? (finalize_total_payable - tmp_total) : 0;
        $(".set_default_quick_cach").attr("data-amount", (default_remaining_cash).toFixed(ir_precision));
        $(".set_default_quick_cach").html((default_remaining_cash).toFixed(ir_precision));
    }

    function set_active_payment() {
        $(".set_payment").each(function (i, obj) {
            let this_txt = $(this).text();
            let id = Number($(this).attr("data-id"));
            if ($(this).hasClass('active')) {
                $("#payment_preview").html(this_txt);
                if (this_txt == "Cash") {
                    $(".cash_div").show();
                    $("#finalize_change_amount_input").prop("readonly", true);
                    $("#finalize_amount_input").prop("readonly", true);
                } else {
                    $("#finalize_change_amount_input").prop("readonly", false);
                    $("#finalize_amount_input").prop("readonly", false);
                    $(".cash_div").hide();
                }
            }
        });
    }


    function check_cash_payment(amount) {
        $(".set_payment").each(function (i, obj) {
            let id = Number($(this).attr("data-id"));
            if ($(this).hasClass('active')) {
                let finalize_total_payable = Number($("#finalize_total_due").text());
                if (finalize_total_payable == amount) {
                    let check_exist = false;
                    let payment_id = 0;
                    let payment_name = $("#payment_preview").text();
                    $(".set_payment").each(function (i, obj) {
                        let this_txt = $(this).text();
                        if ($(this).hasClass('active')) {
                            payment_id = Number($(this).attr('data-id'));
                        }
                    });

                    $(".payment_list_counter").each(function (i, obj) {
                        let payment_id_added = Number($(this).attr('data-payment_id'));
                        if (payment_id === payment_id_added) {
                            check_exist = true;
                        }
                    });
                    if (check_exist == true) {
                        let already_added = $("#already_added").val();
                        toastr['error']((already_added), '');
                    }
                }
            }
        });
    }

    $(document).on("keyup", "#finalize_given_amount_input", function (e) {
        let this_value = $.trim($(this).val());
        if (isNaN(this_value)) {
            $(this).val("");
        }
        let finalize_total_payable = Number($("#finalize_total_payable").text());
        let change_amount = (this_value - finalize_total_payable);
        change_amount = change_amount && change_amount > 0 ? change_amount : 0;
        if (this_value == '') {
            $("#finalize_change_amount_input").val('');
        } else {
            $("#finalize_change_amount_input").val(change_amount);
        }
        let change_amount_tmp = Number(this_value - change_amount).toFixed(2);
        $("#finalize_amount_input").val(change_amount_tmp);
        check_cash_payment(change_amount_tmp);
    });

    $(document).on("click", ".set_payment", function (e) {
        let payable = Number($("#finalize_total_payable").text() || $("#finalize_total_payable").html());
        $("#pay_amount_invoice_input").val(payable.toFixed(ir_precision));
        $("#finalize_amount_input").val(payable.toFixed(ir_precision));

        $(".set_no_access").removeClass('no_access');

        if ($(this).text().trim() === "Cash") {
            $("#finalize_given_amount_input").val(payable.toFixed(ir_precision));
            $("#finalize_change_amount_input").val(0);
        } else {
            $("#finalize_given_amount_input").val('');
            $("#finalize_change_amount_input").val('');
        }
        calculate_create_invoice_modal();

        let id = Number($(this).attr('data-id'));
        let status = true;
        if (id === 5 && !checkInternetConnection()) {
            let loyalty_point_error = $("#loyalty_point_error").val();
            status = false;
            toastr['error']((loyalty_point_error), '');
        }
        if (status) {
            let amount_txt = $("#amount_txt").val();
            let loyalty_point_txt = $("#loyalty_point_txt").val();
            let loyalty_rate = Number($("#loyalty_rate").val());

            if (Number(id) != 5) {
                $(".previous_due_div").show();
                $(".loyalty_point_div").hide();
                $(".amount_txt").html(amount_txt);
                $("#finalize_amount_input").attr("placeholder", amount_txt);
                if (id != undefined) {
                    $('.set_payment').removeClass('active');
                    $(this).addClass('active');
                }
                set_active_payment();
                set_finalize_discount();
                cal_finalize_modal('');
                $("#payment_list_div .payment_list_counter").remove();
                setTimeout(function () {
                    $("#add_payment").click();
                }, 1000);
            } else {
                let customer_id_loyalty = Number($("#selected_invoice_sale_customer").val());
                if (customer_id_loyalty != 1) {
                    $.ajax({
                        url: base_url + "Sale/getTotalLoyaltyPoint",
                        method: "POST",
                        dataType: 'json',
                        data: {
                            customer_id: customer_id_loyalty
                        },
                        success: function (response) {
                            if (response.status == true) {
                                $(".previous_due_div").hide();
                                $(".loyalty_point_div").show();
                                $("#available_loyalty_point").html(Number(response.total_point));
                            } else {
                                toastr['error']((response.alert_txt), '');
                            }
                        },
                        error: function () {
                            alert(a_error);
                        },
                    });
                    $(".amount_txt").html(loyalty_point_txt);
                    $("#finalize_amount_input").attr("placeholder", loyalty_point_txt);

                    let finalize_total_due_ = Number($("#finalize_total_due").html());
                    let tool_tip_loyalty_point = $("#tool_tip_loyalty_point").val();
                    $(".set_default_quick_cach").html(((1 / loyalty_rate) * finalize_total_due_).toFixed(ir_precision) + " &nbsp;&nbsp;<span data-tippy-content='" + tool_tip_loyalty_point + "' class='tool_tip_loyalty_point fa fa-info'></span>");
                    $(".set_default_quick_cach").attr('data-amount', ((1 / loyalty_rate) * finalize_total_due_).toFixed(ir_precision));

                    tippy(".tool_tip_loyalty_point", {
                        animation: "scale",
                        allowHTML: true,
                    });

                    $("#finalize_amount_input").css("border", "1px solid #bcbdbe");
                    $("#finalize_amount_input").focus();
                    if (id != undefined) {
                        $('.set_payment').removeClass('active');
                        $(this).addClass('active');
                    }
                    set_active_payment();
                } else {
                    let loyalty_point_not_applicable = $("#loyalty_point_not_applicable").val();
                    toastr['error']((loyalty_point_not_applicable), '');
                }
            }
        }
    });

    function calculate_create_invoice_modal() {
        let total_payable = $("#finalize_total_payable").html();
        let paid_amount =
            $("#pay_amount_invoice_input").val() != ""
                ? $("#pay_amount_invoice_input").val()
                : 0;
        let due_amount = (
            parseFloat(total_payable) - parseFloat(paid_amount)
        ).toFixed(ir_precision);
        $("#due_amount_invoice_input").val(due_amount);
    }

    function setAnimation() {
        let imgToDrag = $("#cash_img").eq(0);
        let cart = $(".payment_list_counter").find("span").last();
        if (imgToDrag) {
            let top_ = Number(imgToDrag.offset().top);

            let imgClone = imgToDrag
                .clone()
                .offset({
                    top: top_,
                    left: imgToDrag.offset().left,
                })
                .css({
                    opacity: "0.5",
                    position: "absolute",
                    height: "150px",
                    width: "150px",
                    zIndex: "1000",
                })
                .appendTo($("body"))
                .animate(
                    {
                        top: cart.offset().top + 10,
                        left: cart.offset().left + 10,
                        width: "75px",
                        height: "75px",
                    },
                    1000,
                    "easeInOutExpo"
                );
            imgClone.animate(
                {
                    width: 0,
                    height: 0,
                },
                function () {
                    $(this).detach();
                }
            );
        }
    }

	function set_finalize_discount() {
		let finalize_total_payable = Number($("#finalize_total_payable").attr('data-original_payable'));
		let sub_total_discount_finalize_val = $("#sub_total_discount_finalize").val().trim();
		let sub_total_discount_finalize = 0;
		// Calculate discount
		if (sub_total_discount_finalize_val.endsWith("%")) {
			let percent = Number(sub_total_discount_finalize_val.slice(0, -1));
			if (!isNaN(percent)) {
				sub_total_discount_finalize = (finalize_total_payable * percent / 100);
			}
		} else {
			sub_total_discount_finalize = Number(sub_total_discount_finalize_val) || 0;
		}
		// Validation: Discount cannot exceed total
		if (sub_total_discount_finalize > finalize_total_payable) {
			sub_total_discount_finalize = finalize_total_payable;
			$("#sub_total_discount_finalize").val(finalize_total_payable.toFixed(ir_precision));
			toastr.error("The discount cannot be more than the total payable amount!");
		}
		// Update discount display
		$("#finalize_total_discount").html(sub_total_discount_finalize.toFixed(ir_precision));
		// New payable after discount
		let new_finalize_amount = (finalize_total_payable - sub_total_discount_finalize).toFixed(ir_precision);
		// Update payable display
		$("#finalize_total_payable").html(new_finalize_amount);
		// Handle fully discounted case
		if (Number(new_finalize_amount) <= 0) {
			$("#finalize_total_paid").html("0.00");
			$("#pay_amount_invoice_input").val("0.00");
			$("#finalize_amount_input").val("0.00");
			$("#finalize_given_amount_input").val("0.00");
			$("#finalize_change_amount_input").val("0.00");
			$("#payment_list_div").empty(); // remove all payments
		} else {
			// Adjust existing payments to match new payable
			let paymentItems = $("#payment_list_div .payment_list_counter");
			if (paymentItems.length > 0) {
				let totalPaid = 0;
				paymentItems.each(function () {
					totalPaid += Number($(this).attr("data-amount"));
				});
				let diff = totalPaid - Number(new_finalize_amount);
				if (diff !== 0) {
					// Adjust last added payment
					let lastPayment = paymentItems.last();
					let lastAmount = Number(lastPayment.attr("data-amount"));
					let newLastAmount = lastAmount - diff;
					if (newLastAmount < 0) newLastAmount = 0;
					lastPayment.attr("data-amount", newLastAmount.toFixed(ir_precision));
					lastPayment.find(".payment_list_amount").text(newLastAmount.toFixed(ir_precision));
				}
				let newPaid = 0;
					$("#payment_list_div .payment_list_counter").each(function () {
						newPaid += Number($(this).attr("data-amount"));
					});
					$("#finalize_total_paid").html(newPaid.toFixed(ir_precision));
			}
		}
		// Update multi-currency
		let conversion_rate = Number($("#multi_currency").find(':selected').attr('data-multi_currency'));
		if (conversion_rate) {
			$("#multi_currency_amount").val((conversion_rate * new_finalize_amount).toFixed(2));
		}
		// Update total discount in cart modal
		let cart_modal_total_discount_all_text = Number($("#cart_modal_total_discount_all_text").attr('data-original_discount'));
		$("#cart_modal_total_discount_all_text").html((cart_modal_total_discount_all_text + sub_total_discount_finalize).toFixed(ir_precision));
	}

	  $(document).on("click", "#add_payment", function (e) {
        let finalize_amount_input = Number($("#finalize_amount_input").val());
        let usage_point = finalize_amount_input;

        let status = false;
        let check_exist = false;

        let payment_id = 0;
        let payment_id_text = '';
        let payment_name = $("#payment_preview").text();
        $(".set_payment").each(function (i, obj) {
            let this_txt = $(this).text();
            if ($(this).hasClass('active')) {
                status = true;
                payment_id = Number($(this).attr('data-id'));
                payment_id_text = ($(this).text());
            }
        });

        $("#finalize_given_amount_input").css("border", "1px solid #bcbdbe");
        $("#finalize_amount_input").css("border", "1px solid #bcbdbe");

        let minimum_point_to_redeem = Number($("#minimum_point_to_redeem").val());
        let loyalty_rate = Number($("#loyalty_rate").val());
        let available_loyalty_point = Number($("#available_loyalty_point").html());

        if ((minimum_point_to_redeem > finalize_amount_input) && payment_id === 5) {
            let minimum_point_to_redeem_is = $("#minimum_point_to_redeem_is").val();
            toastr['error']((minimum_point_to_redeem_is + " " + minimum_point_to_redeem), '');
        } else if ((available_loyalty_point < finalize_amount_input) && payment_id === 5) {
            let loyalty_point_is_not_available = $("#loyalty_point_is_not_available").val();
            toastr['error']((finalize_amount_input + " " + loyalty_point_is_not_available), '');
        } else {

            $(".payment_list_counter").each(function (i, obj) {
                let payment_id_added = Number($(this).attr('data-payment_id'));
                if (payment_id === payment_id_added) {
                    check_exist = true;
                }
            });
            if (payment_id === 5) {
                payment_name = payment_name + "(Usage " + finalize_amount_input + ")";
                finalize_amount_input = (loyalty_rate * finalize_amount_input);
            }

            let tmp_amount_checker = finalize_amount_input;
            if (payment_id_text == "Cash") {
                tmp_amount_checker = Number($("#finalize_given_amount_input").val());
            }

            // Allow payment to be added even if amount is 0
            if (tmp_amount_checker >= 0) {  // <-- changed from just truthy check
                if (status == true) {
                    $("#finalize_amount_input").css("border", "1px solid #bcbdbe");

                    let html = '<li class="payment_list_counter" data-usage_point="' + usage_point + '" data-payment_name="' + payment_name + '" data-payment_id="' + payment_id + '" data-amount="' + finalize_amount_input.toFixed(ir_precision) + '">\n' +
                        '    <span class="payment-type-name">' + payment_name + '</span>\n' +
                        '    <div>\n' +
                        '        ' + currency + '<span class="payment_list_amount">' + finalize_amount_input.toFixed(ir_precision) + '</span>\n' +
                        '        <i class="fas fa-times-circle remove_paid_item"></i>\n' +
                        '    </div>\n' +
                        '</li>';

                    if (check_exist == true) {
                        let already_added = $("#already_added").val();
                        toastr['error']((already_added), '');
                    } else {
                        $(".set_payment").each(function (i, obj) {
                            if ($(this).hasClass('active')) {
                                let payment_id_action_text = $(this).text();
                                if (payment_id_action_text == "Cash") {
                                    $("#hidden_given_amount").val($("#finalize_given_amount_input").val());
                                    $("#hidden_change_amount").val($("#finalize_change_amount_input").val());

                                    if (Number($("#finalize_change_amount_input").val())) {
                                        $(".change_amount_div").show();
                                        $("#change_amount_div_").text(Number($("#finalize_change_amount_input").val()).toFixed(ir_precision));
                                    } else {
                                        $(".change_amount_div").hide();
                                        $("#change_amount_div_").text(0);
                                    }

                                    $("#finalize_given_amount_input").val('');
                                    $("#finalize_change_amount_input").val('');
                                }
                            }
                        });

                        $(".empty_title").hide();
                        $("#payment_list_div").append(html);
                        $("#finalize_amount_input").val('');
                        $("#finalize_amount_input").focus();
                        $(".badge_custom").remove();
                        setAnimation();
                        cal_finalize_modal('');  // this will update Payable / Paid display
                    }
                } else {
                    let please_click_a_payment_method_before_add = $("#please_click_a_payment_method_before_add").val();
                    toastr['error']((please_click_a_payment_method_before_add), '');
                }
            } else {
                if (payment_id_text == "Cash") {
                    $("#finalize_given_amount_input").focus();
                    $("#finalize_given_amount_input").css("border", "2px solid red");
                } else {
                    $("#finalize_amount_input").focus();
                    $("#finalize_amount_input").css("border", "2px solid red");
                }
            }

        }

    });

    body_el.on("click", "#open_finalize_discount", function () {
        $("#sub_total_discount_finalize").focus();
        $("#finalize_discount_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(300);
    });

    body_el.on("click", "#open_finalize_cart_details", function () {
        $("#finalize_cart_details_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(300);
    });

    body_el.on("click", ".cancel_modal", function () {
        $(this)
            .parent()
            .parent()
            .parent()
            .removeClass("active")
            .addClass("inActive");
        setTimeout(function () {
            $(".modal").removeClass("inActive");
        }, 1000);
        set_finalize_discount();
    });

    body_el.on("click", ".remove_paid_item", function () {
        let id = Number($(this).parent().parent().attr("data-payment_id"));
        $(".set_no_access").removeClass('no_access');
        $("#hidden_given_amount").val('');
        $("#hidden_change_amount").val('');
        $("#finalize_given_amount_input").val('');
        $("#finalize_change_amount_input").val('');

        let finalize_given_amount_input = Number($("#finalize_given_amount_input").val());

        if (Number($("#finalize_change_amount_input").val())) {
            $(".change_amount_div").show();
            $("#change_amount_div_").text(Number($("#finalize_change_amount_input").val()).toFixed(ir_precision));
        } else {
            $(".change_amount_div").hide();
            $("#change_amount_div_").text(0);
        }
        $(this).parent().parent().remove();
        $("#finalize_amount_input").val('');
        remove_paid_list_title();
        cal_finalize_modal('');
    });


    $(document).on("click", "#change_currency_btn", function (e) {
        //for mobile view
        $("#order-split-bill-payment-amount").click();

        if (Number($(".payment_list_counter").length)) {
            let your_added_payment_method_will_remove = $("#your_added_payment_method_will_remove").val();

            swal({
                title: warning + "!",
                text: your_added_payment_method_will_remove + "?",
                cancelButtonText: cancel,
                confirmButtonText: ok,
                confirmButtonColor: '#3c8dbc',
                showCancelButton: true
            }, function () {
                $(".set_no_access").addClass('no_access');
                $(".finalize_modal_is_mul_currency").show(300);
                $("#is_multi_currency").val(1);
                $("#multi_currency").val('').change();
                $("#multi_currency_amount").val('');
                $(".empty_title").show();
                $("#payment_list_div").html('');
                $("#finalize_amount_input").html('');
                $(".badge_custom").remove();
                $(".previous_due_div").show();
                $(".loyalty_point_div").hide();
                set_default_payment();
                cal_finalize_modal('');
            });
        } else {
            $(".previous_due_div").show();
            $(".loyalty_point_div").hide();
            $("#multi_currency").val('').change();
            $("#multi_currency_amount").val('');
            $("#is_multi_currency").val(1);
            $(".set_no_access").addClass('no_access');
            $(".finalize_modal_is_mul_currency").show(300);
        }
    });
    $(document).on("click", ".remove_multi_currency", function (e) {
        $(".set_no_access").removeClass('no_access');
        $(".finalize_modal_is_mul_currency").hide(300);
        $("#is_multi_currency").val('');
        $("#multi_currency").val('').change();
        $("#multi_currency_amount").val('');
        $("#sub_total_discount_finalize").val('');
        $(".order-payment-wrapper").find('.order-payment-list').fadeIn(0);
        cal_finalize_modal('');
        set_finalize_discount();
    });

    //denomination
    $(document).on("click", ".get_quick_cash", function (e) {
        let amount = Number($(this).attr('data-amount'));
        let is_denomination = ($(this).attr('data-is_denomination'));
        if (is_denomination == "yes") {
            let sum = 0;
            let finalize_amount_input = $("#finalize_amount_input").val();
            if (finalize_amount_input == '') {
                finalize_amount_input = 0;
            } else {
                finalize_amount_input = Number($("#finalize_amount_input").val());
            }
            sum = finalize_amount_input + amount;
            $(".set_payment").each(function (i, obj) {
                let id = ($(this).text());
                if ($(this).hasClass('active')) {
                    if (id == "Cash") {
                        $("#finalize_given_amount_input").val(sum.toFixed(ir_precision));
                    }
                }
            });
            let total_count = $(this).find("span").html();
            let this_amount = $(this).attr('data-amount');
            if (total_count != undefined) {
                total_count = Number(total_count) + 1;
            } else {
                total_count = 1;
            }
            amount = sum;
            $("#finalize_amount_input").val(amount.toFixed(ir_precision));

            $(this).html(this_amount + ' <span class="badge_custom">' + total_count + '</span>');
        } else {
            $("#finalize_amount_input").val(amount.toFixed(ir_precision));

            $(".set_payment").each(function (i, obj) {
                let id = ($(this).text());
                if ($(this).hasClass('active')) {
                    if (id == "Cash") {
                        $("#finalize_given_amount_input").val(amount.toFixed(ir_precision));
                    }
                }
            });
        }


        $(".set_payment").each(function (i, obj) {
            let id = ($(this).text());
            if ($(this).hasClass('active')) {
                if (id == "Cash") {
                    let finalize_total_payable = Number($("#finalize_total_due").text());
                    let finalize_given_amount_input = Number($("#finalize_given_amount_input").val());
                    let change_amount = (finalize_given_amount_input - finalize_total_payable);
                    $("#finalize_change_amount_input").val((change_amount && change_amount > 0 ? change_amount : 0).toFixed(ir_precision));

                    let finalize_change_amount_input = Number($("#finalize_change_amount_input").val());
                    if (finalize_change_amount_input) {
                        amount = Number($("#finalize_total_due").text());
                        $("#finalize_amount_input").val(amount.toFixed(ir_precision));
                    }
                }
            }
        });
        check_cash_payment(amount);
    });

    $(document).on("click", ".clear_quick_data", function (e) {
        $("#finalize_amount_input").val('');
        $("#finalize_given_amount_input").val('');
        $("#finalize_change_amount_input").val('');
        $(".badge_custom").remove();
        $("#finalize_amount_input").focus();
        $("#finalize_amount_input").css("border", "1px solid #bcbdbe");
    });

    function getDateTime() {
        //for date and time
        let today = new Date();
        let dd = today.getDate();
        if (att_type == 1) { let ddd = Number($(".mrgin_3").text()).tofixed(ir_precision); $(".mrgin_3").text(ddd) }
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        let time_a = new Date().toLocaleTimeString();
        let today_date = yyyy + "-" + mm + "-" + dd;
        let date_time = today_date + " " + time_a;
        return [date_time, time_a];
    }

    function getPadTwo(str) {
        str = str.toString();
        return (str.length < 3 ? getPadTwo("0" + str, 3) : str);
    }

    function getRandomCode(length) {
        let result = '';
        //this is random character pattern
        let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function generateSaleNo() {
        //for date and time
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        let twoDigitYear = yyyy.toString().substr(-2);
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        let time_a = new Date();
        let t_h = time_a.getHours();
        let t_m = time_a.getMinutes();
        let t_s = time_a.getSeconds();

        if (t_h < 10) {
            t_h = "0" + t_h;
        }
        if (t_m < 10) {
            t_m = "0" + t_m;
        }
        if (t_s < 10) {
            t_s = "0" + t_s;
        }
        let username_short = $("#username_short").val();
        let invoice_counter_value = Number(localStorage['invoice_counter_value']) + 1;
        localStorage['invoice_counter_value'] = invoice_counter_value;
        let sale_no = username_short + twoDigitYear + mm + dd + "-" + getPadTwo(invoice_counter_value);
        return sale_no;
    }

  	$(document).on("click", "#finalize_order_button", function (e) {
        //focus search field
        let action_type = Number($(this).attr('data-type'));
        $("#is_first").val(1);
        $("#is_direct_sale_check").val(action_type);
        let self_order_table_id = Number($("#self_order_table_id").val());
        let is_online_order = $("#is_online_order").val();
        let waiter_app_status = $("#waiter_app_status").val();
        let is_login_checker = false;
        let online_customer_id = Number($("#online_customer_id").val());

        if (is_online_order == "Yes" && !online_customer_id) {
            is_login_checker = true;
        }
        if (is_login_checker == true) {
            let login_first_msg = $("#login_first_msg").val();
            toastr['error']((login_first_msg), '');
        } else {
            if (!self_order_table_id) {
                if (is_online_order != "Yes") {
                    $("#is_self_order").val("No");
                }
            }
            focusSearch();
            let sale_id = Number($("#update_sale_id").val());
            if (sale_id) {
                //remove previous order tables
                removeOrderTablesBySaleId(sale_id, '');
            }
            // show token number field visible
            if (pre_or_post_payment == 2) {
                $("#update_sale_id").val('');
                // show token number field visible
                $("#token_number").val('');
                $("#token_number").show();
            } else {
                $("#token_number").val('');
                $("#token_number").hide();
            }

            let selected_order_type_object = $(".main_top").find('button[data-selected="selected"]'); getDateTime();
            let total_items_in_cart = $(".order_holder .single_order").length;
            let total_items_in_cart_qty = $("#total_items_in_cart_with_quantity").text();
            let delivery_charge = '';
            let delivery_charge_actual_charge = '';
            let show_charge_amount_ = Number($("#show_charge_amount").html());
            if (show_charge_amount_) {
                delivery_charge = $("#delivery_charge").val();
                delivery_charge_actual_charge = $("#show_charge_amount").html();
            }

            let sub_total_discount_value = $("#sub_total_discount").val();
            let sub_total_discount_type = "";
            let customer_id = $("#walk_in_customer").val();
            let waiter_id = $("#select_waiter").val();
            let customer_data = $("#walk_in_customer").select2('data'); //Added By Jobayer
            let is_self_order = $("#is_self_order").val();


            let self_order_table_person = $("#self_order_table_person").val();
            let customer_address = $("#walk_in_customer").find(':selected').attr('data-customer_address') || "Address not provided";

            let customer_gst_number = $("#walk_in_customer").find(':selected').attr('data-customer_gst_number');
            let waiter_data = '';
            let customer_name = '';
            let waiter_name = '';
			  if (waiter_app_status != "Yes") {
                waiter_data = $("#select_waiter").select2('data'); //Added By Jobayer
                if (waiter_data[0].text != undefined) {
                    waiter_name = waiter_data[0].text; //Added By Jobayer
                }
            } else {
                waiter_name = $("#select_waiter_name").val();;
            }



            if (is_self_order != "Yes") {

            } else {
                if (self_order_table_person == '') {
                    let please_add_your_table_person_number = $("#please_add_your_table_person_number").val();
                    $("#self_order_table_person").focus();
                    toastr['error']((please_add_your_table_person_number), '');
                    return false;
                };

            }
            customer_name = customer_data[0].text; //Added By Jobayer

            let sale_vat_objects = [];
            $("#tax_row_show .tax_field").each(function (i, obj) {
                let tax_field_id = $(this).attr("data-tax_field_id");
                let tax_field_type = $(this).attr("data-tax_field_type");
                let tax_field_amount = $(this).attr("data-tax_field_amount");
                sale_vat_objects.push({
                    tax_field_id: tax_field_id,
                    tax_field_type: tax_field_type,
                    tax_field_amount: parseFloat(tax_field_amount).toFixed(ir_precision),
                });
            });
            if (total_items_in_cart == 0) {
                $(".cardIsEmpty").css("border", "2px solid red");
                setTimeout(function () {
                    $(".cardIsEmpty").css("border", "none");
                }, 2000);
                placeOrderSound.play();
                return false;
            }
            if (
                sub_total_discount_value.length > 0 &&
                sub_total_discount_value.substr(sub_total_discount_value.length - 1) ==
                "%"
            ) {
                sub_total_discount_type = "percentage";
            } else {
                sub_total_discount_type = "fixed";
            }

            if (selected_order_type_object.length > 0) {
                $(".type-btn-list").removeClass("custom_active");

                let order_type = 1;
                if (selected_order_type_object.attr("data-id") == "delivery_button") {
                    order_type = 3;
                    if (customer_id == "") {
                        let op1 = $("#walk_in_customer").data("select2");
                        let op2 = $("#select_waiter").data("select2");
                        op1.open();
                        op2.close();
                        return false;
                    }
                    if (customer_id == "1") {
                        let op1 = $("#walk_in_customer").data("select2");
                        let op2 = $("#select_waiter").data("select2");
                        op1.open();
                        op2.close();
                        return false;
                    }
                    if (customer_address == "") {
                        let op1 = $("#walk_in_customer").data("select2");
                        let op2 = $("#select_waiter").data("select2");
                        op1.open();
                        op2.close();
                        let you_need_to_add_address_with_your_selected_customer = $("#you_need_to_add_address_with_your_selected_customer").val();
                        toastr['error']((you_need_to_add_address_with_your_selected_customer), '');
                        return false;
                    }
                } else if (selected_order_type_object.attr("data-id") == "dine_in_button") {
                    order_type = 1;
                    if (waiter_id == "" && waiter_app_status != "Yes" && is_self_order != "Yes" && is_online_order != "Yes") {
                        let op1 = $("#walk_in_customer").data("select2");
                        let op2 = $("#select_waiter").data("select2");
                        op1.close();
                        op2.open();
                        return false;
                    }
                    if (customer_id == "") {
                        let op1 = $("#walk_in_customer").data("select2");
                        let op2 = $("#select_waiter").data("select2");
                        op1.open();
                        op2.close();
                        return false;
                    }
                } else if (
                    selected_order_type_object.attr("data-id") == "take_away_button"
                ) {
                    order_type = 2;

                    if (waiter_id == "" && is_self_order != "Yes" && is_online_order != "Yes" && waiter_app_status != "Yes") {
                        let op1 = $("#walk_in_customer").data("select2");
                        let op2 = $("#select_waiter").data("select2");
                        op1.close();
                        op2.open();
                        return false;
                    }
                    if (customer_id == "") {
                        let op1 = $("#walk_in_customer").data("select2");
                        let op2 = $("#select_waiter").data("select2");
                        op1.open();
                        op2.close();
                        return false;
                    }
                }
                let delivery_partner_id = '';
                if (order_type == 3) {
                    delivery_partner_id = $("input[name='delivery_partner_id']:checked").val();
                }

                let sale_no_new = 0;
                let random_code = '';

                // Check if new generation is needed
                sale_no_new = generateSaleNo();
                random_code = getRandomCode(15);
                $("#sale_no_new_hidden").val(sale_no_new);
                $("#random_code_hidden").val(random_code);
                    

                let open_invoice_date_hidden = $("#open_invoice_date_hidden").val();
                let selected_action = $(".goto_to_payment").filter('[data-is_remove="yes"]').first();

                let sub_total = parseFloat($("#sub_total_show").html()).toFixed(ir_precision);
                let charge_type = $("#charge_type").val();
                let total_vat = parseFloat($("#show_vat_modal").html()).toFixed(ir_precision);
                let total_payable = parseFloat($("#total_payable").html()).toFixed(ir_precision);
                let total_item_discount_amount = parseFloat($("#total_item_discount").html()).toFixed(ir_precision);
                let sub_total_with_discount = parseFloat($("#discounted_sub_total_amount").html()).toFixed(ir_precision);

                // 🔹 Apply finalize discount override AFTER variables are defined
                let final_discount_input = ($("#sub_total_discount_finalize").val() || "").trim();
                let final_discount = 0;

                if (final_discount_input.endsWith("%")) {
                    let percent = parseFloat(final_discount_input.replace("%", ""));
                    final_discount = (sub_total_with_discount * percent) / 100;
                } else {
                    final_discount = parseFloat(final_discount_input) || 0;
                }

                let final_value = (sub_total_with_discount - final_discount).toFixed(ir_precision);

                //  Force same discounted value for all 3
                sub_total = final_value;
                sub_total_with_discount = final_value;
                total_payable = final_value;

                
                let total_discount_amount = parseFloat(
                    $("#all_items_discount").html()
                ).toFixed(ir_precision);
                
                
                let finalize_discount_input = ($("#sub_total_discount_finalize").val() || "").trim();
                let finalize_discount = 0;

                if (finalize_discount_input.endsWith("%")) {
                    let percent = parseFloat(finalize_discount_input.replace("%", ""));
                    let base_amount = parseFloat($("#discounted_sub_total_amount").html()) || 0;
                    finalize_discount = (base_amount * percent) / 100;
                } else {
                    finalize_discount = parseFloat(finalize_discount_input) || 0;
                }

                let total_discount_amount_final = parseFloat(total_discount_amount) + finalize_discount;

                let delivery_charge = '';
                let delivery_charge_actual_charge = '';
                let show_charge_amount_ = Number($("#show_charge_amount").html());
                if (show_charge_amount_) {
                    delivery_charge = $("#delivery_charge").val();
                    delivery_charge_actual_charge = $("#show_charge_amount").html();
                }

                let tips_amount = $("#tips_amount").val();
                let tips_amount_actual_charge = $("#show_tips_amount").html();

                let discount_subtotal = Number(selected_action.parent().find('.discount_right_box').attr('data-added_amount'));
                let discount_item = Number(selected_action.parent().find('.discount_right_box').html()) - discount_subtotal;
                let is_last_split_tmp = $(".split_tbl_width").length;

                let payment_info = "[";

                if ($(".payment_list_counter").length > 0) {
                    let k = 1;
                    $(".payment_list_counter").each(function (i, obj) {
                        let payment_name = $(this).attr("data-payment_name");
                        let usage_point = $(this).attr("data-usage_point");
                        let payment_id = $(this).attr("data-payment_id");
                        let amount = $(this).attr("data-amount");
                        payment_info +=
                            '{"payment_id":"' +
                            payment_id +
                            '","payment_name":"' + payment_name +
                            '","usage_point":"' + usage_point +
                            '","amount":"' +
                            amount +
                            '"';
                        payment_info +=
                            k == $(".payment_list_counter").length ? "}" : "},";
                        k++;
                    });
                }
                payment_info += "]";

                let payment_object = JSON.stringify(payment_info);
                let paid_amount = $("#finalize_total_paid").html();
                let due_amount = $("#finalize_total_due").html();

                let is_multi_currency = $("#is_multi_currency").val();
                let multi_currency_rate = $("#multi_currency_rate").val();
                let multi_currency = $("#multi_currency").val();
                let multi_currency_amount = $("#multi_currency_amount").val();

                let cart_modal_total_item_text = Number($("#total_items_in_cart").text()).toFixed(0);

                let sale_vat_objects = [];
                $("#tax_row_show .tax_field").each(function (i, obj) {
                    let tax_field_id = $(this).attr("data-tax_field_id");
                    let tax_field_type = $(this).attr("data-tax_field_type");
                    let tax_field_amount = $(this).attr("data-tax_field_amount");
                    sale_vat_objects.push({
                        tax_field_id: tax_field_id,
                        tax_field_type: tax_field_type,
                        tax_field_amount: parseFloat(tax_field_amount).toFixed(ir_precision),
                    });
                });

                let total_split_value = $(".total_split_sale span").length;
                if (!total_split_value) {
                    total_split_value = "1";
                }

                let order_status = 1;
                let rounding_amount_hidden = $("#rounding_amount_hidden").val();
                let customer_current_due = $("#walk_in_customer").find(':selected').attr('data-current_due');
                let token_number = $("#token_number").val();
                let hidden_given_amount = $("#hidden_given_amount").val();
                let hidden_change_amount = $("#hidden_change_amount").val();
                let counter_id = $("#counter_id").val();
                let counter_name = $("#counter_name").val();

                let order_info = "{";
                order_info += '"sale_no":"' + sale_no_new + '",';
                order_info += '"waiter_app_status":"' + waiter_app_status + '",';
                order_info += '"hidden_given_amount":"' + hidden_given_amount + '",';
                order_info += '"hidden_change_amount":"' + hidden_change_amount + '",';
                order_info += '"counter_id":"' + counter_id + '",';
                order_info += '"counter_name":"' + counter_name + '",';
                order_info += '"random_code":"' + random_code + '",';
                order_info += '"token_number":"' + token_number + '",';
                order_info += '"customer_id":"' + customer_id + '",';
                order_info += '"customer_address":"' + customer_address + '",';
                order_info += '"customer_gst_number":"' + customer_gst_number + '",';
                order_info += '"status":"Pending",';
                order_info += '"user_name":"' + ($("#user_name").val()) + '",';
                order_info += '"user_id":"' + ($("#user_id").val()) + '",';
                order_info += '"customer_name":"' + customer_name + '",';
                order_info += '"delivery_partner_id":"' + delivery_partner_id + '",';
                order_info += '"self_order_table_id":"' + self_order_table_id + '",';
                order_info += '"self_order_table_person":"' + self_order_table_person + '",';
                order_info += '"rounding_amount_hidden":"' + rounding_amount_hidden + '",';
                order_info += '"previous_due_tmp":"' + customer_current_due + '",';
                order_info += '"waiter_id":"' + waiter_id + '",';
                order_info += '"waiter_name":"' + waiter_name + '",';
                order_info += '"open_invoice_date_hidden":"' + open_invoice_date_hidden + '",';
                order_info += '"total_items_in_cart":"' + total_items_in_cart + '",';
                order_info += '"total_items_in_cart_qty":"' + total_items_in_cart_qty + '",';
                order_info += '"sub_total":"' + sub_total + '",';
                order_info += '"sale_date":"' + open_invoice_date_hidden + '",';
                order_info += '"date_time":"' + getDateTime()[0] + '",';
                order_info += '"order_time":"' + getDateTime()[1] + '",';
                order_info += '"charge_type":"' + charge_type + '",';
                order_info += '"total_vat":"' + total_vat + '",';
                order_info += '"total_payable":"' + total_payable + '",';
                order_info +=
                    '"total_item_discount_amount":"' + total_item_discount_amount + '",';
                order_info +=
                    '"sub_total_with_discount":"' + sub_total_with_discount + '",';
                order_info += '"delivery_charge":"' + delivery_charge + '",';
                order_info += '"tips_amount":"' + tips_amount + '",';
                order_info += '"delivery_charge_actual_charge":"' + delivery_charge_actual_charge + '",';
                order_info += '"tips_amount_actual_charge":"' + tips_amount_actual_charge + '",';
                order_info +=
                    '"sub_total_discount_value":"' + sub_total_discount_value + '",';
                order_info +=
                    '"sub_total_discount_type":"' + sub_total_discount_type + '",';
                // order_info += '"selected_table":"'+selected_table+'",';
                order_info += '"order_type":"' + order_type + '",';
                order_info += '"order_status":"' + order_status + '",';
                order_info += '"sale_vat_objects":' + JSON.stringify(sale_vat_objects) + ",";
                order_info += '"payment_object":' + payment_object + ',';
                order_info += '"paid_amount":"' + paid_amount + '",';
                order_info += '"due_amount":"' + due_amount + '",';
                order_info += '"is_multi_currency":"' + is_multi_currency + '",';
                order_info += '"multi_currency_rate":"' + multi_currency_rate + '",';
                order_info += '"multi_currency":"' + multi_currency + '",';
                order_info += '"multi_currency_amount":"' + multi_currency_amount + '",';
                order_info += '"total_items_in_cart":"' + cart_modal_total_item_text + '",';
                order_info += '"sub_total":"' + sub_total + '",';
                order_info += '"paid_date_time":"' + getDateTime()[0] + '",';
                order_info += '"is_last_split":"' + is_last_split_tmp + '",';
                order_info += '"total_vat":"' + total_vat + '",';
                order_info += '"total_payable":"' + total_payable + '",';
                order_info +=
                    '"total_item_discount_amount":"' + discount_item + '",';
                order_info += '"sub_total_discount_finalize":"' + finalize_discount.toFixed(ir_precision) + '",';
                order_info += '"total_discount_amount":"' + total_discount_amount_final.toFixed(ir_precision) + '",';
                order_info +=
                    '"sub_total_with_discount":"' + sub_total_with_discount + '",';
                order_info +=
                    '"sub_total_discount_amount":"' + discount_subtotal + '",';
                order_info += '"delivery_charge":"' + delivery_charge + '",';
                order_info += '"tips_amount":"' + tips_amount + '",';
                order_info += '"delivery_charge_actual_charge":"' + delivery_charge + '",';
                order_info += '"tips_amount_actual_charge":"' + tips_amount + '",';
                order_info +=
                    '"sub_total_discount_value":"' + discount_subtotal + '",';
                order_info +=
                    '"sub_total_discount_type":"fixed",';
                order_info += '"order_status":"3",';
                order_info += '"sale_vat_objects":' + JSON.stringify(sale_vat_objects) + ",";


                let orders_table = "";
                orders_table += '"orders_table":';
                orders_table += "[";

                let total_orders_table = $(".new_book_to_table").length;
                let hidden_table_name = $("#hidden_table_name").val();
                let hidden_table_id = $("#hidden_table_id").val();
                let hidden_table_capacity = $("#hidden_table_capacity").val();

                let total_person = 0;
                if (!sale_id) {
                    let orders_table = "";
                    orders_table += '"orders_table":';
                    orders_table += "[";
                    let x = 1;


                    let orders_table_text = '';



                    total_person = hidden_table_capacity;
                    orders_table_text = hidden_table_name;
                    orders_table +=
                        '{"table_id":"' + hidden_table_id + '", "persons":"' + hidden_table_capacity + '"}';

                    orders_table += "],";
                    order_info += orders_table;
                    order_info += '"total_orders_table":"' + total_person + '",';
                    order_info += '"orders_table_text":"' + orders_table_text + '",';
                } else {
                    if (total_orders_table) {
                        let orders_table = "";
                        orders_table += '"orders_table":';
                        orders_table += "[";
                        let x = 1;

                        let orders_table_text = '';


                        total_person = hidden_table_capacity;
                        orders_table_text = hidden_table_name;
                        if (!hidden_table_id) {
                            update_table_total = $("#update_table_total").html();
                            orders_table_text = $("#update_table_text").html();
                            total_person = $("#update_hidden_table_capacity").html();
                        }
                        orders_table +=
                            '{"table_id":"' + update_table_total + '", "persons":"' + total_person + '"}';


                        orders_table += "],";
                        order_info += orders_table;
                        order_info += '"total_orders_table":"' + total_person + '",';
                        order_info += '"orders_table_text":"' + orders_table_text + '",';

                    } else {
                        let update_table_total = $("#update_table_total").html();
                        let update_table_obj = $("#update_table_obj").html();
                        let update_table_text = $("#update_table_text").html();

                        order_info += '"orders_table":';
                        order_info += update_table_obj;
                        order_info += ",";
                        order_info += '"total_orders_table":"' + update_table_total + '",';
                        order_info += '"orders_table_text":"' + update_table_text + '",';
                    }
                }

                $("#update_table_total").empty();
                $("#update_table_obj").empty();
                $("#update_table_text").empty();

                let items_info = "";

                items_info += '"items":';
                items_info += "[";

                if ($(".order_holder .single_order").length > 0) {
                    let k = 1;
                    let total_items_price = 0;

                    // Step 1: Calculate total items price
                    $(".order_holder .single_order").each(function () {
                        total_items_price += parseFloat($(this).find(".item_price_without_discount").html()) || 0;
                    });

                    // Step 2: Get finalize discount
                    let finalize_discount_total = parseFloat($("#sub_total_discount_finalize").val()) || 0;
                    let finalize_discount_type = $("#sub_total_discount_type").val() || "percentage"; // fixed or percentage

                    $(".order_holder .single_order").each(function (i, obj) {
                        let item_id = $(this).attr("id").substr(15);
                        let item_name = $(this).find("#item_name_table_" + item_id).html();
                        let item_price_without_discount = parseFloat($(this).find(".item_price_without_discount").html()) || 0;
                        let item_vat = $(this).find(".item_vat").html();
                        let item_unit_price = $(this).find("#item_price_table_" + item_id).html();
                        let item_quantity = $(this).find("#item_quantity_table_" + item_id).html();
                        let tmp_qty = $(this).find(".tmp_qty").val();
                        let p_qty = $(this).find(".p_qty").val();
                        let is_kot_print = $(this).find("#item_quantity_table_" + item_id).attr('data-is_kot_print');

                        // -----------------------
                        // Step 2a: Manual discount
                        let item_manual_discount = $(this).find("#percentage_table_" + item_id).val() || "0";
                        let discount_type_manual = item_manual_discount.includes("%") ? "percentage" : "fixed";

                        let item_manual_discount_amount = 0;
                        if (item_manual_discount.includes("%")) {
                            let perc = parseFloat(item_manual_discount.replace("%","")) || 0;
                            item_manual_discount_amount = item_price_without_discount * perc / 100;
                        } else {
                            item_manual_discount_amount = parseFloat(item_manual_discount) || 0;
                        }


                        // -----------------------
                        // Step 2b: Finalize discount
                        // Step 2: Get finalize discount
                        let finalize_discount_input = $("#sub_total_discount_finalize").val() || "0";
                        let finalize_discount_total = parseFloat(finalize_discount_input) || 0;

                        // detect type → if has % then percentage else fixed
                        let finalize_discount_type = "fixed";
                        if (finalize_discount_input.includes("%")) {
                            finalize_discount_type = "percentage";
                        }

                        // -----------------------
                        // Step 2b: Finalize discount
                        let item_finalize_discount_amount = 0;

                        if (finalize_discount_type === "fixed") {
                            // Fixed rupee discount (₹6, ₹100 etc.)
                            if (total_items_price > 0) {
                                let price_after_manual = item_price_without_discount - item_manual_discount_amount;
                                item_finalize_discount_amount =
                                    (price_after_manual / total_items_price) * finalize_discount_total;
                            }

                        } else if (finalize_discount_type === "percentage") {
                            // Percentage discount (10%, 20% etc.)
                            let price_after_manual = item_price_without_discount - item_manual_discount_amount;
                            item_finalize_discount_amount = price_after_manual * finalize_discount_total / 100;
                        }

                        // -----------------------
                        // Total discount & final price
                        let total_item_discount_amount = item_manual_discount_amount.toFixed(ir_precision);
                        let item_price_with_discount = (item_price_without_discount - item_manual_discount_amount).toFixed(ir_precision);

                        // -----------------------
                        // Cooking / type / previous ID
                        let item_previous_id = $(this).find("#item_previous_id_table" + item_id).html();
                        let item_cooking_done_time = $(this).find("#item_cooking_done_time_table" + item_id).html();
                        let item_cooking_start_time = $(this).find("#item_cooking_start_time_table" + item_id).html();
                        let item_cooking_status = $(this).find("#item_cooking_status_table" + item_id).html();
                        let item_type = $(this).find("#item_type_table" + item_id).html();

                        let kitchen_details = search_by_menu_id(item_id, window.items);

                        // -----------------------
                        // Build JSON
                        items_info += '{"food_menu_id":"' + item_id +
                            '", "is_print":"1", "is_kot_print":"' + is_kot_print +
                            '", "menu_name":"' + item_name +
                            '", "kitchen_id":"' + kitchen_details[0].kitchen_id +
                            '", "kitchen_name":"' + kitchen_details[0].kitchen_name +
                            '", "is_free":"0", "rounding_amount_hidden":"0", "item_vat":' + item_vat +
                            ', "menu_discount_value":"' + total_item_discount_amount +
                            '", "discount_type":"' + discount_type +
                            '", "menu_price_without_discount":"' + item_price_without_discount +
                            '", "menu_unit_price":"' + item_unit_price +
                            '", "qty":"' + item_quantity +
                            '", "tmp_qty":"' + tmp_qty +
                            '", "p_qty":"' + p_qty +
                            '", "item_previous_id":"' + item_previous_id +
                            '", "item_cooking_done_time":"' + item_cooking_done_time +
                            '", "item_cooking_start_time":"' + item_cooking_start_time +
                            '", "item_cooking_status":"' + item_cooking_status +
                            '", "item_type":"' + item_type +
                            '", "menu_price_with_discount":"' + item_price_with_discount +
                            '", "item_discount_amount":"' + total_item_discount_amount + '"';

                        // -----------------------
                        // Modifiers
                        let modifier_vat = "";
                        $(".item_vat_modifier_" + item_id).each(function (i, obj) {
                            modifier_vat += $(this).html() + (i < $(".item_vat_modifier_" + item_id).length - 1 ? "|||" : "");
                        });

                        if ($(this).find(".second_portion").length > 0) {
                            let modifiers_id = $(this).find("#item_modifiers_id_table_" + item_id).html();
                            let modifiers_name = $(this).find("#item_modifiers_table_" + item_id).html();
                            let modifiers_price = $(this).find("#item_modifiers_price_table_" + item_id).html();
                            items_info += ',"modifiers_id":"' + modifiers_id +
                                '", "modifiers_name":"' + modifiers_name +
                                '", "modifiers_price":"' + modifiers_price +
                                '", "modifier_vat":"' + modifier_vat + '"';
                        } else {
                            items_info += ',"modifiers_id":"", "modifiers_name":"", "modifiers_price":"", "modifier_vat":""';
                        }

                        // -----------------------
                        // Notes
                        if ($(this).find(".third_portion").length > 0) {
                            let item_note = $(this).find("#item_note_table_" + item_id).html();
                            items_info += ',"item_note":"' + item_note + '"';
                        } else {
                            items_info += ',"item_note":""';
                        }

                        // -----------------------
                        // Combo items
                        let combo_txt = $("#item_combo_table_" + item_id).text();
                        items_info += ',"menu_combo_items":"' + (combo_txt || "") + '"';

                        // -----------------------
                        // Free items
                        let free_item_div = $(".free_item_div_" + item_id).attr("data-is_free");
                        let get_fm_id = $(".free_item_div_" + item_id).attr("data-get_fm_id");

                        if (free_item_div === "Yes") {
                            items_info += "},"; // close parent item

                            let free_item_quantity = $("#free_item_quantity_table_" + item_id).html();
                            let free_item_name = $("#free_item_name_table_" + item_id).html();
                            let kitchen_details_2 = search_by_menu_id(item_id, window.items);

                            items_info += '{"food_menu_id":"' + get_fm_id +
                                '", "is_print":"1", "menu_name":"' + free_item_name +
                                '", "kitchen_id":"' + kitchen_details_2[0].kitchen_id +
                                '", "kitchen_name":"' + kitchen_details_2[0].kitchen_name +
                                '", "parent_food_id":"' + item_id +
                                '", "is_free":"1", "rounding_amount_hidden":"0", "item_vat":' + item_vat +
                                ', "menu_discount_value":"0", "discount_type":"' + discount_type +
                                '", "menu_price_without_discount":"0", "menu_unit_price":"0", "qty":"' + free_item_quantity +
                                '", "tmp_qty":"' + free_item_quantity + '", "p_qty":"' + free_item_quantity +
                                '", "item_previous_id":"' + item_previous_id +
                                '", "item_cooking_done_time":"' + item_cooking_done_time +
                                '", "item_cooking_start_time":"' + item_cooking_start_time +
                                '", "item_cooking_status":"' + item_cooking_status +
                                '", "item_type":"' + item_type +
                                '", "menu_price_with_discount":"0", "item_discount_amount":"0"' +
                                ',"modifiers_id":"", "modifiers_name":"", "modifiers_price":"", "modifier_vat":""' +
                                ',"item_note":"", "menu_combo_items":""';
                            items_info += k === $(".order_holder .single_order").length ? "}" : "},";
                        } else {
                            items_info += k === $(".order_holder .single_order").length ? "}" : "},";
                        }

                        k++;
                    });
                }


                items_info += "]";
                order_info += items_info + "}";

                let payment_selected = $(".payment_list_counter").length > 0;
                if (!payment_selected) {
                    let please_select_payment_method = $("#please_select_payment_method").val() || "Please select a payment method!";
                    toastr['error'](please_select_payment_method, '');
                    return false;
                }
                
                let due_amount_invoice_input = Number($("#finalize_total_due").html());
                let status = true;
                if (due_amount_invoice_input) {
                    status = false;
                }
                if (status == true) {
                    add_sale_by_ajax(order_info);
                    $("#order_payment_modal").addClass("inActive");
                    $("#order_payment_modal").removeClass("active");
                } else {
                    toastr['error'](("Due amount not allow for walk in customer!"), '');
                }
                $(".dine_in_button").css("border", "unset");
                $(".take_away_button").css("border", "unset");
                $(".delivery_button").css("border", "unset");
            } else {
                $(".type-btn-list").addClass("custom_active");
                $(".btn-list button").css("backgroundColor", "#b9b9b9");
                setTimeout(function () {
                    $(".btn-list button").css("backgroundColor", "white");
                }, 600);

                $(".dine_in_button").css("border", "1px solid red");
                $(".take_away_button").css("border", "1px solid red");
                $(".delivery_button").css("border", "1px solid red");
            }
        }
    });
 

    function add_sale_by_ajax(order_info) {
        $.ajax({
            url: base_url + "Sale/push_online",
            method: "POST",
            data: {
                orders: order_info,
                [csrf_name_]: csrf_value_ // Dynamic CSRF field name
            },
            success: function (data) {
                try {
                    let response = JSON.parse(data);
                    let inv_no = response.inv_no;
                    let sale_id = response.sale_id; // Make sure this exists in your response
                    let sale_inv_no = response.sale_inv_no || ''; // Optional

                    notify_online(inv_no);

                    setTimeout(function () {
                        $("#order_" + sale_id).remove();
                        call_print_invoice(order_info, sale_inv_no, inv_no);
                        $(".order_table_holder .order_holder").empty();
                        reset_finalize_modal();
                        clearFooterCartCalculation();
                        reset_on_modal_close_or_add_to_cart();
                        do_addition_of_item_and_modifiers_price();
                    }, 400);
                } catch (e) {
                    console.error("Error parsing response:", e);
                }
            },
            error: function (xhr, status, error) {
                console.error("AJAX error:", status, error);
            }
        });
    }

    /*inline css use for offline printing of invoice, bill*/
    let style_print = `<style>
                body {
                          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
                          font-size: 14px;
                          line-height: 1.42857143;
                          color: black;
                          background-color: #fff;
                      }
                       #wrapper {
                      max-width: 480px;
                      margin: 0px auto;
                  }
                  .text-right{
                      width: 50% !important;
                        text-align: right !important;
                  }
                  
                  @media print {
                     #wrapper {
                          max-width: 480px;
                      }
                      .text-right{
                          width: 50% !important;
                         text-align: right !important;
                      }
                      .arabic_text_left_is{
                          unicode-bidi: isolate-override !important;
                      }
                  }
                  .arabic_text_left_is{
                      unicode-bidi: isolate-override !important;
                  }
                  #barcode_invoice canvas{
                      width: 25% !important;
                  }
                      .ir_txt_center {
                        text-align: center !important;
                      }
                      .ir_wid_70 {
                        width: 70%; !important;
                      }
                      .ir_wid_90 {
                        width: 90%; !important;
                      }
                      @media print {
                        .no-print {
                          display: none;
                        }
                      
                        #wrapper {
                          margin: 0 auto;
                        }
                      
                        .no-border {
                          border: none !important;
                        }
                      
                        .border-bottom {
                          border-bottom: 1px solid #ddd !important;
                        }
                      
                        table tfoot {
                          display: table-row-group;
                        }
                        .ir_txt_center {
                          text-align: center !important;
                        }
                        .ir_txt_right {
                          text-align: right !important;
                        }
                        .ir_wid_70 {
                          width: 70%; !important;
                        }
                        .ir_wid_90 {
                          width: 90%; !important;
                        }
                        .arabic_text_left_is{
                          unicode-bidi: isolate-override !important;
                        }
                      }
                      .arabic_text_left_is{
                        unicode-bidi: isolate-override !important;
                      }
                      #barcode_invoice canvas{
                        width: 25% !important;
                      }       
                      .text-center{
                              text-align: center;
                      }     
                      h3{
                      font-size: 25px;
                      padding: 0px;
                      margin: 0px;
                      }    
                      h4{
                     margin-top: 0px;
                      font-size: 20px;
                      } 
                      .p_txt{
                          margin-top: 0px;
                          margin-bottom: 0px;
                      }
                     .text_left{
                     text-align: left !important;
                     }
                      .ir_txt_center {
                        text-align: center !important;
                      }
                      .table {
                          width: 100%;
                          max-width: 100%;
                          margin-bottom: 5px;
                      }
                      table {
                          background-color: transparent;
                      }
                      
                      table {
                          border-spacing: 0;
                          border-collapse: collapse;
                      }
                      .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
                          padding: 5px;
                          line-height: 1.42857143;
                          vertical-align: top;
                          border-top: 1px solid #ddd;
                      }
                      .table-striped>tbody>tr:nth-of-type(odd) {
                              background-color: #f9f9f9;
                          }
                          .btn {
                              border-radius: 0;
                              margin-bottom: 5px;
                              text-decoration: none;
                          }
                          .btn-block {
                              display: block;
                              width: 100%;
                          }
                          .btn-primary {
                              color: #fff;
                              background-color: #3c8dbc;
                              border-color: #2e6da4;
                          }
                          .btn {
                              display: inline-block;
                              padding: 6px 12px;
                              margin-bottom: 0;
                              font-size: 14px;
                              font-weight: 400;
                              line-height: 1.42857143;
                              text-align: center;
                              white-space: nowrap;
                              vertical-align: middle;
                              -ms-touch-action: manipulation;
                              touch-action: manipulation;
                              cursor: pointer;
                              -webkit-user-select: none;
                              -moz-user-select: none;
                              -ms-user-select: none;
                              user-select: none;
                              background-image: none;
                              border: 1px solid transparent;
                              border-radius: 4px;
                          }

                          
                    .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
                    padding: 2px;
                    line-height: 1.42857143;
                    vertical-align: top;
                    border-top: 0px solid black;
                    }
                    .table {
                    width: 100%;
                    max-width: 100%;
                    margin-bottom: 0px;
                    }
                    .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
                    padding: 2px;
                    line-height: 1.42857143;
                    vertical-align: top;
                    border-top: 0px solid black;
                    }
                </style>`;

    function getAmount(amount) {
        let dec_point = $("#decimals_separator").val();
        let thousands_point = $("#thousands_separator").val();
        let currency_position = $("#currency_position").val();
        if (amount == null || !isFinite(amount)) {
            return 0;
        }
        if (!ir_precision) {
            let len = amount.toString().split('.').length;
            ir_precision = len > 1 ? len : 0;
        }
        if (!dec_point) {
            dec_point = '.';
        }
        if (!thousands_point) {
            thousands_point = ',';
        }
        amount = parseFloat(amount).toFixed(ir_precision);
        amount = amount.replace(".", dec_point);
        let splitNum = amount.split(dec_point);
        splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point);
        amount = splitNum.join(dec_point);

        if (currency_position == "Before Amount") {
            amount = inv_currency + amount;
        } else {
            amount = amount + inv_currency;
        }
        return amount;
    }


    const paymentMethodsMap = {
        1: "Cash",
        2: "Card",
        3: "Chaque",
        4: "Bank Transfer",
        5: "Loyalty Point",
        6: "UPI",
        7: "Swiggy",
        8: "Zomato" 
        // add all methods from tbl_payment_methods
    };

 function call_print_invoice1(order_info, sale_inv_no = '', inv_no = '') {
        // let order = JSON.parse(order_info);
        let order;

        if (order_info && typeof order_info === "string") {
            try {
                order = JSON.parse(order_info);
            } catch (e) {
                console.error("JSON parse error:", e, order_info);
                return;
            }
        } else if (typeof order_info === "object" && order_info !== null) {
            order = order_info; // already parsed
        } else {
            console.error("Invalid order_info:", order_info);
            return;
        }


        //console.log(order);
        let order_type = "";
        let total_item_counter = 0;
        let order_number = "";
        let token_number = (order.token_number != undefined && order.token_number) ? `<h4 style="margin-bottom: 0px;">` + inv_token_number + `: ` + order.token_number + `</h4>` : "";
        if (order !== null) {
            if (order.order_type == 1) {
                order_type = inv_dine;
            } else if (order.order_type == 2) {
                order_type = inv_take_away;
            } else if (order.order_type == 3) {
                order_type = inv_delivery;
            }
        }
        let text_no_str = '';
        if (inv_collect_tax == "Yes" && inv_tax_registration_no && outlet_tax_registration_no) {
            text_no_str = inv_tax_registration_no + ": " + outlet_tax_registration_no;
        }

        let server_value = order.counter_name;
        let inv_p_table = (order.orders_table_text != undefined && order.orders_table_text) ? ` ` + inv_table + `: ` + order.orders_table_text + `<br/>` : "";
        let inv_p_address = (order.customer_address != undefined && order.customer_address) ? ` <br>` + inv_address + `: <b>` + order.customer_address + `</b>` : "";


       // --- Fix Date & Time ---
       let sale_date_split = [];

        // If full datetime already available
        if (order.date_time && order.date_time.includes(" ")) {
            sale_date_split = order.date_time.split(" ");
        } else {
            // Use sale_date + order_time from DB
            let s_date = order.sale_date ? order.sale_date : "-";
            let s_time = (order.order_time && order.order_time !== "0000-00-00 00:00:00") 
                        ? order.order_time 
                        : "-";
            sale_date_split = [s_date, s_time];
        }

        let invoice_print = ``;
        invoice_print += `<!doctype html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <title>`+ inv_invoice_no + ` : ` + order.sale_no + `</title>
                    <script src="`+ base_url + `assets/bower_components/jquery/dist/jquery.min.js"></script>
                    <link rel="stylesheet"
                        href="`+ base_url + `assets/bower_components/font-awesome/css/font-awesome.min.css">
                    <script src="`+ base_url + `assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
                    ${style_print}
                </head>
                <body>
                    <div id="wrapper">
                        <div id="receiptData">
                            <div id="receipt-data">
                                <div class="text-center">
                                <img alt="`+ outlet_name + `" src="` + base_url + `images/` + invoice_logo + `">
                                <h5 style="margin-bottom: 5px;"> `+ outlet_name + ` </h5> 
                                `+ text_no_str + `
                                    <p class="p_txt">
                                        `+ inv_address + `: ` + outlet_address + `<br>
                                        `+ inv_phone + `: ` + outlet_phone + `<br>
                                    </p>
                                </div>
                                <table style="width:100%;margin-top: 10px;">
                    <tr>
                        <td style="text-align:left"><h5 style="margin-bottom: 0px; margin-top: 0px;"><b>Invoice no. - ` + (order.sale_inv_no || sale_inv_no || main_sale_inv_no) + `</b>
</h5></td>
                        <td style="text-align:right"><h5 style="margin-bottom: 0px; margin-top: 0px;"><b>`+ order_type + `</b></h5></td>
                    </tr>   
                </table>
                <table style="width:100%">
						<tr>
                        <td style="text-align:left">`+sale_date_split[0]+`</td>
                        <td style="text-align:right">`+sale_date_split[1]+`</td>
                    </tr> 
                      <tr>
                        <td style="text-align:left">
                        <h5 style="margin-bottom: 0px; margin-top: 0px;">
                            `+ inv_customer + `: <b>` + order.customer_name + ` (` + (order.customer_phone || '-') + `)</b>
                        </h5>
                        </td>
                        <td style="text-align:right"><h5 style="margin-bottom: 0px; margin-top: 0px;">`+ inv_p_table + `</h5></td>
                    </tr>   
                </table>
                
                                <div class="ir_clear"></div>
                                <hr style="border-bottom:1px solid black;margin: 0px;">
                                <table class="table table-condensed">
                                    <tbody>`;
        let subtotal_amount = 0;
            let sl = 1;
            // let invoice_print = '';
            // let total_item_counter = 0;
            for (let key in order.items) {
                let this_item = order.items[key];
                let total_modifier = 0;
                if (this_item.modifiers_id != '' && this_item.modifiers_id != undefined) {
                    total_modifier = (this_item.modifiers_id.split(',')).length;
                }
                let modifier_ids_custom = [];
                let modifier_names_custom = [];
                let modifier_prices_custom = [];
                if (total_modifier) {
                    modifier_ids_custom = this_item.modifiers_id.split(',');
                    modifier_names_custom = this_item.modifiers_name.split(',');
                    modifier_prices_custom = this_item.modifiers_price.split(',');
                }
                total_item_counter += Number(this_item.qty);
                let discount_value = Number(this_item.item_discount_amount)
                    ? "(-" + getAmount(this_item.item_discount_amount) + ")"
                    : '';
                let alternative_name = getAlternativeNameById(this_item.food_menu_id, window.items);
                invoice_print += `<tr>`;
                invoice_print += `<td class="no-border border-bottom ir_wid_90"><h5 style="margin: 0px;"># ` + sl + `:` + this_item.menu_name + alternative_name;
                invoice_print += `&nbsp;&nbsp;` + this_item.qty + `&nbsp;X&nbsp;` + getAmount(this_item.menu_unit_price) + ` ` + discount_value;
                if (
                    this_item.menu_combo_items != "" &&
                    this_item.menu_combo_items != undefined &&
                    this_item.menu_combo_items != null &&
                    this_item.menu_combo_items != "undefined"
                ) {
                    invoice_print += `<br><span style="padding-left: 30px;">` + combo_txt + this_item.menu_combo_items + `</span>`;
                }
				if (this_item.menu_note && this_item.menu_note !== "undefined") {
                    invoice_print += `<br><span style="padding-left: 30px;">Note: `+ this_item.menu_note +`</span>`;
                }
                invoice_print += `</h5></td>`;
                invoice_print += `<td class="no-border border-bottom text-right">` + getAmount(this_item.menu_price_without_discount) + `</td>`;
                invoice_print += `</tr>`;
                subtotal_amount += parseFloat(this_item.menu_price_without_discount);

             // --- ✅ New modifier loop ---
                if (this_item.modifiers && this_item.modifiers.length > 0) {
                    this_item.modifiers.forEach(mod => {
                        let mod_unit_price = parseFloat(mod.modifier_price) || 0;
                        let mod_total_price = mod_unit_price * parseFloat(this_item.qty);

                        invoice_print += `<tr>`;
                        invoice_print += `<td class="no-border border-bottom" style="padding-left: 30px;">
                                            ${mod.modifier_name} × ${this_item.qty}
                                        </td>`;
                        invoice_print += `<td class="no-border border-bottom text-right">${getAmount(mod_total_price)}</td>`;
                        invoice_print += `</tr>`;

                        subtotal_amount += mod_total_price;
                    });
                }

                sl++;
            }
            invoice_print += `</tbody>
            </table>
            <hr style="border-bottom:1px solid black;margin: 0px;">
            <table class="table table-condensed">`;
            invoice_print += `<tr>
                <th class="text_left">Sub Total</th>
                <th class="text-right">` + getAmount(subtotal_amount) + `</th>
            </tr>`;
           
            // Always show discount
            let total_discount = Number(order.total_discount_amount) || 0;
            invoice_print += `<tr>
                <th class="text_left">` + inv_discount + `</th>
                <th class="text-right">` + getAmount(total_discount) + `</th>
            </tr>`;

            if (Number(order.delivery_charge_actual_charge)) {
                invoice_print += `<tr>
                                                    <th  class="text_left">`+ (order.charge_type == "service" ? inv_service_charge : inv_delivery_charge) + `
                                                    
                                                    </th>
                                                    <th class="text-right">
                                                        `+ getAmount(order.delivery_charge_actual_charge) + `
                                                    </th>
                                                    </tr>`;
            }
            if (Number(order.tips_amount_actual_charge)) {
                invoice_print += `<tr>
                                                    <th  class="text_left">`+ inv_tips + `
                                                    
                                                    </th>
                                                    <th class="text-right">
                                                        `+ getAmount(order.tips_amount_actual_charge) + `
                                                    </th>
                                                    </tr>`;
            }

            let total_vat_section_to_show = ``;
            $.each(order.sale_vat_objects, function (key, value) {
                if (Number(value.tax_field_amount)) {
                    total_vat_section_to_show += `<tr>
                                                                            <th class="text_left">
                                                                                `+ value.tax_field_type + `
                                                                            </th>
                                                                            <th class="text-right">
                                                                                `+ getAmount(value.tax_field_amount) + `
                                                                            </th>
                                                                        </tr>`;
                }
            });
            invoice_print += ` </table>
                
                    <table class="table table-striped table-condensed">
                        <tbody>
                            <tr>`;
            
            invoice_print += `
                                        </tfoot>
                                    </table>
                                    <table class="table">
                        <tbody>`;
        
        // let obj_payment = [];
        // try {
        //     if (order.payment_object) {
        //         obj_payment = JSON.parse(order.payment_object);
        //     }
        // } catch (e) {
        //     console.error("Failed to parse payment_object:", order.payment_object, e);
        //     obj_payment = [];
        // }

        // // If payment_object is empty, create one default row
        // if (!obj_payment.length) {
        //     obj_payment = [{
        //         payment_name: "Cash",  // default payment method
        //         amount: order.total_payable || subtotal_amount // fallback
        //     }];
        // }

        // // Print each payment method row
        // $.each(obj_payment, function (key, value) {
        //     invoice_print += `<tr>
        //         <th class="text_left">Total Amount (` + value.payment_name + `)</th>
        //         <th class="text-right">` + getAmount(Number(value.amount) || 0) + `</th>
        //     </tr>`; 
        // });

        let obj_payment = [];
        try {
            if (order.payment_object) {
                obj_payment = JSON.parse(order.payment_object);
            }
        } catch (e) {
            console.error("Failed to parse payment_object:", order.payment_object, e);
            obj_payment = [];
        }

        // If payment_object is empty, but we have payment_method_id
        if (!obj_payment.length && order.payment_method_id) {
            let paymentName = paymentMethodsMap[order.payment_method_id] || "Unknown";
            obj_payment = [{
                payment_name: paymentName,
                amount: order.total_payable || subtotal_amount
            }];
        }

        // Print each payment method row
        $.each(obj_payment, function (key, value) {
            invoice_print += `<tr>
                <th class="text_left">Total Amount (` + value.payment_name + `)</th>
                <th class="text-right">` + getAmount(Number(value.amount) || 0) + `</th>
            </tr>`; 
        });

        if (Number(order.is_multi_currency) == 1) {
            let txt_multi_currency = "Paid in " + order.multi_currency + " " + order.multi_currency_amount + " where 1" + inv_currency + " = " + order.multi_currency_rate + " " + order.multi_currency;
            invoice_print += `<tr>
                                                                                <th colspan="2" class="ir_txt_center">`+ txt_multi_currency + `
                                                                                  
                                                                                </th>
                                                                                  
                                                                                </tr>`;
        }
        if (Number(order.hidden_change_amount)) {
            invoice_print += `<tr>
                                        <th  class="text_left">`+ inv_change_amount + `
                                          
                                        </th>
                                            <th class="text-right">
                                                ` + getAmount(order.hidden_change_amount) + `
                                            </th>
                                        </tr>`;
        }

        invoice_print += `</tbody>
                                </table>
                                <h4 style="text-align:center;margin-bottom: 50px"> `+ invoice_footer + `</h4>
                                <br>
                                <br>
                            </div>
                            <div class="ir_clear"></div>
                        </div>
                
                        <div id="buttons"  class="no-print ir_pt_tr">
                            <hr>
                            <span class="col-xs-12">
                                <a class="btn btn-block btn-primary" href="javascript:eval('window.print()')"/>Print</a> </span>
                            <div class="ir_clear"></div>
                            <div class="col-xs-12 ir_bg_p_c_red">
                                <p class="ir_font_txt_transform_none">
                                    Please follow these steps before you print for first time:
                                </p>
                                <p class="ir_font_capitalize">
                                    1. Disable Header and Footer in browser's print setting<br>
                                    For Firefox: File &gt; Page Setup &gt; Margins &amp; Header/Footer &gt; Headers & Footers &gt; Make
                                    all --blank--<br>
                                    For Chrome: Menu &gt; Print &gt; Uncheck Header/Footer in More Options
                                </p>
                            </div>
                            <div class="ir_clear"></div>
                        </div>
                    </div>
                    <script src="`+ base_url + `assets/dist/js/print/jquery-2.0.3.min.js"></script>
                    <script src="`+ base_url + `assets/dist/js/print/custom.js"></script>
                    <script src="`+ base_url + `assets/plugins/barcode/jquery.qrcode.min.js"></script>
                    <script>
                        $(function() {
                          setTimeout(function(){ $('#barcode_invoice').qrcode("`+ base_url + `invoice/` + order.random_code + `");   window.print(); setTimeout(function() { window.close(); }, 500); }, 1000);
                         
                        });
                    </script>
                </body>
                
                </html>`;
        // reset_finalize_modal();
        var popup = window.open("", "popup", "width=100", "height=600");
        popup.document.write(invoice_print);
        popup.document.close();
        popup.focus();
    }




    function call_print_invoice(order_info, sale_inv_no = '', inv_no = '') {
        let order = JSON.parse(order_info);

        //console.log(order);
        let order_type = "";
        let total_item_counter = 0;
        let order_number = "";
        let token_number = (order.token_number != undefined && order.token_number) ? `<h4 style="margin-bottom: 0px;">` + inv_token_number + `: ` + order.token_number + `</h4>` : "";
        if (order !== null) {
            if (order.order_type == 1) {
                order_type = inv_dine;
            } else if (order.order_type == 2) {
                order_type = inv_take_away;
            } else if (order.order_type == 3) {
                order_type = inv_delivery;
            }
        }
        let text_no_str = '';
        if (inv_collect_tax == "Yes" && inv_tax_registration_no && outlet_tax_registration_no) {
            text_no_str = inv_tax_registration_no + ": " + outlet_tax_registration_no;
        }

        let server_value = order.counter_name;
        let inv_p_table = (order.orders_table_text != undefined && order.orders_table_text) ? ` ` + inv_table + `: ` + order.orders_table_text + `<br/>` : "";
        let inv_p_address = (order.customer_address != undefined && order.customer_address) ? ` <br>` + inv_address + `: <b>` + order.customer_address + `</b>` : "";

        let sale_date_split = order.date_time.split(' ');
        let invoice_print = ``;
        invoice_print += `<!doctype html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <title>`+ inv_invoice_no + ` : ` + order.sale_no + `</title>
                    <script src="`+ base_url + `assets/bower_components/jquery/dist/jquery.min.js"></script>
                    <link rel="stylesheet"
                        href="`+ base_url + `assets/bower_components/font-awesome/css/font-awesome.min.css">
                    <script src="`+ base_url + `assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
                    ${style_print}

                    <style>
                        @media print {
                            .page-break { page-break-before: always; }
                        }
                    </style>
                </head>
                <body>
                    <div id="wrapper">
                        <div id="receiptData">
                            <div id="receipt-data">
                                <div class="text-center">
                                <img alt="`+ outlet_name + `" src="` + base_url + `images/` + invoice_logo + `">
                                <h5 style="margin-bottom: 5px;"> `+ outlet_name + ` </h5> 
                                `+ text_no_str + `
                                    <p class="p_txt">
                                        `+ inv_address + `: ` + outlet_address + `<br>
                                        `+ inv_phone + `: ` + outlet_phone + `<br>
                                    </p>
                                </div>
                                <table style="width:100%;margin-top: 10px;">
                    <tr>
                        <td style="text-align:left"><h5 style="margin-bottom: 0px; margin-top: 0px;"><b>` + `Invoice no.` + (sale_inv_no ? ' - ' + sale_inv_no : main_sale_inv_no) + `</b></h5></td>
                        <td style="text-align:right"><h5 style="margin-bottom: 0px; margin-top: 0px;"><b>`+ order_type + `</b></h5></td>
                    </tr>   
                </table>
                <table style="width:100%">
						<tr>
                        <td style="text-align:left">`+ sale_date_split[0] + `</td>
                        <td style="text-align:right">`+ sale_date_split[1] + `</td>
                    </tr> 
                      <tr>
                        <td style="text-align:left"><h5 style="margin-bottom: 0px; margin-top: 0px;">`+ inv_customer + `: <b>` + order.customer_name + `</h5></td>
                        <td style="text-align:right"><h5 style="margin-bottom: 0px; margin-top: 0px;">`+ inv_p_table + `</h5></td>
                    </tr>   
                </table>
                
                                <div class="ir_clear"></div>
                                <hr style="border-bottom:1px solid black;margin: 0px;">
                                <table class="table table-condensed">
                                    <tbody>`;
        let subtotal_amount = 0;
        let sl = 1;
        // let invoice_print = '';
        // let total_item_counter = 0;
        for (let key in order.items) {
            let this_item = order.items[key];
            let total_modifier = 0;
            if (this_item.modifiers_id != '' && this_item.modifiers_id != undefined) {
                total_modifier = (this_item.modifiers_id.split(',')).length;
            }
            let modifier_ids_custom = [];
            let modifier_names_custom = [];
            let modifier_prices_custom = [];
            if (total_modifier) {
                modifier_ids_custom = this_item.modifiers_id.split(',');
                modifier_names_custom = this_item.modifiers_name.split(',');
                modifier_prices_custom = this_item.modifiers_price.split(',');
            }
            total_item_counter += Number(this_item.qty);
            let discount_value = Number(this_item.item_discount_amount)
                ? "(-" + getAmount(this_item.item_discount_amount) + ")"
                : '';
            let alternative_name = getAlternativeNameById(this_item.food_menu_id, window.items);
            invoice_print += `<tr>`;
            invoice_print += `<td class="no-border border-bottom ir_wid_90"><h5 style="margin: 0px;"># ` + sl + `:` + this_item.menu_name + alternative_name;
            invoice_print += `&nbsp;&nbsp;` + this_item.qty + `&nbsp;X&nbsp;` + getAmount(this_item.menu_unit_price) + ` ` + discount_value;
            if (
                this_item.menu_combo_items != "" &&
                this_item.menu_combo_items != undefined &&
                this_item.menu_combo_items != null &&
                this_item.menu_combo_items != "undefined"
            ) {
                invoice_print += `<br><span style="padding-left: 30px;">` + combo_txt + this_item.menu_combo_items + `</span>`;
            }
            if (this_item.item_note != "" && this_item.item_note != undefined && this_item.item_note != null && this_item.item_note != "undefined") {
                invoice_print += `<br><span  style="padding-left: 30px;">` + note_txt + ": " + this_item.item_note + `</span>`;
            }
            invoice_print += `</h5></td>`;
            invoice_print += `<td class="no-border border-bottom text-right">` + getAmount(this_item.menu_price_without_discount) + `</td>`;
            invoice_print += `</tr>`;
            subtotal_amount += parseFloat(this_item.menu_price_without_discount);
            for (let mod_key in modifier_names_custom) {
                let tmp_mod_name_m_n = modifier_names_custom[mod_key];
                let tmp_mod_unit_price = parseFloat(modifier_prices_custom[mod_key]) || 0;
                let tmp_mod_total_price = tmp_mod_unit_price * parseFloat(this_item.qty); //  multiply by qty

                invoice_print += `<tr>`;
                invoice_print += `<td class="no-border border-bottom" style="padding-left: 38px;">`
                    + tmp_mod_name_m_n + ` × ` + this_item.qty + `</td>`; //  show qty in label
                invoice_print += `<td class="no-border border-bottom text-right">`
                    + getAmount(tmp_mod_total_price) + `</td>`;
                invoice_print += `</tr>`;

                subtotal_amount += tmp_mod_total_price; //  add full qty price
            }
            sl++;
        }
        invoice_print += `</tbody>
            </table>
            <hr style="border-bottom:1px solid black;margin: 0px;">
            <table class="table table-condensed">`;
        invoice_print += `<tr>
                <th class="text_left">Sub Total</th>
                <th class="text-right">` + getAmount(subtotal_amount) + `</th>
            </tr>`;
        // Always show discount
        let total_discount = Number(order.total_discount_amount) || 0;
        invoice_print += `<tr>
                <th class="text_left">` + inv_discount + `</th>
                <th class="text-right">` + getAmount(total_discount) + `</th>
            </tr>`;
        if (Number(order.delivery_charge_actual_charge)) {
            invoice_print += `<tr>
                                                <th  class="text_left">`+ (order.charge_type == "service" ? inv_service_charge : inv_delivery_charge) + `
                                                  
                                                </th>
                                                <th class="text-right">
                                                    `+ getAmount(order.delivery_charge_actual_charge) + `
                                                </th>
                                                </tr>`;
        }
        if (Number(order.tips_amount_actual_charge)) {
            invoice_print += `<tr>
                                                <th  class="text_left">`+ inv_tips + `
                                                  
                                                </th>
                                                <th class="text-right">
                                                    `+ getAmount(order.tips_amount_actual_charge) + `
                                                </th>
                                                </tr>`;
        }

        let total_vat_section_to_show = ``;
        $.each(order.sale_vat_objects, function (key, value) {
            if (Number(value.tax_field_amount)) {
                total_vat_section_to_show += `<tr>
                                                                        <th class="text_left">
                                                                            `+ value.tax_field_type + `
                                                                        </th>
                                                                        <th class="text-right">
                                                                            `+ getAmount(value.tax_field_amount) + `
                                                                        </th>
                                                                    </tr>`;
            }
        });
        invoice_print += ` </table>
               
                <table class="table table-striped table-condensed">
                    <tbody>
                        <tr>`;

        invoice_print += `
                                    </tfoot>
                                </table>
                                <table class="table">
                    <tbody>`;
        let obj_payment = '';
        if (Number(order.split_sale_id) && order.split_sale_id != undefined) {
            obj_payment = JSON.parse(order.payment_object);
        } else {
            obj_payment = JSON.parse(order.payment_object);
        }
        if (obj_payment.length) {
            $.each(obj_payment, function (key, value) {
                let txt_point = '';
                if (value.payment_id == 5) {
                    txt_point = " (" + inv_usage_points + ":" + value.usage_point + ")";
                }
                invoice_print += `<tr>
                                                                                <th class="text_left">Total Amount(`+ value.payment_name + `)
                                                                                </th>
                                                                                    <th class="text-right">
                                                                                        ` + getAmount(value.amount) + `
                                                                                    </th>
                                                                                </tr>`;
            });
        }
        if (Number(order.is_multi_currency) == 1) {
            let txt_multi_currency = "Paid in " + order.multi_currency + " " + order.multi_currency_amount + " where 1" + inv_currency + " = " + order.multi_currency_rate + " " + order.multi_currency;
            invoice_print += `<tr>
                                                                                <th colspan="2" class="ir_txt_center">`+ txt_multi_currency + `
                                                                                  
                                                                                </th>
                                                                                  
                                                                                </tr>`;
        }
        if (Number(order.hidden_change_amount)) {
            invoice_print += `<tr>
                                        <th  class="text_left">`+ inv_change_amount + `
                                          
                                        </th>
                                            <th class="text-right">
                                                ` + getAmount(order.hidden_change_amount) + `
                                            </th>
                                        </tr>`;
        }


        // ======= YOUR EXISTING FOOTER AND PAYMENT SECTION =======

        invoice_print += `
        </table>
        <h4 style="text-align:center;margin-bottom: 50px"> ` + invoice_footer + `</h4>
    
        <div class="page-break"></div>
    <div style="text-align:center;margin-top:5px;">
        <h4><b>KITCHEN ORDER TICKET</b></h4>
    </div>
    <table style="width:100%;font-size:15px;margin-bottom:5px;">
        <tr>
            <td style="text-align:left;"><b>Invoice No.:</b> ` + (sale_inv_no ? sale_inv_no : order.sale_no) + `</td>
            <td style="text-align:right;"><b>` + order_type + `</b></td>
        </tr>
        <tr>
            <td style="text-align:left;">` + order.date_time + `</td>
            <td style="text-align:right;"><b>Customer:</b> ` + (order.customer_name ? order.customer_name : '-') + `</td>
        </tr>
    </table>
    <hr style="border:1px dashed #000;">
    <div style="font-size:15px;">`;

        let kot_sl = 1;
        for (let key in order.items) {
            let item = order.items[key];

            invoice_print += `
                <p style="margin:3px 0;">#` + kot_sl + `: <b>` + item.menu_name + `</b> — Qty: <b>` + item.qty + `</b></p>
            `;

            // MODIFIER PRINT FOR KOT
            if (item.modifiers_id && item.modifiers_id != "") {
                let mod_names = item.modifiers_name.split(",");
                let mod_prices = item.modifiers_price.split(",");
                let mod_ids = item.modifiers_id.split(",");

                for (let m = 0; m < mod_names.length; m++) {
                    invoice_print += `
                        <p style="margin:3px 0; padding-left:25px;">
                            • ` + mod_names[m] + ` × <b>` + item.qty + `</b>
                        </p>
                    `;
                }
            }

            // NOTE PRINT (IF ANY)
            if (item.item_note && item.item_note != "undefined" && item.item_note != "") {
                invoice_print += `
                    <p style="margin:3px 0; padding-left:25px;">
                        Note: ` + item.item_note + `
                    </p>
                `;
            }

            kot_sl++;
        }


        invoice_print += `
    </div>
    <hr style="border:1px dashed #000;">
`;


        invoice_print += `</tbody>
                                </table>
                                <br>
                                <br>
                            </div>
                            <div class="ir_clear"></div>
                        </div>
                
                        <div id="buttons"  class="no-print ir_pt_tr">
                            <hr>
                            <span class="col-xs-12">
                                <a class="btn btn-block btn-primary" href="javascript:eval('window.print()')"/>Print</a> </span>
                            <div class="ir_clear"></div>
                            <div class="col-xs-12 ir_bg_p_c_red">
                                <p class="ir_font_txt_transform_none">
                                    Please follow these steps before you print for first time:
                                </p>
                                <p class="ir_font_capitalize">
                                    1. Disable Header and Footer in browser's print setting<br>
                                    For Firefox: File &gt; Page Setup &gt; Margins &amp; Header/Footer &gt; Headers & Footers &gt; Make
                                    all --blank--<br>
                                    For Chrome: Menu &gt; Print &gt; Uncheck Header/Footer in More Options
                                </p>
                            </div>
                            <div class="ir_clear"></div>
                        </div>
                    </div>
                    <script src="`+ base_url + `assets/dist/js/print/jquery-2.0.3.min.js"></script>
                    <script src="`+ base_url + `assets/dist/js/print/custom.js"></script>
                    <script src="`+ base_url + `assets/plugins/barcode/jquery.qrcode.min.js"></script>
                    <script>
                        $(function() {
                          setTimeout(function(){ $('#barcode_invoice').qrcode("`+ base_url + `invoice/` + order.random_code + `");   window.print(); setTimeout(function() { window.close(); }, 500); }, 1000);
                         
                        });
                    </script>
                </body>
                
                </html>`;

        var popup = window.open("", "popup", "width=100", "height=600");
        popup.document.write(invoice_print);
        popup.document.close();
        popup.focus();
    }



   /* function call_print_invoice(order_info, sale_inv_no = '', inv_no = '') {
        let order = JSON.parse(order_info);

        //console.log(order);
        let order_type = "";
        let total_item_counter = 0;
        let order_number = "";
        let token_number = (order.token_number != undefined && order.token_number) ? `<h4 style="margin-bottom: 0px;">` + inv_token_number + `: ` + order.token_number + `</h4>` : "";
        if (order !== null) {
            if (order.order_type == 1) {
                order_type = inv_dine;
            } else if (order.order_type == 2) {
                order_type = inv_take_away;
            } else if (order.order_type == 3) {
                order_type = inv_delivery;
            }
        }
        let text_no_str = '';
        if (inv_collect_tax == "Yes" && inv_tax_registration_no && outlet_tax_registration_no) {
            text_no_str = inv_tax_registration_no + ": " + outlet_tax_registration_no;
        }

        let server_value = order.counter_name;
        let inv_p_table = (order.orders_table_text != undefined && order.orders_table_text) ? ` ` + inv_table + `: ` + order.orders_table_text + `<br/>` : "";
        let inv_p_address = (order.customer_address != undefined && order.customer_address) ? ` <br>` + inv_address + `: <b>` + order.customer_address + `</b>` : "";

        let sale_date_split = order.date_time.split(' ');
        let invoice_print = ``;
        invoice_print += `<!doctype html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <title>`+ inv_invoice_no + ` : ` + order.sale_no + `</title>
                    <script src="`+ base_url + `assets/bower_components/jquery/dist/jquery.min.js"></script>
                    <link rel="stylesheet"
                        href="`+ base_url + `assets/bower_components/font-awesome/css/font-awesome.min.css">
                    <script src="`+ base_url + `assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
                    ${style_print}
                </head>
                <body>
                    <div id="wrapper">
                        <div id="receiptData">
                            <div id="receipt-data">
                                <div class="text-center">
                                <img alt="`+ outlet_name + `" src="` + base_url + `images/` + invoice_logo + `">
                                <h5 style="margin-bottom: 5px;"> `+ outlet_name + ` </h5> 
                                `+ text_no_str + `
                                    <p class="p_txt">
                                        `+ inv_address + `: ` + outlet_address + `<br>
                                        `+ inv_phone + `: ` + outlet_phone + `<br>
                                    </p>
                                </div>
                                <table style="width:100%;margin-top: 10px;">
                    <tr>
                        <td style="text-align:left"><h5 style="margin-bottom: 0px; margin-top: 0px;"><b>` + `Invoice no.` + (sale_inv_no ? ' - ' + sale_inv_no : main_sale_inv_no ) + `</b></h5></td>
                        <td style="text-align:right"><h5 style="margin-bottom: 0px; margin-top: 0px;"><b>`+ order_type + `</b></h5></td>
                    </tr>   
                </table>
                <table style="width:100%">
						<tr>
                        <td style="text-align:left">`+sale_date_split[0]+`</td>
                        <td style="text-align:right">`+sale_date_split[1]+`</td>
                    </tr> 
                      <tr>
                        <td style="text-align:left"><h5 style="margin-bottom: 0px; margin-top: 0px;">`+ inv_customer + `: <b>` + order.customer_name + `</h5></td>
                        <td style="text-align:right"><h5 style="margin-bottom: 0px; margin-top: 0px;">`+ inv_p_table + `</h5></td>
                    </tr>   
                </table>
                
                                <div class="ir_clear"></div>
                                <hr style="border-bottom:1px solid black;margin: 0px;">
                                <table class="table table-condensed">
                                    <tbody>`;
        let subtotal_amount = 0;
            let sl = 1;
            // let invoice_print = '';
            // let total_item_counter = 0;
            for (let key in order.items) {
                let this_item = order.items[key];
                let total_modifier = 0;
                if (this_item.modifiers_id != '' && this_item.modifiers_id != undefined) {
                    total_modifier = (this_item.modifiers_id.split(',')).length;
                }
                let modifier_ids_custom = [];
                let modifier_names_custom = [];
                let modifier_prices_custom = [];
                if (total_modifier) {
                    modifier_ids_custom = this_item.modifiers_id.split(',');
                    modifier_names_custom = this_item.modifiers_name.split(',');
                    modifier_prices_custom = this_item.modifiers_price.split(',');
                }
                total_item_counter += Number(this_item.qty);
                let discount_value = Number(this_item.item_discount_amount)
                    ? "(-" + getAmount(this_item.item_discount_amount) + ")"
                    : '';
                let alternative_name = getAlternativeNameById(this_item.food_menu_id, window.items);
                invoice_print += `<tr>`;
                invoice_print += `<td class="no-border border-bottom ir_wid_90"><h5 style="margin: 0px;"># ` + sl + `:` + this_item.menu_name + alternative_name;
                invoice_print += `&nbsp;&nbsp;` + this_item.qty + `&nbsp;X&nbsp;` + getAmount(this_item.menu_unit_price) + ` ` + discount_value;
                if (
                    this_item.menu_combo_items != "" &&
                    this_item.menu_combo_items != undefined &&
                    this_item.menu_combo_items != null &&
                    this_item.menu_combo_items != "undefined"
                ) {
                    invoice_print += `<br><span style="padding-left: 30px;">` + combo_txt + this_item.menu_combo_items + `</span>`;
                }
				if (this_item.item_note != "" && this_item.item_note!=undefined  && this_item.item_note!=null && this_item.item_note!="undefined") {
                invoice_print+= `<br><span  style="padding-left: 30px;">`+note_txt+": "+this_item.item_note+`</span>`;
            }
                invoice_print += `</h5></td>`;
                invoice_print += `<td class="no-border border-bottom text-right">` + getAmount(this_item.menu_price_without_discount) + `</td>`;
                invoice_print += `</tr>`;
                subtotal_amount += parseFloat(this_item.menu_price_without_discount);
                    for (let mod_key in modifier_names_custom) {
                        let tmp_mod_name_m_n = modifier_names_custom[mod_key];
                        let tmp_mod_unit_price = parseFloat(modifier_prices_custom[mod_key]) || 0;
                        let tmp_mod_total_price = tmp_mod_unit_price * parseFloat(this_item.qty); //  multiply by qty

                        invoice_print += `<tr>`;
                        invoice_print += `<td class="no-border border-bottom" style="padding-left: 38px;">` 
                                        + tmp_mod_name_m_n + ` × ` + this_item.qty + `</td>`; //  show qty in label
                        invoice_print += `<td class="no-border border-bottom text-right">` 
                                        + getAmount(tmp_mod_total_price) + `</td>`;
                        invoice_print += `</tr>`;

                        subtotal_amount += tmp_mod_total_price; //  add full qty price
                    }
                sl++;
            }
            invoice_print += `</tbody>
            </table>
            <hr style="border-bottom:1px solid black;margin: 0px;">
            <table class="table table-condensed">`;
            invoice_print += `<tr>
                <th class="text_left">Sub Total</th>
                <th class="text-right">` + getAmount(subtotal_amount) + `</th>
            </tr>`;
            // Always show discount
            let total_discount = Number(order.total_discount_amount) || 0;
            invoice_print += `<tr>
                <th class="text_left">` + inv_discount + `</th>
                <th class="text-right">` + getAmount(total_discount) + `</th>
            </tr>`;
        if (Number(order.delivery_charge_actual_charge)) {
            invoice_print += `<tr>
                                                <th  class="text_left">`+ (order.charge_type == "service" ? inv_service_charge : inv_delivery_charge) + `
                                                  
                                                </th>
                                                <th class="text-right">
                                                    `+ getAmount(order.delivery_charge_actual_charge) + `
                                                </th>
                                                </tr>`;
        }
        if (Number(order.tips_amount_actual_charge)) {
            invoice_print += `<tr>
                                                <th  class="text_left">`+ inv_tips + `
                                                  
                                                </th>
                                                <th class="text-right">
                                                    `+ getAmount(order.tips_amount_actual_charge) + `
                                                </th>
                                                </tr>`;
        }

        let total_vat_section_to_show = ``;
        $.each(order.sale_vat_objects, function (key, value) {
            if (Number(value.tax_field_amount)) {
                total_vat_section_to_show += `<tr>
                                                                        <th class="text_left">
                                                                            `+ value.tax_field_type + `
                                                                        </th>
                                                                        <th class="text-right">
                                                                            `+ getAmount(value.tax_field_amount) + `
                                                                        </th>
                                                                    </tr>`;
            }
        });
        invoice_print += ` </table>
               
                <table class="table table-striped table-condensed">
                    <tbody>
                        <tr>`;
        
        invoice_print += `
                                    </tfoot>
                                </table>
                                <table class="table">
                    <tbody>`;
        let obj_payment = '';
        if (Number(order.split_sale_id) && order.split_sale_id != undefined) {
            obj_payment = JSON.parse(order.payment_object);
        } else {
            obj_payment = JSON.parse(order.payment_object);
        }
        if (obj_payment.length) {
            $.each(obj_payment, function (key, value) {
                let txt_point = '';
                if (value.payment_id == 5) {
                    txt_point = " (" + inv_usage_points + ":" + value.usage_point + ")";
                }
                invoice_print += `<tr>
                                                                                <th class="text_left">Total Amount(`+ value.payment_name + `)
                                                                                </th>
                                                                                    <th class="text-right">
                                                                                        ` + getAmount(value.amount) + `
                                                                                    </th>
                                                                                </tr>`; 
            });
        }
        if (Number(order.is_multi_currency) == 1) {
            let txt_multi_currency = "Paid in " + order.multi_currency + " " + order.multi_currency_amount + " where 1" + inv_currency + " = " + order.multi_currency_rate + " " + order.multi_currency;
            invoice_print += `<tr>
                                                                                <th colspan="2" class="ir_txt_center">`+ txt_multi_currency + `
                                                                                  
                                                                                </th>
                                                                                  
                                                                                </tr>`;
        }
        if (Number(order.hidden_change_amount)) {
            invoice_print += `<tr>
                                        <th  class="text_left">`+ inv_change_amount + `
                                          
                                        </th>
                                            <th class="text-right">
                                                ` + getAmount(order.hidden_change_amount) + `
                                            </th>
                                        </tr>`;
        }

        invoice_print += `</tbody>
                                </table>
                                <h4 style="text-align:center;margin-bottom: 50px"> `+ invoice_footer + `</h4>
                                <br>
                                <br>
                            </div>
                            <div class="ir_clear"></div>
                        </div>
                
                        <div id="buttons"  class="no-print ir_pt_tr">
                            <hr>
                            <span class="col-xs-12">
                                <a class="btn btn-block btn-primary" href="javascript:eval('window.print()')"/>Print</a> </span>
                            <div class="ir_clear"></div>
                            <div class="col-xs-12 ir_bg_p_c_red">
                                <p class="ir_font_txt_transform_none">
                                    Please follow these steps before you print for first time:
                                </p>
                                <p class="ir_font_capitalize">
                                    1. Disable Header and Footer in browser's print setting<br>
                                    For Firefox: File &gt; Page Setup &gt; Margins &amp; Header/Footer &gt; Headers & Footers &gt; Make
                                    all --blank--<br>
                                    For Chrome: Menu &gt; Print &gt; Uncheck Header/Footer in More Options
                                </p>
                            </div>
                            <div class="ir_clear"></div>
                        </div>
                    </div>
                    <script src="`+ base_url + `assets/dist/js/print/jquery-2.0.3.min.js"></script>
                    <script src="`+ base_url + `assets/dist/js/print/custom.js"></script>
                    <script src="`+ base_url + `assets/plugins/barcode/jquery.qrcode.min.js"></script>
                    <script>
                        $(function() {
                          setTimeout(function(){ $('#barcode_invoice').qrcode("`+ base_url + `invoice/` + order.random_code + `");   window.print(); setTimeout(function() { window.close(); }, 500); }, 1000);
                         
                        });
                    </script>
                </body>
                
                </html>`;
        
        var popup = window.open("", "popup", "width=100", "height=600");
        popup.document.write(invoice_print);
        popup.document.close();
        popup.focus();
    }  */

    function reset_finalize_modal() {
        // Reset core payment fields
        $("#finalize_total_payable").html(Number(0).toFixed(ir_precision));
        $("#finalize_total_payable").attr('data-original_payable', '');
        $("#finalize_total_due").html('');
        $("#given_amount_input").val("");
        $("#change_amount_input").val("");
        $("#finalize_update_type").html("");
        $("#pay_amount_invoice_input").val("");
        $("#due_amount_invoice_input").val("");

        // Reset payment method selection
        $("#finalie_order_payment_method").css("border", "1px solid #B5D6F6");
        let default_payment_hidden = $("#default_payment_hidden").val();
        $("#finalie_order_payment_method").val(default_payment_hidden).change();

        // Remove active/inactive states from modals
        $("#finalize_order_modal").removeClass("active");
        $("#order_payment_modal").removeClass("active").addClass("inActive");
        $("#order_detail_modal").removeClass("active");

        // Fade out modal overlay
        $(".pos__modal__overlay").fadeOut(300);

        // Optional UI reset additions
        $(".empty_title").hide();
        $(".badge_custom").remove();
        $(".previous_due_div").css('opacity', '1').hide();
        $(".loyalty_point_div").hide();
        $(".set_no_access").addClass('no_access');
        $(".finalize_modal_is_mul_currency").hide(300);

        // Clear cart modal summary texts
        $("#cart_modal_total_item_text").html('0');
        $("#cart_modal_total_subtotal_text").html(Number(0).toFixed(ir_precision));
        $("#cart_modal_total_discount_text").html(Number(0).toFixed(ir_precision));
        $("#cart_modal_total_discount_all_text").html(Number(0).toFixed(ir_precision));
        $("#cart_modal_total_discount_all_text").attr('data-original_discount', '');
        $("#cart_modal_total_tax_text").html(Number(0).toFixed(ir_precision));
        $("#cart_modal_total_charge_text").html(Number(0).toFixed(ir_precision));
        $("#cart_modal_total_tips_text").html(Number(0).toFixed(ir_precision));
        $("#cart_modal_total_rounding_texts").html(Number(0).toFixed(ir_precision));

        // Reset invoice date & multi-currency if needed
        $("#open_invoice_date_hidden").val('');
        $("#is_multi_currency").val('');
        $("#finalize_amount_input").html('');

        // Reset customer selection
        $("#selected_invoice_sale_customer").val($("#walk_in_customer").val());

        // Clear payment list if needed
        $("#payment_list_div").html('');
        //clear discoount values
        $("#sub_total_discount_finalize").val('');
}


    function notify_online(sale_no) {
        toastr.options = {
            positionClass: 'toast-bottom-right'
        };
        let msg = "Order placed successfully. Your order number is " + sale_no + ".";
        toastr['success'](msg, '');
    }

        // sound effect
    let placeOrderSound = new Howl({
        src: [base_url + "assets/media/alert_alarm.mp3"],
    });

    $(document).on("click", ".edit_item", function () {
        //add for vr01
        $("#modal_item_price").html(0);
        $("#vr01_modal_price_variable").html(0);
        $("#is_variation_product").html(0);
        $(".variation_div_modal").hide();
        $(".section3_vr").empty();
        $(".prom_txt").html('');
        $("#modal_discount").removeAttr("readonly");
        let add_to_cart_pos = $("#add_to_cart_pos").val();
        $("#add_to_cart").html(add_to_cart_pos);

        let single_order_element_object = $(this).parent().parent().parent();
        let menu_id = Number($(this).attr("id").substr(10));
        let item_price = single_order_element_object
            .find("#item_price_table_" + menu_id)
            .html();

        let parent_id = Number($(this).attr('data-parent_id'));
        let check_parent_id = 0;
        let check_parent_price = 0;
        if (parent_id) {
            $("#vr01_modal_price_variable").html(item_price);
            $(".variation_div_modal").show();
            $("#is_variation_product").html(parent_id);

            let foundItems_variations = get_variations_search_by_menu_id(parent_id, window.items);

            let variations = "";
            for (let key1 in foundItems_variations) {
                let item_price = 0;
                let vr01_selected_order_type_object = $(".main_top").find("button[data-selected=selected]");
                if (vr01_selected_order_type_object.attr("data-id") == "dine_in_button") {
                    item_price = parseFloat(foundItems_variations[key1].price).toFixed(ir_precision);
                } else if (vr01_selected_order_type_object.attr("data-id") == "take_away_button") {
                    item_price = parseFloat(foundItems_variations[key1].price_take).toFixed(ir_precision);
                } else if (vr01_selected_order_type_object.attr("data-id") == "delivery_button") {
                    item_price = parseFloat(foundItems_variations[key1].price_delivery).toFixed(ir_precision);
                }
                let check_status = '';
                let selected_status = 'unselected';
                if (menu_id == Number(foundItems_variations[key1].item_id)) {
                    selected_status = "selected";
                    check_status = "checked";
                }
                variations += "<div class='btn_new_custom vr01_modal_class bg_btn_custom' data-id='" + foundItems_variations[key1].item_id + "' data-code='" + foundItems_variations[key1].item_code + "'  data-item_name_tmp='" + foundItems_variations[key1].item_name_tmp + "' data-price='" + item_price + "' data-selected='" + selected_status + "' data-menu_tax='" + foundItems_variations[key1].tax_information + "'>";
                variations += `<input ` + check_status + ` class="margin_for_vr01" name="vr01_name" type="radio"/>`;
                variations += "<p>" + foundItems_variations[key1].item_name + "</p>";
                variations +=
                    '<span class="vr01_modal_price"> <span>' +
                    price_txt +
                    ":</span> " +
                    item_price +
                    "</span>";
                variations += "</div>";
            }

            //vr01
            $("#item_modal .section3_vr").empty();
            $("#item_modal .section3_vr").prepend(variations);
        }

        let row_number = $(this)
            .parent()
            .parent()
            .parent()
            .attr("data-single-order-row-no");

        let item_name = single_order_element_object
            .find("#item_name_table_" + menu_id)
            .html();

        let item_vat_percentage = single_order_element_object
            .find("#item_vat_percentage_table" + menu_id)
            .html();
        let item_discount_input_value = single_order_element_object
            .find("#percentage_table_" + menu_id)
            .val();
        let item_discount_amount = single_order_element_object
            .find("#item_discount_table" + menu_id)
            .html();
        let item_price_without_discount = single_order_element_object
            .find("#item_price_without_discount_" + menu_id)
            .html();
        let item_quantity = single_order_element_object
            .find("#item_quantity_table_" + menu_id)
            .html();
        let item_price_with_discount = parseFloat(
            single_order_element_object
                .find("#item_total_price_table_" + menu_id)
                .html()
        ).toFixed(ir_precision);
        let modifiers_price = parseFloat(0).toFixed(ir_precision);
        let cooking_status = single_order_element_object
            .find("#item_cooking_status_table" + menu_id)
            .html();
        if (cooking_status != "" && cooking_status !== undefined) {
            toastr['error']((progress_or_done_kitchen), '');
            return false;
        }
        if (
            single_order_element_object.find("#item_modifiers_price_table_" + menu_id)
                .length > 0
        ) {
            let comma_separeted_modifiers_price = single_order_element_object
                .find("#item_modifiers_price_table_" + menu_id)
                .html();
            let modifiers_price_array =
                comma_separeted_modifiers_price != ""
                    ? comma_separeted_modifiers_price.split(",")
                    : "";
            modifiers_price_array.forEach(function (modifier_price) {
                modifiers_price = (
                    parseFloat(modifiers_price) + parseFloat(modifier_price)
                ).toFixed(ir_precision);
            });
            parseFloat(
                single_order_element_object
                    .find("#item_modifiers_price_table_" + menu_id)
                    .html()
            ).toFixed(ir_precision);
        }

        let note = single_order_element_object
            .find("#item_note_table_" + menu_id)
            .html();
        let modifiers_id = "";
        if (
            single_order_element_object.find("#item_modifiers_id_table_" + menu_id)
                .length > 0
        ) {
            let comma_seperted_modifiers_id = single_order_element_object
                .find("#item_modifiers_id_table_" + menu_id)
                .html();
            modifiers_id =
                comma_seperted_modifiers_id != ""
                    ? comma_seperted_modifiers_id.split(",")
                    : "";
        }
        let modifiers_price_as_per_item_quantity = (
            parseFloat(modifiers_price) * parseFloat(item_quantity)
        ).toFixed(ir_precision);
        let total_price = (
            parseFloat(item_price_with_discount) +
            parseFloat(modifiers_price_as_per_item_quantity)
        ).toFixed(ir_precision);


        // iterate over each item in the array
        let product_type = 1;
        let product_comb = '';
        let is_promo = '';
        let promo_type = '';
        let string_text = '';
        let discount = 0;
        let get_food_menu_id = 0;
        let qty = 0;
        let get_qty = 0;

        for (let i = 0; i < window.items.length; i++) {
            // look for the entry with a matching `code` value
            if (items[i].item_id == menu_id) {
                product_type = Number(items[i].product_type);
                product_comb = (items[i].product_comb);
                is_promo = (items[i].is_promo);
                promo_type = (items[i].promo_type);
                string_text = (items[i].string_text);
                discount = (items[i].discount);
                get_food_menu_id = (items[i].get_food_menu_id);
                qty = (items[i].qty);
                get_qty = (items[i].get_qty);
            }
        }

        $(".prom_txt").html(string_text);
        promo_type = Number(promo_type);
        if (promo_type == 1 || promo_type == 2) {
            $("#modal_discount").attr("readonly", '');
        }

        $("#modal_item_row").html(row_number);
        $("#modal_item_id").html(menu_id);
        $("#item_name_modal_custom").html(item_name);
        $("#modal_item_price").html(item_price);
        $("#modal_item_price_variable").html(item_price_with_discount);
        $("#modal_item_price_variable_without_discount").html(
            item_price_without_discount
        );

        $("#modal_item_vat_percentage").html(item_vat_percentage);
        $("#modal_discount_amount").html(item_discount_amount);
        $("#item_quantity_modal").val(item_quantity);
        $("#modal_modifiers_unit_price_variable").html(modifiers_price);
        $("#modal_modifier_price_variable").html(
            modifiers_price_as_per_item_quantity
        );
        $("#modal_discount").val(item_discount_input_value);
        $("#modal_item_note").val(note);
        $("#modal_total_price").html(total_price);
        //add modifiers to pop up associated to menu
        let foundItems = search_by_menu_id(menu_id, window.items);

        let originalMenu = foundItems[0].modifiers;
        let modifiers = "";
        for (let key in originalMenu) {
            let selectedOrNot = "unselected";
            let backgroundColor = "";
            if (
                typeof modifiers_id !== "undefined" &&
                modifiers_id.includes(originalMenu[key].menu_modifier_id)
            ) {
                selectedOrNot = "selected";
                //this is dynamic style
                // backgroundColor = 'style="background-color:#B5D6F6;"';
            } else {
                selectedOrNot = "unselected";
                backgroundColor = "";
            }

            /*new_added_zak*/
            let style_content = "";
            let tmp_class = '';
            let tmp_price = originalMenu[key].menu_modifier_price;
            let modifier_ingrs = '';
            let blank_div = "";
            let modifier_full_name = originalMenu[key].menu_modifier_name;
            if (Number(originalMenu[key].type) == 2) {
                style_content = "none";
                tmp_class = "single_modifier";
                modifier_ingrs = get_modifier_ingrs_search_by_menu_modi_id(originalMenu[key].modifier_row_id, window.item_modifier_ingrs);
                let modifier_ingrs_length = Number(modifier_ingrs.length);
                if ((modifier_ingrs_length % 2) != 0) {
                    blank_div = '\n' +
                        '<div class="vr01_modal_class_mod" data-selected="unselected" style="\n' +
                        '    pointer-events: none;\n' +
                        '"></div>';
                }

                for (let key1 in modifier_ingrs) {
                    $(".hidden_mod_cart_" + menu_id + "_" + originalMenu[key].menu_modifier_id).each(function () {
                        let this_value = ($(this).val());
                        if (this_value === originalMenu[key].menu_modifier_id + "_" + (modifier_ingrs[key1].inline_mod_row)) {
                            modifier_full_name = originalMenu[key].menu_modifier_name + "(" + modifier_ingrs[key1].menu_ingr_name + ")";
                        }
                    });
                }

            }

            modifiers +=
                "<div " +
                backgroundColor +
                ' class="btn_new_custom modal_modifiers bg_btn_custom ' + tmp_class + '"  data-type="' + originalMenu[key].type + '"  style="display:' + style_content + '"  data-menu_tax="' +
                originalMenu[key].tax_information +
                '"  data-price="' +
                originalMenu[key].menu_modifier_price +
                '" data-selected="' +
                selectedOrNot +
                '" id="modifier_' +
                originalMenu[key].menu_modifier_id +
                '">';
            modifiers += `<input type="checkbox" ${selectedOrNot === "selected" ? "checked" : "unchecked"
                }/>`;
            modifiers += "<p>" + modifier_full_name + "</p>";
            modifiers +=
                '<span class="modifier_price"> <span>' +
                price_txt +
                ":</span> " +
                originalMenu[key].menu_modifier_price +
                "</span>";
            modifiers += "</div>";

            /*new_added_zak*/
        }

        if (parent_id) {
            foundItems = search_by_menu_id(parent_id, window.items);
            originalMenu = foundItems[0].modifiers;
            modifiers = "";
            for (let key in originalMenu) {
                let selectedOrNot = "unselected";
                let backgroundColor = "";
                if (
                    typeof modifiers_id !== "undefined" &&
                    modifiers_id.includes(originalMenu[key].menu_modifier_id)
                ) {
                    selectedOrNot = "selected";
                    //this is dynamic style
                    // backgroundColor = 'style="background-color:#B5D6F6;"';
                } else {
                    selectedOrNot = "unselected";
                    backgroundColor = "";
                }

                /*new_added_zak*/
                let style_content = "";
                let tmp_class = '';
                let tmp_price = originalMenu[key].menu_modifier_price;
                let modifier_ingrs = '';
                let blank_div = "";
                if (Number(originalMenu[key].type) == 2) {
                    style_content = "none";
                    tmp_class = "single_modifier";
                    modifier_ingrs = get_modifier_ingrs_search_by_menu_modi_id(originalMenu[key].modifier_row_id, window.item_modifier_ingrs);
                    let modifier_ingrs_length = Number(modifier_ingrs.length);
                    if ((modifier_ingrs_length % 2) != 0) {
                        blank_div = '\n' +
                            '<div class="vr01_modal_class_mod" data-selected="unselected" style="\n' +
                            '    pointer-events: none;\n' +
                            '"></div>';
                    }
                }

                modifiers +=
                    "<div " +
                    backgroundColor +
                    ' class="btn_new_custom modal_modifiers bg_btn_custom ' + tmp_class + '"  data-type="' + originalMenu[key].type + '"   style="display:' + style_content + '"  data-menu_tax="' +
                    originalMenu[key].tax_information +
                    '"  data-price="' +
                    originalMenu[key].menu_modifier_price +
                    '" data-selected="' +
                    selectedOrNot +
                    '" id="modifier_' +
                    originalMenu[key].menu_modifier_id +
                    '">';
                modifiers += `<input type="checkbox" ${selectedOrNot === "selected" ? "checked" : "unchecked"
                    }/>`;
                modifiers += "<p>" + originalMenu[key].menu_modifier_name + "</p>";
                modifiers +=
                    '<span class="modifier_price"> <span>' +
                    price_txt +
                    ":</span> " +
                    originalMenu[key].menu_modifier_price +
                    "</span>";
                modifiers += "</div>";
                /*new_added_zak*/
            }
        }
        if (modifiers.length) {
            $(".modifier_div").show();
        } else {
            $(".modifier_div").hide();
        }
        $("#item_modal .section3_new").empty();
        $("#item_modal .section3_new").prepend(modifiers);
        if (Number(check_parent_id)) {
            $("#modifier_" + check_parent_id).attr('data-price', check_parent_price);
            $("#modifier_" + check_parent_id).find('.modifier_price').html("<span>" + price_txt + ":</span> " + check_parent_price);
        }

        let is_self_order = $("#is_self_order").val();
        let modal_item_is_offer = $(this).attr("data-modal_item_is_offer");

        if (is_self_order == "Yes") {
            $("#modal_discount").attr("readonly", '');
        } else {
            $("#modal_discount").removeAttr("readonly");
        }

        //if (modal_item_is_offer == "Yes") {
		if (modal_item_is_offer == "No") {
            $("#modal_discount").attr("readonly", '');
        } else {
            $("#modal_discount").removeAttr("readonly");
        }

        $("#item_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(200);
    });
    $(document).on("click", "#close_item_modal", function (e) {
        reset_on_modal_close_or_add_to_cart();
        $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .removeClass("active")
            .addClass("inActive");
        setTimeout(function () {
            $(".modal").removeClass("inActive");
        }, 1000);
    });




    $(document).on("click", ".pos__modal__close", function () {
        $("#last_future_sale_id").val("");
        $(this).parent().parent().removeClass("active").addClass("inActive");
        setTimeout(function () {
            $(".cus_pos_modal").removeClass("inActive");
        }, 1000);
        $(".pos__modal__overlay").fadeOut(300);
    });

     $(document).on("click", "#register_close", function (e) {
        let pos_21 = Number($("#pos_21").val());
        if (pos_21) {
            let csrf_name_ = $("#csrf_name_").val();
            let csrf_value_ = $("#csrf_value_").val();
            swal(
                {
                    title: warning + "!",
                    text: txt_err_pos_2,
                    confirmButtonColor: "#3c8dbc",
                    confirmButtonText: ok,
                    showCancelButton: true,
                },
                function () {
                    $.ajax({
                        url: base_url + "Sale/closeRegister",
                        method: "POST",
                        data: {
                            csrf_name_: csrf_value_,
                        },
                        success: function (response) {
                            toastr['error']((register_close), '');
                            $("#close_register_button").hide();
                            window.location.href = base_url + "Register/openRegister";
                        },
                        error: function () {
                            alert("error");
                        },
                    });
                }
            );
        } else {
            toastr['error']((menu_not_permit_access + "!"), '');
        }

    });

    $(document).on("click", ".modal_hide_register", function () {
        $("#last_future_sale_id").val("");
        $(this)
            .parent()
            .parent()
            .parent()
            .removeClass("active")
            .addClass("inActive");
        setTimeout(function () {
            $(".cus_pos_modal").removeClass("inActive");
        }, 1000);
        $(".pos__modal__overlay").fadeOut(300);
    });
    
    $(document).on("click", "#go_to_dashboard", function (e) {
        let pos_22 = Number($("#pos_22").val());
        if (pos_22) {
            let ur_role = $("#ur_role").val();
            let status = true;
            if (!checkInternetConnection()) {
                let action_error = $("#action_error").val();
                status = false;
                toastr['error']((action_error), '');
            }
            if (status) {
                if (ur_role == "Admin") {
                    window.location.href = base_url + "Dashboard/dashboard";
                } else {
                    window.location.href = base_url + "Authentication/userProfile";
                }
            }
        } else {
            toastr['error']((menu_not_permit_access + "!"), '');
        }


    });

    // extra my added
    function checkInternetConnection() {
    return navigator.onLine; // returns true if online, false if offline
    }

    $(document).on("click", "#last_ten_sales_button", function (e) {
        $("#show_last_ten_sales_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(200);

        $.ajax({
            url: base_url + "Sale/getLastTenSales",   
            method: "GET",
            dataType: "json",
            success: function (response) {
                let last_10_orders = "";

            $.each(response, function (i, rowData) {
                let table_name = rowData.table_name ? rowData.table_name : "&nbsp;";

                let customer_text;
                if (rowData.customer_id == 1 || !rowData.customer_name) {
                    customer_text = "Walk-in";
                } else {
                    let phone_text_ = rowData.customer_phone ? " (" + rowData.customer_phone + ")" : "";
                    customer_text = rowData.customer_name + phone_text_;
                }


                last_10_orders += `
                <div class="single_last_ten_sale fix" id="last_ten_${rowData.sales_id}" data-selected="unselected">
                    <div class="first_column column fix">${rowData.sale_no}</div>
                    <div class="first_column column fix">${rowData.sale_inv_no}</div>
                    <div class="second_column column fix">${customer_text}</div>
                    <div class="third_column column fix">${rowData.table_name ?? '&nbsp;'}</div>
                </div>`;

            });


                $(".last_ten_sales_holder .hold_list_holder .detail_holder ").empty();
                $(".last_ten_sales_holder .hold_list_holder .detail_holder ").prepend(last_10_orders);
            }
        });
    });

    $(document).on("click", ".single_last_ten_sale", function () {
        //get sale id
        let sale_id = $(this).attr("id").substr(9);

        $(".single_last_ten_sale").css("background-color", "#ffffff");
        $(".single_last_ten_sale").attr("data-selected", "unselected");
        $(this).css("background-color", "#cfcfcf");
        $(this).attr("data-selected", "selected");

        // Direct AJAX call to DB instead of IndexedDB
        $.ajax({
            url: base_url + "Sale/getSaleDetails/" + sale_id, // CI Controller
            type: "GET",
            dataType: "json",
            success: function (response) {
                console.log(response);

                let order_type = "";
                let order_type_id = 0;
                let tables_booked = "";

                $("#last_10_waiter_id").html(response.waiter_id);
                $("#last_10_waiter_name").html(response.waiter_name);
                $("#last_10_customer_id").html(response.customer_id);
                $("#last_10_customer_name").html(response.customer_name);
                $("#last_10_table_id").html(response.table_id);
                $("#last_10_table_name").html(
                    response.table_name && response.table_name.length > 0
                        ? response.table_name
                        : "None"
                );
                $("#open_invoice_date_hidden").val(response.sale_date);

                $(".datepicker_custom")
                    .datepicker({
                        autoclose: true,
                        format: "yyyy-mm-dd",
                        startDate: "0",
                        todayHighlight: true,
                    })
                    .datepicker("update", response.sale_date);

                $(".change_delivery_address").hide();
                $(".del_hide").show();

                if (response.order_type == 1) {
                    order_type = "Dine In";
                    order_type_id = 1;
                } else if (response.order_type == 2) {
                    order_type = "Take Away";
                    order_type_id = 2;
                } else if (response.order_type == 3) {
                    order_type = "Delivery";
                    order_type_id = 3;
                    $(".del_hide").hide();
                }
                $("#last_10_order_type").html(order_type);
                $("#last_10_order_type_id").html(order_type_id);

                // Now DB response always has sale_inv_no
                $("#last_10_order_invoice_no").html(response.sale_inv_no);

                let draw_table_for_last_ten_sales_order = "";

                for (let key in response.items) {
                    let this_item = response.items[key];

                    let discount_value =
                        this_item.menu_discount_value != ""
                            ? (String(this_item.menu_discount_value).includes("%")
                                ? this_item.menu_discount_value
                                : Number(this_item.menu_discount_value).toFixed(ir_precision))
                            : parseFloat(0).toFixed(ir_precision);

                    draw_table_for_last_ten_sales_order += `
                        <div class="single_item_modifier fix" id="last_10_order_for_item_${this_item.food_menu_id}">
                            <div class="first_portion">
                                <div class="single_order_column_hold first_column column fix">
                                    <span>${this_item.menu_name}</span>
                                </div>
                                <div class="single_order_column_hold second_column column fix">
                                    ${currency} ${Number(this_item.menu_unit_price).toFixed(ir_precision)}
                                </div>
                                <div class="single_order_column_hold third_column column fix">
                                    ${this_item.qty}
                                </div>
                                <div class="single_order_column_hold forth_column column fix">
                                    ${discount_value}
                                </div>
                                <div class="single_order_column_hold fifth_column column fix">
                                    ${currency} ${this_item.menu_price_with_discount}
                                </div>
                            </div>
                    `;

                    // Render modifiers if any
                    if (this_item.modifiers && this_item.modifiers.length > 0) {
                        draw_table_for_last_ten_sales_order += `<div class="single_order_column_hold forth_column column fix">`;
                        this_item.modifiers.forEach(mod => {
                            draw_table_for_last_ten_sales_order += `
                                <div class="single_order_column_hold forth_column column fix">
                                    <span> ${mod.modifier_name} (${currency} ${Number(mod.modifier_price).toFixed(ir_precision)})</span>
                                </div>
                            `;
                        });
                        draw_table_for_last_ten_sales_order += `</div>`;
                    }

                    // Render note if exists
                    if (this_item.note && this_item.note.length > 0) {
                        draw_table_for_last_ten_sales_order += `
                            <div class="item_note">Note: <span> ${this_item.note} </span></div>
                        `;
                    }

                    draw_table_for_last_ten_sales_order += `</div>`; // end single_item_modifier
                }

                //add to top
                $(".item_modifier_details .modifier_item_details_holder").empty();
                $(".item_modifier_details .modifier_item_details_holder").prepend(
                    draw_table_for_last_ten_sales_order
                );

                let total_items_in_cart_with_quantity = 0;
                $(
                    ".last_ten_sales_holder .modifier_item_details_holder .single_item_modifier .first_portion .third_column span"
                ).each(function (i, obj) {
                    total_items_in_cart_with_quantity =
                        parseInt(total_items_in_cart_with_quantity) +
                        parseInt($(this).html());
                });
                $("#total_items_in_cart_last_10").html(
                    total_items_in_cart_with_quantity
                );

                $("#sub_total_show_last_10").html(
                    Number(response.sub_total).toFixed(ir_precision)
                );
                $("#sub_total_last_10").html(
                    Number(response.sub_total).toFixed(ir_precision)
                );
                $("#all_items_discount_last_10").html(
                    Number(response.total_discount_amount).toFixed(ir_precision)
                );
                $("#total_payable_last_10").html(
                    Number(response.total_payable).toFixed(ir_precision)
                );
            },
            error: function () {
                alert("Could not load sale details!");
            },
        });
    });

    $("#last_ten_sales_close_button,#last_ten_sales_close_button_cross").on(
        "click",
        function () {
            $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .removeClass("active")
                .addClass("inActive");
            setTimeout(function () {
                $(".modal").removeClass("inActive");
            }, 1000);
            $(".pos__modal__overlay").fadeOut(300);
            reset_last_10_sales_modal();
        }
    );

    //  $(document).on("click", "#last_ten_delete_button", function (e) {
    //     let pos_14 = Number($("#pos_14").val());
    //     if (pos_14) {
    //         if ($(".single_last_ten_sale[data-selected=selected]").length > 0) {
    //             let sale_id = $(".single_last_ten_sale[data-selected=selected]")
    //                 .attr("id")
    //                 .substr(9);
    //             if (role != "Admin") {
    //                 toastr['error']((delete_only_for_admin), '');
    //             } else {
    //                 swal(
    //                     {
    //                         title: warning + "!",
    //                         text: sure_delete_this_order,
    //                         confirmButtonColor: "#3c8dbc",
    //                         confirmButtonText: ok,
    //                         showCancelButton: true,
    //                     },
    //                     function () {
    //                         //delete all information of sale based on sale_id
    //                         delete_from_recent_sales(sale_id);
    //                         $("#last_ten_" + sale_id).remove();
    //                         $(".modifier_item_details_holder").empty();
    //                         $("#last_10_order_type").html("");
    //                         $("#last_10_order_invoice_no").html("");
    //                         $("#last_10_waiter_name").html("");
    //                         $("#last_10_customer_name").html("");
    //                         $("#last_10_table_name").html("");
    //                         $("#total_items_in_cart_last_10").html("0");
    //                         $("#sub_total_show_last_10").html(
    //                             Number(0).toFixed(ir_precision)
    //                         );
    //                         $("#sub_total_discount_last_10").html(
    //                             Number(0).toFixed(ir_precision)
    //                         );
    //                         $("#all_items_discount_last_10").html(
    //                             Number(0).toFixed(ir_precision)
    //                         );
    //                         $("#recent_sale_modal_details_vat").html(
    //                             Number(0).toFixed(ir_precision)
    //                         );
    //                         $("#delivery_charge_last_10").html(
    //                             Number(0).toFixed(ir_precision)
    //                         );
    //                         $("#total_payable_last_10").html(
    //                             Number(0).toFixed(ir_precision)
    //                         );

    //                     }
    //                 );
    //             }
    //         } else {
    //             toastr['error']((please_select_an_order), '');
    //         }
    //     } else {
    //         toastr['error']((menu_not_permit_access + "!"), '');
    //     }

    // });

     $(document).on("click", "#last_ten_print_invoice_button", function (e) {
        $("#print_type").val(1);
        if ($(".single_last_ten_sale[data-selected=selected]").length > 0) {
            let sale_id = $(".single_last_ten_sale[data-selected=selected]")
                .attr("id")
                .substr(9);
            print_invoiceResent1(sale_id);
        } else {
            toastr['error']((please_select_an_order), '');
        }
        console.log($(".single_last_ten_sale[data-selected=selected]"));

    });


    function print_invoiceResent1(sale_id) {
        let newWindow = "";
        let print_type_invoice = $(".print_type_invoice").val();

        if (print_type_invoice == "web_browser_popup") {
            let res = get_all_information_of_recent_sales_from_db_print_invoiceResent1(sale_id).then(function (order_info) {

                // ✅ Line to add for debugging
                console.log("order_info from IndexedDB (web_browser_popup):", order_info);

                // ✅ Safe check before calling
                if (order_info && (order_info.order || order_info.sale_id)) {
                    call_print_invoice1(
                        order_info.order ? order_info.order : order_info,   // use .order if exists, else whole object
                        sale_id,
                        order_info.sale_inv_no,
                        order_info.inv_no,
                        order_info.order_time
                    );
                } else {
                    console.error("Invalid order_info (web_browser_popup):", order_info);
                }
            });
        } else {
            $("#finalize_order_modal").removeClass("active");
            $(".pos__modal__overlay").fadeOut(300);

            let res = get_all_information_of_recent_sales_from_db_print_invoiceResent1(sale_id).then(function (order_info) {

                // ✅ Line to add for debugging
                console.log("order_info from IndexedDB (else branch):", order_info);

                if (checkInternetConnection()) {
                    $.ajax({
                        url: base_url + "Authentication/printSaleByAjax",
                        method: "post",
                        dataType: "json",
                        data: {
                            sale_id: sale_id,
                            data_order: order_info,
                        },
                        success: function (data) {
                            if (data.printer_server_url) {
                                $.ajax({
                                    url: data.printer_server_url + "print_server/irestora_printer_server.php",
                                    method: "post",
                                    dataType: "json",
                                    data: {
                                        content_data: JSON.stringify(data.content_data),
                                        print_type: data.print_type,
                                    },
                                    success: function (data) { },
                                    error: function () { },
                                });
                            }
                        },
                        error: function () { },
                    });
                } else {
                    // ✅ Safe check before calling
                    if (order_info && (order_info.order || order_info.sale_id)) {
                        call_print_invoice1(
                            order_info.order ? order_info.order : order_info,
                            sale_id,
                            order_info.sale_inv_no,
                            order_info.inv_no,
                            order_info.order_time
                        );
                    } else {
                        console.error("Invalid order_info (offline):", order_info);
                    }
                }
            });
        }
    }

    function get_all_information_of_recent_sales_from_db_print_invoiceResent1(sale_id) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: base_url + "Sale/getSaleDetails/" + sale_id,
                method: "GET",
                dataType: "json",
                success: function(response) {
                    if (response && response.sale_id) {
                        // ✅ Build the same structure you need
                        resolve({
                            order: response,
                            sale_inv_no: response.sale_inv_no || null,
                            inv_no: response.sale_no || null
                        });
                    } else {
                        console.error("No valid order found for sale_id:", sale_id, response);
                        resolve(null);
                    }
                },
                error: function(xhr, status, error) {
                    console.error("AJAX error fetching sale details:", error);
                    reject(error);
                }
            });
        });
    }

        
    $(document).on("click", "#print_last_invoice", function (e) {
        let pos_13 = Number($("#pos_13").val());
        if (!pos_13) {
            toastr['error'](menu_not_permit_access + "!", '');
            return;
        }

        $("#print_type").val(1);

        // Fetch last 10 sales
        $.ajax({
            url: base_url + "Sale/getLastTenSales",  
            type: 'GET',
            dataType: 'json',
            success: function(sales) {
                if (sales && sales.length > 0) {
                    // Get the last sale (most recent)
                    let lastSale = sales[0]; // because your query is ordered DESC
                    let sale_id = lastSale.sales_id;

                    // Print invoice
                    print_invoiceResent1(sale_id, 1);
                } else {
                    toastr['error'](txt_err_pos_4, '');
                }
            },
           error: function(xhr, status, error) {
        console.error("AJAX Error:", status, error);
        console.log(xhr.responseText);
        toastr['error']("Failed to fetch last sale!", '');

            }
        });
    });

    $(document).on("click", "#open_hold_sales", function (e) {
        $("#show_sale_hold_modal").addClass("active");
        $(".pos__modal__overlay").fadeIn(200);
        $(".modifier_item_details_holder").empty();
        get_all_hold_sales();
    });


    $(document).on("click", "#delete_all_hold_sales_button", function (e) {
        if ($(".detail_hold_sale_holder .single_hold_sale").length > 0) {
            swal(
                {
                    title: warning + "!",
                    text: are_you_delete_all_hold_sale,
                    confirmButtonColor: "#3c8dbc",
                    confirmButtonText: ok,
                    showCancelButton: true,
                },
                function () {
                    //delete all information of hold based on hold_id
                    $.ajax({
                        url: base_url + "Sale/delete_all_holds_with_information_by_ajax",
                        method: "POST",
                        data: {
                            csrf_irestoraplus: csrf_value_,
                        },
                        success: function (response) {
                            if (response == 1) {
                                $(
                                    ".hold_sale_modal_info_holder .detail_hold_sale_holder .hold_sale_left .detail_holder"
                                ).empty();
                            }

                            $("#hold_waiter_id").html("");
                            $("#hold_waiter_name").html("");
                            $("#hold_customer_id").html("");
                            $("#hold_customer_name").html("");
                            $("#hold_table_id").html("");
                            $("#hold_table_name").html("");
                            $("#hold_order_type").html("");
                            $("#hold_order_type_id").html("");
                            $(
                                ".item_modifier_details .modifier_item_details_holder"
                            ).empty();
                            $("#total_items_in_cart_hold").html("0");
                            $("#sub_total_show_hold").html(Number(0).toFixed(ir_precision));
                            $("#sub_total_hold").html(Number(0).toFixed(ir_precision));
                            $("#total_item_discount_hold").html(
                                Number(0).toFixed(ir_precision)
                            );
                            $("#discounted_sub_total_amount_hold").html(
                                Number(0).toFixed(ir_precision)
                            );
                            $("#sub_total_discount_hold").html("");
                            $("#sub_total_discount_amount_hold").html(
                                Number(0).toFixed(ir_precision)
                            );
                            $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
                            $("#all_items_discount_hold").html(
                                Number(0).toFixed(ir_precision)
                            );
                            $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
                            $("#delivery_charge_hold").html(Number(0).toFixed(ir_precision));
                            $("#tips_amount_hold").html(Number(0).toFixed(ir_precision));
                            $("#total_payable_hold").html(Number(0).toFixed(ir_precision));

                            $("#show_sale_hold_modal").removeClass("active");
                            $(".pos__modal__overlay").fadeOut(300);
                        },
                        error: function () {
                            alert(a_error);
                        },
                    });
                }
            );
        } else {
            toastr['error']((no_hold), '');
        }
    });

     $(document).on("click", "#hold_edit_in_cart_button", function (e) {
        let this_action = $(this);
        let hold_id = $(".single_hold_sale[data-selected=selected]")
            .attr("id")
            .substr(5);
        if ($(".single_hold_sale[data-selected=selected]").length > 0) {
            //get total items in cart
            let total_items_in_cart = $(".order_holder .single_order").length;

            if (total_items_in_cart > 0) {
                swal(
                    {
                        title: warning + "!",
                        text: cart_not_empty,
                        confirmButtonColor: "#3c8dbc",
                        confirmButtonText: ok,
                        showCancelButton: true,
                    },
                    function () {
                        $(".order_holder").empty();
                        clearFooterCartCalculation();
                        get_details_of_a_particular_hold(hold_id, this_action);
                    }
                );
            } else {
                clearFooterCartCalculation();
                get_details_of_a_particular_hold(hold_id, this_action);
            }
        } else {
            toastr['error']((please_select_hold_sale), '');
        }
    });

    $(document).on("click", "#hold_delete_button", function (e) {
        if ($(".single_hold_sale[data-selected=selected]").length > 0) {
            let hold_id = $(".single_hold_sale[data-selected=selected]")
                .attr("id")
                .substr(5);
            swal(
                {
                    title: warning + "!",
                    text: sure_delete_this_hold,
                    confirmButtonColor: "#3c8dbc",
                    confirmButtonText: ok,
                    showCancelButton: true,
                },
                function () {
                    //delete all information of hold based on hold_id
                    $.ajax({
                        url: base_url + "Sale/delete_all_information_of_hold_by_ajax",
                        method: "POST",
                        data: {
                            hold_id: hold_id,
                            csrf_irestoraplus: csrf_value_,
                        },
                        success: function (response) {
                            get_all_hold_sales();
                            $("#hold_waiter_id").html("");
                            $("#hold_waiter_name").html("");
                            $("#hold_customer_id").html("");
                            $("#hold_customer_name").html("");
                            $("#hold_table_id").html("");
                            $("#hold_table_name").html("");
                            $("#hold_order_type").html("");
                            $("#hold_order_type_id").html("");
                            $(
                                ".item_modifier_details .modifier_item_details_holder"
                            ).empty();
                            $("#total_items_in_cart_hold").html("0");
                            $("#sub_total_show_hold").html(Number(0).toFixed(ir_precision));
                            $("#sub_total_hold").html(Number(0).toFixed(ir_precision));
                            $("#total_item_discount_hold").html(
                                Number(0).toFixed(ir_precision)
                            );
                            $("#discounted_sub_total_amount_hold").html(
                                Number(0).toFixed(ir_precision)
                            );
                            $("#sub_total_discount_hold").html("");
                            $("#sub_total_discount_amount_hold").html(
                                Number(0).toFixed(ir_precision)
                            );
                            $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
                            $("#all_items_discount_hold").html(
                                Number(0).toFixed(ir_precision)
                            );
                            $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
                            $("#delivery_charge_hold").html(
                                Number(0).toFixed(ir_precision)
                            );
                            $("#tips_amount_hold").html(
                                Number(0).toFixed(ir_precision)
                            );
                            $("#total_payable_hold").html(Number(0).toFixed(ir_precision));
                            // $('#show_sale_hold_modal').slideUp(333);
                        },
                        error: function () {
                            alert(a_error);
                        },
                    });
                }
            );
        } else {
            toastr['error']((please_select_hold_sale), '');
        }
    });

     $(document).on(
        "click",
        "#hold_sales_close_button,#hold_sales_close_button_cross",
        function (e) {
            $("#hold_waiter_id").html("");
            $("#hold_waiter_name").html("");
            $("#hold_customer_id").html("");
            $("#hold_customer_name").html("");
            $("#hold_table_id").html("");
            $("#hold_table_name").html("");
            $("#hold_order_type").html("");
            $("#hold_order_type_id").html("");

            $(".item_modifier_details .modifier_item_details_holder").empty();
            $("#total_items_in_cart_hold").html("0");
            $("#sub_total_show_hold").html(Number(0).toFixed(ir_precision));
            $("#sub_total_hold").html(Number(0).toFixed(ir_precision));
            $("#total_item_discount_hold").html(Number(0).toFixed(ir_precision));
            $("#discounted_sub_total_amount_hold").html(
                Number(0).toFixed(ir_precision)
            );
            $("#sub_total_discount_hold").html("");
            $("#sub_total_discount_amount_hold").html(
                Number(0).toFixed(ir_precision)
            );
            $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
            $("#all_items_discount_hold").html(Number(0).toFixed(ir_precision));
            $("#all_items_vat_hold").html(Number(0).toFixed(ir_precision));
            $("#delivery_charge_hold").html(Number(0).toFixed(ir_precision));
            $("#tips_amount_hold").html(Number(0).toFixed(ir_precision));
            $("#total_payable_hold").html(Number(0).toFixed(ir_precision));

            $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .removeClass("active")
                .addClass("inActive");
            setTimeout(function () {
                $(".modal").removeClass("inActive");
            }, 1000);
            $(".pos__modal__overlay").fadeOut(300);
        }
    );
    
    function add_hold_by_ajax(order_object, hold_number) {
        $.ajax({
            url: base_url + "Sale/add_hold_by_ajax",
            method: "POST",
            data: {
                order: order_object,
                hold_number: hold_number,
                csrf_irestoraplus: csrf_value_,
            },
            success: function (response) {
                $("#generate_sale_hold_modal").removeClass("active");
                $(".pos__modal__overlay").fadeOut(300);

                $(".order_holder").empty();
                clearFooterCartCalculation();
                $("#hold_generate_input").val("");
                $("#open_invoice_date_hidden").val(getCurrentDate());

                $(".datepicker_custom")
                    .datepicker({
                        autoclose: true,
                        format: "yyyy-mm-dd",
                        startDate: "0",
                        todayHighlight: true,
                    })
                    .datepicker("update", getCurrentDate());

                // $(".main_top").find("button").css("background-color", "#109ec5");
                $(".main_top").find("button").attr("data-selected", "unselected");
                $("#table_button").attr("disabled", false);
                $(".single_table_div[data-table-checked=checked]").attr(
                    "data-table-checked",
                    "unchecked"
                );
                reset_customer_waiter_to_default();
            },
            error: function () {
                alert(a_error);
            },
        });
    }

    function pOrAmount(value) {

        if (value) {
            if (value.indexOf("%") > -1) {
                return value;
            } else {
                let value_tmp = (value.split("%"));
                return Number(value_tmp[0]).toFixed(ir_precision);
            }
        } else {
            return value;
        }
    }

    function get_all_hold_sales() {
        $.ajax({
            url: base_url + "Sale/get_all_holds_ajax",
            method: "GET",
            success: function (response) {
                let orders = JSON.parse(response);

                let held_orders = "";
                for (let key in orders) {
                    let tables_booked = "";
                    if (orders[key].tables_booked.length > 0) {
                        let w = 1;
                        for (let k in orders[key].tables_booked) {
                            let single_table = orders[key].tables_booked[k];
                            if (w == orders[key].tables_booked.length) {
                                tables_booked += single_table.table_name;
                            } else {
                                tables_booked += single_table.table_name + ", ";
                            }
                            w++;
                        }
                    } else {
                        tables_booked = "None";
                    }
                    let phone_text_ = "";
                    if (orders[key].phone) {
                        phone_text_ = " (" + orders[key].phone + ")";
                    }

                    let customer_name =
                        orders[key].customer_name == null || orders[key].customer_name == ""
                            ? "&nbsp;"
                            : orders[key].customer_name;
                    let table_name = tables_booked;
                    held_orders +=
                        '<div class="single_hold_sale fix" id="hold_' +
                        orders[key].id +
                        '" data-selected="unselected">';
                    held_orders +=
                        '<div class="first_column column fix">' +
                        orders[key].hold_no +
                        "</div>";
                    held_orders +=
                        '<div class="second_column column fix">' +
                        customer_name +
                        phone_text_ +
                        "</div>";
                    held_orders +=
                        '<div class="third_column column fix">' + table_name + "</div>";
                    held_orders += "</div>";
                }
                $(".hold_list_holder .detail_holder ").empty();
                $(".hold_list_holder .detail_holder ").prepend(held_orders);
            },
            error: function () {
                alert(a_error);
            },
        });
    }

        $(document).on("click", "#open__menu", function (e) {
        let pos_23 = Number($("#pos_23").val());
        if (pos_23) {
            let status = true;
            if (!checkInternetConnection()) {
                let action_error = $("#action_error").val();
                status = false;
                toastr['error']((action_error), '');
            }
            if (status) {
                $("aside#pos__sidebar").addClass("active");
                $(".pos__modal__overlay").fadeIn(200);
            }
        } else {
            toastr['error']((menu_not_permit_access + "!"), '');
        }
    });

    // Close sidebar menu when clicking outside
    $(document).on("click", function (e) {
        let $sidebar = $("aside#pos__sidebar");
        if ($sidebar.hasClass("active")) {
            if (!$(e.target).closest("aside#pos__sidebar, #open__menu").length) {
                $sidebar.removeClass("active");
                $(".pos__modal__overlay").fadeOut(200);
                // Close all open submenus
                $(".have_sub_menu").removeClass("active");
                $(".have_sub_sub_menu .open-trigger").removeClass("active");
            }
        }
    });
    
    $(document).on("click", "#close_add_customer_modal", function (e) {
        $("#customer_name_modal").css("border", "1px solid #B5D6F6");
        $("#customer_phone_modal").css("border", "1px solid #B5D6F6");
        $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .removeClass("active")
            .addClass("inActive");
        setTimeout(function () {
            $(".modal").removeClass("inActive");
        }, 1000);
        $(".pos__modal__overlay").fadeOut(300);
        reset_on_modal_close_or_add_customer();
    });

    $(".have_sub_menu").on("click", '.open-trigger', function () {
        $(this).parent().toggleClass("active");
    });

    $(".have_sub_sub_menu").on("click", '.open-trigger', function () {
        $(this).toggleClass("active");
    });
	
	$(".scrollbar-macosx").scrollbar();
})(jQuery);