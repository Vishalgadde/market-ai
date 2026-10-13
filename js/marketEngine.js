function calculateMarketScore(news){

    let score = 50;

    news.forEach(item => {
        score += item.score;
    });

    score = Math.min(score,100);
    score = Math.max(score,0);

    return score;
}

function getMarketDirection(score){

    let sentiment = "🟡 NEUTRAL";
    let bias = "WAIT";

    if(score >= 70){
        sentiment = "🟢 BULLISH";
        bias = "LONG";
    }

    if(score <= 30){
        sentiment = "🔴 BEARISH";
        bias = "SHORT";
    }

    return {

        sentiment,
        bias,
        confidence: score,
        bullishProbability: score,
        bearishProbability: 100-score

    };
}
