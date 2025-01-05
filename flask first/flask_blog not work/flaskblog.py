from flask import Flask, render_template
app = Flask(__name__)

posts = [
    {
        'author': 'corey schafer',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'April 20, 2023'  
    },
    {
        'author': 'siti abdulaziz',
        'title': 'Blog Post 2',
        'content': 'second post content',
        'date_posted': 'April 21, 2023'
    }
]

@app.route("/")
@app.route("/home")
def home():
    # return "<h1> Home page </h1>"
    return render_template('home.html', pos=posts)

@app.route("/about")
def about():
    # return "<h1> about page </h1>"
    return render_template('about.html', title='About')

if __name__ == '__main__':
    app.run(debug=True)
