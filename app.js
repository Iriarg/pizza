let harina = '250gr harina';
let levadura = '2 y 1/4 cucharaditas de levadura seca';
let azucar = '2 cucharadas de azúcar';
let agua = '375 ml de agua caliente';
let aceite = '3 cdas. de aceite de oliva';
let sal = '1,5 cucharadita de sal';
let vinagre = '1 cucharadita de vinagre de vino';

let salsa = '175 gr de salsa de tomate';
let aceite1 = '1 cucharada de aceite de oliva extra virgen';
let miel = '1 cucharadita de miel';
let oregano = '1,5 cucharaditas de orégano fresco picado';
let albahaca = '1,5 cucharaditas de albahaca fresca picada';
let tomillo = '1/4 cucharadita de tomillo seco';
let ajo = '1 diente de ajo';
let salpi = 'Sal y pimienta negra recién molida al gusto';

let aceite2 = '2 cucharadas de aceite de oliva';
let ajo1 = '2 dientes de ajo, finamente picados';
let quesom = '500g de queso mozzarella rallado';
let quesop = '60g de queso parmesano rallado';
let pepperoni = '40 rodajas de pepperoni';
let oregano1 = '4 cucharadas de orégano fresco';

function app() {

    turnonoven();
    makedough();
    makesauce();
    addtoppings ();
    pizzaready ();

}

function turnonoven () {
    console.log('horno encendido');
}

function makedough () {

    console.log ('disolver en' , agua ,',' , levadura , 'y' , azucar);
    console.log ('verter' , harina , 'en cuenco');
    console.log ('Incorporar' , aceite ,',' , sal , 'y' , vinagre);
    console.log ('Añadir' , harina, 'mientras se va amasando');
    console.log ('Dejar reposar 2 horas');

}

function makesauce () {
    
    console.log ('Añadir', salsa, aceite1,',', miel,',', oregano,',', albahaca,',', tomillo,',', ajo, 'y', salpi, 'a un bol y dejar reposar');
}

function addtoppings () {

    console.log ('Mezclar', aceite2,',', ajo, 'y', 'untar en la masa.');
    console.log ('Verter la salsa y añadir', quesom, ',', quesop, ',', pepperoni, 'y', oregano1);
    console.log ('Meter la pizza en el horno 15 min.')
    
}

function pizzaready () {

    console.log ('Sacar la pizza del horno');
    console.log ('Entregar la pizza');

}

app()