const { Noticias } = require('../models');
var api = {}

api.adiciona = function(req, res) {
    Noticias.build(req.body).save()
    .then(noticia => res.json(noticia))
    .catch(err => console.log(err))
};

api.busca = function(req, res) {
        Noticias.findOne({where: {id: req.params.id}})
        .then(noticia => res.json(noticia))
        .catch(err => console.log(err))
};

api.atualiza = function(req, res) {
        console.log(req.body)
        Noticias.update(req.body, {where: {id : req.params.id}})
        .then(noticia => res.json(noticia))
        .catch(err => console.log(err))  
};

api.lista = function(req, res) {
    Noticias.findAll()
    .then(noticia => res.json(noticia))
    .catch(err => console.log(err))
};

module.exports = api;