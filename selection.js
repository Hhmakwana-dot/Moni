const songs = [
  {
    title: "Dil Na Jaaneya",
    artist: "Akasa",
    coverPath: "cover/cover1.jpg",
    discPath: "song/music1.mp3",
  },
  {
    title: "I like that",
    artist: "Buzzi",
    coverPath: "cover/cover2.jpg",
    discPath: "song/music2.mp3",
    category: "Hollywood",
  },
  {
    title: "Saibo re",
    artist: "Kirtidan Gadhvi",
    coverPath: "cover/cover3.jpg",
    discPath: "song/music3.mp3",
    category: "Gujarati",
  },
  {
    title: "Only mine",
    artist: "Darshan Raval",
    coverPath: "cover/cover4.jpg",
    discPath: "song/music4.mp3",
  },
  {
    title: "Khat",
    artist: "Navjot Ahuja",
    coverPath: "cover/cover5.jpg",
    discPath: "song/music5.mp3",
  },
  {
    title: "Lag Ja Gale",
    artist: "Sanam",
    coverPath: "cover/cover6.jpeg",
    discPath: "song/music6.mp3",
  },
  {
    title: "Darkhaast",
    artist: "Mithoon, Arijit Singh, Sunidhi Chauhan, Sayeed Quadri",
    coverPath: "cover/cover7.jpeg",
    discPath: "song/music7.mp3",
  },
  {
    title: "Ruaan",
    artist: "Pritam, Arijit Singh, Irshad Kamil",
    coverPath: "cover/cover8.jpeg",
    discPath: "song/music8.mp3",
  },
  {
    title: "Jogi",
    artist: "Yasser Desai, Aakanksha Sharma",
    coverPath: "cover/cover9.jpeg",
    discPath: "song/music9.mp3",
  },
  {
    title: "Hosanna",
    artist: "A.R. Rahman, Leon D'souza, Suzanne D'Mello",
    coverPath: "cover/cover10.jpeg",
    discPath: "song/music10.mp3",
  },
  {
    title: "Leja",
    artist: "Lost Stories, JAI DHIRN",
    coverPath: "cover/cover11.jpeg",
    discPath: "song/music11.mp3",
  },
  {
    title: "Awara",
    artist: "Salman Ali, Muskaan, Sajid-Wajid",
    coverPath: "cover/cover12.jpeg",
    discPath: "song/music12.mp3",
  },
  {
    title: "Vaara Re",
    artist: "Ajay Gogavale",
    coverPath: "cover/cover13.jpeg",
    discPath: "song/music13.mp3",
  },
  {
    title: "Tum",
    artist: "Atif Aslam",
    coverPath: "cover/cover14.jpeg",
    discPath: "song/music14.mp3",
  },
  {
    title: "Saiyyan",
    artist: "Kailash Kher, Paresh Kamath, Naresh Kamath",
    coverPath: "cover/cover15.jpeg",
    discPath: "song/music15.mp3",
  },
  {
    title: "Thodi Der",
    artist: "Farhan Saeed, Shreya Ghoshal, Kumaar",
    coverPath: "cover/cover16.jpeg",
    discPath: "song/music16.mp3",
  },
  {
    title: "Lagaya Dil",
    artist: "Maithili Thakur",
    coverPath: "cover/cover17.png",
    discPath: "song/music17.mp3",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    coverPath: "cover/cover18.jpeg",
    discPath: "song/music18.mp3",
    category: "Hollywood",
  },
  {
    title: "Lover [feat. Shawn Mendes]",
    artist: "Taylor Swift, Shawn Mendes",
    coverPath: "cover/cover19.jpeg",
    discPath: "song/music19.mp3",
    category: "Hollywood",
  },
  {
    title: "A Thousand Years",
    artist: "Christina Perri",
    coverPath: "cover/cover20.jpeg",
    discPath: "song/music20.mp3",
    category: "Hollywood",
  },
  {
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    coverPath: "cover/cover21.jpeg",
    discPath: "song/music21.mp3",
    category: "Hollywood",
  },
  {
    title: "Love Me Like You Do",
    artist: "Ellie Goulding",
    coverPath: "cover/cover22.jpeg",
    discPath: "song/music22.mp3",
    category: "Hollywood",
  },
  {
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    coverPath: "cover/cover23.jpeg",
    discPath: "song/music23.mp3",
    category: "Hollywood",
  },
  {
    title: "Please Please Please",
    artist: "Sabrina Carpenter",
    coverPath: "cover/cover24.jpeg",
    discPath: "song/music24.mp3",
    category: "Hollywood",
  },
  {
    title: "Electric Love",
    artist: "BØRNS",
    coverPath: "cover/cover25.jpeg",
    discPath: "song/music25.mp3",
    category: "Hollywood",
  },
  {
    title: "Capital Letters",
    artist: "Hailee Steinfeld, BloodPop®",
    coverPath: "cover/cover26.jpeg",
    discPath: "song/music26.mp3",
    category: "Hollywood",
  },
  {
    title: "I Think They Call This Love",
    artist: "Matthew Ifield",
    coverPath: "cover/cover29.jpeg",
    discPath: "song/music29.mp3",
    category: "Hollywood",
  },
  {
    title: "bargad",
    artist: "Sufr, Arpit Bala, Toorjo Dey",
    coverPath: "cover/cover30.jpeg",
    discPath: "song/music30.mp3",
  },
  {
    title: "Barsaat",
    artist: "Banjaare, Roni",
    coverPath: "cover/cover31.jpeg",
    discPath: "song/music31.mp3",
  },
  {
    title: "Aaja Sohneya x Idk",
    artist: "Karan Aujla",
    coverPath: "cover/cover32.jpeg",
    discPath: "song/music32.mp3",
  },
  {
    title: "Bairan",
    artist: "Banjaare",
    coverPath: "cover/cover33.jpeg",
    discPath: "song/music33.mp3",
  },
  {
    title: "Vaaroon Forever",
    artist: "Anand Bhaskar, Romy, Shreya Ghoshal, Ginny Diwan",
    coverPath: "cover/cover34.jpeg",
    discPath: "song/music34.mp3",
  },
  {
    title: "Tere Bina Na Guzara E",
    artist: "Josh Brar",
    coverPath: "cover/cover35.jpeg",
    discPath: "song/music35.mp3",
  },
  {
    title: "Tera Naam Doon",
    artist: "Sachin-Jigar, Atif Aslam, Shalmali Kholgade, Priya Saraiya",
    coverPath: "cover/cover36.jpeg",
    discPath: "song/music36.mp3",
  },
  {
    title: "Kaafi Hai Na",
    artist:
      "Garvit - Priyansh, Priyansh Srivastava, Jonita Gandhi, Garvit Soni, Aniket Shukla",
    coverPath: "cover/cover37.jpeg",
    discPath: "song/music37.mp3",
  },
  {
    title: "Dariya",
    artist: "Arko",
    coverPath: "cover/cover38.jpeg",
    discPath: "song/music38.mp3",
  },
  {
    title: "Vhalam Aavo Ne",
    artist: "Sachin-Jigar, Jigardan Gadhavi, Niren Bhatt",
    coverPath: "cover/cover39.jpeg",
    discPath: "song/music39.mp3",
    category: "Gujarati",
  },
  {
    title: "Gori Radha Ne Kado Kaan",
    artist: "Divya Kumar",
    coverPath: "cover/cover40.jpeg",
    discPath: "song/music40.mp3",
    category: "Gujarati",
  },
  {
    title: "Tere Hawaale",
    artist: "Pritam, Arijit Singh, Shilpa Rao",
    coverPath: "cover/cover41.jpeg",
    discPath: "song/music41.mp3",
    category: "Bollywood",
  },
  {
    title: "Maahi Ve",
    artist: "A.R. Rahman",
    coverPath: "cover/cover42.jpeg",
    discPath: "song/music42.mp3",
    category: "Bollywood",
  },
  {
    title: "Kahani Suno",
    artist: "Kaifi Khalil",
    coverPath: "cover/cover43.jpeg",
    discPath: "song/music43.mp3",
    category: "Bollywood",
  },
  {
    title: "Rang Lageya",
    artist: "Mohit Chauhan, Rochak Kohli",
    coverPath: "cover/cover44.jpeg",
    discPath: "song/music44.mp3",
    category: "Bollywood",
  },
  {
    title: "Safarnama",
    artist: "Lucky Ali",
    coverPath: "cover/cover45.jpeg",
    discPath: "song/music45.mp3",
    category: "Bollywood",
  },
  {
    title: "Ang Laga De",
    artist: "Sanjay Leela Bhansali, Aditi Paul, Shail Hada, Siddharth - Garima",
    coverPath: "cover/cover46.jpeg",
    discPath: "song/music46.mp3",
    category: "Bollywood",
  },
  {
    title: "Tu Chahiye",
    artist: "Pritam, Atif Aslam, Amitabh Bhattacharya",
    coverPath: "cover/cover47.jpeg",
    discPath: "song/music47.mp3",
    category: "Bollywood",
  },
  {
    title: "Dooron Dooron - Unplugged",
    artist: "Paresh Pahuja, Shiv Tandan",
    coverPath: "cover/cover48.jpeg",
    discPath: "song/music48.mp3",
    category: "Bollywood",
  },
  {
    title: "Aayat",
    artist:
      "Arijit Singh, Mujtaba Aziz Naza, Shadab Faridi, Altamash Faridi, Farhan Sabri",
    coverPath: "cover/cover49.jpeg",
    discPath: "song/music49.mp3",
    category: "Bollywood",
  },
  {
    title: "Alvida",
    artist: "Nikhil D'Souza, Sukhwinder Singh, Shruti Haasan, Loy Mendonsa",
    coverPath: "cover/cover50.jpeg",
    discPath: "song/music50.mp3",
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

const songList = document.getElementById("song-list");

if (songList) {
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");
  const category = ["Hollywood", "Bollywood", "Gujarati"].includes(
    requestedCategory,
  )
    ? requestedCategory
    : null;
  const categoryTitle = document.getElementById("category-title");

  if (!category) {
    songList.textContent = "Choose a category to see its songs.";
  } else {
    categoryTitle.textContent = `${category} Songs`;
    const categorySongs = songs
      .map((song, index) => ({ song, index }))
      .filter(({ song }) => resolveSongCategory(song) === category);

    categorySongs.forEach(({ song, index }, categoryIndex) => {
      const card = document.createElement("article");
      card.className = "song-card";

      const image = document.createElement("img");
      image.src = song.coverPath;
      image.alt = song.title;
      image.className = "song-cover";

      const info = document.createElement("div");
      info.className = "song-info";

      const title = document.createElement("h2");
      title.textContent = `${categoryIndex + 1}. ${song.title}`;

      const artist = document.createElement("p");
      artist.textContent = song.artist;

      const openSong = () => {
        window.location.href = `player.html?song=${index}&category=${encodeURIComponent(category)}`;
      };

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Play";
      button.className = "song-button";
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        openSong();
      });

      card.addEventListener("click", openSong);

      info.appendChild(title);
      info.appendChild(artist);
      card.appendChild(image);
      card.appendChild(info);
      card.appendChild(button);
      songList.appendChild(card);
    });

    if (categorySongs.length === 0) {
      songList.textContent = `No ${category} songs are available yet.`;
    }
  }
}
