module.exports = app => {
    app.route('/instrutor').get(app.services.instrutor.getAll);
    app.route('/instrutor/:cod_instrutor').get(app.services.instrutor.get);
}