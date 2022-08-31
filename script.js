// const Modal = {            
//     open: () => {  
//         document.querySelector('.modal-overlay')
//         .classList.add('active')
//     },
//     close: () => {
//         document.querySelector('.modal-overlay')
//         .classList.remove('active')
//     }
// }
class ModalClass {
    constructor(){}
    open() {
        document.querySelector('.modal-overlay')
        .classList.add('active')
    }
    close() {
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}
//const Modal = new ModalClass();
const transactions = [{
   
    description: "Luz",
    amount: -50000,
    date: '23/09/2022',
},
{ 
    description: "Website",
    amount: 500000,
    date: '03/09/2022',
},
{ 
    description: "Água",
    amount: -20000,
    date: '29/09/2022',
},
{ 
    description: "App",
    amount: 20000,
    date: '29/09/2022',
},
]
const Transaction = {
    all: transactions,
    //adiciona nova linha na tabela
    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
    },
    remove(index){

    },
    incomes(){
        let income = 0;
        Transaction.all.forEach( transaction => {
            if (transaction.amount > 0) {
            income += transaction.amount;         
        } 
    })
    //somando entradas
    return income;
    },
    expenses(){
        let expenses = 0;
        Transaction.all.forEach( transaction => {
            if (transaction.amount < 0) {
            expenses += transaction.amount;         
        } 
     })
    //somar saidas
    return expenses;
    },
    total(){
    //entrada - saidas
    return Transaction.incomes() + Transaction.expenses();
    }
}
    //substituindo os dados do HTML com os dados do JS
const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index){
const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        const amount = Utils.formatCurrency(transaction.amount)
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="myImagens/lixo.svg" alt="Apagar registro">
            </td> `
        return html
    },
        //somatória
    updateBalance(){
        document.getElementById('enterDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.incomes())
        document.getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.expenses())
        document.getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.total())
    },
    clearTudo(){
        DOM.transactionsContainer.innerHTML = ""
    }
}
const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g , "")
        value = Number(value)/100
        value = value.toLocaleString("pt-BR", { style : "currency", currency :'BRL'})
        console.log(value)      
        return signal + value
    }
}
const App = {
    init(){    
    Transaction.all.forEach(transaction => {
        DOM.addTransaction(transaction)
       })
        DOM.updateBalance()
    },
    reload(){
        DOM.clearTudo()
        App.init()
    },
}
App.init()
