import './css/main.css';
import './scss/main.scss';
//import {hello, sup, inc} from './js/module';
import moment from 'moment';
import 'moment/locale/fr';
//var moment = require('moment);
import * as outils from './js/module';
import Dog from './js/dog';
//import Meteo from './js/meteoclassbase';
//import Meteo from './js/meteoclassinfosjquery';
import Meteo from './js/meteoclassinfohandlebars';

outils.hello();
//sup();
//-----------------DATE MOMENT-------------------------
var datedujour = document.querySelector('.date');
var maintenant = moment();

function dateDuJour(){
    console.log("Date du jour : " + maintenant.format('LLLL'));
    datedujour.innerHTML = maintenant.format('LLLL');
}

dateDuJour();
//-----------------------------Class Dog---------------------
const leChien = new Dog('Noisette');
    console.log(leChien.jappe());

//----------------------------Class Meteo---------------------------


//const maMeteo = new Meteo('Quebec');
//    console.log(maMeteo.getMeteoInformations());


//-------------------INTELLIGENTE------------------------------------

function meteoDujour(){
    


const infosMeteo ={
    "villeID":"2464470",
    "units":"metric",
    "langue":"FR"
};

const maMeteo = new Meteo(infosMeteo);
console.log(maMeteo.getMeteoInformations());

}
//-------------------------------------------------------

let epiceriesChoisies = ["bacon cheeseburger", "chicken sandwich", "hamburger", "bacon salad"]
            .filter((x) => /bacon/i.test(x) );
console.log("Épiceries : '" + epiceriesChoisies);


console.log("Incrémente 6 de 1 : " + outils.inc(6) );
