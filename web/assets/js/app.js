// $(document).ready(function() {
//   console.log('alio jquery');
// });
$(function(){
  $('#burger').on('click', function(){
    $('#side-menu').toggleClass('side-menu--closed')
  })
});
$(function(){
  $('#burger').on('click', function(){
    $('#dashboard').toggleClass('section-container--moved')
  })
});
