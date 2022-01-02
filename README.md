# mail-merge
webApplication <br>
Its a custom mail sender. Integrating and leveraging the technology of angular for frontend /user interface, where the user can do CRUD operations (CREATE, READ, UPDATE, DELETE) on the data table. The table gives user the options to select, edit, filter, and search the desired candidate to whom the mail is to be sent. The selected candidates are then displayed on the composing component. The second component which is the composing component is where the user can compose mail and attach attachments to be sent. The CRUD operations are dynamically updated on the database via spring boot rest API. The composer can also add fields tags such as name tags, company tags etc., while composing mail to avoid sending the mail individually to each candidate.
# TECH STACK <br>
##   Front-End<br>
1. Angular 6<br>
   angular Material : (Mat-Tables, buttons, mat-dialog, mat-paginator, filter)<br>
   ngx-dropzone : (Uploading files)<br>
   Quill editor : (Text editor)<br>
##   Back End<br>
2. Nodejs<br>
   Multer : (storing uploaded files)<br>
   nodemailer: (sending mails via smto with attachments)<br>
##   Rest-Api<br>
3. Spring Boot (data-book api)<br>
   CRUD operations<br>
4. Database concetivity used<br>
   Microsoft sql serve studio<br>
## ARCHITECTURE
![MAIL MERGE ARCHITECTURE](https://user-images.githubusercontent.com/56751154/147874342-fd153041-649a-4973-945b-a26c80e4f777.png)
