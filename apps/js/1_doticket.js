$(document).ready(function () {
    $("#LoaderChannel").hide();
    TrxAttachmentTicket($("#hd_sessionLogin").val());

    $("#Ticket_Layer").css("display", "none")
    var ParameterPage = getParameterByName("n")
    var ParameterAccount = getParameterByName("account")
    if (ParameterPage != "4") {

    } else {
        var displayShortCut = ""
        displayShortCut = '<div id="chat-box-body" onclick="modalAPI()">' +
            '<div id="chat-circle" class="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70">' +
            '<div id="chat-overlay"></div>' +
            '<span class="mdi mdi-lan-connect font-size-30"></span>' +
            '</div>' +
            '</div>'
        $("#chat-box-body").append(displayShortCut)
    }
    if (ParameterAccount != "") {
        ValidasiDataCustomer(ParameterAccount)
    }
    getWS_MasterLoad();

    $('#Ticket_AgentName').prop('disabled', true);
    $("#Ticket_SearchCustomer").on("input", function () {
        var jumlahString = $(this).val().length;
        if (jumlahString >= 4) {
            UIDESK_TrmCustomer($(this).val());
        }
    });

    $('#basic_checkbox_2').click(function () {
        if ($("#Ticket_FullName").val() == "") {
            swal(
                '',
                'Data Peserta is empty',
                'info'
            ).then(function () {
                return false;
            });
            return false;
        } else {
            if (!$(this).is(':checked')) {
                $("#Reported_Name").val("");
                $("#Reported_Email").val("");
                $("#Reported_Phone").val("");
                $("#Reported_Address").val("");
            } else {
                $("#Reported_Name").val($("#Ticket_FullName").val());
                $("#Reported_Phone").val($("#Ticket_Phone").val());
                $("#Reported_Email").val($("#Ticket_Email").val());
                $("#Reported_Address").val($("#Ticket_Address").val());
            }        
        }      
    });

    $('#basic_checkbox_3').click(function () {
        if ($("#Ticket_Nama_Provider").val() == "") {
            swal(
                '',
                'Provider Name is empty',
                'info'
            ).then(function () {
                return false;
            });
            return false;
        } else {
            if (!$(this).is(':checked')) {
                $("#Reported_Name").val("");
                $("#Reported_Email").val("");
                $("#Reported_Phone").val("");
                CKEDITOR.instances.Reported_Address.setData("")
            } else {
                $("#Reported_Name").val($("#Ticket_Nama_Provider").val());
            }
        }    
    });

    $('#basic_checkbox_1').click(function () {
        if ($(this).is(':checked')) {
            alert($('#basic_checkbox_1').val());
        } else {
            alert("unchecked")
        }
    });

    var table = $('#Ticket_DataTableHistory').DataTable();
    $('#Ticket_DataTableHistory tbody').on('click', 'tr', function () {
        var data = table.row(this).data();
        getWS_DataTicket(data[0]);
        console.log(data[0]);
    });

    var ParameterNumberID = getParameterByName("numberid")
    if (ParameterNumberID != "") {
        selectedThread();
        SelectInstanNote();
    }
    $("#HeaderFilter").append("Filter Value")
    $("#ButtonSaveDataProfile").css("display", "none")
    $("#API_ContactReported").val(ParameterAccount);

    var date = new Date();
    var dateStr =
        date.getFullYear() + "-" +
        ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
        ("00" + date.getDate()).slice(-2) + " " +
        ("00" + date.getHours()).slice(-2) + ":" +
        ("00" + date.getMinutes()).slice(-2)
    //("00" + date.getSeconds()).slice(-2);

    $("#Ticket_DateofTransaction").val(dateStr);

    $("#FilterProvider").hide();

    $("#Ticket_SearchProvider").on("input", function () {
        var jumlahStringProvider = $(this).val().length;
        if (jumlahStringProvider >= 4) {
            UIDESK_TrmCustomerProvider($(this).val());
        }
    });

    $("#Ticket_ReasonCall").attr("disabled", true);
    $("#BintangProviderName").hide();
    $("#BintangClaimNumber").hide();
    $("#BintangReasonCall").hide();

    $("#dialcall").hide()
});
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function encodeData(s) {
    return encodeURIComponent(s).replace(/\-/g, "%2D").replace(/\_/g, "%5F").replace(/\./g, "%2E").replace(/\!/g, "%21").replace(/\~/g, "%7E").replace(/\*/g, "%2A").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
}
//$(function () {
//    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
//        preventSubmit: false,
//        submitSuccess: function ($form, event) {
//            event.preventDefault();

//            //GET DATA
//            var TrxUsername = $("#hd_sessionLogin").val();
//            var TrxCustomerID = $("#hd_customerID").val();
//            //var TrxGenesysID = $("#hd_OtherSystem").val();
//            //var TxtThreadID = $("#hd_ThreadSystem").val();
//            var TrxGenesysID = getParameterByName("numberid");
//            var TxtThreadID = getParameterByName("threadid");
//            var TxtAccount = $("#Reported_Channel_Contact").val();
//            var TxtContactID = $("#hd_AccountContactUser").val();
//            var TrxPelapor = $("#Reported_Name").val();
//            var TrxPelaporEmail = $("#Reported_Email").val();
//            var TrxPelaporPhone = $("#Reported_Phone").val();
//            var TrxPelaporAddress = $("#Reported_Address").val();
//            var TrxKejadian = $("#Ticket_DateofTransaction").val();
//            var TrxPenyebab = $("#Ticket_ProductType").val("27");
//            var TrxProductName = $("#Ticket_Nama_Provider").val();
//            var TrxPenerimaPengaduan = $("#Ticket_AgentName").val();
//            var TrxStatusPelapor = $("#Ticket_UserStatus").val("5");
//            var TrxSkalaPrioritas = $("#Ticket_Priority").val();
//            var TrxJenisNasabah = $("#Ticket_UserCategory").val();
//            var TrxNomorRekening = $("#Ticket_BankAccount").val();
//            var TrxSumberInformasi = $("#Ticket_SourceChannel").val();
//            var TrxCategory = $("#Ticket_Category").val();
//            var TrxLevel1 = $("#Ticket_Enquiry").val();
//            var TrxLevel2 = $("#Ticket_EnquiryDetail").val();
//            var TrxLevel3 = $("#Ticket_EnquiryReason").val();
//            //if(document.getElementById("Description_Pre").innerHTML =""){
//            //var TrxConvertComplaint = $("#Ticket_Complaints").val();
//            //TrxConvertComplaint = TrxConvertComplaint.replace(/\r?\n/g, '<br>');
//            var TrxConvertComplaint = CKEDITOR.instances.Ticket_Complaints.getData();
//            var TrxConvertResponse = CKEDITOR.instances.Ticket_NoteAgent.getData();
//            //var TrxConvertResponse = $("#Ticket_NoteAgent").val();
//            //TrxConvertResponse = TrxConvertResponse.replace(/\r?\n/g, '<br>');
//            //var TrxComplaint = $("#Ticket_Complaints").val();
//            //TrxComplaint = TrxComplaint.replace(/\r?\n/g, '<br />');
//            //var TrxResponse = $("#Ticket_NoteAgent").val();
//            //TrxResponse = TrxResponse.replace(/\r?\n/g, '<br />');
//            var TrxChannel = $("#Ticket_SourceChannel").val();
//            var TrxStatus = $("#Ticket_Status").val();
//            var TrxEskalasi = $("#Ticket_Escalation").val();
//            var TrxSLA = $("#hd_SLA").val();
//            //var TrxSLA = $("#hd_SLA").val();
//            //var TrxLayer = $("#Ticket_EscalationLayer").val();
//            if ($("#Ticket_EscalationLayer").val() == "Yes") {
//                var TrxLayer = $("#ContentPlaceHolder1_hd_Layer").val();
//            } else {
//                var TrxLayer = "1";
//            }
//            var TrxExtendCategory = "0";
//            var TrxIDchannel = getParameterByName("channel");
//            if (TrxUsername == "") {
//                $.toast({
//                    heading: '<b>Session is empty</b>',
//                    text: "<b>Your session is empty</b> </br> Please relogin",
//                    position: 'top-right',
//                    loaderBg: '#ff6849',
//                    icon: 'warning',
//                    hideAfter: 3500,
//                    stack: 6
//                });
//                return false;
//            }
//            if (TrxConvertResponse == "") {
//                $.toast({
//                    heading: '<b>Hi agent ' + $("#hd_sessionLogin").val() + '</b>',
//                    text: "<b>Note Agent is empty</b></br> Please input your note",
//                    position: 'top-right',
//                    loaderBg: '#ff6849',
//                    icon: 'warning',
//                    hideAfter: 3500,
//                    stack: 6
//                });
//                return false;
//            }
//            if (TrxCustomerID == "") {
//                if ($("#ComboFilter").val() != "Select" || $("#ComboFilter").val() != "") {
//                    if ($("#API_FilterValue").val() != "" || $("#API_FilterValue").val() != null) {
//                        swal("Please Sycronise Data Profile API")
//                        return false;
//                    } else {
//                        $.toast({
//                            heading: '<b>Hi agent ' + $("#hd_sessionLogin").val() + '</b>',
//                            text: "<b>Customer is empty</b> </br> Please select customer",
//                            position: 'top-right',
//                            loaderBg: '#ff6849',
//                            icon: 'warning',
//                            hideAfter: 3500,
//                            stack: 6
//                        });
//                        return false;
//                    }
//                } else {
//                    $.toast({
//                        heading: '<b>Hi agent ' + $("#hd_sessionLogin").val() + '</b>',
//                        text: "<b>Customer is empty</b> </br> Please select customer",
//                        position: 'top-right',
//                        loaderBg: '#ff6849',
//                        icon: 'warning',
//                        hideAfter: 3500,
//                        stack: 6
//                    });
//                    return false;
//                }
//            }

//            console.log("TrxIDchannel : " + TrxIDchannel)
//            console.log("TxtThreadID : " + TxtThreadID)
//            console.log("TrxGenesysID : " + TrxGenesysID)

//            //$this = $('#Ticket_SaveData');
//            //$this.prop('disabled', true);

//            event.preventDefault(); // Function sweat alert
//            var form = document.forms["myForm"]; // Function sweat alert
//            swal({
//                title: "Do you want to process?",
//                //text: "Once deleted, you will not be able to recover this imaginary file!",
//                icon: "warning",
//                buttons: true,
//                dangerMode: true,
//            })
//                .then((willDelete) => {
//                    if (willDelete) {

//                        var form_data = JSON.stringify({ TrxUsername: TrxUsername, TrxCustomerID: TrxCustomerID, TxtAccount: TxtAccount, TrxPelapor: encodeData(TrxPelapor), TrxPelaporEmail: TrxPelaporEmail, TrxPelaporPhone: TrxPelaporPhone, TrxPelaporAddress: encodeData(TrxPelaporAddress), TrxKejadian: TrxKejadian, TrxPenyebab: TrxPenyebab, TrxPenerimaPengaduan: TrxPenerimaPengaduan, TrxStatusPelapor: TrxStatusPelapor, TrxSkalaPrioritas: TrxSkalaPrioritas, TrxJenisNasabah: TrxJenisNasabah, TrxNomorRekening: TrxNomorRekening, TrxSumberInformasi: TrxSumberInformasi, TrxCategory: TrxCategory, TrxLevel1: TrxLevel1, TrxLevel2: TrxLevel2, TrxLevel3: TrxLevel3, TrxComplaint: encodeData(TrxConvertComplaint), TrxResponse: encodeData(TrxConvertResponse), TrxChannel: TrxChannel, TrxStatus: TrxStatus, TrxEskalasi: TrxEskalasi, TrxSLA: TrxSLA, TrxExtendCategory: TrxExtendCategory, TrxLayer: TrxLayer, TrxThreadID: TxtThreadID, TxtThreadID: TxtThreadID, TrxGenesysID: TrxGenesysID, TxtContactID: TxtContactID, TrxIDchannel: TrxIDchannel, TrxProductName: TrxProductName });
//                        $.ajax({
//                            url: "WebServiceTransaction.asmx/Insert_TransactionTicket",
//                            method: "POST",
//                            contentType: "application/json; charset=utf-8",
//                            dataType: "json",
//                            //data: "{ TrxUsername: '" + TrxUsername + "', TrxCustomerID: '" + TrxCustomerID + "',TxtThreadID: '" + TxtThreadID + "',TxtAccount: '" + TxtAccount + "',TrxPelapor: '" + TrxPelapor + "',TrxPelaporEmail: '" + TrxPelaporEmail + "',TrxPelaporPhone: '" + TrxPelaporPhone + "',TrxPelaporAddress: '" + encodeData(TrxPelaporAddress) + "',TrxKejadian: '" + TrxKejadian + "',TrxPenyebab: '" + TrxPenyebab + "',TrxPenerimaPengaduan: '" + TrxPenerimaPengaduan + "',TrxStatusPelapor: '" + TrxStatusPelapor + "',TrxSkalaPrioritas: '" + TrxSkalaPrioritas + "',TrxJenisNasabah: '" + TrxJenisNasabah + "',TrxNomorRekening: '" + TrxNomorRekening + "',TrxSumberInformasi: '" + TrxSumberInformasi + "',TrxCategory: '" + TrxCategory + "',TrxLevel1: '" + TrxLevel1 + "',TrxLevel2: '" + TrxLevel2 + "',TrxLevel3: '" + TrxLevel3 + "',TrxComplaint: '" + encodeData(TrxComplaint) + "',TrxResponse: '" + encodeData(TrxResponse) + "',TrxChannel: '" + TrxChannel + "',TrxStatus: '" + TrxStatus + "',TrxEskalasi: '" + TrxEskalasi + "',TrxSLA: '" + TrxSLA + "',TrxExtendCategory: '" + TrxExtendCategory + "',TrxLayer: '" + TrxLayer + "',TrxThreadID:'" + TxtThreadID + "', TrxGenesysID:'" + TrxGenesysID + "', TxtContactID:'" + TxtContactID + "'}",
//                            data: form_data,
//                            success: function (data) {
//                                var json = JSON.parse(data.d);
//                                var i, x = "";
//                                var result = "";
//                                console.log("huhu : " + form_data)
//                                for (i = 0; i < json.length; i++) {
//                                    if (json[i].Result == "True") {
//                                        $.toast({
//                                            heading: '<b>Hi agent ' + $("#hd_sessionLogin").val() + '</b>',
//                                            text: 'Your data ticket has been submited...',
//                                            position: 'top-right',
//                                            loaderBg: '#ff6849',
//                                            icon: 'success',
//                                            hideAfter: 3500,
//                                            stack: 6
//                                        });
//                                        ShowDataTransaction($("#hd_customerID").val());
//                                        $("#modal-list-transaction-ticket").modal('show');
//                                    }
//                                }

//                            },
//                            error: function (xmlHttpRequest, textStatus, errorThrown) {
//                                console.log(xmlHttpRequest.responseText);
//                                console.log(textStatus);
//                                console.log(errorThrown);
//                            },
//                            complete: function () {

//                            }
//                        });

//                        swal("save data has been success", {
//                            icon: "success",
//                        });
//                    } else {
//                        //swal("Your imaginary file is safe!");
//                        //$("#ModalChannel").modal('hide');
//                    }
//                });

