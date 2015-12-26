<?php
    error_reporting(E_ERROR);
        require 'session.php';

header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-cache");
header("Pragma: no-cache");
               $con=mysql_connect("localhost","root", "");
             mysql_select_db("mydb",$con);

       $phone= $_POST['phone'];
       $password = $_POST['password'];
        
         if(!empty($phone)&&!empty($password)){
         $query1 ="SELECT passwordUserRegister,phoneUserRegister FROM userregister
                  WHERE phoneUserRegister='$phone'";
          $output1=mysql_query($query1);
          $result1=mysql_num_rows($output1);

        
             if($result1==1)
         {

          while ($mama= mysql_fetch_assoc($output1)){
            $User_password =$mama['password'];
            $User_phone =$mama['phone'];

            
          }
               
               if($User_password==$password)
               {
               
                $_SESSION['phoneUserRegister']=$User_phone;
                 
                echo"<script>window.location.assign('index.html')</script>";
              }
              else{
                session_unset();
                
               }

         }
          }
          
         