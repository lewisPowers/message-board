

console.log(streams);

function render() {
  $(document).ready(function(){
    var $tweets = $('#tweets');
    $tweets.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($tweets);
      index -= 1;
    }
  });
}

render();


/* **************************************
 *  UI
  * Heading
   * title of the application.
  * An Update Feed Button
  * Their Home Feed, with a list view displaying each of their friends' Tweets
  * Tweet Components, each identical in structure, complete with a:
    * Profile Photo
    * Username, with the format "@username"
    * Tweet Message
    * Human Readable Timestamp", like "2 minutes ago"
    * Set of Four Icons:
      * Comment
      * Retweet
      * Like
      * Share
  * An Individual User Feed, with a list view of each Tweet made by that specific user.
  * A Home Button, allowing the user to navigate back to the Home Feed.


 UX

Clicking the Update Feed button to re-render the currently displayed Feed with the most current list of Tweets.
Clicking a friend's username inside an individual Tweet to re-render the Feed with the most current list of that specific user's Tweets.
Clicking the Home Button to return to the Home Feed.
Mousing over a Tweet's Comment, Retweet, Like, and Share Icons to toggle a color change while the mouse's cursor is hovering over and icon.

****************************************  */