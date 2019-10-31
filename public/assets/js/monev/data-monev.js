let csrfToken = document.getElementById("token").value;

let jsonMonev = document.getElementById("monevs").title;
let parsedJson = JSON.parse(jsonMonev);

let values = [];
for (var i = 0; i < parsedJson.length; i++) {
	values.push(Object.values(parsedJson[i]));
}

var KTDatatablesDataSourceHtml = function() {

	var dataJSONArray = values;

	var initTable1 = function() {
		var table = $('#kt_data_monev');

		// begin first table
		table.DataTable({
			responsive: true,
            data: dataJSONArray,
            pageLength: 5,
			columnDefs: [
				{
					// hide columns by index number
					targets: [0],
					visible: false,

				},
				{
					targets: -1,
					title: 'Actions',
					orderable: false,
					render: function(data, type, row) {
						return `
                        <a href="/monev/edit-last-monev/` + row[0] + `" class="btn btn-sm btn-clean btn-icon btn-icon-md center" title="Edit">
                          <i class="la la-edit"></i>
						</a>
						<form action="/monev/delete-last-monev/` + row[0] + `" method="POST" onsubmit="return confirm('Are you sure you want to delete?')">
						<input type="hidden" value="` + csrfToken + `" name="_csrf" id="csrfToken">
						<button type="submit" class="btn btn-sm btn-clean btn-icon btn-icon-md center" title="Delete">
                          <i class="la la-trash"></i>
						</button>
						</form>`;
					},
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