var indice = 1

const arrayImagens = ['../imagens/sala.svg','../imagens/banheiro.svg','../imagens/quarto.svg','../imagens/quarto2.svg']

function mudarImagem(){
    if(indice == arrayImagens.length){
        indice = 0
    }
    document.getElementById("imagens").src=arrayImagens[indice]
    indice++   
}