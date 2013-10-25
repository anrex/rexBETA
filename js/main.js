$(document).ready(function() {

	$('.socialFace').hide()
	$('.shareFb').hide()
	$('.shareTwitter').hide()
	$('.shareEmail').hide()
	$('.twitterStripeTwo').hide()

	$('.facebook').click(function() {
		$('.share').hide()
		$('.shareFb').show()	

	})

	$('.twitter').click(function() {
		$('.share').hide()
		$('.shareTwitter').show()	

	})
	
	$('.email').click(function() {
	
			$('.share').hide()
			$('.shareEmail').show()
	})

	$('.twitterStripe').click(function() {

		$('.twitterStripe h1').css( "color", "black" );
		$('.twitterStripeTwo').show()



	})

// click tracking

	$('.clickTrack').click(function() {

  		var selId = $(this).attr('id');
  		var selClass = $(this).attr('class');

  		_gaq.push(['_trackEvent', selId, 'click']);

	});

	$('.share li').click(function(){
		var selId = $(this).attr('id');
		var selClass = $(this).attr('class')
		console.log(selClass)

		_gaq.push(['_trackEvent', selClass, selId]);

		setTimeout(function() {
		document.location.href = link.href;
		}, 100);


	})
	



// window minipulation
	
	var windowHeight = $(window).width();
	console.log(windowHeight);

	if (windowHeight > 1471) {
			$(".shareEmail").css(
            'top', '286px'
        	);

        	$(".shareEmail").css(
            'left', '934px'
        	);

		} else if(windowHeight < 1471 && windowHeight > 935) {


			$(".shareEmail").css(
            	'top', '331px'
        	);

        	$(".shareEmail").css(
            'left', '638px'
        	);

		} else if (windowHeight < 935) {
			console.log('working')




		};


	$(window).resize(function() {
		var windowHeight = $(window).width();


		if (windowHeight > 1471) {
			$(".shareEmail").css(
            'top', '286px'
        	);

        	$(".shareEmail").css(
            'left', '934px'
        	);

		} else if(windowHeight < 1471 && windowHeight > 935) {

			$(".shareEmail").css(
            	'top', '331px'
        	);

        	$(".shareEmail").css(
            'left', '638px'
        	);

		} else if (windowHeight < 935) {
			console.log('working')


		};





	})

	
//random
		//add small delay on links so google analytics tracks links that redirect
	$( 'a' ).each( function () {
		$( this ).on( 'click', function ( event ) {
        event.preventDefault();
        ( function ( h ) {
            setTimeout( function () {
                window.location = h;
            }, 100 );
        })( this.href );
    });
	});


// mouse tracking and head spin
// thank you brandondusseau.com

	$('.container').mousemove(function(e){
		console.log('test')
		var $this = $(this);

		var parentOffset = $(this).offset();

		mouseX = e.pageX - parentOffset.left;
		mouseY = e.pageY - parentOffset.top;

		var horiz = false;
		var vert = false;


		if ((mouseX >= 0 && mouseX <= 300)) {

			horiz = 'left';
			
		} else if (mouseX >= 300 && mouseX <= 450) {
			horiz = 'middle';

		} else if (mouseX >= 450 && mouseX <= $this.width()) {

			horiz = 'right';
		} 

		if (mouseY >= 0 && mouseY <= 210) {

			vert = 'top';
			
		} else if (mouseY >= 210 && mouseY <= 375) {
			vert = 'middle';

		} else if (mouseY >= 375 && mouseY <= $this.height()) {

			vert = 'bottom';
		} 


		$('#him').removeClass().addClass(horiz + vert);		




  	});	

  	$('.youtube').mouseenter(function(){
  		$('#socialFace').removeClass().addClass("youtubeFace")

  	})

  	$('.soundcloud').mouseenter(function(){
  		$('#socialFace').removeClass().addClass("soundcloudFace")

  	})

  	$('.facebook').mouseenter(function(){
  		$('#socialFace').removeClass().addClass("facebookFace")

  	})

  	$('.twitter').mouseenter(function(){
  		$('#socialFace').removeClass().addClass("twitterFace")

  	})

  	$('.itunes').mouseenter(function(){
  		$('#socialFace').removeClass().addClass("itunesFace")

  	})

  	$('.email').mouseenter(function(){
  		$('#socialFace').removeClass().addClass("contactFace")

  	})










  	$('.socialIcon').mouseenter(function(){
  		$('#him').hide()
  		$('#socialFace').show()
	})

  	$('.socialIcon').mouseleave(function(){
  		$('#socialFace').hide()
  		$('#him').show()
	})








})
