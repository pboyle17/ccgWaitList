$(document).ready(function(){
  console.log('hello world!');

  $('.delete').click(function(){
    console.log('why you click me?');
    console.log(this.id);
    $.ajax({
      url:'/'+this.id,
      type:'DELETE',
      success: function(data){
        console.log('successfully deleted');
        window.location.reload();
      }
    });
  });// end of .delete selector

  $('.reload').click(function(){
    console.log('reloading the page');
    window.location.reload();
  });

  $('#table').click(function(){
    console.log('why you click me');
  });

  $('#add').click(function(){
    var form = document.getElementById('name');
    console.log(form);
  });


});// end of document.ready
