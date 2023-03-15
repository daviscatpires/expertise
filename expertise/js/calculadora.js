function enviar(){
    var valor = document.getElementById("valor-conta").value;
    var desconto= document.getElementById("valor-desconto");
    var total = document.getElementById("valor-desctotal");
    var anual = document.getElementById("valor-anual");

    desconto=(valor*20)/100;
    total = valor - desconto;
    anual = desconto*12;

    console.log(valor);
    console.log(desconto);
    console.log(total);

    document.getElementById("valor-desconto").innerHTML=desconto.toFixed(2);
    document.getElementById("valor-desctotal").innerHTML=total.toFixed(2);
    document.getElementById("valor-anual").innerHTML=anual.toFixed(2);


}