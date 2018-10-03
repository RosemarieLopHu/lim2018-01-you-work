/** iniciando slider **/
$(document).ready(function() {
    $('select').material_select();
  });
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
/* captura de imagen */
function update(stream) {
  document.querySelector('video').src = stream.url;
}
$(document).ready(function(){
  $('select').formSelect();
});