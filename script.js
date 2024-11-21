function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.Value) > ano){
        window.alert('[Erro] Verifique os dados e tente de novamente!!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade= ano - Number(fano.value)
        var gênero= ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto bebe menino.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src' , 'fotoadolescentehomem.jpg')
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src' , 'fotoadultojovem.jpg')
            }else {
                //Idoso
                img.setAttribute('src' , 'foto idoso.jpg')
            }
        }
        else if (fsex[1].checked){
                gênero = 'Mulher'
                if( idade >=0 && idade <10){
                    //Criança
                    img.setAttribute('src' , 'foto bebe menina.jpg')
                }else if (idade < 21){
                    //Jovem
                    img.setAttribute('src' , 'fotoadolescentemulher.jpg')
                }else if (idade < 50){
                    //Adulta
                    img.setAttribute('src' , 'fotoadultajovem.jpg')
                }else{
                    //Idosa
                    img.setAttribute('src' , 'fotoidosa.jpg')
                }
            }
            res.style.textAlign = 'Center'
            res.innerHTML = `Detectamos ${gênero} com ${idade}anos.`
            res.appendChild (img)
    }
}