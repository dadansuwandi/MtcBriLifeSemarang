$(document).ready(function () {
    $("#LoaderPage").hide();
});
function Add() {
    ClearText()
    $("#SaveUpdate").hide();
    $("#SaveProvider").show();
    $("#modal-provider").modal('show');
}
function Edit(ID) { 
    $("#SaveProvider").hide();
    $("#SaveUpdate").show();
    $("#modal-provider").modal('show');
    $("#ContentPlaceHolder1_TrxID").val(ID)
    ProviderValue();
}
function ActionInsertProvider() {
    if ($("#Provider_Name").val() == "") {
        swal(
            '',
            'Provider Name is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Provider_Type").val() == "") {
        swal(
            '',
            'Provider Type is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Provider_Provinsi").val() == "") {
        swal(
            '',
            'Province is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Provider_Kota").val() == "") {
        swal(
            '',
            'City is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    var Alamat = CKEDITOR.instances.Provider_Alamat.getData();
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                var form_data = JSON.stringify({
                    ID: "0", Name: $("#Provider_Name").val(), Type: $("#Provider_Type").val(), Province: $("#Provider_Provinsi").val(),
                    City: $("#Provider_Kota").val(), Alamat: Alamat, UserName: $("#hd_sessionLogin").val(), Action: "INSERT"
                });
                $.ajax({
                    url: "asmx/Provider.asmx/ProviderTransaction",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {

                        var json = JSON.parse(data.d);
                        var i = "";
                        for (i = 0; i < json.length; i++) {
                            if (json[i].Result == "True") {
                                swal(
                                    '',
                                    'Insert Data Has Been Success',
                                    'success'
                                ).then(function () {
                                    $("#modal-provider").modal('hide');
                                    window.location.href = "TrmProvider.aspx?"
                                });
                            } else {
                                swal(
                                    '',
                                    'Insert Data Has Been Failed',
                                    'error'
                                ).then(function () {
                                    return false;
                                });
                                return false;
                            }
                        }

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
        })
}
function ActionUpdateProvider() {
    if ($("#ContentPlaceHolder1_TrxID").val() == "") {
        swal(
            '',
            'Data Provider is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
   
    var Alamat = CKEDITOR.instances.Provider_Alamat.getData();
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                var form_data = JSON.stringify({
                    ID: $("#ContentPlaceHolder1_TrxID").val(), Name: $("#Provider_Name").val(), Type: $("#Provider_Type").val(), Province: $("#Provider_Provinsi").val(),
                    City: $("#Provider_Kota").val(), Alamat: Alamat, UserName: $("#hd_sessionLogin").val(), Action: "UPDATE"
                });
                $.ajax({
                    url: "asmx/Provider.asmx/ProviderTransaction",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {

                        var json = JSON.parse(data.d);
                        var i = "";
                        for (i = 0; i < json.length; i++) {
                            if (json[i].Result == "True") {
                                swal(
                                    '',
                                    'Update Data Has Been Success',
                                    'success'
                                ).then(function () {
                                    $("#modal-provider").modal('hide');
                                    window.location.href = "TrmProvider.aspx?"
                                });
                            } else {
                                swal(
                                    '',
                                    'Update Data Has Been Failed !',
                                    'error'
                                ).then(function () {
                                    return false;
                                });
                                return false;
                            }
                        }

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
        })
}
function ProviderValue() {
    $.ajax({
        type: "POST",
        url: "asmx/Provider.asmx/UIDESK_TrmMasterCombo",
        data: "{TrxID:'" + $("#ContentPlaceHolder1_TrxID").val() + "', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction:'UIDESK87'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var json = JSON.parse(data.d);
            var i, x;

            for (i = 0; i < json.length; i++) {

                $("#Provider_Name").val(json[i].Provider);
                //$("#Provider_Type").val(json[i].JenisProvider);
                $('#Provider_Type option:selected').text(json[i].JenisProvider);
                $("#Provider_Provinsi").val(json[i].Provinsi);
                $("#Provider_Kota").val(json[i].Kota);
                CKEDITOR.instances.Provider_Alamat.setData(json[i].Alamat)

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function ClearText() {
    $("#Provider_Name").val("")
    $("#Provider_Type").val("")
    $("#Provider_Provinsi").val("");
    $("#Provider_Kota").val("");
    CKEDITOR.instances.Provider_Alamat.setData("")
}
