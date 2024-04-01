<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/apps/Uidesk.Master" CodeBehind="TrxMultipleGroup.aspx.vb" Inherits="ICC.TrxMultipleGroup" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/sweetalert.min.js"></script>
    <script src="js/TrxMultipleGroup.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                        <div class="media align-items-top p-0">
                            <div class="d-lg-flex d-block justify-content-between align-items-center w-p100">
                                <div>
                                    <a href="#" onclick="AddMultiple();"><span class="badge badge-pill badge-default" style="font-weight: bold; font-size: 14px;">+ Multiple Group Agent</span></a>
                                </div>
                                <div class="box-controls pull-right">
                                    <div class="lookup lookup-circle lookup-right">
                                        <input type="text" id="TxtSearchingUserName" placeholder="Searching">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-body mb-30" style="height: 750px;">
                        <div class="scrollable ps-container ps-theme-default ps-active-y" style="overflow-x: hidden; width: auto; height: 750px;margin-left:30px;margin-right:10px;margin-top:20px">
                            <div class="row fx-element-overlay">
                                <div class="row" id="divUserNotification"></div>
                            </div>
                        </div>
                    </div>
                    <div class="box-footer"></div>
                </div>
            </div>
        </div>
    </section>
    <div class="modal modal-right fade" id="modal-agent" tabindex="-1" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Form Multiple Agent Group</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>UserName</label>
                                <select id="ComboUserName" class="form-control" style="height: 33px;">
                                    <option value="">Select</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Group Agent </label>
                                <select id="ComboGroupAgent" class="form-control" style="height: 33px;">
                                    <option value="">Select</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modal-footer-uniform">
                    <button type="button" class="btn btn-rounded btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-rounded btn-primary float-right" onclick="ActionSave()" id="Save">Submit</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
