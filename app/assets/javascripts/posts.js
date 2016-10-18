// $(function() {
//   //hijack link
//   // $("a.load_comments").on("click", function(e){
//     //you clicked on the load comments link
//     // use that link
//
//     // fire ajax -- low level, very detailed
//     // $.ajax({
//     //   method: "GET",
//     //   url: this.href,
//     // }).success(function(data) {
//     //   //get the response
//     //   $("div.comments").html(data)
//     //   // want to load data into DOM
//     // }).error(function(no){
//     //   alert("we broke :(")
//     // });
//
//     // requesting html
//     // $.get(this.href).success(function(response){
//     // //   $("div.comments").html(response)
//     // // })
//     //
//     // // request json
//     // $.get(this.href).success(function(json){
//     //   // clear ol html
//     //   var $ol = $("div.comments ol")
//     //   $ol.html(" ")
//     //   //iterate over each comment within json
//     //   // with each comment, append li to ol
//     //
//     //   json.forEach(function(comment){
//     //     $ol.append("<li>" + comment.content + "</li>");
//     //   })
//     //
//     //   // inject
//     // })
//   //
//   //   e.preventDefault();
//   //
//   // })
//
//   $("a.load_comments").on("click", function(e){
//     $.ajax({
//       url: this.href,
//       dataType: 'script'
//     })
//     e.preventDefault();
//   })
// })

// $(function() {
//   $("#new_comment").on("submit", function (e) {
//
//     $.ajax({
//       type: ($("input[name='_method']").val() || this.method),
//       url: this.action,
//       data: $(this).serialize(), //json or query string serialization
//       success: function(response) {
//         $("#comment_content").val("");
//         var $ol = $("div.comments ol");
//         $ol.append(response)
//       }
//     });
//
//     // send post request to correct place
//
//
//     e.preventDefault();
//   })
// })
