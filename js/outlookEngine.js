function getMarketOutlook(score) {

    let direction = "SIDEWAYS";
    let expectedMove = "-50 to +50";
    let recommendation = "WAIT";

    if (score >= 80) {

        direction = "STRONG BULLISH";
        expectedMove = "+150 to +300";
        recommendation = "LONG";

    }
    else if (score >= 65) {

        direction = "BULLISH";
        expectedMove = "+75 to +150";
        recommendation = "LONG";

    }
    else if (score <= 30) {

        direction = "BEARISH";
        expectedMove = "-75 to -150";
        recommendation = "SHORT";

    }

    return {

        direction,
        expectedMove,
        recommendation

    };

}