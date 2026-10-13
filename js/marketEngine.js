function calculateMarketScore(newsItems){

    let score = 50;

    newsItems.forEach(item => {

        score += item.score;

    });

    score = Math.max(0, score);
    score = Math.min(100, score);

    return score;
}

function getMarketDirection(score){

    if(score >= 70){

        return {
            sentiment:"🟢 BULLISH",
            bias:"LONG",
            confidence:score
        };

    }

    if(score <= 30){

        return {
            sentiment:"🔴 BEARISH",
            bias:"SHORT",
            confidence:100-score
        };

    }

    return {

        sentiment:"🟡 NEUTRAL",
        bias:"WAIT",
        confidence:55

    };

}
