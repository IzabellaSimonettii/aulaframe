class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    // To protect the original data we duplicate and make changes of whats was duplicated 
    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}