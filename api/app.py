from flask import Flask, render_template
# from estaticos import *

app = Flask(__name__)

projects = [
    {
        'title': 'API 1°DSM - Smart Farm',
        'link': 'https://github.com/gui-benedito/projeto_api',
        'img': '../static/img/apiI.svg',
        'description': 'Aplicação para acompanhamento real dos valores captados pelos sensores de uma estufa.'
    },
    {
        'title': 'API 2°DSM - CloudStock',
        'link': 'https://github.com/SkyFlyTeam/cloudStock',
        'img': '../static/img/apiII.png',
        'description': 'Aplicação para gerenciamento e controle de estoque.'
    },
    {
        'title': 'Portifólio digital',
        'link': 'https://github.com/gui-benedito/portfolio_digital',
        'img': '../static/img/portifolio.png',
        'description': 'Portifólio Digital para amostra de projetos e alguns assuntos pessoais.'
    },
    {
        'title': 'Studio de atividades físicas',
        'link': 'https://github.com/gui-benedito/studio',
        'img': '../static/img/logo.png',
        'description': 'Aplicação web para desafio da matéria Desenvolvimento Web.'
    }
]

hobbies = [
    {
        'hobbie': 'Assistir e jogar futebol', 
        'id': 'futebol',
        'img': '../static/img/futebol.jpg'
    },
    {
        'hobbie': 'Atividades físicas', 
        'id': 'atividades',
        'img': '../static/img/exercicio.jpg'
    },
    {
        'hobbie': 'Ler', 
        'id': 'ler',
        'img': '../static/img/artes.jpg'
    }
]

academics = [
    {
        'title': 'Ensino Médio',
        'institution': 'E. E. Major Aviador José Mariotto Ferreira',
        'date': '(2011 - 2013)',
        'img': '../static/img/school.svg'
    },
    {
        'title': 'Técnico em mecânica',
        'institution': 'ETEP',
        'date': '(2013 - 2014)',
        'img': '../static/img/school.svg'
    },
    {
        'title': 'Desenvolvimento de Software Multiplataforma',
        'institution': 'Faculdade de Tecnologia de São José dos Campos',
        'date': '(2024 - presente)',
        'img': '../static/img/hourglass.svg'
    }
]

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