#jsonify is a function provided by the Flask library that is used to convert a Python object (e.g. a dictionary)
#  to a JSON object. It takes a single argument, which is the Python object that you want to convert. The jsonify
#  function returns a Flask response object with the JSON data and the correct content-type headers set.

#In the example provided, the jsonify function is used to convert a Python dictionary data containing the 
# data to be returned, into a JSON object. The JSON object is then returned as the response to the client.

#It's important to notice that jsonify only converts the top-level of the passed object, it doesn't convert nested structures, for this case we need to use json.dumps()

#The jsonify function also adds the appropriate headers to the response so that the client knows that the response
#  is in JSON format. This makes it a convenient way to return JSON data from a Flask endpoint.

#It's also worth noting that jsonify is not only used to return json data from an endpoint, but also it can be
#  used in other parts of the code, for example to return an error message in json format.
import os
import time

from flask_cors import CORS
from flask import Flask, jsonify, request, render_template
import sys

import requests

app = Flask(__name__)
CORS(app)

url = "http://data.sfgov.org/resource/rqzj-sfat.json"
r = requests.get(url)
data = r.json()

@app.route("/api/data", methods=["GET"])
def get_data():
    r = requests.get(url)
    data = r.json()
    #print(data[0])
    return jsonify(data)


if __name__ == "__main__":
    ENVIRONMENT_DEBUG = os.environ.get("DEBUG", False)
    app.run(host='0.0.0.0', port=5000, debug=ENVIRONMENT_DEBUG)

