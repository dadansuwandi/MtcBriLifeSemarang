<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/apps/Uidesk.Master" CodeBehind="TrmMailConversation.aspx.vb" Inherits="ICC.TrmMailConversation" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/sweetalert.min.js"></script>
    <script src="js/TrmMailConversation.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                        <h4 class="box-title">Email Conversation</h4>
                        <div class="box-controls pull-right">
                            <div class="lookup lookup-circle lookup-right">
                                <input type="text" id="TxtEmailSearching" placeholder="Searching">
                            </div>
                        </div>
                    </div>
                    <div class="box-body">
                        <div id="DivSearchingEmail">
                            <table id="TrmInboxEmail" class="table mt-0 table-hover no-wrap table-borderless" style="width: 100%;">
                                <thead>
                                    <tr>
                                        <th style="width: 150px;">From</th>
                                        <th style="width: 150px;">To</th>
                                        <th style="width: 400px;">Subject</th>
                                        <th style="width: 20px;">Direction</th>
                                        <th style="width: 20px;">Action</th>
                                        <%--<th style="width: 150px;">Status</th>
                                        <th style="width: 150px;">Date Create</th>
                                        <th style="width: 50px;">Action</th>--%>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>                       
                    </div>
                </div>
                <div class="box" id="Div_Conversation">
                  <%--  <div class="box-header">
                        <h4 class="box-title">Email Conversation</h4>
                    </div>--%>
                    <div class="box-body">
                        <div class="timeline" id="DivStart">
                            <span class="timeline-label">
                                <button class="btn btn-success btn-rounded"><i class="fa fa-clock-o"></i></button>
                            </span>
                        </div>
                        <div id="Journeymailconversation"></div>
                        <div class="timeline" id="DivDone">
                            <span class="timeline-label">
                                <button class="btn btn-danger btn-rounded"><i class="fa fa-clock-o"></i></button>
                            </span>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>
