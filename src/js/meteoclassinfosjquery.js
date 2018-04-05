// MÉTHODE MODULE CLASS

//class Meteo {
//
//  constructor(infos) {
//    this.infos = infos;
//  }
//
//  getMeteoInformations() {
      
      
      class Meteo {

  constructor(infos) {
    this.infos = infos;
      console.log("ID de la ville:" + this.infos.villeID);
      console.log("Le systeme de la ville:" + this.infos.units);

      
  }

  getMeteoInformations(infos) {
      
      var maClef = "0c98af945c8169d1e0fb538cd4ff153f";
      var maRequete = 'http://api.openweathermap.org/data/2.5/weather?id='+this.infos.villeID+'&units='+this.infos.units+'&lang='+this.infos.langue+'&APPID='+maClef;
    
      console.log("maRequete : "+ maRequete);
      
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

      // CONSOLE
      console.log("Ville : " + data.name);
      console.log("Température : " + data.main.temp + "ºC");
      console.log("humidity :" + data.main.humidity + "%");

      
//       $(".ville").html("<h2>" + data.name + "</h2>"); 
       $(".ville").html("<h2>" + data.name + "</h2>"); 
       $("#temperature").html("<h2>" + data.main.temp +  "ºC" + "</h2>");
        $("#humidite").html("<h2>" + data.main.humidity + "%" + "</h2>");
//        $("#tendance").html("<h2>" + data.weather[0].main + "</h2>");
        $("#description").html("<h2>" + tendanceFrancais + "</h2>");

//------------------------------------------------------------
      //https://css-tricks.com/using-svg/
      
      let imgsource ="";
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
             
        $("#imgmeteo").html(`<img src="${imgsource}" alt="" width="128" height="128">`);      
    
        
    })
      

      
//------------------------------------------------------------
      
    .fail(function (jqXHR, textStatus, errorThrown) {
        window.console.log('errorThrown : ' + textStatus);
    })
    .always(function (jqXHR, textStatus) {
      console.log('Fin de l\'exécution.');
    });
  
    
    return "****** getMeteoInformations() OK. Classe jquery.";
  }
}

export default Meteo
