const cover = document.getElementById("cover");
const disc = document.getElementById("disc");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const timer = document.getElementById("timer");
const duration = document.getElementById("duration");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");

const songs = [
  {
    title: "1.Dil Na Jaaneya",
    artist: "Akasa",
    coverPath: "cover1.jpg",
    discPath: "music1.mp3",
    duration: "1:17",
  },
  {
    title: "2.I like that",
    artist: "Buzzi",
    coverPath: "cover2.jpg",
    discPath: "music2.mp3",
    duration: "2:38",
  },
  {
    title: "Saibo re",
    artist: "Kirtidan Gadhvi",
    coverPath: "cover3.jpg",
    discPath: "music3.mp3",
    duration: "3:44",
  },
  {
    title: "Only mine",
    artist: "Darshan Raval",
    coverPath: "cover4.jpg",
    discPath: "music4.mp3",
    duration: "4:41",
  },
  {
    title: "Gangster Paradise",
    artist: "Coolio",
    coverPath: "Gangster.jpeg",
    discPath: "music5.wav",
    duration: "0:05",
  },
];

const STORAGE_KEY = "music-player-state";

let songIndex = 0;
let playbackIntent = false;
const params = new URLSearchParams(window.location.search);
const selectedSongParam = params.get("song");
const selectedSong =
  selectedSongParam === null ? NaN : Number(selectedSongParam);
const hasSelectedSong =
  Number.isInteger(selectedSong) &&
  selectedSong >= 0 &&
  selectedSong < songs.length;
const savedState = (() => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
})();

if (hasSelectedSong) {
  songIndex = selectedSong;
} else if (
  savedState &&
  Number.isInteger(savedState.songIndex) &&
  savedState.songIndex >= 0 &&
  savedState.songIndex < songs.length
) {
  songIndex = savedState.songIndex;
  playbackIntent = !!savedState.isPlaying;
}

function savePlayerState() {
  const state = {
    songIndex,
    currentTime: Number.isFinite(disc.currentTime) ? disc.currentTime : 0,
    isPlaying: playbackIntent,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage issues in restricted environments
  }
}

function loadSong(song, startTime = 0, shouldAutoPlay = false) {
  cover.src = song.coverPath;
  disc.src = `${song.discPath}?t=${Date.now()}`;
  disc.load();
  title.textContent = song.title;
  artist.textContent = song.artist;
  duration.textContent = song.duration;

  const restoreState = () => {
    if (Number.isFinite(disc.duration) && disc.duration > 0) {
      disc.currentTime = Math.min(startTime, disc.duration);
    }

    if (shouldAutoPlay) {
      disc.play().catch(() => {
        updatePlayPauseIcon();
      });
    }

    updatePlayPauseIcon();
  };

  disc.onloadedmetadata = restoreState;
}

const initialState = hasSelectedSong ? null : savedState;
loadSong(
  songs[songIndex],
  initialState && Number.isFinite(initialState.currentTime)
    ? initialState.currentTime
    : 0,
  hasSelectedSong || !!(initialState && initialState.isPlaying),
);

function playPauseMedia() {
  if (!disc.src) return;

  if (disc.paused) {
    playbackIntent = true;
    const playPromise = disc.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        updatePlayPauseIcon();
      });
    }
  } else {
    playbackIntent = false;
    disc.pause();
  }

  savePlayerState();
}

function updatePlayPauseIcon() {
  if (disc.paused) {
    play.textContent = "▶";
    play.setAttribute("aria-label", "Play");
  } else {
    play.textContent = "❚❚";
    play.setAttribute("aria-label", "Pause");
  }
}

function updateProgress() {
  if (!disc.duration) return;

  progress.style.width = (disc.currentTime / disc.duration) * 100 + "%";

  let minutes = Math.floor(disc.currentTime / 60);
  let seconds = Math.floor(disc.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  timer.textContent = `${minutes}:${seconds}`;
  savePlayerState();
}

function resetProgress() {
  progress.style.width = "0%";
  timer.textContent = "0:00";
}

function gotoPreviousSong() {
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex = songIndex - 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow) {
    const playPromise = disc.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        updatePlayPauseIcon();
      });
    }
  }
}

function gotoNextSong(playImmediately) {
  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex = songIndex + 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow || playImmediately) {
    const playPromise = disc.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        updatePlayPauseIcon();
      });
    }
  }
}

function setProgress(ev) {
  const totalWidth = this.clientWidth;
  const clickWidth = ev.offsetX;
  const clickWidthRatio = clickWidth / totalWidth;
  disc.currentTime = clickWidthRatio * disc.duration;
}

play.addEventListener("click", playPauseMedia);

disc.addEventListener("play", () => {
  playbackIntent = true;
  updatePlayPauseIcon();
  savePlayerState();
});
disc.addEventListener("pause", () => {
  playbackIntent = false;
  updatePlayPauseIcon();
  savePlayerState();
});
disc.addEventListener("timeupdate", updateProgress);
disc.addEventListener("ended", gotoNextSong.bind(null, true));
window.addEventListener("beforeunload", savePlayerState);

prev.addEventListener("click", gotoPreviousSong);

next.addEventListener("click", gotoNextSong.bind(null, false));

if (progressContainer) {
  progressContainer.addEventListener("click", setProgress);
}
