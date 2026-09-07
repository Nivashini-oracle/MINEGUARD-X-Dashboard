import time


# =====================================
# MINEGUARD-X
# PHASE 2 - BIDIRECTIONAL V2V SIMULATION
# =====================================


# -------------------------------------
# RISK LEVELS
# -------------------------------------

SAFE = 0
CAUTION = 1
WARNING = 2
CRITICAL = 3


# -------------------------------------
# CALCULATE RISK
# -------------------------------------

def calculate_risk(distance):

    # Base risk from distance

    if distance > 100:
        risk = SAFE

    elif distance > 60:
        risk = CAUTION

    elif distance > 30:
        risk = WARNING

    else:
        risk = CRITICAL

    return risk


# -------------------------------------
# RISK NUMBER TO NAME
# -------------------------------------

def risk_name(risk):

    if risk == SAFE:

        return "SAFE"

    elif risk == CAUTION:

        return "CAUTION"

    elif risk == WARNING:

        return "WARNING"

    else:

        return "CRITICAL"


# -------------------------------------
# CREATE V2V PACKET
# -------------------------------------

def create_packet(vehicle_id, distance):

    risk = calculate_risk(distance)

    packet = {
        "vehicle_id": vehicle_id,
        "distance": distance,
        "risk_level": risk,
        "timestamp": time.time()
    }

    return packet


# -------------------------------------
# RECEIVE V2V PACKET
# -------------------------------------

def receive_packet(receiver_id, packet):

    print("\n===== VEHICLE", receiver_id, "RECEIVED PACKET =====")

    print("From Vehicle :", packet["vehicle_id"])
    print("Distance     :", packet["distance"], "cm")
    print("Risk Level   :", risk_name(packet["risk_level"]))
    print("Timestamp    :", packet["timestamp"])


    # Risk-based action

    if packet["risk_level"] == SAFE:

        print("STATUS : SAFE")
        print("ACTION : Continue normal operation")

    elif packet["risk_level"] == CAUTION:

        print("STATUS : CAUTION")
        print("ACTION : Reduce speed and remain alert")

    elif packet["risk_level"] == WARNING:

        print("STATUS : WARNING")
        print("ACTION : Slow down and alert driver")

    elif packet["risk_level"] == CRITICAL:

        print("STATUS : CRITICAL")
        print("ACTION : STOP VEHICLE")


# =====================================
# VEHICLE 1 - DUMMY DATA
# =====================================

vehicle_1_distance = 120


# =====================================
# VEHICLE 2 - DUMMY DATA
# =====================================

vehicle_2_distance = 150


# =====================================
# CREATE PACKETS
# =====================================

vehicle_1_packet = create_packet(
    vehicle_id=1,
    distance=vehicle_1_distance
)


vehicle_2_packet = create_packet(
    vehicle_id=2,
    distance=vehicle_2_distance
)


# =====================================
# VEHICLE 1 -> VEHICLE 2
# =====================================

print("\n===================================")
print("VEHICLE 1 -> VEHICLE 2")
print("===================================")

receive_packet(2, vehicle_1_packet)


# =====================================
# VEHICLE 2 -> VEHICLE 1
# =====================================

print("\n===================================")
print("VEHICLE 2 -> VEHICLE 1")
print("===================================")

receive_packet(1, vehicle_2_packet)

