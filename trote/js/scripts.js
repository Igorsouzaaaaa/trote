 function calcular(){
    // vamos criar 2 variáveis
    // JS as variáveis não possuem tipo 
    let mascote, homenagem, leite, kitAvulso, suplementoAvulso
    // recupera o valor do mascote digitado pelo usuario
    mascote = document.getElementById("mascote").value 
    // recupera o valor da homenagem digitado pelo usuario
    homenagem = document.getElementById("homenagem").value
    // recuperar a qtda de litros de leite
    leite = document.getElementById("leite").value
    // recuperar a qtde avulsa de kit alimento
    kitAvulso = document.getElementById("kitAvulso").value
   // recuperar a qtde avulsa de suplemento
   suplementoAvulso = document.getElementById("suplementoAvulso").value
    // calcular a soma
    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite)) + (30 * Number(kitAvulso)) + (15 * Number(suplementoAvulso))
    // retorna o valor ao HTML
    // template string     
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
    
 }