from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/en')
def en():
    return render_template('index_en.html')

@app.route('/pt')
def pt():
    return render_template('index_pt.html')
