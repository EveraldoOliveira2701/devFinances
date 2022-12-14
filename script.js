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
const Modal = new ModalClass();

const Transaction = {
    all: [{
   
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
    }
    ],
    //adiciona nova linha na tabela
    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
    },
    remove(index){
    Transaction.all.splice(index, 1)
    App.reload()
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
    clearTransactions(){
        DOM.transactionsContainer.innerHTML = ""
    }
}
const Utils = {
    formatAmount(value) {
        value = Number(value) * 100
        return value
    },
    formatDate(date){
        const splittedDate = date.split("-") 
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`       
    },
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g , "")
        value = Number(value)/100
        value = value.toLocaleString("pt-BR", { style : "currency", currency :'BRL'})      
        return signal + value
    }
}
const Form = {
    //verificar se as informações foram preenchidas
   description: document.querySelector('input#description'),
   amount: document.querySelector('input#amount'),
   date: document.querySelector('input#date'),
   getValues(){
    return{
        description: Form.description.value,
        amount: Form.amount.value,
        date: Form.date.value
    }
   },
   validateFields(){
    const { description, amount, date} = Form.getValues()
    if (description.trim() === "" ||
        amount.trim() === "" ||
        date.trim() === "" ) {
        throw new Error("Por favor, preencha todos os campos.")
    }
   },
   formatValues(){
    let {description, amount, date } = Form.getValues()
    amount = Utils.formatAmount(amount)
    date = Utils.formatDate(date)
   return {
    description, amount, date
   }

   },
   clearFields(){
    Form.description.value = ""
    Form.amount.value = ""
    Form.date.value = ""
   },
   submit(event){
       event.preventDefault()
        try{
            Form.validateFields() 
            const transaction = Form.formatValues()  //formatar os dados para salvar
            Transaction.add(transaction) //salvar
            Form.clearFields() //limpar o form
        }
       catch (error) {alert(error.message)}
   }      
    //close modal
    //atualizar app
}
const App = {
    init(){    
    Transaction.all.forEach(transaction => {
        DOM.addTransaction(transaction)
       })
        DOM.updateBalance()
    },
    reload(){
        DOM.clearTransactions()
        App.init()
    },
}
App.init()
