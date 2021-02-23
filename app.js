

function timelapse(dateOfTweet) {
  var now = new Date();
  var difference;
  var thenMinutes = dateOfTweet.getMinutes();
  var nowMinutes = now.getMinutes();
  if (thenMinutes !== nowMinutes) {
    difference = nowMinutes - thenMinutes;
    if (difference === 1) {
      return '1 minute ago';
    }
    return difference + ' minutes ago';
  } else {
    var thenSeconds = dateOfTweet.getSeconds();
    var nowSeconds = now.getSeconds();
    difference = nowSeconds - thenSeconds;
    if (difference === 1) {
      return '1 second ago';
    }
    return difference + ' seconds ago';
  }
}

function buildTweet(tweet, message, user) {
  var $tweets = $('#tweets');
  var $tweet = $('<div class="tweet"></div>');
  var $main = $('<div class="main"></div>');
  var $img = $('<img class="profile-pic">');
  var $message = $('<span class="message"></span>');
  var $footer = $('<div class="footer"></div>');
  var $handle = $('<span class="handle"></span>');
  var $timestamp = $('<span class="time"></span>');
  var time = timelapse(tweet.created_at);
  $img.attr({
    'src': './assets/img/' + tweet.user + '.png',
    'style': 'height: 90%; width: auto;'
  });
  $handle.text('@' + tweet.user);
  $timestamp.text(time);
  $message.text(tweet.message);
  $img.appendTo($main);
  $message.appendTo($main);
  $handle.appendTo($footer);
  $timestamp.appendTo($footer);
  $main.appendTo($tweet);
  $footer.appendTo($tweet);
  $tweet.appendTo($tweets);
}

function filterTweets(username) {
  $(document).ready(function(){
    var tweets = streams.users[username];
    console.log(tweets);
    var $home = $('#update');
    var $tweets = $('#tweets');
    $tweets.html('');
    $home.html('Home');
    var index = tweets.length - 1;
    while(index >= 0){
      var tweet = tweets[index];
      buildTweet(tweet, tweet.message, tweet[username]);
      index -= 1;
    }
  });

}

function render() {
  $(document).ready(function(){
    var $tweets = $('#tweets');
    var $home = $('#update');
    $tweets.html('');
    $home.html('Update Feed');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      buildTweet(tweet, tweet.message, tweet.user);
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