//        },
//    });
//});
function showHistoryTicket(nik) {
    var ids = nik;
    $("#ContentPlaceHolder1_TrxCustomerID").val(ids);
    var selectedValue = ids;
    var myTable = $('#Ticket_DataTableHistory').DataTable();
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + $("#ContentPlaceHolder1_TrxCustomerID").val() + "', TrxSearching:'" + $("#ContentPlaceHolder1_TrxCustomerID").val() + "', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK300'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceCustomer = "";

            myTable.clear().draw();
            if (json.length == 0) {
                console.log("data not found " + i);

            } else {
                for (i = 0; i < json.length; i++) {

                    if (json[i].JenisKelamin == "Male") {
                        var jenisKelamin = '5.jpg';
                    } else {
                        var jenisKelamin = '2.jpg';
                    }
                    var d = new Date(json[i].DateCreate);
                    var milisegundos = parseInt(json[i].DateCreate.replace("/Date(", "").replace(")/", ""));
                    var newDate = new Date(milisegundos).toLocaleDateString("en-UE");
                    var newTime = new Date(milisegundos).toLocaleTimeString("en-UE");

                    myTable.row.add([json[i].TicketNumber, json[i].TicketSourceName, json[i].CategoryName, json[i].SubCategory3Name, json[i].Status, newDate + ' ' + newTime]).draw(false);

                }
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
    $('#modal-ShowTicket').modal('show');
    getWS_MasterCustomerSelected(nik);
}
function getWS_MasterLoad() {
    var cmbData = $('#Ticket_ProductType');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'UideskIndonesia', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK301'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";

            for (i = 0; i < json.length; i++) {

                result = '<option value="' + json[i].ID + '">' + json[i].NamaPenyebab + '</option>';
                cmbData.append(result);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })

    var cmbDataStatus = $('#Ticket_UserStatus');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'UideskIndonesia', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK302'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultStatus = "";

            for (i = 0; i < json.length; i++) {

                resultStatus = '<option value="' + json[i].ID + '">' + json[i].StatusName + '</option>';
                cmbDataStatus.append(resultStatus);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })


    var cmbDataPriority = $('#Ticket_Priority');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'UideskIndonesia', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK303'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultPriority = "";

            for (i = 0; i < json.length; i++) {

                resultPriority = '<option value="' + json[i].Name + '">' + json[i].Name + '</option>';
                cmbDataPriority.append(resultPriority);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })

    var cmbDataUserCategory = $('#Ticket_UserCategory');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'UideskIndonesia', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK304'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultUserCategory = "";

            for (i = 0; i < json.length; i++) {

                resultUserCategory = '<option value="' + json[i].Type + '">' + json[i].Type + '</option>';
                cmbDataUserCategory.append(resultUserCategory);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })

    var ParameterChannel = getParameterByName("channel")
    if (ParameterChannel == null) {
        var TrxWhere = "-"
    } else {
        var TrxWhere = ParameterChannel
    }
    var cmbDataSourceChannel = $('#Ticket_SourceChannel');
    var cmbChannelHistory = $('#Select_Channel_History');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + TrxWhere + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK305'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceChannel = "", resultSourceChannelType = "", resultSourceChannelHistory = "";

            for (i = 0; i < json.length; i++) {

                if (getParameterByName("channel") == null) {
                    resultSourceChannel = '<option value="' + json[i].TicketIDCode + '">' + json[i].Name + '</option>';
                } else {
                    resultSourceChannel = '<option value="' + json[i].TicketIDCode + '" selected=true>' + json[i].Name + '</option>';
                    $('#Ticket_SourceChannel').attr('disabled', true);
                }
                cmbDataSourceChannel.append(resultSourceChannel);
                resultSourceChannelHistory = '<option value="' + json[i].Name + '">' + json[i].Name + '</option>';
                cmbChannelHistory.append(resultSourceChannelHistory);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })

    var cmbDataSourceCategory = $('#Ticket_Category');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'UideskIndonesia', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK306'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceCategory = "";

            for (i = 0; i < json.length; i++) {

                resultSourceCategory = '<option value="' + json[i].CategoryID + '">' + json[i].Name + '</option>';
                cmbDataSourceCategory.append(resultSourceCategory);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
    
    var cmbDataSourceUser = $('#Ticket_AgentName');
    $('#Ticket_AgentName').append('<option selected="selected" value="' + $("#hd_sessionLogin").val() + '">' + $("#hd_NameKaryawan").val() + '</option>');
    var cmbDataSourceStatus = $('#Ticket_Status');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'UideskIndonesia', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK307'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceStatus = "";

            for (i = 0; i < json.length; i++) {

                resultSourceStatus = '<option value="' + json[i].lblStatus + '">' + json[i].lblStatus + '</option>';
                cmbDataSourceStatus.append(resultSourceStatus);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })

    var ComboGA = $('#Ticket_Escalation_Type');
    $.ajax({
        type: "POST",
        url: "asmx/TrxTeamLeader.asmx/TeamLeaderType",
        data: "{ID:'0', UserName: '0', GroupAgent: '0', UserCreate: '" + $("#hd_sessionLogin").val() + "', Action: 'GROUPAGENT'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var json = JSON.parse(data.d);
            var i, x, result = "";

            ComboGA.empty();
            ComboGA.append("<option value=''>Select</option>");
            for (i = 0; i < json.length; i++) {

                result = '<option value="' + json[i].ID + '">' + json[i].NameType + '</option>';
                ComboGA.append(result);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function getWS_CategoryType(value) {
    var selectedText = $("#Ticket_Category").find("option:selected").text();
    var selectedValue = $("#Ticket_Category").val();
    var cmbDataSourceEnquiry = $('#Ticket_Enquiry');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK308'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceEnquiry = "";

            cmbDataSourceEnquiry.empty();
            cmbDataSourceEnquiry.append('<option value="">Select</option>');
            for (i = 0; i < json.length; i++) {

                resultSourceEnquiry = '<option value="' + json[i].SubCategory1ID + '">' + json[i].SubName + '</option>';
                cmbDataSourceEnquiry.append(resultSourceEnquiry);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function getWS_CategoryTypeDetail(value) {
    var selectedText = $("#Ticket_Enquiry").find("option:selected").text();
    var selectedValue = $("#Ticket_Enquiry").val();
    var cmbDataSourceEnquiryDetail = $('#Ticket_EnquiryDetail');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK309'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceEnquiryDetail = "";

            cmbDataSourceEnquiryDetail.empty();
            cmbDataSourceEnquiryDetail.append('<option value="">Select</option>');
            for (i = 0; i < json.length; i++) {

                resultSourceEnquiryDetail = '<option value="' + json[i].SubCategory2ID + '">' + json[i].SubName + '</option>';
                cmbDataSourceEnquiryDetail.append(resultSourceEnquiryDetail);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function getWS_CategoryTypeReason(value) {
    var selectedText = $("#Ticket_EnquiryDetail").find("option:selected").text();
    var selectedValue = $("#Ticket_EnquiryDetail").val();
    var cmbDataSourceEnquiryReason = $('#Ticket_EnquiryReason');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK310'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceEnquiryReason = "";

            cmbDataSourceEnquiryReason.empty();
            cmbDataSourceEnquiryReason.append('<option value="">Select</option>');
            for (i = 0; i < json.length; i++) {

                resultSourceEnquiryReason = '<option value="' + json[i].SubCategory3ID + '">' + json[i].SubName + '</option>';
                cmbDataSourceEnquiryReason.append(resultSourceEnquiryReason);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function escalationUnit(TrxValue) {
    var cmbDataSourceEscalation = $('#Ticket_Escalation');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + TrxValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK311'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceEscalation = "";

            for (i = 0; i < json.length; i++) {

                resultSourceEscalation = '<option value="' + json[i].ORGANIZATION_ID + '" selected=true>' + json[i].ORGANIZATION_NAME + '</option>';
                cmbDataSourceEscalation.append(resultSourceEscalation);
                $('#Ticket_Escalation').attr('disabled', true);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function getWS_MasterCustomer(custName) {
    var selectedValue = custName;
    var listDataCustomer = $('#Ticket_ListCustomer');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK312'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceCustomer = "";

            listDataCustomer.empty();
            if (json.length == 0) {
                console.log("data not found " + i);
                resultSourceCustomer = '<div class="media media-single" > No data found... </div>';
                listDataCustomer.append(resultSourceCustomer);

            } else {
                for (i = 0; i < json.length; i++) {

                    if (json[i].JenisKelamin == "Male") {
                        var jenisKelamin = '5.jpg';
                    } else {
                        var jenisKelamin = '2.jpg';
                    }
                    resultSourceCustomer = '<div class="media media-single" > ' +
                        '<a href="#">' +
                        '<img class="avatar avatar-lg" src="../images/avatar/' + jenisKelamin + '" alt="...">' +
                        '</a>' +
                        '<div class="media-body">' +
                        '<h6><a href="#" onclick="showHistoryTicket(' + json[i].CustomerID + ')">' + json[i].Name + '</a></h6>' +
                        '<small class="text-fader">' + json[i].Email + '</small>' +
                        '</div>' +
                        '<div class="media-right">' +
                        '<a onclick="showHistoryTicket(' + json[i].CustomerID + ')" class="btn btn-block btn-default btn-sm">Check</a>' +
                        '</div>' +
                        '</div>';

                    listDataCustomer.append(resultSourceCustomer);
                }
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function getWS_MasterCustomerSelected(custNik) {
    $("#ButtonSaveDataProfile").css("display", "none")
    var selectedValue = custNik;
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK313'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceCustomer = "", jenisKelamin;

            for (i = 0; i < json.length; i++) {

                $("#hd_customerID").val(json[i].CustomerID);
                $("#Ticket_FullName").val(json[i].Name);
                $("#Ticket_Phone").val(json[i].HP);
                $("#Ticket_Email").val(json[i].Email);
                var milisegundos = parseInt(json[i].Birth.replace("/Date(", "").replace(")/", ""));
                var newDate = new Date(milisegundos).toLocaleDateString("en-GB");
                var getDateBirth = newDate.split('/');
                $("#Ticket_Dateofbirth").val(getDateBirth[2] + "-" + getDateBirth[1] + "-" + getDateBirth[0]);
                console.log(newDate);
                console.log(getDateBirth[2] + "-" + getDateBirth[0] + "-" + getDateBirth[1]);
                $('#Gender' + json[i].JenisKelamin + '_Ticket').prop('checked', true);
                CKEDITOR.instances.Ticket_Address.setData(json[i].Alamat)
                $("#Ticket_NIK").val(json[i].NIK);
                //$("#Reported_Name").val(json[i].Name);
                //$("#Reported_Phone").val(json[i].HP);
                //$("#Reported_Email").val(json[i].Email);
                //CKEDITOR.instances.Reported_Address.setData(json[i].Alamat)
                $("#Ticket_CIF").val(json[i].CIF);
                $("#Ticket_Badan_Usaha").val(json[i].Cabang);
                $("#modal-searching-other").modal('hide');
                $("#modal-SearchUser").modal('hide');

                //if ($("#Ticket_CIF").val() == "Provider") {
                //    $("#NameReported").empty()
                //    $("#NameReported").append("RS Name Reported")
                //    $("#EmailReported").empty()
                //    $("#EmailReported").append("RS Email Reported")
                //    $("#ContactNumberReported").empty()
                //    $("#ContactNumberReported").append("RS Contact Number Reported")
                //    $("#ContactAccountReported").empty()
                //    $("#ContactAccountReported").append("RS Contact Account Reported")
                //    $('#Ticket_ProductType').val("27");
                //    $('#Ticket_ProductType').attr('disabled', true);
                //    $("#Ticket_ProductName  option:selected").text("Provider")
                //    $("#Ticket_ProductName  option:selected").val("Provider")
                //    $('#Ticket_ProductName').attr('disabled', true);
                //    $('#Ticket_UserStatus').val("5");
                //    $('#Ticket_UserStatus').attr('disabled', true);
                //    $('#Ticket_UserCategory').val("Provider");
                //    $('#Ticket_UserCategory').attr('disabled', true);
                //} else {
                //    $("#NameReported").empty()
                //    $("#NameReported").append("Full Name Reported")
                //    $("#EmailReported").empty()
                //    $("#EmailReported").append("Email Reported")
                //    $("#ContactNumberReported").empty()
                //    $("#ContactNumberReported").append("Contact Number Reported")
                //    $("#ContactAccountReported").empty()
                //    $("#ContactAccountReported").append("Contact Account Reported")
                //    $('#Ticket_ProductType').val("");
                //    $('#Ticket_ProductType').attr('disabled', false);
                //    $("#Ticket_ProductName  option:selected").text("")
                //    $("#Ticket_ProductName  option:selected").val("")
                //    $('#Ticket_ProductName').attr('disabled', false);
                //    $('#Ticket_UserStatus').val("");
                //    $('#Ticket_UserStatus').attr('disabled', false);
                //    $('#Ticket_UserCategory').val("");
                //    $('#Ticket_UserCategory').attr('disabled', false);
                //}

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
   
}
function getWS_SLAReason(value) {
    var selectedText = $("#Ticket_EnquiryReason").find("option:selected").text();
    var selectedValue = $("#Ticket_EnquiryReason").val();
    var slaSpanData = $('#Ticket_SLA');
    var TicketLayer = $('#Ticket_Layer');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK314'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceEnquiryReason = "";

            slaSpanData.empty();
            TicketLayer.empty();
            for (i = 0; i < json.length; i++) {

                slaSpanData.append("<span class='badge badge-pill badge-primary float-right' style='font-weight:bold;font-size:11px;' id='Ticket_SLA'><i class='fa fa-clock-o'></i>&nbsp;" + json[i].SLA + " Minute</span>");
                $("#hd_SLA").val(json[i].SLA);
                escalationUnit(json[i].TujuanEskalasi)

                $("#Ticket_Layer").css("display", "block")
                TicketLayer.append("<span class='badge badge-pill badge-primary float-right' style='font-weight:bold;font-size:11px;' id='Ticket_Layer'><i class='fa fa-share-alt'></i>&nbsp;Layer " + json[i].Layer + "</span>");
                //$("#Ticket_EscalationLayer").val(json[i].Layer)
                $("#ContentPlaceHolder1_hd_Layer").val(json[i].Layer);
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function getWS_DataTicket(value) {
    var selectedValue = value;
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK315'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceEnquiryReason = "";

            $("#Ticket_Enquiry").empty();
            $("#Ticket_EnquiryDetail").empty();
            $("#Ticket_EnquiryReason").empty();
            $("#Ticket_SLA").empty();
            for (i = 0; i < json.length; i++) {

                $("#Reported_Name").val(json[i].NAMA_PELAPOR);
                $("#Reported_Email").val(json[i].EMAIL_PELAPOR);
                $("#Reported_Phone").val(json[i].PHONE_PELAPOR);
                $("#Reported_Address").val(json[i].ALAMAT_PELAPOR);
                var milisegundos = parseInt(json[i].TglKejadian.replace("/Date(", "").replace(")/", ""));
                var newDate = new Date(milisegundos).toLocaleDateString("en-GB");
                var getDateBirth = newDate.split('/');

                $("#Ticket_DateofTransaction").val(getDateBirth[2] + "-" + getDateBirth[1] + "-" + getDateBirth[0]);
                $("#Ticket_ProductType").val(json[i].IdPenyebab);
                $("#Ticket_AgentName").val(json[i].UserCreate);
                $("#Ticket_UserStatus").val(json[i].IdStatusPelapor);
                $("#Ticket_Priority").val(json[i].SkalaPrioritas);
                $("#Ticket_UserCategory").val(json[i].JenisNasabah);
                $("#Ticket_BankAccount").val(json[i].NomorRekening);
                $("#Ticket_SourceChannel").val(json[i].SumberInformasi);
                $("#Ticket_Category").val(json[i].CategoryID);
                $("#Ticket_Enquiry").append('<option selected value="' + json[i].SubCategory1ID + '">' + json[i].SubCategory1Name + '</option>');
                $("#Ticket_EnquiryDetail").append('<option selected value="' + json[i].SubCategory2ID + '">' + json[i].SubCategory2Name + '</option>');
                $("#Ticket_EnquiryReason").append('<option selected value="' + json[i].SubCategory3ID + '">' + json[i].SubCategory3Name + '</option>');
                CKEDITOR.instances.Ticket_Complaints.setData(json[i].DetailComplaint);
                $("#Ticket_NoteAgent").val(json[i].ResponComplaint);
                $("#Ticket_Status").val(json[i].Status);
                $("#Ticket_Escalation").val(json[i].Divisi);
                $('#Ticket_SLA').append("<span class='timeline-label' id='Ticket_SLA'><button class='btn btn-danger btn-rounded'><i class='fa fa-clock-o'></i></button>" + json[i].SLA + "</span>");
                $("#hd_SLA").val(json[i].SLA);
            }
            window.location.href = "1_Journey.aspx?ticketid=" + selectedValue;

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function InsertTransacionThread() {
    var ParameterPage = getParameterByName("n")
    var ParameterChannel = getParameterByName("channel")
    var ParameterAccount = getParameterByName("account")
    var ParameterID = getParameterByName("id")
    if (ParameterPage == "1") {
        if (ParameterChannel == "Email") {
            $.ajax({
                type: "POST",
                url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
                data: "{TrxID:'" + ParameterAccount + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK316'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {

                    var json = JSON.parse(data.d);
                    var i, x, resultCustomer = "";

                    if (json.length == 0) {
                        $("#modal-SearchUser").modal('show');
                    } else {
                        for (i = 0; i < json.length; i++) {

                            getWS_MasterCustomerSelected(json[i].CustomerID);

                        }
                    }

                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    console.log(xmlHttpRequest.responseText);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            })
        } else {
            var varCustomerIDGET = "";
            $.ajax({
                type: "POST",
                url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
                data: "{TrxID:'" + ParameterID + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK317'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {

                    var json = JSON.parse(data.d);
                    var i, x, resultSourceCustomer = "", jenisKelamin;

                    if (json.length == 0) {

                        $("#modal-SearchUser").modal('show');
                        $("#modal-SearchAPI").modal('hide');
                        $("#cusTomerPhone").val(getParameterByName("id"));
                        $("#UpdateCustomer").css("display", "none");
                        $("#SaveCustomer").css("display", "block");

                    } else {
                        for (i = 0; i < json.length; i++) {

                            getWS_MasterCustomerSelected(ParameterID)

                        }
                    }

                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    console.log(xmlHttpRequest.responseText);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            })
        }
    }
}
function ActionInsertThread(cusTomerid, channel, threadid, numberid, voice, subject) {
    var TrxUsername = $("#hd_sessionLogin").val();
    var TrxCustomerID = cusTomerid;
    var TrxNumberid = numberid;
    var TrxThreadID = threadid;
    var TrxChannel = channel;
    var TrxAccount = voice;
    var TrxSubject = subject;
    getWS_MasterCustomerSelected(cusTomerid)
    var form_data = JSON.stringify({ TrxUsername: TrxUsername, TrxCustomerID: TrxCustomerID, TrxNumberid: TrxNumberid, TrxThreadID: TrxThreadID, TrxChannel: TrxChannel, TrxAccount: TrxAccount, TrxSubject: TrxSubject, TrxDescription: TrxSubject });
    $.ajax({
        url: "WebServiceTransaction.asmx/InsertTransactionThread",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: form_data,
        success: function () {
            console.log("Exec ActionInsertThread : " + form_data)
            $.toast({
                heading: '<b>Hi agent ' + $("#hd_sessionLogin").val() + '</b>',
                text: 'Your data call has been save',
                position: 'top-right',
                loaderBg: '#ff6849',
                icon: 'success',
                hideAfter: 3500,
                stack: 6
            });
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
function CheckingCustomerVoice(voice) {
    var TrxPhone = voice;
    var form_data = JSON.stringify({ TrxPhone: TrxPhone });
    $.ajax({
        type: "POST",
        url: "WebServiceTransaction.asmx/SelectCustomerChannel",
        data: "{TrxPhone: '" + TrxPhone + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var json = JSON.parse(data.d);
            var i, x = "";

            for (i = 0; i < json.length; i++) {

                if (json[i].CustomerID == '0') {

                    $("#modal-SearchUser").modal('show');
                    if (getParameterByName("n") == "3") {

                        $("#modal-SearchAPI").modal('hide');
                    } else if (getParameterByName("n") == "2") {

                        ActionInsertThread(getParameterByName("account"), getParameterByName("channel"), getParameterByName("threadid"), getParameterByName("numberid"), getParameterByName("account"), getParameterByName("subject"))
                        $("#modal-SearchAPI").modal('show');
                        $("#UpdateCustomer").css("display", "none");
                        $("#SaveCustomer").css("display", "block");
                        if (getParameterByName("channel") == "Call") {
                            $("#cusTomerPhone").val(TrxPhone);
                        } else if (getParameterByName("channel") == "EMAIL") {
                            $("#cusTomerName").val(TrxPhone);
                        }

                    }
                } else {
                    ActionInsertThread(getParameterByName("id"), getParameterByName("channel"), getParameterByName("threadid"), getParameterByName("numberid"), getParameterByName("account"), getParameterByName("subject"))
                }
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function encodeData(s) {
    return encodeURIComponent(s).replace(/\-/g, "%2D").replace(/\_/g, "%5F").replace(/\./g, "%2E").replace(/\!/g, "%21").replace(/\~/g, "%7E").replace(/\*/g, "%2A").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
}
function AutoValidasi(TrxCreatedby, Message) {
    $.toast({
        heading: '<b>Hi agent ' + TrxCreatedby + '</b>',
        text: 'Your <b>' + Message + '</b> is empty ',
        position: 'top-left',
        loaderBg: '#ff6849',
        icon: 'warning',
        hideAfter: 3500,
        stack: 6
    });
}
function ActionInsertCustomer(cusTomerid, channel, threadid, numberid, voice, subject) {
    var TrxUsername = $("#hd_sessionLogin").val();
    var TrxCusTomerName = $("#cusTomerName").val();
    var TrxCusTomerEmail = $("#cusTomerEmail").val();
    var TrxCusTomerPhone = $("#cusTomerPhone").val();
    var TrxCusTomerGender = $("#cusTomerGender").val();
    var TrxCusTomerDate = $("#cusTomerDate").val();
    var TrxCustomerPolisNumber = "-";
    var TrxCusTomerNIK = $("#cusTomerNIK").val();
    //var TrxCusTomerNIK = getParameterByName("account")
    var TrxFacebook = $("#cusTomerFacebook").val();
    var TrxInstagram = $("#cusTomerInstagram").val();
    var TrxTwitter = $("#cusTomerTwitter").val();
    var TrxCusTomerAlamat = CKEDITOR.instances.cusTomerAlamat.getData();
    if (getParameterByName("numberid") != '') {
        var TrxNumberID = getParameterByName("numberid");
    } else {
        var TrxNumberID = "0";
    }
    if (TrxCusTomerName === '') {
        swal(
            '',
            'Name Is Empty',
            'info'
        ).then(function () {
            AutoValidasiWarning($("#hd_sessionLogin").val(), "<b>Name</b> is empty")
            return false
        });
        return false;
    }
    if (TrxCusTomerEmail != '') {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (TrxCusTomerEmail.match(mailformat)) {

        }
        else {
            swal(
                '',
                'Format Email Address Not Valid',
                'error'
            ).then(function () {
                AutoValidasiWarning($("#hd_sessionLogin").val(), "Format <b>email address</b> not valid")
                return false
            });
            return false;
        }
    }
    if (TrxCusTomerPhone != '') {
        var numberNya = /^[0-9]+$/;
        if (TrxCusTomerPhone.match(numberNya)) {
            var PhoneLengt = TrxCusTomerPhone.toString().length;
            if (PhoneLengt > '6') {

            } else {
                swal(
                    '',
                    'Format Phone Number Not Valid',
                    'error'
                ).then(function () {
                    AutoValidasiWarning($("#hd_sessionLogin").val(), "Format <b>phone number</b> not valid")
                    return false
                });
                return false;
            }
        } else {
            swal(
                '',
                'Format Phone Number Is Numeric',
                'error'
            ).then(function () {
                AutoValidasiWarning($("#hd_sessionLogin").val(), "Format <b>Phone Number</b> format is numeric")
                return false;
            });
            return false;
        }
    }
    if (TrxCusTomerGender == '--Select--' || TrxCusTomerGender == '' || TrxCusTomerGender == '0') {
        swal(
            '',
            'Gender is empty',
            'info'
        ).then(function () {
            AutoValidasiWarning($("#hd_sessionLogin").val(), "<b>Gender</b> is empty")
            return false;
        });
        return false;
    }
    if (TrxCusTomerNIK == '' || TrxCusTomerNIK == '0') {
    } else {
        var numberNya = /^[0-9]+$/;
        if (TrxCusTomerNIK.match(numberNya)) {
            var NIKLengt = TrxCusTomerNIK.toString().length;
            if (NIKLengt == '16') {

            } else {
                swal(
                    '',
                    'NIK Number format is 16 digit',
                    'error'
                ).then(function () {
                    AutoValidasiWarning($("#hd_sessionLogin").val(), "<b>NIK Number</b> format is 16 digit")
                    return false;
                });
                return false;
            }
        } else {
            swal(
                '',
                'NIK Number format is numeric',
                'error'
            ).then(function () {
                AutoValidasiWarning($("#hd_sessionLogin").val(), "<b>NIK Number</b> format is numeric")
                return false;
            });
            return false;
        }
    }
    if ($("#cusTomerNomorKartu").val() == "") {
        swal(
            '',
            'Nomor Kartu is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#cusTomerBadanUsaha").val() == "") {
        swal(
            '',
            'Badan Usaha is empty',
            'info'
        ).then(function () {
            return false;
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

                var form_data = JSON.stringify({
                    TrxUsername: TrxUsername, TrxCusTomerName: encodeData(TrxCusTomerName), TrxCusTomerEmail: TrxCusTomerEmail, TrxCusTomerPhone: TrxCusTomerPhone,
                    TrxCusTomerGender: TrxCusTomerGender, TrxCusTomerDate: TrxCusTomerDate, TrxCusTomerNIK: TrxCusTomerNIK,
                    TrxCustomerPolisNumber: TrxCustomerPolisNumber, TrxCusTomerAlamat: encodeData(TrxCusTomerAlamat), TrxNumberID: TrxNumberID, TrxCIF: $("#cusTomerNomorKartu").val(),
                    TrxBadanUsaha: $("#cusTomerBadanUsaha").val()
                });
                $.ajax({
                    url: "asmx/ServiceCustomer.asmx/InsertTransactionCustomer",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {

                        var json = JSON.parse(data.d);
                        var i, x = "";
                        var result = "";

                        for (i = 0; i < json.length; i++) {
                            if (json[i].Result == "True") {
                                $.toast({
                                    heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                    text: 'Your data customer has been save',
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'success',
                                    hideAfter: 3500,
                                    stack: 6
                                });
                                ClearTextBoxt();
                                getWS_MasterCustomerSelected(json[i].CustomerID)
                                swal(
                                    '',
                                    'Insert Data Has Been Success',
                                    'success'
                                ).then(function () {
                                    $("#modal-center").modal('hide');
                                    $("#modal-SearchUser").modal('hide');
                                });
                            } else {
                                swal(
                                    '',
                                    '' + json[i].msgSystem +'',
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
        });
}
function ShowActionUpdate() {
    $("#SaveCustomer").css("display", "none");
    $("#UpdateCustomer").css("display", "block");
    $("#modal-center").modal('show');

    var ParameterPage = getParameterByName("n")
    var ParameterID = getParameterByName("id")
    if (ParameterPage == '3') {
        var selectedValue = $("#hd_customerID").val();
    } else if (ParameterPage == '4') {
        var selectedValue = $("#hd_customerID").val();
    } else {
        var selectedValue = ParameterID;
    }
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK318'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceCustomer = "", jenisKelamin;

            if (json.length == 0) {

            } else {

                for (i = 0; i < json.length; i++) {

                    $("#hd_customerID").val(json[i].CustomerID);
                    $("#cusTomerName").val(json[i].Name);
                    $("#cusTomerPhone").val(json[i].HP);
                    $("#cusTomerEmail").val(json[i].Email);
                    $("#cusTomerFacebook").val(json[i].Facebook);
                    $("#cusTomerInstagram").val(json[i].Instagram);
                    $("#cusTomerTwitter").val(json[i].Twitter);
                    var milisegundos = parseInt(json[i].Birth.replace("/Date(", "").replace(")/", ""));
                    var newDate = new Date(milisegundos).toLocaleDateString("en-GB");
                    var getDateBirth = newDate.split('/');
                    $("#cusTomerDate").val(getDateBirth[2] + "-" + getDateBirth[1] + "-" + getDateBirth[0]);
                    $("#cusTomerGender").val(json[i].JenisKelamin);
                    $("#cusTomerNIK").val(json[i].Provinsi);
                    $("#cusTomerAlamat").val(json[i].Alamat);

                }
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function ActionUpdateCustomer() {
    if ($("#ContentPlaceHolder1_TrxCustomerID").val() == '') {
        var TrxCustomerID = getParameterByName("id");
    } else {
        var TrxCustomerID = $("#ContentPlaceHolder1_TrxCustomerID").val();
    }
    var TrxUsername = $("#hd_sessionLogin").val();
    var TrxCusTomerName = $("#cusTomerName").val();
    var TrxCusTomerEmail = $("#cusTomerEmail").val();
    var TrxCusTomerPhone = $("#cusTomerPhone").val();
    var TrxCusTomerGender = $("#cusTomerGender").val();
    var TrxCusTomerDate = $("#cusTomerDate").val();
    var TrxCusTomerNIK = $("#cusTomerNIK").val();
    var TrxFacebook = $("#cusTomerFacebook").val();
    var TrxInstagram = $("#cusTomerInstagram").val();
    var TrxTwitter = $("#cusTomerTwitter").val();
    var TrxCusTomerAlamat = $("#cusTomerAlamat").val();
    if (TrxCustomerID === '') {
        swal("Customer is empty")
        return false;
    }
    if (TrxCusTomerName === '') {
        swal("Name is empty")
        return false;
    }
    if (TrxCusTomerEmail != '') {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (TrxCusTomerEmail.match(mailformat)) {
        }
        else {
            swal("Format email address not valid");
            return false;
        }
    }
    if (TrxCusTomerPhone != '') {
        var numberNya = /^[0-9]+$/;
        if (TrxCusTomerPhone.match(numberNya)) {
            var PhoneLengt = TrxCusTomerPhone.toString().length;
            if (PhoneLengt > '6') {

            } else {
                swal("Format phone number is not valid")
                return false;
            }
        } else {
            swal("Phone Number format is numeric")
            return false;
        }
    }
    if (TrxCusTomerGender == '--Select--' || TrxCusTomerGender == '' || TrxCusTomerGender == '0') {
        swal("Gender is empty")
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
                var form_data = JSON.stringify({ TrxCustomerID: TrxCustomerID, TrxUsername: TrxUsername, TrxCusTomerName: encodeData(TrxCusTomerName), TrxCusTomerEmail: TrxCusTomerEmail, TrxCusTomerPhone: TrxCusTomerPhone, TrxCusTomerGender: TrxCusTomerGender, TrxCusTomerDate: TrxCusTomerDate, TrxCusTomerNIK: TrxCusTomerNIK, TrxCusTomerAlamat: encodeData(TrxCusTomerAlamat), TrxFacebook: TrxFacebook, TrxInstagram: TrxInstagram, TrxTwitter: TrxTwitter });
                console.log("exec ActionUpdateCustomer : " + form_data)
                $.ajax({
                    url: "asmx/ServiceCustomer.asmx/UpdateTransactionCustomer",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {

                        var json = JSON.parse(data.d);
                        var i, x = "";
                        var result = "";

                        for (i = 0; i < json.length; i++) {
                            if (json[i].Result == "True") {
                                $.toast({
                                    heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                    text: 'Your data customer has been update',
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'success',
                                    hideAfter: 3500,
                                    stack: 6
                                });
                                $("#modal-center").modal('hide');
                                getWS_MasterCustomerSelected($("#ContentPlaceHolder1_TrxCustomerID").val())
                            } else {
                                $.toast({
                                    heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                    text: json[i].msgSystem,
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'warning',
                                    hideAfter: 3500,
                                    stack: 6
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
                swal("save data has been success", {
                    icon: "success",
                });
            } else {
                $("#modal-center").modal('hide');
            }
        });
}
function SubmitInstanNote() {
    var TrxCustomerID = $("#ContentPlaceHolder1_TrxCustomerID").val();
    var TrxNoteInstan = CKEDITOR.instances._NoteInstan.getData();
    var TrxNumberID = getParameterByName("numberid");
    var TrxThreadID = getParameterByName("threadid");
    var TrxChannel = getParameterByName("channel");
    var TrxUsername = $("#hd_sessionLogin").val();
    if ($("#hd_customerID").val() == "") {
        $.toast({
            heading: 'Hi Agent ' + $("#hd_sessionLogin").val(),
            text: "Customer is empty </br> Please select customer",
            position: 'top-right',
            loaderBg: '#ff6849',
            icon: 'warning',
            hideAfter: 3500,
            stack: 6
        });
        return false;
    }
    if (TrxNoteInstan == "") {
        $.toast({
            heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
            text: "Instan Note Empty </br> Please input your data",
            position: 'top-right',
            loaderBg: '#ff6849',
            icon: 'warning',
            hideAfter: 3500,
            stack: 6
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

                var form_data = JSON.stringify({ TrxCustomerID: TrxCustomerID, TrxNoteInstan: encodeData(TrxNoteInstan), TrxNumberID: TrxNumberID, TrxThreadID: TrxThreadID, TrxChannel: TrxChannel, TrxUsername: TrxUsername });
                console.log("SubmitInstanNote : " + form_data)
                $.ajax({
                    url: "WebServiceTransaction.asmx/InsertNoteInstan",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {

                        var json = JSON.parse(data.d);
                        var i, x = "";
                        var result = "";

                        for (i = 0; i < json.length; i++) {
                            if (json[i].Result == "True") {
                                $.toast({
                                    heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                    text: 'Your instan note has been save',
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'success',
                                    hideAfter: 3500,
                                    stack: 6
                                });
                            } else {
                                $.toast({
                                    heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                    text: json[i].msgSystem,
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'warning',
                                    hideAfter: 3500,
                                    stack: 6
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

                swal("save data has been success", {
                    icon: "success",
                });
                window.location.href = "1_Thread.aspx";
            } else {
                //swal("Your imaginary file is safe!");
                //$("#ModalChannel").modal('hide');
            }
        });

}
function CheckingThreadTrxNumberID() {
    var TrxNumberID = getParameterByName("numberid");
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + TrxNumberID + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK319'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x = "";
            for (i = 0; i < json.length; i++) {

                if (json[i].ThreadReason == "" || json[i].ThreadReason == null) {
                    CKEDITOR.instances.Ticket_Complaints.setData(json[i].ThreadDescription);
                } else {
                    CKEDITOR.instances.Ticket_Complaints.setData(json[i].ThreadReason);
                }

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function AddTransaction() {
    $("#modal-list-transaction-ticket").modal('hide');
    $("#Ticket_EscalationLayer").val("");
    $("#Ticket_DateofTransaction").val("");
    $("#Ticket_ProductType").val("");
    $("#Ticket_UserStatus").val("");
    $("#Ticket_Priority").val("");
    $("#Ticket_UserCategory").val("");
    $("#Ticket_BankAccount").val("");
    //$("#Ticket_SourceChannel").val("");
    $("#Ticket_Category").val("");
    $("#Ticket_Enquiry").val("");
    $("#Ticket_EnquiryDetail").val("");
    $("#Ticket_EnquiryReason").val("");
    $("#Ticket_Complaints").val("");
    $("#Ticket_NoteAgent").val("");
    //$("#Ticket_ComplaintType").val("");
    $("#Ticket_Status").val("");
    $("#Ticket_Escalation").val("");
    $("#Ticket_SLA").html("<span class='timeline-label' id='Ticket_SLA'><button class='btn btn-danger btn-rounded'><i class='fa fa-clock-o'></i></button>0</span>");
    $("#hd_SLA").val("");
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
function SelectInstanNote() {
    var TrxNumberID = getParameterByName("numberid")
    var result = "";
    var messageDiv = $('#Ticket_ListTransactionNote');
    var form_data = JSON.stringify({ TrxID: TrxNumberID, TrxType: 'Ticket' });
    $.ajax({
        url: "asmx/ServiceThread.asmx/ThreadDataSelectInstanNote",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: form_data,
        success: function (data) {
            console.log("Action Select Instan Note : " + form_data)

            var json = JSON.parse(data.d);
            var i, x = "", resultListTransactionNote = "";

            messageDiv.empty();
            if (json.length == 0) {
                $("#Ticket_display").css("display", "none");
            } else {
                for (i = 0; i < json.length; i++) {
                    resultListTransactionNote = '<span class="timeline-label">' +
                        '<span class="badge badge-pill badge-primary badge-lg">' + json[i].TrxUserCreate + '</span>' +
                        '</span>' +
                        '<div class="timeline-item">' +
                        '<div class="timeline-point">' +
                        '<i class="ion ion-chatbubble-working"></i>' +
                        '</div>' +
                        '<div class="timeline-event">' +
                        '<div class="timeline-body">' +
                        '<p class="font-size-12">' + json[i].TrxNote + '</p>' +
                        '</div>' +
                        '<div class="timeline-footer">' +
                        '<p class="text-right"><span class="btn btn-success btn-sm btn-rounded">' + json[i].TrxDateView + '</span></p>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    $('#Ticket_ListTransactionNote').append(resultListTransactionNote)
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
function TabelSearchingCustomer() {
    var ParameterPage = getParameterByName("n")
    var myTable = $('#TblSearchingCustomer').DataTable();
    $.ajax({
        type: "POST",
        url: "asmx/ServiceCustomer.asmx/ListDataCustomer",
        data: "{TrxAction: 'CustomerSearching'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x = "";

            myTable.clear().draw();
            if (json.length == 0) {

            } else {
                for (i = 0; i < json.length; i++) {
                    if (ParameterPage == "3") {
                        var urlClick = "<div class='dropdown'>" +
                            "<a data-toggle='dropdown' href='#'><i class='ti-more-alt rotate-90 text-black'></i></a>" +
                            "<div class='dropdown-menu dropdown-menu-right'>" +
                            "<a class='dropdown-item' href='#' onclick=ShowOtherChannel('" + json[i].CustomerID + "','Add','Add')><i class='si-plus si'></i>New</a>" +
                            "<a class='dropdown-item' href='#' onclick=ShowOtherChannel('" + json[i].CustomerID + "','" + json[i].ValueChannel + "','" + json[i].FlagChannel + "')><i class='si-pencil si'></i>Edit</a>" +
                            "<a class='dropdown-item' href='#' onclick=ShowDeleteOtherChannel('" + json[i].CustomerID + "','" + json[i].ValueChannel + "','" + json[i].FlagChannel + "')><i class='fa fa-trash-o'></i>Delete</a>" +
                            "</div>"
                    } else {
                        var urlClick = "<div class='dropdown'>" +
                            "<a data-toggle='dropdown' href='#'><i class='ti-more-alt rotate-90 text-black'></i></a>" +
                            "<div class='dropdown-menu dropdown-menu-right'>" +
                            "<a class='dropdown-item' href='#' onclick=ShowOtherChannel('" + json[i].CustomerID + "','Add','Add')><i class='si-plus si'></i>New</a>" +
                            "<a class='dropdown-item' href='#' onclick=ShowOtherChannel('" + json[i].CustomerID + "','" + json[i].ValueChannel + "','" + json[i].FlagChannel + "')><i class='si-pencil si'></i>Edit</a>" +
                            "<a class='dropdown-item' href='#' onclick=ShowDeleteOtherChannel('" + json[i].CustomerID + "','" + json[i].ValueChannel + "','" + json[i].FlagChannel + "')><i class='fa fa-trash-o'></i>Delete</a>" +
                            "<div class='dropdown-divider'></div>" +
                            "<a class='dropdown-item' href='1_doticket.aspx?n=1&id=" + json[i].CustomerID + "&channel=" + getParameterByName("channel") + "&threadid=" + getParameterByName("threadid") + "&numberid=" + getParameterByName("numberid") + "&voice=" + getParameterByName("voice") + "&subject='><i class='si-user si'></i>Preview</a>" +
                            "</div>"
                    }
                    myTable.row.add([json[i].CustomerID, json[i].Name, json[i].ValueChannel, json[i].FlagChannel, urlClick]).draw(false);

                }

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}
function ShowDeleteOtherChannel(CustomerID, Action, ChannelType) {
    $("#cmbOtherChannel option:selected").text("");
    $("#hd_customerID").val(CustomerID);
    $("#TxtChannelValue").val(Action);
    $("#cmbOtherChannel option:selected").text(ChannelType);
    $("#ModalOtherChannelCustomer").modal('show');
    $("#UpdateOtherChannel").css("display", "none");
    $("#SaveOtherChannel").css("display", "none");
    $("#DeleteOtherChannel").css("display", "block");
}
function ShowOtherChannel(CustomerID, Action, ChannelType) {
    $("#TxtChannelValue").val("");
    if (Action == 'Add') {
        if ($("#cmbOtherChannel option:selected").text() != 'Select') {
            $("#cmbOtherChannel option:selected").text("Select");
        }
        $("#hd_customerID").val(CustomerID);
        $("#ModalOtherChannelCustomer").modal('show');
        $("#UpdateOtherChannel").css("display", "none");
        $("#SaveOtherChannel").css("display", "block");
        $("#DeleteOtherChannel").css("display", "none");
    }
    else {
        $("#hd_customerID").val(CustomerID);
        $("#TxtChannelValue").val(Action);
        $("#cmbOtherChannel option:selected").text(ChannelType);
        $("#UpdateOtherChannel").css("display", "block");
        $("#SaveOtherChannel").css("display", "none");
        $("#DeleteOtherChannel").css("display", "none");
        $("#ModalOtherChannelCustomer").modal('show');
    }
}
function ActionOtherChannel(Action) {
    if (Action == 'Simpan') {
        if ($("#hd_customerID").val() == "") {
            AutoValidasiWarning($("#hd_sessionLogin").val(), "Your data <b>customer</b> is empty ")
            return false
        }
        if ($("#TxtChannelValue").val() == "") {
            AutoValidasiWarning($("#hd_sessionLogin").val(), "Your data <b>value channel</b> is empty ")
            return false
        }
        if ($("#cmbOtherChannel").val() == "") {
            AutoValidasiWarning($("#hd_sessionLogin").val(), "Your data <b>channel type</b> is empty ")
            return false
        }
        var TrxChannelType = $("#cmbOtherChannel").val();
        var ActionSP = "InsertOtherChannel"
    } else if (Action == 'Update') {
        var TrxChannelType = $("#cmbOtherChannel option:selected").text();
        var ActionSP = "UpdateOtherChannel"
    } else {
        var TrxChannelType = "Delete";
        var ActionSP = "DeleteOtherChannel"
    }
    var form_data = JSON.stringify({ TrxUserName: $("#hd_sessionLogin").val(), TrxCustomerID: $("#hd_customerID").val(), TrxChannelValue: $("#TxtChannelValue").val(), TrxChannelType: TrxChannelType });
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                $.ajax({
                    url: "asmx/ServiceCustomer.asmx/" + ActionSP + "",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function () {
                        console.log(ActionSP + form_data)

                        var TrxMessage = 'Your data channel <b>' + $("#TxtChannelValue").val() + '</b> has been ' + Action
                        AutoValidasiSuccess($("#hd_sessionLogin").val(), TrxMessage);
                        $("#TxtChannelValue").val("");
                        $("#cmbOtherChannel").val("");
                        $("#ModalOtherChannelCustomer").modal('hide');
                        TableChannelInformation();
                        SearchingOtherChannel();
                        $("#ContentPlaceHolder1_TrxCustomerID").val($("#hd_customerID").val())
                        getWS_MasterCustomerSelected($("#hd_customerID").val())

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
function ClearCustomer() {
    $("#hd_customerID").val("");
    $("#cusTomerName").val("");
    $("#cusTomerPhone").val("");
    $("#cusTomerEmail").val("");
    $("#cusTomerFacebook").val("");
    $("#cusTomerInstagram").val("");
    $("#cusTomerTwitter").val("");
    $("#cusTomerDate").val("");
    $("#cusTomerGender").val("");
    //$("#Ticket_CIF").val("");
    $("#cusTomerNIK").val("");
    $("#cusTomerAlamat").val("");
}
function showAddCustomer() {
    $("#modal-SearchUser").modal('hide');
    ClearCustomer();
    $("#SaveCustomer").css("display", "block");
    $("#UpdateCustomer").css("display", "none");
    TabelSearchingCustomer();
}
function TableChannelInformation() {
    var myTable = $('#TableChannelInformation').DataTable();
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + $("#hd_customerID").val() + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK320'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var json = JSON.parse(data.d);
            var i, x, result = "";

            myTable.clear().draw();
            for (i = 0; i < json.length; i++) {

                var d = new Date(json[i].DateCreate);
                var milisegundos = parseInt(json[i].DateCreate.replace("/Date(", "").replace(")/", ""));
                var newDate = new Date(milisegundos).toLocaleDateString("en-UE");
                var newTime = new Date(milisegundos).toLocaleTimeString("en-UE");

                var urlClick = "<div class='dropdown'>" +
                    "<a data-toggle='dropdown' href='#'><i class='ti-more-alt rotate-90 text-black'></i></a>" +
                    "<div class='dropdown-menu dropdown-menu-right'>" +
                    "<a class='dropdown-item' href='#' onclick=ShowOtherChannel('" + json[i].CustomerID + "','" + json[i].ValueChannel + "','" + json[i].FlagChannel + "')><i class='fa fa-pencil'></i>Edit</a>" +
                    "<a class='dropdown-item' href='#' onclick=ShowDeleteOtherChannel('" + json[i].CustomerID + "','" + json[i].ValueChannel + "','" + json[i].FlagChannel + "')><i class='fa fa-trash-o'></i>Delete</a>" +
                    "</div>" +
                    "</div>"
                var Status = "<span class='badge badge-pill badge-" + json[i].StatusColor + "' style='width: 60px;'>" + json[i].StatusNya + "</span>"
                myTable.row.add([json[i].FlagChannel, json[i].ValueChannel, Status, json[i].AgentName, urlClick]).draw(false);
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function TableHistoryTicket() {
    var ParameterPage = getParameterByName("n")
    var ParameterNumberID = getParameterByName("numberid")
    var ParameterThreadID = getParameterByName("threadid")
    var ParameterChannel = getParameterByName("channel")
    var myTable = $('#TableHistoryTicket').DataTable(
        {
            "order": [[0, "desc"]]
        }
    );
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + $("#hd_customerID").val() + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK321'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";

            myTable.clear().draw();
            for (i = 0; i < json.length; i++) {

                var d = new Date(json[i].DateCreate);
                var milisegundos = parseInt(json[i].DateCreate.replace("/Date(", "").replace(")/", ""));
                var newDate = new Date(milisegundos).toLocaleDateString("en-UE");
                var newTime = new Date(milisegundos).toLocaleTimeString("en-UE");

                if (ParameterPage == "4") {
                    var urlClick = "<a href='#' onclick=RedirectPaging('" + json[i].TicketNumber + "','" + json[i].Status + "') class='text-success' data-toggle='tooltip' data-original-title='Follow up'><i class='ti-arrow-circle-right' aria-hidden='true'></i></a>&nbsp;<a href='TrxHistoryTicketJourney.aspx?ticketid=" + json[i].TicketNumber + "' target='_blank' class='text-success' data-toggle='tooltip' data-original-title='Follow up'><i class='mdi mdi-book-open font-size-20' aria-hidden='true'></i></a>"
                } else {
                    var urlClick = "<a href='1_journey.aspx?ticketid=" + json[i].TicketNumber + "&numberid=" + ParameterNumberID + "&threadid=" + ParameterThreadID + "&channel=" + ParameterChannel + "&access=1&status=" + json[i].Status + "' class='text-success' data-toggle='tooltip' data-original-title='Follow up'><i class='ti-arrow-circle-right' aria-hidden='true'></i></a>&nbsp;<a href='TrxHistoryTicketJourney.aspx?ticketid=" + json[i].TicketNumber + "' target='_blank' class='text-success' data-toggle='tooltip' data-original-title='Follow up'><i class='mdi mdi-book-open font-size-20' aria-hidden='true'></i></a>"
                }
                if (json[i].Status == 'Open') {
                    var StatusColor = "primary"
                } else if (json[i].Status == 'Closed' || json[i].Status == 'Solved') {
                    var StatusColor = "danger"
                } else if (json[i].Status == 'Pending') {
                    var StatusColor = "warning"
                }
                var Status = "<span class='badge badge-pill badge-" + StatusColor + "' style='width: 60px;'>" + json[i].Status + "</span>"
                myTable.row.add([json[i].ID, json[i].TicketNumber, json[i].CategoryName, Status, json[i].NAME, newDate + ' ' + newTime, urlClick]).draw(false);
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function AddChannelCustomer() {
    $("#TxtChannelValue").val("");
    $("#ModalOtherChannelCustomer").modal('show');
    $("#UpdateOtherChannel").css("display", "none");
    $("#SaveOtherChannel").css("display", "block");
    $("#DeleteOtherChannel").css("display", "none");
}
function TrxAttachmentTicket(TrxUserName) {
    var ParameterID = getParameterByName("id")
    var ParameterNumberID = getParameterByName("numberid")
    if (ParameterNumberID != "") {
        if ($("#hd_customerID").val() == "") {
            var TrxCustomerIDnya = ParameterID
        } else {
            var TrxCustomerIDnya = $("#hd_customerID").val()
        }
        //var KondisiData = "where (CusTomerID='" + TrxCustomerIDnya + "' And GenesysNumber='" + ParameterNumberID + "') And TicketNumber IS NULL";
    } else {
        //var KondisiData = "where UserCreate='" + TrxCustomerIDnya + "' And CusTomerID='" + $("#hd_customerID").val() + "' And TicketNumber IS NULL";
    }
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + TrxCustomerIDnya + "', TrxSearching:'" + ParameterNumberID + "', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK322'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultComposeBodyAttachment = "";

            $('#divAttachmentTicket').empty();
            for (i = 0; i < json.length; i++) {

                if (json[i].FileType == "doc") {
                    var FileTypes = "word";
                } else if (json[i].FileType == "pdf") {
                    var FileTypes = "pdf";
                }
                else if (json[i].FileType == "xls") {
                    var FileTypes = "excel";
                }
                else if (json[i].FileType == "xlsx") {
                    var FileTypes = "excel";
                }
                else if (json[i].FileType == "zip") {
                    var FileTypes = "zip";
                }
                else if (json[i].FileType == "txt") {
                    var FileTypes = "code";
                }
                else if (json[i].FileType == "rar") {
                    var FileTypes = "zip";
                }
                else if (json[i].FileType == "png" || json[i].FileType == "PNG" || json[i].FileType == "JPG" || json[i].FileType == "jpg" || json[i].FileType == "jpeg" || json[i].FileType == "gif" || json[i].FileType == "GIF" || json[i].FileType == "BMP" || json[i].FileType == "bmp") {
                    var FileTypes = "image";
                }

                resultComposeBodyAttachment = '<ul class="mailbox-attachments clearfix">' +
                    '<li>' +
                    '<center style="font-size:10px;"><span class="badge badge-pill badge-default">' + json[i].Usercreate + '</span></center>' +
                    '<span class="mailbox-attachment-icon"><i class="fa fa-file-' + FileTypes + '-o"></i></span>' +
                    '<div class="mailbox-attachment-info">' +
                    '<a href="#" class="mailbox-attachment-name"><i class="fa fa-paperclip"></i>' + json[i].Filename.substring(0, 20) + '</a>' +
                    '<span class="mailbox-attachment-size">' + json[i].FileSize + '' +
                    '<a href=' + json[i].Path + ' target="_blank" class="btn btn-default btn-xs pull-right"><i class="fa fa-cloud-download"></i></a><a href="#" target="_blank" class="btn btn-default btn-xs pull-right" onclick=deleteAttachment(' + json[i].ID + ')><i class="fa fa-trash-o"></i></a>' +
                    '</span>' +
                    '</div>' +
                    '</li>' +
                    '<ul>'
                $('#divAttachmentTicket').append(resultComposeBodyAttachment)

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function deleteAttachment(TrxID) {
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                var form_data = JSON.stringify({ TrxID: TrxID });
                $.ajax({
                    url: "WebServiceTransaction.asmx/DeleteAttachmentTicket",
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
                                    'Delete Data Has Been Success',
                                    'success'
                                ).then(function () {
                                    TrxAttachmentTicket($("#hd_sessionLogin").val());
                                });
                            } else {
                                swal(
                                    '',
                                    'Delete Data Has Been Failed',
                                    'error'
                                ).then(function () {
                                    TrxAttachmentTicket($("#hd_sessionLogin").val());

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
            }
        });
}
function ClearTextBoxt() {
    $("#cusTomerName").val("");
    $("#cusTomerEmail").val("");
    $("#cusTomerPhone").val("");
    $("#cusTomerGender").val("");
    $("#cusTomerDate").val("");
    $("#cusTomerNIK").val("");
    $("#cusTomerNomorKartu").val("");
    $("#cusTomerBadanUsaha").val("");
}
function comboProductName() {
    var ParameterID = getParameterByName("id")
    if ($("#ContentPlaceHolder1_TrxCustomerID").val() == '') {
        var TrxCustomerID = ParameterID;
    } else {
        var TrxCustomerID = $("#ContentPlaceHolder1_TrxCustomerID").val();
    }
    var cmbDataProductName = $('#Ticket_BankAccount');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + TrxCustomerID + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK322'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultProductName = "";

            cmbDataProductName.empty();
            if (json.length == 0) {
                resultProductName = '<option value="None">None</option>';
                cmbDataProductName.append(resultProductName);
            } else {
                for (i = 0; i < json.length; i++) {
                    resultProductName = '<option value="' + json[i].ProductName + '">' + json[i].ProductName + '</option>';
                    cmbDataProductName.append(resultProductName);
                }
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function selectedThread() {
    var ParameterNumberID = getParameterByName("numberid")
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + ParameterNumberID + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK319'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x;

            for (i = 0; i < json.length; i++) {

                if (json[i].ThreadDescription == null) {
                } else {
                    CKEDITOR.instances.Ticket_Complaints.setData(json[i].ThreadDescription);
                }

                var milisegundos = parseInt(json[i].DateCreate.replace("/Date(", "").replace(")/", ""));
                var newDate = new Date(milisegundos).toLocaleDateString("en-GB");
                var newTime = new Date(milisegundos).toLocaleTimeString("en-UE");
                var DateOfTransaction = newDate.split('/');

                $("#Ticket_DateofTransaction").val(DateOfTransaction[2] + "-" + DateOfTransaction[1] + "-" + DateOfTransaction[0] + "");
                $("#Reported_Channel_Contact").val(getParameterByName("account"));

                if (getParameterByName("channel") == "Email" || getParameterByName("channel") == "EMAIL" || getParameterByName("channel") == "email") {

                    $('#DivSubjectEmail').css('display', 'block');
                    $("#Ticket_Subject_Email").val(json[i].Subject);

                    var jsonText = JSON.stringify({ tableType: "AllWhereData", tableName: "UIDESK_TrxEmailDetail", paramQuery: "where EMAIL_ID='" + getParameterByName("threadid") + "'" });
                    console.log("TrxAttachmentEmail :" + jsonText)
                    $.ajax({
                        type: "POST",
                        url: "WebServiceTransaction.asmx/GetWhereRecords",
                        data: jsonText,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                            var json = JSON.parse(data.d);
                            var i, x, resultComposeBodyAttachment = "";

                            $('#divAttachmentEmail').empty();
                            for (i = 0; i < json.length; i++) {

                                if (json[i].FILETYPE == ".doc" || json[i].FILETYPE == "doc") {
                                    var FileTypes = "word";
                                } else if (json[i].FILETYPE == ".pdf" || json[i].FILETYPE == "pdf") {
                                    var FileTypes = "pdf";
                                }
                                else if (json[i].FILETYPE == ".xls" || json[i].FILETYPE == "xls") {
                                    var FileTypes = "excel";
                                }
                                else if (json[i].FILETYPE == ".xlsx" || json[i].FILETYPE == "xlsx") {
                                    var FileTypes = "excel";
                                }
                                else if (json[i].FILETYPE == ".zip" || json[i].FILETYPE == "zip") {
                                    var FileTypes = "zip";
                                }
                                else if (json[i].FILETYPE == ".txt" || json[i].FILETYPE == "txt") {
                                    var FileTypes = "code";
                                }
                                else if (json[i].FILETYPE == ".rar" || json[i].FILETYPE == "rar") {
                                    var FileTypes = "zip";
                                }
                                else if (json[i].FILETYPE == ".png" || json[i].FILETYPE == ".PNG" || json[i].FILETYPE == "png" || json[i].FILETYPE == "PNG" || json[i].FILETYPE == ".JPG" || json[i].FILETYPE == ".jpeg" || json[i].FILETYPE == ".jpg" || json[i].FILETYPE == "JPG" || json[i].FILETYPE == "jpeg" || json[i].FILETYPE == "jpg" || json[i].FILETYPE == ".GIF" || json[i].FILETYPE == ".gif" || json[i].FILETYPE == "GIF" || json[i].FILETYPE == "gif" || json[i].FILETYPE == ".BMP" || json[i].FILETYPE == ".bmp" || json[i].FILETYPE == "BMP" || json[i].FILETYPE == "bmp") {
                                    var FileTypes = "image";
                                }

                                if (json[i].FILESIZE == null) {
                                    var TrxFILESIZE = "-";
                                }

                                resultComposeBodyAttachment = '<ul class="mailbox-attachments clearfix">' +
                                    '<li>' +
                                    '<center style="font-size:10px;"><span class="badge badge-pill badge-default">' + getParameterByName("account") + '</span></center>' +
                                    '<span class="mailbox-attachment-icon"><i class="fa fa-file-' + FileTypes + '-o"></i></span>' +
                                    '<div class="mailbox-attachment-info">' +
                                    '<a href=http://10.28.2.225/BLSmr/FileEmail/INBOX/' + json[i].EMAIL_ID + '/' + encodeData(json[i].FILENAME) + ' target="_blank" class="mailbox-attachment-name"><i class="fa fa-paperclip"></i>' + json[i].FILENAME + '</a>' +
                                    '<span class="mailbox-attachment-size">' + TrxFILESIZE + '' +
                                    '<a href=http://10.28.2.225/BLSmr/FileEmail/INBOX/' + json[i].EMAIL_ID + '/' + encodeData(json[i].FILENAME) + ' target="_blank" class="btn btn-default btn-xs pull-right"><i class="fa fa-cloud-download"></i></a>' +
                                    '</span>' +
                                    '</div>' +
                                    '</li>' +
                                    '<ul>'
                                $('#divAttachmentEmail').append(resultComposeBodyAttachment)

                            }

                        },
                        error: function (xmlHttpRequest, textStatus, errorThrown) {
                            console.log(xmlHttpRequest.responseText);
                            console.log(textStatus);
                            console.log(errorThrown);
                        }
                    })
                } else if (getParameterByName("channel") == "Outbound Call") {

                    $('#DivSubjectWhatsapp').css('display', 'none');
                    $('#DivSubjectEmail').css('display', 'none');
                    $('#DivReasonCall').css('display', 'block');
                    $("#Ticket_Subject_Whatsapp").css('display', 'none');
                    $("#Ticket_Subject_Email").css('display', 'none');
                    $("#Ticket_Reason_Call").val(json[i].Subject);

                } else if (getParameterByName("channel") == "Whatsapp") {

                    $('#Div_WAProperties').css('display', 'block');
                    $('#DivSubjectWhatsapp').css('display', 'block');
                    $('#DivSubjectEmail').css('display', 'none');
                    $('#DivReasonCall').css('display', 'none');
                    $("#Ticket_Subject_Email").css('display', 'none');
                    $("#Ticket_Reason_Call").css('display', 'none');
                    $("#Ticket_Subject_Whatsapp").val(json[i].Subject);
                    $("#Customer_Properties").val(json[i].AccountContactID);

                } else {

                }

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function ScriptResponse() {
    $("#modal-response").modal('show')
    var jsResponse = $("#Ticket_NoteAgent").val();
    document.getElementById("Response_Pre").innerHTML = jsResponse;
}
function disableAttachment() {
    $("#divFooter").css("display", "block");
}
function get_escalation() {
    if ($("#Ticket_Status").val() == "Closed") {
        //$("#Ticket_EscalationLayer").val("1")
        $("#Ticket_EscalationLayer").val("No")
        $('#Ticket_EscalationLayer').attr('disabled', true);
    } else {
        $('#Ticket_EscalationLayer').attr('disabled', false);
    }
}
function SearchingOtherChannel() {
    $("#LoaderChannel").show();
    $("#modal-searching-other").modal('show')
    var myTable = $('#TableSearchingOtherChannel').DataTable();
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'UideskIndonesia', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK323'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";

            myTable.clear().draw();
            for (i = 0; i < json.length; i++) {

                var d = new Date(json[i].DateCreate);
                var milisegundos = parseInt(json[i].DateCreate.replace("/Date(", "").replace(")/", ""));
                var newDate = new Date(milisegundos).toLocaleDateString("en-UE");
                var newTime = new Date(milisegundos).toLocaleTimeString("en-UE");

                var urlClick = "<div class='dropdown'>" +
                    "<a data-toggle='dropdown' href='#'><i class='ti-more-alt rotate-90 text-black'></i></a>" +
                    "<div class='dropdown-menu dropdown-menu-right'>" +
                    "<a class='dropdown-item' href='#' onclick=ShowOtherChannel('" + json[i].CustomerID + "','Add','Add')><i class='si-plus si'></i>New</a>" +
                    "<a class='dropdown-item' href='#' onclick=ShowOtherChannel('" + json[i].CustomerID + "','" + json[i].ValueChannel + "','" + json[i].FlagChannel + "')><i class='si-pencil si'></i>Edit</a>" +
                    "<a class='dropdown-item' href='#' onclick=ShowDeleteOtherChannel('" + json[i].CustomerID + "','" + json[i].ValueChannel + "','" + json[i].FlagChannel + "')><i class='fa fa-trash-o'></i>Delete</a>" +
                    "</div>"

                var TrxName = '<a class="hover-primary" href="#" onclick="getWS_MasterCustomerSelected(\'' + json[i].CustomerID + '\')"><strong>' + json[i].Name + '</strong></a>'
                var Status = "<span class='badge badge-pill badge-" + json[i].StatusColor + "' style='width:60px;'>" + json[i].StatusNya + "</span>"
                myTable.row.add([TrxName, json[i].ValueChannel, json[i].FlagChannel, Status, urlClick]).draw(false);
            }
            $("#LoaderChannel").hide();

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function getWS_MasterCustomerAPI(custName) {
    var listDataCustomer = $('#Ticket_ListCustomer');
    var jsonText = JSON.stringify({ keySearch: custName });
    $.ajax({
        type: "POST",
        url: "https://triciptaintegra.com/graphapi/apiicon/apiicon.php",
        contentType: "application/json; charset=utf-8",
        data: jsonText,
        dataType: "json",
        success: function (response) {

            var json = response;
            var i, x, resultSourceCustomer = "", jenisKelamin;

            listDataCustomer.empty();
            if (json.status == false) {
                resultSourceCustomer = '<div class="media media-single"><div class="media-body">' +
                    '<h6>Data not found</h6>' +
                    '</div>' +
                    '<div class="media-right">' +
                    '<a onclick="showLead()" class="btn btn-block btn-default btn-sm">Add Lead</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                listDataCustomer.append(resultSourceCustomer);

            } else {
                for (i = 0; i < json.length; i++) {
                    if (json[i].saldo == "0") {
                        jenisKelamin = '5.jpg';
                    } else {
                        jenisKelamin = '2.jpg';
                    }
                    resultSourceCustomer = '<div class="media media-single" > ' +
                        '<a href="#">' +
                        '<img class="avatar avatar-lg" src="../images/avatar/' + jenisKelamin + '" alt="...">' +
                        '</a>' +
                        "<div class='media-body'>" +
                        "<h6><a href='#' onclick=showHistoryTicket(" + json[i].company.userid + ")>Customer " + json[i].company.company + "</a></h6>" +
                        "<small class='text-fader'>" + json[i].company.phonenumber + "</small><br>" +
                        "<small class='text-fader'>" + json[i].company.billing_street + "</small>" +
                        "</div>" +
                        "<div class='media-right'>" +
                        "<a onclick=DisplayCRMleads('" + json[i].contacts[0].email + "') class='btn btn-block btn-default btn-sm'>Submit</a>" +
                        "</div>" +
                        "</div>";
                    listDataCustomer.append(resultSourceCustomer);

                }
            }
        }, complete: function () {

        },
        error: function (xhr, ajaxOptions, thrownError) {
            $("#LoaderPage").hide();
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });
}
function UIDESK_TrmCustomer(custName) {
    var selectedValue = custName;
    var listDataCustomer = $('#Ticket_ListCustomer');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK324'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceCustomer = "";

            listDataCustomer.empty();
            if (json.length == 0) {

            } else {
                for (i = 0; i < json.length; i++) {

                    if (json[i].JenisKelamin == "Male") {
                        var jenisKelamin = '5.jpg';
                    } else {
                        var jenisKelamin = '2.jpg';
                    }
                    if (json[i].Email == "" || json[i].Email == null) {
                        var Email = ""
                    } else {
                        var Email = '<small class="text-fader">' + json[i].Email + '</small></br>'
                    }
                    if (json[i].HP == "" || json[i].HP == null) {
                        var PhoneNumber = ""
                    } else {
                        var PhoneNumber = '<small class="text-fader">' + json[i].HP + '</small></br>'
                    }
                    if (json[i].PolisNumber == "" || json[i].PolisNumber == null) {
                        var PolisNumber = ""
                    } else {
                        var PolisNumber = '<small class="text-fader">' + json[i].PolisNumber + '</small>'
                    }
                    resultSourceCustomer = '<div class="media media-single" > ' +
                        '<a href="#">' +
                        '<img class="avatar avatar-lg" src="../images/avatar/' + jenisKelamin + '" alt="...">' +
                        '</a>' +
                        '<div class="media-body">' +
                        '<h6><a href="#" onclick="showHistoryTicket(' + json[i].CustomerID + ')">' + json[i].Name + '</a></h6>' +
                        '' + Email + '' +
                        '' + PhoneNumber + '' +
                        '' + PolisNumber + '' +
                        '</div>' +
                        '<div class="media-right">' +
                        '<a onclick="SearchingDataCustomer(\'' + json[i].CustomerID + '\')" class="btn btn-block btn-default btn-sm">Submit</a>' +
                        '</div>' +
                        '</div>';
                    console.log("json[i].CustomerID " + json[i].CustomerID)
                    listDataCustomer.append(resultSourceCustomer);
                }
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function UIDESK_TrmCustomerProvider(KeySearching) {
    var ValueKeySearching = KeySearching;
    var listDataProvider = $('#Ticket_ListProvider');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + ValueKeySearching + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK330'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceProvider = "";

            listDataProvider.empty();
            if (json.length == 0) {

            } else {
                for (i = 0; i < json.length; i++) {

                    //if (json[i].JenisKelamin == "Male") {
                    //    var jenisKelamin = '5.jpg';
                    //} else {
                    //    var jenisKelamin = '2.jpg';
                    //}
                    //if (json[i].Email == "" || json[i].Email == null) {
                    //    var Email = ""
                    //} else {
                    //    var Email = '<small class="text-fader">' + json[i].Email + '</small></br>'
                    //}
                    //if (json[i].HP == "" || json[i].HP == null) {
                    //    var PhoneNumber = ""
                    //} else {
                    //    var PhoneNumber = '<small class="text-fader">' + json[i].HP + '</small></br>'
                    //}
                    //if (json[i].PolisNumber == "" || json[i].PolisNumber == null) {
                    //    var PolisNumber = ""
                    //} else {
                    //    var PolisNumber = '<small class="text-fader">' + json[i].PolisNumber + '</small>'
                    //}
                    if (json[i].Alamat != null) {
                        var AlamatProvider = json[i].Alamat
                    } else {
                        var AlamatProvider = "-"
                    }
                    resultSourceProvider = '<div class="media media-single" > ' +
                        '<a href="#">' +
                        '<img class="avatar avatar-lg" src="../images/icon/kesehatan.png" alt="...">' +
                        '</a>' +
                        '<div class="media-body">' +
                        '<h6><a href="#" onclick="showHistoryTicket(' + json[i].ID + ')">' + json[i].Provider + '</a></h6>' +
                        '' + json[i].JenisProvider + '</br>' +
                        '' + AlamatProvider + '' +
                        '</div>' +
                        '<div class="media-right">' +
                        '<a onclick="ClickingProvider(\'' + json[i].ID + '\',\'' + json[i].Provider + '\',\'' + json[i].Alamat + '\',)" class="btn btn-block btn-default btn-sm">Submit</a>' +
                        '</div>' +
                        '</div>';
                    console.log("json[i].CustomerID " + json[i].ID)
                    listDataProvider.append(resultSourceProvider);
                }
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function UIDESK_TrmCustomerUpload(custName) {
    var selectedValue = custName;
    var listDataCustomer = $('#Ticket_ListCustomer');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK325'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, resultSourceCustomer = "";

            listDataCustomer.empty();
            if (json.length == 0) {
                resultSourceCustomer = '<div class="media media-single" > No data found... </div>';
                listDataCustomer.append(resultSourceCustomer);

            } else {
                var TableID = "";
                for (i = 0; i < json.length; i++) {
                    if (json[i].JenisKelamin == "Male") {
                        var jenisKelamin = '5.jpg';
                    } else {
                        var jenisKelamin = '2.jpg';
                    }
                    resultSourceCustomer = '<div class="media media-single" > ' +
                        '<a href="#">' +
                        '<img class="avatar avatar-lg" src="../images/avatar/' + jenisKelamin + '" alt="...">' +
                        '</a>' +
                        '<div class="media-body">' +
                        '<h6><a href="#" onclick="showHistoryTicket(' + json[i].ID + ')">' + json[i].Name + '</a></h6>' +
                        '<small class="text-fader">' + json[i].Email + '</small>' +
                        '</div>' +
                        '<div class="media-right">' +
                        '<a onclick="Display_TrmCustomerUpload(\'' + json[i].ID + '\')" class="btn btn-block btn-default btn-sm">Submit</a>' +
                        '</div>' +
                        '</div>';
                    TableID = json[i].ID
                    listDataCustomer.append(resultSourceCustomer);

                }
                Display_TrmCustomerUpload(TableID)
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function Display_TrmCustomerUpload(ID) {
    var selectedValue = ID;
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UIDESK325', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK325'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            for (i = 0; i < json.length; i++) {

                $("#modal-SearchUser").modal('hide')
                $('#modal-CRM').modal('show');

                $("#ContentPlaceHolder1_TrxCustomerID").val(json[i].CustomerID)
                $("#CRM_Name").val(json[i].Name)
                $("#CRM_PhoneNumber").val(json[i].HP)
                $("#CRM_Email").val(json[i].Email)
                var milisegundos = parseInt(json[i].Birth.replace("/Date(", "").replace(")/", ""));
                var newDate = new Date(milisegundos).toLocaleDateString("en-GB");
                var getDateBirth = newDate.split('/');
                $("#CRM_Dateofbirth").val(getDateBirth[2] + "-" + getDateBirth[1] + "-" + getDateBirth[0]);
                $("#selectGender").val(json[i].JenisKelamin)
                $("#CRM_PolisNumber").val(json[i].PolisNumber)
                CKEDITOR.instances.CRM_Address.setData(json[i].Alamat)

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function Post_HelpdeskDataLead() {
    var TrxAddress = CKEDITOR.instances.CRM_Address.getData()
    var TrxCRMPhoneNumber = $("#CRM_PhoneNumber").val()
    var GetPhoneLengt = TrxCRMPhoneNumber.substr(0, 1);
    if (GetPhoneLengt == "+") {
        swal("Format phone number is 62 not character (+, -) and space, Please remove and try again")
        return false
    }
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                var form_data = JSON.stringify({
                    TrxUsername: $("#hd_sessionLogin").val(), TrxCustomerID: $("#ContentPlaceHolder1_TrxCustomerID").val(),
                    TrxName: encodeData($("#CRM_Name").val()), TrxEmail: $("#CRM_Email").val(), TrxPhone: $("#CRM_PhoneNumber").val(), TrxAlamat: TrxAddress,
                    TrxBirth: $("#CRM_Dateofbirth").val(), TrxGender: $("#selectGender").val(), TrxPolisNumber: $("#CRM_PolisNumber").val()
                });
                $.ajax({
                    url: "asmx/ServiceCustomer.asmx/InsertTransactionCustomerUpload",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {

                        var json = JSON.parse(data.d);
                        for (i = 0; i < json.length; i++) {

                            $("#modal-CRM").modal('hide')
                            $("#modal-SearchUser").modal('hide')
                            $("#ContentPlaceHolder1_TrxCustomerID").val(json[i].CustomerID)
                            getWS_MasterCustomerSelected($("#ContentPlaceHolder1_TrxCustomerID").val())

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
        });
}
function TrxAttachmentEmail() {
    var ParameterChannel = getParameterByName("channel")
    var ParameterThreadID = getParameterByName("threadid")
    if (ParameterChannel == "Email") {
        $.ajax({
            type: "POST",
            url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
            data: "{TrxID:'" + ParameterThreadID + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK326'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                var json = JSON.parse(data.d);
                var i, x, resultComposeBodyAttachment = "";

                $('#divAttachmentEmail').empty();
                for (i = 0; i < json.length; i++) {

                    if (json[i].FILETYPE == ".doc" || json[i].FILETYPE == "doc") {
                        var FileTypes = "word";
                    } else if (json[i].FILETYPE == ".pdf" || json[i].FILETYPE == "pdf") {
                        var FileTypes = "pdf";
                    }
                    else if (json[i].FILETYPE == ".xls" || json[i].FILETYPE == "xls") {
                        var FileTypes = "excel";
                    }
                    else if (json[i].FILETYPE == ".xlsx" || json[i].FILETYPE == "xlsx") {
                        var FileTypes = "excel";
                    }
                    else if (json[i].FILETYPE == ".zip" || json[i].FILETYPE == "zip") {
                        var FileTypes = "zip";
                    }
                    else if (json[i].FILETYPE == ".txt" || json[i].FILETYPE == "txt") {
                        var FileTypes = "code";
                    }
                    else if (json[i].FILETYPE == ".rar" || json[i].FILETYPE == "rar") {
                        var FileTypes = "zip";
                    }
                    else if (json[i].FILETYPE == ".png" || json[i].FILETYPE == ".PNG" || json[i].FILETYPE == "png" || json[i].FILETYPE == "PNG" || json[i].FILETYPE == ".JPG" || json[i].FILETYPE == ".jpeg" || json[i].FILETYPE == ".jpg" || json[i].FILETYPE == "JPG" || json[i].FILETYPE == "jpeg" || json[i].FILETYPE == "jpg" || json[i].FILETYPE == ".GIF" || json[i].FILETYPE == ".gif" || json[i].FILETYPE == "GIF" || json[i].FILETYPE == "gif" || json[i].FILETYPE == ".BMP" || json[i].FILETYPE == ".bmp" || json[i].FILETYPE == "BMP" || json[i].FILETYPE == "bmp") {
                        var FileTypes = "image";
                    }

                    if (json[i].FILESIZE == null) {
                        var TrxFILESIZE = "-";
                    }

                    if (json[i].DIRECTION == "IN") {
                        var TrxFILENAME = '<a href=http://10.28.2.225/BLSmr/FILeEmail/INBOX/' + encodeURI(json[i].URL) + ' target="_blank" class="mailbox-attachment-name"><i class="fa fa-paperclip"></i>' + json[i].FILENAME.substring(0, 15) + '</a>'
                        var TrxDIRECTION = '<a href=http://10.28.2.225/BLSmr/FILeEmail/INBOX/' + encodeURI(json[i].URL) + ' target="_blank" class="btn btn -default btn - xs pull- right"><i class="fa fa - cloud - download"></i></a>'
                    } else if (json[i].DIRECTION == "OUT") {
                        var TrxFILENAME = '<a href=http://10.28.2.225/BLSmr/FILeEmail/OUTBOX/' + encodeURI(json[i].URL) + ' target="_blank" class="mailbox-attachment-name"><i class="fa fa-paperclip"></i>' + json[i].FILENAME.substring(0, 15) + '</a>'
                        var TrxDIRECTION = '<a href=http://10.28.2.225/BLSmr/FILeEmail/OUTBOX/' + jsonencodeURI(json[i].URL) + ' target="_blank" class="btn btn -default btn - xs pull- right"><i class="fa fa - cloud - download"></i></a>'
                    }

                    resultComposeBodyAttachment = '<ul class="mailbox-attachments clearfix">' +
                        '<li>' +
                        '<center style="font-size:10px;"><span class="badge badge-pill badge-default">' + getParameterByName("account") + '</span></center>' +
                        '<span class="mailbox-attachment-icon"><i class="fa fa-file-' + FileTypes + '-o"></i></span>' +
                        '<div class="mailbox-attachment-info">' +
                        '' + TrxFILENAME + '' +
                        '<span class="mailbox-attachment-size">' + TrxFILESIZE + '' +
                        '' + TrxDIRECTION + '' +
                        '</span>' +
                        '</div>' +
                        '</li>' +
                        '<ul>'
                    $('#divAttachmentEmail').append(resultComposeBodyAttachment)

                }

            },
            error: function (xmlHttpRequest, textStatus, errorThrown) {
                console.log(xmlHttpRequest.responseText);
                console.log(textStatus);
                console.log(errorThrown);
            }
        })
    }
}
function get_cmbChannelHistory(value) {
    var selectedText = $("#Select_Channel_History").find("option:selected").text();
    var selectedValue = $("#Select_Channel_History").val();
    $("#ContentPlaceHolder1_TrxChannel").val(selectedValue)
    TableHistoryTicket();
}
function RedirectPaging(TicketNumber, Status) {
    $("#modal-channel-history").modal('show')
    $("#ContentPlaceHolder1_TrxTicketNumber").val(TicketNumber)
    $("#ContentPlaceHolder1_TrxStatus").val(Status)
}
function submitRedirectPaging() {
    if ($("#ContentPlaceHolder1_TrxChannel").val() == "" || $("#ContentPlaceHolder1_TrxChannel").val() == "Select Channel") {
        swal("Channel is empty");
        return false;
    }
    if ($("#Channel_History_Account").val() == "") {
        swal("Channel Account is empty");
        return false;
    }
    var ConvertTrxNumberID = $("#ContentPlaceHolder1_TrxTicketNumber").val() + $("#ContentPlaceHolder1_TrxNumberID").val()
    var ConvertTrxThreadID = $("#ContentPlaceHolder1_TrxTicketNumber").val() + $("#ContentPlaceHolder1_TrxThreadID").val()
    if ($("#ContentPlaceHolder1_TrxCustomerID").val() == "") {
        var TrxCustomerID = $("#hd_customerID").val()
    } else {
        var TrxCustomerID = $("#ContentPlaceHolder1_TrxCustomerID").val()
    }
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                var form_data = JSON.stringify({
                    TrxTicketNumber: $("#ContentPlaceHolder1_TrxTicketNumber").val(), TrxChannel: $("#ContentPlaceHolder1_TrxChannel").val(), TrxChannelAccount: $("#Channel_History_Account").val(),
                    TrxNumberID: ConvertTrxNumberID, TrxUserName: $("#hd_sessionLogin").val(), TrxThreadID: ConvertTrxThreadID,
                    TrxCustomerID: TrxCustomerID, TrxCustomerName: $("#Ticket_FullName").val()
                });
                $.ajax({
                    url: "asmx/ServiceThread.asmx/InsertThreadTemporary",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function () {
                        console.log(form_data)
                        window.location.href = "1_journey.aspx?ticketid=" + $("#ContentPlaceHolder1_TrxTicketNumber").val() + "&numberid=" + ConvertTrxNumberID + "&threadid=" + ConvertTrxThreadID + "&channel=" + $("#ContentPlaceHolder1_TrxChannel").val() + "&access=1&status=" + $("#ContentPlaceHolder1_TrxStatus").val() + ""
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
function PreviewEmail(TrxEmailID) {
    document.getElementById("framefile_html").src = "http://10.28.2.225/BLSmr/FileEmail/INBOX/" + TrxEmailID + "/file.html"
    $("#modal-center-email").modal('show')
}
function PreviewWhatsApp(TrxWhatsAppID) {
    document.getElementById("framefile_html").src = "http://10.28.2.225/BLSmr/apps/template/wa.html?convid=" + TrxWhatsAppID + ""
    $("#modal-center-email").modal('show')
}
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

    var files = $(this).prop("files");
    var data = new FormData();

    var request;
    var result;
    var modal = $(this).closest(".modal");
    var itemid = modal.data("itemid");

    if ($("#hd_customerID").val() == "") {
        swal(
            '',
            'Please Select Data Customer',
            'error'
        ).then(function () {
            $(this).val('');
            return false;
        });
        return false;
    }

    for (var i = 0; i < files.length; i++) {

        var filesizing = this.files[0].size / 1024 / 1024
        if (filesizing > 10) {
            swal(
                '',
                'Please upload file less than 10 MB. Thanks!',
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
        data.append("Username", $("#hd_sessionLogin").val());
        data.append("numberid", getParameterByName('numberid'));
        data.append("customerid", $("#hd_customerID").val());

        request = $.ajax({

            type: "POST",
            enctype: 'multipart/form-data',
            url: "WebServiceTransaction.asmx/UploadFileAttachmentTicket",
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
            TrxAttachmentTicket($("#hd_sessionLogin").val());
            TrxAttachmentEmail();

        });

        request.fail(function (response) {
            console.log(response.responseText);
        });
        request.always(function () {
            data.delete(itemid);
            data.delete(files[i]);
        });
    }
});
function Get_ProductName(TrxID) {
    var selectedText = $("#Ticket_ProductType").find("option:selected").text();
    var selectedValue = $("#Ticket_ProductType").val();

    var cmbProductName = $('#Ticket_ProductName');
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + selectedValue + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK327'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";

            cmbProductName.empty()
            for (i = 0; i < json.length; i++) {

                result = '<option value="' + json[i].Product_Name + '">' + json[i].Product_Name + '</option>';
                cmbProductName.append(result);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function ValidasiDataCustomer(ChannelAccount) {
    if (ChannelAccount == null || ChannelAccount == "") {

    } else {
        var form_data = JSON.stringify({ filterData: ChannelAccount });
        $.ajax({
            url: "asmx/ServiceCustomer.asmx/ValidasiDataCustomer",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: form_data,
            success: function (data) {

                var json = JSON.parse(data.d);
                var i, x = "";

                for (i = 0; i < json.length; i++) {

                    if (json[i].Result == "PopupKK") {
                        console.log(json[i].Result)
                        console.log(json[i].TrxCustomerID)

                        $("#ContentPlaceHolder1_TrxCustomerID").val(json[i].TrxCustomerID)
                        getWS_MasterCustomerSelected($("#ContentPlaceHolder1_TrxCustomerID").val())

                    } else if (json[i].Result == "DataAdaDiUpload") {
                        console.log(json[i].Result)
                        console.log(json[i].TrxCustomerID)

                        $("#Ticket_SearchCustomer").val(ChannelAccount)
                        UIDESK_TrmCustomerUpload(ChannelAccount)
                        $("#modal-SearchUser").modal('show');

                    } else if (json[i].Result == "DataGkAdaDiUpload") {

                        $("#chat-box-body").empty()
                        $("#cusTomerPhone").val(ChannelAccount)
                        $("#modal-center").modal('show');
                        $("#modal-SearchUser").modal('show');
                        $("#modal-SearchAPI").modal('hide');


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
}
function SearchingDataCustomer(ChannelAccount) {
    $("#ButtonSaveDataProfile").css("display", "none")
    if (ChannelAccount == null || ChannelAccount == "") {

    } else {
        var form_data = JSON.stringify({ filterData: ChannelAccount });
        $.ajax({
            url: "asmx/ServiceCustomer.asmx/SearchingDataCustomer",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: form_data,
            success: function (data) {

                var json = JSON.parse(data.d);
                var i, x = "";

                for (i = 0; i < json.length; i++) {

                    if (json[i].Result == "PopupKK") {
                        console.log(json[i].Result)
                        console.log(json[i].TrxCustomerID)

                        $("#ContentPlaceHolder1_TrxCustomerID").val(json[i].TrxCustomerID)
                        getWS_MasterCustomerSelected($("#ContentPlaceHolder1_TrxCustomerID").val())

                    } else if (json[i].Result == "DataAdaDiUpload") {
                        console.log("ZAL" + json[i].Result)
                        console.log(json[i].TrxCustomerID)

                        $("#modal-SearchUser").modal('hide');
                        $("#Ticket_SearchCustomer").val(ChannelAccount)
                        UIDESK_TrmCustomerUpload(ChannelAccount)

                    } else if (json[i].Result == "DataGkAdaDiUpload") {

                        $("#cusTomerPhone").val(ChannelAccount)
                        $("#modal-SearchAPI").modal('show');
                        $("#modal-SearchUser").modal('hide');

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
}
function modalAPI() {
    $("#modal-SearchAPI").modal('show')
    $("#chat-box-body").empty()
    $('.nav-item a[href="#navpills-5"]').tab('show')
    $("#chat-box-bodyDrop").empty()
}
function OnChange_Profile() {
    CleasingObject();
    $("#API_FilterValue").attr("disabled", false);
    if ($("#ComboFilter").val() != "1") {
        $("#HeaderFilter").empty()
        $("#HeaderFilter").append("Nomor Polis")
    } else {
        $("#HeaderFilter").empty()
        $("#HeaderFilter").append("NIK")
    }
    if ($("#API_FilterValue").val() != "") {
        CleasingObject();
    }
}
function Get_ProfileAPI() {
    var selectedText = $("#ComboType").find("option:selected").text();
    var selectedValue = $("#ComboType").val();
    if (selectedValue == "1") {
        $('.nav-item a[href="#navpills-5"]').tab('show')
        if ($("#ComboFilter").val() == "Select" || $("#ComboFilter").val() == "") {
            swal(
                '',
                'Filter is not empty',
                'info'
            ).then(function () {
                return false;
            });
            return false;
        }
        $("#NameReported").empty()
        $("#NameReported").append("Full Name Reported")
        $("#EmailReported").empty()
        $("#EmailReported").append("Email Reported")
        $("#ContactNumberReported").empty()
        $("#ContactNumberReported").append("Contact Number Reported")
        $("#ContactAccountReported").empty()
        $("#ContactAccountReported").append("Contact Account Reported")
    } else {
        $('.nav-item a[href="#navpills-6"]').tab('show')
        if ($("#ComboProvider").val() == "Select" || $("#ComboProvider").val() == "") {
            swal(
                '',
                'Member Number is not empty',
                'info'
            ).then(function () {
                return false;
            });
            return false;
        }
        $("#NameReported").empty()
        $("#NameReported").append("RS Name Reported")
        $("#EmailReported").empty()
        $("#EmailReported").append("RS Email Reported")
        $("#ContactNumberReported").empty()
        $("#ContactNumberReported").append("RS Contact Number Reported")
        $("#ContactAccountReported").empty()
        $("#ContactAccountReported").append("RS Contact Account Reported")

        return false;
    }

    if ($("#ComboFilter").val() == "1") {
        if ($("#API_FilterValue").val() == "" || $("#API_FilterValue").val() == null) {
            swal(
                '',
                'NIK is not empty',
                'info'
            ).then(function () {
                return false;
            });
            return false;
        }
        var FormatNumber = /^[0-9]+$/;
        if ($("#API_FilterValue").val().match(FormatNumber)) {
            var NIKLengt = $("#API_FilterValue").val().toString().length;
            if (NIKLengt == '16') {

            } else {
                swal(
                    '',
                    'Format NIK Number is 16 Digit',
                    'info'
                ).then(function () {
                    $("#API_FilterValue").val("");
                    return false;
                });
                return false;
            }
        } else {
            swal(
                '',
                'Format NIK Number is Numeric',
                'info'
            ).then(function () {
                $("#API_FilterValue").val("");
                return false;
            });
            return false;
        }
        var jsonText = JSON.stringify({ NIK: $("#API_FilterValue").val(), NoPolis: "" });
        $.ajax({
            type: "POST",
            //url: "https://cc-api-dev.brilife.co.id/contactserviceapi/profiling/profilingPolisSearch",
            url: "https://cc-api.brilife.co.id/contactserviceapi/profiling/profilingPolisSearch",
            contentType: "application/json; charset=utf-8",
            data: jsonText,
            dataType: "json",
            success: function (response) {
                var json = response;
                console.log(json)
                console.log("Success POST...");
                var i, x;

                if (json.ResponseMessage == "Success") {
                    for (i = 0; i < json.ResponseData.length; i++) {

                        $("#Ticket_FullName").val(json.ResponseData[i].FullName)
                        $("#Ticket_Email").val(json.ResponseData[i].EmailAddress)
                        $("#Ticket_Phone").val(json.ResponseData[i].NomorHPPempol)
                        $("#Ticket_NIK").val($("#API_FilterValue").val())
                        if (json.ResponseData[i].DateOfBirth == "" || json.ResponseData[i].DateOfBirth == "NULL" || json.ResponseData[i].DateOfBirth == "1900-01-01") {
                            $("#Ticket_Dateofbirth").val("Data Tidak Tersedia")
                        } else {
                            $("#Ticket_Dateofbirth").val(json.ResponseData[i].DateOfBirth)
                        }
                        if (json.ResponseData[i].Gender == "Pria") {
                            var Def_Gender = "Male"
                        } else {
                            var Def_Gender = "Female"
                        }
                        $('#Gender' + Def_Gender + '_Ticket').prop('checked', true);
                        if (json.ResponseData[i].Address == "" || json.ResponseData[i].Address == "0") {
                            CKEDITOR.instances.Ticket_Address.setData("Data Tidak Tersedia")
                        } else {
                            CKEDITOR.instances.Ticket_Address.setData(json.ResponseData[i].Address)
                        }
                        $("#ContentPlaceHolder1_HD_API_Gender").val(Def_Gender);
                        $("#ContentPlaceHolder1_HD_API_NomorPolis").val(json.ResponseData[i].PolisNumber);

                    }
                    TrmListPolisNumber($("#API_FilterValue").val());

                } else {
                    swal($("#API_FilterValue").val() + "Data Not Found")
                }

            }, complete: function () {
                //back to normal!               			
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(xhr.responseText);
                console.log(thrownError);
                swal(
                    '' + $("#API_FilterValue").val() + '',
                    'Data NIK Not Found !',
                    'error'
                ).then(function () {
                    return false;
                });
            }
        });

    } else {

        if ($("#API_FilterValue").val() == "" || $("#API_FilterValue").val() == "NULL") {
            swal(
                '',
                'Nomor Polis is not empty',
                'error'
            ).then(function () {
                return false;
            });
            return false;
        }
        var FormatNumber = /^[0-9]+$/;
        if ($("#API_FilterValue").val().match(FormatNumber)) {
            var NIKLengt = $("#API_FilterValue").val().toString().length;
            if (NIKLengt < '8') {
                swal(
                    '',
                    'Format Nomor Polis must be greater than 8 Digits',
                    'error'
                ).then(function () {
                    $("#API_FilterValue").val("");
                    return false;
                });
                return false;
            } else if (NIKLengt > '16') {
                swal(
                    '',
                    'Format Nomor Polis cannot be bigger than 16 Digits',
                    'error'
                ).then(function () {
                    $("#API_FilterValue").val("");
                    return false;
                });
                return false;
            }
        } else {
            swal(
                '',
                'Format Nomor Polis is Numeric',
                'error'
            ).then(function () {
                $("#API_FilterValue").val("");
                return false;
            });
            return false;
        }

        var settings = {
            //"url": "https://cc-api-dev.brilife.co.id/contactserviceapi/profiling/profilingPolisSearch",
            "url": "https://cc-api.brilife.co.id/contactserviceapi/profiling/profilingPolisSearch",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "NIK": "\"\"",
                "NoPolis": "" + $("#API_FilterValue").val() + ""
            }
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
            var json = response;
            console.log(json)
            console.log("Success POST...");
            var i, x;
            if (json.ResponseMessage == "Success") {
                for (i = 0; i < json.ResponseData.length; i++) {

                    $("#Ticket_FullName").val(json.ResponseData[i].FullName)
                    $("#Ticket_Email").val(json.ResponseData[i].EmailAddress)
                    $("#Ticket_Phone").val(json.ResponseData[i].NomorHPPempol)
                    $("#Ticket_NIK").val(json.ResponseData[i].NIK)
                    if (json.ResponseData[i].DateOfBirth == "" || json.ResponseData[i].DateOfBirth == "NULL" || json.ResponseData[i].DateOfBirth == "1900-01-01") {
                        $("#Ticket_Dateofbirth").val("Data Tidak Tersedia")
                    } else {
                        $("#Ticket_Dateofbirth").val(json.ResponseData[i].DateOfBirth)
                    }
                    if (json.ResponseData[i].Gender == "Pria") {
                        var Def_Gender = "Male"
                    } else {
                        var Def_Gender = "Female"
                    }
                    $('#Gender' + Def_Gender + '_Ticket').prop('checked', true);
                    if (json.ResponseData[i].Address == "" || json.ResponseData[i].Address == "0") {
                        CKEDITOR.instances.Ticket_Address.setData("Data Tidak Tersedia")
                    } else {
                        CKEDITOR.instances.Ticket_Address.setData(json.ResponseData[i].Address)
                    }
                    $("#ContentPlaceHolder1_HD_API_Gender").val(Def_Gender);
                    $("#ContentPlaceHolder1_HD_API_NomorPolis").val(json.ResponseData[i].PolisNumber);

                }
                TrmListPolisNumber($("#API_FilterValue").val());


            } else {
                swal(
                    '' + $("#API_FilterValue").val() + '',
                    'Data Nomor Polis Not Found !',
                    'error'
                ).then(function () {
                    return false;
                });
            }
        });

        Click_DetailNomorPolis($("#API_FilterValue").val())
    }

    $("#ButtonSaveDataProfile").css("display", "block")
    $("#modal-SearchAPI").modal('hide')

    var drop = ""
    drop = '<div id="chat-box-body" onclick="modalAPI()">' +
        '<div id="chat-circle" class="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70">' +
        '<div id="chat-overlay"></div>' +
        '<span class="mdi mdi-lan-connect font-size-30"></span>' +
        '</div>' +
        '</div>'
    $("#chat-box-bodyDrop").append(drop)
}
function TrmListPolisNumber(ValueID) {
    if ($("#ComboFilter").val() == "1") {
        var jsonText = JSON.stringify({ NIK: ValueID });
    } else {
        var jsonText = JSON.stringify({ NoPolis: ValueID });
    }
    var myTable = $('#TrmPolisNumber').DataTable();
    $.ajax({
        type: "POST",
        //url: "https://cc-api-dev.brilife.co.id/contactserviceapi/profiling/profilingPolisList",
        url: "https://cc-api.brilife.co.id/contactserviceapi/profiling/profilingPolisList",
        contentType: "application/json; charset=utf-8",
        data: jsonText,
        dataType: "json",
        success: function (response) {
            var json = response;
            var i, x, result = "";

            myTable.clear().draw();
            for (i = 0; i < json.ResponseData.length; i++) {

                var TrxAction = "<a href='#' style='cursor: pointer;' class='text-primary' data-toggle='tooltip' data-original-title='Delete' onclick=Click_DetailNomorPolis('" + json.ResponseData[i].NomorPolis + "') tooltip='Klik Detail Nomor Polis'><i class='ti-arrow-right' aria-hidden='true' data-toggle='tooltip' title='Klik Detail Nomor Polis'></i></a>"
                myTable.row.add([TrxAction, json.ResponseData[i].NomorPolis, json.ResponseData[i].NomorSPAJ, json.ResponseData[i].NamaPempol, json.ResponseData[i].NamaProduk]).draw(false);

            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function Click_DetailNomorPolis(NomorPolis) {
    var jsonText = JSON.stringify({ NoPolis: NomorPolis });
    $.ajax({
        type: "POST",
        //url: "https://cc-api-dev.brilife.co.id/contactserviceapi/profiling/profilingPolisDetail",
        url: "https://cc-api.brilife.co.id/contactserviceapi/profiling/profilingPolisDetail",
        contentType: "application/json; charset=utf-8",
        data: jsonText,
        dataType: "json",
        success: function (response) {

            var json = response;
            var i, x;

            if (json.ResponseMessage == "Success") {
                if ($("#ComboFilter").val() == "2") {
                    if (json.ResponseData.DataPolis.NIKPempol == "" || json.ResponseData.DataPolis.NIKPempol == "NULL" || json.ResponseData.DataPolis.NIKPempol == "0") {
                    } else {
                        TrmListPolisNumber(json.ResponseData.DataPolis.NIKPempol)
                    }
                    if ($("#Ticket_NIK").val() == "") {
                        if (json.ResponseData.DataPolis.NIKPempol == "" || json.ResponseData.DataPolis.NIKPempol == "NULL" || json.ResponseData.DataPolis.NIKPempol == "0") {
                            $("#Ticket_NIK").val()
                        } else {
                            $("#Ticket_NIK").val(json.ResponseData.DataPolis.NIKPempol)
                        }
                    }
                }
                if (json.ResponseData.DataPolis.NamaPempol == "" || json.ResponseData.DataPolis.NamaPempol == "NULL" || json.ResponseData.DataPolis.NamaPempol == "0") {
                    $("#API_Nama").val("Data Tidak Tersedia")
                } else {
                    $("#API_Nama").val(json.ResponseData.DataPolis.NamaPempol)
                }
                if (json.ResponseData.DataPolis.StatusPolis == "" || json.ResponseData.DataPolis.StatusPolis == "NULL" || json.ResponseData.DataPolis.StatusPolis == "0") {
                    $("#API_StatusPolis").val("Data Tidak Tersedia")
                } else {
                    $("#API_StatusPolis").val(json.ResponseData.DataPolis.StatusPolis)
                }
                if (json.ResponseData.DataPolis.PremiDasar == "" || json.ResponseData.DataPolis.PremiDasar == "NULL" || json.ResponseData.DataPolis.PremiDasar == "0") {
                    $("#API_PremiDasar").val("Data Tidak Tersedia")
                } else {
                    $("#API_PremiDasar").val(json.ResponseData.DataPolis.PremiDasar)
                }
                if (json.ResponseData.DataPolis.FlagingNasabah == "" || json.ResponseData.DataPolis.FlagingNasabah == "NULL" || json.ResponseData.DataPolis.FlagingNasabah == "0") {
                    $("#API_FlaggingNasabah").val("Data Tidak Tersedia")
                } else {
                    $("#API_FlaggingNasabah").val(json.ResponseData.DataPolis.FlagingNasabah)
                }
                if (json.ResponseData.DataPolis.JenisKelaminPempol == "" || json.ResponseData.DataPolis.JenisKelaminPempol == "NULL" || json.ResponseData.DataPolis.JenisKelaminPempol == "0") {
                    $("#API_Gender").val("Data Tidak Tersedia")
                } else {
                    $("#API_Gender").val(json.ResponseData.DataPolis.JenisKelaminPempol)
                }
                if (json.ResponseData.DataPolis.UangPertanggungan == "" || json.ResponseData.DataPolis.UangPertanggungan == "NULL" || json.ResponseData.DataPolis.UangPertanggungan == "0") {
                    $("#API_UangPertanggungan").val("Data Tidak Tersedia")
                } else {
                    $("#API_UangPertanggungan").val(json.ResponseData.DataPolis.UangPertanggungan)
                }
                if (json.ResponseData.DataPolis.PremiTopup == "" || json.ResponseData.DataPolis.PremiTopup == "NULL" || json.ResponseData.DataPolis.PremiTopup == "0") {
                    $("#API_PremiDasarTopup").val("Data Tidak Tersedia")
                } else {
                    $("#API_PremiDasarTopup").val(json.ResponseData.DataPolis.PremiTopup)
                }
                if ($("#Ticket_Phone").val() == "" || $("#Ticket_Phone").val() == "0") {
                    $("#API_NomorHPPemegangPolis").val("Data Tidak Tersedia")
                } else {
                    $("#API_NomorHPPemegangPolis").val($("#Ticket_Phone").val())
                }
                if (json.ResponseData.DataPolis.TglLahirPempol == "" || json.ResponseData.DataPolis.TglLahirPempol == "NULL" || json.ResponseData.DataPolis.TglLahirPempol == "1900-01-01") {
                    $("#API_DOB").val("Data Tidak Tersedia")
                } else {
                    $("#API_DOB").val(json.ResponseData.DataPolis.TglLahirPempol)
                }
                if (json.ResponseData.DataPolis.TglMulaiPolis == "" || json.ResponseData.DataPolis.TglMulaiPolis == "NULL" || json.ResponseData.DataPolis.TglMulaiPolis == "1900-01-01") {
                    $("#API_TglMulaiPolis").val("Data Tidak Tersedia")
                } else {
                    $("#API_TglMulaiPolis").val(json.ResponseData.DataPolis.TglMulaiPolis)
                }
                if (json.ResponseData.DataPolis.MasaBayar == "" || json.ResponseData.DataPolis.MasaBayar == "NULL" || json.ResponseData.DataPolis.MasaBayar == "0") {
                    $("#API_MasaBayar").val("Data Tidak Tersedia")
                } else {
                    $("#API_MasaBayar").val(json.ResponseData.DataPolis.MasaBayar)
                }
                if ($("#Ticket_Email").val() == "" || $("#Ticket_Email").val() == "0") {
                    $("#API_EmailPemegangPolis").val("Data Tidak Tersedia")
                } else {
                    $("#API_EmailPemegangPolis").val($("#Ticket_Email").val())
                }
                if (json.ResponseData.DataPolis.NIKPempol == "" || json.ResponseData.DataPolis.NIKPempol == "NULL" || json.ResponseData.DataPolis.NIKPempol == "0") {
                    $("#API_NIK").val("Data Tidak Tersedia")
                } else {
                    $("#API_NIK").val(json.ResponseData.DataPolis.NIKPempol)
                }
                if (json.ResponseData.DataPolis.TglBerakhirPolis == "" || json.ResponseData.DataPolis.TglBerakhirPolis == "NULL" || json.ResponseData.DataPolis.TglBerakhirPolis == "1900-01-01") {
                    $("#API_TglBerakhirPolis").val("Data Tidak Tersedia")
                } else {
                    $("#API_TglBerakhirPolis").val(json.ResponseData.DataPolis.TglBerakhirPolis)
                }
                if (json.ResponseData.DataPolis.CaraBayar == "" || json.ResponseData.DataPolis.CaraBayar == "NULL" || json.ResponseData.DataPolis.CaraBayar == "0") {
                    $("#API_CaraBayar").val("Data Tidak Tersedia")
                } else {
                    $("#API_CaraBayar").val(json.ResponseData.DataPolis.CaraBayar)
                }
                if (CKEDITOR.instances.Ticket_Address.getData() == "" || CKEDITOR.instances.Ticket_Address.getData() == "0") {
                    $("#API_AlamatIdentitasPemegangPolis").val("Data Tidak Tersedia")
                } else {
                    var DataAlamat = CKEDITOR.instances.Ticket_Address.getData()
                    var ReplaceDataAlamat = DataAlamat.replace('<p>', '').replace('</p>', ' ');
                    $("#API_AlamatIdentitasPemegangPolis").val(ReplaceDataAlamat)
                }
                if (json.ResponseData.DataPolis.NamaGadisIbuKandung == "" || json.ResponseData.DataPolis.NamaGadisIbuKandung == "NULL" || json.ResponseData.DataPolis.NamaGadisIbuKandung == "0") {
                    $("#API_IbuKandung").val("Data Tidak Tersedia")
                } else {
                    $("#API_IbuKandung").val(json.ResponseData.DataPolis.NamaGadisIbuKandung)
                }
                if (json.ResponseData.DataPolis.TglKirimEPolis == "" || json.ResponseData.DataPolis.TglKirimEPolis == "NULL" || json.ResponseData.DataPolis.TglKirimEPolis == "1900-01-01") {
                    $("#API_TglKirimEPolis").val("Data Tidak Tersedia")
                } else {
                    $("#API_TglKirimEPolis").val(json.ResponseData.DataPolis.TglKirimEPolis)
                }
                if (json.ResponseData.DataPolis.JenisPembayaran == "" || json.ResponseData.DataPolis.JenisPembayaran == "NULL" || json.ResponseData.DataPolis.JenisPembayaran == "0") {
                    $("#API_JenisPembayaran").val("Data Tidak Tersedia")
                } else {
                    $("#API_JenisPembayaran").val(json.ResponseData.DataPolis.JenisPembayaran)
                }
                if (json.ResponseData.DataPolis.Core == "" || json.ResponseData.DataPolis.Core == "NULL" || json.ResponseData.DataPolis.Core == "0") {
                    $("#API_Core").val("Data Tidak Tersedia")
                } else {
                    $("#API_Core").val(json.ResponseData.DataPolis.Core)
                }
                if (json.ResponseData.DataPolis.NamaTertanggung == "" || json.ResponseData.DataPolis.NamaTertanggung == "NULL" || json.ResponseData.DataPolis.NamaTertanggung == "0") {
                    $("#API_NamaTertanggung").val("Data Tidak Tersedia")
                } else {
                    $("#API_NamaTertanggung").val(json.ResponseData.DataPolis.NamaTertanggung)
                }
                if (json.ResponseData.DataPolis.MasaAsuransi == "" || json.ResponseData.DataPolis.MasaAsuransi == "NULL" || json.ResponseData.DataPolis.MasaAsuransi == "0") {
                    $("#API_MasaAsuransi").val("Data Tidak Tersedia")
                } else {
                    $("#API_MasaAsuransi").val(json.ResponseData.DataPolis.MasaAsuransi)
                }
                if (json.ResponseData.DataPolis.NomorRekening == "" || json.ResponseData.DataPolis.NomorRekening == "NULL" || json.ResponseData.DataPolis.NomorRekening == "0") {
                    $("#API_NomorRekening").val("Data Tidak Tersedia")
                } else {
                    $("#API_NomorRekening").val(json.ResponseData.DataPolis.NomorRekening)
                }
                if (json.ResponseData.DataPolis.FlagMyAccess == "" || json.ResponseData.DataPolis.FlagMyAccess == "NULL" || json.ResponseData.DataPolis.FlagMyAccess == "0") {
                    $("#API_AccountsMyAccess").val("Data Tidak Tersedia")
                } else {
                    $("#API_AccountsMyAccess").val(json.ResponseData.DataPolis.FlagMyAccess)
                }
                if (json.ResponseData.DataPolis.TglLahirTertanggung == "" || json.ResponseData.DataPolis.TglLahirTertanggung == "NULL" || json.ResponseData.DataPolis.TglLahirTertanggung == "1900-01-01") {
                    $("#API_TglLahirTertanggung").val("Data Tidak Tersedia")
                } else {
                    $("#API_TglLahirTertanggung").val(json.ResponseData.DataPolis.TglLahirTertanggung)
                }
                if (json.ResponseData.DataPolis.NomorBriva == "" || json.ResponseData.DataPolis.NomorBriva == "NULL" || json.ResponseData.DataPolis.NomorBriva == "0") {
                    $("#API_NomorVirtualAccount").val("Data Tidak Tersedia")
                } else {
                    $("#API_NomorVirtualAccount").val(json.ResponseData.DataPolis.NomorBriva)
                }
                if (json.ResponseData.DataPolis.NamaBank == "" || json.ResponseData.DataPolis.NamaBank == "NULL" || json.ResponseData.DataPolis.NamaBank == "0") {
                    $("#API_NamaBank").val("Data Tidak Tersedia")
                } else {
                    $("#API_NamaBank").val(json.ResponseData.DataPolis.NamaBank)
                }
                if (json.ResponseData.DataPolis.JenisKelaminTertanggung == "" || json.ResponseData.DataPolis.JenisKelaminTertanggung == "NULL" || json.ResponseData.DataPolis.JenisKelaminTertanggung == "0") {
                    $("#API_JenisKelaminTertanggung").val("Data Tidak Tersedia")
                } else {
                    $("#API_JenisKelaminTertanggung").val(json.ResponseData.DataPolis.JenisKelaminTertanggung)
                }
                if (json.ResponseData.DataPolis.NamaTenagaPenjual == "" || json.ResponseData.DataPolis.NamaTenagaPenjual == "NULL" || json.ResponseData.DataPolis.NamaTenagaPenjual == "0") {
                    $("#API_NamaTenagaPenjualan").val("Data Tidak Tersedia")
                } else {
                    $("#API_NamaTenagaPenjualan").val(json.ResponseData.DataPolis.NamaTenagaPenjual)
                }
                if (json.ResponseData.DataPolis.NamaPemilikRekening == "" || json.ResponseData.DataPolis.NamaPemilikRekening == "NULL" || json.ResponseData.DataPolis.NamaPemilikRekening == "0") {
                    $("#API_NamaPemilikRekening").val("Data Tidak Tersedia")
                } else {
                    $("#API_NamaPemilikRekening").val(json.ResponseData.DataPolis.NamaPemilikRekening)
                }

                var myTrmWaris = $('#TrmWaris').DataTable();
                myTrmWaris.clear().draw();
                for (j = 0; j < json.ResponseData.AhliWaris.length; j++) {
                    myTrmWaris.row.add([json.ResponseData.AhliWaris[j].NamaAhliWaris, json.ResponseData.AhliWaris[j].Persentase]).draw(false);
                }

                var myTrmManfaat = $('#TrmManfaat').DataTable();
                myTrmManfaat.clear().draw();
                for (j = 0; j < json.ResponseData.ManfaatAsuransi.length; j++) {
                    myTrmManfaat.row.add([json.ResponseData.ManfaatAsuransi[j].NamaManfaat, json.ResponseData.ManfaatAsuransi[j].UP]).draw(false);
                }

                var myTrmDarlink = $('#TrmDarlink').DataTable();
                myTrmDarlink.clear().draw();
                for (j = 0; j < json.ResponseData.AlokasiInvestasi.length; j++) {
                    myTrmDarlink.row.add([json.ResponseData.AlokasiInvestasi[j].JenisInvestasi, json.ResponseData.AlokasiInvestasi[j].PersenAlokasi,
                    json.ResponseData.AlokasiInvestasi[j].SaldoUnit, json.ResponseData.AlokasiInvestasi[j].NilaiNAB,
                    json.ResponseData.AlokasiInvestasi[j].SaldoRupiah, json.ResponseData.AlokasiInvestasi[j].TanggalNAB]).draw(false);
                }

                var myTrmPremi = $('#TrmPremi').DataTable();
                myTrmPremi.clear().draw();
                for (j = 0; j < json.ResponseData.HistorisPremi.length; j++) {
                    myTrmPremi.row.add([json.ResponseData.HistorisPremi[j].KuitansiKe, json.ResponseData.HistorisPremi[j].TglJatuhTempo,
                    json.ResponseData.HistorisPremi[j].TglPelunasan, json.ResponseData.HistorisPremi[j].Nominal]).draw(false);
                }

                var myTrmTunai = $('#TrmTunai').DataTable();
                myTrmTunai.clear().draw();
                for (j = 0; j < json.ResponseData.NilaiTunai.length; j++) {
                    myTrmTunai.row.add([json.ResponseData.NilaiTunai[j].TahunKe, json.ResponseData.NilaiTunai[j].Nominal]).draw(false);
                }

            } else {
                swal(json.ResponseMessage)
            }
        }, complete: function () {
            //back to normal!               			
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            console.log(thrownError);
            swal(
                '' + $("#API_FilterValue").val() + '',
                'Data Nomor Polis Not Found !',
                'error'
            ).then(function () {
                return false;
            });
        }
    });
}
function CleasingObject() {
    $("#API_FilterValue").val("");
    $("#Ticket_FullName").val("")
    $("#Ticket_NIK").val("")
    $("#Ticket_Email").val("")
    $("#Ticket_Phone").val("")
    $("#Ticket_Dateofbirth").val("")
    $('#GenderMale_Ticket').prop('checked', false);
    $('#GenderFemale_Ticket').prop('checked', false);
    CKEDITOR.instances.Ticket_Address.setData("")
    var myListPolisNumber = $('#TrmPolisNumber').DataTable();
    myListPolisNumber.clear().draw();
    // Detail Polis Number
    $("#API_Nama").val("")
    $("#API_StatusPolis").val("")
    $("#API_PremiDasar").val("")
    $("#API_FlaggingNasabah").val("")
    $("#API_Gender").val("")
    $("#API_UangPertanggungan").val("")
    $("#API_PremiDasarTopup").val("")
    $("#API_NomorHPPemegangPolis").val("")
    $("#API_DOB").val("")
    $("#API_TglMulaiPolis").val("")
    $("#API_MasaBayar").val("")
    $("#API_EmailPemegangPolis").val("")
    $("#API_NIK").val("")
    $("#API_TglBerakhirPolis").val("")
    $("#API_CaraBayar").val("")
    $("#API_AlamatIdentitasPemegangPolis").val("")
    $("#API_IbuKandung").val("")
    $("#API_TglKirimEPolis").val("")
    $("#API_JenisPembayaran").val("")
    $("#API_Core").val("")
    $("#API_NamaTertanggung").val("")
    $("#API_MasaAsuransi").val("")
    $("#API_NomorRekening").val("")
    $("#API_AccountsMyAccess").val("")
    $("#API_TglLahirTertanggung").val("")
    $("#API_NomorVirtualAccount").val("")
    $("#API_NamaBank").val("")
    $("#API_JenisKelaminTertanggung").val("")
    $("#API_NamaTenagaPenjualan").val("")
    $("#API_NamaPemilikRekening").val("")
    var myTrmWaris = $('#TrmWaris').DataTable();
    myTrmWaris.clear().draw();
    var myTrmManfaat = $('#TrmManfaat').DataTable();
    myTrmManfaat.clear().draw();
    var myTrmDarlink = $('#TrmDarlink').DataTable();
    myTrmDarlink.clear().draw();
    var myTrmTunai = $('#TrmTunai').DataTable();
    myTrmTunai.clear().draw();
    var myTrmPremi = $('#TrmPremi').DataTable();
    myTrmPremi.clear().draw();
}
function Button_SaveData_Profile() {
    if ($("#Ticket_NIK").val() != "") {
        CheckingNIK();
    } else {
        if ($("#Ticket_Phone").val() != "") {
            CheckingHP();
        } else {
            if ($("#Ticket_Email").val() != "") {
                CheckingEmail();
            }
        }
    }
    var TrxUsername = $("#hd_sessionLogin").val();
    var TrxCusTomerName = $("#Ticket_FullName").val();
    var TrxCusTomerEmail = $("#Ticket_Email").val();
    var TrxCusTomerPhone = $("#Ticket_Phone").val();
    var TrxCusTomerGender = $("#ContentPlaceHolder1_HD_API_Gender").val();
    var TrxCusTomerDate = $("#Ticket_Dateofbirth").val();
    var TrxCustomerPolisNumber = "-";
    var TrxCusTomerNIK = $("#Ticket_NIK").val();
    var TrxFacebook = "-";
    var TrxInstagram = "-";
    var TrxTwitter = "-";
    var TrxCusTomerAlamat = CKEDITOR.instances.Ticket_Address.getData();
    if (getParameterByName("numberid") != '') {
        var TrxNumberID = getParameterByName("numberid");
    } else {
        var TrxNumberID = "0";
    }
    if (TrxCusTomerName === '') {
        AutoValidasiWarning($("#hd_sessionLogin").val(), "<b>Name</b> is empty")
        return false
    }
    if (TrxCusTomerEmail != '') {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (TrxCusTomerEmail.match(mailformat)) {
        }
        else {
            AutoValidasiWarning($("#hd_sessionLogin").val(), "Format <b>email address</b> not valid")
            return false
        }
    }
    if (TrxCusTomerPhone != '') {
        var numberNya = /^[0-9]+$/;
        if (TrxCusTomerPhone.match(numberNya)) {
            var PhoneLengt = TrxCusTomerPhone.toString().length;
            if (PhoneLengt > '6') {

            } else {
                AutoValidasiWarning($("#hd_sessionLogin").val(), "Format <b>phone number</b> not valid")
                return false
            }
        } else {
            AutoValidasiWarning($("#hd_sessionLogin").val(), "Format <b>Phone Number</b> format is numeric")
            return false;
        }
    }
    if (TrxCusTomerNIK == '' || TrxCusTomerNIK == '0') {

    } else {
        var numberNya = /^[0-9]+$/;
        if (TrxCusTomerNIK.match(numberNya)) {
            var NIKLengt = TrxCusTomerNIK.toString().length;
            if (NIKLengt == '16') {

            } else {
                AutoValidasiWarning($("#hd_sessionLogin").val(), "<b>NIK Number</b> format is 16 digit")
                return false;
            }
        } else {
            AutoValidasiWarning($("#hd_sessionLogin").val(), "<b>NIK Number</b> format is numeric")
            return false;
        }
    }
    if (TrxCusTomerAlamat == '') {
        AutoValidasiWarning($("#hd_sessionLogin").val(), "<b>Address</b> is empty")
        return false;
    }
    if (TrxFacebook == '') {
        TrxFacebook = "-";
    }
    if (TrxInstagram == '') {
        TrxInstagram = "-";
    }
    if (TrxTwitter == '') {
        TrxTwitter = "-";
    }
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                var form_data = JSON.stringify({
                    TrxUsername: TrxUsername, TrxCusTomerName: encodeData(TrxCusTomerName), TrxCusTomerEmail: TrxCusTomerEmail, TrxCusTomerPhone: TrxCusTomerPhone, TrxCusTomerGender: TrxCusTomerGender, TrxCusTomerDate: TrxCusTomerDate, TrxCusTomerNIK: TrxCusTomerNIK,
                    TrxCustomerPolisNumber: TrxCustomerPolisNumber, TrxCusTomerAlamat: encodeData(TrxCusTomerAlamat), TrxNumberID: TrxNumberID, TrxFacebook: TrxFacebook, TrxInstagram: TrxInstagram, TrxTwitter: TrxTwitter
                });
                $.ajax({
                    url: "asmx/ServiceCustomer.asmx/InsertTransactionCustomer",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {
                        var json = JSON.parse(data.d);
                        var i, x = "";
                        var result = "";
                        console.log("Exec InsertTransactionCustomer : " + form_data)

                        for (i = 0; i < json.length; i++) {
                            $("#hd_customerID").val(json[i].CustomerID)
                            $("#ContentPlaceHolder1_TrxCustomerID").val(json[i].CustomerID)
                            if (json[i].Result == "True") {
                                swal(
                                    '',
                                    'Save Has Been Success',
                                    'success'
                                ).then(function () {
                                    $.toast({
                                        heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                        text: 'Your data customer has been save',
                                        position: 'top-right',
                                        loaderBg: '#ff6849',
                                        icon: 'success',
                                        hideAfter: 3500,
                                        stack: 6
                                    });
                                    getWS_MasterCustomerSelected($("#hd_customerID").val())
                                    $("#ButtonSaveDataProfile").css("display", "none")
                                });
                            } else {
                                $.toast({
                                    heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                    text: json[i].msgSystem,
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'warning',
                                    hideAfter: 3500,
                                    stack: 6
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
        });
}
function CheckingNIK() {
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + $("#Ticket_NIK").val() + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK328'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";

            if (json.length != "0") {
                for (i = 0; i < json.length; i++) {
                    if (json[i].NIK != "") {
                        swal(
                            '',
                            'NIK Already Exits, Please Check Data Customer !',
                            'error'
                        ).then(function () {
                            UpdateSyncronise_ProfileAPI("NIK")
                        });
                        return false;
                    }
                }
            } else {
                if ($("#Ticket_Phone").val() != "") {
                    CheckingHP();
                }
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function CheckingHP() {
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + $("#Ticket_Phone").val() + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK329'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";

            if (json.length != "0") {
                for (i = 0; i < json.length; i++) {
                    if (json[i].ValueChannel != "") {
                        swal(
                            '',
                            'Phone Number Already Exits, Please Check Data Customer !',
                            'error'
                        ).then(function () {
                            UpdateSyncronise_ProfileAPI("Phone")
                        });
                        return false;
                    }
                }
            } else {
                if ($("#Ticket_Email").val() != "") {
                    CheckingEmail();
                }
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function CheckingEmail() {
    $.ajax({
        type: "POST",
        url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
        data: "{TrxID:'" + $("#Ticket_Email").val() + "', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK329'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";

            if (json.length != "0") {
                for (i = 0; i < json.length; i++) {
                    if (json[i].ValueChannel != "") {
                        swal(
                            '',
                            'Data Email Already Exits, Please Check Data Customer !',
                            'error'
                        ).then(function () {
                            UpdateSyncronise_ProfileAPI("Email")
                        });
                        return false;
                    }
                }
            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function UpdateSyncronise_ProfileAPI(TrxType) {
    var TrxUsername = $("#hd_sessionLogin").val();
    var TrxCusTomerName = $("#Ticket_FullName").val();
    var TrxCusTomerEmail = $("#Ticket_Email").val();
    var TrxCusTomerPhone = $("#Ticket_Phone").val();
    var TrxCusTomerGender = $("#ContentPlaceHolder1_HD_API_Gender").val();
    var TrxCusTomerDate = $("#Ticket_Dateofbirth").val();
    var TrxCusTomerNIK = $("#Ticket_NIK").val();
    var TrxCusTomerAlamat = CKEDITOR.instances.Ticket_Address.getData();
    if (TrxCusTomerEmail != '') {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (TrxCusTomerEmail.match(mailformat)) {
        }
        else {
            swal("Format email address not valid");
            return false;
        }
    }
    if (TrxCusTomerPhone != '') {
        var numberNya = /^[0-9]+$/;
        if (TrxCusTomerPhone.match(numberNya)) {
            var PhoneLengt = TrxCusTomerPhone.toString().length;
            if (PhoneLengt > '6') {

            } else {
                swal("Format phone number is not valid")
                return false;
            }
        } else {
            swal("Phone Number format is numeric")
            return false;
        }
    }
    if (TrxCusTomerGender == '--Select--' || TrxCusTomerGender == '' || TrxCusTomerGender == '0') {
        swal("Gender is empty")
        return false;
    }
    swal({
        title: "Do you want to continue update customer?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                var form_data = JSON.stringify({
                    TrxType: TrxType, TrxUserName: TrxUsername, TrxName: encodeData(TrxCusTomerName), TrxEmail: TrxCusTomerEmail,
                    TrxPhone: TrxCusTomerPhone, TrxGender: TrxCusTomerGender, TrxBirth: TrxCusTomerDate, TrxNIK: TrxCusTomerNIK,
                    TrxAddress: TrxCusTomerAlamat
                });
                $.ajax({
                    url: "asmx/ServiceCustomer.asmx/UpdateSynroniseProfileAPI",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {

                        var json = JSON.parse(data.d);
                        var i, x = "";
                        var result = "";

                        for (i = 0; i < json.length; i++) {

                            $("#hd_customerID").val(json[i].CustomerID)
                            $("#ContentPlaceHolder1_TrxCustomerID").val(json[i].CustomerID)
                            if (json[i].Result == "True") {
                                swal(
                                    '',
                                    'Update Has Been Success',
                                    'success'
                                ).then(function () {
                                    $.toast({
                                        heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                        text: 'Your data customer has been save',
                                        position: 'top-right',
                                        loaderBg: '#ff6849',
                                        icon: 'success',
                                        hideAfter: 3500,
                                        stack: 6
                                    });
                                    getWS_MasterCustomerSelected($("#hd_customerID").val())
                                    $("#ButtonSaveDataProfile").css("display", "none")
                                });
                            } else {
                                $.toast({
                                    heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                    text: json[i].msgSystem,
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'warning',
                                    hideAfter: 3500,
                                    stack: 6
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
        });
}
function TabDetailPolisNumber() {
    var displayAPI = ""
    displayAPI = '<div id="chat-box-body" onclick="modalAPI()">' +
        '<div id="chat-circle" class="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70">' +
        '<div id="chat-overlay"></div>' +
        '<span class="mdi mdi-lan-connect font-size-30"></span>' +
        '</div>' +
        '</div>'
    $("#chat-box-bodyDrop").append(displayAPI)
}
function CloseSearchingAPI() {
    $("#modal-SearchAPI").modal('hide')
    var drop = ""
    drop = '<div id="chat-box-body" onclick="modalAPI()">' +
        '<div id="chat-circle" class="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70">' +
        '<div id="chat-overlay"></div>' +
        '<span class="mdi mdi-lan-connect font-size-30"></span>' +
        '</div>' +
        '</div>'
    $("#chat-box-bodyDrop").append(drop)
}
function CancelSaveTicket() {
    var TrxUsername = $("#hd_sessionLogin").val();
    if ($("#ContentPlaceHolder1_TrxCustomerID").val() == "") {
        var TrxCustomerID = $("#hd_customerID").val()
    } else {
        var TrxCustomerID = $("#ContentPlaceHolder1_TrxCustomerID").val()
    }
    swal({
        title: "Do you want to cancel?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                var form_data = JSON.stringify({
                    TrxUserName: $("#hd_sessionLogin").val(), TrxCustomerID: TrxCustomerID
                });
                $.ajax({
                    url: "WebServiceTransaction.asmx/CancelSaveTicket",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function () {
                        console.log(form_data)
                        window.location.href = "1_doticket.aspx?idpage=1009&n=4&mid=1009"
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
//function OnChange_Type(val) {
//    var selectedText = $("#ComboType").find("option:selected").text();
//    var selectedValue = $("#ComboType").val();
//    if (selectedValue == "1") {
//        $("#FilterDiv").show();
//        $("#FilterProvider").hide();
//        $("#HeaderFilter").empty()
//        $("#HeaderFilter").append("Filter Value")
//    } else {
//        $("#FilterDiv").hide();
//        $("#FilterProvider").show();
//        $("#API_FilterValue").attr("disabled", false);
//        $("#HeaderFilter").empty()
//        $("#HeaderFilter").append("Filter Value")
//        $("#API_FilterValue").val("")
//    }
//}
//function OnChange_Provider(val) {
//    $("#HeaderFilter").empty()
//    $("#HeaderFilter").append("Member Number")
//}

//function HeaderReported() {
//    $("#NameReported").empty()
//    $("#NameReported").append("Full Name Reported")
//    $("#EmailReported").empty()
//    $("#EmailReported").append("Email Reported")
//    $("#ContactNumberReported").empty()
//    $("#ContactNumberReported").append("Contact Number Reported")
//    $("#ContactAccountReported").empty()
//    $("#ContactAccountReported").append("Contact Account Reported")
//}
function ClickingProvider(ProviderID, ProviderName, Alamat) {
    $("#Ticket_Nama_Provider").val(ProviderName)
    $("#Reported_Name").val(ProviderName);
    CKEDITOR.instances.Reported_Address.setData(Alamat)
    $("#Ticket_Nama_Provider").attr("disabled", true);
    $("#modal-SearchProvider").modal('hide');
    $('#basic_checkbox_3').click(function () {
        if (!$(this).is(':checked')) {
            $("#Reported_Name").val("");
            $("#Reported_Email").val("");
            $("#Reported_Phone").val("");
            CKEDITOR.instances.Reported_Address.setData("")
        } else {
            $("#Reported_Name").val(ProviderName);
            CKEDITOR.instances.Reported_Address.setData(Alamat)
        }
    });
}
function showAddProvider() {
    $("#modal-provider").modal('show');
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
                    City: $("#Provider_Kota").val(), Alamat: Alamat, UserName: $("#hd_sessionLogin").val(), Action:"INSERT"
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
                                    $("#Ticket_Nama_Provider").val($("#Provider_Name").val())
                                    $("#modal-provider").modal('hide');
                                    $("#modal-SearchProvider").modal('hide');
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
function Ticket_SaveTicket() {
    var TrxUsername = $("#hd_sessionLogin").val();
    var TrxCustomerID = $("#hd_customerID").val();
    var TrxGenesysID = getParameterByName("numberid");
    var TxtThreadID = getParameterByName("threadid");
    var TxtAccount = $("#Reported_Channel_Contact").val();
    var TxtContactID = $("#hd_AccountContactUser").val();
    var TrxPelapor = $("#Reported_Name").val();
    var TrxPelaporEmail = $("#Reported_Email").val();
    var TrxPelaporPhone = $("#Reported_Phone").val();
    var TrxPelaporAddress = $("#Reported_Address").val();
    var TrxKejadian = $("#Ticket_DateofTransaction").val();
    var TrxPenyebab = $("#Ticket_ProductType").val("27");
    var TrxProductName = $("#Ticket_Nama_Provider").val();
    var TrxPenerimaPengaduan = $("#Ticket_AgentName").val();   
    var TrxStatusPelapor = $("#Ticket_UserStatus").val("5");
    var TrxSkalaPrioritas = $("#Ticket_Priority").val();
    var TrxJenisNasabah = $("#Ticket_UserCategory").val();
    var TrxNomorRekening = $("#Ticket_BankAccount").val();
    var TrxSumberInformasi = $("#Ticket_SourceChannel").val();
    var TrxCategory = $("#Ticket_Category").val();
    var TrxLevel1 = $("#Ticket_Enquiry").val();
    var TrxLevel2 = $("#Ticket_EnquiryDetail").val();
    var TrxLevel3 = $("#Ticket_EnquiryReason").val();
    var TrxConvertComplaint = CKEDITOR.instances.Ticket_Complaints.getData();
    var TrxConvertResponse = CKEDITOR.instances.Ticket_NoteAgent.getData();
    var TrxChannel = $("#Ticket_SourceChannel").val();
    var TrxStatus = $("#Ticket_Status").val();
    var TrxEskalasi = $("#Ticket_Escalation").val();
    var TrxSLA = $("#hd_SLA").val();
    if ($("#Ticket_EscalationLayer").val() == "Yes") {
        var TrxLayer = $("#ContentPlaceHolder1_hd_Layer").val();
    } else {
        var TrxLayer = "1";
    }
    var TrxExtendCategory = "0";
    var TrxIDchannel = getParameterByName("channel");
    if (getParameterByName("channel") == "" || getParameterByName("channel") == null) {
        var TrxIDchannel = $("#Ticket_SourceChannel").val();
    } else {
        var TrxIDchannel = getParameterByName("channel");
    }  
    if ($("#hd_sessionLogin").val() == "") {
        swal(
            '',
            'UserName is empty, Please re-login',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#hd_customerID").val() == "") {
        swal(
            '',
            'Customer is empty, Please select customer',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Ticket_AgentName").val() == "") {
        swal(
            '',
            'Agent Name is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Ticket_SourceChannel").val() == "") {
        swal(
            '',
            'Ticket Channel is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Ticket_SourceChannel").val() == "Outbound Call") {
        if ($("#Ticket_ReasonCall").val() == "") {
            swal(
                '',
                'Reason call is empty',
                'info'
            ).then(function () {
                return false;
            });
            return false;
        } else {
            var ReasonCall = $("#Ticket_ReasonCall").val()
        }
    } else {
        var ReasonCall = "-"
    }
    if ($("#Ticket_UserCategory").val() == "") {
        swal(
            '',
            'Customer Category is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    } else {
        if ($("#Ticket_UserCategory").val() == "Provider") {
            if ($("#Ticket_BankAccount").val() == "") {
                swal(
                    '',
                    'Claim Number is empty',
                    'info'
                ).then(function () {
                    return false;
                });
                return false;
            }
            if ($("#Ticket_Nama_Provider").val() == "") {
                swal(
                    '',
                    'Provider Name is empty',
                    'info'
                ).then(function () {
                    return false;
                });
                return false;
            }
        } else {
            $("#Ticket_BankAccount").val("0")
            $("#Ticket_Nama_Provider").val("-")
        }
    }
    if ($("#Ticket_Status").val() == "") {
        swal(
            '',
            'Status is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Ticket_Category").val() == "") {
        swal(
            '',
            'Category is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Ticket_Enquiry").val() == "") {
        swal(
            '',
            'Enquiry type is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Ticket_EnquiryDetail").val() == "") {
        swal(
            '',
            'Enquiry detail is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Ticket_EnquiryReason").val() == "") {
        swal(
            '',
            'Problem is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Ticket_Priority").val() == "") {
        swal(
            '',
            'Priority Scale is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Ticket_Escalation_Type").val() == "") {
        swal(
            '',
            'Escalation Type is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    } else {
        var TrxTeamLeaderType = $("#Ticket_Escalation_Type").val()
    }   
    if ($("#Ticket_Escalation").val() == "") {
        swal(
            '',
            'Escalation Unit is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#Ticket_EscalationLayer").val() == "") {
        swal(
            '',
            'Escalation Ticket is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if (TrxSLA == "") {
        swal(
            '',
            'SLA is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }   
    if (TrxConvertComplaint == "") {
        swal(
            '',
            'Customer Question is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if (TrxConvertResponse == "") {
        swal(
            '',
            'Agent Response is empty',
            'info'
        ).then(function () {
            return false;
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

                var form_data = JSON.stringify({
                    TrxUsername: TrxUsername, TrxCustomerID: TrxCustomerID, TxtAccount: TxtAccount, TrxPelapor: encodeData(TrxPelapor),
                    TrxPelaporEmail: TrxPelaporEmail, TrxPelaporPhone: TrxPelaporPhone, TrxPelaporAddress: encodeData(TrxPelaporAddress),
                    TrxKejadian: "2023-12-12", TrxPenyebab: "27", TrxPenerimaPengaduan: TrxPenerimaPengaduan, TrxStatusPelapor: "Provider",
                    TrxSkalaPrioritas: TrxSkalaPrioritas, TrxJenisNasabah: TrxJenisNasabah, TrxNomorRekening: TrxNomorRekening, TrxSumberInformasi: TrxSumberInformasi,
                    TrxCategory: TrxCategory, TrxLevel1: TrxLevel1, TrxLevel2: TrxLevel2, TrxLevel3: TrxLevel3, TrxComplaint: encodeData(TrxConvertComplaint),
                    TrxResponse: encodeData(TrxConvertResponse), TrxChannel: TrxChannel, TrxStatus: TrxStatus, TrxEskalasi: TrxEskalasi, TrxSLA: TrxSLA,
                    TrxExtendCategory: TrxExtendCategory, TrxLayer: TrxLayer, TrxThreadID: TxtThreadID, TxtThreadID: TxtThreadID, TrxGenesysID: TrxGenesysID,
                    TxtContactID: TxtContactID, TrxIDchannel: TrxIDchannel, TrxProductName: TrxProductName, TrxReasonCall: ReasonCall, TrxTeamLeaderType: TrxTeamLeaderType
                });
                $.ajax({
                    url: "WebServiceTransaction.asmx/Insert_TransactionTicket",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {
                        var json = JSON.parse(data.d);
                        var i, x = "";
                        var result = "";
                        
                        for (i = 0; i < json.length; i++) {
                            if (json[i].Result == "True") {
                                $.toast({
                                    heading: '<b>Hi agent ' + $("#hd_sessionLogin").val() + '</b>',
                                    text: 'Your data ticket has been submited...',
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'success',
                                    hideAfter: 3500,
                                    stack: 6
                                });
                                swal(
                                    '',
                                    'Insert Data Has Been Success',
                                    'success'
                                ).then(function () {
                                    ShowDataTransaction($("#hd_customerID").val());
                                    $("#modal-list-transaction-ticket").modal('show');
                                });
                            } else {
                                swal(
                                    '',
                                    '' + json[i].TrxmsgSystem +'',
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
        });
}
function ShowDataTransaction(id) {
    var TrxCustomerID = id;
    var TrxUserName = $("#hd_sessionLogin").val();
    var TrxNumberID = getParameterByName("numberid");
    var myListTransactionTicket = $('#ListTransactionTicket').DataTable();
    $.ajax({
        type: "POST",
        url: "WebServiceTransaction.asmx/ListDataTransactionTicket",
        data: "{TrxCustomerID: '" + TrxCustomerID + "',TrxUserName: '" + TrxUserName + "',TrxNumberID: '" + TrxNumberID + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x = "";

            myListTransactionTicket.clear().draw();
            if (json.length == 0) {
                console.log("Data not found " + i);
            } else {
                for (i = 0; i < json.length; i++) {

                    var d = new Date(json[i].DateCreate);
                    var milisegundos = parseInt(json[i].DateCreate.replace("/Date(", "").replace(")/", ""));
                    var newDate = new Date(milisegundos).toLocaleDateString("en-UE");
                    var newTime = new Date(milisegundos).toLocaleTimeString("en-UE");

                    if (json[i].Status == "Open") {
                        var TrxParam = "<span class='badge badge-pill badge-primary' style='width: 70px;'>" + json[i].Status + "</span>"
                    } else if (json[i].Status == "Pending") {
                        var TrxParam = "<span class='badge badge-pill badge-warning' style='width: 70px;'>" + json[i].Status + "</span>"
                    } else if (json[i].Status == "Solved") {
                        var TrxParam = "<span class='badge badge-pill badge-success' style='width: 70px;'>" + json[i].Status + "</span>"
                    } else if (json[i].Status == "Closed") {
                        var TrxParam = "<span class='badge badge-pill badge-danger' style='width: 70px;'>" + json[i].Status + "</span>"
                    }

                    var urlAction = "<a href='#' class='text-warning' data-toggle='tooltip' data-original-title='Delete' onclick=PublishTransactionTicketNumber('" + json[i].TicketNumber + "')><i class='ti-ticket' aria-hidden='true'></i></a>"
                    myListTransactionTicket.row.add([urlAction, newDate + ' ' + newTime, json[i].TicketNumber, json[i].CategoryName, TrxParam, json[i].UserCreate, json[i].SLA]).draw(false);

                }

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function PublishTransactionTicketNumber(vals) {
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                var form_data = JSON.stringify({ TrxTicketNumber: vals });
                $.ajax({
                    url: "WebServiceTransaction.asmx/UIDESKPublishTransactionTicketNumber",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {

                        var json = JSON.parse(data.d);
                        var i, x = "";
                        var result = "";

                        for (i = 0; i < json.length; i++) {
                            if (json[i].Result == "True") {
                                $.toast({
                                    heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                    text: '</br>Your transaction has been move from list',
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'success',
                                    hideAfter: 3500,
                                    stack: 6
                                });
                                ShowDataTransaction($("#hd_customerID").val());
                            } else {
                                $.toast({
                                    heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                    text: json[i].msgSystem,
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'warning',
                                    hideAfter: 3500,
                                    stack: 6
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

        });
}
function PublishTransaction() {
    var TrxCustomerID = $("#hd_customerID").val();
    var TrxUserName = $("#hd_sessionLogin").val();
    var form_data = JSON.stringify({ TrxCustomerID: TrxCustomerID, TrxUserName: TrxUserName });
    swal({
        title: "Do you want to process?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                $.ajax({
                    url: "WebServiceTransaction.asmx/UIDESKPublishTransaction",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {

                        var json = JSON.parse(data.d);
                        var i, x = "";
                        var result = "";

                        for (i = 0; i < json.length; i++) {
                            if (json[i].Result == "True") {
                                $.toast({
                                    heading: 'Hi agent ' + $("#hd_sessionLogin").val(),
                                    text: '</br>Your transaction has been publish',
                                    position: 'top-right',
                                    loaderBg: '#ff6849',
                                    icon: 'success',
                                    hideAfter: 3500,
                                    stack: 6
                                });
                                swal(
                                    '',
                                    'Transaction Has Been Finish',
                                    'success'
                                ).then(function () {
                                    $("#modal-list-transaction-ticket").modal('hide');
                                    window.location.href = "2_taskboard.aspx?status=Open";
                                });                              
                            } else {
                                swal(
                                    '',
                                    'Transaction has been failed !',
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
        });
}
function ChanelOutbound(val) {
    var selectedText = $("#Ticket_SourceChannel").find("option:selected").text();
    var selectedValue = $("#Ticket_SourceChannel").val();
    if (selectedValue == "Outbound Call") {
        var cmbDataReasonCall = $('#Ticket_ReasonCall');
        $.ajax({
            type: "POST",
            url: "WebServiceGetDataMaster.asmx/UIDESK_TrxTransactionTicket",
            data: "{TrxID:'UideskIndonesia', TrxSearching:'UideskIndonesia', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxAction: 'UIDESK331'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                var json = JSON.parse(data.d);
                var i, x, resultReasonCall = "";

                cmbDataReasonCall.empty()
                cmbDataReasonCall.append("<option value=''>Select</option>")
                for (i = 0; i < json.length; i++) {

                    resultReasonCall = '<option value="' + json[i].ReasonCall + '">' + json[i].ReasonCall + '</option>';
                    cmbDataReasonCall.append(resultReasonCall);

                }

            },
            error: function (xmlHttpRequest, textStatus, errorThrown) {
                console.log(xmlHttpRequest.responseText);
                console.log(textStatus);
                console.log(errorThrown);
            }
        })
        $("#dialcall").show()
        $("#BintangReasonCall").show();
        $("#Ticket_ReasonCall").attr("disabled", false);
    } else {
        $("#dialcall").hide()
        $("#BintangReasonCall").hide();
        $("#Ticket_ReasonCall").val("")
        $("#Ticket_ReasonCall").attr("disabled", true);
    }   
}
function ClickCall() {
    if ($("#Reported_Phone").val() == "") {
        swal(
            '',
            'Contact Number Reported is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    } else {
        swal({
            title: "Do you want to call?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    const Http = new XMLHttpRequest();
                    const url = "http://localhost:60024/dial/telp=" + $("#Reported_Phone").val()
                    console.log("url" + url)
                    Http.open("GET", url);
                    Http.send();

                    Http.onreadystatechange = (e) => {
                        console.log(Http.responseText)
                        var drop = ""
                        drop = '<span class="badge badge-pill badge-danger float-right">' +
                            '<a href="#" style="color:white;" title="Drop Call"><i class="fa fa-phone" onclick="DropCall()"></i></a>' +
                            '</span>'
                        $("#dropcall").append(drop)
                        $("#dialcall").hide()
                    }                  

                } else {
                    window.location.reload();
                }
            });
    }
}
function DropCall() {
    swal({
        title: "Do you want to drop?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                const Http = new XMLHttpRequest();
                const url = "http://localhost:60024/drop/telp=" + $("#Reported_Phone").val()
                Http.open("GET", url);
                Http.send();

                Http.onreadystatechange = (e) => {
                    console.log(Http.responseText)
                    $("#dialcall").show()
                    $("#dropcall").hide()
                }

            }
        });
}
function GetCustomerCategory(val) {
    var selectedText = $("#Ticket_UserCategory").find("option:selected").text();
    var selectedValue = $("#Ticket_UserCategory").val();
    if (selectedValue == "Provider") {
        $("#BintangProviderName").show();
        $("#BintangClaimNumber").show();
    } else {
        $("#BintangProviderName").hide();
        $("#BintangClaimNumber").hide();
    }
}