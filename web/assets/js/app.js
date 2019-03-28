// $(document).ready(function() {
//   console.log('alio jquery');
// });
$(function(){
  $('#burger').on('click', function(){
    $('#side-menu').toggleClass('side-menu--closed');
    $('body').toggleClass('sidenav-closed');
  })

   $('#notifications').on('click', function() {
   $('#side-menu-right').toggleClass('side-menu--right--closed');
})
  var basename = $('#side-menu').find('li.active span').text();
  $('#basename').text(basename)
  .attr('href', '/' + basename.toLowerCase() + '.html');
});
