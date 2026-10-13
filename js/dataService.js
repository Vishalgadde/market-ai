const API_KEY = "RQDODN433YV2OA79";

async function getMarketData() {

    const marketData = {
        nifty: "Loading...",
        sensex: "Loading...",
        bankNifty: "Loading...",
        vix: "Loading...",
        usdInr: "Loading...",
        crude: "Loading...",
        gold: "Loading..."
    };

    try {

        const usdResponse =
            await fetch(
                `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=INR&apikey=${API_KEY}`
            );

        const usdData =
            await usdResponse.json();

        marketData.usdInr =
            usdData["Realtime Currency Exchange Rate"]?.["5. Exchange Rate"] || "N/A";

    }
    catch (error) {
        console.log("USDINR Error", error);
    }

    try {

        const goldResponse =
            await fetch(
                `https://www.alphavantage.co/query?function=WTI&interval=monthly&apikey=${API_KEY}`
            );

        const goldData =
            await goldResponse.json();

        marketData.crude = "LIVE";

        console.log(goldData);

    }
    catch (error) {
        console.log(error);
    }

    return marketData;
}