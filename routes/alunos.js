module.exports = app => {
    app.route('/alunos').get(app.services.alunos.getAll);
    app.route('/alunos/:mat_alu').get(app.services.alunos.get);
}