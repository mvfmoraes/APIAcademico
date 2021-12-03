module.exports = app => {
    app.route('/materia').get(app.services.materia.getAll);
    app.route('/materia/:cod_materia').get(app.services.materia.get);
}