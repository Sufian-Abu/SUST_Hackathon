//var mainArray = [];
//var length;

$(function()
  
  {
    $("#logInBtn").click(function(e) 
    {
        var array = [];
        
        var userName = $("#logIn").val();
        var passWrd = $("#password").val();
        var flag = false;
        
        if(userName == '' || passWrd == '')
        {
            alert("Username or password cannot be empty");
            flag = false;
        }
        else
        {
            array.push(userName);
            array.push(passWrd);
            flag = true;
        }
        
        if(flag == true)
        {
            $.ajax({
                url:"http://handymama.co/login.php",
                data:
                {
                    userName: array[0],
                    passWrd: array[1],
                },
                dataType:"JSON",
                type:"POST",
                success: function(response){
                         console.log(response);
                    alert("Credential Accepted");
                    location.href="dashboard.html"
                    
                    //getData();
                    
                },
                error: function(response)
                {
                    alert("Error");
                console.log(JSON.stringify(response));
                    alert("Monkey");
            }
                
            });
        }
        else
        {
            console.log("Error in connection");
        }
    });
});
    
    // This function is to get the data from php file.
    
//    function getData()
//    {
//        $.ajax(
//           {
//               url:"http://localhost/dataFetch.php",
//               dataType:"json",
//               type:"GET",
//               success: function(suc)
//               {
//                   mainArray = suc;
//                   location.href="temp.html";
//                   length = mainArray["desc"].length;
//                   console.log(mainArray);
//                    localStorage.setItem("data", JSON.stringify(mainArray));
//                    localStorage.setItem("length", JSON.stringify(length));
//               },
//               error: function(err)
//               {
//                   alert("connection to server has be interrupted");
//                   console.log(err);
//               }
//           });
//    }
//});