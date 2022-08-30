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


