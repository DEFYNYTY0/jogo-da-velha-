var jogador = "x";

function jogar(celula) {
  //verificar se a celula está vazia
  if (celula.innerHTML === "") {
    //escreva na celula
    celula.innerHTML = jogador;

    //alternar jogada
    //se jogada for igual a "x"
    if (jogador === "x") {
      jogador = "o";
      celula.style.backgroundColor = "orange";
    } else {
      //se jogada for "o"
      jogador = "x";
      celula.style.backgroundColor = "yellow";
    }
  }
}

function reiniciar() {
  window.location.reload();
}

//criando listas no Java script
let nomes = [];
//           0         1          2        3         4        5
function gerarBatalha() {
 let nome1 = nomes[ Math.floor( Math.random() * nomes.length )];
 let nome2 = nomes[ Math.floor( Math.random() * nomes.length )];

 if (nome1 === nome2){
     gerarBatalha();
 }else{
 // escreva na tela
 document.getElementById('jogadores').textContent = nome1 + " vs " + nome2;

 console.log("batalha da vez: " + nome1 + " x " + nome2)

 //
 let numero = Math.random ();
 console.log ('Numero sorteado:' + numero);
 console.log ('posição da lista sem arredondar'+ numero * nomes.length);
 console.log ('Posição da lista arredondado: ' + Math.floor(numero * nomes.length));
 console.log ('Nome sorteado: ' + nomes [ Math.floor ( numero * nomes.length )] );
}
}


function adicionar (){
var nome = document.getElementById('nome').value;

nomes.push(nome)
var nome = document.getElementById('nome').value="";
listar()

}
listar()

function listar (){
var listagem = document.getElementById("lista");
listagem.innerHTML= '';

for (var contador =0; contador < nomes.length; contador ++){
var item = document.createElement('li');
var valor = nomes[contador];
item.innerHTML = valor;
listagem.appendChild(item);

      }
}