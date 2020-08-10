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

  gravar(despesa)
}

// Função que armazena os dados no local storage, 'd' = despesa
function gravar(d) {
    // Convertendo o item em JSON para armazenar no local storage
    localStorage.setItem('despesa', JSON.stringify(d))
}