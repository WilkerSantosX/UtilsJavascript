$(document).ready(function () {			 
    $('.sidenav').sidenav();
    $('.tabs').tabs();

    //exibeMensagem();
    //somarDoisNumeros(10, 14);
    //somarTresNumeros(10, 10, 10);
    //loop();
    //verIdade(19);
    //declararVariavel();
    //tiposInteracao();
    //datatypesJavascript();
    //javascriptMath();
    //javascriptString();
    //javascriptNumbers();
    //manipulandoDOM();
    //tiposDeConsole();
    
    const distanceInKm = calcularDistancia(52.5200, 13.4050, 48.8566, 2.3522, "K");
    console.log(`A distância entre Berlim e Paris é de ${distanceInKm} km.`);
});

function tiposDeConsole(){
    console.info('This is information');
    console.info({firstName: 'Wilker', lastName: 'Dos Santos'});
    console.info([1, 2, 3, 'abc', 4, 5, null, 10]);
    console.count();

    //Example 1
    console.table(['Zero', 'One', 'Two' ]);

    //Example 2
    function studentDetails(fistName, lastName){
        this.firstName = fistName;
        this.lastName = lastName;
    }

    let wilker = new studentDetails('Wilker', 'Dos Santos');
    let peter = new studentDetails('Peter', 'Parker');
    let harry = new studentDetails('Harry', 'Potter');
    console.table([wilker, peter, harry]);

    console.profile('PROFILE');
    for (let i = 0; i < 1000000; i++) {}
    console.profileEnd('PROFILE');

    console.log('Armazenando um texto de log');
    console.clear();

}


function manipulandoDOM(){
    criarElementoWihJavascript();
    inserirElementoWithJavascript();
    replaceElementoWithJavascript();
    removeElementoWithJavascript();
    updateElementoWithJavascript();
}

function criarElementoWihJavascript(){
    const parent = document.getElementById('parent');
    const p = document.createElement('p');
    p.innerHTML = 'Inserindo informação com appendChild';
    parent.appendChild(p);
    
    const p2 = document.createElement('p');
    p2.innerHTML = 'Inserindo informação com insertBefore';
    const referenceItem = parent.firstElementChild;  
    parent.insertBefore(p2, referenceItem);
}

function inserirElementoWithJavascript(){
    const listElement = document.getElementById('myList');
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item 4';

    //add element in end
    listElement.appendChild(newItem);

    const newItem2 = document.createElement('li');
    newItem2.textContent = 'New Item 5';

    //add element using insertBefore
    const referenceItem = listElement.firstElementChild;
    listElement.insertBefore(newItem2, referenceItem);
}

function replaceElementoWithJavascript(){
    const div = document.getElementById('divDefault');
    const p = document.createElement('p');
    p.innerHTML = 'Inserindo uma nova informação';
    div.parentNode.replaceChild(p, div);   
}

function removeElementoWithJavascript(){
    const listElement = document.getElementById('myList');
    const removeItemBtn = document.getElementById('removeItemBtn');

    removeItemBtn.addEventListener('click', () =>{
        const lastItem = listElement.lastChild;
        listElement.removeChild(lastItem);
    })
}

function updateElementoWithJavascript(){
    const imageElement = document.getElementById('myImage');
    const updateImageBtn = document.getElementById('updateImageBtn');

    updateImageBtn.addEventListener('click', () =>{
        imageElement.src = 'Content/images/marker-destino.png';
        imageElement.alt = 'Marker Destino';
        imageElement.title = 'Marker Destino';
    })
}


function javascriptNumbers(){
    const pi = Math.PI
    exibe('pi: ' + pi)
    exibe('pi.toFixed(0): ' + pi.toFixed(0))
    exibe('pi.toFixed(2): ' + pi.toFixed(2))
    exibe('pi.toPrecision(2): ' + pi.toPrecision(2))
    exibe('pi.valueOf(): ' + pi.valueOf())
    exibe('Number(\'10\'): ' + Number('10'))
    exibe('Number(new Date()): ' + Number(new Date()))
    exibe('parseInt(\'10 de agosto\'): ' + parseInt('10 de agosto'))
    exibe('parseFloat(\'3.5 days\'): ' + parseFloat('3.5 days'))
    exibe('Number.MAX_VALUE: ' + Number.MAX_VALUE)
    exibe('Number.MIN_VALUE: ' + Number.MIN_VALUE)
    exibe('Number.NEGATIVE_INFINITY: ' + Number.NEGATIVE_INFINITY)
    exibe('Number.POSITIVE_INFINITY: ' + Number.POSITIVE_INFINITY)
}

