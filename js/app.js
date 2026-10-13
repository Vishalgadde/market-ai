function loadDashboard(){

    const news = getMarketNews();

    const score =
        calculateMarketScore(news);

    const view =
        getMarketDirection(score);

    renderDashboard(
        news,
        score,
        view
    );

}

loadDashboard();
