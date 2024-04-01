Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports System.IO
Public Class Qc_Trx
    Inherits System.Web.UI.Page

    Dim FileInbox As String = "~/FileEmail/Inbox/"
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim data = File.ReadAllText(Server.MapPath("" & FileInbox & "" & Request.QueryString("id") & "/" & Request.QueryString("filename") & ""))
        data.ToString()

        Dim sb As StringBuilder = New StringBuilder()
        Dim output As String = "File"
        sb.Append(data)
        sb.Append(vbCrLf)
        Dim text As String = sb.ToString()
        Response.Clear()
        Response.ClearHeaders()
        Response.AppendHeader("Content-Length", text.Length.ToString())
        Response.ContentType = "text/plain"
        Response.AppendHeader("Content-Disposition", "attachment;filename=""" & Request.QueryString("filename") & """")
        Response.Write(text)
        Response.[End]()
    End Sub
End Class