function generateReport(result, score, news){

    const analysis =
        analyzeNews(news);

    return `

Market AI Report

Market Score : ${score}

Sentiment : ${result.sentiment}

Bias : ${result.bias}

Confidence : ${result.confidence}%

Bullish News : ${analysis.bullishCount}

Bearish News : ${analysis.bearishCount}

`;

}
