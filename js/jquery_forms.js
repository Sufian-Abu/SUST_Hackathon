$(function () 
 {
    $("#userReg_btn").click(function(e) 
    {
        //user registration in
        
        console.log("user registration");
        var array = [];
        var flag = false;
        
        var firstName = $("#uFn").val();
        var lastName = $("#uLn").val();
        var email = $("#uEa").val();
        var pass = $("#uPn").val();
        var mobile = $("#uMn").val();
        var nID = $("#uNm").val();
        var age = $("#uAn").val();
        var prof = $("#uPc").val();
        
      
        if(firstName == "" || lastName == "" || email == "" || pass == ""|| mobile == "" 
           || nID == "" || age == "" || prof == "")
        {
            e.preventDefault();
            alert("Please provide correct input");
            flag = false;
        }
        else if(mobile.length != 11 || nID.length != 17)
        {
            e.preventDefault();
            alert("Please provide correct input");
            flag = false;
        }
        else
        {
            array.push(firstName);
            array.push(lastName);
            array.push(email);
            array.push(pass);
            array.push(mobile);
            array.push(nID);
            array.push(age);
            array.push(prof);

            flag = true;
        }
        
        if(flag == true)
        {
            $.ajax({
                url:"http://handymama.co/CustomerRegistration.php",
                data:
                {
                    firstName: array[0],
                    lastName:array[1],
                    email:array[2],
                    pass:array[3],
                    mobile:array[4],
                    nID:array[5],
                    age:array[6],
                    prof:array[7]
                },
                type:"POST",
                dataType:"json",
                success:function(suc){
                    alert("Registration successful");
                    console.log(suc);
                },
                error:function(err)
                {
                    alert("Registration unsucessful. Please try after sometime!");
                    console.log(err);
                }
            });
        }
        else
        {
            alert("Form error");
        }
        
    });
//user registration out.
  
    
    
    
    
    
    //tasker registartion in.
    $("#tReg_btn").click(function(e) 
    {
        //user registration in
        
        var array = [];
        var flag = false;
        
        var firstName = $("#tFn").val();
        var lastName = $("#tLn").val();
        
        var fatherName = $("#tFan").val();
        var motherName = $("#tMn").val();
        var age = $("#tAn").val();
        
        var email = $("#tUn").val();
        var pass = $("#tPn").val();
        
        var mobile = $("#tPhn").val();
        var nID = $("#tNm").val();
        var prof = $("#tSn").val();

            
        
        if(firstName == "" || lastName == "" || email == "" || pass == "" || mobile == "" || fatherName == "" || motherName == ""  || age == ""
           || nID == "" || prof == "")
        {
            e.preventDefault();
            alert("Please provide correct input");
            flag = false;
        }
        else if(mobile.length != 11 || nID.length != 17)
        {
            e.preventDefault();
            alert("Please provide correct input");
            flag = false;
        }
        else
        {
            array.push(firstName);
            array.push(lastName);
            
            array.push(email);
            array.push(pass);
            
            array.push(fatherName);
            array.push(motherName);
            
            array.push(age);
            array.push(mobile);
            array.push(nID);
            array.push(prof);

            flag = true;
        }
        
        if(flag == true)
        {
            $.ajax({
                url:"http://handymama.co/Tasker.php",
                data:
                {
                    firstName: array[0],
                    lastName:array[1],
                    email: array[2],
                    pass: array[3],
                    fatherName: array[4],
                    motherName: array[5],
                    age: array[6],
                    mobile: array[7],
                    nID: array[8],
                    prof: array[9],
                },
                type:"POST",
                dataType:"json",
                success:function(suc){
                    console.log(suc);
                },
                error:function(err)
                {
                   console.log(err);
                }
            });
        }
        else
        {
            alert("Form error");
        }
    });
    //tasker registration out.
    

    //task posting in
    $("#tSubmit").click(function(e) 
    {
      
        var array = [];
        var flag = false;
        
        var title = $("#tTitle").val();
        var desc = $("#tDesc").val();
        
        console.log("task post");
        if(title == '' || desc == '')
        {
            alert("please fill up the forms");
            flag = false;
            e.preventDefault();
        
        }
        else
        {
            array.push(title);
            array.push(desc);
            
            flag = true;
        }
        
        if(flag == true)
        {
            $.ajax({
                url:"http://handymama.co/TaskPost.php",
                data:
                {
                    title: array[0],
                    descr: array[1]
                },
                type:"POST",
                dataType:"json",
                success:function(response){
                         console.log(response);
//                    alert("hello2");
                },
                error: function(response)
                {
                    console.log(response);
//                    alert("hello");
            }
            });
        }
        else
        {
            alert("Error in posting task. Please try again later");
        }
    });
//task posting out
});