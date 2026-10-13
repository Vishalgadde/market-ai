function renderUI(score,result,news){

    const market = getMarketData();

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

        <div class="card">
            <h3>NIFTY</h3>
            <div class="metric">${market.nifty}</div>
        </div>
        <div class="card">
    <h3>BANK NIFTY</h3>
    <div class="metric">${market.bankNifty}</div>
</div>

<div class="card">
    <h3>VIX</h3>
    <div class="metric">${market.vix}</div>
</div>

<div class="card">
    <h3>USD/INR</h3>
    <div class="metric">${market.usdInr}</div>
</div>

<div class="card">
    <h3>GOLD</h3>
    <div class="metric">${market.gold}</div>
</div>
        <div class="card">
            <h3>SENSEX</h3>
            <div class="metric">${market.sensex}</div>
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

    </div>
    `;

    document.getElementById("news").innerHTML = `

    <div class="card">

        <h2>News Analysis</h2>

        ${
            news.map(item =>
            `<p>${item.title} (${item.score})</p>`).join("")
        }

    </div>
    `;
    document.getElementById("meter").innerHTML = `

<div class="card">

<h2>Market Strength</h2>

<div style="
width:100%;
height:30px;
background:#ddd;
border-radius:20px;
overflow:hidden;
">

<div style="
width:${score}%;
height:100%;
background:${score>60?'green':
score<40?'red':'orange'};
">
</div>

</div>

</div>

`;
}
function renderSummary(news){

    const analysis =
        analyzeNews(news);

    let message = "";

    if(
        analysis.bullishCount >
        analysis.bearishCount
    ){

        message =
        "Market sentiment remains positive due to stronger bullish news flow.";

    }
    else if(
        analysis.bearishCount >
        analysis.bullishCount
    ){

        message =
        "Market sentiment remains weak due to higher bearish news activity.";

    }
    else{

        message =
        "Market remains balanced with mixed market drivers.";

    }

    document.getElementById(
        "summary"
    ).innerHTML = `

    <div class="card">

        <h2>🤖 AI Summary</h2>

        <p>${message}</p>

    </div>

    `;

}
