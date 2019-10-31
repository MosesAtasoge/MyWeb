let csrfToken = document.getElementById("token").value;

let jsonTalent = document.getElementById("talents").title;
let parsedJson = JSON.parse(jsonTalent);

let values = [];
for (var i = 0; i < parsedJson.length; i++) {
	values.push(Object.values(parsedJson[i]));
}

var KTDatatablesDataSourceHtml = function() {

	var dataJSONArray = values;

	var initTable1 = function() {
		var table = $('#kt_talent_table');

		// begin first table
		table.DataTable({
			responsive: true,
			data: dataJSONArray,
			columnDefs: [
				{
					// hide columns by index number
					targets: [0],
					visible: false,

				},
				// {
				// 	targets: -1,
				// 	title: 'Actions',
				// 	orderable: false,
				// 	render: function(data, type, row) {
				// 		return `
                //         <a href="/talent/profile-talent/` + row[0] + `" class="btn btn-sm btn-clean btn-icon btn-icon-md center" title="View">
                //           <i class="la la-eye"></i>
				// 		</a>
				// 		`;
				// 	},
				// },
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