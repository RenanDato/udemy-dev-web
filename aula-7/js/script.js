import { WSAETOOMANYREFS } from "constants";

// var resposta = confirm("Deseja excluir?");

// console.log(resposta);

// const a = 3;
// const b = 7;

// function somar(a, b){
//     return a + b;
// }

// console.log(somar(2, 5));

document.querySelector("#calcular").addEventListener("click",function(){
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;

    if(valorA.length > 0  && valorB.length > 0){
        // alert(parseInt(valorA) + parseInt(valorB));
        alert somar(valorA, valorB);
    }else{
        alert("Digite um valor");
    }
} );