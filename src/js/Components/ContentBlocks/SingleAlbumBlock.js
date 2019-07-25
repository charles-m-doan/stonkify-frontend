import Html from "../../Html/Html";
import Api from "../../Api/Api";

export default class SingleAlbumBlock {
  constructor(requestedData) {
    if (requestedData === undefined) {
      requestedData = "1";
    } else if (requestedData == "") {
      requestedData = "1";
    }
    this.rootDataURL = Api().getRootURL() + "albums";
    this.resourceURL = this.rootDataURL + "/" + requestedData;
    console.log(this.resourceURL);
  }

  renderContent() {
    const main = Html().select(".main");
    const content = this.generateContent();
    main.replace(content);
  }

  generateContentOld() {
    const pageTitle = Html()
      .create("h1")
      .text("Single Album");
    const pageSubTitle = Html()
      .create("h2")
      .text(this.resourceURL);
    const content = Html()
      .create("div")
      .addChild(pageTitle)
      .addChild(pageSubTitle);
    return content;
  }

  generateContent() {
    const pageTitle = Html()
      .create("h1")
      .text("Single Album");
    const pageSubTitle = Html()
      .create("h2")
      .text(this.resourceURL);
    const avatarSection = this.generateAlbumAvatar();
    const songSection = this.renderSongs();
    const content = Html()
      .create("div")
      .addClass("container")
      .addChild(pageTitle)
      .addChild(pageSubTitle)
      .addChild(avatarSection)
      .addChild(songSection);
    return content;
  }

  generateAlbumAvatar() {
    const avatarSection = Html()
      .create("section")
      .addClass("avatar");
    const avatarFig = Html()
      .create("figure")
      .addClass("avatar__figure");
    const albumTitle = Html()
      .create("h1")
      .addClass("avatar__title");

    Api().getRequest(this.resourceURL, album => {
      const albumCover = Html()
        .create("img")
        .addClass("artist-figure__img")
        .addAttribute("src", album.imgUrl);
      const albumTitle = Html()
        .create("h1")
        .addClass("avatar__title")
        .text(album.title);
      avatarFig.addChild(albumCover);
      avatarSection.addChild(avatarFig);
      avatarSection.addChild(albumTitle);
    });
    return avatarSection;
  }

  renderSongs() {
    const songSection = Html().create("section");
    Api().getRequest(this.resourceURL, album => {
      //   console.log(album.songs);
      album.songs.forEach(song => {
        const songBox = Html()
          .create("div")
          .addClass("song-box");
        const playCircle = Html()
          .create("a")
          .addAttribute("href", song.linkUrl)
          .addAttribute("target", "_blank")
          .addClass("play-circle");
        const playButton = Html()
          .create("button")
          .addClass("play-button");
        const songInfo = Html()
          .create("div")
          .addClass("song-info");
        const songTitle = Html()
          .create("h3")
          .text(song.title);
        const artistName = Html()
          .create("span")
          .text(song.parentArtistName);
        const songDuration = Html()
          .create("span")
          .addClass("duration")
          .text(song.duration);

        playCircle.addChild(playButton);
        songBox.addChild(playCircle);
        songInfo.addChild(songTitle);
        songInfo.addChild(artistName);
        songBox.addChild(songInfo);
        songBox.addChild(songDuration);

        songSection.addChild(songBox);
      });
    });
    return songSection;
  }
}
