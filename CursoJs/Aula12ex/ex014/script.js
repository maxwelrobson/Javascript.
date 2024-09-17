function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = 'img/bomdia.jpg'
        document.body.style.backgroundColor = '#FFD77E'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde!
        img.src = 'img/boatarde.jpg'
        document.body.style.backgroundColor = '#FC6200'
    } else {
        //boa noite!
        img.src = 'img/boanoite.jpg'
        document.body.style.backgroundColor = '#172D57'
    }
}

