from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index_en.html')

@app.route('/en')
def de():
    return render_template('index.html')

@app.route('/pt')
def pt():
    return render_template('index_pt.html')

@app.route('/test')
def test():
    return render_template('test.html')