// MÉTHODE MODULE CLASS

//TEMPLATING.
import Handlebars from 'handlebars';
//import 'handlebars/dist/handlebars.js';
import {capLettre} from './module';

      
      
class Meteo { 

  constructor(infos) {
    this.infos = infos;
      console.log("ID de la ville:" + this.infos.villeID);
      console.log("Le systeme de la ville:" + this.infos.units);      
  }

  getMeteoInformations(infos) {
      
//      const _infos = this.infos;
      
      var maClef = "0c98af945c8169d1e0fb538cd4ff153f";
      var maRequete = 'http://api.openweathermap.org/data/2.5/weather?id='+this.infos.villeID+'&units='+this.infos.units+'&lang='+this.infos.langue+'&APPID='+maClef;
      //var maRequete = 'http://api.openweathermap.org/data/2.5/weather?id=2464470&units=metric&APPID=0c98af945c8169d1e0fb538cd4ff153f';
    
      //console.log("maRequete : "+ maRequete);
      
    // ----------------------- OPENWEATHERMAP -----------------------
    $.ajax({
          'url': maRequete,
          'type': 'GET',
          'format': 'json',
          'cache': 'false', 
          'dataType': 'json'
                                                                                                                           
    }).done(function (data, textStatus, jqXHR) {

       // DONNÉES DE LA JOURNÉE.
      console.dir(data);

      //
      const tendance = data.weather[0].main;
      const tendanceFrancais = data.weather[0].description;
//      const unite = _infos.units == "metric" ? "°C" : "°F";

      // CONSOLE
      console.log("Ville : " + data.name);
      console.log("Température : " + data.main.temp + "ºC");
      console.log("humidity :" + data.main.humidity + "%");
      console.log("tendanceFrancais :" + capLettre(tendanceFrancais));
      console.log("vent :" + data.wind.speed + "m/sec");

      


//------------------------------------------------------------
      //https://css-tricks.com/using-svg/
      
      let imgsource = "";
      const chemin = "images/";
      
      switch (tendance){
          case "Rain":
              imgsource = chemin + "rain.svg";
              break;
          case "Clear":
              imgsource = chemin + "sunny.svg";
              break;
          case "Clouds":
              imgsource = chemin + "cloudy.svg";
              break;
          case "Snow":
              imgsource = chemin + "snow.svg";
              break;
          default:
              imgsource = chemin + "variable.svg";
        }      
             
//            // code js handlebars
//
      const source = $('#handlebars-meteo').html();
      
      const template = Handlebars.compile(source);
      
      const context = { 
          "ville": data.name, 
          "temperature": data.main.temp, 
          "humidite": data.main.humidity + "%", 
          "tendance": capLettre(tendanceFrancais), 
          "imagemeteo": imgsource,
          "vent": data.wind.speed + "m/sec",
      };
      
      const result = template(context);
      
      $(".jumbotron").html(result);
    
        
    })
      

      
//------------------------------------------------------------
      
    .fail(function (jqXHR, textStatus, errorThrown) {
        window.console.log('errorThrown : ' + textStatus);
    })
    .always(function (jqXHR, textStatus) {
      console.log('Fin de l\'exécution.');
    });
  
    
    return "****** getMeteoInformations() OK. Affichage avec handlebars.";
  }
}

export default Meteo
