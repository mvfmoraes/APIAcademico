module.exports = app => {
    app.route('/cliente').get(app.services.cliente.getAll);
    app.route('/cliente/:cod_cliente').get(app.services.cliente.get);
}