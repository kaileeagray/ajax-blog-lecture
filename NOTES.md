1. The ability to load the comments for a post via AJAX

###Manually Trigger AJAX - Client Side Logic Model - Generic - Used in Ember, Angular, React, and jQuery
    A. We need to hijack the click event of the "Load Comments Link" to fire an ajax request
    $("a[href='/posts/1/comments']").on('click', function(e) {e.preventDefault(); alert('HI');})

    $(function() {

      $("a.load_comments").on("click", function(e){
        e.preventDefault();
      });
    })


    B. Once we're in that click event, we need to fire an ajax request to get the DATA for the posts comments
      When the server responds with HTML
    C. Once we have that data, we need to place it in the DOM (add that DATA to the page)
      When the server responds with JSON

      $.get(this.href).success(function(response){
        $("div.comments").html(response)
      })

    D. Iterate the JSON data and inject into the DOM as you please.



###Ask the Server for What to Do Via AJAX - Server Side Ajax Model - Remote True - Only in Rails
    A. Bind a generic AJAX Request for more instructions to the click event
        (asking the server for JS)

    B. Have the server render some JS as a response.

    $("a.load_comments").on("click", function(e){
      $.ajax({
        url: this.href,
        dataType: 'script'
      })
      e.preventDefault();
    })


    C. the Browser (jQuery) will execute the JS Response.
    :remote => true
    automatically triggers a click event -- remote true pattern

2. The ability to submit a new comment via AJAX
