const menulogin =document.querySelector('.navbar-login');
const frmlogin =document.querySelector('.form-container-login');

menulogin.addEventListener('click', AbrirLogin);




function AbrirLogin(){
    console.log('clik icono login');

    console.log('no entra al if');
    frmlogin.classList.toggle('inactive');
    
}