document.getElementById('registerAdmin').style.display = 'none';
document.getElementById('btnRegisterAdmin').addEventListener('click', ()=>{
  document.getElementById('registerAdmin').style.display = 'block';
  document.getElementById('loginAdmin').style.display = 'none';
});
document.getElementById('Login-Admin').addEventListener('click', ()=>{
  document.getElementById('registerAdmin').style.display = 'none';
  document.getElementById('loginAdmin').style.display = 'block';
});
document.getElementById('Registro-Users').addEventListener('click', ()=>{
  adminRegister();
});
document.getElementById('Enviar-Update').addEventListener('click', ()=>{
  loginAdmin();
});