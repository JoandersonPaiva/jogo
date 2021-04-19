var meuNum = Math.floor(Math.random() * 20) + 1; //número aleatório de 1 a 20

function jogada() {   
    
    var jogador = document.getElementById('number').value
    var caixa = document.getElementById('number')
    var dica = document.getElementsByClassName('dica')[0]
    var corpo = document.getElementsByTagName('body')[0]
    var ponto = document.getElementsByClassName('pontuacao')[0]   
    var valor = document.getElementsByClassName('pontuacao')[0].value
    var pontuacao = parseInt(ponto)
    if(meuNum > jogador){
        dica.innerHTML = 'Um pouco mais ...'

        ponto.innerHTML = `${pontuacao}` 
    }
    else if(meuNum < jogador) {
        dica.innerHTML = 'Um pouco menos...'
    }
    else {
        dica.innerHTML = 'Na mosca!!!'
        corpo.style.background = 'green'
        caixa.style.background = 'green'
        caixa.style.borderColor = 'black'
        corpo.style.color = 'black'
    }
    
}