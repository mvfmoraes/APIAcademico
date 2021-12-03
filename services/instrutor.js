module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    const getAll = async (req, res) => {
        try {
            const resposta = await app.db('instrutor')
                .select()
                .then(instrutores => Sucesso(instrutores))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    const get = async (req, res) => {
        const { cod_instrutor } = req.params;
        try {
            const resposta = await app.db('instrutor')
                .select()
                .where({ cod_instrutor })
                .then(instrutores => Sucesso(instrutores))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    return {
        getAll,
        get
    }
}