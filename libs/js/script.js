	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['countryName']);
					$('#txtCapital').html(result['data'][0]['countryCode']);
					$('#txtLanguages').html(result['data'][0]['timezoneId']);
					$('#txtPopulation').html(result['data'][0]['sunrise']);
					$('#txtArea').html(result['data'][0]['sunset']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});
