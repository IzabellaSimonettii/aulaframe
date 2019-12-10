class DateHelper {
    // the methods in this class they are static that means they belong to the definition of the class 

    constructor() {
        throw new Error('A classe DatHelper nao pode ser isntanciada');
    }
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
    static textoParaData(texto) {

        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }
}

