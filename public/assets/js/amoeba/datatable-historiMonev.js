let jsonHistoriMonev = document.getElementById("historiMonev").title;
let parsedJson = JSON.parse(jsonHistoriMonev);

let values = [];
for (var i = 0; i < parsedJson.length; i++) {
	values.push(Object.values(parsedJson[i]));
}

var KTDatatablesDataSourceHtml = function() {

	var dataJSONArray = values;

	var initTable1 = function() {
		var table = $('#kt_historiMonev_table');

		// begin first table
		table.DataTable({
			responsive: true,
			"order": [[5,'desc']],
			data: dataJSONArray,
			columnDefs: [
				{
					// hide columns by index number
					targets: [0],
					visible: false,

				},
			],
			dom: 'Bfrtip',
			buttons: [
				{
					extend: 'copyHtml5',
					exportOptions: {
						columns: [ 0, ':visible' ]
					}
				},
				{
					extend: 'excelHtml5',
					exportOptions: {
						columns: ':visible'
					}
				},
				{
					extend: 'pdfHtml5',
					exportOptions: {
						columns: [ 0, 1, 2, 3, 4 ]
					}
				},
				'colvis'
			],
		});
	};

	return {

		//main function to initiate the module
		init: function() {
			initTable1();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesDataSourceHtml.init();
});