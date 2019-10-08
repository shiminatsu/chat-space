$(function(){
  function buildHTML(message){
    imgbranch = (message.image) ? `<img class= "message-title__image" src=${message.image} >` : ""; 
    var html =
    `<div class="message" data-message-id=${message.id}>
       <div class="message-member">
         <div class="message-member__user-name">
           ${message.user_name}
         </div>
         <div class="message-member__date">
           ${message.date}
         </div>  
       </div>
       <div class="message-title">
         <p class="message-title__content">
           ${message.content}
         </p>
        ${imgbranch}
       </div> 
     </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').append(html);
      $('.message').animate({scrollTop: $('.message')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error'); 
    })
    return false;
  })
});