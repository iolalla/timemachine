function play(videoName) {

var obj, source;

obj = document.createElement('video');
$(obj).attr('id', videoName);
$(obj).attr('class', 'video-js vjs-default-skin');
$(obj).attr('controls', ' ');
$(obj).attr('autoplay', ' ');
$(obj).attr('width', '720');
$(obj).attr('height', '480');
$(obj).attr('preload', 'auto');
$(obj).attr('data-setup', '{}');

source = document.createElement('source');
$(source).attr('type', 'video/webm');
$(source).attr('src', 'videos/' + videoName + '.webm');

$("#video").empty();
$("#video").append(obj);
$(obj).append(source);

}

function loadMovies() {
   $("#content").empty();
   $.getJSON('/listFiles', function(data) {
       data.forEach(function(entry) {
          var name = entry.split("-");
          var hour = name[1].slice(0,2);
          var minute = name[1].slice(2,4);
	  $('#content').append('<li><a href="#" onclick="play(\''+ entry+'\')">'+hour+':'+minute+'</a></li>');
       });
  })
}
