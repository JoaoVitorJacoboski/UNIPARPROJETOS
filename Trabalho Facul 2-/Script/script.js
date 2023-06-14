let lado1 = document.querySelector("#lado1");
let lado2 = document.querySelector("#lado2");
let h1Area = document.querySelector("#h1Area");
let btArea = document.querySelector("#btArea");

function CalcularImobiliaria(){
    let l1 = Number(lado1.value);
    let l2 = Number(lado2.value);

    let Calcular1 = (l1 * l2);
    h1Area.innerHTML = 
    "Area total em Metros quadrados : " +"<br>" + Calcular1 + "<br>"
}
btArea.onclick = function(){
    CalcularImobiliaria();
}

let cavalos = document.querySelector("#cavalos");
let btcalcular = document.querySelector("#btcalcular");
let h1cavalos = document.querySelector("#h1cavalos");

function CalcularFerradura (){
    let cv = Number(cavalos.value);
    let Calcular2 = (cv * 4);
    h1cavalos.innerHTML = 
    "Quantidade Necessarias de Ferraduras : " + "<br>" + Calcular2 + "<br>"; 
}
btcalcular.onclick = function(){
    CalcularFerradura();
}

let paes = document.querySelector("#paes");
let broas = document.querySelector("#broas");
let btPadaria = document.querySelector("#btPadaria");

function CalcularPadaria() {
  let pa = Number(paes.value);
  let ba = Number(broas.value);
  let valorpa = pa * 0.12;
  let valorba = ba * 1.50;
  let totalPA = valorpa + valorba;
  let guardarPA = totalPA * 0.1;

  document.getElementById("valorArrecadadoPA").innerHTML = "Valor arrecadado: R$ " + totalPA;
  document.getElementById("valorPoupancaPA").innerHTML = "Valor a guardar na poupança: R$ " + guardarPA;
}

btPadaria.onclick = function() {
  CalcularPadaria();
};
let nomedias = document.querySelector("#nomedias");
let anosdias = document.querySelector("#anosdias");
let btdiasvida = document.querySelector("#btdiasvida");
let h1anosdias = document.querySelector("#h1anosdias");

function Calculardias() {
    let ad = Number(anosdias.value);
    let nd = nomedias.value;
    let dias = ad * 365;
    
    if (isNaN(ad) || nd.trim() === "") {
        h1anosdias.innerHTML = "Por favor, insira um valor válido para os anos de vida.";
    } else {
        h1anosdias.innerHTML = ":" + nd + " Você Já Viveu " + dias + " dias";
    }
}

btdiasvida.onclick = function() {
    Calculardias();
}

let valorgasolina = document.querySelector("#valorgasolina");
let valorpagar = document.querySelector("#valorpagar");
let btgasolina = document.querySelector("#btgasolina");
let h1rgasiolina = document.querySelector("#h1rgasolina");

function Calculargasoliona(){
let vrlg = Number(valorgasolina.value);
let vlrp = Number(valorpagar.value);
let litragem = (vlrp / vrlg);

h1rgasolina.innerHTML =  "<br>" + "Foram Abastecido " + litragem + " litros em seu carro";
}
btgasolina.onclick = function () {
    Calculargasoliona();
};
let pesoalimento = document.querySelector("#pesoalimento");
let btRestaurante = document.querySelector("#btRestaurante");
let h1Restaurante = document.querySelector("#h1Restaurante");

function CalcularRestaurante(){
    let PA = Number(pesoalimento.value);
    let PA1 = PA - 0.2;
    let VRestaurante = PA1 * 12 ;
    h1Restaurante.innerHTML = "O Valor a pagar será de $" + VRestaurante ;

}
btRestaurante.onclick = function(){
    CalcularRestaurante();
};
let diames = document.querySelector("#diames");
let mesdia = document.querySelector("#mesdia");
let btdiasano = document.querySelector("#btdiasano");
let h1daisano = document.querySelector("#h1diasano");

function Calculardiasano (){
let d1 = Number(diames.value);
let m1 = Number(mesdia.value);

let totaldias = (m1 - 1) * 30 + d1; 
h1daisano.innerHTML = "Já se passaram " + totaldias + " Dias no Ano"
}
btdiasano.onclick = function(){
    Calculardiasano();
};

let camisap = document.querySelector("#camisap");
let camisam = document.querySelector("#camisam");
let camisag = document.querySelector("#camisag");
let btcamisa = document.querySelector("#btcamisa");
let h1camisa = document.querySelector("#h1camisa");

