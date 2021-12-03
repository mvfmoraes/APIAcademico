module.exports = app => {
    app.route('/funcionario').get(app.services.funcionario.getAll);
    app.route('/funcionario/:cod_funcionario').get(app.services.funcionario.get);
}