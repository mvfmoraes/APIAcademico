module.exports = app => {
    app.route('/cidade').get(app.services.cidade.getAll);
    app.route('/cidade/:cod_cidade').get(app.services.cidade.get);
}