from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bootstrap import Bootstrap
from flask_migrate import Migrate
from flask_socketio import SocketIO

from config import Config

db = SQLAlchemy()
migrate = Migrate()
bootstrap = Bootstrap()
socketio = SocketIO()


def create_app(config=Config):
    app = Flask(__name__, static_url_path='')
    app.config.from_object(config)

    db.init_app(app)
    migrate.init_app(app,db)
    bootstrap.init_app(app)
    socketio.init_app(app)

    from project.main.routes import main
    app.register_blueprint(main)

    from project.api.routes import api
    app.register_blueprint(api)

    return app


from project import model
