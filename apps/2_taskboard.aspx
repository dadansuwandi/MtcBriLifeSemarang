<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/apps/Uidesk.Master" CodeBehind="2_taskboard.aspx.vb" Inherits="ICC._2_taskboard" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="css/vendors_css.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/skin_color.css">
    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/sweetalert.min.js"></script>
    <script src="js/2_taskboard.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:HiddenField ID="TrxTicketID" runat="server" />
    <asp:HiddenField ID="TrxUserName" runat="server" />
    <asp:HiddenField ID="TrxEmailID" runat="server" />
    <asp:HiddenField ID="TrxGenerateEmailID" runat="server" />
    <div class="container-full">
        <%--  <div class="content-header">
            <div class="d-flex align-items-center">
                <div class="w-p100 d-md-flex align-items-center justify-content-between">
                    <h3 class="page-title">Taskboard</h3>
                    <div class="d-inline-block align-items-center">
                        <nav>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"><i class="mdi mdi-home-outline"></i></a></li>
                                <li class="breadcrumb-item" aria-current="page">Apps</li>
                                <li class="breadcrumb-item active" aria-current="page">Taskboard</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>--%>
        <section class="content">
            <br />
            <%--  <div class="box p-15" id="HeaderAgentGroup">
                <div class="row">
                    <div class="col-12">
                        <div class="dropdown">
                            <button class="btn btn-primary btn-rounded dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">Group Agent</button>
                            <div class="dropdown-menu" style="will-change: transform;">
                                <div id="dropdownmenuagentgroup" class="dropdown-item"></div>
                                <a class="dropdown-item" href="#" onclick="ActionAddMore()"><span class="badge badge-ring badge-success mr-1"></span>All</a>
                                <a class="dropdown-item" href="#" onclick="ActionAddMore()"><span class="badge badge-ring badge-success mr-1"></span>CS</a>
                                <a class="dropdown-item" href="#" onclick="ActionRequestShare()"><span class="badge badge-ring badge-success mr-1"></span>Helpdesk Distribution</a>
                                <a class="dropdown-item" href="#" onclick="ActionRequestShare()"><span class="badge badge-ring badge-success mr-1"></span>Email CS</a>
                                <a class="dropdown-item" href="#" onclick="ActionRequestShare()"><span class="badge badge-ring badge-success mr-1"></span>West</a>
                                <a class="dropdown-item" href="#" onclick="ActionRequestShare()"><span class="badge badge-ring badge-success mr-1"></span>East</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>--%>
            <div class="row" id="2_TampungKotakAtas">
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="box">
                        <div class="box-body">
                            <center>
                                <div class="spinner-border text-warning" id="LoaderPageCounting"></div>
                            </center>
                            <div class="table-responsive">
                                <table id="TaskboardTicket" class="table mt-0 table-hover no-wrap table-borderless" data-page-size="10">
                                    <thead>
                                        <tr>
                                            <th style="width: 20px;">#</th>
                                            <th>Ticket Number</th>
                                            <th style="width: 200px;">Name</th>
                                            <th>Kategori</th>
                                            <th>Problem</th>
                                            <th>Group</th>
                                            <th>SLA</th>
                                            <th style="width: 250px;">Note SLA</th>
                                            <th>Position</th>
                                            <th>Status</th>
                                            <th style="width: 170px;">Date Create</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <div class="modal center-modal fade" id="modal-center" tabindex="-1" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content" style="width: 850px; margin-left: -200px;">
                        <div class="modal-header">
                            <h5 class="modal-title">Form Internal Note</h5>
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea rows="8" class="form-control" id="InternalNote" name="InternalNote" placeholder="Internal Note"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer modal-footer-uniform">
                            <button type="button" class="btn btn-rounded btn-danger" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-rounded btn-primary float-right" onclick="ActionInternalNote()" id="SaveCustomer">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal center-modal fade" id="modal-reminder" tabindex="-1" aria-modal="true" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content" style="width: 1300px; height: 720px; margin-left: -400px;">
                        <div class="modal-header">
                            <h5 class="modal-title">Compose Email Ticket Reminder</h5>
                            &nbsp;&nbsp;
           <%--         <button type="button" class="close" onclick="DraftEvent()">
                        <span aria-hidden="true">×</span>
                    </button>--%>
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div style="overflow-y: scroll; overflow-x: hidden; height: 550px;">
                                <div class="row">
                                    <div class="col-md-1" style="text-align: right;">
                                        <label style="text-align: right;">From</label>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="form-group">
                                            <select id="ComboFrom" class="form-control" style="height: 33px;">
                                                <option value="">Select</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <%--  <div class="row">
                                    <div class="col-md-1" style="text-align: right;">
                                        <label>Format</label>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="form-group">
                                            <select id="FormatTypeCompose" class="form-control" style="height: 33px;" onchange="OnchangeFormatTypeCompose('1')">
                                                <option value="">Select</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>--%>
                                <div class="row">
                                    <div class="col-md-1" style="text-align: right;">
                                        <label class="text-right">To <span class="text-danger">*</span></label>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="form-group">
                                            <div class="controls">
                                                <input type="text" class="form-control" id="ComposeETO" name="ComposeETO" placeholder="To:" data-validation-regex-regex="((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*([;])*)*" data-validation-regex-message="Format Email Address Invalid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-1" style="text-align: right;">
                                        <label>Cc</label>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="form-group">
                                            <div class="controls">
                                                <input type="text" class="form-control" id="ComposeECC" name="ComposeECC" placeholder="CC:" data-validation-regex-regex="((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*([;])*)*" data-validation-regex-message="Format Email Address Invalid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-1" style="text-align: right;">
                                        <label>Subject <span class="text-danger">*</span></label>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="form-group">
                                            <div class="controls">
                                                <input class="form-control" placeholder="Subject:" type="text" id="ComposeESUBJECT" name="ComposeESUBJECT()">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea id="Compose_Body" name="Compose_Body" class="form-control"></textarea>
                                </div>
                                <div class="box-footer" id="divFooter">
                                    <div class="row" id="Div_Compose_Attachment" style="width: 100%;"></div>
                                </div>
                                <div id="divAppendemail"></div>
                            </div>
                        </div>
                        <div class="box-footer">
                            <div class="pull-right">
                                <%--  <a href="#" class="btn btn-rounded btn-warning btn-outline mr-1" onclick="Draft_ActionButton()"><i class="fa fa-pencil"></i>&nbsp;Draft</a>
                        <a href="#" class="btn btn-rounded btn-success btn-outline pull-right" onclick="Compose_ActionButton()"><i class="fa fa-envelope-o"></i>&nbsp;Send</a>--%>
                                <div class="dropdown">
                                    <button class="btn btn-primary btn-outline btn-rounded dropdown-toggle" type="button" data-toggle="dropdown" id="ButtonAction"><i class="fa fa-plus"></i>&nbsp;Action</button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" onclick="Compose_ActionButton()" id="ComposeActionButton"><i class="fa fa-send"></i>Send</a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="btn btn-primary btn-outline btn-rounded btn-file">
                                    <i class="fa fa-paperclip"></i>&nbsp;Attachment					 
                                <input type="file" name="files">
                                </div>
                            </div>
                        </div>
                        <!-- /.box-footer -->
                    </div>
                </div>
            </div>
            <div class="modal modal-right fade" id="modal-group-agent" tabindex="-1" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <a href="#" class="hover-primary" onclick="SearchingOtherChannel()"></a>
                                Form Group Agent
                            </h5>
                            <button type="button" id="chat-box-toggle" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Group Agent</label>
                                        <select class="form-control" style="height: 33px;" id="ComboGroupAgent">
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer modal-footer-uniform">
                            <button type="button" class="btn btn-rounded btn-danger" onclick="CloseTaskboard()">Close</button>
                            <a class="btn btn-rounded btn-primary float-right" href="#" onclick="SubmitTaskboard()">Submit</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="chat-box-body" onclick="FilterGroup()" title="Filter Group Agent">
                <div id="chat-circle" class="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70">
                    <div id="chat-overlay"></div>
                    <%--<span class="mdi mdi-lan-connect font-size-30"></span>--%>
                    <%--<span class="mdi mdi-account-settings-variant font-size-30"></span>--%>
                    <i class="mdi mdi-account-settings-variant font-size-30"></i>
                </div>
            </div>
            <div id="chat-box-bodyDrop"></div>
        </section>
        <!-- /.content -->
    </div>
    <script src="js/pages/validation.js"></script>
    <script src="js/pages/form-validation.js"></script>
    <script src="../assets/vendor_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js"></script>
    <script src="js/ckeditor/ckeditor.js"></script>
    <script>
        var InternalNote = CKEDITOR.replace('InternalNote');
        InternalNote.config.height = 210;
        InternalNote.config.toolbar = 'Basic';
        InternalNote.config.toolbar_Basic =
            [
                ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
            ];
        var Compose_Body = CKEDITOR.replace('Compose_Body');
        Compose_Body.config.height = 210;
        Compose_Body.config.toolbar = 'Basic';
        Compose_Body.config.toolbar_Basic =
            [
                ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
            ];
    </script>
</asp:Content>
