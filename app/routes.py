from flask import request, render_template, redirect, url_for, jsonify
from app import app, db
from app.models import Respuesta

@app.route('/')
def index():
    return render_template('disclaimer.html')

@app.route('/invitacion', methods=['POST'])
def invitacion():
    respuesta_usuario = request.form['respuesta']
    nueva_respuesta = Respuesta(respuesta=respuesta_usuario)
    db.session.add(nueva_respuesta)
    db.session.commit()
    return jsonify({"message": "Respuesta guardada exitosamente"})

@app.route('/question')
def question():
    return render_template('question.html')
