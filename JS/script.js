var menuItems=document.getElementById("menuItems");
menuItems.style.maxHeight ="0px";

function menuToggle(){
    if (menuItems.style.maxHeight =="0px") {
        menuItems.style.maxHeight ="200px";
    }
    else{
        menuItems.style.maxHeight ="0px";
    }
}

// js for product image toggel
var productImg=document.getElementById("product-img");
var smallImg=document.getElementsByClassName("small-img");
smallImg[0].onclick=function() {
    productImg.src=smallImg[0].src;
}
smallImg[1].onclick=function() {
    productImg.src=smallImg[1].src;
}
smallImg[2].onclick=function() {
    productImg.src=smallImg[2].src;
}
smallImg[3].onclick=function() {
    productImg.src=smallImg[3].src;
}
smallImg[4].onclick=function() {
    productImg.src=smallImg[4].src;
}

function thankyou() {
    alert("Order Confirmed! Thank You for shopping. Visit Again! :) ")
}
function validation() {
    
    var name=document.getElementById("name").value;
    var mobileNo=document.getElementById("mobileNo").value;
    var email=document.getElementById("emailID").value;
    var query=document.getElementById("query").value;
    if (name=="") {
        document.getElementById("nameValidation").innerHTML="*Please Enter Your Name."
        return false;
    }
    if (mobileNo=="") {
        document.getElementById("mobileNoValidation").innerHTML="*Please Enter Your Mobile Number."
        return false;
    }
    if (email=="") {
        document.getElementById("emailIDValidation").innerHTML="*Please Enter Your Email ID."
        return false;
    }
    if (query=="") {
        document.getElementById("queryValidation").innerHTML="*Please Enter IF ANY QUERY/FEEDBACK."
        return false;
    }
}
$('#validate').validate({
    roles: {
        fullname: {
            required: true,
        },
        email: {
            required: true,
        },
        address: {
            required: true,
        },
        phone: {
            required: true,
        },
        city: {
            required: true,
        },
        state: {
            required: true,
        },
        pincode: {
            required: true,
        },
       
    },
    messages: {
        fullname:"Please enter full name*",
        email:"Please enter email*",
        city:"Please enter city*",
        address:"Please enter address*",
        phone:"Please enter phone number*",
        state:"Please enter state*",
        zip:"Please enter address*",
    },
});
