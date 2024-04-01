DECLARE @updateCount INT;
DECLARE @insertCount INT;
DECLARE @count INT;
 SET @updateCount = 0;
 SET @insertCount = 0;
SELECT @count = COUNT(*) FROM [UIDESK_TrxInboxEmail] WHERE [] = ''
IF @count = 0
BEGIN 
SET IDENTITY_INSERT UIDESK_TrxInboxEmail ON
INSERT INTO UIDESK_TrxInboxEmail (IVC_ID,EMAIL_ID,DIRECTION,EFROM,ETO,ECC,EBCC,ESUBJECT,EBODY_TEXT,EBODY_HTML,ROUTED,HANDLED,CUSTOMER_ID,Email_Date,Path,Reading,Flag,UserID,PIC,PICTujuan,NumOfPages,FAX_STATUS,Ref,datereceive,ecc1,original_time,agent,CNT,TicketNumber,JENIS_EMAIL,GroupID,CompID,OrganizationID,account,JENIS_EMAIL_INTERNAL,DATE_BLENDING,FLAG_HANDLING,FLAGING_EMAIL_REPLY,dateblending) VALUES ('17','UIDESK-20221008052743696','IN','rizalsamsurizal708@gmail.com','outbound@uidesk.id;','','','#001',' Indonesia bisa bernapas lega setelah Tragedi Kanjuruhan. Sebab FIFA
memastikan tidak akan menjatuhi sanksi kepada PSSI.

Hal ini dikatakan Presiden RI Joko Widodo setelah berbicara dengan Presiden
FIFA Gianni Infantino beberapa hari lalu.

"Kemarin saya telah menerima surat dari FIFA. Ini adalah tindak lanjut dari
pembicaraan saya dengan presiden FIFA, Gianni Infantino, pada tanggal 3
Oktober 2022 yang lalu," ujar Jokowi dalam siaran di akun Youtube
Sekretariat Presiden

Baca artikel sepakbola, "Jokowi: Alhamdulillah, Indonesia Tidak Disanksi
FIFA" selengkapnya
https://sport.detik.com/sepakbola/liga-indonesia/d-6335976/jokowi-alhamdulillah-indonesia-tidak-disanksi-fifa
.

Download Apps Detikcom Sekarang https://apps.detik.com/detik/

','<div dir="ltr">
<div style="left: -99999px;">Indonesia bisa bernapas lega setelah Tragedi Kanjuruhan. Sebab FIFA memastikan tidak akan menjatuhi sanksi kepada PSSI.<br>
<br>
Hal ini dikatakan Presiden RI Joko Widodo setelah berbicara dengan Presiden FIFA Gianni Infantino beberapa hari lalu.<br>
<br>
&quot;Kemarin saya telah menerima surat dari FIFA. Ini adalah tindak lanjut 
dari pembicaraan saya dengan presiden FIFA, Gianni Infantino, pada 
tanggal 3 Oktober 2022 yang lalu,&quot; ujar Jokowi dalam siaran di akun 
Youtube Sekretariat Presiden<br><br> Baca artikel sepakbola, &quot;Jokowi: Alhamdulillah, Indonesia Tidak Disanksi FIFA&quot; selengkapnya <a href="https://sport.detik.com/sepakbola/liga-indonesia/d-6335976/jokowi-alhamdulillah-indonesia-tidak-disanksi-fifa">https://sport.detik.com/sepakbola/liga-indonesia/d-6335976/jokowi-alhamdulillah-indonesia-tidak-disanksi-fifa</a>.<br><br>Download Apps Detikcom Sekarang <a href="https://apps.detik.com/detik/">https://apps.detik.com/detik/</a></div>

</div>

','','','','10/8/2022 5:27:21 AM','D:\BRI Life OmniChannel\BRI Life Fhase 2\APPS\helpdesk_agent\FileEmail\Inbox\\outbound@uidesk.id\20221008052743696','1         ','','','','','','','','10/8/2022 5:27:43 AM','','','','0','','','','','','outbound@uidesk.id','','','0','0','') 
SET IDENTITY_INSERT UIDESK_TrxInboxEmail OFF
 SET @insertCount = @insertCount + 1 
END
ELSE
BEGIN
UPDATE UIDESK_TrxInboxEmail SET IVC_ID='17',EMAIL_ID='UIDESK-20221008052743696',DIRECTION='IN',EFROM='rizalsamsurizal708@gmail.com',ETO='outbound@uidesk.id;',ECC='',EBCC='',ESUBJECT='#001',EBODY_TEXT= Indonesia Tidak Disanksi
FIFA" selengkapnya
https://sport.detik.com/sepakbola/liga-indonesia/d-6335976/jokowi-alhamdulillah-indonesia-tidak-disanksi-fifa
.

Download Apps Detikcom Sekarang https://apps.detik.com/detik/

',EBODY_HTML= Indonesia Tidak Disanksi FIFA&quot; selengkapnya <a href="https://sport.detik.com/sepakbola/liga-indonesia/d-6335976/jokowi-alhamdulillah-indonesia-tidak-disanksi-fifa">https://sport.detik.com/sepakbola/liga-indonesia/d-6335976/jokowi-alhamdulillah-indonesia-tidak-disanksi-fifa</a>.<br><br>Download Apps Detikcom Sekarang <a href="https://apps.detik.com/detik/">https://apps.detik.com/detik/</a></div>

</div>

',ROUTED='',HANDLED='',CUSTOMER_ID='',Email_Date='10/8/2022 5:27:21 AM',Path='D:\BRI Life OmniChannel\BRI Life Fhase 2\APPS\helpdesk_agent\FileEmail\Inbox\\outbound@uidesk.id\20221008052743696',Reading='1         ',Flag='',UserID='',PIC='',PICTujuan='',NumOfPages='',FAX_STATUS='',Ref='',datereceive='10/8/2022 5:27:43 AM',ecc1='',original_time='',agent='',CNT='0',TicketNumber='',JENIS_EMAIL='',GroupID='',CompID='',OrganizationID='',account='outbound@uidesk.id',JENIS_EMAIL_INTERNAL='',DATE_BLENDING='',FLAG_HANDLING='0',FLAGING_EMAIL_REPLY='0',dateblending='' WHERE  = ' '
 SET @updateCount = @updateCount + 1 
END
