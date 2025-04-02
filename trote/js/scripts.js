 function calcular(){
    // vamos criar 2 variáveis
    // JS as variáveis não possuem tipo 
    let mascote, homenagem, leite, kit, suplemento, soma, equipe
    // recupera o valor do mascote digitado pelo usuario
    mascote = Number (document.getElementById("mascote").value)
    // recupera o valor da homenagem digitado pelo usuario
    homenagem = Number(document.getElementById("homenagem").value)
    // recuperar a qtda de litros de leite
    leite = Number(document.getElementById("leite").value)
    // recuperar a qtde avulsa de kit alimento
    kit = Number(document.getElementById("kit").value)
   // recuperar a qtde avulsa de suplemento
   suplemento = Number(document.getElementById("suplemento").value)
    // calcular a soma
    soma = (mascote) + (homenagem) + (2 * Number(leite))
   // vamos calcular a pontuacao considerando metas de kit e suplemento
    equipe= document.getElementById("equipe").value
   if (equipe == "Laranja"){
      if (kit >= 97) {
         soma = soma + 5000 + ((kit-97) * 30)
      }
      else if (kit >= 78){
         soma = soma + 4000 + ((kit-78) * 30)
      }
      else if (kit >= 49) {
         soma = soma + 2500 + ((kit-49) * 30)
      }
      else if (kit >= 19){
         soma = soma + 1000 + ((kit-19) * 30)
      }
   }
    // retorna o valor ao HTML
    // template string     
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
    
 }