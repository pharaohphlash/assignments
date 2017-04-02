$(document).ready(function(){
	
	console.log('ready')

	// Hits submit button
	$('#submit-btn').click(con);

	function con(){
		// get user fahrenheit input
		event.preventDefault();
		var fahr = $('input.text-field').val();


		// parse int or turn string into integer
		fahr = parseInt(fahr, 10)


		// celsius shows up

		var celc;
		celc = (fahr -32)*(5/9);
		celc = Math.round(celc);
		console.log(celc);

		$('#displayoutput').html(celc);


		// If value is cold show drake

		if (fahr<=10){
			$('body').css('background-image', 'url(http://res.cloudinary.com/thefader/image/upload/iwussu1yrp4nlpml4efa.jpg');
		}

		// IF value is warm show anderson cooper
		else if (fahr > 10 && fahr<20){
			$('body').css('background-image', 'url(http://pre04.deviantart.net/3864/th/pre/i/2015/193/d/4/peter_griffin__family_guy__29_by_frasier_and_niles-d90zuko.jpg');
		}

		// If value is hot show Little Wayne
		else {
			$('body').css('background-image', 'url(http://www.hostelriodejaneiro.org/wp-content/uploads/2016/07/CARMINE-RIO-BEACH.jpg');
		}
	}
});