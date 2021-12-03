module.exports = app => {
    app.route('/inventario').get(app.services.inventario.getAll);
    app.route('/inventario/:cod_inventario').get(app.services.inventario.get);
}