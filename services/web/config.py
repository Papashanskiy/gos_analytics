import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite:///database.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    STATIC_FOLDER = f"{os.getenv('APP_FOLDER')}/project/static"
    MEDIA_FOLDER = f"{os.getenv('APP_FOLDER')}/project/media"

    # APP MODE
    DEBUG = False

    # Top secret of website
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'

    # # Database configuration
    # SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'project.db')
    # SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Bootstrap using local static files
    BOOTSTRAP_SERVE_LOCAL = True
