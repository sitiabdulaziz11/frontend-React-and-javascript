from flask import Flask
app = Flask(__name__)

@app.route("/home")
@app.route("/")
# def hello():
def home():
    return "<h1>Home page!</h1>"

@app.route("/about")
def about():
    return "<h1>About page!</h1>"


if __name__ == '__main__':
    app.run(debug=True) # to not work with environment variable