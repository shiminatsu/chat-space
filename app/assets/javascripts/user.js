$(document).on('turbolinks:load', function(){

  var search_list = $("#user-search-result");
  var error_msg = $("#member-append");
  var chatmember_list = $("#chat-group-user");

    function appendUser(user){
        var html = 
        `<div class="chat-group-user clearfix">
          <p class="chat-group-user__name">${user.name}</p>
          <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
        </div>`;
    search_list.append(html);
    }

    function appendErr(msg){
        var html = 
          `<div class="chat-group-user clearfix">
            <p class="chat-group-user__name">${msg}</p>
          </div>`;
      error_msg.append(html);
    }

    function appendMembers(name, user_id){
      var html = 
      `<div class='chat-group-user'>
        <input name='group[user_ids][]' type='hidden' value=${user_id}>
          <p class='chat-group-user__name'>${name}</p>
        <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
      </div>`;
      chatmember_list.append(html);
  } 

    $('#user-search-field').on('keyup', function(e){
    var input = $("#user-search-field").val();

    $.ajax({
        url:  '/users',
        type: 'GET',      
        data: { keyword: input}, 
        dataType: 'json'
    })

  .done(function(users){

      if (input.length === 0) {
          $('#user-search-result').empty();
        }

      else if (input.length !== 0){
          $('#user-search-result').empty();
          users.forEach(function(user){
              appendUser(user)
          });
      }

      else {
          $('#user-search-result').empty();
          appendErr("一致するユーザーが見つかりません");
      }
  })

  .fail(function() {
      alert('ユーザー検索に失敗しました');
  });

 });

 $(function () {
  $(document).on("click", '.user-search-add.chat-group-user__btn.chat-group-user__btn--add', function () {
      var name = $(this).attr("data-user-name");
      var user_id = $(this).attr("data-user-id");
      $(this).parent().remove();
      appendMembers(name, user_id);
  });
  $(document).on("click", '.user-search-remove.chat-group-user__btn.chat-group-user__btn--remove.js-remove-btn', function () {
      $(this).parent().remove();
  });

});
 
});