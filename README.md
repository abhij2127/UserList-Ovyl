# UserList-Ovyl
## It is the the User List Challange given by a tech start-up Ovyl. The link of  the challenge is https://olvyhq.notion.site/Build-a-Users-List-77c496c2efc649a1994862b449a1382b .
1. For proper testing of code please run the project with a live-server or localhost else you will face the errors and code may not work.
2. You can use the live-server in node.js or XAMPP server or whatever you fancy.
3. dba.json is the sample JSON database consisting of 20000 dummy users. 
4. The file index.php is the landing page of the project. when run with localhost it will show the data of all the users and search options.
5. The mn.js is the main driver code that renders the data from dba.json using XHR i.e XML HTTP Request.
6. The test.js does the same work as mn.js but it uses fetch API instead of XHR.
7. The difference between rendering session time of mn.js and test.js is negligible hence they are comparable in performance.
8. You can change the src attribute of script tag in index.php to "./test.js" for checking it out, by default it is set to mn.js.
9. style.css is the stylesheet linked to both search.php and index.php.
