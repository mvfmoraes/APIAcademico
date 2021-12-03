module.exports = app => {
    app.route('/materia_instrutor').get(app.services.materia_instrutor.getAll);
    app.route('/materia_instrutor/:cod_instrutor').get(app.services.materia_instrutor.get);
}