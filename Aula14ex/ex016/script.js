function contar() {
    let ini = document.getElementById('txti') //Pega o valor que foi escrito no input Incio
    let fim = document.getElementById('txtf') //Pega o vaolr que foi escrito no input Final
    let passo = document.getElementById('txtp') //Pega o valor que fo escrito no input Passo
    let res = document.getElementById('res') //Variável criada para guardar o valor da resposta

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //Se o valor de Inicio for iual a 0 OU valor de Fim for igual a zero OU valor de Passo for igual a 0
        window.alert('[ERRO] Faltam dados!')  //Faça um alerta com o que está escrito dentro dos parenteses
        res.innerHTML = 'Impossível Contar!' //Escreva "Impossível Contar!" no campo(div) da resposta
    } else {
        res.innerHTML = 'Contando: <br>' //Escreve "Contando antes da resposta"
        let i = Number(ini.value)   //Cria novas variáveis convertendo para número os valores que foram "coletados"
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) { //Se o valor de Passo for menor igual a zero
            window.alert('PAsso inválido! Considerando PASSO 1') //Crie um alerta dizer o que está estre parenteses
            p = 1 //Faz o valor de p ser igual a 1
        }

        if (i < f) { //Se o valor de Inicio for menor que o do Final
            for (let c = i; c <= f; c += p) { //Para 
                res.innerHTML += `${c} \u{1F449}`
            }
            
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}