function calculateMarketScore(news){

    let score = 50;

    news.forEach(item => {

        score += item.score;

    });

    if(score > 100){
        score = 100;
    }

    if(score < 0){
        score = 0;
    }

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
