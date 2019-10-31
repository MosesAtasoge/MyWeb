let jsonHistoriKedinasan = document.getElementById("historiKedinasans").title;
let jsonParse = JSON.parse(jsonHistoriKedinasan);

let valueKedinasan = [];
for (var i = 0; i < jsonParse.length; i++) {
	valueKedinasan.push(Object.values(jsonParse[i]));
}

let jsonHistoriInovator = document.getElementById("historiInovators").title;
let parsedJson = JSON.parse(jsonHistoriInovator);

let valueInovator = [];
for (var i = 0; i < parsedJson.length; i++) {
	valueInovator.push(Object.values(parsedJson[i]));
}

var KTDatatablesDataSourceHtml = function() {

	var dataJSONArray_Kedinasan = valueKedinasan;
	var dataJSONArray_Inovator = valueInovator;

	var initTable1 = function() {
		var table = $('#kt_historiKedinasans_table');

		// begin first table
		table.DataTable({
			responsive: true,
			"order": [[3,'desc']],
			data: dataJSONArray_Kedinasan,
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
						columns: [ 0, 1, 2, 5, 6, 7, 8 ]
					}
				},
				'colvis'
			],
		});
	};
	var initTable2 = function() {
		var table = $('#kt_historiInovators_table');

		// begin first table
		table.DataTable({
			responsive: true,
			"order": [[4,'desc']],
			data: dataJSONArray_Inovator,
			columnDefs: [
				{
					// hide columns by index number
					targets: [0],
					visible: false,

				}
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
						columns: [ 0, 1, 2, 5, 6, 7, 8 ]
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
			initTable2();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesDataSourceHtml.init();
});