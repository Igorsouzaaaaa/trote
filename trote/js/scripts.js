 function calcular(){
    // vamos criar 2 variáveis
    // JS as variáveis não possuem tipo 
    let mascote, homenagem
    // recupera o valor do mascote digitado pelo usuario

    mascote = document.getElementById("mascote").value 
    alert(mascote)
    // recupera o valor da homenagem digitado pelo usuario
    homenagem = document.getElementById("homenagem").value
    alert(homenagem)
    let soma = Number(mascote) + Number(homenagem)
    alert(soma)
 }