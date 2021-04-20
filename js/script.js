function gerarNum(){
    const meuNum = Math.floor(Math.random() * 20) + 1; //número aleatório de 1 a 20
    return meuNum
}
const maquina = gerarNum()
let maxPontuacao = 0
let tentativa = 20
function tentativas() {
    tentativa --
    return tentativa
}


function jogada() {
    let dica = document.getElementsByClassName('dica')[0]
    let ponto = document.getElementById('ponto')
    let palpite = document.getElementById('number').value
    let melhorPonto = document.getElementsByClassName('melhorPonto')[0]
    if(maquina < palpite){
        dica.innerHTML = 'Um pouco menos'   
        ponto.innerHTML = tentativas()    
    }else if (maquina > palpite) {
        dica.innerHTML = 'Um pouco mais'   
        ponto.innerHTML = tentativas() 
    }else {
        dica.innerHTML = 'Acertou!!'
        if(tentativa > maxPontuacao){
            maxPontuacao = tentativa
        }
        melhorPonto.innerHTML = maxPontuacao       
    }
}