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
