$(document).ready(function () {
    SelectAUX();
    CheckingLogin();
    LicenseUidesk();
});
function SelectAUX() {
    var cmbAux = $('#cmbAux');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrmMasterCombo",
        data: "{TrxID:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK66'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";
            for (i = 0; i < json.length; i++) {

                result = '<option value="' + json[i].ID + '">' + json[i].Deskripsi + '</option>';
                cmbAux.append(result);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function ActionAux() {    
    if ($("#hd_sessionLogin").val() == "") {
        swal("Username is empty, Please relogin")
        return false;
    }
    if ($("#cmbAux").val() == "" || $("#cmbAux").val() == "Select") {
        swal("Aux reason is empty")
        return false;
    }
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                var form_data = JSON.stringify({ TrxAux: $("#cmbAux").val(), TrxUserName: $("#hd_sessionLogin").val()});
                $.ajax({
                    url: "asmx/TrmAux.asmx/InsertAgentAux",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function () {
                        console.log(form_data)

                        swal("Done", {
                            icon: "success",
                        });

                        $("#cmbAux").val("");

                        window.location.href = "2_taskboard.aspx?idpage=1009&idtable=4815&status=open"

                    },
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        console.log(xmlHttpRequest.responseText);
                        console.log(textStatus);
                        console.log(errorThrown);
                    },
                    complete: function () {

                    }
                });

            }
        });
}
function CheckingLogin() {
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrmMasterCombo",
        data: "{TrxID:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK14'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";
            for (i = 0; i < json.length; i++) {

                $("#Aux_State").append(json[i].DescAUX)

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function LicenseUidesk() {
    var myTable = $('#TrmLicense').DataTable();
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrmMasterCombo",
        data: "{TrxID:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK84'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i = "";

            myTable.clear().draw();
            for (i = 0; i < json.length; i++) {
                if (json[i].UsedLicense == null) {
                    var UsedLicense = "<span class='badge badge-pill badge-danger'>0</span>";
                } else {
                    var UsedLicense = "<span class='badge badge-pill badge-danger'>" + json[i].UsedLicense + "</span>";
                }
                if (json[i].SisaLicense == null) {
                    var SisaLicense = "<span class='badge badge-pill badge-success'>0</span>";
                } else {
                    var SisaLicense = "<span class='badge badge-pill badge-success'>" + json[i].SisaLicense + "</span>";
                }
                if (json[i].NameChannel == "INBOUND") {
                    var ChannelNya = "VOICE CALL"
                }
                myTable.row.add([json[i].NumberNya, json[i].NameChannel, "<span class='badge badge-pill badge-primary'>" + json[i].JumlahLicense + "</span>", UsedLicense, SisaLicense]).draw(false);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}