// To show the modal for the add Assignment form
$('#addAssignment').on('click', function(e) {
  e.preventDefault();
  $('#modalAdd').modal('show').find('.modal-content').load($(this).attr('href'));
});
