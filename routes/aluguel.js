module.exports = app => {
    app.route('/aluguel').get(app.services.aluguel.getAll);
    app.route('/aluguel/:cod_aluguel').get(app.services.aluguel.get);
}