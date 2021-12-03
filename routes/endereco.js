module.exports = app => {
    app.route('/endereco').get(app.services.endereco.getAll);
    app.route('/endereco/:cod_endereco').get(app.services.endereco.get);
}