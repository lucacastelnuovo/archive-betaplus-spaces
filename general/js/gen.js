"use strict";var CSRFtoken=document.querySelector("#CSRFtoken"),btnRegister=document.querySelector("#gen_register"),inputRegister=document.querySelector("#gen_register_email");btnRegister.addEventListener("click",function(){btnRegister.innerHTML="Loading",$.ajax({type:"POST",url:"/admin/process.php",dataType:"JSON",timeout:2e3,data:{CSRFtoken:CSRFtoken.value,type:"gen",user:inputRegister.value},success:function(e){e.status?btnRegister.innerHTML="Success":btnRegister.innerHTML="Failed"},error:function(){btnRegister.innerHTML="Failed"}})});