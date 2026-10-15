const API_KEY = "RQDODN433YV2OA79";

async function getMarketData() {

    const marketData = {

        nifty: "Loading...",
        sensex: "Loading...",
        bankNifty: "Loading...",
        vix: "Loading...",

        usdInr: "Loading...",
        gold: "Coming Soon",
        crude: "Coming Soon"

    };

    try {

        const usdResponse = await fetch(
            `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=INR&apikey=${API_KEY}`
        );

        const usdData = await usdResponse.json();

        console.log("USD RESPONSE", usdData);

        const usdRate =
            usdData?.["Realtime Currency Exchange Rate"]?.["5. Exchange Rate"];

        if (usdRate) {

            marketData.usdInr =
                Number(usdRate).toFixed(2);

        }

    }
    catch(error){

        console.error(error);

    }

    try {

        const niftyResponse = await fetch(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NIFTYBEES.BSE&apikey=${API_KEY}`
        );

        const niftyData =
            await niftyResponse.json();

        console.log("NIFTY RESPONSE", niftyData);

        const niftyPrice =
            niftyData?.["Global Quote"]?.["05. price"];

        if(niftyPrice){

            marketData.nifty =
                Number(niftyPrice).toFixed(2);

        }

    }
    catch(error){

        console.error(error);

    }

    try {

        const bankResponse = await fetch(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=BANKBEES.BSE&apikey=${API_KEY}`
        );

        const bankData =
            await bankResponse.json();

        console.log("BANK RESPONSE", bankData);

        const bankPrice =
            bankData?.["Global Quote"]?.["05. price"];

        if(bankPrice){

            marketData.bankNifty =
                Number(bankPrice).toFixed(2);

        }

    }
    catch(error){

        console.error(error);

    }

    return marketData;
}