module.exports = app => {
    app.route('/filial').get(app.services.filial.getAll);
    app.route('/filial/:cod_filial').get(app.services.filial.get);
}