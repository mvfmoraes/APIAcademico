module.exports = app => {
    app.route('/idioma').get(app.services.idioma.getAll);
    app.route('/idioma/:cod_idioma').get(app.services.idioma.get);
}