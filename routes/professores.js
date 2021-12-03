module.exports = app => {
    app.route('/professores').get(app.services.professores.getAll);
    app.route('/professores/:cod_prof').get(app.services.professores.get);
}