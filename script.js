const cover = document.getElementById("cover");
const disc = document.getElementById("disc");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playbackMessage = document.getElementById("playback-message");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const timer = document.getElementById("timer");
const duration = document.getElementById("duration");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const favorite = document.getElementById("favorite");
const shareTrack = document.getElementById("share-track");
const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");

function resolveAssetPath(assetPath) {
  return new URL(assetPath, window.location.href).toString();
}

function showPlaybackMessage(message) {
  if (!playbackMessage) return;

  playbackMessage.textContent = message;
  playbackMessage.hidden = !message;
}

const songs = [
  {
    title: "Dil Na Jaaneya",
    artist: "Akasa",
    coverPath: "cover/cover1.jpg",
    discPath: "song/music1.mp3",
    duration: "1:17",
  },
  {
    title: "I like that",
    artist: "Buzzi",
    coverPath: "cover/cover2.jpg",
    discPath: "song/music2.mp3",
    duration: "2:38",
    category: "Hollywood",
  },
  {
    title: "Saibo re",
    artist: "Kirtidan Gadhvi",
    coverPath: "cover/cover3.jpg",
    discPath: "song/music3.mp3",
    duration: "3:44",
    category: "Gujarati",
  },
  {
    title: "Only mine",
    artist: "Darshan Raval",
    coverPath: "cover/cover4.jpg",
    discPath: "song/music4.mp3",
    duration: "4:41",
  },
  {
    title: "Khat",
    artist: "Navjot Ahuja",
    coverPath: "cover/cover5.jpg",
    discPath: "song/music5.mp3",
    duration: "4:56",
  },
  {
    title: "Lag Ja Gale",
    artist: "Sanam",
    coverPath: "cover/cover6.jpeg",
    discPath: "song/music6.mp3",
    duration: "4:01",
  },
  {
    title: "Darkhaast",
    artist: "Mithoon, Arijit Singh, Sunidhi Chauhan, Sayeed Quadri",
    coverPath: "cover/cover7.jpeg",
    discPath: "song/music7.mp3",
    duration: "6:14",
  },
  {
    title: "Ruaan",
    artist: "Pritam, Arijit Singh, Irshad Kamil",
    coverPath: "cover/cover8.jpeg",
    discPath: "song/music8.mp3",
    duration: "4:18",
  },
  {
    title: "Jogi",
    artist: "Yasser Desai, Aakanksha Sharma",
    coverPath: "cover/cover9.jpeg",
    discPath: "song/music9.mp3",
    duration: "4:33",
  },
  {
    title: "Hosanna",
    artist: "A.R. Rahman, Leon D'souza, Suzanne D'Mello",
    coverPath: "cover/cover10.jpeg",
    discPath: "song/music10.mp3",
    duration: "5:31",
  },
  {
    title: "Leja",
    artist: "Lost Stories, JAI DHIRN",
    coverPath: "cover/cover11.jpeg",
    discPath: "song/music11.mp3",
    duration: "3:18",
  },
  {
    title: "Awara",
    artist: "Salman Ali, Muskaan, Sajid-Wajid",
    coverPath: "cover/cover12.jpeg",
    discPath: "song/music12.mp3",
    duration: "4:57",
  },
  {
    title: "Vaara Re",
    artist: "Ajay Gogavale",
    coverPath: "cover/cover13.jpeg",
    discPath: "song/music13.mp3",
    duration: "3:57",
  },
  {
    title: "Tum",
    artist: "Atif Aslam",
    coverPath: "cover/cover14.jpeg",
    discPath: "song/music14.mp3",
    duration: "4:40",
  },
  {
    title: "Saiyyan",
    artist: "Kailash Kher, Paresh Kamath, Naresh Kamath",
    coverPath: "cover/cover15.jpeg",
    discPath: "song/music15.mp3",
    duration: "5:44",
  },
  {
    title: "Thodi Der",
    artist: "Farhan Saeed, Shreya Ghoshal, Kumaar",
    coverPath: "cover/cover16.jpeg",
    discPath: "song/music16.mp3",
    duration: "4:56",
  },
  {
    title: "Lagaya Dil",
    artist: "Maithili Thakur",
    coverPath: "cover/cover17.png",
    discPath: "song/music17.mp3",
    duration: "4:16",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    coverPath: "cover/cover18.jpeg",
    discPath: "song/music18.mp3",
    duration: "4:23",
    category: "Hollywood",
  },
  {
    title: "Lover [feat. Shawn Mendes]",
    artist: "Taylor Swift, Shawn Mendes",
    coverPath: "cover/cover19.jpeg",
    discPath: "song/music19.mp3",
    duration: "3:41",
    category: "Hollywood",
  },
  {
    title: "A Thousand Years",
    artist: "Christina Perri",
    coverPath: "cover/cover20.jpeg",
    discPath: "song/music20.mp3",
    duration: "4:45",
    category: "Hollywood",
  },
  {
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    coverPath: "cover/cover21.jpeg",
    discPath: "song/music21.mp3",
    duration: "2:57",
    category: "Hollywood",
  },
  {
    title: "Love Me Like You Do",
    artist: "Ellie Goulding",
    coverPath: "cover/cover22.jpeg",
    discPath: "song/music22.mp3",
    duration: "4:13",
    category: "Hollywood",
  },
  {
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    coverPath: "cover/cover23.jpeg",
    discPath: "song/music23.mp3",
    duration: "3:04",
    category: "Hollywood",
  },
  {
    title: "Please Please Please",
    artist: "Sabrina Carpenter",
    coverPath: "cover/cover24.jpeg",
    discPath: "song/music24.mp3",
    duration: "3:06",
    category: "Hollywood",
  },
  {
    title: "Electric Love",
    artist: "BØRNS",
    coverPath: "cover/cover25.jpeg",
    discPath: "song/music25.mp3",
    duration: "3:38",
    category: "Hollywood",
  },
  {
    title: "Capital Letters",
    artist: "Hailee Steinfeld, BloodPop®",
    coverPath: "cover/cover26.jpeg",
    discPath: "song/music26.mp3",
    duration: "3:39",
    category: "Hollywood",
  },
  {
    title: "I Think They Call This Love",
    artist: "Matthew Ifield",
    coverPath: "cover/cover29.jpeg",
    discPath: "song/music29.mp3",
    duration: "3:16",
    category: "Hollywood",
  },
  {
    title: "bargad",
    artist: "Sufr, Arpit Bala, Toorjo Dey",
    coverPath: "cover/cover30.jpeg",
    discPath: "song/music30.mp3",
    duration: "2:55",
  },
  {
    title: "Barsaat",
    artist: "Banjaare, Roni",
    coverPath: "cover/cover31.jpeg",
    discPath: "song/music31.mp3",
    duration: "3:05",
  },
  {
    title: "Aaja Sohneya x Idk",
    artist: "Karan Aujla",
    coverPath: "cover/cover32.jpeg",
    discPath: "song/music32.mp3",
    duration: "2:21",
  },
  {
    title: "Bairan",
    artist: "Banjaare",
    coverPath: "cover/cover33.jpeg",
    discPath: "song/music33.mp3",
    duration: "2:30",
  },
  {
    title: "Vaaroon Forever",
    artist: "Anand Bhaskar, Romy, Shreya Ghoshal, Ginny Diwan",
    coverPath: "cover/cover34.jpeg",
    discPath: "song/music34.mp3",
    duration: "4:12",
  },
  {
    title: "Tere Bina Na Guzara E",
    artist: "Josh Brar",
    coverPath: "cover/cover35.jpeg",
    discPath: "song/music35.mp3",
    duration: "3:41",
  },
  {
    title: "Tera Naam Doon",
    artist: "Sachin-Jigar, Atif Aslam, Shalmali Kholgade, Priya Saraiya",
    coverPath: "cover/cover36.jpeg",
    discPath: "song/music36.mp3",
    duration: "4:44",
  },
  {
    title: "Kaafi Hai Na",
    artist:
      "Garvit - Priyansh, Priyansh Srivastava, Jonita Gandhi, Garvit Soni, Aniket Shukla",
    coverPath: "cover/cover37.jpeg",
    discPath: "song/music37.mp3",
    duration: "3:15",
  },
  {
    title: "Dariya",
    artist: "Arko",
    coverPath: "cover/cover38.jpeg",
    discPath: "song/music38.mp3",
    duration: "3:38",
  },
  {
    title: "Vhalam Aavo Ne",
    artist: "Sachin-Jigar, Jigardan Gadhavi, Niren Bhatt",
    coverPath: "cover/cover39.jpeg",
    discPath: "song/music39.mp3",
    duration: "5:19",
    category: "Gujarati",
  },
  {
    title: "Gori Radha Ne Kado Kaan",
    artist: "Divya Kumar",
    coverPath: "cover/cover40.jpeg",
    discPath: "song/music40.mp3",
    duration: "5:08",
    category: "Gujarati",
  },
  {
    title: "Tere Hawaale",
    artist: "Pritam, Arijit Singh, Shilpa Rao",
    coverPath: "cover/cover41.jpeg",
    discPath: "song/music41.mp3",
    duration: "5:46",
    category: "Bollywood",
  },
  {
    title: "Maahi Ve",
    artist: "A.R. Rahman",
    coverPath: "cover/cover42.jpeg",
    discPath: "song/music42.mp3",
    duration: "4:01",
    category: "Bollywood",
  },
  {
    title: "Kahani Suno",
    artist: "Kaifi Khalil",
    coverPath: "cover/cover43.jpeg",
    discPath: "song/music43.mp3",
    duration: "2:53",
    category: "Bollywood",
  },
  {
    title: "Rang Lageya",
    artist: "Mohit Chauhan, Rochak Kohli",
    coverPath: "cover/cover44.jpeg",
    discPath: "song/music44.mp3",
    duration: "3:48",
    category: "Bollywood",
  },
  {
    title: "Safarnama",
    artist: "Lucky Ali",
    coverPath: "cover/cover45.jpeg",
    discPath: "song/music45.mp3",
    duration: "4:11",
    category: "Bollywood",
  },
  {
    title: "Ang Laga De",
    artist: "Sanjay Leela Bhansali, Aditi Paul, Shail Hada, Siddharth - Garima",
    coverPath: "cover/cover46.jpeg",
    discPath: "song/music46.mp3",
    duration: "5:27",
    category: "Bollywood",
  },
  {
    title: "Tu Chahiye",
    artist: "Pritam, Atif Aslam, Amitabh Bhattacharya",
    coverPath: "cover/cover47.jpeg",
    discPath: "song/music47.mp3",
    duration: "4:32",
    category: "Bollywood",
  },
  {
    title: "Dooron Dooron - Unplugged",
    artist: "Paresh Pahuja, Shiv Tandan",
    coverPath: "cover/cover48.jpeg",
    discPath: "song/music48.mp3",
    duration: "6:06",
    category: "Bollywood",
  },
  {
    title: "Aayat",
    artist:
      "Arijit Singh, Mujtaba Aziz Naza, Shadab Faridi, Altamash Faridi, Farhan Sabri",
    coverPath: "cover/cover49.jpeg",
    discPath: "song/music49.mp3",
    duration: "4:22",
    category: "Bollywood",
  },
  {
    title: "Alvida",
    artist: "Nikhil D'Souza, Sukhwinder Singh, Shruti Haasan, Loy Mendonsa",
    coverPath: "cover/cover50.jpeg",
    discPath: "song/music50.mp3",
    duration: "5:02",
    category: "Bollywood",
  },
];

