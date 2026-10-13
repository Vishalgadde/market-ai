function analyzeNews(news) {

    let bullish = [];
    let bearish = [];

    news.forEach(item => {

        if (item.score > 0) {
            bullish.push(item);
        }

        if (item.score < 0) {
            bearish.push(item);
        }

    });

    return {

        bullish,

        bearish,

        bullishCount: bullish.length,

        bearishCount: bearish.length

    };

}
