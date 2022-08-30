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
    id: 1,
    description: "Luz",
    amount: -50000,
    date: '23/09/2022',
},
{ id:2,
    description: "Website",
    amount: 500000,
    date: '03/09/2022',
},
{ id: 3,
    description: "Água",
    amount: -20000,
    date: '29/09/2022',
},
{ id: 4,
    description: "App",
    amount: 20000,
    date: '29/09/2022',
},
]
const Transaction = {
    //somando entradas
    incomes(){

    },
    expenses(){
//somar saidas
    },
    total(){
//entrada - saidas
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

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="myImagens/lixo.svg" alt="Apagar registro">
            </td>
        
        `
        return html
    }
}
const
transactions.forEach(function (transaction) {
    DOM.addTransaction(transaction)
})
