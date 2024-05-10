from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    titulo = "Home"
    return render_template ("index.html", title = titulo)

@app.route("/hobbies")
def hobbies():
    titulo = "Hobbies"
    return render_template ("hobbies.html", title = titulo)

@app.route("/projetos")
def projetos():
    titulo = "Projetos"
    return render_template ("projetos.html", title = titulo)

@app.route("/academico")
def academico():
    titulo = "Acadêmico"
    return render_template ("academico.html", title = titulo)