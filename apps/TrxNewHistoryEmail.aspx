<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/apps/Uidesk.Master" CodeBehind="TrxNewHistoryEmail.aspx.vb" Inherits="ICC.TrxNewHistoryEmail" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <%--<script src="js/jquery-1.9.1.min.js"></script>--%>
    <script src="js/jquery-1.10.2.min.js"></script>
    <link href="js/datatables/DataTables-1.10.18/css/jquery.dataTables.min.css" rel="stylesheet" />
    <script src="js/datatables/DataTables-1.10.18/js/jquery.dataTables.min.js"></script>
    <script src="js/sweetalert.min.js"></script>
    <script src="js/TrxNewHistoryEmail.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:HiddenField ID="TrxID" runat="server" />
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title">Data History Email&nbsp;<i class="fa fa-cogs" onclick="showAdd()" style="cursor: pointer;"></i></h4>
                        <h4 class="box-title pull-right">
                            <label id="myLabel" class="label" style="font-size: 11px; font-weight: bold;"></label>
                        </h4>
                    </div>
                    <div class="box-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table id="TrmTableHistoryNewX" class="table mt-0 table-hover no-wrap table-borderless" style="width: 100%; overflow-x: scroll; overflow-y: scroll;">
                                        <thead>
                                            <tr>
												<th style="width:5%">No.</th>
                                                <th style="width: 150px;">Email Service</th>
                                                <th style="width: 150px;">Email Address</th>
                                                <th style="width: 650px;">Subject</th>
                                                <th style="width: 150px;">Agent Name</th>
                                                <th style="width: 180px;">Date</th>
                                                <th style="width: 100px;">Type</th>
                                                <th style="width: 50px;">File</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</asp:Content>
