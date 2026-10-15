function showIntelligence() {

    renderMarketIntelligence();

}

function showCrashMonitor() {

    renderCrashMonitor();

}

function showRiskCalculator() {

    renderRiskCalculator();

}

function calculateRisk() {

    const capital =
        Number(
            document.getElementById("capital").value
        );

    const riskPercent =
        Number(
            document.getElementById("riskPercent").value
        );

    const riskAmount =
        capital * (riskPercent / 100);

    const target =
        riskAmount * 3;

    document.getElementById(
        "riskResult"
    ).innerHTML = `

    <div class="card">

        <h3>Result</h3>

        <p>
        Risk Amount:
        ₹${riskAmount.toFixed(2)}
        </p>

        <p>
        Suggested Target:
        ₹${target.toFixed(2)}
        </p>

        <p>
        Risk Reward:
        1 : 3
        </p>

    </div>

    `;
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        showIntelligence();

    }
);