from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import json
import os

data_dir = "data"
if not os.path.exists(data_dir):
    os.makedirs(data_dir)

app = Flask(__name__)
CORS(app, resources={r"/*" : {"origins":"http://localhost:3000"}})

@app.route('/')
def index():
    return "hello"

if __name__ == '__main__':
    app.run(debug=True)