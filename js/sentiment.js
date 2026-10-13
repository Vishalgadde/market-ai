const bullishKeywords = [
    "buying",
    "earnings",
    "growth",
    "higher",
    "strong",
    "profit",
    "positive",
    "decline"
];

const bearishKeywords = [
    "inflation",
    "war",
    "crash",
    "recession",
    "loss",
    "selling",
    "negative"
];

function scoreNews(title) {

    title = title.toLowerCase();

    let score = 0;

    bullishKeywords.forEach(word => {
        if (title.includes(word)) {
            score += 10;
        }
    });

    bearishKeywords.forEach(word => {
        if (title.includes(word)) {
            score -= 10;
        }
    });

    return score;
}
