module.exports = app => {
    app.route('/pre_requisitos').get(app.services.pre_requisitos.getAll);
    app.route('/pre_requisitos/:cod_disc').get(app.services.pre_requisitos.get);
}