function CalcularCamisa(){
    let cP = Number(camisap.value);
    let cM = Number(camisam.value);   
    let cG = Number(camisag.value);

    let totalcamisa = (cP * 10) + (cM * 12) + (cG * 15);
    h1camisa.innerHTML = "O Valor total Das Camisas é $" + totalcamisa;

}
btcamisa.onclick = function(){
    CalcularCamisa();;
}
let pAX = document.querySelector("#pAX");
let pAY = document.querySelector("#pAY");
let pBX = document.querySelector("#pBX");
let pBY = document.querySelector("#pBY");
let btXY = document.querySelector("#btXY");
let h1XY = document.querySelector("#h1XY");

function CalcularDistancia() {
  let pontoAX = Number(pAX.value);
  let pontoAY = Number(pAY.value);
  let pontoBX = Number(pBX.value);
  let pontoBY = Number(pBY.value);

  let distanciaXY = Math.sqrt(Math.pow(pontoBX - pontoAX, 2) + Math.pow(pontoBY - pontoAY, 2));
  h1XY.innerHTML = "A distância entre os pontos A e B é de " + distanciaXY;
}
btXY.onclick = function(){
  CalcularDistancia();
};

let diaAS = document.querySelector("#diaAS");
let btAS = document.querySelector("#btAS");
let h1AS = document.querySelector("#h1AS");

function CalcularAS() {
  let dias = parseInt(diaAS.value);
  let anos = Math.floor(dias / 365);
  let meses = Math.floor((dias % 365) / 30);
  dias = (dias % 365) % 30;
  h1AS.innerHTML = anos + " anos " + meses + " meses " + dias + " dias";
}

btAS.onclick = function() {
  CalcularAS();
};

let salario = document.querySelector("#salario");
let btSalario = document.querySelector("#btSalario");
let h1Salario = document.querySelector("#btSalario");

function CalcularSalario(){
    let SA = Number(salario.value);
    let SA15 = SA + (SA * 0,15);
    let SA8 = SA15 - (SA15 * 0,08);

    h1Salario.innerHTML = "O salario inicial é de" + SA + "<br>" + " O com reajuste de 15% é de" + SA15 + "<br>" + "E Após os impostos passa a ser " + SA8 ;
}
btSalario.onclick = function (){
    CalcularSalario();
};
let numeralInput = document.querySelector("#numeral");
let btNumeral = document.querySelector("#btNumeral");
let h1Numeral = document.querySelector("#h1Numeral");

function Calibrar() {
  let numeral = parseInt(numeralInput.value);

  if (numeral >= 0 && numeral <= 999) {
    let centena = Math.floor(numeral / 100);
    let dezena = Math.floor((numeral % 100) / 10);
    let unidade = numeral % 10;

    h1Numeral.innerHTML = "CENTENA = " + centena + " DEZENA = " + dezena + " UNIDADE = " + unidade;
  } else {
    h1Numeral.innerHTML = "Número inválido. Digite um número de até três dígitos.";
  }
}

btNumeral.onclick = function() {
  Calibrar();
};
////<p id="texto"></p>
//= document.querySelector("#");
let raiopz = document.querySelector("#raiopz");
let btpizza = document.querySelector("#btpizza");
let h1pizza = document.querySelector("#h1pizza");

function Calcularpizza(){
    let rpz = Number(raiopz.value);
    let AreaPZ = 3.14 * (rpz * rpz)
    h1pizza.innerHTML = "A area da pizza é " + AreaPZ + " centimetros quadrados"; 
}
btpizza.onclick = function(){
    Calcularpizza();
};
let valorTotalInput = document.querySelector("#valorTotal");
let btdividir = document.querySelector("#btdividir");
let h1dividir = document.querySelector("#h1dividir");

function DividirConta() {
    let valorTotal = parseFloat(valorTotalInput.value);
  
    if (!isNaN(valorTotal)) {
      let valorCarlos = Math.floor(valorTotal / 3);
      let valorAndre = Math.floor(valorTotal / 3);
      let valorFelipe = valorTotal - valorCarlos - valorAndre;
  
      h1dividir.innerHTML = "Carlos: R$" + valorCarlos.toFixed(2) +
                            ", André: R$" + valorAndre.toFixed(2) +
                            ", Felipe: R$" + valorFelipe.toFixed(2);
    } else {
      h1dividir.innerHTML = "Valor inválido. Digite um número válido.";
    }
  }
    btdividir.onclick = function(){
        DividirConta();
    };

