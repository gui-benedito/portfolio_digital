const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const projects = require('./data/projects');
const hobbies = require('./data/hobbies');
const formations = require('./data/formations');

const app = express();

// Configuração do EJS e layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'base');

// Configuração de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/hobbies', (req, res) => {
    res.render('hobbies', { title: 'Hobbies', hobbies });
});

app.get('/projetos', (req, res) => {
    res.render('projetos', { title: 'Projetos', projetosAcademicos: projects.academics, projetosProfissionais: projects.professional });
});

app.get('/formacao', (req, res) => {
    res.render('formacao', { title: 'Formação', formacoes: formations });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})

// Exporta o app para o Vercel
module.exports = app;
