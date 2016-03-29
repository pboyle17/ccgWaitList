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

});// end of document.ready
