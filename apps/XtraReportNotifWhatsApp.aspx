﻿<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/apps/Uidesk.Master" CodeBehind="XtraReportNotifWhatsApp.aspx.vb" Inherits="ICC.XtraReportNotifWhatsApp" %>

<%@ Register Assembly="DevExpress.Web.v20.1, Version=20.1.4.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web" TagPrefix="dx" %>
<%@ Register Assembly="DevExpress.Web.ASPxHtmlEditor.v20.1, Version=20.1.4.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web.ASPxHtmlEditor" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="body">
        <div class="box-body">
            <div class="container-full">
                <div class="content-header">
                    <br />
                    <div class="d-flex align-items-center">
                        <div class="w-p100 d-md-flex align-items-center justify-content-between">
                            <h3 class="page-title"></h3>
                            <div class="d-inline-block align-items-center">
                                <nav>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active" aria-current="page"><b>Report Notifikasi WhatsApp</b></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="content">
                    <div class="row" runat="server">
                        <div class="col-xl-12 col-lg-12 col-12">
                            <div class="box">
                                <div class="box-body p-15">
                                    <div class="row" style="margin-bottom: -15px;">
                                        <div class="col-sm-2">
                                            <label>Start Date</label>
                                            <dx:ASPxDateEdit ID="dt_strdate" runat="server" CssClass="form-control input-sm" Width="100%" EditFormatString="yyyy-MM-dd">
                                                <ValidationSettings ErrorTextPosition="Bottom" ErrorDisplayMode="ImageWithText" ValidationGroup="SMLvalidationGroup">
                                                    <RequiredField IsRequired="true" ErrorText="Must be filled" />
                                                </ValidationSettings>
                                            </dx:ASPxDateEdit>
                                        </div>
                                        <div class="col-sm-2">
                                            <label>End Date</label>
                                            <dx:ASPxDateEdit ID="dt_endate" runat="server" CssClass="form-control input-sm" Width="100%" EditFormatString="yyyy-MM-dd">
                                                <ValidationSettings ErrorTextPosition="Bottom" ErrorDisplayMode="ImageWithText" ValidationGroup="SMLvalidationGroup">
                                                    <RequiredField IsRequired="true" ErrorText="Must be filled" />
                                                </ValidationSettings>
                                            </dx:ASPxDateEdit>
                                        </div>
                                        <div class="col-sm-2" style="margin-top: 5px;">
                                            <br />
                                            <dx:ASPxButton ID="btn_Submit" runat="server" Theme="Metropolis" AutoPostBack="False" Text="Submit" ValidationGroup="SMLvalidationGroup"
                                                Height="30px" Width="100%">
                                            </dx:ASPxButton>
                                        </div>
                                    </div>
                                    <hr />
                                    <dx:ASPxGridView ID="ASPxGridView1" ClientInstanceName="ASPxGridView1" runat="server" Font-Size="X-Small"
                                        DataSourceID="DatasourceWhatsApp" Width="100%" Styles-Header-Font-Bold="true" Theme="MetropolisBlue">
                                        <SettingsPager>
                                            <AllButton Text="All">
                                            </AllButton>
                                            <NextPageButton Text="Next &gt;">
                                            </NextPageButton>
                                            <PrevPageButton Text="&lt; Prev">
                                            </PrevPageButton>
                                            <PageSizeItemSettings Visible="true" Items="10, 15, 20" ShowAllItem="true" />
                                        </SettingsPager>
                                        <Settings ShowFilterRow="true" ShowFilterRowMenu="false" ShowGroupPanel="true" ShowFilterBar="Hidden" EnableFilterControlPopupMenuScrolling="true"
                                            ShowVerticalScrollBar="false" ShowFooter="false" ShowHorizontalScrollBar="false" />
                                        <Columns>
                                            <dx:GridViewDataTextColumn Caption="Channel" FieldName="Channel" Width="200px" CellStyle-HorizontalAlign="Center" HeaderStyle-HorizontalAlign="Center"></dx:GridViewDataTextColumn>
                                            <dx:GridViewDataTextColumn Caption="Nomor Ticket" FieldName="NomorTicket" Width="200px" CellStyle-HorizontalAlign="Center" HeaderStyle-HorizontalAlign="Center"></dx:GridViewDataTextColumn>
                                            <dx:GridViewDataTextColumn Caption="Sebutan" FieldName="Sebutan" Width="200px" CellStyle-HorizontalAlign="Center" HeaderStyle-HorizontalAlign="Center"></dx:GridViewDataTextColumn>
                                            <dx:GridViewDataTextColumn Caption="Nama Pemegang Polis" FieldName="NamaPemegangPolis" Width="200px" CellStyle-HorizontalAlign="Center" HeaderStyle-HorizontalAlign="Center"></dx:GridViewDataTextColumn>
                                            <dx:GridViewDataDateColumn Caption="Nomor Handphone" FieldName="NomorHandphone" Width="200px" CellStyle-HorizontalAlign="Center" HeaderStyle-HorizontalAlign="Center" PropertiesDateEdit-DisplayFormatString="yyyy-MM-dd hh:mm:ss"></dx:GridViewDataDateColumn>
                                            <dx:GridViewDataDateColumn Caption="Nomor Polis" FieldName="NomorPolis" Width="200px" CellStyle-HorizontalAlign="Center" HeaderStyle-HorizontalAlign="Center" PropertiesDateEdit-DisplayFormatString="yyyy-MM-dd hh:mm:ss"></dx:GridViewDataDateColumn>
                                            <dx:GridViewDataTextColumn Caption="Date Ticket" FieldName="DateTicket" Width="200px" CellStyle-HorizontalAlign="Center" HeaderStyle-HorizontalAlign="Center"></dx:GridViewDataTextColumn>
                                            <dx:GridViewDataTextColumn Caption="Agent Name" FieldName="AgentName" Width="200px" CellStyle-HorizontalAlign="Center" HeaderStyle-HorizontalAlign="Center"></dx:GridViewDataTextColumn>
                                            <dx:GridViewDataTextColumn Caption="Date Create" FieldName="DateCreate" Width="200px" CellStyle-HorizontalAlign="Center" HeaderStyle-HorizontalAlign="Center"></dx:GridViewDataTextColumn>
                                        </Columns>
                                    </dx:ASPxGridView>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-2">
                                            <asp:DropDownList runat="server" ID="ddList" Height="30" CssClass="form-control input-sm">
                                                <asp:ListItem Value="xlsx" Text="Excel" />
                                                <asp:ListItem Value="xls" Text="Excel 97-2003" />
                                                <asp:ListItem Value="pdf" Text="PDF" />
                                                <asp:ListItem Value="rtf" Text="RTF" />
                                                <asp:ListItem Value="csv" Text="CSV" />
                                            </asp:DropDownList>
                                        </div>
                                        <div class="col-sm-2">
                                            <dx:ASPxButton ID="btn_Export" runat="server" Text="Export" Theme="Metropolis" ValidationGroup="SMLvalidationGroup"
                                                Height="30px" Width="100%">
                                            </dx:ASPxButton>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <dx:ASPxGridViewExporter ID="ASPxGridViewExporter1" runat="server" GridViewID="ASPxGridView1"></dx:ASPxGridViewExporter>
                    <asp:SqlDataSource ID="DatasourceWhatsApp" ConnectionString="<%$ ConnectionStrings:DefaultConnection %>" runat="server"></asp:SqlDataSource>
                </section>
            </div>
        </div>
    </div>
</asp:Content>
