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
    var time = document.getElementById('time');
    console.log(time);
    console.log('set the new date');
  });

});// end of document.ready
