document.getElementById('next-Photo').addEventListener("click", () => {
 event.preventDefault();
 const name2 = document.getElementById('users-name').value;
 const name3 = document.getElementById('users-last-name').value;
 const dnid = document.getElementById('users-dni').value;
 const selectEmpresa = document.getElementById('users-oficina').value;
 const correo = document.getElementById('users-email').value;
 const hour = new Date().toLocaleString();
 const dbVisitante = firebase.database().ref().child('visitante');
 dbVisitante.push({
   name: name2,
   apellidos:name3,
   dni: dnid,
   empresa: selectEmpresa,
   email: correo,
   hora: hour,
 })
})
   