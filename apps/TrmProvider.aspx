<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/apps/Uidesk.Master" CodeBehind="TrmProvider.aspx.vb" Inherits="ICC.TrmProvider" %>

<%@ Register Assembly="DevExpress.Web.v20.1, Version=20.1.4.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web" TagPrefix="dx" %>
<%@ Register Assembly="DevExpress.Web.ASPxHtmlEditor.v20.1, Version=20.1.4.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web.ASPxHtmlEditor" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/sweetalert.min.js"></script>
    <script src="js/TrmProvider.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:HiddenField ID="TrxID" runat="server" />
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title">Data Provider &nbsp;<i class="fa fa-plus" onclick="Add()" style="cursor: pointer;"></i></h4>
                        <center>
                            <div class="spin2" id="LoaderPage"></div>
                        </center>
                    </div>
                    <div class="box-body">
                        <dx:ASPxGridView ID="ASPxGridView1" ClientInstanceName="ASPxGridView1" DataSourceID="SourceProvider" runat="server" Width="100%"
                            Font-Size="X-Small" Styles-Header-Font-Bold="true" Theme="MetropolisBlue" Styles-Header-HorizontalAlign="Center" Styles-Cell-HorizontalAlign="Center">
                            <SettingsPager>
                                <AllButton Text="All">
                                </AllButton>
                                <NextPageButton Text="Next &gt;">
                                </NextPageButton>
                                <PrevPageButton Text="&lt; Prev">
                                </PrevPageButton>
                                <PageSizeItemSettings Visible="true" Items="10, 25, 50, 100" ShowAllItem="true" />
                            </SettingsPager>
                            <Settings ShowFilterRow="true" ShowFilterRowMenu="false" ShowGroupPanel="true" ShowVerticalScrollBar="false" ShowHorizontalScrollBar="true" />
                            <Columns>
                                <dx:GridViewDataTextColumn Caption="ID" FieldName="ID" Width="40px" CellStyle-HorizontalAlign="Center"></dx:GridViewDataTextColumn>
                                <dx:GridViewDataTextColumn Caption="Provider" FieldName="Provider" Width="250px"></dx:GridViewDataTextColumn>
                                <dx:GridViewDataTextColumn Caption="Jenis Provider" FieldName="JenisProvider" Width="250px"></dx:GridViewDataTextColumn>
                                <dx:GridViewDataTextColumn Caption="Alamat" FieldName="Alamat" Width="500px" PropertiesTextEdit-EncodeHtml="false"></dx:GridViewDataTextColumn>
                                <dx:GridViewDataTextColumn Caption="Provinsi" FieldName="Provinsi" Width="250px"></dx:GridViewDataTextColumn>
                                <dx:GridViewDataTextColumn Caption="Kota" FieldName="Kota" Width="250px"></dx:GridViewDataTextColumn>
                                <dx:GridViewDataColumn Caption="Action" CellStyle-HorizontalAlign="Center" Width="50px">
                                    <DataItemTemplate>
                                        <a href="#" onclick="Edit('<%# Eval("ID")%>')">Edit</a>
                                    </DataItemTemplate>
                                </dx:GridViewDataColumn>
                            </Columns>
                        </dx:ASPxGridView>
                        <hr />
                        <div class="row">
                            <div class="col-sm-2">
                                <asp:DropDownList runat="server" ID="ddList" Height="30" CssClass="form-control input-sm">
                                    <asp:ListItem Value="xlsx" Text="Excel" />
                                    <asp:ListItem Value="xls" Text="Excel 97-2003" />
                                    <asp:ListItem Value="csv" Text="CSV" />
                                </asp:DropDownList>
                            </div>
                            <div class="col-sm-2">
                                <dx:ASPxButton ID="btn_Export" runat="server" Text="Export" Theme="Metropolis" ValidationGroup="SMLvalidationGroup"
                                    HoverStyle-BackColor="#EE4D2D" Height="30px" Width="100%">
                                </dx:ASPxButton>
                            </div>
                        </div>
                        <div class="box-footer with-border">
                        </div>
                        <dx:ASPxGridViewExporter ID="ASPxGridViewExporter1" runat="server" GridViewID="ASPxGridView1"></dx:ASPxGridViewExporter>
                    </div>
                </div>
            </div>
        </div>
        <asp:SqlDataSource ID="SourceProvider" ConnectionString="<%$ ConnectionStrings:DefaultConnection %>" runat="server"></asp:SqlDataSource>
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
                                            <option value="Dental">DENTAL</option>
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
                        <button type="button" class="btn btn-rounded btn-primary float-right" onclick="ActionUpdateProvider()" id="SaveUpdate">Update</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <script src="js/ckeditor/ckeditor.js"> </script>
    <script>
        var Provider_Alamat = CKEDITOR.replace('Provider_Alamat');
        Provider_Alamat.config.height = 270;
        Provider_Alamat.config.toolbar = 'Basic';
        Provider_Alamat.config.toolbar_Basic =
            [
                ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']
            ];
    </script>
</asp:Content>
