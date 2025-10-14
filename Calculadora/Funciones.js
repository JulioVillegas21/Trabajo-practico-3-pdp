class Funciones {

    static Sumar(a, b) {
        return a + b;
    }

    static Restar(a, b) {
        return a - b;
    }

    static Multiplicar(a, b) {
        return a * b;
    }

    static Dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b; 
    }
}