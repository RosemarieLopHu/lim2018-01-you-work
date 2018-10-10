const vista =()=>{
 /*  const vistaVist = document.getElementById('contenedor'); */
  let ref = firebase.database().ref('visitante/');
  ref.once('value',data =>{
  
  data.forEach(element => {
    let keyVisitor = element.key; 
    let DatosVisitante = visitante.val();

    document.getElementById('contenedor').innerHTML += `
    <tr data-key = "${keyVisitor}">
      <td>${DatosVisitante.userTime}</td>
      <td>${DatosVisitante.usersDni}</td>
      <td>${DatosVisitante.usersEmail}</td>
      <td>${DatosVisitante.usersName}</td>
      <td>${DatosVisitante.usersLastName}</td>
      <td><img src=${url} width='50px' /></td>
    </tr>
    `;

    
  });
  })

}

/*  //Ingreso administrador
firebase.database().ref('Empleados/').on('value', function(snap){
    usersObjects = Object.keys(snap.val());
    usersObjects.forEach(function(element) {
      if(localStorage.currentAdminEmail == DatosVisitante.employeeEmail) {
        document.getElementById('nameAdmin').innerHTML = DatosVisitante.employeeName;
      }
    });
  }) */
   //revisar visitas
/* firebase.database().ref('visitante/').on('value', function(snap){

    document.getElementById('adminVisits').innerHTML = '';

    visitObjects = Object.keys(snap.val());
    console.log (visitObjects)
    visitObjects.forEach(function(element) {
      if(localStorage.currentAdminEmail == DatosVisitante.usersAnfitrionEmail) {
        myURLPhotoUser = 'photos/'+ DatosVisitante.usersDni +'.jpg';
        var storageRef = firebase.storage().ref(myURLPhotoUser);
        storageRef.getDownloadURL().then(function(url) {
          
          document.getElementById('adminVisits').innerHTML += `
          <tr>
            <td>${DatosVisitante.userTime}</td>
            <td>${DatosVisitante.usersDni}</td>
            <td>${DatosVisitante.usersEmail}</td>
            <td>${DatosVisitante.usersName}</td>
            <td>${DatosVisitante.usersLastName}</td>
            <td><img src=${url} width='50px' /></td>
          </tr>
          `;
        });
  
      }
    });
  })   */