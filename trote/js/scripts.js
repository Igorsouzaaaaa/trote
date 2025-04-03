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
    soma = Number(mascote) + Number(homenagem) + (2 *Number (leite))
   // vamos calcular a pontuacao considerando metas de kit e suplemento
    equipe= document.getElementById("equipe").value
   if (equipe == "Laranja"){
      if (kit >= 97 && suplemento >=49) {
         soma = soma + 5000 + ((kit-97) * 30) + ((suplemento - 49) * 15)

      }
      else if (kit >= 78 && suplemento >= 39){
         soma = soma + 4000 + ((kit-78) * 30) + ((suplemento - 39) * 15)

      }
      else if (kit >= 49 && suplemento >= 25) {
        soma = soma + 2500 ((kit-49) * 30) + ((suplemento - 25) * 15)

      }
      else if (kit >= 19 && suplemento >= 10){
         soma = soma + 1000 + ((kit-19) * 30) + ((suplemento - 10) * 15)

      }
   }
    // retorna o valor ao HTML
    // template string     
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
    
 }