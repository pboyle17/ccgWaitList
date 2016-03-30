$(document).ready(function(){

  $('.delete').click(function(){
    $('#message').html('removing player from wait list .....');
    $.ajax({
      url:'/'+this.id,
      type:'DELETE',
      success: function(data){
        console.log('successfully deleted');
        window.location.reload();
      }
    });
  });// end of .delete selector

  $('.deleteTable').click(function(){
    console.log('proceeding with deleting the table');
    console.log(this.id);
    $.ajax({
      url:'/tables/'+this.id,
      type:'DELETE',
      success: function(data){
        console.log('table successfully deleted');
        window.location.reload();
      }
    });
  });// end of .delete selector


  $('#table').click(function(){
    console.log('why you click me');
  });

  $('#add').click(function(){
    var form = document.getElementById('name');
    $('#message').html('adding player...'+form.value);
  });

  $('.tableChange').click(function(){
    console.log('yo bro... can i get a table change?');
  });

});// end of document.ready