const categoryByTitle = {
  "I like that": "Hollywood",
  "Saibo re": "Gujarati",
  "Perfect": "Hollywood",
  "Lover [feat. Shawn Mendes]": "Hollywood",
  "A Thousand Years": "Hollywood",
  "Until I Found You": "Hollywood",
  "Love Me Like You Do": "Hollywood",
  "I Wanna Be Yours": "Hollywood",
  "Please Please Please": "Hollywood",
  "Electric Love": "Hollywood",
  "Capital Letters": "Hollywood",
  "I Think They Call This Love": "Hollywood",
  "Vhalam Aavo Ne": "Gujarati",
  "Gori Radha Ne Kado Kaan": "Gujarati",
  "Tere Hawaale": "Bollywood",
};

function resolveSongCategory(song) {
  return song.category || categoryByTitle[song.title] || "Bollywood";
}

const STORAGE_KEY = "music-player-state";
const FAVORITES_STORAGE_KEY = "music-player-favorites";
const favoriteSongIndexes = (() => {
  try {
    const storedIndexes = JSON.parse(
      localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]",
    );
    return new Set(
      Array.isArray(storedIndexes)
        ? storedIndexes.filter(
            (index) =>
              Number.isInteger(index) && index >= 0 && index < songs.length,
          )
        : [],
    );
  } catch {
    return new Set();
  }
})();
const standardCategories = ["Hollywood", "Bollywood", "Gujarati"];
const likedSongsCategory = "Liked Songs";
const isSupportedCategory = (category) =>
  standardCategories.includes(category) || category === likedSongsCategory;

