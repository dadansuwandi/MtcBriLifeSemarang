$(document).ready(function () {
    $("#Div_Conversation").hide();
    if (getParameterByName("Refid") == "") {
        $("#DivStart").hide();
        $("#DivDone").hide();
        $("#Div_Conversation").hide();
    } else {
        $("#DivStart").show();
        $("#DivDone").show();
        $("#Div_Conversation").show();
        EmailConversation(getParameterByName("Refid"))
    }
    $("#TxtEmailSearching").on("input", function () {
        var jumlahString = $(this).val().length;
        if (jumlahString >= 4) {
            TrmSearchingEmail($(this).val());
        } else if (jumlahString == 0) {
            //TrmSearchingEmail($(this).val(""));
            $("#DivSearchingEmail").hide();
        }
    });
    TrmInboxEmail()
});
function TrmInboxEmail() {
    var myTable = $('#TrmInboxEmail').DataTable();
    $.ajax({
        type: "POST",
        url: "asmx/TrmMailSystem.asmx/UIDESK_TrmMasterDropdown",
        data: "{TrxID:'0', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxEvent: 'DefaultEmail', TrxAction: 'UIDESK100'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";

            myTable.clear().draw();
            for (i = 0; i < json.length; i++) {

                //var d = new Date(json[i].Email_Date);
                //var milisegundos = parseInt(json[i].Email_Date.replace("/Date(", "").replace(")/", ""));
                //var newDate = new Date(milisegundos).toLocaleDateString("en-UE");
                //var newTime = new Date(milisegundos).toLocaleTimeString("en-UE");

                //var urlClick = "<div class='dropdown'>" +
                //    "<a data-toggle='dropdown' href='#'><i class='ti-more-alt rotate-90 text-black'></i></a>" +
                //    "<div class='dropdown-menu dropdown-menu-right'>" +
                //    "<a class='dropdown-item' href='#' onclick=Spam_Inbox('" + json[i].IVC_ID + "')><i class='fa fa-pencil'></i> Spam</a>" +
                //    "<a class='dropdown-item' href='#' onclick=Reply_Inbox('" + json[i].IVC_ID + "')><i class='fa fa-reply'></i> Reply</a>" +
                //    "<a class='dropdown-item' href='#' onclick=Assign('" + json[i].IVC_ID + "')><i class='fa fa-share-alt'></i> Assign</a>" +
                //    "<a class='dropdown-item' href='#' onclick=Forward_Inbox('" + json[i].IVC_ID + "')><i class='fa fa-share'></i> Forward</a>" +
                //    "<div class='dropdown-divider'></div>" +
                //    "<a class='dropdown-item' href='#' onclick=PreviewTableInbox('" + json[i].EMAIL_ID + "')><i class='si-arrow-right-circle si'></i> Preview</a>" +
                //    "</div>" +
                //    "</div>"

                //if (json[i].Reading == 0 || json[i].Reading == null) {
                //    var EmailService = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')><b>" + json[i].ETO + "</b></a>"
                //    var EFROM = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')><b>" + json[i].EFROM + "</b></a>"
                //    var subject = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')><b>" + json[i].ESUBJECT + "</b></a>"
                //    var DateRead = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')><b>" + newDate + ' ' + newTime + "</b></a>"
                //} else {
                //    var EmailService = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')>" + json[i].ETO + "</a>"
                //    var EFROM = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')>" + json[i].EFROM + "</a>"
                //    var subject = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')>" + json[i].ESUBJECT + "</a>"
                //    var DateRead = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')>" + newDate + ' ' + newTime + "</a>"
                //}
                var Action = "<i class='fa fa-commenting' onclick=EmailConversation('" + json[i].RefID + "'); style='cursor:pointer;'></i>"
                myTable.row.add([json[i].EFROM, json[i].ETO, json[i].ESUBJECT, json[i].DIRECTION, Action]).draw(false);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function EmailConversation(RefID) {
    //alert(RefID)
    $("#Div_Conversation").show();
    var FileInboxHTML = "" + IPSERVER + "/FileEmail/Inbox"
    var FileOutboxHTML = "" + IPSERVER + "/FileEmail/Outbox"
    var filenameimage = "";
    var result = "";
    var result_in = ""
    var messageDiv = $('#Journeymailconversation');
    $.ajax({
        type: "POST",
        url: "asmx/TrmMailConversation.asmx/UIDESK_TrxEmailConversation",
        data: "{RefID: '" + RefID +"', UserName: '" + $("#hd_sessionLogin").val() + "', Action: 'SELECT'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: async function  (data) {
            var json = JSON.parse(data.d);
            var i = 0;
            
            messageDiv.empty();
            for (i = 0; i < json.length; i++) {
                if (json[i].DIRECTION == "IN") {

                    let imagein = ""
                    await $.ajax({
                        type: "POST",
                        url: "asmx/TrmMailConversation.asmx/UIDESK_TrxEmailAttachment",
                        data: "{RefID: '" + getParameterByName("Refid") +"', EmailID: '" + json[i].EMAIL_ID + "', Direction: 'IN', UserName: '" + $("#hd_sessionLogin").val() + "'}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                            var json = JSON.parse(data.d);
                            var j = 0;

                            for (j = 0; j < json.length; j++) {

                                imagein += "" +
                                    "<li>" +
                                    "<span class='mailbox-attachment-icon'><i class='fa fa-file-pdf-o'></i></span>" +
                                    "<div class='mailbox-attachment-info'>" +
                                    "<a href='#' class='mailbox-attachment-name'><i class='fa fa-paperclip'></i>" + json[j].FILENAME + "</a>" +
                                    "<span class='mailbox-attachment-size'>5,215 KB" +
                                    "<a href='" + FileInboxHTML + "/" + json[j].URL +"' class='btn btn-default btn-xs pull-right' target='_blank'><i class='fa fa-cloud-download'></i></a>" +
                                    "</span>" +
                                    "</div>" +
                                    "</li>"

                            }
                            console.log(imagein)
                        },
                        error: function (xmlHttpRequest, textStatus, errorThrown) {
                            console.log(xmlHttpRequest.responseText);
                            console.log(textStatus);
                            console.log(errorThrown);
                        }
                    });
 
                    result = "<div class='timeline'> " +
                        "<div class='timeline-item timeline-item-left'>" +
                        "<div class='timeline-point timeline-point-blank'></div> " +
                        "<div class='timeline-event timeline-event-default'>" +
                        "<div class='timeline-heading'>" +
                        "<h4 class='timeline-title'>timeline-item timeline-item-left</h4>" +
                        "</div>" +
                        "<div class='timeline-body'>" +
                        "<p>" +
                        "" + json[i].EBODY_HTML + "" +
                        "</p> " +
                        "</div>" + 
                        "<div class='timeline-footer'>" +
                        "<ul class='mailbox-attachments clearfix' >" +
                        "" + imagein + "" +
                        "</ul>" +
                        "</div>"                    

                } else {

                    let imageout = ""
                    await $.ajax({
                        type: "POST",
                        url: "asmx/TrmMailConversation.asmx/UIDESK_TrxEmailAttachment",
                        data: "{RefID: '" + getParameterByName("Refid") +"', EmailID: '" + json[i].EMAIL_ID + "', Direction: 'OUT', UserName: '" + $("#hd_sessionLogin").val() + "'}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                            var json = JSON.parse(data.d);
                            var j = 0;

                            for (j = 0; j < json.length; j++) {

                                imageout += "" +
                                    "<li>" +
                                    "<span class='mailbox-attachment-icon'><i class='fa fa-file-pdf-o'></i></span>" +
                                    "<div class='mailbox-attachment-info'>" +
                                    "<a href='#' class='mailbox-attachment-name'><i class='fa fa-paperclip'></i>" + json[j].FILENAME + "</a>" +
                                    "<span class='mailbox-attachment-size'>5,215 KB" +
                                    "<a href='" + FileOutboxHTML + "/" + json[j].URL +"' class='btn btn-default btn-xs pull-right' target='_blank'><i class='fa fa-cloud-download'></i></a>" +
                                    "</span>" +
                                    "</div>" +
                                    "</li>"

                            }
                            console.log(imageout)
                        },
                        error: function (xmlHttpRequest, textStatus, errorThrown) {
                            console.log(xmlHttpRequest.responseText);
                            console.log(textStatus);
                            console.log(errorThrown);
                        }
                    });

                    result = "<div class='timeline'> " +
                        "<div class='timeline-item timeline-item-right'>" +
                        "<div class='timeline-point timeline-point-blank'></div> " +
                        "<div class='timeline-event timeline-event-default'>" +
                        "<div class='timeline-heading'>" +
                        "<h4 class='timeline-title'>timeline-item timeline-item-right</h4>" +
                        "</div>" +
                        "<div class='timeline-body'>" +
                        "<p>" +
                        "" + json[i].EBODY_HTML + "" +
                        "</p> " +
                        "</div>" +
                        "<div class='timeline-footer'>" +
                        "<ul class='mailbox-attachments clearfix' >" +
                        "" + imageout + "" +
                        "</ul>" +
                        "</div>"

                }
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
function TrmSearchingEmail(SearchVariabel) {
    $("#DivSearchingEmail").show();
    $("#Div_Conversation").show();
    var myTable = $('#TrmInboxEmail').DataTable();
    $.ajax({
        type: "POST",
        url: "asmx/TrmMailSystem.asmx/UIDESK_TrmMasterDropdown",
        data: "{TrxID:'" + SearchVariabel + "', TrxUserName: '" + $("#hd_sessionLogin").val() + "', TrxEvent: 'SearchingEmail', TrxAction: 'UIDESK100'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var json = JSON.parse(data.d);
            var i, x, result = "";

            myTable.clear().draw();
            for (i = 0; i < json.length; i++) {

                //var d = new Date(json[i].Email_Date);
                //var milisegundos = parseInt(json[i].Email_Date.replace("/Date(", "").replace(")/", ""));
                //var newDate = new Date(milisegundos).toLocaleDateString("en-UE");
                //var newTime = new Date(milisegundos).toLocaleTimeString("en-UE");

                //var urlClick = "<div class='dropdown'>" +
                //    "<a data-toggle='dropdown' href='#'><i class='ti-more-alt rotate-90 text-black'></i></a>" +
                //    "<div class='dropdown-menu dropdown-menu-right'>" +
                //    "<a class='dropdown-item' href='#' onclick=Spam_Inbox('" + json[i].IVC_ID + "')><i class='fa fa-pencil'></i> Spam</a>" +
                //    "<a class='dropdown-item' href='#' onclick=Reply_Inbox('" + json[i].IVC_ID + "')><i class='fa fa-reply'></i> Reply</a>" +
                //    "<a class='dropdown-item' href='#' onclick=Assign('" + json[i].IVC_ID + "')><i class='fa fa-share-alt'></i> Assign</a>" +
                //    "<a class='dropdown-item' href='#' onclick=Forward_Inbox('" + json[i].IVC_ID + "')><i class='fa fa-share'></i> Forward</a>" +
                //    "<div class='dropdown-divider'></div>" +
                //    "<a class='dropdown-item' href='#' onclick=PreviewTableInbox('" + json[i].EMAIL_ID + "')><i class='si-arrow-right-circle si'></i> Preview</a>" +
                //    "</div>" +
                //    "</div>"

                //if (json[i].Reading == 0 || json[i].Reading == null) {
                //    var EmailService = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')><b>" + json[i].ETO + "</b></a>"
                //    var EFROM = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')><b>" + json[i].EFROM + "</b></a>"
                //    var subject = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')><b>" + json[i].ESUBJECT + "</b></a>"
                //    var DateRead = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')><b>" + newDate + ' ' + newTime + "</b></a>"
                //} else {
                //    var EmailService = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')>" + json[i].ETO + "</a>"
                //    var EFROM = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')>" + json[i].EFROM + "</a>"
                //    var subject = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')>" + json[i].ESUBJECT + "</a>"
                //    var DateRead = "<a href='#' style='color:black;' onclick=ReadingEmail('" + json[i].IVC_ID + "')>" + newDate + ' ' + newTime + "</a>"
                //}
                var Action = "<i class='fa fa-commenting' onclick=EmailConversation('" + json[i].RefID + "'); style='cursor:pointer;'></i>"
                myTable.row.add([json[i].EFROM, json[i].ETO, json[i].ESUBJECT, json[i].DIRECTION, Action]).draw(false);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}