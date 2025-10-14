class Verificaciones {

    static validarNoLetras(input) {

        input = input.trim();

        for (let i = 0; i < input.length; i++) {

            if (isNaN(input[i]) && input[i] !== '-' && input[i] !== '(' && input[i] !== '+' && input[i] !== ')' && input[i] !== '*' && input[i] !== '/') {
                return false;
            }
        }
        return true;
        
    }


    static validarNoOperadoresConsecutivos(input) {

        input = input.trim();

        for (let i = 0; i < input.length - 1; i++) {

            if (isNaN(input[i]) && isNaN(input[i + 1]) && input[i] !== '(' && input[i + 1] !== ')') {
                return false;
            }
        }

        return true;

    }

    static validarParentesisBalanceados(input) {
        let parentisisAbiertos = 0;
        let parentisisCerrados = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '(') {
                parentisisAbiertos++;
            } else if (input[i] === ')') {
                parentisisCerrados++;
            }
        }
        if (parentisisAbiertos !== parentisisCerrados) {
            return false;
        }
        return true;
    } 


}

