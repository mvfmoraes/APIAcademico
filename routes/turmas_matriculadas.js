module.exports = app => {
    app.route('/turmas_matriculadas').get(app.services.turmas_matriculadas.getAll);
    app.route('/turmas_matriculadas/:cod_tur_matr').get(app.services.turmas_matriculadas.get);
}