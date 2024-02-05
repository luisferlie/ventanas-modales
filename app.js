//se identifican los elemntos del dom que  se van a manipular
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//se añade/quita visualizacion añadiendo/quitando clases
const openModal = function () {
    modal.classList.remove('hidden');
    console.log('abriendo')
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

/* for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal); */

 //Se  prueba con foreach en lugar de for  para añadir los listeners para abrir el modal 
 //  a los botones del nodelist btnsOpenModal 
    btnsOpenModal.forEach(elem => {
    elem.addEventListener('click', openModal)
})


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);



//se añade funcionalidad de cierre de modal pulsando la tecla Escape que ejecuta la funcion
//de cierre de modal closeModal()

document.addEventListener('keydown', function (e) {
    // console.log(e, e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});