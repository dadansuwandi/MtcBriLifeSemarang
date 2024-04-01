<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/apps/Uidesk.Master" CodeBehind="4_Reports_sla_new.aspx.vb" Inherits="ICC._4_Reports_sla_new" %>

<%@ Register Assembly="DevExpress.Web.v20.1, Version=20.1.4.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web" TagPrefix="dx" %>
<%@ Register Assembly="DevExpress.Web.ASPxHtmlEditor.v20.1, Version=20.1.4.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web.ASPxHtmlEditor" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="content">
        <div class="row" runat="server">
            <div class="col-xl-12 col-lg-12 col-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title">Report base on SLA&nbsp;</h4>
                    </div>
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
                                    HoverStyle-BackColor="#EE4D2D" Height="30px" Width="100%">
                                </dx:ASPxButton>
                            </div>
                        </div>
                        <hr />
                        <dx:ASPxGridView ID="ASPxGridView1" ClientInstanceName="ASPxGridView" runat="server" Width="100%"
                                DataSourceID="tempTrxSLA" Styles-Header-Font-Bold="true" Font-Size="X-Small" Theme="MetropolisBlue">
                                <SettingsPager>
                                    <AllButton Text="All">
                                    </AllButton>
                                    <NextPageButton Text="Next &gt;">
                                    </NextPageButton>
                                    <PrevPageButton Text="&lt; Prev">
                                    </PrevPageButton>
                                    <PageSizeItemSettings Visible="true" Items="10, 25, 50" ShowAllItem="true" />
                                </SettingsPager>
                                <Settings ShowFilterRow="true" ShowFilterRowMenu="false" ShowGroupPanel="true" ShowVerticalScrollBar="false" ShowHorizontalScrollBar="true" />
                                <Columns>
                                    <dx:GridViewDataTextColumn Caption="No" FieldName="No" Width="40px" CellStyle-HorizontalAlign="Center"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Interaction ID" FieldName="GenesysID" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Thread ID" FieldName="ThreadID" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Ticket Number" FieldName="TicketNumber" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Customer ID" FieldName="NIK" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Customer Name" FieldName="CustomerName" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Nomor Kartu" FieldName="CIF" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Phone Number" FieldName="PhoneNumber" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Badan Usaha" FieldName="BadanUsaha" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Provider Name" FieldName="ProviderName" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Customer Category" FieldName="CustomerCategory" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Claim Number" FieldName="ClaimNumber" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Department" FieldName="Channel_Code" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Category" FieldName="CategoryName" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Enquiry Type" FieldName="Level1" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Enquiry Detail" FieldName="Level2" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Problem" FieldName="Level3" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Description" FieldName="DescriptionNonHtml" PropertiesTextEdit-EncodeHtml="false" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Ticket Status" FieldName="TicketStatus" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Group Name" FieldName="AgentGroupName" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Site Name" FieldName="SiteName" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Created By" FieldName="CreatedBy" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Created Date" FieldName="DateCreate" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Solved By" FieldName="UserSolved" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Solved Date" FieldName="DateSolvedDisplay" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Closed By" FieldName="ClosedBy" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Closed Date" FieldName="DateClose" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="SLA (Minute)" FieldName="SLA" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Tickets Close in Minute" FieldName="TicketCloseMinute" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="SLA Remaining or Over Time" FieldName="WaktuSisaTicket" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Status SLA" FieldName="KeteranganSLA" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Remarks SLA" FieldName="UsedDaySLAOK" Width="150px"></dx:GridViewDataTextColumn>
                                </Columns>
                            </dx:ASPxGridView>
                        <hr />
                        <div class="row">
                            <div class="col-sm-2">
                                <asp:DropDownList runat="server" ID="ddList" Height="30" CssClass="form-control input-sm">
                                    <asp:ListItem Value="xlsx" Text="Excel" />
                                    <asp:ListItem Value="xls" Text="Excel 97-2003" />
                                    <%--<asp:ListItem Value="pdf" Text="PDF" />
                                    <asp:ListItem Value="rtf" Text="RTF" />--%>
                                    <asp:ListItem Value="csv" Text="CSV" />
                                </asp:DropDownList>
                            </div>
                            <div class="col-sm-2">
                                <dx:ASPxButton ID="btn_Export" runat="server" Text="Export" Theme="Metropolis"
                                    HoverStyle-BackColor="#EE4D2D" Height="30px" Width="100%">
                                </dx:ASPxButton>
                            </div>
                        </div>
                    </div>
                    <dx:ASPxGridViewExporter ID="ASPxGridViewExporter1" runat="server" GridViewID="ASPxGridView1"></dx:ASPxGridViewExporter>
                    <div class="box-footer with-border">
                    </div>
                </div>
            </div>
        </div>
        <asp:SqlDataSource ID="tempTrxSLA" ConnectionString="<%$ ConnectionStrings:DefaultConnection %>" runat="server"></asp:SqlDataSource>
    </section>
    <%-- <div class="container-full">
        <div class="content-header">
            <br />
            <div class="d-flex align-items-center">
                <div class="w-p100 d-md-flex align-items-center justify-content-between">
                    <h3 class="page-title"></h3>
                    <div class="d-inline-block align-items-center">
                        <nav>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><b>Report base on SLA</b></li>
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
                                        HoverStyle-BackColor="#EE4D2D" Height="30px" Width="100%">
                                    </dx:ASPxButton>
                                </div>
                            </div>
                            <hr />
                            <dx:ASPxGridView ID="ASPxGridView1" ClientInstanceName="ASPxGridView" runat="server" Width="100%"
                                DataSourceID="tempTrxSLA" Styles-Header-Font-Bold="true" Font-Size="X-Small" Theme="MetropolisBlue">
                                <SettingsPager>
                                    <AllButton Text="All">
                                    </AllButton>
                                    <NextPageButton Text="Next &gt;">
                                    </NextPageButton>
                                    <PrevPageButton Text="&lt; Prev">
                                    </PrevPageButton>
                                    <PageSizeItemSettings Visible="true" Items="10, 25, 50" ShowAllItem="true" />
                                </SettingsPager>
                                <Settings ShowFilterRow="true" ShowFilterRowMenu="false" ShowGroupPanel="true" ShowVerticalScrollBar="false" ShowHorizontalScrollBar="true" />
                                <Columns>
                                    <dx:GridViewDataTextColumn Caption="No" FieldName="No" Width="40px" CellStyle-HorizontalAlign="Center"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Interaction ID" FieldName="GenesysID" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Thread ID" FieldName="ThreadID" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Ticket Number" FieldName="TicketNumber" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Customer ID" FieldName="NIK" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Customer Name" FieldName="CustomerName" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Nomor Kartu" FieldName="CIF" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Phone Number" FieldName="PhoneNumber" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Badan Usaha" FieldName="BadanUsaha" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Provider Name" FieldName="ProviderName" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Customer Category" FieldName="CustomerCategory" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Claim Number" FieldName="ClaimNumber" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Department" FieldName="Channel_Code" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Category" FieldName="CategoryName" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Enquiry Type" FieldName="Level1" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Enquiry Detail" FieldName="Level2" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Problem" FieldName="Level3" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Description" FieldName="DescriptionNonHtml" PropertiesTextEdit-EncodeHtml="false" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Ticket Status" FieldName="TicketStatus" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Group Name" FieldName="AgentGroupName" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Site Name" FieldName="SiteName" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Created By" FieldName="CreatedBy" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Created Date" FieldName="DateCreate" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Solved By" FieldName="UserSolved" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Solved Date" FieldName="DateSolvedDisplay" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Closed By" FieldName="ClosedBy" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Closed Date" FieldName="DateClose" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="SLA (Menit)" FieldName="SLA" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Tickets Close in Minutes" FieldName="TicketCloseMinute" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="SLA Remaining or Over Time" FieldName="WaktuSisaTicket" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Status SLA" FieldName="KeteranganSLA" Width="150px"></dx:GridViewDataTextColumn>
                                    <dx:GridViewDataTextColumn Caption="Remarks SLA" FieldName="UsedDaySLAOK" Width="150px"></dx:GridViewDataTextColumn>
                                </Columns>
                            </dx:ASPxGridView>
                        </div>
                    </div>
                </div>
            </div>
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
                        HoverStyle-BackColor="#EE4D2D" Height="30px" Width="100%">
                    </dx:ASPxButton>
                </div>
            </div>
            <hr />
            <dx:ASPxGridViewExporter ID="ASPxGridViewExporter1" runat="server" GridViewID="ASPxGridView1"></dx:ASPxGridViewExporter>
            <asp:SqlDataSource ID="tempTrxSLA" ConnectionString="<%$ ConnectionStrings:DefaultConnection %>" runat="server"></asp:SqlDataSource>
        </section>
    </div>--%>
</asp:Content>


