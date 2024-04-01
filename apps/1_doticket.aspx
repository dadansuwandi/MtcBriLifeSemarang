<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/apps/Uidesk.Master" CodeBehind="1_doticket.aspx.vb" Inherits="ICC._1_doticket" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/sweetalert.min.js"></script>
    <script src="js/1_doticket.js"></script>
    <%--    <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>--%>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Content Wrapper. Contains page content -->
    <asp:HiddenField ID="TrxCustomerID" runat="server" />
    <asp:HiddenField ID="TrxNumberID" runat="server" />
    <asp:HiddenField ID="TrxThreadID" runat="server" />
    <asp:HiddenField ID="TrxChannel" runat="server" />
    <asp:HiddenField ID="TrxTicketNumber" runat="server" />
    <asp:HiddenField ID="TrxStatus" runat="server" />
    <asp:HiddenField ID="HD_API_Gender" runat="server" />
    <asp:HiddenField ID="HD_API_NomorPolis" runat="server" />
    <asp:HiddenField ID="hd_Layer" runat="server" />
    <div class="content">
        <div class="row">
            <div class="col-lg-3">
                <!-- left content -->
                <div class="box bg-white">
                    <a class="mdi mdi-close mdi-menu btn btn-success open-left-block d-block d-md-none" href="javascript:void(0)"></a>
                    <div class="scrollable" style="height: 100%;">
                        <div class="left-content-area">
                            <div class="h-p100">
                                <div class="box mb-0 no-shadow bg-transparent b-0">
                                    <div class="box-header with-border p-5">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <p class="font-size-18 mb-0 d-lg-none d-block"><a href="#" id="cht-btn" class="hover-primary"><i class="fa fa-navicon"></i></a></p>
                                            <p class="font-size-18 mb-0">
                                                <a href="#" class="hover-primary">
                                                    <img alt="Profile" src="../images/avatar/6.jpg" class="avatar"></a>
                                            </p>
                                            <p class="font-size-18 mb-0"><a href="#" class="hover-primary" data-toggle="modal" data-target="#modal-SearchUser"><i class="mdi mdi-account-search" style="font-size: 35px;"></i></a></p>
                                        </div>
                                    </div>
                                    <div class="box-body mailbox-nav p-0">
                                        <!-- /.box-header -->
                                        <div class="box-body">
                                            <div class="form-group">
                                                <label>Name &nbsp;<span class="text-danger">*</span></label>
                                                <input type="text" id="Ticket_FullName" class="form-control" placeholder="Nama Lengkap">
                                            </div>
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input type="email" id="Ticket_Email" class="form-control" placeholder="Email Address">
                                            </div>
                                            <div class="form-group">
                                                <label>Phone Number</label>
                                                <%--<small class="sidetitle">E.g. +62123-1456-78900</small>--%>
                                                <input type="text" id="Ticket_Phone" class="form-control" placeholder="Phone Number">
                                            </div>
                                            <div class="form-group">
                                                <label>Gender</label>
                                                <div class="c-inputs-stacked">
                                                    <input name="Gender" type="radio" id="GenderMale_Ticket" value="Male">
                                                    <label for="GenderMale_Ticket" class="block">Male</label>
                                                    <input name="Gender" type="radio" id="GenderFemale_Ticket" value="Female">
                                                    <label for="GenderFemale_Ticket" class="block">Female</label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Date of Birth</label>
                                                <input class="form-control" id="Ticket_Dateofbirth" type="date">
                                            </div>
                                            <div class="form-group">
                                                <label>Nomor Kartu</label>
                                                <input type="text" id="Ticket_CIF" class="form-control" placeholder="Nomor Kartu">
                                            </div>
                                            <div class="form-group">
                                                <label>Badan Usaha</label>
                                                <input type="text" id="Ticket_Badan_Usaha" class="form-control" placeholder="Badan Usaha">
                                            </div>
                                            <div class="form-group">
                                                <label>NIK</label>
                                                <input type="text" id="Ticket_NIK" class="form-control" placeholder="NIK">
                                            </div>
                                            <div class="form-group">
                                                <label>Address</label>
                                                <textarea rows="5" id="Ticket_Address" name="Ticket_Address" cols="5" class="form-control" placeholder="Address"></textarea>
                                            </div>

                                            <div class="form-group" id="Div_WAProperties" style="display: none;">
                                                <label>Customer Properties</label>
                                                <input type="text" id="Customer_Properties" class="form-control" placeholder="Customer Properties" readonly="readonly">
                                            </div>
                                            <%-- <div class="form-group">
                                                <label>Billing Address</label>
                                                <textarea rows="5" id="Ticket_Billing_Address" name="Ticket_Billing_Address" cols="5" class="form-control"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label>Billing City</label>
                                                <input type="text" id="Ticket_Billing_City" class="form-control" placeholder="Billing City">
                                            </div>
                                            <div class="form-group">
                                                <label>Billing State</label>
                                                <input type="text" id="Ticket_Billing_State" class="form-control" placeholder="Billing State">
                                            </div>--%>
                                        </div>
                                        <!-- /.box-body -->
                                        <div class="box-footer">
                                            <%--<button type="submit" class="btn btn-rounded btn-success btn-outline float-right" onclick="ShowActionUpdate()">
                                                <i class="ti-save-alt"></i>&nbsp;Edit
                                            </button>--%>
                                            <button type="submit" class="btn btn-rounded btn-success btn-outline float-right" id="ButtonSaveDataProfile" onclick="Button_SaveData_Profile()" style="display: none;">
                                                <i class="ti-save-alt"></i>&nbsp;Save Data API
                                            </button>
                                        </div>

                                    </div>

                                    <!-- /.box-body -->
                                </div>
                                <!-- /. box -->
                                <br />
                                <!-- /.box -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.left content -->
            </div>
            <div class="col-12 col-xl-9">
                <div class="row">
                    <div class="col-12">
                        <div class="box bg-white">
                            <div class="box-body">
                                <!-- Nav tabs -->
                                <ul class="nav nav-pills rounded nav-justified">
                                    <li class="nav-item"><a href="#navpills-2" class="nav-link active" data-toggle="tab" aria-expanded="false"><i class="fa fa-ticket"></i>&nbsp;Data Ticketing</a> </li>
                                    <%--<li class="nav-item"><a href="#navpills-5" class="nav-link" data-toggle="tab" aria-expanded="true" onclick="TabDetailPolisNumber()"><i class="fa fa-address-book"></i>&nbsp;Detail Polis Number</a> </li>--%>
                                    <li class="nav-item"><a href="#navpills-3" class="nav-link" data-toggle="tab" aria-expanded="true" onclick="TableHistoryTicket()"><i class="fa fa-tasks"></i>&nbsp;History Ticketing</a> </li>
                                    <li class="nav-item"><a href="#navpills-4" class="nav-link" data-toggle="tab" aria-expanded="true" onclick="TableChannelInformation()"><i class="fa fa-id-card" aria-hidden="true"></i>&nbsp;Channel Information</a> </li>
                                    <li class="nav-item"><a href="#navpills-1" class="nav-link" data-toggle="tab" aria-expanded="true"><i class="fa fa-sticky-note"></i>&nbsp;Instan Note</a> </li>
                                    <li class="nav-item"><a href="#navpills-6" class="nav-link" data-toggle="tab" aria-expanded="true"><i class="fa fa-plug"></i>&nbsp;McSys Provider</a> </li>
                                </ul>
                            </div>
                            <!-- /.box-body -->
                        </div>
                        <div class="box">
                            <div class="box-body">
                                <div class="tab-content">
                                    <div id="navpills-1" class="tab-pane">
                                        <!-- Categroy 1 -->
                                        <div class=" tab-pane animation-fade active" id="category-2" role="tabpanel">
                                            <div class="panel-group panel-group-simple panel-group-continuous" id="accordion2"
                                                aria-multiselectable="true" role="tablist">
                                                <div class="form-group">
                                                    <textarea id="_NoteInstan" name="_NoteInstan" class="form-control" style="height: 400px;" placeholder="Note Instan Transaction"></textarea>
                                                    <%--<iframe class="wysihtml5-sandbox" security="restricted" allowtransparency="true" marginwidth="0" marginheight="0" style="display: block; background-color: rgb(255, 255, 255); border-collapse: separate; border-color: rgb(104, 140, 180); border-style: solid; border-width: 0.8px; clear: none; float: none; margin: 0px; outline: rgb(73, 80, 87) none 0px; outline-offset: 0px; padding: 5.25px 10.5px; position: static; inset: auto; z-index: auto; vertical-align: text-bottom; text-align: start; box-sizing: border-box; box-shadow: none; border-radius: 10px; width: 100%; height: 300px;" width="0" height="0" frameborder="0"></iframe>--%>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-2">
                                                    </div>
                                                    <div class="col-md-8">
                                                    </div>
                                                    <div class="col-md-2">
                                                        <button type="button" id="Button2" class="btn btn-rounded btn-success btn-outline pull-right" onclick="SubmitInstanNote()">
                                                            <i class="ti-save-alt"></i>&nbsp;Submit
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="timeline timeline-single-column timeline-single-full-column" style="margin-left: -12px; margin-top: -25px;" id="Ticket_display">
                                                    <span class="timeline-label">
                                                        <button class="btn btn-success btn-rounded"><i class="fa fa-clock-o"></i></button>
                                                    </span>
                                                    <div id="Ticket_ListTransactionNote"></div>
                                                    <span class="timeline-label">
                                                        <button class="btn btn-danger btn-rounded"><i class="fa fa-clock-o"></i></button>
                                                    </span>
                                                </div>
                                            </div>

                                            <%--<hr />--%>
                                        </div>
                                    </div>
                                    <div id="navpills-2" class="tab-pane active">
                                        <%--<form id="Ticket_CreateForm" novalidate="novalidate" class="form">--%>
                                        <div class="row">
                                            <div class="col-md-1">
                                                <div class="pull-left">
                                                    <input type="checkbox" id="basic_checkbox_3" class="filled-in" />
                                                    <label for="basic_checkbox_3">Provider</label>
                                                </div>
                                            </div>
                                            <div class="col-md-10">
                                            </div>
                                            <div class="col-md-1">
                                                <div class="pull-right">
                                                    <input type="checkbox" id="basic_checkbox_2" class="filled-in" />
                                                    <label for="basic_checkbox_2">Peserta</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <%--<label id="NameReported"></label>--%>
                                                    <label>Name Reported</label>
                                                    <input type="text" class="form-control" id="Reported_Name" placeholder="Name Reported">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <%--<label id="EmailReported"></label>--%>
                                                    <label>Email Reported</label>
                                                    <input type="text" class="form-control" id="Reported_Email" placeholder="Email Reported">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <%--<label id="ContactNumberReported"></label>--%>
                                                    <label>Contact Number Reported</label><span class="badge badge-pill badge-warning float-right" id="dialcall"><a href="#" style="color: white;" title="Outbound Call"><i class="fa fa-phone" onclick="ClickCall()"></i></a></span><span id="dropcall"></span>
                                                    <input type="text" class="form-control" id="Reported_Phone" placeholder="Contact Number Reported">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <%--<label id="ContactAccountReported"></label>--%>
                                                    <label>PIC Reported</label>
                                                    <input type="text" class="form-control" id="Reported_Channel_Contact" placeholder="PIC Reported">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Address Reported</label>
                                                    <textarea rows="5" cols="5" class="form-control" id="Reported_Address" name="Reported_Address" placeholder="Address"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="my-15">
                                        <div class="row">
                                            <div class="col-md-3" style="display: none;">
                                                <div class="form-group">
                                                    <label>Date of Transaction</label>
                                                    <input class="form-control" type="datetime-local" id="Ticket_DateofTransaction">
                                                </div>
                                            </div>

                                            <div class="col-md-3" style="display: none;">
                                                <div class="form-group">
                                                    <label>Product Type</label>
                                                    <select name="select" id="Ticket_ProductType" class="form-control" style="height: 33px;" onchange="Get_ProductName(1)">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3" style="display: none;">
                                                <div class="form-group">
                                                    <label>Product Name</label>
                                                    <select name="select" id="Ticket_ProductName" class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Ticket Channel &nbsp;<span class="text-danger">*</span></label>
                                                    <select name="select" id="Ticket_SourceChannel" required class="form-control" style="height: 33px;" onchange="ChanelOutbound('1')">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Reason Call &nbsp;<span class="text-danger" id="BintangReasonCall">*</span></label>
                                                    <select name="select" id="Ticket_UserStatus" class="form-control" style="height: 33px; display: none;">
                                                        <option value="">Select</option>
                                                    </select>
                                                    <select name="select" id="Ticket_ReasonCall" class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Customer Category &nbsp;<span class="text-danger">*</span></label>
                                                    <select name="select" id="Ticket_UserCategory" required class="form-control" style="height: 33px;" onchange="GetCustomerCategory('1')">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Agent Name &nbsp;<span class="text-danger">*</span></label>
                                                    <select name="select" id="Ticket_AgentName" class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>
                                                    </select>
                                                    <%--<input class="form-control" type="text" id="Ticket_AgentName" placeholder="Agent Name">--%>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Provider Name &nbsp;<span class="text-danger" id="BintangProviderName">*</span></label><span class="badge badge-pill badge-primary float-right"><a href="#" data-toggle="modal" data-target="#modal-SearchProvider" style="color: white;"><i class="fa fa-home"></i></a></span>
                                                    <input class="form-control" type="text" id="Ticket_Nama_Provider" placeholder="Provider Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Claim Number &nbsp;<span class="text-danger" id="BintangClaimNumber">*</span></label>
                                                    <input class="form-control" type="text" id="Ticket_BankAccount" placeholder="Claim Number">
                                                    <%--<select name="select" id="Ticket_BankAccount" required class="form-control" style="height: 33px;">
                                                            <option value="">Select</option>
                                                            <option value="None">None</option>
                                                        </select>--%>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                           <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Ticket Status &nbsp;<span class="text-danger">*</span></label>
                                                    <select name="select" id="Ticket_Status" required class="form-control" onchange="get_escalation();" style="height: 33px;">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>                                           
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Category &nbsp;<span class="text-danger">*</span></label>
                                                    <select name="select" id="Ticket_Category" onchange="getWS_CategoryType(1);" required class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Enquiry Type &nbsp;<span class="text-danger">*</span></label>
                                                    <select name="select" id="Ticket_Enquiry" onchange="getWS_CategoryTypeDetail(1);" required class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Enquiry Detail &nbsp;<span class="text-danger">*</span></label>
                                                    <select name="select" id="Ticket_EnquiryDetail" onchange="getWS_CategoryTypeReason(1);" required class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Problem &nbsp;<span class="text-danger">*</span></label><span class="badge badge-pill badge-primary float-right" style="font-weight: bold; font-size: 12px;" id="Ticket_SLA"><i class="fa fa-clock-o"></i>&nbsp;0 Minute</span>
                                                    <select name="select" id="Ticket_EnquiryReason" onchange="getWS_SLAReason(1);" required class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Priority Scale &nbsp;<span class="text-danger">*</span></label>
                                                    <select name="select" id="Ticket_Priority" required class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>                                             
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Escalation Type &nbsp;<span class="text-danger">*</span></label>
                                                    <select name="select" id="Ticket_Escalation_Type" required class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Escalation Unit &nbsp;<span class="text-danger">*</span></label>
                                                    <select name="select" id="Ticket_Escalation" required class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Escalation Ticket &nbsp;<span class="text-danger">*</span></label><span class="badge badge-pill badge-primary float-right" style="font-weight: bold; font-size: 12px;" id="Ticket_Layer"></span>
                                                    <select name="select" id="Ticket_EscalationLayer" required class="form-control" style="height: 33px;">
                                                        <option value="">Select</option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <%--  <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>SLA (Day)</label><br />
                                                        <span class="timeline-label" id="Ticket_SLA">
                                                            <button class="btn btn-success btn-rounded" type="reset" title="SLA (Days)" style="margin-top: -5px;"><i class="fa fa-clock-o"></i>&nbsp;0</button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>--%>
                                        <div class="row" id="DivSubjectEmail" style="display: none;">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Subject</label><a href="#" onclick="PreviewEmail('<%=Request.QueryString("threadid")%>');" title="Preview Email Body"><span class="badge badge-pill badge-info float-right" style="font-weight: bold; font-size: 14px;"><i class="mdi mdi-email-outline"></i></span></a>
                                                    <input type="text" id="Ticket_Subject_Email" class="form-control" placeholder="Subject Email">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" id="DivSubjectWhatsapp" style="display: none;">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Subject</label><a href="#" onclick="PreviewWhatsApp('<%=Request.QueryString("numberid")%>');" target="_blank" title="Preview WhatsApp Conversation"><span class="badge badge-pill badge-success float-right" style="font-weight: bold; font-size: 14px;"><i class="mdi mdi-comment-text-outline"></i></span></a>
                                                    <input type="text" id="Ticket_Subject_Whatsapp" class="form-control" placeholder="Subject WhatsApp">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" id="DivReasonCall" style="display: none;">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Reason Call</label>
                                                    <input type="text" id="Ticket_Reason_Call" class="form-control" placeholder="Reason Call">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Customer Question &nbsp;<span class="text-danger">*</span></label>
                                                    <%--<label><span class="badge badge-pill badge-info" onclick="ScriptComplaint()">Format Script Description</span></label>--%>
                                                    <textarea rows="10" class="form-control" id="Ticket_Complaints" name="Ticket_Complaints" placeholder="Customer Question"></textarea>
                                                </div>
                                            </div>
                                            <%-- </div>
                                            <div class="row">--%>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Agent Response &nbsp;<span class="text-danger">*</span></label>
                                                    <%--<label><span class="badge badge-pill badge-info" onclick="ScriptResponse()">Format Script Response</span></label>--%>
                                                    <textarea rows="10" class="form-control" id="Ticket_NoteAgent" placeholder="Agent Response"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <%--<p class="help-block">Max. 3MB</p>--%>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="row" id="divAttachmentTicket" style="width: 100%; margin-left: 5px; margin-top: -15px;"></div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row" id="divAttachmentEmail" style="width: 100%; margin-left: 5px; margin-top: -15px;"></div>
                                            </div>
                                        </div>
                                        <!-- /.box-body -->

                                        <div class="box-footer text-right">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="pull-left" style="margin-left: -23px;">
                                                        <div class="btn btn-rounded btn-default btn-file">
                                                            <i class="fa fa-paperclip"></i>&nbsp;Attachment					 
                                                            <input type="file" name="files">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="pull-right" style="margin-right: -20px;">
                                                        <button type="button" class="btn btn-rounded btn-warning btn-outline mr-1" onclick="CancelSaveTicket()">
                                                            <i class="ti-trash"></i>Cancel
                                                        </button>
                                                        <a id="Ticket_SaveData" class="btn btn-rounded btn-success btn-outline pull-right" onclick="Ticket_SaveTicket()">
                                                            <i class="ti-save-alt"></i>&nbsp;Save
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                            <%--<span class="timeline-label" id="Ticket_SLA"><i class="mdi mdi-timer">0</i></span>--%>
                                        </div>
                                        <%--</form>--%>
                                    </div>
                                    <div id="navpills-3" class="tab-pane">
                                        <div class="panel-body">
                                            <table id="TableHistoryTicket" class="table mt-0 table-hover no-wrap table-borderless" style="width: 100%;">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 50px;">ID</th>
                                                        <th style="width: 100px;">Ticket Number</th>
                                                        <th style="width: 200px;">Category</th>
                                                        <th style="width: 100px;">Status</th>
                                                        <th style="width: 200px;">User Create</th>
                                                        <th style="width: 170px;">Date Create</th>
                                                        <th style="width: 50px;">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div id="navpills-4" class="tab-pane">
                                        <div class="panel-body">
                                            <%--<h4 class="box-title">Add Channel &nbsp;<i class="fa fa-plus" onclick="showAdd()"></i></h4>--%>
                                            <%--     <a href="#" onclick="showAdd()"><span class="badge badge-pill badge-success" title="Add Channel Customer"><b><i class="si-plus si"></i>&nbsp;Add Channel </b></span></a>
                                            <br />
                                            <br />--%>
                                            <%--  <div class="row" style="margin-top:-20px;">
                                                <div class="col-md-12" >
                                                    
                                                </div>
                                            </div>--%>
                                            <%--<button type="button" class="btn btn-rounded btn-default float-right" onclick="AddChannelCustomer();">+ Add</button>--%>
                                            <a href="#" onclick="AddChannelCustomer();"><span class="badge badge-pill badge-default float-right" style="font-weight: bold; font-size: 14px;">+</span></a>
                                            <table id="TableChannelInformation" class="table mt-0 table-hover no-wrap table-borderless" style="width: 100%;">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 100px;">Channel</th>
                                                        <th style="width: 200px;">Account</th>
                                                        <th style="width: 100px;">Status</th>
                                                        <th style="width: 200px;">User Create</th>
                                                        <th style="width: 50px;">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div id="navpills-5" class="tab-pane">
                                        <div class="panel-body">
                                            <div class="row" id="Div_ListNomorPolis">
                                                <div class="col-md-12">
                                                    <table id="TrmPolisNumber" class="table b-1 border-primary" style="width: 100%; overflow-x: scroll; overflow: scroll;">
                                                        <thead class="bg-primary">
                                                            <tr>
                                                                <th style="width: 30px;">#</th>
                                                                <th style="width: 150px;">Nomor Polis</th>
                                                                <th style="width: 150px;">Nomor SPAJ</th>
                                                                <th style="width: 150px;">Nama Pemegang Polis</th>
                                                                <th style="width: 150px;">Product</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Nama Pemegang Polis</label>
                                                        <input type="text" class="form-control" id="API_Nama" placeholder="Nama Pemegang Polis" title="Nama Pemegang Polis" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Status Polis</label>
                                                        <input type="text" class="form-control" id="API_StatusPolis" placeholder="Status Polis" title="Status Polis" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Premi Dasar</label>
                                                        <input type="text" class="form-control" id="API_PremiDasar" placeholder="Premi Dasar" title="Premi Dasar" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Flagging Nasabah</label>
                                                        <input type="text" class="form-control" id="API_FlaggingNasabah" placeholder="Flagging Nasabah" title="Flagging Nasabah" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Jenis Kelamin Pemegang Polis</label>
                                                        <input type="text" class="form-control" id="API_Gender" placeholder="Nama Pemegang Polis" title="Nama Pemegang Polis" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Uang Pertanggungan</label>
                                                        <input type="text" class="form-control" id="API_UangPertanggungan" placeholder="Uang Pertanggungan" title="Uang Pertanggungan" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Premi Top Up</label>
                                                        <input type="text" class="form-control" id="API_PremiDasarTopup" placeholder="Premi Top Up" title="Premi Top Up" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Nomor HP Pemegang Polis</label>
                                                        <input type="text" class="form-control" id="API_NomorHPPemegangPolis" placeholder="Nomor HP Pemegang Polis" title="Nomor HP Pemegang Polis" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Tgl. Lahir Pemegang Polis</label>
                                                        <input type="text" class="form-control" id="API_DOB" placeholder="Tgl. Lahir Pemegang Polis" title="Tgl. Lahir Pemegang Polis" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Tgl. Mulai Polis</label>
                                                        <input type="text" class="form-control" id="API_TglMulaiPolis" placeholder="Tgl. Mulai Polis" title="Tgl. Mulai Polis" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Masa Bayar</label>
                                                        <input type="text" class="form-control" id="API_MasaBayar" placeholder="Masa Bayar" title="Masa Bayar" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Email Pemegang Polis</label>
                                                        <input type="text" class="form-control" id="API_EmailPemegangPolis" placeholder="Email Pemegang Polis" title="Email Pemegang Polis" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>NIK Pemegang Polis</label>
                                                        <input type="text" class="form-control" id="API_NIK" placeholder="NIK Pemegang Polis" title="NIK Pemegang Polis" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Tgl. Berakhir Polis</label>
                                                        <input type="text" class="form-control" id="API_TglBerakhirPolis" placeholder="Tgl. Berakhir Polis" title="Tgl. Berakhir Polis" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Cara Bayar</label>
                                                        <input type="text" class="form-control" id="API_CaraBayar" placeholder="Cara Bayar" title="Cara Bayar" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Alamat Identitas Pemegang Polis</label>
                                                        <input type="text" class="form-control" id="API_AlamatIdentitasPemegangPolis" placeholder="Alamat Identitas Pemegang Polis" title="Alamat Identitas Pemegang Polis" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Nama Gadis Ibu Kandung</label>
                                                        <input type="text" class="form-control" id="API_IbuKandung" placeholder="Nama Gadis Ibu Kandung" title="Nama Gadis Ibu Kandung" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Tgl. Kirim E-Polis</label>
                                                        <input type="text" class="form-control" id="API_TglKirimEPolis" placeholder="Tgl. Kirim E-Polis" title="Tgl. Kirim E-Polis" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Jenis Pembayaran</label>
                                                        <input type="text" class="form-control" id="API_JenisPembayaran" placeholder="Jenis Pembayaran" title="Jenis Pembayaran" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Core System</label>
                                                        <input type="text" class="form-control" id="API_Core" placeholder="Core System" title="Core System" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Nama Tertanggung</label>
                                                        <input type="text" class="form-control" id="API_NamaTertanggung" placeholder="Nama Tertanggung" title="Nama Tertanggung" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Masa Asuransi</label>
                                                        <input type="text" class="form-control" id="API_MasaAsuransi" placeholder="Masa Asuransi" title="Masa Asuransi" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Nomor Rekening</label>
                                                        <input type="text" class="form-control" id="API_NomorRekening" placeholder="Nomor Rekening" title="Nomor Rekening" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Accounts MyAccess</label>
                                                        <input type="text" class="form-control" id="API_AccountsMyAccess" placeholder="Accounts MyAccess" title="Accounts MyAccess" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Tgl. Lahir Tertanggung</label>
                                                        <input type="text" class="form-control" id="API_TglLahirTertanggung" placeholder="Tgl. Lahir Tertanggung" title="Tgl. Lahir Tertanggung" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Nomor Virtual Account</label>
                                                        <input type="text" class="form-control" id="API_NomorVirtualAccount" placeholder="Nomor Virtual Account" title="Nomor Virtual Account" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Nama Bank</label>
                                                        <input type="text" class="form-control" id="API_NamaBank" placeholder="Nama Bank" title="Nama Bank" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Jenis Kelamin Tertanggung</label>
                                                        <input type="text" class="form-control" id="API_JenisKelaminTertanggung" placeholder="Jenis Kelamin Tertanggung" title="Jenis Kelamin Tertanggung" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Nama Tenaga Penjualan</label>
                                                        <input type="text" class="form-control" id="API_NamaTenagaPenjualan" placeholder="Nama Tenaga Penjualan" title="Nama Tenaga Penjualan" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label>Nama Pemilik Rekening</label>
                                                        <input type="text" class="form-control" id="API_NamaPemilikRekening" placeholder="Nama Pemilik Rekening" title="Nama Pemilik Rekening" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="nav-tabs-custom box-profile">
                                                        <ul class="nav nav-tabs">
                                                            <li><a class="active" href="#TabWaris" data-toggle="tab"><i class="fa fa fa-group" aria-hidden="true"></i>&nbsp;Nama Ahli Waris</a></li>
                                                            <li><a href="#TabManfaat" data-toggle="tab" class=""><i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;Manfaat Asuransi</a></li>
                                                            <li><a href="#TabDarlink" data-toggle="tab" class=""><i class="fa fa-institution" aria-hidden="true"></i>&nbsp;Alokasi Darlink</a></li>
                                                            <li><a href="#TabTunai" data-toggle="tab" class=""><i class="fa fa-money" aria-hidden="true"></i>&nbsp;Nilai Tunai</a></li>
                                                            <li><a href="#TabPremi" data-toggle="tab" class=""><i class="fa fa-history" aria-hidden="true"></i>&nbsp;History Premi</a></li>
                                                        </ul>
                                                        <div class="tab-content">
                                                            <div class="tab-pane active" id="TabWaris">
                                                                <table id="TrmWaris" class="table b-1 border-primary" style="width: 100%; overflow-x: scroll; overflow: scroll;">
                                                                    <thead class="bg-primary">
                                                                        <tr>
                                                                            <th style="width: 150px;">Nama Ahli Waris</th>
                                                                            <th style="width: 150px;">Persentase</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div class="tab-pane" id="TabManfaat">
                                                                <table id="TrmManfaat" class="table b-1 border-primary" style="width: 100%; overflow-x: scroll; overflow: scroll;">
                                                                    <thead class="bg-primary">
                                                                        <tr>
                                                                            <th style="width: 150px;">Manfaat</th>
                                                                            <th style="width: 150px;">Nominal</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div class="tab-pane" id="TabDarlink">
                                                                <table id="TrmDarlink" class="table b-1 border-primary" style="width: 100%; overflow-x: scroll; overflow: scroll;">
                                                                    <thead class="bg-primary">
                                                                        <tr>
                                                                            <th style="width: 200px;">Alokasi Investasi/Darlink</th>
                                                                            <th style="width: 100px;">Persentase Alokasi</th>
                                                                            <th style="width: 100px;">Saldo Unit</th>
                                                                            <th style="width: 100px;">Nilai NAB</th>
                                                                            <th style="width: 100px;">Saldo Rupiah</th>
                                                                            <th style="width: 100px;">Tgl. NAB</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div class="tab-pane" id="TabTunai">
                                                                <table id="TrmTunai" class="table b-1 border-primary" style="width: 100%; overflow-x: scroll; overflow: scroll;">
                                                                    <thead class="bg-primary">
                                                                        <tr>
                                                                            <th style="width: 50px;">Tahun Ke</th>
                                                                            <th style="width: 150px;">Nilai Tunai</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div class="tab-pane" id="TabPremi">
                                                                <table id="TrmPremi" class="table b-1 border-primary" style="width: 100%; overflow-x: scroll; overflow: scroll;">
                                                                    <thead class="bg-primary">
                                                                        <tr>
                                                                            <th style="width: 150px;">Kuitansi Ke</th>
                                                                            <th style="width: 150px;">Tgl. Jatuh Tempo</th>
                                                                            <th style="width: 150px;">Tgl. Pembayaran Premi</th>
                                                                            <th style="width: 150px;">Nominal Premi</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <!-- /.tab-pane -->
                                                        </div>
                                                        <!-- /.tab-content -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="navpills-6" class="tab-pane">
                                        <div class="panel-body">
                                            <iframe src="https://healthcare-dev.brilife.co.id/provider" style="width: 100%; border: 0px; height: 750px;"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="chat-box-body" onclick="modalAPI()" title="API Profile Data Customer" style="display: none;">
            <div id="chat-circle" class="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70">
                <div id="chat-overlay"></div>
                <span class="mdi mdi-lan-connect font-size-30"></span>
            </div>
        </div>
        <div id="chat-box-bodyDrop"></div>
        <div id="divdrop"></div>
    </div>
    <!-- /.content-wrapper -->
    <!-- Modal -->
    <div class="modal modal-left fade" id="modal-SearchUser" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <a href="#" class="hover-primary" onclick="SearchingOtherChannel()"><i class="mdi mdi-account-settings-variant" style="font-size: 25px;"></i></a>
                        Form Searching Customer
                    </h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center bt-0 border-light p-2">
                                <div class="input-group">
                                    <input type="search" id="Ticket_SearchCustomer" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
                                </div>
                            </div>
                            <div class="box-body p-0">
                                <div id="Ticket_ListCustomer" class="scrollable ps-container ps-theme-default ps-active-y" style="overflow: hidden; width: auto; height: 600px;">
                                    <div class="media media-single">No data found... </div>
                                </div>
                            </div>
                            <%-- <div class="text-center bt-1 border-light p-2">
                                <a class="btn btn-block btn-default btn-sm" href="#" data-toggle="modal" data-target="#modal-center" onclick="showAddCustomer()">Add Customer</a>
                            </div>--%>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger" data-dismiss="modal">Close</button>
                    <a class="btn btn-rounded btn-primary float-right" href="#" data-toggle="modal" data-target="#modal-center" onclick="showAddCustomer()">Add Peserta</a>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade bs-example-modal-lg" role="dialog" id="modal-ShowTicket" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">History Ticket Customer</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="box">

                        <!-- /.box-header -->
                        <div class="box-body">
                            <div class="table-responsive" style="overflow-y: scroll; overflow-x: hidden; height: 400px;">
                                <table id="Ticket_DataTableHistory" class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Ticket Number</th>
                                            <th>Channel</th>
                                            <th>Category</th>
                                            <%--<th>Enquiry Type</th>
								<th>Enquiry Detail</th>--%>
                                            <th>Reason</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <%--<tbody>
							
							
						</tbody>--%>
                                    <tfoot>
                                        <tr>
                                            <th>Ticket Number</th>
                                            <th>Channel</th>
                                            <th>Category</th>
                                            <%--<th>Enquiry Type</th>
								<th>Enquiry Detail</th>--%>
                                            <th>Reason</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-rounded btn-primary float-right">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /.modal -->
    <!-- /.modal -->
    <div class="modal center-modal fade" id="modal-center" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 1100px; height: 720px; margin-left: -300px;">
                <div class="modal-header">
                    <h5 class="modal-title">Form Add Customer</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="scrollable ps-container ps-theme-default ps-active-y" style="position: fixed; height: 570px; width: 1070px;">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Name &nbsp;<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="cusTomerName" placeholder="Name">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Email Address </label>
                                    <input type="text" class="form-control" id="cusTomerEmail" placeholder="Email Address">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" class="form-control" id="cusTomerPhone" placeholder="Phone Number">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Gender &nbsp;<span class="text-danger">*</span></label>
                                    <select name="select" id="cusTomerGender" class="form-control">
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <%--  <div class="row">                           
                        </div>--%>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Date of Birth</label>
                                    <input class="form-control" type="date" id="cusTomerDate">
                                </div>
                            </div>
                            <%-- <div class="col-md-4">
                                <div class="form-group">
                                    <label>Polis Number</label>
                                    <input type="text" class="form-control" id="cusTomerPolisNumber" placeholder="Polis Number">
                                </div>
                            </div>--%>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Nomor Kartu &nbsp;<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="cusTomerNomorKartu" placeholder="Nomor Kartu">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Badan Usaha &nbsp;<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="cusTomerBadanUsaha" placeholder="Badan Usaha">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>NIK</label>
                                    <input type="text" class="form-control" id="cusTomerNIK" placeholder="NIK">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea rows="6" class="form-control" id="cusTomerAlamat" name="cusTomerAlamat" placeholder="Alamat"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-11">
                            </div>
                            <div class="col-md-1">
                                <button type="button" class="btn btn-rounded btn-primary float-right" onclick="ActionUpdateCustomer()" id="UpdateCustomer" style="display: none;">Update</button>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-md-12">
                                <table id="TblSearchingCustomer" class="table table-hover table-dark mb-0">
                                    <thead>
                                        <tr>
                                            <th>Customer ID</th>
                                            <th style="width: 250px;">Name</th>
                                            <th style="width: 250px;">Channel</th>
                                            <th>Type</th>
                                            <th style="height: 30px;">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-rounded btn-primary float-right" onclick="ActionInsertCustomer()" id="SaveCustomer">Save</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /.modal -->
    <!-- /.modal -->
    <div class="modal center-modal fade" id="modal-list-transaction-ticket" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 1100px; height: 600px; margin-left: -300px;">
                <div class="modal-header">
                    <h5 class="modal-title">List Data Transaction Ticket</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="box">
                                <div class="box-body">
                                    <div class="scrollable ps-container ps-theme-default ps-active-y" style="position: fixed; height: 450px; width: 1070px;">
                                        <table id="ListTransactionTicket" class="table table-hover table-dark mb-0" style="width: 100%;" data-page-size="5">
                                            <thead>
                                                <tr>
                                                    <th style="width: 50px;">Action</th>
                                                    <th style="width: 150px;">Date</th>
                                                    <th style="width: 150px;">Ticket Number</th>
                                                    <th style="width: 150px;">Kategori</th>
                                                    <th style="width: 150px;">Created By</th>
                                                    <th style="width: 70px;">Status</th>
                                                    <th style="width: 70px;">SLA</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <h4 style="margin-bottom: -30px;">Do you want to add ticket?</h4>
                    <button type="button" id="Ticket_AddTransaction" class="btn btn-rounded btn-danger btn-outline float-right" onclick="PublishTransaction()">
                        <i class="fa fa-times-circle"></i>&nbsp;No
                    </button>
                    <button type="button" id="Ticket_PublishTransaction" class="btn btn-rounded btn-success btn-outline float-right" onclick="AddTransaction()">
                        <i class="fa fa-check-circle"></i>&nbsp;Yes
                    </button>
                </div>
                <%-- <div class="modal-footer modal-footer-uniform">
                    <button type="button" id="Button1" class="btn btn-rounded btn-secondary" onclick="AddTransaction()">
                        <i class="fa fa-plus"></i>&nbsp;Add Transaction
                    </button>
                    <button type="button" id="Ticket_PublishTransaction" class="btn btn-rounded btn-success btn-outline float-right" onclick="PublishTransaction()">
                        <i class="ti-save-alt"></i>&nbsp;Publish Transaction
                    </button>
                </div>--%>
            </div>
        </div>
    </div>
    <!-- /.modal -->
    <!-- /.modal -->
    <div class="modal center-modal fade" id="modal-searching-other" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 1100px; height: 700px; margin-left: -300px;">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="mdi mdi-clipboard-account" style="font-size: 22px;"></i>Form Searching Other Channel</h5>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <center>
                        <div class="spinner-border text-warning" id="LoaderChannel"></div>
                    </center>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="scrollable ps-container ps-theme-default ps-active-y" style="position: fixed; height: 520px; width: 1070px;">
                        <table id="TableSearchingOtherChannel" class="table b-1 border-primary" style="width: 100%;">
                            <thead class="bg-primary">
                                <tr>
                                    <th style="width: 200px;">Name</th>
                                    <th style="width: 200px;">Account</th>
                                    <th style="width: 60px;">Channel</th>
                                    <th style="width: 60px;">Status</th>
                                    <th style="width: 60px;">Action</th>
                                    <%--<th style="width: 100px;">User Create</th>
                                    <th style="width: 170px;">Date Create</th>--%>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger float-right" data-dismiss="modal">Close</button>
                    <%--<button type="button" class="btn btn-rounded btn-primary float-right" onclick="ActionInsertCustomer()" id="Button1">Save</button>--%>
                </div>
            </div>
        </div>
    </div>
    <div class="modal modal-right fade" id="ModalOtherChannelCustomer" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Form Add Channel Customer</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Channel Value</label>
                                <input type="text" class="form-control" id="TxtChannelValue" placeholder="Channel Value">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Channel Type</label>
                                <select name="select" id="cmbOtherChannel" class="form-control" style="height: 33px;">
                                    <option value="">Select</option>
                                    <option value="Phone">Phone</option>
                                    <option value="Email">Email</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Twitter">Twitter</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-rounded btn-primary float-right" onclick="ActionOtherChannel('Update')" id="UpdateOtherChannel">Update</button>
                    <button type="button" class="btn btn-rounded btn-primary float-right" onclick="ActionOtherChannel('Simpan')" id="SaveOtherChannel">Save</button>
                    <button type="button" class="btn btn-rounded btn-primary float-right" onclick="ActionOtherChannel('Delete')" id="DeleteOtherChannel">Delete</button>
                </div>
            </div>
        </div>
    </div>

    <%--<div class="modal center-modal fade" id="modal-note" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 900px; margin-left: -180px;">
                <div class="modal-header">
                    <h5 class="modal-title">Form Detail Instan Note</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="divInstanNoteTransaction" class="media-list media-list-hover media-list-divided inner-user-div"></div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-secondary float-right" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>--%>
    <%-- <div class="modal center-modal fade" id="modal-description" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 1100px; margin-left: -300px; height: 650px">
                <div class="modal-header">
                    <h5 class="modal-title">Form Script Description</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="scrollable ps-container ps-theme-default ps-active-y" style="overflow: hidden; width: auto; height: 500px;">
                        <pre id="Description_Pre"></pre>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-secondary float-right" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>--%>

    <div class="modal center-modal fade" id="modal-response" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 1100px; margin-left: -300px; height: 650px">
                <div class="modal-header">
                    <h5 class="modal-title">Form Script Response</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="scrollable ps-container ps-theme-default ps-active-y" style="overflow: hidden; width: auto; height: 500px;">
                        <pre id="Response_Pre"></pre>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-secondary float-right" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal center-modal fade" id="modal-lead" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 1000px; margin-left: -250px; height: 570px">
                <div class="modal-header">
                    <h5 class="modal-title">Form Data Customer Upload</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" class="form-control" id="Lead_Name" name="Lead_Name" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Phone Number</label><label style="color: red; font-size: 12px;">&nbsp;* Format Phone Number 0</label>
                                <input type="text" class="form-control" id="Lead_PhoneNumber" name="Lead_PhoneNumber" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" id="Lead_Email" name="Lead_Email" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Address</label>
                                <textarea id="Lead_Description" name="Lead_Description" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-secondary" data-dismiss="modal">Close</button>
                    <a href="#" class="btn btn-rounded btn-primary float-right" onclick="Post_DataLead()" id="Post_DataLead">Save Data</a>
                    <%--<a href="#" class="btn btn-rounded btn-primary float-right" onclick="Post_HelpdeskDataLead()" id="Post_HelpdeskDataLead" style="display: none;">Save Helpdesk</a>--%>
                </div>
            </div>
        </div>
    </div>
    <div class="modal center-modal fade" id="modal-CRM" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 1000px; margin-left: -250px; height: 570px">
                <div class="modal-header">
                    <h5 class="modal-title">Form Data Customer Upload</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" class="form-control" id="CRM_Name" name="CRM_Name" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Email Address</label>
                                <input type="text" class="form-control" id="CRM_Email" name="CRM_Email" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Phone Number</label><label style="color: red; font-size: 12px;">&nbsp;</label>
                                <input type="text" class="form-control" id="CRM_PhoneNumber" name="CRM_PhoneNumber" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Polis Number</label>
                                <input type="text" class="form-control" id="CRM_PolisNumber" name="CRM_PolisNumber" placeholder="Polis Number" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Date of Birth</label>
                                <input class="form-control" id="CRM_Dateofbirth" type="date">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Gender</label>
                                <select id="selectGender" class="form-control" style="height: 33px;">
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Address</label>
                                <div class="form-group">
                                    <textarea id="CRM_Address" name="CRM_Address" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger" data-dismiss="modal">Close</button>
                    <a href="#" class="btn btn-rounded btn-primary float-right" onclick="Post_HelpdeskDataLead()" id="Post_HelpdeskDataLead">Save Data</a>
                </div>
            </div>
        </div>
    </div>
    <div class="modal modal-right fade" id="modal-channel-history" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Input Channel Contact </h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Channel</label>
                                <select id="Select_Channel_History" class="form-control" style="height: 33px;" onchange="get_cmbChannelHistory(1)">
                                    <option value="">Select</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Account Channel</label>
                                <input type="text" class="form-control" id="Channel_History_Account" placeholder="Account Channel">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-rounded btn-primary float-right" onclick="submitRedirectPaging()" id="Update">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal center-modal fade" id="modal-center-email" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 1100px; margin-left: -290px;">
                <div class="modal-header">
                    <h5 class="modal-title">Form Detail Interaction</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <iframe id="framefile_html" title="description" style="width: 100%; height: 500px;"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger float-right" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal modal-right fade" id="modal-SearchAPI" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <a href="#" class="hover-primary" onclick="SearchingOtherChannel()"><i class="mdi mdi-account-settings-variant" style="font-size: 25px;"></i></a>
                        Form Searching Customer API
                    </h5>
                    <button type="button" id="chat-box-toggle" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Type</label>
                                <select class="form-control" style="height: 33px;" id="ComboType" onchange="OnChange_Type(1);">
                                    <option value="">Select</option>
                                    <option value="1">Individu</option>
                                    <option value="2">Provider</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="FilterDiv">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Filter</label>
                                <select class="form-control" style="height: 33px;" id="ComboFilter" onchange="OnChange_Profile(1);">
                                    <option value="">Select</option>
                                    <option value="1">NIK</option>
                                    <option value="2">Nomor Polis</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="FilterProvider">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Filter</label>
                                <select class="form-control" style="height: 33px;" id="ComboProvider" onchange="OnChange_Provider(1);">
                                    <option value="">Select</option>
                                    <option value="1">Member Number</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label id="HeaderFilter"></label>
                                <input type="search" id="API_FilterValue" class="form-control" placeholder="Filter Value" title="Filter Value" disabled aria-label="Search" aria-describedby="button-addon2">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Contact Reported</label>
                                <input type="search" id="API_ContactReported" class="form-control" placeholder="Contact Reported" title="Contact Reported" aria-label="Search" aria-describedby="button-addon2">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger" onclick="CloseSearchingAPI()">Close</button>
                    <a class="btn btn-rounded btn-primary float-right" href="#" onclick="Get_ProfileAPI()">Submit</a>
                </div>
            </div>
        </div>
    </div>

    <div class="modal modal-right fade" id="modal-SearchProvider" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <%--<a href="#" class="hover-primary" onclick="SearchingOtherChannel()"><i class="mdi mdi-account-settings-variant" style="font-size: 25px;"></i></a>--%>
                        Form Searching Provider
                    </h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center bt-0 border-light p-2">
                                <div class="input-group">
                                    <input type="search" id="Ticket_SearchProvider" class="form-control" placeholder="Search Provider" aria-label="Search" aria-describedby="button-addon2">
                                </div>
                            </div>
                            <div class="box-body p-0">
                                <div id="Ticket_ListProvider" class="scrollable ps-container ps-theme-default ps-active-y" style="overflow: hidden; width: auto; height: 600px;">
                                    <div class="media media-single">No data found... </div>
                                </div>
                            </div>
                            <%-- <div class="text-center bt-1 border-light p-2">
                                <a class="btn btn-block btn-default btn-sm" href="#" data-toggle="modal" data-target="#modal-center" onclick="showAddCustomer()">Add Customer</a>
                            </div>--%>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger" data-dismiss="modal">Close</button>
                    <a class="btn btn-rounded btn-primary float-right" href="#" data-toggle="modal" data-target="#modal-provider">Add Provider</a>
                </div>
            </div>
        </div>
    </div>

    <div class="modal center-modal fade" id="modal-provider" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 1000px; height: 680px; margin-left: -280px;">
                <div class="modal-header">
                    <h5 class="modal-title">Form Add Provider</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="scrollable ps-container ps-theme-default ps-active-y">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Provider Name&nbsp;<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="Provider_Name" placeholder="Provider Name">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Provider Type&nbsp;<span class="text-danger">*</span></label>
                                    <select class="form-control" style="height: 33px;" id="Provider_Type">
                                        <option value="">Select</option>
                                        <option value="Apotik">Apotik</option>
                                        <option value="Dental">Dental</option>
                                        <option value="Klinik">Klinik</option>
                                        <option value="Lab">Lab</option>
                                        <option value="Optik">Optik</option>
                                        <option value="RS">RS</option>
                                        <option value="Telemedicine">Telemedicine</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Province &nbsp;<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="Provider_Provinsi" placeholder="Province">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>City &nbsp;<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="Provider_Kota" placeholder="City">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Provider Address&nbsp;<span class="text-danger">*</span></label>
                                    <textarea id="Provider_Alamat" name="Provider_Alamat" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-rounded btn-primary float-right" onclick="ActionInsertProvider()" id="SaveProvider">Save</button>
                </div>
            </div>
        </div>
    </div>
    <script src="js/ckeditor/ckeditor.js"></script>
    <script>
        CKEDITOR.replace('Ticket_NoteAgent');
        CKEDITOR.replace('Ticket_Complaints');
        CKEDITOR.replace('Lead_Description');
        //CKEDITOR.replace('CRM_Address');
        CKEDITOR.config.height = 200;
        //CKEDITOR.config.toolbar = 'Basic';
        //CKEDITOR.config.toolbar_Basic =
        //    [
        //        ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
        //    ];
        CKEDITOR.config.toolbar = 'Full';
        CKEDITOR.config.toolbar_Full =
            [
                //{ name: 'snddocument', items: ['Source', '-', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'] },
                //{ name: 'clipboard', items: ['Undo', 'Redo'] },
                //{ name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt'] },
                {
                    name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton',
                        'HiddenField']
                },
                '/',
                { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
                {
                    name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv',
                        '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl']
                },
                { name: 'links', items: ['Link', 'Unlink'] },
                { name: 'insert', items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'PageBreak', 'Iframe'] },
                '/',
                { name: 'styles', items: ['Styles', 'Format', 'FontSize'] },
                { name: 'colors', items: ['TextColor', 'BGColor'] },
                { name: 'tools', items: ['Maximize', 'ShowBlocks'] }
            ];
        var TrmNote = CKEDITOR.replace('_NoteInstan');
        TrmNote.config.height = 300;
        //CKEDITOR.config.editorplaceholder = 'Detail Complaints';
        var TrmTicket_Address = CKEDITOR.replace('Ticket_Address');
        TrmTicket_Address.config.height = 150;
        TrmTicket_Address.config.toolbar = 'Basic';
        TrmTicket_Address.config.toolbar_Basic =
            [
                ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
            ];
        var CRM_Address = CKEDITOR.replace('CRM_Address');
        CRM_Address.config.height = 150;
        CRM_Address.config.toolbar = 'Basic';
        CRM_Address.config.toolbar_Basic =
            [
                ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
            ];
        var Provider_Alamat = CKEDITOR.replace('Provider_Alamat');
        Provider_Alamat.config.height = 260;
        Provider_Alamat.config.toolbar = 'Basic';
        Provider_Alamat.config.toolbar_Basic =
            [
                ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
            ];
        var TrmReported_Address = CKEDITOR.replace('Reported_Address');
        TrmReported_Address.config.height = 150;
        TrmReported_Address.config.toolbar = 'Basic';
        TrmReported_Address.config.toolbar_Basic =
            [
                ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
            ];
        var TrmCusTomerAlamat = CKEDITOR.replace('cusTomerAlamat');
        TrmCusTomerAlamat.config.height = 150;
        TrmCusTomerAlamat.config.toolbar = 'Basic';
        TrmCusTomerAlamat.config.toolbar_Basic =
            [
                ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
            ];
    </script>
</asp:Content>

