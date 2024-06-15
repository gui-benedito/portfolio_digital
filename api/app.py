from flask import Flask, render_template
from  statics import projects, hobbies, academics

app = Flask(__name__)

@app.route("/")
def home():
    titulo = "Home"
    return render_template ("index.html", title = titulo)

@app.route("/hobbies")
def hobbies_page():
    titulo = "Hobbies"
    return render_template ("hobbies.html", title = titulo, hobbies=hobbies)

@app.route("/projetos")
def projetos():
    titulo = "Projetos"
    return render_template ("projetos.html", title = titulo, projetos=projects)

@app.route("/academico")
def academico_page():
    titulo = "Acadêmico"
    return render_template ("academico.html", title = titulo, academicos=academics)