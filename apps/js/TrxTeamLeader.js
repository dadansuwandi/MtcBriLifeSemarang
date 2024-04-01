$(document).ready(function () {
    CmbUserName();
    CmbTeamLeaderType();
    TrmAgentSetting();
    $("#TxtSearchingUserName").on("input", function () {
        var jumlahString = $(this).val().length;
        if (jumlahString >= 4) {
            SearchingAgent($(this).val());
        } else if (jumlahString == 0) {
            SearchingAgent($(this).val(""));
        }
    });
});
function AddMultiple() {
    $("#modal-agent").modal('show')
    $("#Save").css("display", "block");
}
function TrmAgentSetting() {
    $.ajax({
        type: "POST",
        url: "asmx/TrxTeamLeader.asmx/TeamLeaderType",
        data: "{ID:'0', UserName: '0', GroupAgent: '0', UserCreate: '" + $("#hd_sessionLogin").val() + "', Action: 'TABLE'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var json = JSON.parse(data.d);
            var i = "", resultUserNotification = "";

            $('#divUserNotification').empty();
            for (i = 0; i < json.length; i++) {
                var JenisKelamin = "<img src ='../images/avatar/375x200/2.jpg' alt='...'> "
                resultUserNotification = '<div class="col-md-12 col-lg-3">' +
                    '<div class="box box-default">' +
                    '<div class="fx-card-item">' +
                    '<div class="fx-card-avatar fx-overlay-1">' +
                    '' + JenisKelamin + '' +
                    '<div class="fx-overlay">' +
                    '<ul class="fx-info">' +
                    '<li><a class="btn default btn-outline" href="#" onclick="ButtonDelete(' + json[i].ID + ');"><i class="fa fa-trash-o"></i></a></li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>' +
                    '<div class="fx-card-content">' +
                    '<h5 class="box-title">' + json[i].NAME + '</h5></br>' +
                    '<span class="badge badge-pill badge-primary badge-lg"><small>Type ' + json[i].NameType + '</small></span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                $('#divUserNotification').append(resultUserNotification)

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function SearchingAgent(AgentName) {
    $.ajax({
        type: "POST",
        url: "asmx/TrxTeamLeader.asmx/TeamLeaderType",
        data: "{ID:'" + AgentName + "', UserName: '0', GroupAgent: '0', UserCreate: '" + $("#hd_sessionLogin").val() + "', Action: 'SEARCH'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var json = JSON.parse(data.d);
            var i = "", resultUserNotification = "";

            $('#divUserNotification').empty();
            for (i = 0; i < json.length; i++) {
                var JenisKelamin = "<img src ='../images/avatar/375x200/2.jpg' alt='...'> "
                resultUserNotification = '<div class="col-md-12 col-lg-2">' +
                    '<div class="box box-default">' +
                    '<div class="fx-card-item">' +
                    '<div class="fx-card-avatar fx-overlay-1">' +
                    '' + JenisKelamin + '' +
                    '<div class="fx-overlay">' +
                    '<ul class="fx-info">' +
                    '<li><a class="btn default btn-outline" href="#" onclick="ButtonDelete(' + json[i].ID + ');"><i class="fa fa-trash-o"></i></a></li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>' +
                    '<div class="fx-card-content">' +
                    '<h5 class="box-title">' + json[i].NAME + '</h5></br>' +
                    '<span class="badge badge-pill badge-primary badge-lg"><small>Type ' + json[i].NameType + '</small></span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                $('#divUserNotification').append(resultUserNotification)

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function ButtonDelete(TrxID) {
    swal({
        title: "Do you want to delete login epic?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                var form_data = JSON.stringify({ ID: TrxID, UserName: "0", GroupAgent: "0", UserCreate: $("#hd_sessionLogin").val(), Action: "DELETE" });
                $.ajax({
                    url: "asmx/TrxTeamLeader.asmx/TeamLeaderType",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {
                        console.log(form_data)

                        var json = JSON.parse(data.d);
                        var i = "";
                        for (i = 0; i < json.length; i++) {
                            if (json[i].Result == "True") {
                                swal(
                                    '',
                                    'Delete Data Has Been Success',
                                    'success'
                                ).then(function () {
                                    window.location.href = "TrxTeamLeader.aspx"
                                });
                            } else {
                                swal(
                                    '',
                                    'Delete Data Has Been Failed',
                                    'error'
                                ).then(function () {
                                    $("#modal-agent").modal('hide')
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
function CmbUserName() {
    var ComboUN = $('#ComboUserName');
    $.ajax({
        type: "POST",
        url: "asmx/TrxTeamLeader.asmx/TeamLeaderType",
        data: "{ID:'0', UserName: '0', GroupAgent: '0', UserCreate: '" + $("#hd_sessionLogin").val() + "', Action: 'USERNAME'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var json = JSON.parse(data.d);
            var i, x, result = "";

            ComboUN.empty();
            ComboUN.append("<option value=''>Select</option>");
            for (i = 0; i < json.length; i++) {

                result = '<option value="' + json[i].USERNAME + '">' + json[i].NAME + '</option>';
                ComboUN.append(result);

            }

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function CmbTeamLeaderType() {
    var ComboGA = $('#ComboGroupAgent');
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
function ActionSave() {
    if ($("#ComboUserName").val() == "") {
        swal(
            '',
            'UserName is empty',
            'info'
        ).then(function () {
            return false;
        });
        return false;
    }
    if ($("#ComboGroupAgent").val() == "") {
        swal(
            '',
            'Type is empty',
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
                    ID: "0", UserName: $("#ComboUserName").val(), GroupAgent: $("#ComboGroupAgent").val(), UserCreate: $("#hd_sessionLogin").val(), Action: "INSERT"
                });
                $.ajax({
                    url: "asmx/TrxTeamLeader.asmx/TeamLeaderType",
                    method: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: form_data,
                    success: function (data) {
                        console.log(form_data)

                        var json = JSON.parse(data.d);
                        var i, x = "";
                        for (i = 0; i < json.length; i++) {

                            if (json[i].Result == "True") {
                                swal(
                                    '',
                                    'Insert Data Has Been Success',
                                    'success'
                                ).then(function () {
                                    window.location.href = "TrxTeamLeader.aspx"
                                });
                            } else {
                                swal(
                                    '',
                                    'Insert Data Has Been Failed !',
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