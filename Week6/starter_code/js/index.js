//create city array
var cities = ['NYC','SF','LA','ATX','SYD'];
//add element from array
cities.forEach(function(city) {
	var cityOption = '<option value="' + city + '">' + city +"</option>";
	$('#city-type').append(cityOption)
});

$('#city-type').change(changeBackground)

function changeBackground(){
	var selectedItem = $('#city-type').val().toLowerCase();

	$('body').attr('class', selectedItem)
	// //compare selcted item to city name
	// if(selectedItem === 'NYC')
	// 	$('body').attr('class','nyc')
	// else if(selectedItem === 'SF')
	// 	$('body').attr('class','sf')
	// else if(selectedItem === 'LA')
	// 	$('body').attr('class','la')
	// else if(selectedItem === 'ATX')
	// 	$('body').attr('class','austin')
	// else if(selectedItem === 'SYD')
	// 	$('body').attr('class','sydney')
	// else
	// 	$('body').removeClass()
}
