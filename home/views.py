from home import app
from flask import render_template

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/projects/')
def projects():
    return 'The project page'

@app.route('/about')
def about():
    return 'The about page'