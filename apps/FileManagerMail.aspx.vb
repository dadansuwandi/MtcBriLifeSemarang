Imports System.Configuration
Imports System.Data
Imports System.Data.SqlClient
Imports System.IO
Imports System.Text
Public Class FileManagerMail
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        fileManager.SettingsUpload.Enabled = False
        GenerateScript()
    End Sub

    Private Sub BTN_Remove_Click(sender As Object, e As EventArgs) Handles BTN_Remove.Click
        Try
            Dim dtCreated As DateTime
            Dim dtToday As DateTime = Today.Date
            Dim diObj As DirectoryInfo
            Dim ts As TimeSpan
            Dim lstDirsToDelete As New List(Of String)

            For Each sSubDir As String In Server.MapPath("~/FileEmail/Inbox/")
                diObj = New DirectoryInfo(sSubDir)
                dtCreated = diObj.CreationTime

                ts = dtToday - dtCreated

                'Add whatever storing you want here for all folders...

                If ts.Days > 2 Then
                    lstDirsToDelete.Add(sSubDir)
                    'Store whatever values you want here... like how old the folder is
                    diObj.Delete(True) 'True for recursive deleting
                End If
            Next
        Catch ex As Exception

        End Try

    End Sub
    Private primaryKey, updateqry As String, TableName As String = "UIDESK_TrxInboxEmail"
    Private updateAdd As String = ""

    Public Sub GenerateScript()
        Dim values, insqry, upqry As String, IDValues As String = ""
        Dim i As Integer = 0
        Dim myReader As SqlDataReader
        Dim mySqlConnection As SqlConnection = New SqlConnection()
        Dim mSqlConnection As SqlConnection = New SqlConnection()
        Dim mySqlCommand As SqlCommand = New SqlCommand()
        Dim msqlCommand As SqlCommand = New SqlCommand()
        Dim cnString As String = ConfigurationManager.ConnectionStrings("DefaultConnection").ConnectionString
        mSqlConnection = New SqlConnection(cnString)
        mySqlConnection = New SqlConnection(cnString)
        mySqlCommand = New SqlCommand("select * from UIDESK_TrxInboxEmail", mySqlConnection)
        primaryKey = GetprimaryKey(TableName, cnString)
        insqry = ""
        mySqlConnection.Open()

        If File.Exists(Server.MapPath("~/Test.sql")) Then
            File.Delete(Server.MapPath("~/Test.sql"))
        End If

        myReader = mySqlCommand.ExecuteReader()

        If myReader IsNot Nothing Then

            While myReader.Read()
                i = i + 1
                updateAdd = ""
                insqry = ""
                Dim celldata As String = "", coulmenName As String = ""
                For j As Integer = 0 To myReader.FieldCount - 1
                    If j > 0 Then
                        If True Then
                            coulmenName += "," & myReader.GetName(j).ToString()
                            celldata += ",'" & myReader(j).ToString() & "'"
                        End If
                    Else
                        coulmenName += myReader.GetName(j).ToString()
                        celldata += "'" & myReader(j).ToString() & "'"
                    End If

                    If primaryKey = myReader.GetName(j).ToString() Then
                        IDValues = myReader(j).ToString()
                    End If

                    If IDValues IsNot Nothing Then
                        upqry = UpdateQuery(coulmenName, celldata, primaryKey, IDValues)
                        updateAdd += upqry
                        insqry = InsertQuery(coulmenName, celldata, TableName)
                    End If
                Next

                WriteScripts(TableName, insqry, updateAdd, IDValues, primaryKey, i)
            End While
        End If
    End Sub

    Public Function GetprimaryKey(ByVal tableName As String, ByVal cnnString As String) As String
        Dim names As String, ID As String = ""
        Dim mReader As SqlDataReader
        Dim mSqlConnection As SqlConnection = New SqlConnection()
        Dim mSqlCommand As SqlCommand = New SqlCommand()
        Dim cnString As String = cnnString
        mSqlConnection = New SqlConnection(cnString)
        mSqlConnection.Open()
        mSqlCommand = New SqlCommand("sp_pkeys", mSqlConnection)
        mSqlCommand.CommandType = CommandType.StoredProcedure
        mSqlCommand.Parameters.Add("@table_name", SqlDbType.NVarChar).Value = tableName
        mReader = mSqlCommand.ExecuteReader()
        While mReader.Read()
            ID = mReader(3).ToString()
        End While
        Return ID
    End Function

    Public Sub WriteScripts(ByVal tableName As String, ByVal insertqry As String, ByVal updateqry As String, ByVal IDvalues As String, ByVal PrimaryKey As String, ByVal i As Integer)
        Dim script As String = ""
        updateqry = "UPDATE " & tableName & " SET " & updateqry & " WHERE " & PrimaryKey & " = ' " & IDvalues & "'"
        Dim index As Integer = updateqry.LastIndexOf(",")
        Dim updatqry As String = updateqry.Remove(index, 1)
        If i = 1 Then
            script += "DECLARE @updateCount INT;" & Environment.NewLine
            script += "DECLARE @insertCount INT;" & Environment.NewLine
            script += "DECLARE @count INT;" & Environment.NewLine
            script += " SET @updateCount = 0;" & Environment.NewLine
            script += " SET @insertCount = 0;" & Environment.NewLine
            script += "SELECT @count = COUNT(*) FROM [" & tableName & "] WHERE [" & PrimaryKey & "] = '" & IDvalues & "'" & Environment.NewLine
            script += "IF @count = 0" & Environment.NewLine
            script += "BEGIN " & Environment.NewLine
            script += "SET IDENTITY_INSERT " & tableName & " ON" & Environment.NewLine
            script += insertqry & " " & Environment.NewLine
            script += "SET IDENTITY_INSERT " & tableName & " OFF" & Environment.NewLine
            script += " SET @insertCount = @insertCount + 1 " & Environment.NewLine
            script += "END" & Environment.NewLine
            script += "ELSE" & Environment.NewLine
            script += "BEGIN" & Environment.NewLine
            script += updatqry & "" & Environment.NewLine
            script += " SET @updateCount = @updateCount + 1 " & Environment.NewLine
            script += "END" & Environment.NewLine
            Dim sw As StreamWriter = New StreamWriter(Server.MapPath("~/Test.sql"), True, Encoding.UTF8)
            sw.Write(script)
            sw.Close()
        Else
            script += "SELECT @count = COUNT(*) FROM [" & tableName & "] WHERE [" & PrimaryKey & "] = '" & IDvalues & "'" & Environment.NewLine
            script += "IF @count = 0" & Environment.NewLine
            script += "BEGIN " & Environment.NewLine
            script += "SET IDENTITY_INSERT " & tableName & " ON" & Environment.NewLine
            script += insertqry & "" & Environment.NewLine
            script += "SET IDENTITY_INSERT " & tableName & " OFF" & Environment.NewLine
            script += "SET @insertCount = @insertCount + 1 " & Environment.NewLine
            script += "END" & Environment.NewLine
            script += "ELSE" & Environment.NewLine
            script += "BEGIN " & Environment.NewLine
            script += updatqry & "" & Environment.NewLine
            script += "SET @updateCount = @updateCount + 1 " & Environment.NewLine
            script += "END" & Environment.NewLine
            Dim sw As StreamWriter = New StreamWriter(Server.MapPath("~/Test.sql"), True, Encoding.UTF8)
            sw.Write(script)
            sw.Close()
        End If
    End Sub

    Public Function InsertQuery(ByVal coulmenName As String, ByVal celldata As String, ByVal TableName As String) As String
        Return "INSERT INTO " & TableName & " (" & coulmenName & ") VALUES (" & celldata & ")"
    End Function

    Public Function UpdateQuery(ByVal coulmenName As String, ByVal celldata As String, ByVal Name As String, ByVal Value As String) As String
        Dim IDName, IDValue As String, Ud As String = "", name1 As String = "", values As String = ""
        IDName = name1
        IDValue = Value
        If IDName IsNot Nothing Then
            Dim indexcolumn As Integer = coulmenName.LastIndexOf(",")
            Dim indexValues As Integer = celldata.LastIndexOf(",")
            If indexcolumn > 0 AndAlso indexValues > 0 Then
                coulmenName = coulmenName.Substring(indexcolumn)
                celldata = celldata.Substring(indexValues)
                name1 = coulmenName.Replace(",", "")
                values = celldata.Replace(",", "")
                If name1 <> IDName AndAlso values <> IDValue Then
                    Ud = name1 & "=" & values & ","
                End If
            Else
                name1 = coulmenName
                values = celldata
                If name1 <> IDName AndAlso values <> IDValue Then
                    Ud = name1 & "=" & values & ","
                End If
            End If
        End If
        Return Ud
    End Function


End Class