const params = new URLSearchParams(window.location.search);
const requestedCategory = params.get("category");
let selectedCategory = isSupportedCategory(requestedCategory)
  ? requestedCategory
  : null;
const playerContainer = document.querySelector(".player-container");
const songsView = document.getElementById("songs-view");
const categoryView = document.getElementById("category-view");
const inlineSongPage = document.getElementById("inline-song-page");
const inlineSongList = document.getElementById("inline-song-list");
const inlineCategoryTitle = document.getElementById("inline-category-title");
const inlineCategoriesLink = document.getElementById("inline-categories-link");
const miniTrackOpen = document.getElementById("mini-track-open");
const miniCover = document.getElementById("mini-cover");
const miniTitle = document.getElementById("mini-title");
const miniArtist = document.getElementById("mini-artist");
const miniPlay = document.getElementById("mini-play");
const miniSeek = document.getElementById("mini-seek");
const miniCurrentTime = document.getElementById("mini-current-time");
const miniDuration = document.getElementById("mini-duration");
function getPlaybackQueue(category) {
  if (category === likedSongsCategory) {
    return [...favoriteSongIndexes];
  }

  return songs
    .map((song, index) => ({ song, index }))
    .filter(
      ({ song }) => category === null || resolveSongCategory(song) === category,
    )
    .map(({ index }) => index);
}

