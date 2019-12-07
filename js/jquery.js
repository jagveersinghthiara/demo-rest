$(document).ready(function () { // 7event
    let Q_array = [{
            index: 1,
            ques: '2+3 = ?',
            ans: 5
        },
        {
            index: 2,
            ques: '3+3 = ?',
            ans: 6
        },
        {
            index: 3,
            ques: '2+5 = ?',
            ans: 7
        },
        {
            index: 4,
            ques: '1+3 = ?',
            ans: 4
        },
        {
            index: 5,
            ques: '7+3 = ?',
            ans: 10
        },
        {
            index: 6,
            ques: '2+8 = ?',
            ans: 10
        },
        {
            index: 7,
            ques: '12+3 = ?',
            ans: 15
        }, {
            index: 8,
            ques: '22+3 = ?',
            ans: 25
        }, {
            index: 9,
            ques: '4+3 = ?',
            ans: 7
        }, {
            index: 10,
            ques: '5+3 = ?',
            ans: 8
        }
    ]


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

    $('#email').blur(function () { // 4 event
        var email = $('#email').val();
        if (email.length < 1) {
            alert("email can't be empty ")
            return;
        } else {
            var regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                alert("Please enter a valid email  ")
                return;
            }
        }
    })

    $('#country').change(function () { // 5 event
        console.log($('#country').val())
    })
    $('#reg_form').submit(function (e) { // 7 event
        e.preventDefault(); //6 event 
        var user_name = $('#uname').val();
        var password = $('#pwd').val();
        var cpassword = $('#cpwd').val();
        var bday = $('#bday').val();
        var first_name = $('#fname').val();
        var last_name = $('#lname').val();
        var email = $('#email').val();

        var cap = $('#cap').val();
        var country = $('#country').val();

        $(".error").remove(); //4 effect

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
            $('#submit').after('<span class="error"> User name is required</span>'); // 4selector
            return;
        }


        if (password.length < 8) {
            alert("Password must be At least 8 characters long")
            return;
        }
        if (password != cpassword) {
            alert("Password and confirm password must be same ")
            return;
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
        if (country == '') {
            $('#submit').after('<span class="error">Country is Required</span>');
            return;
        }
        if (cap == '') {
            $('#submit').after('<span class="error">Captcha is Required</span>');
            return;
        } else {
            let index = localStorage.getItem('rand');
            var ans = Q_array[index].ans;
            if (cap != ans) {
                alert("Wrong captcha ");
                return
            }
        }
        alert("Form is valid ") // 4 effect
        return;

    });

    $('reg_form').load($('#email').focus()) // 8 event load 9 event focus 

    $('#login_form').submit(function (e) {

        e.preventDefault();
        var user_name = $('#log_uname').val();
        var password = $('#log_pwd').val();
        var catpcha = $('#log_cap').val();
        if (user_name.length < 1) {
            alert('User name is required')
            return;
        }

        if (password.length < 1) {
            alert('Password is required')

            return;
        }


        if (catpcha.length < 1) {
            alert('Captcha is required')
            return;
        } else {
            let index = localStorage.getItem('rand');
            var ans = Q_array[index].ans;
            if (catpcha != ans) {
                alert("Wrong captcha ");
                return
            }
        }
        alert("Form is valid ");
        $(':submit').delay(800).fadeOut().delay(800).fadeIn(); // 8 DELAY EFFECT 9 FADEOUT EFFECT 10 FADE IN EFFECT


        return;


    })
    var rand = Math.floor(Math.random() * 10);
    localStorage.setItem('rand', rand)
    $('#captcha').html(
        Q_array[rand].ques
    ) // 6 effect
    $('.submit').mouseover(function () { // 10 event 
        $(this).css("background", 'green')
    })
    $('.submit').mouseout(function () { // 11 event 
        $(this).css("background", 'white')
    })


    $("li:first").css('color', 'green'); //4 selector
    $(".effect li:last").css('color', 'green'); //5 selector
    $(".effect li:even").css('background', '#8080803d'); // 6 selector
    $(".effect li:odd").css('background', 'rgba(255, 146, 146, 0.24)') // 7 selector
    $("[href]").css('text-decoration', "none") // 9 selector
    $(":button").css('font-weight', 'bold'); // 10 selector
    $(":submit").click(function () { //8 selector
        $(this).animate({ // 7 effect
            width: "300px"
        });
    })
    $(":submit").mouseout(function () {
        $(this).animate({
            width: "200px"
        });
    })
});