import Html from "../../Html/Html";
import Api from "../../Api/Api";

export default class allSongsBlock {
	constructor(requestedData) {
		if (requestedData === undefined) {
			requestedData = "";
		}
		this.rootDataURL = Api().getRootURL() + "songs";
		this.resourceURL = this.rootDataURL + "/" + requestedData;
		console.log(this.resourceURL);
	}
    
	renderContent(requestedData) {
		const main = Html().select(".main");
		const content = this.generateContent();
		main.replace(content);
    
	}

renderSongs() {
    const songSection = Html().create("section");
    Api().getRequest(this.resourceURL, songs => {
     
      songs.forEach(song => {
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
