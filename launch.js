if (window.location.protocol === "file:") {
  const pageName = window.location.pathname.split("/").pop();
  const appPage =
    pageName === "player.html" || pageName === "songs.html"
      ? pageName
      : "index.html";
  const localUrl = new URL(
    `${appPage}${window.location.search}${window.location.hash}`,
    "http://localhost:8000/",
  );

  window.location.replace(localUrl.toString());
}
