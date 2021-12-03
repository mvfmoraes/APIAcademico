module.exports = app => {
    app.route('/turmas').get(app.services.turmas.getAll);
    app.route('/turmas/:cod_turma').get(app.services.turmas.get);
}