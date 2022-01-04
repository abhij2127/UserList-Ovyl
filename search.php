<!DOCTYPE html>
<!--This page is where the search query lands-->

<html>
<head>
<link rel = "stylesheet" type = "text/css" href = "./style.css">
</head>
<body>
  <div id = "header">
  <h1>User<span class = "heading2">List</span></h1>
  <div class = "head_right">
  <form action = "<?php echo $_SERVER['PHP_SELF'];?>" method = "GET">
  <input type="text" class = "searchbox" name = "q" placeholder="Search by name or ID " value = "<?php echo $_GET['q'];?>"></input><input type = "submit" value="Go" class="gobtn"></input>
</form>
</div>
</div>
  <hr><div class = "dopecolor"></div><hr>
<div id = "nav">
<?php
$user = file_get_contents("dba.json");
$userList = json_decode($user);
$userArray = $userList->objects;
$searched = [];

//function for searching by id
function searchById($id){
  global $userArray;
  $ctr = 0;
  foreach($userArray as $s){
    if($s->ID == $id){
      echo '<div id = "crd"><span class = "nm">'.$s->FirstNameLastName.'</span>';
      echo '<span class = "idd">'.$s->ID.'</span>';
      echo '<span class = "email">'.$s->Email.'</span>';
      echo '<span class = "emailadr">'.$s->EmailAddress.'</span>';
      echo '<span class = "con">'.$s->Phone.'</span>';
      echo '<span class = "comp">'.$s->Company.'</span></div>';
      $ctr++;
      break;
    }
  }
  if($ctr==0) echo '<div id = "crd"> No Record Found</div>';

}


//function for searching by name
function searchByName($name){
  global $userArray;
  $ctr = 0;
  foreach($userArray as $x){
    if(preg_match($name,$x->FirstNameLastName)){
      $searched[] = $x;
      $ctr++;
    }
  }
  if($ctr==0) echo '<div id = "crd"> No Record Found</div>';
  else{
    echo "<p class = 'searchcnt'>".$ctr." results found! </p>";
    if(!empty($searched)){
      foreach($searched as $s){
        echo '<div id = "crd"><span class = "nm">'.$s->FirstNameLastName.'</span>';
        echo '<span class = "idd">'.$s->ID.'</span>';
        echo '<span class = "email">'.$s->Email.'</span>';
        echo '<span class = "emailadr">'.$s->EmailAddress.'</span>';
        echo '<span class = "con">'.$s->Phone.'</span>';
        echo '<span class = "comp">'.$s->Company.'</span></div>';
      }
    }
  }
}

//query execution starts here
//getting the search term  using $_GET superglobal
$searchTerm = $_GET["q"];
//determining if the search is a ID or a Name
$searchFilter = is_numeric($searchTerm);
switch($searchFilter){
  case true : searchById($searchTerm);
                break;
  case false : $searchTerm = '/'.$searchTerm.'/i';
                searchByName($searchTerm);
                break;
}
 ?>
 <div class = "anchor">
<a href = "./index.php">Back to List</a>
</div>
</div>
</body>
</html>
