$(document).ready(function(){
	function validateEmail($email) {
	  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  return emailReg.test( $email );
	}

	$('.modal__button').on("click" ,function(e){
		e.preventDefault();
		$('.modal__form').fadeIn(300);
		$(".header__small>a").removeClass("active__menu");
		$(".menu__small").css("right" , "-100%");
		$(".overlay").fadeOut(300);
		$("body,html").css("overflow-y" ,"hidden");
	})


	$("body").on("input" , ".error input" ,function(e){
		e.preventDefault();
		$(this).closest(".error").removeClass('error');
	});

	$('.contact__form form').on('submit' , function(e){
		e.preventDefault();
		var errors = 0;
		if ($(this).find('.email__field>input').val().length == 0 || !validateEmail($(this).find(".email__field>input").val())) {
			$(this).find(".email__field").addClass("error");
			errors++;
		}


		if (errors == 0) {
			$('.contact__loading').fadeIn(300);
			$(".contact__head").css("opacity" , "0");
			$(".contact__form").css("opacity" , "0");
			setTimeout(function(){
				$('.contact__loading').css("display" , "none");
				$('.thank__form').fadeIn(300);
			}, 3000);
			sendtalkEmail()

			
		}
	});


	$('.modal__box>a').on('click' ,function(e){
		e.preventDefault();
		$(this).closest('.modal__form').fadeOut(300);
		$('body,html').css('overflow-y' , 'auto');
	});

	$('.modal__form form').on('submit' , function(e){
		e.preventDefault();
		var errors = 0;
		if ($(this).find('.email__modal>input').val().length == 0 || !validateEmail($(this).find(".email__modal>input").val())) {
			$(this).find(".email__modal").addClass("error");
			errors++;
		}


		if (errors == 0) {
			$('.modal__load').fadeIn(300);
			$('.modal__box>h2 , .modal__box>p , .modal__box>form').css("opacity" , "0");
			setTimeout(function(){
				$('.modal__load').css("display" , "none");
				$('.modal__thank').fadeIn(300);
			}, 3000);
			sendEmail()

		}
	});

	$('.header__small>a').on('click' ,function(e){
			e.preventDefault();
			if ($(this).hasClass("active__menu")) {
				$(this).removeClass("active__menu");
				$(".menu__small").css("right" , "-100%");
				$(".overlay").fadeOut(300);
				$("body,html").css("overflow-y" ,"auto");
			} else{
				$(this).addClass("active__menu");
				$(".overlay").fadeIn(300);
				$("body,html").css("overflow-y" ,"hidden");
				$(".menu__small").css("right" , "0px");
			}
	});

	$('.inner__menu>a').on("click" ,function(e){
		e.preventDefault();
		$(".header__small>a").removeClass("active__menu");
		$(".menu__small").css("right" , "-100%");
		$(".overlay").fadeOut(300);
		$("body,html").css("overflow-y" ,"auto");
	});
});

function sendEmail() {
	var sender_username = $("#sender_username").val()
	var sender_email = $("#sender_email").val()

	
	Email.send({
	  Host: "smtp.gmail.com",
	  Username: "sender_username",
	  Password: "Enter your password",
	  To: sender_email,
	  From: "sender_email",
	  Subject: "New user registration",
	  Body: sender_username+"New user registration.",
	  
	})
	  .then(function (message) {
		alert("Mail has been sent successfully")
	  });
  }
  function sendtalkEmail() {
	var talk_username = $("#talk_username").val()
	var talk_phonenum = $("#talk_phonenum").val()
	var talk_email = $("#talk_email").val()
	var talk_contents = $("#talk_contents").val()

	
	Email.send({
	  Host: "smtp.gmail.com",
	  Username: "sender@email_address.com",
	  Password: "Enter your password",
	  To: "sender@email_address.com",
	  From: talk_email,
	  Subject: "New contact us",
	  Body: talk_username+" "+ talk_phonenum + " " + talk_contents,
	  
	})
	  .then(function (message) {
		alert("Mail has been sent successfully")
	  });
  }