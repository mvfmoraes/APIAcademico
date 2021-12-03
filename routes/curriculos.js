module.exports = app => {
    app.route('/curriculos').get(app.services.curriculos.getAll);
    app.route('/curriculos/:cod_curso').get(app.services.curriculos.get);
}