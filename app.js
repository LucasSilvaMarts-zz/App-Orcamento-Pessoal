// Classe despesa
class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano 
        this.mes = mes 
        this.dia = dia 
        this.tipo = tipo 
        this.descricao = descricao 
        this.valor = valor
    }
}

// Inserindo dados no local storage
class Bd {

    constructor() {
        let id = localStorage.getItem('id')

        if(id === null) {
            localStorage.setItem('id', 0)
        }
    }

    // Verifica se já existe um id no storage
    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d) { // 'd' = despesa
        
        let id = this.getProximoId()

        // Convertendo o item em JSON para armazenar no local storage
        localStorage.setItem(id, JSON.stringify(d))

        // Atualiza o documento id com o novo id recuperado
        localStorage.setItem('id', id)
    }    
}

let bd = new Bd() 


// Capturando as informações dos inputs html
function cadastrarDespesa() {
  // Referenciando as informações em variáveis para uso posterior  
  let ano = document.getElementById('ano')
  let mes =  document.getElementById('mes')
  let dia =  document.getElementById('dia')  
  let tipo =  document.getElementById('tipo')
  let descricao =  document.getElementById('descricao')
  let valor = document.getElementById('valor')

    
  let despesa = new Despesa(
        ano.value, 
        mes.value, 
        dia.value, 
        tipo.value, 
        descricao.value, 
        valor.value
  )

  bd.gravar(despesa)
}


