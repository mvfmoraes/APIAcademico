module.exports = app => {
    app.route('/pais').get(app.services.pais.getAll);
    app.route('/pais/:cod_pais').get(app.services.pais.get);
}