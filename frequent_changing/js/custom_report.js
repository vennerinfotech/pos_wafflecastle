let jqry = $.noConflict();

function sumColumns(api, columns = []) {
  columns.forEach(columnIndex => {
      var total = api
          .column(columnIndex, { page: 'current' })
          .data()
          .reduce(function (a, b) {
              var intValue = parseFloat(b) || 0;
              return a + intValue;
          }, 0);
      $(api.column(columnIndex).footer()).html(total.toFixed(2));
  });
}

jqry(document).ready(function () {
  "use strict";

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;

  let datatable_name = $(".datatable_name").attr("data-id_name");
  let title = $(".datatable_name").attr("data-title");
  let sum_columns_data = $(".datatable_name").data("sumcolumns") || [];
  let TITLE = title + "" +
    "" + today;
  jqry(`#${datatable_name},#datatable2`).DataTable({
    autoWidth: false,
    ordering: true,
    order: [[0, "desc"]],
    dom: '<"top-left-item col-sm-12 col-md-6"lf> <"top-right-item col-sm-12 col-md-6"B> t <"bottom-left-item col-sm-12 col-md-6 "i><"bottom-right-item col-sm-12 col-md-6 "p>',
    buttons: [
      {
        extend: "print",
        title: TITLE,
        text: '<i class="fa fa-print"></i> Print',
        titleAttr: "print",
      },
      {
        extend: "copyHtml5",
        title: TITLE,
        text: '<i class="fa fa-files-o"></i> Copy',
        titleAttr: "Copy",
      },
      {
        extend: "excelHtml5",
        title: TITLE,
        text: '<i class="fa fa-file-excel-o"></i> Excel',
        titleAttr: "Excel",
      },
      {
        extend: "csvHtml5",
        title: TITLE,
        text: '<i class="fa fa-file-text-o"></i> CSV',
        titleAttr: "CSV",
      },
      {
        extend: "pdfHtml5",
        title: TITLE,
        text: '<i class="fa fa-file-pdf-o"></i> PDF',
        titleAttr: "PDF",
      },
    ],
    language: {
      paginate: {
        previous: "Previous",
        next: "Next",
      },
    },
    footerCallback: function () {
      var api = this.api();
      if (Array.isArray(sum_columns_data) && sum_columns_data.length > 0) {
        if (api.rows({ page: 'current' }).count() > 0) {
          sumColumns(api, sum_columns_data);
        }
      }
    }
  });
});
