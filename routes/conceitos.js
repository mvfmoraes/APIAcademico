module.exports = app => {
    app.route('/conceitos').get(app.services.conceitos.getAll);
    app.route('/conceitos/:cod_conceito').get(app.services.conceitos.get);
}