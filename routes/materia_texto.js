module.exports = app => {
    app.route('/materia_texto').get(app.services.materia_texto.getAll);
    app.route('/materia_texto/:cod_materia').get(app.services.materia_texto.get);
}