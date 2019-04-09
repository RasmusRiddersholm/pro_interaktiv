function gemData(input) {
    var brugerensInput = document.getElementById("kategori").value;
    localStorage.setItem(input,brugerensInput);
}

function visInfo() {
 document.getElementById("info").innerHTML = "<p>" + localStorage.getItem("navn") + "<p/><p>" + localStorage.getItem("alder") + " år<p/>";
}

//vejr

function hentData(url, callback_Funktion) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback_Funktion(this);
        }
    };
}

function visData(jsonData) {
    var jsonElementer = JSON.parse(jsonData.responseText);
    var divIndhold = "";
    
    divIndhold+='<p>Afrika  ' + '' + Math.round(jsonElementer.main.temp) +'°</p>';
    
    document.getElementById("indhold").innerHTML = divIndhold;

    document.getElementById("indhold").insertAdjacentHTML('beforeend', '<img class="ikonisk" alt="Vejrikon" src="' + jsonElementer.weather[0].icon + '.png" alt="' + jsonElementer.weather[0].description + '">');
    
    if(jsonElementer.weather[0].description==="clear sky"){
        document.getElementById("indhold").insertAdjacentHTML('beforeend');
    }
    
    if(jsonElementer.weather[0].description==="few clouds"){
        document.getElementById("indhold").insertAdjacentHTML('beforeend');
    }
    
    if(jsonElementer.weather[0].description==="scattered clouds"){
        document.getElementById("indhold").insertAdjacentHTML('beforeend');
    }
    
    if(jsonElementer.weather[0].description==="broken clouds"){
        document.getElementById("indhold").insertAdjacentHTML('beforeend');
    }
    
    if(jsonElementer.weather[0].description==="shower rain"){
        document.getElementById("indhold").insertAdjacentHTML('beforeend');
    }
    
    if(jsonElementer.weather[0].description==="rain"){
        document.getElementById("indhold").insertAdjacentHTML('beforeend');
    }
    
    if(jsonElementer.weather[0].description==="thunderstorm"){
        document.getElementById("indhold").insertAdjacentHTML('beforeend');
    }
    
    if(jsonElementer.weather[0].description==="snow"){
        document.getElementById("indhold").insertAdjacentHTML('beforeend');
    }
    
    if(jsonElementer.weather[0].description==="mist"){
        document.getElementById("indhold").insertAdjacentHTML('beforeend');
    }
    
}

//Hovedprogramdel
hentData("http://api.openweathermap.org/data/2.5/weather?q=Kampala&APPID=15920939a36a1c6c0d2c0f90ad5ffc6f&units=metric", visData);