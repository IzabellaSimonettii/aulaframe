class Mensagem {

    constructor(texto) {
        this._texto = texto;
    }

    _template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }

    get texto() {
        return this._texto;
    }
    
    set texto(texto) {
        return this._texto = texto;
    }

}