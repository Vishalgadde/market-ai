function loadDashboard(){

    const news = getMarketNews();

    const score =
        calculateMarketScore(news);

    const result =
        getMarketDirection(score);

    renderUI(
        score,
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
``
