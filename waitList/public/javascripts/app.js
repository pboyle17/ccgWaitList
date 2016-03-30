$(document).ready(function(){

  var scroll = function(){
    console.log('scroll function initiated');
    console.log(window.location.hash);
    if(window.location.hash =='#13NL'){
      console.log('changing location');
      window.location.hash='#125PLO';
      console.log(window.location.hash);
    } else if (window.location.hash == '#125PLO') {
      window.location.hash='#11NL';
    } else if(window.location.hash == '#11NL'){
      window.location.hash = '#13NL';
    }
  };

  var scrollingPage=setInterval(function () {
      scroll();
    }, 5000);

  var stop = function(){
    clearInterval(scrollingPage);
  }

  $('.resume').click(function(){
    console.log('resuming scroll');
    window.location.hash = '#13NL';
    $('#message').addClass('alert-info');
    $('#message').html('scroll has been resumed');
    scrollingPage();
  });

  $('.stop').click(function(){
    console.log('stopping scroll on the page');
    $('#message').addClass('alert-info');
    $('#message').html('scroll has been stopped');
    setTimeout(function () {
      $('#message').removeClass('alert-info');
      $('#message').html('');
    }, 3000);
    stop();
  });

  $('.delete').click(function(){
    $('#message').addClass('alert-danger');
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
    $('#message').addClass('alert-success');
    $('#message').html('adding player...'+form.value);
  });

  $('.tableChange').click(function(){
    console.log('yo bro... can i get a table change?');
  });

});// end of document.ready
