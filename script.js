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

function resolveAssetPath(assetPath) {
  return new URL(assetPath, window.location.href).toString();
}

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
    title: "Khat",
    artist: "Navjot Ahuja",
    coverPath: "cover5.jpg",
    discPath: "music5.mp3",
    duration: "4:56",
  },
  {
    title: "Lag Ja Gale",
    artist: "Sanam",
    coverPath: "cover6.jpeg",
    discPath: "music6.mp3",
    duration: "4:01",
  },
  {
    title: "Darkhaast",
    artist: "Mithoon, Arijit Singh, Sunidhi Chauhan, Sayeed Quadri",
    coverPath: "cover7.jpeg",
    discPath: "music7.mp3",
    duration: "6:14",
  },
  {
    title: "Ruaan",
    artist: "Pritam, Arijit Singh, Irshad Kamil",
    coverPath: "cover8.jpeg",
    discPath: "music8.mp3",
    duration: "4:18",
  },
  {
    title: "Jogi",
    artist: "Yasser Desai, Aakanksha Sharma",
    coverPath: "cover9.jpeg",
    discPath: "music9.mp3",
    duration: "4:33",
  },
  {
    title: "Hosanna",
    artist: "A.R. Rahman, Leon D'souza, Suzanne D'Mello",
    coverPath: "cover10.jpeg",
    discPath: "music10.mp3",
    duration: "5:31",
  },
  {
    title: "Leja",
    artist: "Lost Stories, JAI DHIRN",
    coverPath: "cover11.jpeg",
    discPath: "music11.mp3",
    duration: "3:18",
  },
  {
    title: "Awara",
    artist: "Salman Ali, Muskaan, Sajid-Wajid",
    coverPath: "cover12.jpeg",
    discPath: "music12.mp3",
    duration: "4:57",
  },
  {
    title: "Vaara Re",
    artist: "Ajay Gogavale",
    coverPath: "cover13.jpeg",
    discPath: "music13.mp3",
    duration: "3:57",
  },
  {
    title: "Tum",
    artist: "Atif Aslam",
    coverPath: "cover14.jpeg",
    discPath: "music14.mp3",
    duration: "4:40",
  },
  {
    title: "Saiyyan",
    artist: "Kailash Kher, Paresh Kamath, Naresh Kamath",
    coverPath: "cover15.jpeg",
    discPath: "music15.mp3",
    duration: "5:44",
  },
  {
    title: "Thodi Der",
    artist: "Farhan Saeed, Shreya Ghoshal, Kumaar",
    coverPath: "cover16.jpeg",
    discPath: "music16.mp3",
    duration: "4:56",
  },
];

const STORAGE_KEY = "music-player-state";

let songIndex = 0;
let playbackIntent = false;
let pendingRestoreTime = null;
let activeAudioObjectUrl = null;
let songLoadGeneration = 0;
let isSeekFallbackLoading = false;
let isPointerSeeking = false;
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
    currentTime:
      pendingRestoreTime ??
      (Number.isFinite(disc.currentTime) ? disc.currentTime : 0),
    isPlaying: playbackIntent,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage issues in restricted environments
  }
}

function canSeekToTime(time) {
  for (let index = 0; index < disc.seekable.length; index += 1) {
    if (
      time >= disc.seekable.start(index) &&
      time <= disc.seekable.end(index)
    ) {
      return true;
    }
  }

  return false;
}

