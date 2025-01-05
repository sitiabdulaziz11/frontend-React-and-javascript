from flaskblog import app

if __name__ == '__main__':
    app.run(debug=True)

# from datetime import datetime
"""from flask import Flask, render_template, url_for, flash, redirect
from flask_sqlalchemy import SQLAlchemy
from forms import RegistrationForm, LoginForm


app = Flask(__name__)
app.config['SECRET_KEY'] = '7d043afb8bd80b9b6caca4b6725a4b7f'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db' # database url location, 3slash are relative path
db = SQLAlchemy(app) # database instance
""" # all move to flaskblog directory in __init__ file.
# from models import User, Post move to route.py

"""class User(db.Model):
    id = db.Column(db.Integer, primary_key=True) # columns of table
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(130), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')
    password = db.Column(db.String(60), nullable=False)
    post = db.relationship('Post', backref='author', lazy=True)
    
    
    
    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"
    
    
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    
    def __repr__(self):
        return f"Post('{self.title}', '{self.date_posted}')"
    """ # all of this moved in to other script/file
    
# all blowe move to route.py
"""posts = [
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

@app.route("/home")
@app.route("/")
def home():
    return render_template('home3.html', post1=posts)

@app.route("/about")
def about():
    return render_template('about2.html', title='About')

@app.route("/register", methods=['Get', 'Post'])
def register():
    form1 = RegistrationForm()
    if form1.validate_on_submit():
        flash(f'Account created for {form1.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html', title='Register', form=form1)

@app.route("/login", methods=['Get', 'Post'])
def login():
    form2 = LoginForm()
    if form2.validate_on_submit():
        if form2.email.data == 'admin@blog.com' and form2.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template('login.html', title='Login', form=form2)
"""
