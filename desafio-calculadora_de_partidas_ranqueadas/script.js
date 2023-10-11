function saldoRankeado(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = '';

    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    }else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    }else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = 'Prata';
    }else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    }else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    }else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = 'Lendario';
    }else if (saldoVitorias >= 101) {
        nivel = 'Imortal';
    }

    return {nivel, saldoVitorias};
}

let vitorias = parseInt(prompt("Digite a quantidade de vitorias: "));
let derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));

let {nivel, saldoVitorias} = saldoRankeado(vitorias, derrotas);
let res = document.querySelector("#resultado");
res.innerHTML = `O Heroi tem de saldo de ${saldoVitorias} e esta no nivel de "${nivel}!"`;