function loadSong(song, startTime = 0, shouldAutoPlay = false) {
  const loadGeneration = ++songLoadGeneration;
  isSeekFallbackLoading = false;
  if (activeAudioObjectUrl) {
    URL.revokeObjectURL(activeAudioObjectUrl);
    activeAudioObjectUrl = null;
  }

  pendingRestoreTime =
    Number.isFinite(startTime) && startTime > 0 ? startTime : null;
  disc.onprogress = null;
  disc.oncanplay = null;
  cover.src = resolveAssetPath(song.coverPath);
  disc.src = resolveAssetPath(song.discPath);
  title.textContent = song.title;
  artist.textContent = song.artist;
  duration.textContent = song.duration;

  const restorePosition = () => {
    if (!Number.isFinite(disc.duration) || disc.duration <= 0) return;

    const targetTime = Math.min(startTime, disc.duration);
    if (!canSeekToTime(targetTime)) return;

    disc.currentTime = targetTime;
    pendingRestoreTime = null;
    disc.onprogress = null;
    disc.oncanplay = null;
  };

  const finishLoading = () => {
    restorePosition();

    if (pendingRestoreTime !== null) {
      disc.onprogress = restorePosition;
      disc.oncanplay = restorePosition;
    }

    if (shouldAutoPlay) {
      void attemptPlayAudio();
    } else {
      playbackIntent = false;
      updatePlayPauseIcon();
    }

    savePlayerState();
  };

  const restoreState = async () => {
    restorePosition();

    if (pendingRestoreTime !== null) {
      try {
        const response = await fetch(resolveAssetPath(song.discPath));
        if (!response.ok) throw new Error("Could not fetch audio for seeking");
        const audioBlob = await response.blob();
        if (loadGeneration !== songLoadGeneration) return;

        activeAudioObjectUrl = URL.createObjectURL(audioBlob);
        disc.onloadedmetadata = finishLoading;
        disc.src = activeAudioObjectUrl;
        disc.load();
        return;
      } catch {
        if (loadGeneration !== songLoadGeneration) return;
      }
    }

    finishLoading();
  };

  disc.onloadedmetadata = restoreState;
  disc.load();
}

const navigationEntry = performance.getEntriesByType("navigation")[0];
const isReloadingCurrentSong =
  hasSelectedSong &&
  navigationEntry?.type === "reload" &&
  savedState?.songIndex === selectedSong;
const initialState =
  hasSelectedSong && !isReloadingCurrentSong ? null : savedState;
loadSong(
  songs[songIndex],
  initialState && Number.isFinite(initialState.currentTime)
    ? initialState.currentTime
    : 0,
  isReloadingCurrentSong
    ? !!(initialState && initialState.isPlaying)
    : hasSelectedSong || !!(initialState && initialState.isPlaying),
);

function attemptPlayAudio() {
  if (!disc.src) return false;

  if (!disc.paused) {
    playbackIntent = true;
    updatePlayPauseIcon();
    savePlayerState();
    return true;
  }

  playbackIntent = true;
  const playPromise = disc.play();

  if (playPromise && typeof playPromise.then === "function") {
    playPromise
      .then(() => {
        playbackIntent = true;
        updatePlayPauseIcon();
        savePlayerState();
      })
      .catch(() => {
        playbackIntent = false;
        updatePlayPauseIcon();
        savePlayerState();
      });
    return true;
  }

  updatePlayPauseIcon();
  savePlayerState();
  return true;
}

function playPauseMedia() {
  if (!disc.src) return;

  if (disc.paused) {
    void attemptPlayAudio();
  } else {
    playbackIntent = false;
    disc.pause();
    updatePlayPauseIcon();
    savePlayerState();
  }
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
  timer.textContent = formatTime(disc.currentTime);
  progressContainer.setAttribute("aria-valuemax", String(disc.duration));
  progressContainer.setAttribute("aria-valuenow", String(disc.currentTime));
  progressContainer.setAttribute("aria-valuetext", timer.textContent);
  savePlayerState();
}

function formatTime(time) {
  const totalSeconds = Math.max(0, Math.floor(time));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
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
    void attemptPlayAudio();
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
    void attemptPlayAudio();
  }
}

function getTimeFromPointer(clientX) {
  const bounds = progressContainer.getBoundingClientRect();
  const ratio = Math.max(
    0,
    Math.min(1, (clientX - bounds.left) / bounds.width),
  );
  return ratio * disc.duration;
}

function previewProgress(time) {
  const previewTime = Math.max(0, Math.min(time, disc.duration));
  progress.style.width = (previewTime / disc.duration) * 100 + "%";
  timer.textContent = formatTime(previewTime);
  progressContainer.setAttribute("aria-valuenow", String(previewTime));
  progressContainer.setAttribute("aria-valuetext", timer.textContent);
}

function setProgress(ev) {
  previewProgress(getTimeFromPointer(ev.clientX));
}

