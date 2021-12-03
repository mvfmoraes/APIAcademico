module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    const getAll = async (req, res) => {
        try {
            const resposta = await app.db('turmas_matriculadas')
                .select()
                .then(turmas_matriculadas => Sucesso(turmas_matriculadas))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    const get = async (req, res) => {
        const { cod_tur_matr } = req.params;
        try {
            const resposta = await app.db('turmas_matriculadas')
                .select()
                .where({ cod_tur_matr })
                .then(turmas_matriculadas => Sucesso(turmas_matriculadas))
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