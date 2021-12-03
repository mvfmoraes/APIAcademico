module.exports = app => {
    app.route('/historicos_escolares').get(app.services.historicos_escolares.getAll);
    app.route('/historicos_escolares/:cod_historico').get(app.services.historicos_escolares.get);
}