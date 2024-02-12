from app import db

class Respuesta(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    respuesta = db.Column(db.String(10))
