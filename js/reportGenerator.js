function generateReport(
    result,
    score,
    news
) {

    const analysis =
        analyzeNews(news);

    let outlook =
        "SIDEWAYS";

    if(score >= 80){
        outlook =
        "STRONG BULLISH";
    }
    else if(score >= 65){
        outlook =
        "BULLISH";
    }
    else if(score <= 30){
        outlook =
        "BEARISH";
    }

    return `

MARKET AI DAILY REPORT

===================================

Market Score:
${score}

Sentiment:
${result.sentiment}

Bias:
${result.bias}

Confidence:
${result.confidence}%

Bullish News:
${analysis.bullishCount}

Bearish News:
${analysis.bearishCount}

Neutral News:
${analysis.neutralCount}

Market Outlook:
${outlook}

===================================

Top Positive Drivers

${analysis.bullish
.map(x => "- " + x.title)
.join("\n")}

===================================

Top Risks

${analysis.bearish
.map(x => "- " + x.title)
.join("\n")}

===================================

Generated:
${new Date().toLocaleString()}

`;

}