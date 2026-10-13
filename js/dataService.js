const API_KEY = "YOUR_ALPHA_VANTAGE_KEY";

async function getMarketData() {

    const marketData = {

        nifty: 24850,
        sensex: 81300,
        bankNifty: 56200,
        vix: 13.5,
        usdInr: "Loading...",
        gold: 98750,
        crude: 72.4

    };

    try {

        const response =
            await fetch(
                `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=INR&apikey=${API_KEY}`
            );

        const data =
            await response.json();

        const rate =
            data?.["Realtime Currency Exchange Rate"]?.["5. Exchange Rate"];

        if(rate){

            marketData.usdInr =
                Number(rate).toFixed(2);

        }

    }
    catch(error){

        console.error(
            "USDINR fetch failed",
            error
        );

    }

    return marketData;

}
