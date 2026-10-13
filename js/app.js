async function loadDashboard()
{

    let news = await fetchNews();

    news = news.map(item => {

        return {

            ...item,

            score: scoreNews(item.title)

        };

    });

    const score =
        calculateMarketScore(news);

    const result =
        getMarketDirection(score);

    renderUI(
        score,
        result,
        news
    );

    document.getElementById("report").innerHTML = `

    <div class="card">

        <h2>Daily Report</h2>

        <pre>
${generateReport(result,score)}
        </pre>

    </div>

    `;
}

document
.getElementById("refreshBtn")
.addEventListener("click",
loadDashboard);

loadDashboard();
