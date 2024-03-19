

function calcularIMC() {
    const informacaoPeso = parseFloat(document.getElementById('peso').value);
    const informacaoAltura = parseFloat(document.getElementById('altura').value);
    let resultado = informacaoPeso / (informacaoAltura * informacaoAltura);

    // Verificar se resultado é um número válido
    if (!isNaN(resultado)) { // isNaN retorna true se o resultado não é um número válido
        mostrarResultado(resultado);
    }
}
function mostrarResultado(resultado) {
    const novoElemento = document.createElement('div');
    novoElemento.textContent = 'Seu IMC é: ' + resultado.toFixed(2); // Limitando o resultado a 2 casas decimais
    novoElemento.classList.add('resultado');
    const calculadoraConteiner = document.querySelector('.resultado-IMC');

    // Comparar com intervalos
    switch (true) {
        case (resultado < 18.5):
            novoElemento.textContent += ' - Abaixo do peso';
            break;
        case (resultado >= 18.5 && resultado <= 24.9):
            novoElemento.textContent += ' - Normal';
            break;
        case (resultado > 24.9 && resultado <= 29.9):
            novoElemento.textContent += ' - Acima do peso';
            break;
        case (resultado > 30 && resultado <= 34.9):
            novoElemento.textContent += ' - Obesidade grau 1';
            break;
        case (resultado > 34.9 && resultado <= 40):
        novoElemento.textContent += ' - Obesidade grau 2';
        break;  
        case (resultado > 40):
            novoElemento.textContent += ' - Obesidade grau 3';
            break;  
        default:
            novoElemento.textContent += ' - Erro';
    }   
    // Adicionar elemento ao contêiner
    calculadoraConteiner.appendChild(novoElemento);

}



