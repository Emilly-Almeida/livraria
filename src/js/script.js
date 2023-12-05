function initializeModal(modalID, buttonID) {

  var modal = document.getElementById(modalID);
  var btn = document.getElementById(buttonID);
  var span = modal.querySelector('.close');

  btn.addEventListener('click', function() {
    modal.style.display = "block";
  });


  span.addEventListener('click', function() {
    modal.style.display = "none";
  });


  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

window.addEventListener('load', function() {
  initializeModal('myModal1', 'myBtn1');
  initializeModal('myModal2', 'myBtn2');
  initializeModal('myModal3', 'myBtn3');
  initializeModal('myModal4', 'myBtn4');
  initializeModal('myModal5', 'myBtn5');
  initializeModal('myModal6', 'myBtn6'); 
  initializeModal('myModal7', 'myBtn7'); 
  initializeModal('myModal8', 'myBtn8');
  initializeModal('myModal9', 'myBtn9');
  initializeModal('myModal10', 'myBtn10');
  initializeModal('myModal11', 'myBtn11');
  initializeModal('myModal12', 'myBtn12');
  initializeModal('myModal13', 'myBtn13'); 
  initializeModal('myModal14', 'myBtn14'); 
});