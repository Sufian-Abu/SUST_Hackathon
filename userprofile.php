<?php

error_reporting(E_ERROR);
$con=mysql_connect("localhost","root", "");
mysql_select_db("mydb",$con);

$name = $_POST['pname'];
$range = $_POST['name'];
$edate = $_POST['edate'];
if(isset($_POST['submit'])){

if(!empty($name)&&!empty($range)&&!empty($edate))
{
  $target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {

    $query="INSERT INTO userprofile(productpricerangeUserProfile,productexpiredateUserProfile, productnameUserProfile,productimageUserProfile) 
    VALUES('$name','$range', '$edate', '$target_file1');";
    if(mysql_query($query))
    {
      echo"<script>window.location.assign('index.html')</script>";  
    }
    else
    {
        
        echo mysql_error();
    }
  }
  }
    
}
else
{
  //echo"<script>alert('please fill up completely')</script>";
}
}


?>