let playbackQueue = getPlaybackQueue(selectedCategory);

let songIndex = playbackQueue[0] ?? 0;
let playbackIntent = false;
let pendingRestoreTime = null;
let activeAudioObjectUrl = null;
let songLoadGeneration = 0;
let isSeekFallbackLoading = false;
let isPointerSeeking = false;
let isShuffleEnabled = false;
let repeatMode = "off";
const playerBack = document.getElementById("player-back");
if (playerBack && selectedCategory) {
  playerBack.href = `songs.html?category=${encodeURIComponent(selectedCategory)}`;
  playerBack.textContent = "← Back to " + selectedCategory;
  playerBack.setAttribute("aria-label", `Back to ${selectedCategory} songs`);
}
function renderInlineSongList() {
  if (!inlineSongList || !selectedCategory) return;

  inlineCategoryTitle.textContent = `${selectedCategory} Songs`;
  inlineSongList.replaceChildren();
  if (selectedCategory === likedSongsCategory) {
    const likedCount = document.getElementById("inline-liked-count");
    if (likedCount) likedCount.textContent = String(playbackQueue.length);
  }

  if (playbackQueue.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-song-list";
    emptyMessage.textContent =
      selectedCategory === likedSongsCategory
        ? "Like a song to add it to your Liked Songs."
        : "No songs are available in this category yet.";
    inlineSongList.appendChild(emptyMessage);
    return;
  }

  playbackQueue.forEach((index, queueIndex) => {
    const song = songs[index];
    const card = document.createElement("article");
    card.className = "song-card";
    card.classList.toggle("is-current", index === songIndex);
    card.tabIndex = 0;
    card.setAttribute("aria-label", `Play ${song.title} by ${song.artist}`);

    const image = document.createElement("img");
    image.src = song.coverPath;
    image.alt = "";
    image.className = "song-cover";

    const info = document.createElement("div");
    info.className = "song-info";

    const songTitle = document.createElement("h2");
    songTitle.textContent = `${queueIndex + 1}. ${song.title}`;

    const songArtist = document.createElement("p");
    songArtist.textContent = song.artist;

    const openSong = () => showPlayerView(index);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "song-button";
    button.textContent = "Play";
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openSong();
    });

    card.addEventListener("click", openSong);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openSong();
      }
    });

    info.append(songTitle, songArtist);
    card.append(image, info, button);
    inlineSongList.appendChild(card);
  });
}

