function gerarNum(){
    const meuNum = Math.floor(Math.random() * 20) + 1; //número aleatório de 1 a 20
    return meuNum
}
let maquina = gerarNum()
let maxPontuacao = 0
let tentativa = 20


function tentativas() {
    tentativa --
    return tentativa
}

let corpo = document.getElementsByTagName('body')[0]
let inputFundo = document.getElementById('number')
let linha = document.getElementsByTagName('hr')[0]


function layoutVitoria() {
    corpo.style.background = '#10ba17'
    corpo.style.color = 'black'
    inputFundo.style.border = 'Solid'
    linha.style.color = 'black'
    inputFundo.style.background = '#10ba17'
}


function layoutNormal() {
    let ponto = document.getElementById('ponto')
    let dica = document.getElementsByClassName('dica')[0]
    corpo.style.background = '#161515'
    corpo.style.color = 'white'
    inputFundo.style.border = 'Solid white'
    linha.style.color = 'white'
    inputFundo.style.background = '#161515'
    dica.innerHTML = 'chutando...'
}


function layoutDerrota() {
    let ponto = document.getElementById('ponto')
    let dica = document.getElementsByClassName('dica')[0]
    corpo.style.background = '#c31807'
    corpo.style.color = 'black'
    inputFundo.style.border = 'Solid'
    linha.style.color = 'black'
    inputFundo.style.background = '#c31807'
    dica.innerHTML = 'Tentativas esgotadas!'
    ponto.innerHTML = 0
}


function jogada() {
    let dica = document.getElementsByClassName('dica')[0]
    let ponto = document.getElementById('ponto')
    let palpite = document.getElementById('number').value
    let melhorPonto = document.getElementsByClassName('melhorPonto')[0]
    melhorPonto.innerHTML = maxPontuacao 
    if (palpite.length == 0) {
        window.alert('Por Favor, digite um número!')
    }else{
        if(tentativa > 1) {
            if(maquina < palpite){
                dica.innerHTML = 'Um pouco menos'   
                ponto.innerHTML = tentativas()    
            }else if (maquina > palpite) {
                dica.innerHTML = 'Um pouco mais'   
                ponto.innerHTML = tentativas() 
            }else {
                dica.innerHTML = 'Na mosca!!'
                if(tentativa > maxPontuacao){
                    maxPontuacao = tentativa
                }
                melhorPonto.innerHTML = maxPontuacao  
                layoutVitoria()     
            }
        }else{
            layoutDerrota()
        }
    }
}


function repetir() {
    let ponto = document.getElementById('ponto')
    ponto.innerHTML =  20
    maquina = gerarNum()
    tentativa = 20
    layoutNormal()
    return maquina
}