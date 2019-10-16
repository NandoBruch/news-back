var api = require('../api')

module.exports  = function(app) {
    
    app.route('/noticias')
        .post(api.adiciona)
        .get(api.lista);

    app.route('/noticias/:id')
        .get(api.busca)
        .put(api.atualiza);
};