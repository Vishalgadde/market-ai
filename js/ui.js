function renderUI(score,result,news){

    document.getElementById("dashboard").innerHTML = `

    <div class="dashboard-grid">

        <div class="card">
            <h3>Market Score</h3>
            <div class="metric">${score}</div>
        </div>

        <div class="card">
            <h3>Sentiment</h3>
            <div class="metric">${result.sentiment}</div>
        </div>

        <div class="card">
            <h3>Bias</h3>
            <div class="metric">${result.bias}</div>
        </div>

        <div class="card">
            <h3>Confidence</h3>
            <div class="metric">${result.confidence}%</div>
        </div>

    </div>
    `;

    document.getElementById("reasons").innerHTML = `

    <div class="card">

        <h2>Why Bullish?</h2>

        <ul>
            ${
                news
                .filter(x => x.score > 0)
                .map(x => `<li>${x.title}</li>`)
                .join("")
            }
        </ul>

        <hr>

        <h2>Why Bearish?</h2>

        <ul>
            ${
                news
                .filter(x => x.score < 0)
                .map(x => `<li>${x.title}</li>`)
                .join("")
            }
        </ul>

    </div>
    `;

    document.getElementById("news").innerHTML = `

    <div class="card">

        <h2>Market News</h2>

        ${
            news
            .map(item => `<p>${item.title}</p>`)
            .join("")
        }

    </div>
    `;
}
