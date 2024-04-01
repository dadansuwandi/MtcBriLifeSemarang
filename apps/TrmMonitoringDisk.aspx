<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/apps/Uidesk.Master" CodeBehind="TrmMonitoringDisk.aspx.vb" Inherits="ICC.TrmMonitoringDisk" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    <script src="js/TrmMonitoringDisk.js"></script>
    <style>
        .chart-container {
            width: 80%;
            height: 480px;
            margin: 0 auto;
        }

        .pie-chart-container {
            height: 360px;
            width: 360px;
            float: left;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title">Data Disk Server &nbsp;<i class="fa fa-plus" onclick="showAdd()"></i></h4>
                        <center>
                            <div class="spin2" id="LoaderPage"></div>
                        </center>
                    </div>
                    <div class="box-body">
                        <div class="chart-container">
                            <br />
                            <br />
                            <div class="pie-chart-container">
                                <%--<h5 class="text-center">Partisi C</h5>--%>
                                <canvas id="pie-chartcanvas-1"></canvas>
                            </div>
                            <%--  <div class="pie-chart-container">
            <h5 class="text-center">Partisi D</h5>
            <canvas id="pie-chartcanvas-2"></canvas>
        </div>--%>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>
