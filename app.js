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
  var $icons = $('<span class="icons"></span>');
  for (let i = 1; i <=4; i++) {
    var $span = $('<span class="span"></span>');
    var $icon = $('<img src="assets/icons/icon-' + i +'.png">');
    $icon.attr('style', 'height: 15px; wight: auto;')
    $icon.appendTo($span);
    $span.appendTo($icons);
  }
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
  $icons.appendTo($footer)
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