module.exports = app => {
    app.route('/cursos').get(app.services.cursos.getAll);
    app.route('/cursos/:cod_curso').get(app.services.cursos.get);
}