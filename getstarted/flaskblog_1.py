from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    # return "Hello World!"
    # return "<h1>Hello World!</h1>" # no take effect, no it work, but i didn't include port number
    return "<h1>Home page</h1>" # no take effect