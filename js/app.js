function loadDashboard() {

    let news = getMarketNews();

    news = news.map(item => {

        return {
            ...item,
            score: scoreNews(item.title)
        };

    });

    const marketScore =
        calculateMarketScore(news);

    const result =
        getMarketDirection(marketScore);

    renderUI(
        marketScore,
        result,
        news
    );
}

document
.getElementById("refreshBtn")
.addEventListener(
    "click",
    loadDashboard
);

loadDashboard();
