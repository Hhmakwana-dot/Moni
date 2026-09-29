const songs = [
  {
    title: "1.Dil Na Jaaneya",
    artist: "Akasa",
    coverPath: "cover1.jpg",
    discPath: "music1.mp3",
  },
  {
    title: "2.I like that",
    artist: "Buzzi",
    coverPath: "cover2.jpg",
    discPath: "music2.mp3",
  },
  {
    title: "Gimme that Bottle",
    artist: "Michael Ramir",
    coverPath: "cover3.jpg",
    discPath: "music3.mp3",
  },
  {
    title: "Only mine",
    artist: "Darshan Raval",
    coverPath: "cover4.jpg",
    discPath: "music4.mp3",
  },
  {
    title: "Gangster Paradise",
    artist: "Coolio",
    coverPath: "Gangster.jpeg",
    discPath: "music5.wav",
  },
];

const songList = document.getElementById("song-list");

if (songList) {
  songs.forEach((song, index) => {
    const card = document.createElement("article");
    card.className = "song-card";

    const image = document.createElement("img");
    image.src = song.coverPath;
    image.alt = song.title;
    image.className = "song-cover";

    const info = document.createElement("div");
    info.className = "song-info";

    const title = document.createElement("h2");
    title.textContent = song.title;

    const artist = document.createElement("p");
    artist.textContent = song.artist;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Play";
    button.className = "song-button";
    button.addEventListener("click", () => {
      window.location.href = `player.html?song=${index}`;
    });

    info.appendChild(title);
    info.appendChild(artist);
    card.appendChild(image);
    card.appendChild(info);
    card.appendChild(button);
    songList.appendChild(card);
  });
}
