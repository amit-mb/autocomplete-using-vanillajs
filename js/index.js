function Get(url){
    var HttpReq = new XMLHttpRequest(); // a new request
    HttpReq.open("GET",url,false);
    HttpReq.send(null);
    return HttpReq.responseText;          
}

var countries = JSON.parse(Get('https://restcountries.eu/rest/v2/all?fields=name'));
//console.log(countries);

countries.map(function(element, index) {
	countries[index] = element.name;
})

// variables
var input = document.querySelector('input');
var results, countries_to_show = [];
var autocomplete_results = document.getElementById("autocomplete-results");

// functions
function autocomplete(val) {
  var countries_returned = [];  

  for (i = 0; i < countries.length; i++) {
    if (val === countries[i].toLowerCase().slice(0, val.length)) {
      countries_returned.push(countries[i]);
    }
  }

  return countries_returned;
}

// events
input.onkeyup = function(e) {
  input_val = this.value.toLowerCase();

  if (input_val.length > 0) {
    autocomplete_results.innerHTML = '';
    countries_to_show = autocomplete(input_val);
    
    for (i = 0; i < countries_to_show.length; i++) {
      autocomplete_results.innerHTML += '<li id=' + countries_to_show[i] +' class="list-item">' + countries_to_show[i] + '</li>';
    }
    autocomplete_results.style.display = 'block';

    
  }else {
    countries_to_show = [];
    autocomplete_results.innerHTML = '';
  }
}

// Get the element, add a click listener...
document.getElementById("autocomplete-results").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the value!
		console.log( e.target.innerHTML );
    input.value = e.target.innerHTML
    autocomplete_results.innerHTML = null; //empty the value
    
	}
});