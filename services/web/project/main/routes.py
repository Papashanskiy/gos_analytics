from flask import Blueprint, render_template, jsonify, abort, request, current_app
from project import db

main = Blueprint('main', __name__)


@main.errorhandler(400)
def custom400(error):
    response = jsonify({'message': error.description})


@main.route('/')
@main.route('/index')
def index():
    return render_template('index.html')
