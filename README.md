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


ISHAA:😘
MINEGUARD-X

V2V SOFTWARE SIMULATION

This module simulates vehicle-to-vehicle communication
using dummy sensor values.

Inputs:
- Distance
- Fog Level

The system calculates collision risk based on distance
and environmental visibility.

Risk Levels:
0 - SAFE
1 - CAUTION
2 - WARNING
3 - CRITICAL

The generated V2V packet contains:
- Vehicle ID
- Distance
- Fog Level
- Risk Level
- Timestamp

The receiver evaluates the received packet and performs
a simulated response:

SAFE     - Continue normal operation
CAUTION  - Reduce speed and remain alert
WARNING  - Slow down and alert driver
CRITICAL - Stop vehicle

Current implementation:
Software simulation using Python and dummy values.

Future implementation:
Dummy values will be replaced with actual distance and
fog/visibility sensor readings. V2V communication will
be implemented using ESP-NOW/Wi-Fi between ESP32 devices.
