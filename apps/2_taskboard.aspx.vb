Public Class _2_taskboard
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        'dataSourceGridList(Request.QueryString("status"), Session("LoginTypeAngka"), Session("organization"), Session("UserName"))
        TrxUserName.Value = Session("username")
        If TrxEmailID.Value = "" Then
            Dim _TrxAutoID As String = DateTime.Now.ToString("yyyyMMddhhmmss")
            TrxEmailID.Value = _TrxAutoID & New Random().Next(1000000, 9999999)
        Else

        End If
        Dim _TrxGenerateAutoID As String = DateTime.Now.ToString("yyyyMMddhhmmss")
        TrxGenerateEmailID.Value = _TrxGenerateAutoID & New Random().Next(1000000, 9999999)
    End Sub
    Private Sub dataSourceGridList(ByVal statusData As String, ByVal LoginTypeAngka As String, ByVal Divisi As String, ByVal UserName As String)
        'dsTodolist.SelectCommand = "exec NEW_Sp_Open '" & UserName & "','" & statusData & "','" & LoginTypeAngka & "','" & Divisi & "'"
        'lblSql.Text = "exec NEW_Sp_Open '" & UserName & "','" & statusData & "','" & LoginTypeAngka & "','" & Divisi & "'"
    End Sub
End Class