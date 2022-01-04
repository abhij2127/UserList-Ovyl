<!DOCTYPE html>
<!-- This is the landing page of the project-->
<html>
<head>
  <link rel = "stylesheet" type = "text/css" href = "./style.css">
  <link rel = "icon" type = "image/x-icon" href = "./img.png">

</head>
<body>
  <div id = "header">
  <h1>User<span class = "heading2">List</span></h1>
  <div class = "head_right">
    <!--form for search query-->
  <form action = "search.php" method = "GET">
  <input type="text" class = "searchbox" name = "q" placeholder="Search by name or ID "></input><input type = "submit" value="Go" class="gobtn"></input>
</form>
</div>
</div>
  <hr><div class = "dopecolor"></div><hr>
<!--#nav is the parend node to which all the rendered data will be appended-->
<div id = "nav">

</div>
<script src = "./mn.js"></script>
</body>
</html>
