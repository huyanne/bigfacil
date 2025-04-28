
  function getFiveRandomPosts(data) {
    var posts = data.feed.entry;
    var numPosts = posts.length;
    var randomIndexes = [];
    var limit = 5;

    while (randomIndexes.length < limit) {
      var randomIndex = Math.floor(Math.random() * numPosts);
      if (randomIndexes.indexOf(randomIndex) === -1) {
        randomIndexes.push(randomIndex);
      }
    }

    var randomPosts = [];
    for (var i = 0; i < limit; i++) {
      var post = posts[randomIndexes[i]];
      var postTitle = post.title.$t;
      var postUrl = post.link.filter(link => link.rel === 'alternate')[0].href;

      // Grabbing the poster image (optional, user-configurable)
      var postImageUrl = post.media$thumbnail ? post.media$thumbnail.url : '';
      var posterImage = postImageUrl ? '<img src="' + postImageUrl + '" alt="' + postTitle + '">' : '';

      randomPosts.push('<li>' + posterImage + '<a href="' + postUrl + '">' + postTitle + '</a></li>');
    }

    document.getElementById('random-posts-list').innerHTML = randomPosts.join('');
  }

  function loadScript(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  loadScript('/feeds/posts/summary?alt=json-in-script&max-results=100&callback=getFiveRandomPosts');
