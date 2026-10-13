function analyzeNews(news) {

    const bullish = [];
    const bearish = [];
    const neutral = [];

    news.forEach(item => {

        if (item.score > 0) {
            bullish.push(item);
        }
        else if (item.score < 0) {
            bearish.push(item);
        }
        else {
            neutral.push(item);
        }

    });

    bullish.sort((a, b) => b.score - a.score);

    bearish.sort((a, b) => a.score - b.score);

    return {

        bullish,
        bearish,
        neutral,

        bullishCount: bullish.length,

        bearishCount: bearish.length,

        neutralCount: neutral.length

    };

}