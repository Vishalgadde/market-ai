console.log("MARKET AI V7");

async function loadDashboard() {

    let news =
        await fetchMarketNews();

    news = news.map(item => {

        return {

            ...item,

            score:
            scoreNews(
                item.title
            )

        };

    });

    const score =
        calculateMarketScore(
            news
        );

    const result =
        getMarketDirection(
            score
        );

    const marketData =
        await getMarketData();

    renderUI(
        score,
        result,
        news,
        marketData
    );

    document.getElementById(
        "report"
    ).innerHTML = `

    <div class="card">

        <h2>
        📋 Daily Market Report
        </h2>

        <pre>

${generateReport(
    result,
    score,
    news
)}

        </pre>

    </div>

    `;

}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .getElementById(
                "refreshBtn"
            )
            .addEventListener(
                "click",
                loadDashboard
            );

        loadDashboard();

        setInterval(
            loadDashboard,
            300000
        );

    }
);