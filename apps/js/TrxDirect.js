﻿$(document).ready(function () {
    AutoInsertThread();
});
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function AutoInsertThread() {
    var TrxUsername = $("#hd_sessionLogin").val();
    var TrxCustomerID = getParameterByName("phone");
    var TrxCallID = getParameterByName("callid");
    //var TrxCallID = $("#ContentPlaceHolder1_CallerID").val()
    //if (TrxUsername == "") {
    //    swal("Session is empty, please relogin");
    //    window.location.href = "../auth_login.aspx?idpage=3028.aspx"
    //    return false;
    //}
    if (getParameterByName("phone") == "") {
        swal("Phone number is empty");
        return false;
    }
    var TrxNumberid = "Call-" + getParameterByName("callid");
    var TrxThreadID = "-";
    var TrxChannel = "Call";
    var TrxAccount = getParameterByName("phone");
    var TrxSubject = "-";
    var form_data = JSON.stringify({ TrxUsername: TrxUsername, TrxCustomerID: TrxCustomerID, TrxNumberid: TrxNumberid, TrxThreadID: TrxThreadID, TrxChannel: TrxChannel, TrxAccount: TrxAccount, TrxSubject: TrxCustomerID, TrxDescription: TrxSubject, callid: TrxCallID });
    console.log("AutoInsertThread : " + form_data)
    $.ajax({
        url: "WebServiceTransaction.asmx/InsertTransactionThread",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: form_data,
        success: function (data) {
            console.log("Exec ActionInsertThread : " + form_data)
            var json = JSON.parse(data.d);
            var i, x;

            for (i = 0; i < json.length; i++) {
                    //swal(json[i].Result)
                   $.toast({
                    heading: '<b>Hi ' + $("#hd_sessionLogin").val() + '</b>',
                    text: 'Your data call ' + getParameterByName("phone"),
                    position: 'top-right',
                    loaderBg: '#ff6849',
                    icon: 'success',
                    hideAfter: 3500,
                    stack: 6
                   });
                if (json[i].Result == "True") {
                    window.location.href = "1_doticket.aspx?id=" + json[i].TrxGenerateCustomerID + "&channel=" + TrxChannel + "&n=1&threadid=" + json[i].TrxGenerateThreadID + "&numberid=" + json[i].TrxGenerateNumberID + "&account=" + getParameterByName("phone") + ""
                } else {
                    swal(
                        '',
                        'caller id already exits',
                        'info'
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