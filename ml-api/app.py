from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

emotions = ["happy", "confused", "bored", "focused"]

@app.route("/emotion", methods=["POST"])
def detect_emotion():
    try:
        data = request.json
        # Ensure image is received (dummy for now)
        image = data.get("image") if data else None

        if not image:
            # Fallback if no image sent
            return jsonify({"emotion": random.choice(emotions)})

        # Dummy prediction
        emotion = random.choice(emotions)
        return jsonify({"emotion": emotion})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(port=5001)