function getNiftyOutlook(score) {

    let direction = "SIDEWAYS";
    let expectedMove = "-50 to +50";
    let confidence = 55;

    if (score >= 80) {

        direction = "STRONG BULLISH";
        expectedMove = "+150 to +300";
        confidence = 90;

    }
    else if (score >= 70) {

        direction = "BULLISH";
        expectedMove = "+75 to +150";
        confidence = 80;

    }
    else if (score <= 20) {

        direction = "STRONG BEARISH";
        expectedMove = "-150 to -300";
        confidence = 90;

    }
    else if (score <= 30) {

        direction = "BEARISH";
        expectedMove = "-75 to -150";
        confidence = 80;

    }

    return {
        direction,
        expectedMove,
        confidence
    };

}