$(function()
  {

$("#modal_trigger").leanModal(
    {
        top : 200, 
        overlay : 0.6,
        closeButton: ".modal_close" 
    });
//new part for task post
$("#modal_trigger2").leanModal(
    {
        top : 200, 
        overlay : 0.6,
        closeButton: ".modal_close" 
    }); 
    
$(function()
  {
    $("#modal_trigger2").click(function()
    {
    $(".postTask").show();
    });
});
    //end of new part for task post

    //login and join part
    
    $(function () {
    // Calling Login Form
    $("#login_form").click(function () {
        $(".user_login").show();
        $(".user_register").hide();
        $(".tasker_register").hide();
        return false;
    });

    // Calling Register Form
    $("#register_form_user").click(function () {
        $(".user_register").show();
        $(".tasker_register").hide();
        $(".user_login").hide();
        $(".header_title").text('Register');
        return false;
    });

    $("#register_form_tasker").click(function () {
        $(".user_register").hide();
        $(".tasker_register").show();
        $(".user_login").hide();
        $(".header_title").text('Register');
        return false;
    });

    
    //Registration form ends here.
    
    
    // Going back to Social Forms
    $(".back_btn").click(function () {
        $(".user_login").hide();
        $(".user_register").hide();
        $(".tasker_register").hide();
         $(".header_title").text('Login');
        return false;
    });

})





});


/*............................*/
var ul;
var liItems;
var imageNumber;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;


function init(){
    ul = document.getElementById('image_slider');
    liItems = ul.children;
    imageNumber = liItems.length;
    imageWidth = liItems[0].children[0].clientWidth;
    ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
    prev = document.getElementById("prev");
    next = document.getElementById("next");
    generatePager(imageNumber);
    prev.onclick = function(){ onClickPrev();};
    next.onclick = function(){ onClickNext();};
}

function animate(opts){
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed / opts.duration;
        if (progress > 1){
            progress = 1;
        }
        var delta = opts.delta(progress);
        opts.step(delta);
        if (progress == 1){
            clearInterval(id);
            opts.callback();
        }
    }, opts.delay || 17);
    //return id;
}

function slideTo(imageToGo){
    var direction;
    var numOfImageToGo = Math.abs(imageToGo - currentImage);

    direction = currentImage > imageToGo ? 1 : -1;
    currentPostion = -1 * currentImage * imageWidth;
    var opts = {
        duration:1000,
        delta:function(p){return p;},
        step:function(delta){
            ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
        },
        callback:function(){currentImage = imageToGo;}  
    };
    animate(opts);
}

function onClickPrev(){
    if (currentImage == 0){
        slideTo(imageNumber - 1);
    }       
    else{
        slideTo(currentImage - 1);
    }       
}

function onClickNext(){
    if (currentImage == imageNumber - 1){
        slideTo(0);
    }       
    else{
        slideTo(currentImage + 1);
    }       
}

function generatePager(imageNumber){    
    var pageNumber;
    var pagerDiv = document.getElementById('pager');
    for (i = 0; i < imageNumber; i++){
        var li = document.createElement('li');
        pageNumber = document.createTextNode(parseInt(i + 1));
        li.appendChild(pageNumber);
        pagerDiv.appendChild(li);
        li.onclick = function(i){
            return function(){
                slideTo(i);
            }
        }(i);
    }   
    var computedStyle = document.defaultView.getComputedStyle(li, null);
    var liWidth = parseInt(li.offsetWidth);
    var liMargin = parseInt(computedStyle.margin.replace('px',""));
    pagerDiv.style.width = parseInt((liWidth + liMargin * 2) * imageNumber) + 'px';
}
window.onload = init;