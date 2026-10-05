const songs = [
  {
    title: "Dil Na Jaaneya",
    artist: "Akasa",
    coverPath: "cover1.jpg",
    discPath: "music1.mp3",
  },
  {
    title: "I like that",
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
    title: "Khat",
    artist: "Navjot Ahuja",
    coverPath: "cover5.jpg",
    discPath: "music5.mp3",
  },
  {
    title: "Lag Ja Gale",
    artist: "Sanam",
    coverPath: "cover6.jpeg",
    discPath: "music6.mp3",
  },
  {
    title: "Darkhaast",
    artist: "Mithoon, Arijit Singh, Sunidhi Chauhan, Sayeed Quadri",
    coverPath: "cover7.jpeg",
    discPath: "music7.mp3",
  },
  {
    title: "Ruaan",
    artist: "Pritam, Arijit Singh, Irshad Kamil",
    coverPath: "cover8.jpeg",
    discPath: "music8.mp3",
  },
  {
    title: "Jogi",
    artist: "Yasser Desai, Aakanksha Sharma",
    coverPath: "cover9.jpeg",
    discPath: "music9.mp3",
  },
  {
    title: "Hosanna",
    artist: "A.R. Rahman, Leon D'souza, Suzanne D'Mello",
    coverPath: "cover10.jpeg",
    discPath: "music10.mp3",
  },
  {
    title: "Leja",
    artist: "Lost Stories, JAI DHIRN",
    coverPath: "cover11.jpeg",
    discPath: "music11.mp3",
  },
  {
    title: "Awara",
    artist: "Salman Ali, Muskaan, Sajid-Wajid",
    coverPath: "cover12.jpeg",
    discPath: "music12.mp3",
  },
  {
    title: "Vaara Re",
    artist: "Ajay Gogavale",
    coverPath: "cover13.jpeg",
    discPath: "music13.mp3",
  },
  {
    title: "Tum",
    artist: "Atif Aslam",
    coverPath: "cover14.jpeg",
    discPath: "music14.mp3",
  },
  {
    title: "Saiyyan",
    artist: "Kailash Kher, Paresh Kamath, Naresh Kamath",
    coverPath: "cover15.jpeg",
    discPath: "music15.mp3",
  },
  {
    title: "Thodi Der",
    artist: "Farhan Saeed, Shreya Ghoshal, Kumaar",
    coverPath: "cover16.jpeg",
    discPath: "music16.mp3",
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
    title.textContent = `${index + 1}. ${song.title}`;

    const artist = document.createElement("p");
    artist.textContent = song.artist;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Play";
    button.className = "song-button";
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      window.location.href = `player.html?song=${index}`;
    });

    card.addEventListener("click", () => {
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
