$(document).ready(function () {

    //  jquery selectors Services page 
    $(".enlarge").hover(function () { // 1 class selector ,1 hover as event
        $(this).css("fontSize", 20) //2 current element selector 
    });

    $(".enlarge").mouseleave(function () { // 2 mouseleve event
        $(this).css("fontSize", 30);
    });

    $("#shuffelimage").click(function () { // 3 click event 
        $('.menu-bg').css('background-image', 'url(./images/g4.jpg)'); // 3 effect
        $(this).hide(); //1 hide effect 
        $('.optiobtn').hide();
    });


    $('.optiobtn').click(function () {
        $("button").show(); //2 show effect // 3tag selector 
        $(this).hide()
    })

    $('#shuffelimage').hide();





    $('#reg_form').submit(function (e) {
        e.preventDefault();
        var user_name = $('#uname').val();
        var password = $('#pwd').val();
        var cpassword = $('#cpwd').val();
        var bday = $('#bday').val();
        var first_name = $('#fname').val();
        var last_name = $('#lname').val();
        var email = $('#email').val();

var cap = $('#cap').val();
var country = $('#country').val();

        $(".error").remove();

        if (email.length < 1) {
            $('#submit').after('<span class="error">Email is Required</span>');
            return;
        } else {
            var regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#submit').after('<span class="error">Enter a valid email</span>');
                return;
            }
        }
         if (user_name.length < 1) {
            $('#submit').after('<span class="error"> User name is required</span>');
            return;
        }
     
       
        if (password.length < 8) {
            alert("Password must be At least 8 characters long")
            return;
            //   $('#pwd').after('<span class="error"> At least 8 characters long</span>');
        }
         if (password != cpassword) {
            alert("Password and confirm password must be same ")
            return;
            //   $('#pwd').after('<span class="error"> At least 8 characters long</span>');
        }

           if (first_name.length < 1) {
            $('#submit').after('<span class="error">First name is Required</span>');
            return;
        }
        if (last_name.length < 1) {
            $('#submit').after('<span class="error">Last name is Required</span>');
            return;
        }
     
         if (bday.length < 1) {
            $('#submit').after('<span class="error">Birthday is Required</span>');
            return;
        }
          if (country =='') {
            $('#submit').after('<span class="error">Country is Required</span>');
            return;
        }
         if (cap =='') {
            $('#submit').after('<span class="error">Captcha is Required</span>');
            return;
        }
    });


});