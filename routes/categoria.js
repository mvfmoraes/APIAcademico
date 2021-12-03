module.exports = app => {
    app.route('/categoria').get(app.services.categoria.getAll);
    app.route('/categoria/:cod_categoria').get(app.services.categoria.get);
}