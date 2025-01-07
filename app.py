from flask import Flask, render_template, make_response, request, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    # Get the cookie consent status
    cookie_consent = request.cookies.get('cookie_consent')
    
    # Render the template with cookie consent status
    response = make_response(render_template('index.html', cookie_consent=cookie_consent))
    return response

@app.route('/set_cookie_consent', methods=['POST'])
def set_cookie_consent():
    response = make_response({'status': 'success'})
    response.set_cookie('cookie_consent', 'accepted', max_age=365*24*60*60)  # Cookie expires in 1 year
    return response 