$(document).ready(function () {
    TrmTabelTransaction();
});
//function TrmTabelTransaction() {
//	//alert(sessionStorage.getItem('user'));
//	$(".usr1").text(sessionStorage.getItem("user"));

//	$("#btnlogout").click(function (e) {
//		e.preventDefault();
//		sessionStorage.removeItem("user");
//		window.open("login.html", "_parent");
//	});

//	$("#menuproduct").click(function (e) {
//		e.preventDefault();
//		window.open("product.html", "_parent");
//	});
//	$("#menuclient").click(function (e) {
//		e.preventDefault();
//		window.open("client.html", "_parent");
//	});
//	$("#menutransaction").click(function (e) {
//		e.preventDefault();
//		window.open("transaction.html", "_parent");
//	});

//	let url = new URL(window.location.href)
//	//url = "http://127.0.0.1:9009/api/v1/list/qm-transactions?user=00296259&level=QA&status=Pending Approved";
//	//url =  "http://192.168.37.27:9009/api/v1/list/qm-transaction?user=00296259&level=QA&status=Pending Approved";
//	//url =  "http://103.66.46.141:9009/api/v1/list/call-log";
//	//url =  "http://127.0.0.1:9009/api/v1/list/call-log";
//	//url =  "http://127.0.0.1:9009/api/v1/list/call-logs";
//	url = "http://10.28.2.223:9009/api/v1/list/email/inbox";
//	//url = "http://127.0.0.1:9009/api/v1/list/email/outbox";
//	console.log(url)
//	$.fn.dataTable.ext.errMode = 'none';
//	$('#myTable').DataTable({
//		fixedHeader: true,
//		autoWidth: true,
//		serverSide: true,
//		deferRender: true,
//		bSortClasses: false,
//		sDom: 'r<"H"lf><"datatable-scroll"t><"F"ip>',
//		pageLength: 10,
//		processing: true, ajax: {},
//		bJQueryUI: true,
//		sPaginationType: "full_numbers",
//		language: {
//			processing: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i><span>Loading...</span> '
//		},
//		ajax: {
//			method: "POST",
//			url: url,
//			beforeSend: function (xhr) {
//				xhr.setRequestHeader("Authorization",
//					"Basic " + btoa("Uidesk123:Uidesk123"));
//				//"Basic VWlkZXNrMTIzOlVpZGVzazEyMw==");
//			},
//			data: function (data) {
//				console.log(data);
//				data.order[0].dir = data.order[0].dir.toUpperCase();
//				return data;
//			}
//		},
//		columns: [
//			{
//				data: null,
//				render: function (data, type, row, meta) {
//					return meta.row + meta.settings._iDisplayStart + 1;
//				}
//			},
//			{ data: "EMAIL_ID" },
//			{ data: "DIRECTION" },
//			{ data: "EFROM" },
//			{ data: "ETO" },
//			{ data: "ECC" },
//			{ data: "SUBJECT" },
//			{
//				data: "FLAG_HANDLING",
//				render: function (data, type, row) {
//					if (data == "0") {
//						return "<span class=\"label label-inverse\">Finish</span>";
//					} else if (data == "1") {
//						return "<span class=\"label label-light-danger\">Approved</span>";
//					} else {
//						return data;
//					}
//				},
//				className: 'text-center'
//			},
//		],
//		columnDefs: [
//			{ targets: "_all", orderable: false, className: "text-nowrap" },
//		]
//	});
//}
function TrmTabelTransaction() {
    let url = new URL(window.location.href)
    url = "http://10.28.2.223:9009/api/v1/list/email/inbox";
    console.log(url)
    $.fn.dataTable.ext.errMode = 'none';
    $('#TrmTableHistoryNewX').DataTable({
        fixedHeader: true,
        autoWidth: true,
        serverSide: true,
        deferRender: true,
        bSortClasses: false,
        sDom: 'r<"H"lf><"datatable-scroll"t><"F"ip>',
        pageLength: 10,
        processing: true, ajax: {},
        bJQueryUI: true,
        sPaginationType: "full_numbers",
        language: {
            processing: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i><span>Loading...</span> '
        },
        ajax: {
            method: "POST",
            url: url,
            crossDomain: true,
            data: function (data) {
                console.log(data);
                data.order[0].dir = data.order[0].dir.toUpperCase();
                return data;
            }
        },
        columns: [
            {
                data: null,
                render: function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                }
            },
            { data: "account" },
            { data: "EFROM" },
            { data: "ESUBJECT" },
            { data: "NAME" },
            { data: "Email_Date" },
            { data: "DIRECTION" },
            {
                data: "FLAG_HANDLING",
                render: function (data, type, row) {
                    if (data == "0") {
                        return "<span class=\"label label-inverse\">Finish</span>";
                    } else if (data == "1") {
                        return "<span class=\"label label-light-danger\">Approved</span>";
                    } else {
                        return data;
                    }
                },
                className: 'text-center'
            },
        ],
        columnDefs: [
            { targets: "_all", orderable: false, className: "text-normal" },
        ]
    });
}