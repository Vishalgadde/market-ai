function calculateMarketScore(news) {

    let score = 50;

    news.forEach(item => {

        score += item.score;

    });

    if (score > 100) score = 100;
    if (score < 0) score = 0;

    return score;
}

function getMarketDirection(score) {

    let bullishProbability = score;
    let bearishProbability = 100 - score;

    let sentiment = "🟡 NEUTRAL";
    let bias = "WAIT";

    if (score >= 70) {
        sentiment = "🟢 BULLISH";
        bias = "LONG";
    }

    if (score <= 30) {
        sentiment = "🔴 BEARISH";
        bias = "SHORT";
    }

    return {

        sentiment,
        bias,
        bullishProbability,
        bearishProbability,
        confidence: Math.max(
            bullishProbability,
            bearishProbability
        )

    };

}
