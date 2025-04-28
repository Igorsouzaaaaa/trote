function calcular() {
    let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue;
    let arroz5kg, arroz1kg, feijao2kg, feijao1kg, macarrao, oleo;

    mascote = Number(document.getElementById("mascote").value);
    homenagem = Number(document.getElementById("homenagem").value);
    leite = Number(document.getElementById("leite").value);
    kit = Number(document.getElementById("kit").value);
    suplemento = Number(document.getElementById("suplemento").value);
    sangue = Number(document.getElementById("sangue").value);
    equipe = document.getElementById("equipe").value;

    arroz5kg = Number(document.getElementById("arroz5kg").value) || 0;
    arroz1kg = Number(document.getElementById("arroz1kg").value) || 0;
    feijao2kg = Number(document.getElementById("feijao2kg").value) || 0;
    feijao1kg = Number(document.getElementById("feijao1kg").value) || 0;
    macarrao = Number(document.getElementById("macarrao").value) || 0;
    oleo = Number(document.getElementById("oleo").value) || 0;

    soma = mascote + homenagem + (2 * leite);

    soma += (arroz5kg * 5) + (arroz1kg * 1) + (feijao2kg * 2) + (feijao1kg * 1) + (macarrao * 0.5) + (oleo * 1);

    // Lógica para as metas de kits e suplementos
    if (equipe == "Laranja") {
        // Verifica kit e suplemento
        if (kit >= 97 && suplemento >= 49) {
            soma = soma + 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15);
        } else if (kit >= 78 && suplemento >= 39) {
            soma = soma + 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15);
        } else if (kit >= 49 && suplemento >= 25) {
            soma = soma + 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15);
        } else if (kit >= 19 && suplemento >= 10) {
            soma = soma + 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15);
        }

        // Verifica sangue
        if (sangue >= 49) {
            soma = soma + 2500 + ((sangue - 49) * 20);
        } else {
            soma = soma + (sangue * 20);
        }
    }

    else if (equipe == "Preta") {
        // Verifica kit e suplemento
        if (kit >= 103 && suplemento >= 52) {
            soma = soma + 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15);
        } else if (kit >= 82 && suplemento >= 42) {
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15);
        } else if (kit >= 52 && suplemento >= 26) {
            soma = soma + 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 21 && suplemento >= 10) {
            soma = soma + 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15);
        }

        // Verifica sangue
        if (sangue >= 52) {
            soma = soma + 2500 + ((sangue - 52) * 20);
        } else {
            soma = soma + (sangue * 20);
        }
    }

    else if (equipe == "Roxa") {
        // Verifica kit e suplemento
        if (kit >= 102 && suplemento >= 51) {
            soma = soma + 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15);
        } else if (kit >= 82 && suplemento >= 41) {
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15);
        } else if (kit >= 51 && suplemento >= 26) {
            soma = soma + 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 20 && suplemento >= 10) {
            soma = soma + 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15);
        }

        // Verifica sangue
        if (sangue >= 51) {
            soma = soma + 2500 + ((sangue - 51) * 20);
        } else {
            soma = soma + (sangue * 20);
        }
    }

    else if (equipe == "Verde") {
        // Verifica kit e suplemento
        if (kit >= 88 && suplemento >= 44) {
            soma = soma + 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15);
        } else if (kit >= 70 && suplemento >= 35) {
            soma = soma + 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15);
        } else if (kit >= 44 && suplemento >= 22) {
            soma = soma + 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15);
        } else if (kit >= 18 && suplemento >= 9) {
            soma = soma + 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15);
        }

        // Verifica sangue
        if (sangue >= 44) {
            soma = soma + 2500 + ((sangue - 44) * 20);
        } else {
            soma = soma + (sangue * 20);
        }
    }

    else if (equipe == "Vermelha") {
        // Verifica kit e suplemento
        if (kit >= 93 && suplemento >= 47) {
            soma = soma + 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15);
        } else if (kit >= 74 && suplemento >= 38) {
            soma = soma + 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15);
        } else if (kit >= 47 && suplemento >= 24) {
            soma = soma + 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15);
        } else if (kit >= 19 && suplemento >= 9) {
            soma = soma + 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15);
        }

        // Verifica sangue
        if (sangue >= 47) {
            soma = soma + 2500 + ((sangue - 47) * 20);
        } else {
            soma = soma + (sangue * 20);
        }
    }

    document.getElementById("soma").innerHTML = A soma é ${soma};
}