async function seekToTime(time) {
  if (!Number.isFinite(disc.duration) || disc.duration <= 0) return;

  const targetTime = Math.max(0, Math.min(time, disc.duration));
  pendingRestoreTime = targetTime;

  if (canSeekToTime(targetTime)) {
    disc.currentTime = targetTime;
    pendingRestoreTime = null;
    updateProgress();
    savePlayerState();
    return;
  }

  if (isSeekFallbackLoading) return;

  const loadGeneration = songLoadGeneration;
  isSeekFallbackLoading = true;

  try {
  const response = await fetch(resolveAssetPath(songs[songIndex].discPath));
    if (!response.ok) throw new Error("Could not fetch audio for seeking");
    const audioBlob = await response.blob();
    if (loadGeneration !== songLoadGeneration) return;

    if (activeAudioObjectUrl) URL.revokeObjectURL(activeAudioObjectUrl);
    activeAudioObjectUrl = URL.createObjectURL(audioBlob);
    disc.onloadedmetadata = () => {
      if (loadGeneration !== songLoadGeneration) return;

      disc.currentTime = Math.min(
        pendingRestoreTime ?? targetTime,
        disc.duration,
      );
      pendingRestoreTime = null;
      isSeekFallbackLoading = false;
      if (playbackIntent) {
        void attemptPlayAudio();
      }
      updateProgress();
      updatePlayPauseIcon();
    };
    disc.src = activeAudioObjectUrl;
    disc.load();
  } catch {
    if (loadGeneration !== songLoadGeneration) return;
    isSeekFallbackLoading = false;
    pendingRestoreTime = null;
    updateProgress();
  }
}

play.addEventListener("click", playPauseMedia);

disc.addEventListener("play", () => {
  playbackIntent = true;
  updatePlayPauseIcon();
  savePlayerState();
});
disc.addEventListener("pause", () => {
  if (!isSeekFallbackLoading) playbackIntent = false;
  updatePlayPauseIcon();
  savePlayerState();
});
disc.addEventListener("timeupdate", updateProgress);
disc.addEventListener("ended", gotoNextSong.bind(null, true));
window.addEventListener("beforeunload", savePlayerState);

prev.addEventListener("click", gotoPreviousSong);

next.addEventListener("click", gotoNextSong.bind(null, false));

if (progressContainer) {
  progressContainer.setAttribute("role", "slider");
  progressContainer.setAttribute("tabindex", "0");
  progressContainer.setAttribute("aria-label", "Song position");
  progressContainer.setAttribute("aria-valuemin", "0");
  progressContainer.setAttribute("aria-valuemax", String(disc.duration || 0));
  progressContainer.setAttribute("aria-valuenow", "0");

  progressContainer.addEventListener("pointerdown", (ev) => {
    if (!disc.duration) return;
    isPointerSeeking = true;
    progressContainer.classList.add("is-seeking");
    progressContainer.setPointerCapture(ev.pointerId);
    setProgress(ev);
  });

  progressContainer.addEventListener("pointermove", (ev) => {
    if (isPointerSeeking) setProgress(ev);
  });

  progressContainer.addEventListener("pointerup", (ev) => {
    if (!isPointerSeeking) return;
    isPointerSeeking = false;
    progressContainer.classList.remove("is-seeking");
    void seekToTime(getTimeFromPointer(ev.clientX));
  });

  progressContainer.addEventListener("pointercancel", () => {
    isPointerSeeking = false;
    progressContainer.classList.remove("is-seeking");
    updateProgress();
  });

  progressContainer.addEventListener("keydown", (ev) => {
    if (!disc.duration) return;

    let targetTime;
    switch (ev.key) {
      case "ArrowRight":
      case "ArrowUp":
        targetTime = disc.currentTime + 5;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        targetTime = disc.currentTime - 5;
        break;
      case "PageUp":
        targetTime = disc.currentTime + 30;
        break;
      case "PageDown":
        targetTime = disc.currentTime - 30;
        break;
      case "Home":
        targetTime = 0;
        break;
      case "End":
        targetTime = disc.duration;
        break;
      default:
        return;
    }

    ev.preventDefault();
    previewProgress(targetTime);
    void seekToTime(targetTime);
  });
}
