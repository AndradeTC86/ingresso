let pista = document.getElementById('qtd-pista')
let cadeiraSuperior = document.getElementById('qtd-superior')
let cadeiraInferior = document.getElementById('qtd-inferior')
let tipoIngresso = document.getElementById('tipo-ingresso')
let quantidadeInput = document.getElementById('qtd')

function comprar(){    
    let quantidadeValor = parseInt(quantidadeInput.value)
    let ingressoSelecionado = tipoIngresso.options[tipoIngresso.selectedIndex].text
    let quantidadeDisponivel

    if(ingressoSelecionado === 'Cadeira inferior'){
        quantidadeDisponivel = parseInt(cadeiraInferior.textContent)
    }else if(ingressoSelecionado === 'Cadeira superior'){
        quantidadeDisponivel = parseInt(cadeiraSuperior.textContent)
    }else{
        quantidadeDisponivel = parseInt(pista.textContent)
    }

    if(isNaN(quantidadeValor) || quantidadeValor <= 0){
        alert('Por favor, selecione uma quantidade válida para comprar')
        return
    }    

    if(quantidadeValor > quantidadeDisponivel){
        alert('Lamento, mas não é possível comprar uma quantidade maior do que a disponível')
        return
    }

    if(ingressoSelecionado === 'Cadeira inferior'){
        cadeiraInferior.textContent = quantidadeDisponivel - quantidadeValor
    }else if(ingressoSelecionado === 'Cadeira superior'){
        cadeiraSuperior.textContent = quantidadeDisponivel - quantidadeValor
    }else{
        pista.textContent = quantidadeDisponivel - quantidadeValor
    }

    quantidadeInput.value = ''

    alert(`Compra realizada com sucesso! Você comprou ${quantidadeValor} ingresso(s) para ${ingressoSelecionado}`)    
}