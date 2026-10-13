function renderUI(
    score,
    result,
    news,
    market
){

    const analysis =
        analyzeNews(news);

    const riskScore =
        Math.min(
            analysis.bearishCount * 10,
            100
        );

    document.getElementById(
        "dashboard"
    ).innerHTML = `

    <div class="card">

        <h2>🤖 AI Market Summary</h2>

        <p>

        Market sentiment is currently

        <b>${result.sentiment}</b>

        with confidence

        <b>${result.confidence}%</b>.

        </p>

        <p>

        Bullish Headlines:
        <b>${analysis.bullishCount}</b>

        |

        Bearish Headlines:
        <b>${analysis.bearishCount}</b>

        </p>

    </div>

    <div class="dashboard-grid">

        <div class="card">
            <h3>Market Score</h3>
            <div class="metric">${score}</div>
        </div>

        <div class="card">
            <h3>Risk Score</h3>
            <div class="metric">${riskScore}%</div>
        </div>

        <div class="card">
            <h3>Bias</h3>
            <div class="metric">${result.bias}</div>
        </div>

        <div class="card">
            <h3>Confidence</h3>
            <div class="metric">${result.confidence}%</div>
        </div>

        <div class="card">
            <h3>NIFTY</h3>
            <div class="metric">${market.nifty}</div>
        </div>

        <div class="card">
            <h3>SENSEX</h3>
            <div class="metric">${market.sensex}</div>
        </div>

        <div class="card">
            <h3>BANK NIFTY</h3>
            <div class="metric">${market.bankNifty}</div>
        </div>

        <div class="card">
            <h3>VIX</h3>
            <div class="metric">${market.vix}</div>
        </div>

        <div class="card">
            <h3>USD / INR</h3>
            <div class="metric">${market.usdInr}</div>
        </div>

        <div class="card">
            <h3>GOLD</h3>
            <div class="metric">${market.gold}</div>
        </div>

    </div>

    `;

    document.getElementById(
        "meter"
    ).innerHTML = `

    <div class="card">

        <h2>📊 Market Strength</h2>

        <div style="
        width:100%;
        height:30px;
        background:#ddd;
        border-radius:20px;
        overflow:hidden;
        ">

            <div style="
            width:${score}%;
            height:100%;
            background:
            ${
                score >= 60
                ? 'green'
                : score <= 40
                ? 'red'
                : 'orange'
            };
            ">
            </div>

        </div>

    </div>

    `;

    document.getElementById(
        "reasons"
    ).innerHTML = `

    <div class="dashboard-grid">

        <div class="card">

            <h2>✅ Top Drivers</h2>

            <ul>

            ${
                analysis.bullish
                .map(
                    item =>
                    `<li>${item.title} (+${item.score})</li>`
                )
                .join("")
            }

            </ul>

        </div>

        <div class="card">

            <h2>⚠ Top Risks</h2>

            <ul>

            ${
                analysis.bearish
                .map(
                    item =>
                    `<li>${item.title} (${item.score})</li>`
                )
                .join("")
            }

            </ul>

        </div>

    </div>

    `;

    document.getElementById(
        "news"
    ).innerHTML = `

    <div class="card">

        <h2>📰 News Impact Ranking</h2>

        ${
            [...news]
            .sort(
                (a,b) =>
                Math.abs(b.score) -
                Math.abs(a.score)
            )
            .map(item => `

                <div class="news-item">

                    ${item.title}

                    <b>
                    (${item.score > 0 ? '+' : ''}
                    ${item.score})
                    </b>

                </div>

            `)
            .join("")
        }

    </div>

    `;

}