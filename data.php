<html>

<meta http-equiv=”Content-Type” content=”text/html; charset=utf-8″>

</html>

<?php
error_reporting(E_ERROR);

 $con=mysql_connect("localhost","root", "");
  mysql_select_db("mydb",$con);

 mysql_query('SET CHARACTER SET utf8');
mysql_query("SET SESSION collation_connection ='utf8_general_ci'");

 $query3="SELECT  nameProductList FROM  productlist ";

 $result=mysql_query($query3);
 while($row3=mysql_fetch_assoc($result)){
      $name= $row3['nameProductList'];
      echo $name;

     // echo "sdsadsa";
     

  }




?>