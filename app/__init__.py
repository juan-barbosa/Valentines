from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import psycopg2

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://answers_75sn_user:bvt40I0RXHnBNYWkicUknthHsHow7T4H@dpg-cn592hect0pc738efmk0-a.oregon-postgres.render.com/answers_75sn'
db = SQLAlchemy(app)


from app import routes
