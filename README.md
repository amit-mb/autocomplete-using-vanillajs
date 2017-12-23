# AutoComplete using VanillaJS

This is my attempt towards making a AutoComplete type-ahead input using HTML, CSS and pure JS

#Demo
[on CodePen](https://codepen.io/amit-mb/pen/dJpZJp)

# Approach

  - Define a GET function similar to jQuery's $.getJSON method
  - Send a GET request to https://restcountries.eu/rest/v2/all?fields=name once since we want minimal requests to be made to the API. This is possible because the data fetched is just 6.1 KB. If the dataset was bigger, We would have used different parameters as and when needed
  - the API returns a array of objects which are of the form {"name" : "countryName" }. Since the property "name" is redundant to us, Let us store just the countryNames in an array called countries by use of map() method.
  - Required variables and functions are declared 
  - 'keyup' eventlistener is attached to input element. In callback function, we check if any input is entered. If so, We call 'autocomplete' function with input value as parameter which checks if the input entered for i characters is equal to any of the country names for i characters. If true, the whole countryName is pushed on to an array called countries_returned which will be returned back and stored in 'countries_to_show' array. 
  - Using the 'countries_to_show' array, we create `<li>` list-items that show up as suggestions.
  - If input entered is blank, we reset `countries_to_show` variable to 0.
  - Similarly, click eventlistener for `li` elements are defined so that on clicking a particular countryName, it gets selected and get display as value of `input` tag.