function renderMarketIntelligence() {

    const html = `

    <div class="card">

        <h2>📢 Market Intelligence</h2>

        <div class="grid">

            <div class="card">

                <h3>Market Sentiment</h3>

                <div class="metric">
                    BULLISH
                </div>

            </div>

            <div class="card">

                <h3>Confidence</h3>

                <div class="metric">
                    82%
                </div>

            </div>

            <div class="card">

                <h3>Expected Move</h3>

                <div class="metric">
                    +120 to +180
                </div>

            </div>

        </div>

        <h3>Top Drivers</h3>

        <ul>

            <li>Positive Global Markets</li>
            <li>Strong Earnings</li>
            <li>Institutional Buying</li>

        </ul>

        <h3>Top Risks</h3>

        <ul>

            <li>Inflation Concerns</li>
            <li>Crude Oil Volatility</li>

        </ul>

    </div>

    `;

    document.getElementById("content").innerHTML =
        html;
}

function renderCrashMonitor() {

    const html = `

    <div class="card">

        <h2>🚨 Crash Monitor</h2>

        <div class="metric">
            18%
        </div>

        <p>

            Current Crash Probability:
            LOW

        </p>

        <h3>Risk Factors</h3>

        <ul>

            <li>No major global weakness</li>
            <li>Moderate inflation concerns</li>
            <li>No unusual panic signals</li>

        </ul>

    </div>

    `;

    document.getElementById("content").innerHTML =
        html;
}

function renderRiskCalculator() {

    const html = `

    <div class="card">

        <h2>📊 Risk Reward Calculator</h2>

        <div class="input-group">

            <label>Capital</label>

            <input id="capital" type="number">

        </div>

        <div class="input-group">

            <label>Risk %</label>

            <input id="riskPercent" type="number" value="2">

        </div>

        <button onclick="calculateRisk()">
            Calculate
        </button>

        <div id="riskResult"></div>

    </div>

    `;

    document.getElementById("content").innerHTML =
        html;
}
