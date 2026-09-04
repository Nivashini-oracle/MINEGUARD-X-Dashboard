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

The software can be developed and tested independently before integration with the physical vehicles.

## Inputs

The current simulation uses:

* Distance
* Fog Level

## Risk Calculation

The system calculates collision risk based on vehicle distance and environmental visibility.

### Risk Levels

| Level | Risk     |
| ----- | -------- |
| 0     | SAFE     |
| 1     | CAUTION  |
| 2     | WARNING  |
| 3     | CRITICAL |

## V2V Packet

Each simulated vehicle generates a V2V packet containing:

* Vehicle ID
* Distance
* Fog Level
* Risk Level
* Timestamp

## Simulated Communication

The current implementation simulates bidirectional communication between two vehicles:


Vehicle 1
    ↓
Distance + Fog Data
    ↓
Risk Calculation
    ↓
V2V Packet
    ↓
Vehicle 2 Receives and Evaluates Packet
    ↓
Risk-Based Action


Vehicle 2
    ↓
Distance + Fog Data
    ↓
Risk Calculation
    ↓
V2V Packet
    ↓
Vehicle 1 Receives and Evaluates Packet
    ↓
Risk-Based Action


## Receiver Response

After receiving a V2V packet, the vehicle performs a simulated response based on the received risk level:

* **SAFE** — Continue normal operation
* **CAUTION** — Reduce speed and remain alert
* **WARNING** — Slow down and alert the driver
* **CRITICAL** — Stop the vehicle

## Current Implementation

The current version is a **Python-based software simulation** using dummy values for distance and fog level.

It demonstrates:

* Distance-based risk calculation
* Fog-aware risk evaluation
* V2V packet creation
* Simulated bidirectional communication between two vehicles
* Packet reception and evaluation
* Risk-based warning and response logic

## Future Integration

During hardware integration, the dummy values will be replaced with actual sensor readings from the physical vehicles.

The planned implementation is:

text
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
Packet Evaluation
        ↓
Warning / Slow / Stop Response


The current Python simulation provides the software logic that can later be adapted and integrated with the ESP32-based vehicle system.