function showSongsView(addHistory = true, category = selectedCategory) {
  if (
    !isSupportedCategory(category) ||
    !songsView ||
    !playerContainer
  )
    return;

  selectedCategory = category;
  playbackQueue = getPlaybackQueue(selectedCategory);
  playerBack.href = `songs.html?category=${encodeURIComponent(selectedCategory)}`;
  renderInlineSongList();
  playerContainer.hidden = true;
  songsView.hidden = false;
  categoryView.hidden = true;
  inlineSongPage.hidden = false;
  inlineCategoriesLink.href = "index.html";
  playerBack.textContent = `← Back to ${selectedCategory}`;
  playerBack.setAttribute("aria-label", `Back to ${selectedCategory} songs`);
  document.title = `${selectedCategory} Songs`;
  if (addHistory) {
    history.pushState(
      { view: "songs", category: selectedCategory },
      "",
      `songs.html?category=${encodeURIComponent(selectedCategory)}`,
    );
  }
}

function showCategoryView(addHistory = true) {
  if (!songsView || !playerContainer) return;

  playerContainer.hidden = true;
  songsView.hidden = false;
  categoryView.hidden = false;
  inlineSongPage.hidden = true;
  document.title = "Choose a Music Category";
  if (addHistory) {
    history.pushState(
      { view: "categories", category: selectedCategory },
      "",
      "index.html",
    );
  }
}

function showPlayerView(
  index = songIndex,
  addHistory = true,
  resumeIfPaused = true,
) {
  if (!songsView || !playerContainer) return;

  songsView.hidden = true;
  playerContainer.hidden = false;
  document.title = "Music Player";
  if (addHistory && selectedCategory) {
    history.pushState(
      { view: "player", song: index, category: selectedCategory },
      "",
      `player.html?song=${index}&category=${encodeURIComponent(selectedCategory)}`,
    );
  }
  if (
    index !== songIndex ||
    disc.currentSrc !== resolveAssetPath(songs[index].discPath)
  ) {
    songIndex = index;
    loadSong(songs[songIndex], 0, true);
    resetProgress();
  } else if (disc.paused && resumeIfPaused) {
    void attemptPlayAudio();
  }
}

history.replaceState({ view: "player" }, "", window.location.href);
if (playerBack && selectedCategory) {
  playerBack.addEventListener("click", (event) => {
    event.preventDefault();
    showSongsView();
  });
}
inlineCategoriesLink.addEventListener("click", (event) => {
  event.preventDefault();
  showCategoryView();
});
categoryView.querySelectorAll("[data-category]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSongsView(true, link.dataset.category);
  });
});
window.addEventListener("popstate", (event) => {
  if (event.state?.view === "songs") {
    showSongsView(false, event.state.category);
  } else if (event.state?.view === "categories") {
    showCategoryView(false);
  } else {
    if (
      isSupportedCategory(event.state?.category)
    ) {
      selectedCategory = event.state.category;
      playbackQueue = getPlaybackQueue(selectedCategory);
    }
    showPlayerView(event.state?.song ?? songIndex, false);
  }
});

const selectedSongParam = params.get("song");
const selectedSong =
  selectedSongParam === null ? NaN : Number(selectedSongParam);
const hasSelectedSong =
  Number.isInteger(selectedSong) && playbackQueue.includes(selectedSong);
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
  playbackQueue.includes(savedState.songIndex)
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

