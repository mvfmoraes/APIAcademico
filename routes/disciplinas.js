module.exports = app => {
    app.route('/disciplinas').get(app.services.disciplinas.getAll);
    app.route('/disciplinas/:cod_disc').get(app.services.disciplinas.get);
}