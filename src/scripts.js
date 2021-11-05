import $ from 'jquery';

$(window).on("scroll", function() {
    if($(window).scrollTop() > 70) {
        $(".topbar").addClass("active");
    } else {
        $(".topbar").removeClass("active");
    }
    if($(window).scrollTop() > 1000) {
        $(".wow").addClass("fadeInLeft");
    }
    if($(window).scrollTop() > 1900) {
        $(".lets_work").addClass("fadeInLeft");
    }
});

export function calcTime(offset) {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000*offset));
    return nd.toLocaleString().slice(-8, -3);
}

/*export function retrieveFormValue(el) {
    const name = form.querySelector('[name="name"]'),
    email = form.querySelector('[name="email"]'),
    message = form.querySelector('[name="message"]');
    const values = {
        name: name.value, email: email.value, message: message.value
    };
    console.log('v1', values);
}*/

/*
export function retrieveFormValue(el) {
    const name = el.querySelector('[name="name"]')
    console.log('v1', name);
}*/

/*
export function arlo_tm_contact_form(){

    "use strict";

    $(".contact_form #send_message").on('click', function(){

        var name 		= $(".contact_form #name").val();
        var email 		= $(".contact_form #email").val();
        var message 	= $(".contact_form #message").val();
        var subject 	= $(".contact_form #subject").val();
        var success     = $(".contact_form .returnmessage").data('success');

        $(".contact_form .returnmessage").empty(); //To empty previous error/success message.
        //checking for blank fields
        if(name===''||email===''||message===''){

            $('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
        }
        else{
            // Returns successful data submission message when the entered information is stored in database.
            $.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {

                $(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


                if($(".contact_form .returnmessage span.contact_error").length){
                    $(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
                }else{
                    $(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
                    $(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
                }

                if(data===""){
                    $("#contact_form")[0].reset();//To reset form fields on success
                }

            });
        }
        return false;
    });
}*/
