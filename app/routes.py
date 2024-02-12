from flask import request, render_template, redirect, url_for
from app import app, db
from app.models import Respuesta

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/invitacion', methods=['POST'])
def invitacion():
    respuesta_usuario = request.form['respuesta']
    nueva_respuesta = Respuesta(respuesta=respuesta_usuario)
    db.session.add(nueva_respuesta)
    db.session.commit()
    return redirect(url_for('index'))
