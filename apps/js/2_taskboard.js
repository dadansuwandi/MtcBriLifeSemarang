$(document).ready(function () {
    //alert("test")
    $("#LoaderPageCounting").hide();
    if (getParameterByName("group") == "" || getParameterByName("group") == null) {
        getWS_2_taskboard("0");
        getWS_DataTableTaskboard("0");
    } else {
        getWS_2_taskboard(getParameterByName("group"));
        getWS_DataTableTaskboard(getParameterByName("group"));
    }
    if ($("#TrxLayerUser").val() != "Admin") {
        $("#chat-box-body").hide()
    } else {
        $("#chat-box-body").show()
    }
    GroupAgent()
    ComboFromEmail()
});
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getWS_2_taskboard(GroupAgent) {
    var ValUserID = $("#hd_sessionLogin").val();
    var ValLayerID = $("#TrxLoginTypeAngka").val();
    var result = "";
    var messageDiv = $('#2_TampungKotakAtas');
    var ValSpv = $("#TrxLayerUser").val();
    if ($("#TrxLayerUser").val() == "Admin") {
        var ValLayerID = GroupAgent;
    } else {
        var ValLayerID = $("#TrxLoginTypeAngka").val();
    }
    if ($('#ComboGroupAgent').val() == "") {
        var GroupAgent = getParameterByName("group")
    } else {
        var GroupAgent = $('#ComboGroupAgent').val()
    }
    $.ajax({
        type: "POST",
        url: "asmx/ServiceTaskboard.asmx/ws_2_taskboard",
        data: "{UserID: '" + ValUserID + "',LayerID: '" + ValLayerID + "',Spv: '" + ValSpv + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var json = JSON.parse(data.d);
            var i, x = "";
            messageDiv.empty();
            for (i = 0; i < json.length; i++) {
                //alert(json[i].JumlahData);
                result = '<div class="col-lg-3 col-6"> ' +
                    '<a class="box box-link-shadow text-center" href="2_taskboard.aspx?status=' + json[i].StatusData + '&group=' + GroupAgent +'&mid=' + getParameterByName("mid") + '&smid=' + getParameterByName("smid") + '"> ' +
                    '<div class="box-body"> ' +
                    '<div class="font-size-24">' + json[i].JumlahData + '</div> ' +
                    '<span>' + json[i].StatusData + '</span> ' +
                    '</div> ' +
                    '<div class="box-body ' + json[i].statusColor + '"> ' +
                    '<center> ' +
                    '<span class="mdi ' + json[i].statusIcon + ' font-size-30"></span> ' +
                    '</center> ' +
                    '</div> ' +
                    '</a> ' +
                    '</div>';

                messageDiv.append(result);
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function getWS_DataTableTaskboard(GroupAgent) {
    $("#LoaderPageCounting").show();
    var TrxUserName = $("#hd_sessionLogin").val();
    var TrxLoginTypeAngka = $("#TrxLoginTypeAngka").val();
    var TrxDivisi = $("#TrxDivisi").val();
    var TrxStatus = getParameterByName("status");
    if ($("#TrxLayerUser").val() == "Admin") {
        var TrxDivisi = GroupAgent;
    } else {
        var TrxDivisi = $("#TrxDivisi").val();
    }
    var result = "";
    var myTaskboardTicket = $('#TaskboardTicket').DataTable(
        {
            "order": [[9, "desc"]]
        },
        {
        "processing": true,
        "language": {
            processing: '<i class="spinner-border text-warning"></i><span>Loading...</span> '
        },
        //"serverSide": true,
    });
    $.fn.dataTable.ext.errMode = 'none';
    $.ajax({
        type: "POST",
        //url: "asmx/ServiceTaskboard.asmx/DataTableTaskboard",
        url: "asmx/ServiceTaskboard.asmx/DataTableTaskboardNew",
        data: "{TrxUserName: '" + TrxUserName + "',TrxLoginTypeAngka: '" + TrxLoginTypeAngka + "',TrxDivisi: '" + TrxDivisi + "',TrxStatus: '" + TrxStatus + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var json = JSON.parse(data.d);
            var i, x = "";


            //messageDiv.empty();
            myTaskboardTicket.clear().draw();
            if (json.length == 0) {
                console.log("Data not found " + i);
            } else {
                console.log("2")
                for (i = 0; i < json.length; i++) {
                    if ($("#TrxLayerUser").val() == "Admin" || $("#TrxLayerUser").val() == "layer2") {
                        var urlAction = "<div class='dropdown'>" +
                            "<a data-toggle='dropdown' href='#'><i class='ti-more-alt rotate-90 text-black'></i></a>" +
                            "<div class='dropdown-menu dropdown-menu-right'>" +
                            "<a class='dropdown-item' href='#' onclick=showInternalNote('" + json[i].TicketNumber + "')><i class='fa fa-plus'></i> Internal Note</a>" +
                            "<a class='dropdown-item' href='#' onclick=showReminder('" + json[i].TicketNumber + "')><i class='fa fa-envelope'></i> Email Reminder</a>" +
                            "<div class='dropdown-divider'></div>" +
                            "<a class='dropdown-item' href='1_journey.aspx?ticketid=" + json[i].TicketNumber + "&numberid=0&threadid=0&status=" + json[i].Status + "'><i class='si-arrow-right-circle si'></i> Follow up</a>" +
                            "</div>" +
                            "</div>"
                    } else {
                        var urlAction = "<div class='dropdown'>" +
                            "<a data-toggle='dropdown' href='#'><i class='ti-more-alt rotate-90 text-black'></i></a>" +
                            "<div class='dropdown-menu dropdown-menu-right'>" +
                            "<a class='dropdown-item' href='#' onclick=showInternalNote('" + json[i].TicketNumber + "')><i class='fa fa-plus'></i> Internal Note</a>" +
                            "<div class='dropdown-divider'></div>" +
                            "<a class='dropdown-item' href='1_journey.aspx?ticketid=" + json[i].TicketNumber + "&numberid=0&threadid=0&status=" + json[i].Status + "'><i class='si-arrow-right-circle si'></i> Follow up</a>" +
                            "</div>" +
                            "</div>"
                    }                 

                    var d = new Date(json[i].datecreate);
                    var milisegundos = parseInt(json[i].datecreate.replace("/Date(", "").replace(")/", ""));
                    var newDate = new Date(milisegundos).toLocaleDateString("en-UE");
                    var newTime = new Date(milisegundos).toLocaleTimeString("en-UE");
                    var ConverTanggal = newDate + ' ' + newTime
                    //console.log("1 " + json[i].datecreate)
                    //console.log("TicketNumber : " + json[i].TicketNumber + " Date : " + ConverTanggal)
                    //var ConverTanggal = "2023-12-11"

                    //}
                    //var urlAction = "<a href='1_journey.aspx?ticketid=" + json[i].TicketNumber + "'><i class='si-arrow-right-circle si'></i></a>"
                    if (json[i].Status == "Open") {
                        var TrxParam = "<span class='badge badge-pill badge-primary' style='width: 70px;'>" + json[i].Status + "</span>"
                    } else if (json[i].Status == "Pending") {
                        var TrxParam = "<span class='badge badge-pill badge-warning' style='width: 70px;'>" + json[i].Status + "</span>"
                    } else if (json[i].Status == "Solved") {
                        var TrxParam = "<span class='badge badge-pill badge-success' style='width: 70px;'>" + json[i].Status + "</span>"
                    } else if (json[i].Status == "Closed") {
                        var TrxParam = "<span class='badge badge-pill badge-danger' style='width: 70px;'>" + json[i].Status + "</span>"
                    }
                    if (json[i].TicketPosition == "1") {
                        var TrxPosition = "Layer 1"
                    } else if (json[i].TicketPosition == "2") {
                        var TrxPosition = "Layer 2"
                    } else if (json[i].TicketPosition == "3") {
                        var TrxPosition = "Layer 3"
                    } else if (json[i].TicketPosition == "4") {
                        var TrxPosition = "Eksternal/Vendor"
                    }
                    var DaySLA = json[i].UsedDaySLAOK
                    var OverDaySLA = DaySLA.replace("Over", "");
                    var HoursDaySLA = OverDaySLA.replace("Minute", "");
                    var LaterDaySLA = HoursDaySLA.replace("Later", "");

                    //alert(json[i].SLA)
                    //alert(HoursDaySLA)
                    //var HoursDaySLA = 3
                    if (Number(LaterDaySLA) < json[i].SLA) {
                        var Indikator = "<span class='badge badge-dot badge-lg mr-1' style='background-color: #1bc5bd'></span>";
                        var SatuanJam = "<span class='text-success font-size-13'><strong> (" + json[i].SatuanJam + ")</strong></span>"
                    } else if (Number(LaterDaySLA) == json[i].SLA) {
                        var Indikator = "<span class='badge badge-dot badge-lg mr-1' style='background-color: #faa700'></span>";
                        var SatuanJam = "<span class='text-warning font-size-13'><strong> (" + json[i].SatuanJam + ")</strong></span>"
                    } else if (Number(LaterDaySLA) > json[i].SLA) {
                        var Indikator = "<span class='badge badge-dot badge-lg mr-1' style='background-color: #ff4c52'></span>";
                        var SatuanJam = "<span class='text-danger font-size-13'><strong> (" + json[i].SatuanJam + ")</strong></span>"
                    }
                   
                    myTaskboardTicket.row.add([Indikator, json[i].TicketNumber, json[i].NamePIC, json[i].CategoryName, json[i].SubCategory3Name, json[i].AgentGroupName, json[i].SLA, json[i].UsedDaySLAOK + ('' + SatuanJam +''), TrxPosition, TrxParam, ConverTanggal, urlAction]).draw(false);

                }

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        },
        complete: function () {
            $("#LoaderPageCounting").hide();
        }
    })
}
function encodeData(s) {
    return encodeURIComponent(s).replace(/\-/g, "%2D").replace(/\_/g, "%5F").replace(/\./g, "%2E").replace(/\!/g, "%21").replace(/\~/g, "%7E").replace(/\*/g, "%2A").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
}
function showInternalNote(id) {
    $("#InternalNote").val("");
    $("#ContentPlaceHolder1_TrxTicketID").val(id);
    $("#modal-center").modal('show');
    console.log("session : " + $("#hd_sessionLogin").val());
    console.log("TrxTicketNumber : " + id);
}
function ActionInternalNote() {
    var TrxLoginAngka = $("#TrxLoginTypeAngka").val()
    var TrxInternalNote = CKEDITOR.instances.InternalNote.getData();
    if (TrxInternalNote == "") {
        $.toast({
            heading: 'Hi ' + $("#hd_sessionLogin").val() + '',
            text: 'Please fill in completely, and check again ya...',
            position: 'top-right',
            loaderBg: '#ff6849',
            icon: 'error',
            hideAfter: 3500

        });
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

                var form_data = JSON.stringify({ TrxUserName: $("#hd_sessionLogin").val(), TrxTicketNumber: $("#ContentPlaceHolder1_TrxTicketID").val(), TrxInternalNote: encodeData(TrxInternalNote) });
                console.log("form_data : " + form_data);
                $.ajax({
                    url: "asmx/ServiceTaskboard.asmx/InsertNoteInternal",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    //data: "{ TrxUsername: '" + TrxUsername + "', TrxCustomerID: '" + TrxCustomerID + "',TxtThreadID: '" + TxtThreadID + "',TxtAccount: '" + TxtAccount + "',TrxPelapor: '" + TrxPelapor + "',TrxPelaporEmail: '" + TrxPelaporEmail + "',TrxPelaporPhone: '" + TrxPelaporPhone + "',TrxPelaporAddress: '" + encodeData(TrxPelaporAddress) + "',TrxKejadian: '" + TrxKejadian + "',TrxPenyebab: '" + TrxPenyebab + "',TrxPenerimaPengaduan: '" + TrxPenerimaPengaduan + "',TrxStatusPelapor: '" + TrxStatusPelapor + "',TrxSkalaPrioritas: '" + TrxSkalaPrioritas + "',TrxJenisNasabah: '" + TrxJenisNasabah + "',TrxNomorRekening: '" + TrxNomorRekening + "',TrxSumberInformasi: '" + TrxSumberInformasi + "',TrxCategory: '" + TrxCategory + "',TrxLevel1: '" + TrxLevel1 + "',TrxLevel2: '" + TrxLevel2 + "',TrxLevel3: '" + TrxLevel3 + "',TrxComplaint: '" + encodeData(TrxComplaint) + "',TrxResponse: '" + encodeData(TrxResponse) + "',TrxChannel: '" + TrxChannel + "',TrxStatus: '" + TrxStatus + "',TrxEskalasi: '" + TrxEskalasi + "',TrxSLA: '" + TrxSLA + "',TrxExtendCategory: '" + TrxExtendCategory + "',TrxLayer: '" + TrxLayer + "',TrxThreadID:'" + TxtThreadID + "', TrxGenesysID:'" + TrxGenesysID + "', TxtContactID:'" + TxtContactID + "'}",
                    data: form_data,
                    success: function () {
                        console.log("Function ActionInternalNote : " + form_data)
                        var TrxMessage = 'Your data <b>internal note</b> has been save'
                        AutoValidasiSuccess($("#hd_sessionLogin").val(), TrxMessage);
                        $("#modal-center").modal('hide');
                    },
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        console.log(xmlHttpRequest.responseText);
                        console.log(textStatus);
                        console.log(errorThrown);
                    },
                    complete: function () {

                    }
                });

                swal("save data has been success", {
                    icon: "success",
                });

            } else {
                //swal("Your imaginary file is safe!");
                $("#modal-center").modal('hide');
            }
        });
}
function AutoValidasiWarning(TrxCreatedby, Message) {
    $.toast({
        heading: '<b>Hi agent ' + TrxCreatedby + '</b>',
        text: '' + Message + '',
        position: 'top-left',
        loaderBg: '#ff6849',
        icon: 'warning',
        hideAfter: 3500,
        stack: 6
    });
}
function AutoValidasiSuccess(TrxCreatedby, Message) {
    $.toast({
        heading: '<b>Hi agent ' + TrxCreatedby + '</b>',
        text: '' + Message + '',
        position: 'top-right',
        loaderBg: '#ff6849',
        icon: 'success',
        hideAfter: 3500,
        stack: 6
    });
}
function showReminder(TicketNumber) {
    $("#ComposeESUBJECT").val("#TicketReminder : " + TicketNumber);
    $("#modal-reminder").modal('show');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrmMasterCombo",
        data: "{TrxID:'" + TicketNumber +"', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK83'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, ResultFrom = "";

            for (i = 0; i < json.length; i++) {

                $("#ComposeETO").val(json[i].EMAIL_ADDRESS + ";");

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function ComboFromEmail() {
    if ($("#TrxLayerUser").val() == "Admin") {
        var Code = "UIDESK75"
    } else if ($("#TrxLayerUser").val() == "layer2") {
        var Code = "UIDESK82"
    } else {
        var Code = "UIDESK73"
    }
    var ComboFrom = $('#ComboFrom');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrmMasterCombo",
        data: "{TrxID:'4', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: '" + Code + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, ResultFrom = "";

            for (i = 0; i < json.length; i++) {

                if ($("#TrxLayerUser").val() == "layer2" || $("#TrxLayerUser").val() == "Admin") {
                    ResultFrom = '<option value="' + json[i].incoming_account_name + '">' + json[i].incoming_account_name + '</option>';
                } else {
                    ResultFrom = '<option value="' + json[i].product_campaign + '">' + json[i].product_campaign + '</option>';
                }
                ComboFrom.append(ResultFrom);
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
//* Upload Attachment Compose *//
$('#files').change(function () {
    var filename = $('#files').val();
    if (filename.substring(3, 11) == 'fakepath') {
        filename = filename.substring(12);
    } // For Remove fakepath
    $("label[for='file_name'] b").html(filename);
    $("label[for='file_default']").text('Selected File: ');
    if (filename == "") {
        $("label[for='file_default']").text('No File Choosen');
    }
});
$(document).on("change", "input[name='files']", function (e) {
    $(".hiddenX").show();
    //var valnoWA = "628119970460";//$('#tglKejadian').val();

    $("#LoaderPageCounting").show();

    if ($("#ComboFrom").val() == 'Select' || $("#ComboFrom").val() == '') {
        swal(
            '',
            'From is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }

    if ($("#ComposeETO").val() == '') {
        swal("To is empty");
        $("#LoaderPageCounting").hide();
        return false
    }

    if ($("#ComposeESUBJECT").val() == '') {
        swal("Subject is empty");
        $("#LoaderPageCounting").hide();
        return false
    }

    var TrxBodyCompose = CKEDITOR.instances.Compose_Body.getData()
    if (TrxBodyCompose == '') {
        swal("Body is empty");
        $("#LoaderPageCounting").hide();
        return false
    }

    var files = $(this).prop("files");
    var data = new FormData();

    var request;
    var result;
    var modal = $(this).closest(".modal");
    var itemid = modal.data("itemid");

    for (var i = 0; i < files.length; i++) {

        var filesizing = this.files[0].size / 1024 / 1024
        if (filesizing > 10) {
            swal(
                '',
                'Please upload file less than 2 MB. Thanks!',
                'error'
            ).then(function () {
                $(this).val('');
                return false;
            });
            return false;
        }

        var filename = this.files[0].name
        var fileextension = filename.split('.').pop();
        if (fileextension == "xls" || fileextension == "xlsx" || fileextension == "doc" || fileextension == "docx" || fileextension == "pdf" || fileextension == "png" || fileextension == "PNG" || fileextension == "jpg" || fileextension == "JPG" || fileextension == "jpeg" || fileextension == "gif" || fileextension == "GIF" || fileextension == "bmp" || fileextension == "BMP") {

        } else {
            swal(
                '',
                'File extension not allowed !',
                'error'
            ).then(function () {
                return false;
            });
            return false;
        }

        data.append("id", "617367367613876138");
        data.append("file", files[i]);
        data.append("Username", $("#ContentPlaceHolder1_TrxUserName").val());
        data.append("Emailid", $("#ContentPlaceHolder1_TrxEmailID").val());

        request = $.ajax({

            type: "POST",
            enctype: 'multipart/form-data',
            url: "asmx/TrmMailSystem.asmx/UploadFile",
            data: data,
            // dataType: "json",
            contentType: false,
            processData: false,

        });
        request.done(function (response) {
            $(".hiddenX").hide();
            $("#removeUpload").show();
            // result = response.d;
            $("#txtFileName").val($(response).find("Guid").text() + $(response).find("FileExt").text());
            console.log("Success");
            console.log($(response).find("Guid").text());
            console.log($(response).find("FileExt").text());

            //var TrxMessage = 'Your file has been upload'
            //AutoValidasiSuccess($("#hd_sessionLogin").val(), TrxMessage);
            TrmAttachmentEmailCompose($("#hd_sessionLogin").val());

        });

        request.fail(function (response) {

            console.log(response.responseText);
            //alert(response.responseText);

        });

        request.always(function () {

            data.delete(itemid);
            data.delete(files[i]);

        });

    }
});
function TrmAttachmentEmailCompose(TrxUserName) {
    var FileOutboxHTML = "" + IPSERVER + "/FileEmail/OUTBOX"
    $("#LoaderPageCounting").show();
    $.ajax({
        type: "POST",
        url: "asmx/TrmMailSystem.asmx/UIDESK_TrmMasterDropdown",
        data: "{TrxID: 'UideskIndonesia', TrxEvent: 'TrmAttachmentEmailCompose', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK100'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultComposeBodyAttachment = "";

            $('#Div_Compose_Attachment').empty();
            for (i = 0; i < json.length; i++) {

                if (json[i].FILETYPE == ".doc") {
                    var FileTypes = "word";
                    var ColorDoc = "primary"
                }
                else if (json[i].FILETYPE == ".docx") {
                    var FileTypes = "word";
                    var ColorDoc = "primary"
                }
                else if (json[i].FILETYPE == ".pdf" || json[i].FILETYPE == "pdf") {
                    var FileTypes = "pdf";
                    var ColorDoc = "danger"
                }
                else if (json[i].FILETYPE == ".xls") {
                    var FileTypes = "excel";
                    var ColorDoc = "success"
                }
                else if (json[i].FILETYPE == ".xlsx") {
                    var FileTypes = "excel";
                    var ColorDoc = "success"
                }
                else if (json[i].FILETYPE == ".zip") {
                    var FileTypes = "zip";
                    var ColorDoc = "default"
                }
                else if (json[i].FILETYPE == ".txt") {
                    var FileTypes = "code";
                    var ColorDoc = "default"
                }
                else if (json[i].FILETYPE == ".rar") {
                    var FileTypes = "zip";
                    var ColorDoc = "default"
                }
                else if (json[i].FILETYPE == ".png" || json[i].FILETYPE == "png" || json[i].FILETYPE == ".PNG" || json[i].FILETYPE == "PNG" || json[i].FILETYPE == ".jpg" || json[i].FILETYPE == "jpg" || json[i].FILETYPE == ".JPG" || json[i].FILETYPE == "JPG" || json[i].FILETYPE == ".jpeg" || json[i].FILETYPE == "jpeg" || json[i].FILETYPE == ".JPEG" || json[i].FILETYPE == "JPEG" || json[i].FILETYPE == ".gif" || json[i].FILETYPE == "gif" || json[i].FILETYPE == ".GIF" || json[i].FILETYPE == "GIF" || json[i].FILETYPE == ".BMP" || json[i].FILETYPE == "BMP" || json[i].FILETYPE == "bmp" || json[i].FILETYPE == ".bmp") {
                    var FileTypes = "image";
                    var ColorDoc = "default"
                }
                alert(ColorDoc)
                resultComposeBodyAttachment = '<ul class="mailbox-attachments clearfix">' +
                    '<li>' +
                    '<span class="mailbox-attachment-icon"><i class="fa fa-file-' + FileTypes + '-o text-' + ColorDoc + '"></i></span>' +
                    '<div class="mailbox-attachment-info">' +
                    '<a href="#" class="mailbox-attachment-name"><i class="fa fa-paperclip"></i>' + json[i].FILENAME.substring(0, 10) + '</a>' +
                    '<a href=' + FileOutboxHTML + '/' + json[i].URL + ' target="_blank" class="btn btn-default btn-xs pull-right"><i class="fa fa-cloud-download"></i></a><a href="#" target="_blank" class="btn btn-default btn-xs pull-right" onclick=deleteAttachment(' + json[i].ID + ')><i class="fa fa-trash-o"></i></a>' +
                    '</span>' +
                    '</div>' +
                    '</li>' +
                    '<ul>'
                $('#Div_Compose_Attachment').append(resultComposeBodyAttachment)

            }
            $("#LoaderPageCounting").hide();

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function deleteAttachment(DeleteID) {
    if (DeleteID == '') {
        swal("Attachment is empty");
        return false
    }
    var form_data = JSON.stringify({
        TrxID: DeleteID, TrxUserName: $("#hd_sessionLogin").val()
    });
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                $.ajax({
                    url: "asmx/TrmMailSystem.asmx/DeleteAttachmentEmail",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function () {
                        console.log(form_data)

                        var TrxMessage = 'Your file has been delete'
                        AutoValidasiSuccess($("#hd_sessionLogin").val(), TrxMessage);
                        TrmAttachmentEmailCompose($("#hd_sessionLogin").val());

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
function Compose_ActionButton() {
    if ($("#ComboFrom").val() == 'Select' || $("#ComboFrom").val() == '') {
        swal(
            '',
            'From is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#ComposeETO").val() == '') {
        swal(
            '',
            'To is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    var CompESubject = $('#ComposeESUBJECT').val();
    if (CompESubject == '') {
        swal(
            '',
            'Subject is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    var TrxBodyCompose = CKEDITOR.instances.Compose_Body.getData()
    if (TrxBodyCompose == '') {
        swal(
            '',
            'Body is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    } else {
        var maxlength = "7500"
        if (TrxBodyCompose.length > maxlength) {
            swal(
                '',
                'Character Length is over, Maximum Length 7500 Character',
                'error'
            ).then(function () {
                return false;
            });
            return false;
        }
    }
    var form_data = JSON.stringify({
        TrxUserName: $("#hd_sessionLogin").val(), TrxEmailFrom: $("#ComboFrom").val(), TrxTO: $("#ComposeETO").val(), TrxSubject: $("#ComposeESUBJECT").val(),
        TrxCC: $("#ComposeECC").val(), TrxBody: TrxBodyCompose, TrxDirection: "OUT", TrxType: "compose_email"
    });
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    url: "asmx/TrmMailSystem.asmx/InsertComposeEmail",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {
                        console.log(form_data)

                        var json = JSON.parse(data.d);
                        var i, x = "";
                        var result = "";
                        for (i = 0; i < json.length; i++) {
                            if (json[i].Result == "True") {
                                swal(
                                    '',
                                    'Data has been send',
                                    'success'
                                ).then(function () {
                                    var TrxMessage = 'Your data has been send'
                                    AutoValidasiSuccess($("#hd_sessionLogin").val(), TrxMessage);
                                    $("#ComposeETO").val("");
                                    $("#ComposeESUBJECT").val("");
                                    $("#ComposeECC").val("");
                                    CKEDITOR.instances.Compose_Body.setData("");
                                    window.location = "2_taskboard.aspx";
                                });
                            } else {
                                swal(
                                    '',
                                    'Data has been failed !',
                                    'error'
                                ).then(function () {
                                    var TrxMessage = 'Your send data has been failed !'
                                    AutoValidasiSuccess($("#hd_sessionLogin").val(), TrxMessage);
                                    $("#ComposeETO").val("");
                                    $("#ComposeESUBJECT").val("");
                                    $("#ComposeECC").val("");
                                    CKEDITOR.instances.Compose_Body.setData("");
                                    window.location = "2_taskboard.aspx";
                                });
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
            } else {
                $("#ComposeETO").val("");
                $("#ComposeESUBJECT").val("");
                $("#ComposeECC").val("");
                $("#modal-reminder").modal('hide');
            }
        });
}
function GroupAgent() {
    var ComboGroupAgent = $('#ComboGroupAgent');
    $.ajax({
        type: "POST",
        url: "asmx/ServiceTaskboard.asmx/UIDESK_TrmMasterCombo",
        data: "{TrxID:'0', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK85'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var json = JSON.parse(data.d);
            var i = "", resultGroupAgent = "", ResultComboGroupAgent = "";

            for (i = 0; i < json.length; i++) {

                ResultComboGroupAgent = '<option value="' + json[i].IdGrup + '">' + json[i].NamaGrup + '</option>';
                //resultGroupAgent = '<a class="dropdown-item" href="#" onclick="ActionGroupAgent(' + json[i].IdGrup +')"><span class="badge badge-ring badge-warning mr-1"></span>' + json[i].NamaGrup + '</a>'
                //$('#dropdownmenuagentgroup').append(resultGroupAgent)
                ComboGroupAgent.append(ResultComboGroupAgent);

            }
           

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function FilterGroup() {
    $("#modal-group-agent").modal('show')
}
function SubmitTaskboard() {
    $('#ComboGroupAgent').val()
    getWS_2_taskboard($('#ComboGroupAgent').val());
    getWS_DataTableTaskboard($('#ComboGroupAgent').val());
    $("#modal-group-agent").modal('hide')
    var drop = ""
    drop = '<div id="chat-box-body" onclick="FilterGroup()">' +
        '<div id="chat-circle" class="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70">' +
        '<div id="chat-overlay"></div>' +
        '<span class="mdi mdi-account-settings-variant font-size-30"></span>' +
        '</div>' +
        '</div>'
    $("#chat-box-bodyDrop").append(drop)
}
function CloseTaskboard() {

}