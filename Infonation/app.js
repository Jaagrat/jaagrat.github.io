

function flag(){
	// const countryISOcode = document.getElementById("countryCode").value ;
	// let url = "https://restcountries.eu/rest/v2/alpha/" + countryISOcode;
	// document.getElementById("flagImage").src=url;
	// document.getElementById("flagImage").style.display="block";

	// let request = new XMLHttpRequest();
	// request.open('GET', url);
	// request.responseType = 'json';
	// request.send();
	// request.onload = function() {
	// 	const myJSON = request.response;
	// 	var dynamicHTML=""; 
	// 		const name = myJSON.name;
	// 		const nativeName = myJSON.nativeName;
	// 		const capital = myJSON.capital;
	// 		const currency = myJSON.currencies[0].name;
	// 		const currencyCode = myJSON.currencies[0].code;
	// 		const CurrencySymbol = myJSON.currencies[0].symbol;
			
	// 		dynamicHTML+=("<p> Country : " + name  + "  / " + nativeName + " ,   Capital : " + capital + " </p>");
    //         dynamicHTML+=("<p>currency : " + currency + " | " + currencyCode + " | " + CurrencySymbol + "</p>");
            
	// 		document.getElementById("flagImage").style.display="block";
	// 		document.getElementById("flagImage").src=myJSON.flag;
	// 		document.getElementById("details").style.display="block";
	// 		document.getElementById("details").innerHTML=dynamicHTML;
	//   }

	const name = document.getElementById("country").value ;
	const apikey = "a34a77f355273d345439658a1ce84485";
	let url = "http://api.countrylayer.com/v2/name/" + name + "?access_key=" + apikey + "& FullText=true";
	
	let request = new XMLHttpRequest();
	request.open('GET', url);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		const myJSON = request.response[0];
		var dynamicHTML=""; 
			const name = myJSON.name;
			const nativeName = myJSON.nativeName;
			const capital = myJSON.capital;
			const currency = myJSON.currencies[0].name;
			const currencyCode = myJSON.currencies[0].code;
			const CurrencySymbol = myJSON.currencies[0].symbol;
			
			dynamicHTML+=("<p> Country : " + name  + "  / " + nativeName + " ,   Capital : " + capital + " </p>");
            dynamicHTML+=("<p>currency : " + currency + " | " + currencyCode + " | " + CurrencySymbol + "</p>");
            
			document.getElementById("flagImage").style.display = "block";
			document.getElementById("flagImage").src = myJSON.flag;
			document.getElementById("details").style.display="block";
			document.getElementById("details").innerHTML=dynamicHTML;
	  }
}


function getWeather(){
	const place = document.getElementById("Place").value;
    const apikey = "7fe8260855338d1ca87474dc5ee89256";
	let url = "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid="+apikey;

	let request = new XMLHttpRequest();
	request.open('GET', url);
	request.responseType = 'json';
	request.send();
	
	request.onload = function() {
		const myJSON = request.response;
		var dynamicHTML=""; 
			const latitude= myJSON.coord.lon;
			const longitude = myJSON.coord.lat;
			const tempF = parseFloat(myJSON.main.temp-206).toFixed(0);
			const tempC = parseFloat(((tempF-32)*5)/9 -5).toFixed(2);
			const windspeed = myJSON.wind.speed;
			const windDegree = myJSON.wind.deg;
            const weatherDescription=myJSON.weather[0].description;
            const icon=myJSON.weather[0].icon;
			const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
			dynamicHTML+=("<p>latitude: " + latitude + " | longitude : " + longitude + " </p>");
            dynamicHTML+=("<p>Temperature : "+ tempF + " &#8457; or "+tempC+"&#8451; </p>");
			dynamicHTML+=("<p>Weather of " + place + " : " + weatherDescription + "</p>");
            dynamicHTML+=("<img src=" + imageURL +">");
            dynamicHTML+=("<p>Wind speed : " + windspeed + " kmph moving "+ windDegree +" degrees</p>")
		document.getElementById("weatherReport").innerHTML=dynamicHTML;
		document.getElementById("weatherReport").style.display="block";
	}

	//   if(request.readyState!=4){
	// 	alert("Data for "+ place + " is not available!");
	// }
}

