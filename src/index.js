import './css/main.css';
import './scss/main.scss';
//import {capLettre} from './module';

import moment from 'moment';
import 'moment/locale/fr';

import * as outils from './js/module';

import Meteo from './js/meteoclassinfohandlebars';
//import Meteo from './js/meteoclassinfosjquery';



//console.log("HELLO");
            
//            
//            
////sup();
//-----------------DATE MOMENT-------------------------
//-----------------variable-------------------------

var maDate = document.querySelector('.date');
var maintenant = moment();

function dateDuJour() {
    console.log("Date du jour : " + maintenant.format('LLLL'));
    maDate.innerHTML = outils.capLettre(maintenant.format('LLLL'));
}
 dateDuJour();

//
////----------------------------Class Meteo---------------------------
////-------------------INTELLIGENTE------------------------------------
//
function meteoDuJour() {
    
    const infosMeteo = {
        "villeID":"2464470",
        "units":"metric",
        "langue":"fr"
    };

    const maMeteo = new Meteo(infosMeteo);
    console.log(maMeteo.getMeteoInformations());
}


$(document).ready(function() {
    console.log("READY");
    dateDuJour();
    meteoDuJour();
});
