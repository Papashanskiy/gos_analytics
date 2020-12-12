from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bootstrap import Bootstrap
from flask_migrate import Migrate
from flask_socketio import SocketIO
from pymongo import MongoClient
import click

from config import Config
from project.utils.rf_regions import rf_regions

db = SQLAlchemy()
migrate = Migrate()
bootstrap = Bootstrap()
socketio = SocketIO()
mongo = MongoClient('mongodb', 27017)
mongo_regions_mask = mongo.regions_mask


def create_app(config=Config):
    app = Flask(__name__, static_url_path='')
    app.config.from_object(config)

    db.init_app(app)
    migrate.init_app(app,db)
    bootstrap.init_app(app)
    socketio.init_app(app)

    @app.cli.command('welcome')
    def welcome():
        try:
            with app.app_context():
                click.echo("Welcome home, my friend!")
        except Exception as ex:
            click.echo(f"Failed to say you welcome. But welcome anyway! c:")

    @app.cli.command("create_db")
    def create_db():
        try:
            with app.app_context():
                db.create_all()
            click.echo("Database successful created!")
        except Exception as ex:
            click.echo(f"Failed to create database! {ex}")

    @app.cli.command("fill_mongodb")
    def fill_mongodb():
        try:
            with app.app_context():
                mongo_regions_mask.regions_mask.insert_one(rf_regions)
            click.echo("Database successful filled!")
        except Exception as ex:
            click.echo(f"Failed to fill mongodb! {ex}")

    @app.cli.command("get_regions")
    def get_regions():
        try:
            with app.app_context():
                _items = mongo_regions_mask.regions_mask.find()
                items = [item for item in _items]
            click.echo("You can get it!")
            click.echo(f"{items}")
        except Exception as ex:
            click.echo(f"Failed to fill mongodb! {ex}")

    from project.main.routes import main
    app.register_blueprint(main)

    from project.api.routes import api
    app.register_blueprint(api)

    return app


from project import model
