const sampleNews = [

{
title:"FII buying increases in Indian equities",
sentiment:"bullish"
},

{
title:"Reliance posts strong earnings",
sentiment:"bullish"
},

{
title:"Crude oil prices decline",
sentiment:"bullish"
},

{
title:"Inflation concerns remain",
sentiment:"bearish"
}

];

function loadDashboard(){

let score = 0;
let html = "";

sampleNews.forEach(news=>{

if(news.sentiment==="bullish"){
score += 5;
}
else{
score -= 5;
}

html += `
<div class="card">
<h3>${news.title}</h3>
<p>${news.sentiment.toUpperCase()}</p>
</div>
`;

});

let sentiment = "NEUTRAL";

if(score > 5){
sentiment = "🟢 BULLISH";
}

if(score < -5){
sentiment = "🔴 BEARISH";
}

document.getElementById("sentiment").innerHTML = `
<div class="card">
<h2>${sentiment}</h2>
<p>Score: ${score}</p>
</div>
`;

document.getElementById("news").innerHTML = html;

}

document
.getElementById("refreshBtn")
.addEventListener("click",loadDashboard);

loadDashboard();

