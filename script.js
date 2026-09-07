```javascript
/* =========================================
   MINEGUARD-X DASHBOARD
   JavaScript + Mock Vehicle Data
========================================= */


/* ---------- MOCK VEHICLE DATA ---------- */

const vehicleData = {
    vehicle1: {
        id: "V001",
        status: "MOVING",
        distance: 8.5,
        risk: "SAFE"
    },

    vehicle2: {
        id: "V002",
        status: "MOVING",
        distance: 5.2,
        risk: "WARNING"
    }
};


/* ---------- UPDATE VEHICLE 1 ---------- */

function updateVehicle1() {

    document.getElementById("vehicle1-status").textContent =
        vehicleData.vehicle1.status;

    document.getElementById("vehicle1-distance").textContent =
        vehicleData.vehicle1.distance + " m";

    document.getElementById("vehicle1-risk").textContent =
        vehicleData.vehicle1.risk;
}


/* ---------- UPDATE VEHICLE 2 ---------- */

function updateVehicle2() {

    document.getElementById("vehicle2-status").textContent =
        vehicleData.vehicle2.status;

    document.getElementById("vehicle2-distance").textContent =
        vehicleData.vehicle2.distance + " m";

    document.getElementById("vehicle2-risk").textContent =
        vehicleData.vehicle2.risk;
}


/* ---------- UPDATE RISK COLORS ---------- */

function updateRiskColor(elementId, riskLevel) {

    const element = document.getElementById(elementId);

    // Remove previous risk classes
    element.classList.remove(
        "risk-safe",
        "risk-warning",
        "risk-caution",
        "risk-critical"
    );


    // Add the correct class
    if (riskLevel === "SAFE") {

        element.classList.add("risk-safe");

    } else if (riskLevel === "CAUTION") {

        element.classList.add("risk-caution");

    } else if (riskLevel === "WARNING") {

        element.classList.add("risk-warning");

    } else if (riskLevel === "CRITICAL") {

        element.classList.add("risk-critical");
    }
}


/* ---------- UPDATE COLLISION WARNING ---------- */

function updateCollisionWarning() {

    const warningBanner =
        document.getElementById("collision-warning");

    const warningTitle =
        document.getElementById("warning-title");

    const warningMessage =
        document.getElementById("warning-message");


    const risk1 = vehicleData.vehicle1.risk;
    const risk2 = vehicleData.vehicle2.risk;


    /* Find the highest risk */

    const riskPriority = {
        SAFE: 1,
        CAUTION: 2,
        WARNING: 3,
        CRITICAL: 4
    };


    let highestRisk = risk1;

    if (riskPriority[risk2] > riskPriority[risk1]) {
        highestRisk = risk2;
    }


    /* Remove previous banner classes */

    warningBanner.classList.remove(
        "safe",
        "warning",
        "critical"
    );


    /* Decide what the dashboard should display */

    if (highestRisk === "SAFE") {

        warningBanner.classList.add("safe");

        warningTitle.textContent =
            "SYSTEM STATUS: SAFE";

        warningMessage.textContent =
            "No critical collision risk detected.";


    } else if (highestRisk === "CAUTION") {

        warningBanner.classList.add("warning");

        warningTitle.textContent =
            "SYSTEM STATUS: CAUTION";

        warningMessage.textContent =
            "Vehicle operating under caution. Monitor surroundings.";


    } else if (highestRisk === "WARNING") {

        warningBanner.classList.add("warning");

        warningTitle.textContent =
            "⚠ COLLISION RISK: WARNING";

        warningMessage.textContent =
            "Potential collision risk detected. Vehicle attention required.";


    } else if (highestRisk === "CRITICAL") {

        warningBanner.classList.add("critical");

        warningTitle.textContent =
            "⚠ CRITICAL COLLISION RISK";

        warningMessage.textContent =
            "Critical risk detected. Vehicle should slow down or stop.";
    }
}


/* ---------- UPDATE EVERYTHING ---------- */

function updateDashboard() {

    updateVehicle1();

    updateVehicle2();

    updateRiskColor(
        "vehicle1-risk",
        vehicleData.vehicle1.risk
    );

    updateRiskColor(
        "vehicle2-risk",
        vehicleData.vehicle2.risk
    );

    updateCollisionWarning();
}


/* ---------- START DASHBOARD ---------- */

updateDashboard();
```
