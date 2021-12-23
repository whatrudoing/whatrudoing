// Player
var Player = function() {
  var _this = this,
  $playerAll = $('[data-player]'),
  $playerCurrent = null,
  $displayArtistName = null,
  $displayAlbumName = null,
  $displaySongName = null,
  $controlPrev = $('[data-player-prev]'),
  $controlPlay = $('[data-player-play]'),
  $controlNext = $('[data-player-next]'),
  index = 0,
  path = {
      audio: 'http://lab.islegend.com/challenge/music-player/assets/audio/'
  },
  playing = false,
  playlist = null,
  audio = null;

  _this.methods = {
      init: function() {
          _this.methods.bindUserEvents();
      },
      bindUserEvents: function() {

          $playerAll.on('click', function() {

              if ( !$(this).hasClass('player--open') ) {

                  // pause the current player
                  if (audio !== null) { 
                      audio.pause(); 
                      $playerCurrent.removeClass('player--open player--playing');
                  }

                  // get new player
                  $playerCurrent = $(this);
                  index = $playerCurrent.data('track');

                  // retrieve display elements
                  $displayArtistName = $playerCurrent.find('[data-player-album-artist]');
                  $displayAlbumName = $playerCurrent.find('[data-player-album-name]'),
                  $displaySongName = $playerCurrent.find('[data-player-album-song]');

                  // Audio
                  playlist = playlists[$playerCurrent.data('playlist')];
                  audio = $playerCurrent.find('audio').get(0);
                  audio.addEventListener('ended', function() { 
                      _this.methods.nextTrack();
                  });
                  if (!audio.src) { _this.methods.loadTrack(0); }
                  _this.methods.playTrack();

                  $playerCurrent.toggleClass('player--open');

              }

          });

          $controlPlay.on('click', function() {

              if ($playerCurrent.hasClass('player--playing')) {
                  _this.methods.pauseTrack();
              } else {
                  _this.methods.playTrack();
              }

          }); 

          $controlNext.on('click', function() {
              _this.methods.nextTrack();
          }); 

          $controlPrev.on('click', function() {
              _this.methods.prevTrack();
          }); 

      },
      loadTrack: function() {
          audio.src = path.audio + playlist.slug + '/' + playlist.tracks[index].file;
          $displayArtistName.text(playlist.tracks[index].artist);
          $displayAlbumName.text(playlist.tracks[index].album);
          $displaySongName.text(playlist.tracks[index].song);
          $playerCurrent.data('track', index);
      },
      playTrack: function() {
          $playerCurrent.addClass('player--playing');
          playing = true;
          audio.play();
      },
      pauseTrack: function() {
          $playerCurrent.removeClass('player--playing');
          playing = false;
          audio.pause();
      },
      nextTrack: function() {

          if ((index + 1) < playlist.trackCount) {
              index++;
          } else {
              index = 0;
          }

          _this.methods.loadTrack(index);

          if (playing) {
              audio.play();
          }

      },
      prevTrack: function() {

          if ((index - 1) > -1) {
              index--;
          } else {
              index = (playlist.trackCount - 1);
          }

          _this.methods.loadTrack(index);

          if (playing) {
              audio.play();
          }

      }
  };

  return _this.methods;

};

// Load
$(function() {
  player = new Player();
  player.init();
});

// Data
var playlists = {
  billionaires2014Compilation: {
      slug: "billionaires-2014-compilation",
      trackCount: 6,
      tracks: [
          {
              "track": 1,
              "artist": "하현상",
              "album": "Calibrate",
              "song": "하이웨이",
              "file": "another-monster-drop-it-low.mp3"
          }, {
              "track": 2,
              "artist": "하현상",
              "album": "Calibrate",
              "song": "등대",
              "file": "george-antonios-signals-in-the-dark.mp3"
          }, {
              "track": 3,
              "artist": "하현상",
              "album": "Calibrate",
              "song": "파랑 골목",
              "file": "hypercube-analog-circuits.mp3"
          }, {
              "track": 4,
              "artist": "하현상",
              "album": "Calibrate",
              "song": "죽은 새",
              "file": "klarity-second-nature.mp3"
          }, {
              "track": 5,
              "artist": "하현상",
              "album": "Calibrate",
              "song": "데려가 줘",
              "file": "clerks-drama.mp3"
          }, {
              "track": 6,
              "artist": "하현상",
              "album": "Calibrate",
              "song": "어떤 이의 편지",
              "file": "m00dy-voyage.mp3"
          }  
      ]
  },
  projectMayhem:  {
      slug: "project-mayhem",
      trackCount: 5,
      tracks: [
          {
              "track": 1,
              "artist": "하현상",
              "album": "My Poor Lonely Heart",
              "song": "Dawn",
              "file": "commence.mp3"
          }, {
              "track": 2,
              "artist": "하현상",
              "album": "My Poor Lonely Heart",
              "song": "Where Are You Now",
              "file": "bouncy-green-slime.mp3"
          },{
            "track": 3,
            "artist": "하현상",
            "album": "My Poor Lonely Heart",
            "song": "Gone Tonight",
            "file": "commence.mp3"
        }, {
            "track": 4,
            "artist": "하현상",
            "album": "My Poor Lonely Heart",
            "song": "Koh Samed",
            "file": "bouncy-green-slime.mp3"
        },{
          "track": 5,
          "artist": "하현상",
          "album": "My Poor Lonely Heart",
          "song": "망가지려나",
          "file": "commence.mp3"
      }
      ]
  },
  boxer:  {
      slug: 'boxer',
      trackCount: 5,
      tracks: [
          {
              "track": 1,
              "artist": "하현상",
              "album": "The Edge",
              "song": "Intro: Rise",
              "file": "fake-empire.mp3"
          }, {
              "track": 2,
              "artist": "하현상",
              "album": "The Edge",
              "song": "Nostalgia (Feat.Rohann)",
              "file": "mistaken-for-strangers.mp3"
          },{
            "track": 3,
            "artist": "하현상",
            "album": "The Edge",
            "song": "A book of love",
            "file": "fake-empire.mp3"
        }, {
            "track": 4,
            "artist": "하현상",
            "album": "The Edge",
            "song": "Not okay",
            "file": "mistaken-for-strangers.mp3"
        },{
          "track": 5,
          "artist": "하현상",
          "album": "The Edge",
          "song": "Close",
          "file": "fake-empire.mp3"
      }
          
      ]
  }
}