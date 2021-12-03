module.exports = app => {
    app.route('/materia_categoria').get(app.services.materia_categoria.getAll);
    app.route('/materia_categoria/:cod_materia').get(app.services.materia_categoria.get);
}