var mainArray = [];
var length;

$(function()
  
{
function addData(mainArray, length)
{
        alert("addData");
    
        mainArray = localStorage.getItem("data");
        length = localStorage.getItem("length");
        mainArray = JSON.parse(mainArray);
        length = JSON.parse(length);
        
        console.log(mainArray);
        
        for(i = 0; i < length; i++)
        {
            var id1 = "h3 "+i;
            var id2 = "p "+i;

            var newHeader= $('<h3></h3>'); //create a new h3
            $(newHeader).attr('id', id1); //set the id attribute of newHeader
            $(newHeader.html(mainArray["title"][i])); //set the innerHtml of the header
            var newPara = $('<p></p>'); //create a new p
            $(newPara).attr('id', id2); //set p id attribute
            $(newPara).html(mainArray["desc"][i]); //add descr
            $('#div1').append(newHeader);
            $('#div1').append(newPara); //add them to dom.
              
        }
}
$(document).ready(function() 
    {
        alert("$(document).ready(function()");
        addData(mainArray, length);
    });
});