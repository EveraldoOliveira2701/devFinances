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
}


const Modal = new ModalClass();
class Modal2Class {
    constructor(){}
    close() {
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}


const Modal2 = new Modal2Class();