function updateMediaSessionMetadata(song = songs[songIndex]) {
  if (!navigator.mediaSession || typeof window.MediaMetadata !== "function") {
    return;
  }

  const artworkUrl = resolveAssetPath(song.coverPath);
  const artworkType = song.coverPath.endsWith(".png")
    ? "image/png"
    : "image/jpeg";
  navigator.mediaSession.metadata = new window.MediaMetadata({
    title: song.title,
    artist: song.artist,
    album: "MONI",
    artwork: [
      { src: artworkUrl, sizes: "96x96", type: artworkType },
      { src: artworkUrl, sizes: "256x256", type: artworkType },
      { src: artworkUrl, sizes: "512x512", type: artworkType },
    ],
  });
}

function updateMediaSessionPosition() {
  const mediaSession = navigator.mediaSession;
  if (
    !mediaSession ||
    typeof mediaSession.setPositionState !== "function" ||
    !Number.isFinite(disc.duration) ||
    disc.duration <= 0
  ) {
    return;
  }

  mediaSession.setPositionState({
    duration: disc.duration,
    playbackRate:
      Number.isFinite(disc.playbackRate) && disc.playbackRate > 0
        ? disc.playbackRate
        : 1,
    position: Math.max(
      0,
      Math.min(
        Number.isFinite(disc.currentTime) ? disc.currentTime : 0,
        disc.duration,
      ),
    ),
  });
}

function setMediaSessionPlaybackState(state) {
  if (navigator.mediaSession) {
    navigator.mediaSession.playbackState = state;
  }
}

function setupMediaSession() {
  const mediaSession = navigator.mediaSession;
  if (!mediaSession || typeof mediaSession.setActionHandler !== "function") {
    return;
  }

  const actions = {
    play: () => void attemptPlayAudio(),
    pause: () => {
      if (!disc.paused) playPauseMedia();
    },
    previoustrack: gotoPreviousSong,
    nexttrack: () => gotoNextSong(true),
    seekbackward: (event) =>
      void seekToTime(disc.currentTime - (event.seekOffset || 10)),
    seekforward: (event) =>
      void seekToTime(disc.currentTime + (event.seekOffset || 10)),
    seekto: (event) => {
      if (Number.isFinite(event.seekTime)) void seekToTime(event.seekTime);
    },
  };

  Object.entries(actions).forEach(([action, handler]) => {
    try {
      mediaSession.setActionHandler(action, handler);
    } catch (error) {
      if (error.name !== "NotSupportedError") throw error;
    }
  });
}

function loadSong(song, startTime = 0, shouldAutoPlay = false) {
  const loadGeneration = ++songLoadGeneration;
  isSeekFallbackLoading = false;
  showPlaybackMessage("");
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
  updateFavoriteButton();
  duration.textContent = song.duration;
  updateMediaSessionMetadata(song);
  setMediaSessionPlaybackState("paused");
  updateMediaSessionPosition();
  updateMiniPlayer();

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

function updateFavoriteButton() {
  const isFavorite = favoriteSongIndexes.has(songIndex);
  favorite.classList.toggle("is-favorite", isFavorite);
  favorite.setAttribute("aria-pressed", String(isFavorite));
  favorite.setAttribute(
    "aria-label",
    isFavorite ? "Remove from favorites" : "Add to favorites",
  );
}

function toggleFavorite() {
  if (favoriteSongIndexes.has(songIndex)) {
    favoriteSongIndexes.delete(songIndex);
  } else {
    favoriteSongIndexes.add(songIndex);
  }

  try {
    localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify([...favoriteSongIndexes]),
    );
  } catch (error) {
    console.error("Could not save favorite songs:", error);
  }

  if (selectedCategory === likedSongsCategory) {
    playbackQueue = getPlaybackQueue(selectedCategory);
    renderInlineSongList();
  }
  updateFavoriteButton();
}

