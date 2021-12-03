module.exports = app => {
    app.route('/pagamento').get(app.services.pagamento.getAll);
    app.route('/pagamento/:cod_pagamento').get(app.services.pagamento.get);
}