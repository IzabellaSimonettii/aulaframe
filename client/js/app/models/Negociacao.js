// I have to initialize the object 
class Negociacao {

    constructor( data, quantidade, valor ) {
        // The underline before the properties is a convention that just the same class mothods 
        // can access thoses no one from outside can.
        this._data = new Date(data.getTime()); 
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }
    // If I am creating a function inside of a class I called that a method 
    // And if I am creating a function outside of a class I called that a function

    get volume() { 
        return this._quantidade * this._valor;
    }
    // The methods of the same class can access the properties 
    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }

}

