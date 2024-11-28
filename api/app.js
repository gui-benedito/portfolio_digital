const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const projects = require('./data/projects');
const hobbies = require('./data/hobbies');
const academics = require('./data/academics');

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
    res.render('projetos', { title: 'Projetos', projetos: projects });
});

app.get('/academico', (req, res) => {
    res.render('academico', { title: 'Acadêmico', academicos: academics });
});

// Exporta o app para o Vercel
module.exports = app;
