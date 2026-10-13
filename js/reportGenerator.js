function generateReport(result, score){

    return `
Market Score : ${score}

Sentiment : ${result.sentiment}

Bias : ${result.bias}

Confidence : ${result.confidence}%
`;
}
