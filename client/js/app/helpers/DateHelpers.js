class DateHelper {
    // the methods in this class they are static that means they belong to the definition of the class 

    static dataParaTexto(data) {
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
    }
    static textoParaData(texto) {

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }
}