async function shareCurrentTrack() {
  const trackUrl = new URL(window.location.href);
  trackUrl.searchParams.set("song", String(songIndex));
  trackUrl.searchParams.delete("fresh");
  trackUrl.searchParams.delete("design");
  if (selectedCategory) {
    trackUrl.searchParams.set("category", selectedCategory);
  }

  const shareData = {
    title: songs[songIndex].title,
    text: `${songs[songIndex].title} — ${songs[songIndex].artist}`,
    url: trackUrl.toString(),
  };

  try {
    if (typeof navigator.share === "function") {
      await navigator.share(shareData);
      return;
    }
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(shareData.url);
      showPlaybackMessage("Track link copied.");
      return;
    }

    showPlaybackMessage("Sharing isn't available in this browser.");
  } catch (error) {
    if (error.name === "AbortError") return;
    console.error("Could not share this track:", error);
    showPlaybackMessage("Couldn't share this track. Please try again.");
  }
}

function updateShuffleButton() {
  shuffle.classList.toggle("is-active", isShuffleEnabled);
  shuffle.setAttribute("aria-pressed", String(isShuffleEnabled));
  shuffle.setAttribute(
    "aria-label",
    isShuffleEnabled ? "Shuffle on" : "Shuffle off",
  );
}

function cycleRepeatMode() {
  repeatMode =
    repeatMode === "off" ? "all" : repeatMode === "all" ? "one" : "off";
  repeat.classList.toggle("is-active", repeatMode !== "off");
  repeat.dataset.repeatMode = repeatMode;
  repeat.setAttribute("aria-pressed", String(repeatMode !== "off"));
  repeat.setAttribute(
    "aria-label",
    `Repeat ${repeatMode === "off" ? "off" : repeatMode}`,
  );
}

function handleSongEnded() {
  if (repeatMode === "one") {
    disc.currentTime = 0;
    void attemptPlayAudio();
    return;
  }

  const currentQueuePosition = playbackQueue.indexOf(songIndex);
  const isLastSong =
    currentQueuePosition === playbackQueue.length - 1 && !isShuffleEnabled;
  if (isLastSong && repeatMode !== "all") {
    playbackIntent = false;
    updatePlayPauseIcon();
    savePlayerState();
    return;
  }

  gotoNextSong(true);
}

setupMediaSession();
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
if (window.location.protocol === "file:") {
  showPlaybackMessage(
    "This page was opened as a local file. Run start-player.bat, then open http://localhost:8000/ to play audio.",
  );
}

