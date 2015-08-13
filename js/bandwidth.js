jQuery(function($) {

	$('#results').hide();

	$('input.button').click(function(e) {
		e.preventDefault();

		var cap = $('#cap').val();
		var speed = $('#speed').val();

		var megabytesPerSecond = (speed / 8);
		var secondsPerDay = 86400;

		var gigabytesPerDay = (megabytesPerSecond * secondsPerDay)/1024;

		var monthlyTotalData = gigabytesPerDay * 30;
		var dataPercentage = (cap/monthlyTotalData) * 100;

		var daysPerMonth = (cap/monthlyTotalData) * 30;


		var displayDays = Math.round(daysPerMonth); 
		var daysMsg = (displayDays > 1) ? " days" : " day";

		$('#theoretical-cap').html(Math.round(monthlyTotalData));
		$('#percentage-of-theoretical-cap').html(Math.round(dataPercentage));
		$('#num-days-allowed-by-cap').html(displayDays + daysMsg);

		$('#results').show();

	});

});
