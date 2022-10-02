class Numero {

    constructor() {
        this.numeros = []
        this.pp = 0
    }

    salvar() {
        let numero = this.lerDados()

        if (this.validarCampo(numero)) {
            this.adicionar(numero)
            this.listaNumeros()
        }
        
        this.apagar()
        document.querySelector('input#numero').focus()
    }
    finalizar() {

        if (this.checarNumeros()) {
            let res = document.getElementById("texto")
            var maior = Math.max.apply(null, this.numeros);
            var min = Math.min.apply(null, this.numeros);
            let soma = 0

/*      Alternativa
            let maior = this.numeros[0]
            let menor = this.numeros[0]
            let soma, média = 0
            for(let pos in this.numeros){
                soma += this.numeros[pos]
                if (this.numeros[pos] > maior){
                    maior = valores[pos]}
                if (this.numeros[pos] < menor){
                    menor = this.numeros[pos]
                }

            }
*/
            for (let x in this.numeros) {
                soma += this.numeros[x]
            }

            let media = (soma / (this.numeros.length)).toFixed(1)
            res.innerHTML += `- Ao todo temos ${this.numeros.length} números cadastrados;<br>`
            res.innerHTML += `- O menor valor informado foi ${min};<br>`
            res.innerHTML += `- O maior valor informado foi ${maior};<br>`
            res.innerHTML += `- Somando todos os numeros temos ${soma};<br>`
            res.innerHTML += `- A média dos valores digitados é ${media}.`
            this.pp++
        }
    }


    limpar(){
        document.getElementById('numero').value = ''
        document.getElementById("texto").innerHTML = ""
        this.numeros.length = 0
        document.getElementById('analisador').innerHTML = ""
    }

    checarNumeros() {
        let msg = ''
        let res = document.getElementById("texto")

        if (this.numeros.length == 0) {
            msg += 'Nenhum número inserido, até o momento \n'
        }

        if (this.pp != 0) {
            msg += 'Resultado já analisado, refaça a inserção dos números.'
        }


        if (msg != '') {
            alert(msg)
            return false
        }

        return true

    }

    listaNumeros() {
        let analisador = document.querySelector("#analisador")
        analisador.innerHTML = ''
        for (let x = 0; x < this.numeros.length; x++) {
            let item = document.createElement('option')
            item.text += ` Valor ${this.numeros[x]} adicionado`
            item.value += `tab${x}`
            analisador.appendChild(item)
        }

    }

    validarNumero(numero) {
        let msg = ''

        for (var posicao = 0; posicao < this.numeros.length; posicao++) {

            if (this.numeros[posicao] == this.numeros) {
                this.existe = true;
                msg += 'Número já adicionado'
            }
        }




        if (msg != '') {
            alert(msg)
            return false
        }
        return true;
    }



    adicionar(numero) {
        this.numeros.push(numero)
    }
    lerDados() {
        let inseridonumero = Number(document.querySelector('input#numero').value)
        return inseridonumero;
    }


    validarCampo(numero) {
        let msg = ''

        if (this.numeros.indexOf(numero) != -1) {
            msg += "Número já inserido"
        }


        if (numero == '') {
            msg += 'Informe o numero'
        }

        if (numero < 0) {
            msg += 'Número menor que 0'
        }

        if (numero > 100) {
            msg += 'Número mairo que 100'
        }

        if (msg != '') {
            alert(msg)
            return false
        }

        return true;
    }

    apagar() {
        document.getElementById('numero').value = ''
        document.getElementById("texto").innerHTML = ""
        this.pp = 0
    }
}

var numero = new Numero()


