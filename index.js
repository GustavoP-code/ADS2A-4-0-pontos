// Parte: Gerar 10 parágrafos
function gerarParagrafos() {
    const container = document.getElementById('container-paragrafos');
    container.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = `Este é o parágrafo número ${i}. Eu gosto muito de Star Wars, também gosto do universo da Marvel nas hqs e cuto muito vídeo games`;
        
        if (i % 3 === 0) {
            paragrafo.classList.add('destaque');
        }
        
        container.appendChild(paragrafo);
    }
}

// Parte: Tabuada
function mostrarTabuada() {
    const numeroInput = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado-tabuada');
    const numero = parseInt(numeroInput.value);
    
    resultadoDiv.innerHTML = '';
    
    if (numero < 1 || numero > 10 || isNaN(numero)) {
        resultadoDiv.textContent = 'Valor inválido, informe valor entre 1-10';
        return;
    }
    
    const tabela = document.createElement('table');
    for (let i = 1; i <= 10; i++) {
        const linha = document.createElement('tr');
        const celula1 = document.createElement('td');
        const celula2 = document.createElement('td');
        
        celula1.textContent = `${numero} x ${i}`;
        celula2.textContent = numero * i;
        
        linha.appendChild(celula1);
        linha.appendChild(celula2);
        tabela.appendChild(linha);
    }
    
    resultadoDiv.appendChild(tabela);
}

// Parte: Média de notas
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const faltas = parseInt(document.getElementById('faltas').value);
    const resultadoDiv = document.getElementById('resultado-media');
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(faltas)) {
        resultadoDiv.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }
    
    const media = (nota1 + nota2) / 2;
    const percentualPresenca = ((80 - faltas) / 80) * 100;
    
    let textoResultado = `Média: ${media.toFixed(1)} | Presença: ${percentualPresenca.toFixed(1)}% - `;
    
    if (media >= 7.0 && percentualPresenca >= 75) {
        textoResultado += 'Aprovado';
        resultadoDiv.className = 'aprovado';
    } else if (percentualPresenca < 75) {
        textoResultado += 'Reprovado por falta';
        resultadoDiv.className = 'reprovado';
    } else {
        textoResultado += 'Reprovado';
        resultadoDiv.className = 'reprovado';
    }
    
    resultadoDiv.textContent = textoResultado;
}

// Parte: Lista de compras
let listaCompras = [];
let total = 0;

function adicionarProduto() {
    const produtoInput = document.getElementById('produto');
    const precoInput = document.getElementById('preco');
    const listaDiv = document.getElementById('lista-compras');
    const totalDiv = document.getElementById('total-compras');
    
    const produto = produtoInput.value.trim();
    const preco = parseFloat(precoInput.value);
    
    if (produto === '') {
        alert('Nome do produto não pode ser vazio!');
        return;
    }
    
    if (isNaN(preco)) {
        alert('Valor do produto deve ser um número!');
        return;
    }
    
    if (preco <= 0) {
        alert('Valor do produto deve ser maior que zero!');
        return;
    }
    
    listaCompras.push({ produto, preco });
    total += preco;
    
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${produto} - R$ ${preco.toFixed(2)}`;
    listaDiv.appendChild(itemDiv);
    
    totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
    
    // Limpar produtos
    produtoInput.value = '';
    precoInput.value = '';
}

function limparLista() {
    listaCompras = [];
    total = 0;
    document.getElementById('lista-compras').innerHTML = '';
    document.getElementById('total-compras').textContent = 'Total: R$ 0.00';
    document.getElementById('produto').value = '';
    document.getElementById('preco').value = '';
}