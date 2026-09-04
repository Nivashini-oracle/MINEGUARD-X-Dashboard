# MINEGUARD-X Dashboard

Control-room dashboard skeleton for the MINEGUARD-X mine vehicle safety prototype.

## Purpose

The dashboard displays the current monitoring information for two mine vehicles.

It currently uses mock/placeholder data so that the user interface can be tested independently of the physical vehicles.

## Dashboard Displays

For each vehicle, the dashboard displays:

- Vehicle ID
- Vehicle Status
- Distance
- Fog Level
- Risk Level

The dashboard also displays:

- Overall collision-risk warning
- Number of connected vehicles
- Monitoring mode
- Current data source

## Project Files

### index.html
Contains the dashboard structure and vehicle monitoring elements.

### style.css
Contains the visual styling and responsive layout.

### script.js
Contains the mock vehicle data and dashboard update logic.

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. The dashboard will load using mock data.

No Python server or additional packages are required for the current mock-data version.

## Current Mock Data

Vehicle 1:
- ID: V001
- Status: MOVING
- Distance: 8.5 m
- Fog Level: LOW
- Risk Level: SAFE

Vehicle 2:
- ID: V002
- Status: MOVING
- Distance: 5.2 m
- Fog Level: MEDIUM
- Risk Level: WARNING

## Live Data Integration

The current dashboard is not connected to the physical ESP32 vehicles.

For the next integration stage, replace the mock input in `script.js` with the live serial/Wi-Fi data received from the vehicle system.

The existing dashboard element IDs should be used to update:

- `vehicle1-status`
- `vehicle1-distance`
- `vehicle1-fog`
- `vehicle1-risk`
- `vehicle2-status`
- `vehicle2-distance`
- `vehicle2-fog`
- `vehicle2-risk`

The collision warning can be updated through:

- `collision-warning`
- `warning-title`
- `warning-message`

## Risk Levels

The dashboard supports:

- SAFE
- CAUTION
- WARNING
- CRITICAL

The vehicle firmware/team will provide the actual risk classification and threshold logic.

## Current Limitation

This version is a UI skeleton using mock data.

Live ESP32/serial/Wi-Fi integration is intentionally left for the next integration st


ISHAA:
# MINEGUARD-X

## V2V Software Simulation

This module simulates **Vehicle-to-Vehicle (V2V) communication** for the MINEGUARD-X mine vehicle safety prototype using dummy sensor values.

The software is designed and tested independently before integration with the physical vehicles.

## Inputs

The current simulation uses:

* Distance
* Fog Level

## Risk Calculation

The system calculates collision risk based on vehicle distance and environmental visibility.

### Risk Levels

* 0 — SAFE
* 1 — CAUTION
* 2 — WARNING
* 3 — CRITICAL

## Fog Levels

* 0 — CLEAR
* 1 — LOW FOG
* 2 — MEDIUM FOG
* 3 — HIGH FOG

High fog can increase the calculated risk level to represent reduced visibility.

## V2V Packet

Each vehicle generates a V2V packet containing:

* Vehicle ID
* Distance
* Fog Level
* Risk Level
* Timestamp

## Phase 1 — Risk and V2V Simulation

The initial simulation implements:

* Dummy distance and fog inputs
* Distance-based risk calculation
* Fog-aware risk evaluation
* V2V packet creation
* Simulated packet reception
* Risk-based response logic

## Phase 2 — Bidirectional V2V Communication

The simulation has been extended to support two vehicles communicating with each other.

Each vehicle:

1. Uses its own dummy distance and fog values.
2. Calculates its own collision risk.
3. Creates a V2V packet.
4. Sends its simulated packet to the other vehicle.
5. Receives and evaluates the other vehicle's packet.
6. Performs a simulated risk-based response.

```text
Vehicle 1                          Vehicle 2
    │                                  │
Distance + Fog                    Distance + Fog
    │                                  │
Risk Calculation                  Risk Calculation
    │                                  │
Create V2V Packet                 Create V2V Packet
    │                                  │
    ├────────── V2V ────────────────► │
    │ ◄───────── V2V ─────────────────┤
    │                                  │
Receive + Evaluate                Receive + Evaluate
    │                                  │
Risk-Based Action                 Risk-Based Action
```

## Receiver Response

After receiving a packet, the vehicle performs a simulated response based on the risk level:

* **SAFE** — Continue normal operation
* **CAUTION** — Reduce speed and remain alert
* **WARNING** — Slow down and alert the driver
* **CRITICAL** — Stop the vehicle

## Current Implementation

The current version is a **Python-based software simulation** using dummy values.

### Completed Features

* Distance-based risk calculation
* Fog-aware risk calculation
* Risk level classification
* V2V packet creation
* Timestamp generation
* Simulated Vehicle 1 → Vehicle 2 communication
* Simulated Vehicle 2 → Vehicle 1 communication
* Bidirectional V2V communication simulation
* Packet reception and evaluation
* Risk-based warning and response logic

## Current Limitation

The current implementation does not yet communicate wirelessly between physical vehicles.

The distance and fog values are dummy values, and packet transmission is simulated within the Python program.

## Future Integration

During hardware integration, the dummy values will be replaced with actual sensor readings.

The planned system architecture is:

```text
Distance / Fog Sensors
        ↓
Actual Sensor Readings
        ↓
Risk Calculation Logic
        ↓
V2V Packet Creation
        ↓
ESP-NOW / Wi-Fi Communication
        ↓
Other ESP32 Vehicle
        ↓
Packet Reception and Evaluation
        ↓
Warning / Slow / Stop Response
```

The current software simulation provides the core V2V communication and risk-evaluation logic for later integration with the ESP32-based physical vehicle system.

