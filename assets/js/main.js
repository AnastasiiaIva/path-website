/*
    scores.sort(function(a, b) {
        return b.score - a.score;
    });

    let colors = ["gold", "silver", "#cd7f32"];

    for (let i = 0; i < scores.length; i++) {
        let rank = document.createElement("td");
        let name = document.createElement("td");
        let score = document.createElement("td");
        
        rank.innerText = i + 1; // rank starts from 1
        name.innerText = scores[i].name;
        score.innerText = scores[i].score;

        let scoreRow = document.createElement("tr");
        if (i < 3) { // apply color for top 3 ranks
            scoreRow.style.color = colors[i];
    }

    scoreRow.appendChild(rank);
    scoreRow.appendChild(name);
    scoreRow.appendChild(score);
    leaderboard.appendChild(scoreRow);
}
*/

let fecha = new Date(2026, 0, 1)
let msFecha = fecha.getTime();
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let cuentaAtras = document.querySelector("#cuenta-atras");

let intervalo = setInterval(() => {
    let hoy = new Date().getTime();

    let distancia = msFecha - hoy;
    let msPorDia = 1000 * 60 * 60 * 24;
    let msPorHora = 1000 * 60 *60;
    let msPorMinuto = 1000 *60;
    let msPorSegundo = 1000;

    let dias = Math.floor(distancia / msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    parrafoHoras.innerText =  horas < 10 ? "0" + horas: horas;
    parrafoMinutos.innerText = minutos < 10 ? "0" + minutos: minutos;
    parrafoSegundos.innerText = segundos < 10 ? "0" + segundos: segundos;

    if (distancia < 0) {
        clearInterval(intervalo);
        cuentaAtras.innerHTML = "<p class='grande'¡Dia completado!</p>"
    }
}, 1000)