function calcular(){
   // vamos criar 2 variáveis 
   // JS as variáveis não possuem tipo
   let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue
   // recupera o valor do mascote digitado pelo usuário
   mascote = Number(document.getElementById("mascote").value)
   // recupera o valor da homenagem digitado pelo usuário
   homenagem = Number(document.getElementById("homenagem").value)
   // recupera a qtde de litros de leite
   leite = Number(document.getElementById("leite").value)
   // recupera a qtde avulsa de kits de alimentação
   kit = Number(document.getElementById("kit").value)
   // recupera a qtde avulsa de suplemento 
   suplemento = Number(document.getElementById("suplemento").value)
   // calcular a soma parcial
   soma = mascote + homenagem + (2 * (leite)) 
   // vamos calcular a pontuacao considerando metas de kit e supl
   equipe = document.getElementById("equipe").value
   //doaçao de sangue
   sangue = Number(document.getElementById("sangue").value) 
   if (equipe == "Laranja"){
      // verifica quantidade de kit
       if (kit >= 97 && suplemento >= 49) {
           soma = soma + 5000 + ((kit-97) * 30) + ((suplemento - 49) * 15)
       }
       else if (kit >= 78 && suplemento >= 39){
           soma = soma + 4000 + ((kit-78) * 30) + ((suplemento - 39) * 15)
       }
       else if (kit >= 49 && suplemento >= 25){
           soma = soma + 2500 + ((kit-49) * 30) + ((suplemento - 25) * 15)
       }
       else if (kit >= 19 && suplemento >= 10){
           soma = soma + 1000 + ((kit-19) * 30) + ((suplemento - 10)* 15)
       }
      // verifica sangue
         if (sangue >= 49){
             soma = soma + (sangue - 49) * 20
         }
   }
   else if (equipe == "Preta"){
    // verifica quantidade de kit
    if (kit >= 103 && suplemento >= 52){
        soma = soma + 5000 + ((kit-103) * 30) + ((suplemento - 52) * 15)
    
    }
    else if (kit >= 0)
    // verifica sangue
    if(sangue >= 52)
    soma = soma + (sangue - 52) * 20
   }
   else if (equipe == "Roxa"){
   // verifica quantidade de kit

    // verifica sangue
    if (sangue >= 51)
    soma = soma + (sangue - 51) * 20
   }
   else if (equipe == "Verde"){
   // verifica quantidade de kit

    // verifica sangue
    if (sangue >= 44)
    soma = soma + (sangue - 44) * 20
   }
   // equipe vermelha 
   else if (equipe == "Vermelho"){
   // verifica quantidade de kit

    // verifica sangue
    if (sangue >= 47)
    soma = soma + (sangue - 47) * 20
   }
   // retorna o valor ao HTML
   // template string
   document.getElementById("soma").innerHTML = `A soma é ${soma}`
}
