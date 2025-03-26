function atualizarContador() {
    const dataInicio = new Date('2024-03-26T00:00:00');
    const agora = new Date();
    
    let diferenca = agora - dataInicio; // Diferença entre as duas datas

    // Cálculos de anos, meses, dias, horas, minutos e segundos
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    diferenca -= anos * (1000 * 60 * 60 * 24 * 365.25);

    const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30.44));
    diferenca -= meses * (1000 * 60 * 60 * 24 * 30.44);

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    diferenca -= dias * (1000 * 60 * 60 * 24);

    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    diferenca -= horas * (1000 * 60 * 60);

    const minutos = Math.floor(diferenca / (1000 * 60));
    diferenca -= minutos * (1000 * 60);

    const segundos = Math.floor(diferenca / 1000);

    // Preenchendo os elementos HTML com os valores calculados
    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
}

// Chama a função a cada segundo para atualizar o contador
setInterval(atualizarContador, 1000);

// Chamada inicial para evitar o atraso na primeira atualização
atualizarContador();
