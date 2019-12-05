// I have to initialize the object 
class Negociacao {

    constructor( data, quantidade, valor ) {
        this.data = new Date();
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // If I am creating a function inside of a class I called that a method 
    // And if I am creating a function outside of a class I called that a function

    onterVolume() {
        return this.quantidade * this.valor;
    }
}

