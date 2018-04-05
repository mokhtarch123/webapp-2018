// MÉTHODE MODULE CLASS

class Meteo {

  constructor(infos) {
    this.infos = infos;
  }

  getMeteoInformations() {
    
    // ----------------------- OPENWEATHERMAP -----------------------
    $.ajax({
          'url': 'http://api.openweathermap.org/data/2.5/weather?id=2464470&units=metric&APPID=0c98af945c8169d1e0fb538cd4ff153f',
          'type': 'GET',
          'format': 'json',
          'cache': 'false', 
          'dataType': 'json'
                                                                                                                           
    }).done(function (data, textStatus, jqXHR) {

       // DONNÉES DE LA JOURNÉE.
      console.dir(data);

      //
      const tendance = data.weather[0].main;

      // CONSOLE
      console.log("Ville : " + data.name);
      console.log("Température : " + data.main.temp + "ºC");
        console.log("humidity :" + data.main.humidity + "%");

      
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        window.console.log('errorThrown : ' + textStatus);
    })
    .always(function (jqXHR, textStatus) {
      console.log('Fin de l\'exécution.');
    });
  
    
    return "****** getMeteoInformations() OK. Classe de base.";
  }
}

export default Meteo
