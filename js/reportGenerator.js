function generateReport(
    result,
    score,
    news
){

    const analysis =
        analyzeNews(news);

    const outlook =
        getMarketOutlook(score);

    return `

MARKET AI V8 REPORT

===================================

Market Score:
${score}

Market Direction:
${outlook.direction}

Expected Move:
${outlook.expectedMove}

Recommendation:
${outlook.recommendation}

Confidence:
${result.confidence}%

Bullish News:
${analysis.bullishCount}

Bearish News:
${analysis.bearishCount}

Neutral News:
${analysis.neutralCount}

===================================

TOP DRIVERS

${analysis.bullish
.map(x => "- " + x.title)
.join("\n")}

===================================

TOP RISKS

${analysis.bearish
.map(x => "- " + x.title)
.join("\n")}

===================================

Generated:
${new Date().toLocaleString()}

`;
}