function javascriptString(){
    const texto = 'abcdefghijklmnopqrstuvwzyz'
    exibe('texto: ' + texto)
    exibe('texto.length: ' + texto.length)
    exibe('texto.indexOf: ' + texto.indexOf('o'))
    exibe('texto.lastIndexOf: ' + texto.lastIndexOf('t'))
    exibe('texto.slice: ' + texto.slice(2, 5))
    exibe('texto.replace: ' + texto.replace('abc', '1234'))
    exibe('texto.toUpperCase: ' + texto.toUpperCase())
    exibe('texto.toLocaleLowerCase: ' + texto.toLocaleLowerCase())
    exibe('texto.concat: ' + texto.concat(' adicional'))
    exibe('texto.charAt: ' + texto.charAt(2))
    exibe('texto[2]: ' + texto[2])
    exibe('texto.charCodeAt: ' + texto.charCodeAt('z'))
    exibe('texto.split: ' + texto.split(','))
    exibe('texto.split: ' + texto.split(''))
    exibe('toString: ' + toString(16))
    
    const esc = 'I don\'t \n know'
    exibe(esc)
}

function javascriptMath(){
    exibe("Math.PI: " + Math.PI)
    exibe("Math.round(4.4): " + Math.round(4.4)) 
    exibe("Math.round(4.5): " + Math.round(4.5))
    exibe("Math.pow(2, 4): " + Math.pow(2, 4))
    exibe("Math.sqrt(49): " + Math.sqrt(49))
    exibe("Math.abs(-7): " + Math.abs(-7))
    exibe("Math.ceil(3.14): " + Math.ceil(3.14))
    exibe("Math.floor(3.99): " + Math.floor(3.99)) 
    exibe("Math.sin(0): " + Math.sin(0))
    exibe("Math.cos(Math.PI): " + Math.cos(Math.PI))
    exibe("Math.min(0, 1, 4, 6, -15): " + Math.min(0, 1, 4, 6, -15))
    exibe("Math.max(0, 1, 4, 6, -15): " + Math.max(0, 1, 4, 6, -15))
    exibe("Math.log(1): " + Math.log(1))
    exibe("Math.exp(1): " + Math.exp(1))
    exibe("Math.random(): " + Math.random())
    exibe("Math.floor(Math.random() * 5) + 1: " + Math.floor(Math.random() * 5) + 1) 
}
const exibe = (valor) => console.log(valor)

function datatypesJavascript(){
    var objeto =
    {
        age: 29,
        nameCompleto: "Wilker dos Santos",
        nameSeparator: { first: 'Wilker', last: 'Dos Santos'},
        masculino: true,
        familia: ['Francieli', 'Karolayne'],
        hobbie: null
    }

    console.log({
        objeto
    })
}

function tiposInteracao(){
    console.log('Sou um texto básico de console');
    document.write('Sou um texto básico sendo escrito no documento');
    alert('Sou um texto de alerta');
    console.log(confirm('Sou realmente um texto?'));
    console.log(prompt('O que você quer escrever?','Digite o texto aqui'));
}


function declararVariavel(){
    //bad
    let x = 36;
    let y = 36;
    let z = 36;

    //good
    let a, b, c = 36;
}

function verIdade(idade){
    //bad
    let maioridade;
    if(idade >= 18){
        maioridade = true;
    } else {
        maioridade = false;
    }

    //good
    maioridade = idade >= 18 ? true : false;
    console.log("É maior de idade: " + maioridade);
}

const loop = () => {
    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    //bad
    for (let i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
    }  

    //good
    for (let n of numeros){
        console.log(n);       
    } 
}

//good
const somarTresNumeros = (a, b, c) => console.log(a + b + c);

//bad
function somarDoisNumeros(a, b){
    return console.log(a + b);
}

var global;
var exibeMensagem = function() {  
    let usoInterno; const usoInternoInitialize = 'instância obrigatória';
    console.log(global);
    console.log(usoInterno);
    console.log(usoInternoInitialize);
}

//A fórmula Haversine é uma fórmula matemática que é usada para calcular a distância entre dois pontos em uma esfera.
function calcularDistancia(lat1, lon1, lat2, lon2, unit) {
      const radlat1 = Math.PI * lat1/180;
      const radlat2 = Math.PI * lat2/180;
      const radlon1 = Math.PI * lon1/180;
      const radlon2 = Math.PI * lon2/180;
      const theta = lon1-lon2;
      const radtheta = Math.PI * theta/180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === "K") { dist = dist * 1.609344 }
      if (unit === "N") { dist = dist * 0.8684 }
      return dist;
}
