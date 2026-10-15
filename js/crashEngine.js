function generateCrashAnalysis() {

    const crashProbability = 18;

    let level = "LOW";

    if (crashProbability >= 60) {

        level = "HIGH";

    }
    else if (crashProbability >= 30) {

        level = "MEDIUM";

    }

    return {

        probability: crashProbability,

        level: level,

        reasons: [

            "No major global weakness",

            "No extreme selling pressure",

            "Stable economic outlook"

        ]

    };

}