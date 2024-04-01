<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/apps/Uidesk.Master" CodeBehind="TrmCustomerNoKa.aspx.vb" Inherits="ICC.TrmCustomerNoKa" %>

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
                        <h4 class="box-title">Data Customer&nbsp;</h4>
                    </div>
                    <div class="box-body p-15">
                        <dx:aspxgridview id="ASPxGridView1" clientinstancename="ASPxGridView1" datasourceid="DSChannel" runat="server" width="100%"
                            font-size="X-Small" styles-header-font-bold="true" theme="MetropolisBlue" Styles-Cell-HorizontalAlign="Center" Styles-Header-HorizontalAlign="Center">
                            <settingspager>
                                <allbutton text="All">
                                </allbutton>
                                <nextpagebutton text="Next &gt;">
                                </nextpagebutton>
                                <prevpagebutton text="&lt; Prev">
                                </prevpagebutton>
                                <pagesizeitemsettings visible="true" items="10, 25, 50, 100" showallitem="true" />
                            </settingspager>
                            <settings showfilterrow="true" showfilterrowmenu="false" showgrouppanel="true" showverticalscrollbar="false" showhorizontalscrollbar="true" />
                            <columns>
                                <dx:gridviewdatatextcolumn caption="Customer ID" fieldname="CustomerID" width="150px"></dx:gridviewdatatextcolumn>
                                <dx:gridviewdatatextcolumn caption="Name" fieldname="Name" width="250px"></dx:gridviewdatatextcolumn>
                                <dx:gridviewdatatextcolumn caption="Email" fieldname="Email" width="150px"></dx:gridviewdatatextcolumn>
                                <dx:gridviewdatatextcolumn caption="Phone Number" fieldname="HP" width="150px"></dx:gridviewdatatextcolumn>
                                <dx:gridviewdatatextcolumn caption="Gender" fieldname="JenisKelamin" width="150px"></dx:gridviewdatatextcolumn>
                                <dx:gridviewdatatextcolumn caption="Date of Birth" fieldname="Birth" width="150px"></dx:gridviewdatatextcolumn>
                                <dx:gridviewdatatextcolumn caption="Nomor Kartu" fieldname="CIF" width="150px"></dx:gridviewdatatextcolumn>
                                <dx:gridviewdatatextcolumn caption="Badan Usaha" fieldname="Cabang" width="250px"></dx:gridviewdatatextcolumn>
                                <dx:gridviewdatatextcolumn caption="NIK" fieldname="NIK" width="150px"></dx:gridviewdatatextcolumn>
                                <dx:gridviewdatatextcolumn caption="Alamat" fieldname="Alamat" width="300px" propertiestextedit-encodehtml="false"></dx:gridviewdatatextcolumn>
                            </columns>
                        </dx:aspxgridview>
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
                                <dx:aspxbutton id="btn_Export" runat="server" text="Export" theme="Metropolis"
                                    hoverstyle-backcolor="#EE4D2D" height="30px" width="100%">
                                </dx:aspxbutton>
                            </div>
                        </div>
                    </div>
                     <div class="box-footer with-border">
                       
                    </div>
                    <dx:aspxgridviewexporter id="ASPxGridViewExporter1" runat="server" gridviewid="ASPxGridView1"></dx:aspxgridviewexporter>
                </div>
            </div>
        </div>
        <asp:SqlDataSource ID="DSChannel" ConnectionString="<%$ ConnectionStrings:DefaultConnection %>" runat="server"></asp:SqlDataSource>
    </section>
</asp:Content>