function attemptPlayAudio() {
  if (!disc.src) return false;

  if (!disc.paused) {
    playbackIntent = true;
    updatePlayPauseIcon();
    savePlayerState();
    return true;
  }

  playbackIntent = true;
  setMediaSessionPlaybackState("playing");
  const playPromise = disc.play();

  if (playPromise && typeof playPromise.then === "function") {
    playPromise
      .then(() => {
        playbackIntent = true;
        showPlaybackMessage("");
        updatePlayPauseIcon();
        savePlayerState();
      })
      .catch((error) => {
        playbackIntent = false;
        setMediaSessionPlaybackState("paused");
        showPlaybackMessage(
          error.name === "NotAllowedError"
            ? "Your browser blocked playback. Press Play to start the song."
            : "Playback could not start. Check that the audio file is available and try again.",
        );
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
  const miniPlayer = document.querySelector(".mini-player");
  if (miniPlayer) miniPlayer.classList.toggle("is-playing", !disc.paused);
  setMediaSessionPlaybackState(disc.paused ? "paused" : "playing");

  if (disc.paused) {
    play.textContent = "▶";
    play.setAttribute("aria-label", "Play");
    if (miniPlay) {
      miniPlay.textContent = "▶";
      miniPlay.setAttribute("aria-label", "Play");
    }
  } else {
    play.textContent = "❚❚";
    play.setAttribute("aria-label", "Pause");
    if (miniPlay) {
      miniPlay.textContent = "❚❚";
      miniPlay.setAttribute("aria-label", "Pause");
    }
  }
}

function updateMiniPlayer() {
  if (!miniTitle) return;

  miniTitle.textContent = songs[songIndex].title;
  miniArtist.textContent = songs[songIndex].artist;
  miniCover.src = resolveAssetPath(songs[songIndex].coverPath);
  miniCover.alt = `${songs[songIndex].title} cover`;
  miniCurrentTime.textContent = formatTime(disc.currentTime || 0);
  miniDuration.textContent = formatTime(disc.duration || 0);
  miniSeek.max = String(Number.isFinite(disc.duration) ? disc.duration : 0);
  miniSeek.value = String(
    Number.isFinite(disc.currentTime) ? disc.currentTime : 0,
  );
  updatePlayPauseIcon();
}

function updateProgress() {
  if (!disc.duration) return;

  progress.style.width = (disc.currentTime / disc.duration) * 100 + "%";
  timer.textContent = formatTime(disc.currentTime);
  progressContainer.setAttribute("aria-valuemax", String(disc.duration));
  progressContainer.setAttribute("aria-valuenow", String(disc.currentTime));
  progressContainer.setAttribute("aria-valuetext", timer.textContent);
  updateMediaSessionPosition();
  updateMiniPlayer();
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
  updateMediaSessionPosition();
  updateMiniPlayer();
}

function gotoPreviousSong() {
  if (playbackQueue.length === 0) return;

  const currentQueuePosition = playbackQueue.indexOf(songIndex);
  songIndex = isShuffleEnabled
    ? getRandomSongIndex()
    : playbackQueue[
        currentQueuePosition < 0
          ? playbackQueue.length - 1
          : (currentQueuePosition - 1 + playbackQueue.length) %
            playbackQueue.length
      ];

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex], 0, isDiscPlayingNow);
  resetProgress();
}

function getRandomSongIndex() {
  if (playbackQueue.length < 2) return songIndex;

  const otherSongs = playbackQueue.filter((index) => index !== songIndex);
  return otherSongs[Math.floor(Math.random() * otherSongs.length)];
}

function gotoNextSong(playImmediately) {
  if (playbackQueue.length === 0) return;

  const currentQueuePosition = playbackQueue.indexOf(songIndex);
  songIndex = isShuffleEnabled
    ? getRandomSongIndex()
    : playbackQueue[
        currentQueuePosition < 0
          ? 0
          : (currentQueuePosition + 1) % playbackQueue.length
      ];

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex], 0, isDiscPlayingNow || playImmediately);
  resetProgress();
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
miniPlay.addEventListener("click", playPauseMedia);
miniTrackOpen.addEventListener("click", () => {
  showPlayerView(songIndex, true, false);
});
document
  .getElementById("mini-prev")
  .addEventListener("click", gotoPreviousSong);
document
  .getElementById("mini-next")
  .addEventListener("click", gotoNextSong.bind(null, false));
miniSeek.addEventListener("change", () => {
  void seekToTime(Number(miniSeek.value));
});

disc.addEventListener("play", () => {
  playbackIntent = true;
  setMediaSessionPlaybackState("playing");
  showPlaybackMessage("");
  updatePlayPauseIcon();
  savePlayerState();
});
disc.addEventListener("error", () => {
  playbackIntent = false;
  setMediaSessionPlaybackState("paused");
  showPlaybackMessage(
    window.location.protocol === "file:"
      ? "Audio cannot load from a file:// page. Run start-player.bat, then open http://localhost:8000/ to play audio."
      : "Could not load this audio file. Check that it exists in the song/ folder and try again.",
  );
  updatePlayPauseIcon();
  savePlayerState();
});
disc.addEventListener("pause", () => {
  if (!isSeekFallbackLoading) playbackIntent = false;
  setMediaSessionPlaybackState("paused");
  updatePlayPauseIcon();
  savePlayerState();
});
disc.addEventListener("timeupdate", updateProgress);
disc.addEventListener("loadedmetadata", updateMediaSessionPosition);
disc.addEventListener("ended", handleSongEnded);
window.addEventListener("beforeunload", savePlayerState);

prev.addEventListener("click", gotoPreviousSong);

next.addEventListener("click", gotoNextSong.bind(null, false));
favorite.addEventListener("click", toggleFavorite);
shareTrack.addEventListener("click", () => void shareCurrentTrack());
shuffle.addEventListener("click", () => {
  isShuffleEnabled = !isShuffleEnabled;
  updateShuffleButton();
});
repeat.addEventListener("click", cycleRepeatMode);

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
