const menulogin =document.querySelector('.navbar-login');
const login =document.querySelector('.login');
const frmlogin =document.querySelector('.form-container-login');

menulogin.addEventListener('click', AbrirLogin);




function AbrirLogin(){
    console.log('clik icono login');

        console.log('no entra al if');
        login.classList.toggle('inactive')
        frmlogin.classList.toggle('inactive');
    
}