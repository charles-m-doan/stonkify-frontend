import CommonComponents from "./CommonComponents";
import Html from "../Html/Html";
import Api from "../Api/Api";

export default function() {
	return new SingleAlbumViewComponents();
}

class SingleAlbumViewComponents {

	renderSingleAlbumView() {
		CommonComponents().createPageSkeleton();
		this.renderMainContent();
	}
	  
	renderMainContent() {
		const main = CommonComponents().getMainContentBlock();
		console.log(main);
		  
		const containerDiv = Html().create("div").addClass("container")
		containerDiv.addChild(this.renderAlbumAvatar());
		containerDiv.addChild(this.renderSongs())

		main.addChild(containerDiv);
	}

	renderAlbumAvatar(){
		const avatarSect = Html().create("section").addClass("avatar");
		const avatarFig = Html().create("figure").addClass("avatar__figure");
		const albumTitle = Html().create("h1").addClass("avatar__title");
		
		Api().getRequest(`http://localhost:8080/api/albums/2`, (responseObject) => {
			const albumCover = Html().create("img").addClass("artist-figure__img").addAttribute("src", responseObject.imgUrl);
			const albumTitle = Html().create("h1").addClass("avatar__title").text(responseObject.title);
			avatarFig.addChild(albumCover);
			avatarSect.addChild(avatarFig);
			avatarSect.addChild(albumTitle);
		})
		return avatarSect;
	}

	renderSongs(){
		const songSect = Html().create("section")

		Api().getRequest(`http://localhost:8080/api/albums/2`, (responseObject) => {
      		console.log(responseObject.songs)
      		responseObject.songs.forEach((song) =>{
				const songBox = Html().create("div").addClass("song-box");
				const playCircle = Html().create("div").addClass("play-circle");
				const playButton = Html().create("button").addClass("play-button");
				const songInfo = Html().create("div").addClass("song-info");
				const songTitle = Html().create("h3").text(song.title);
				const artistName = Html().create("span").text("can't get artist name");
				const songDuration = Html().create("span").addClass("duration").text(song.duration);
				
				playCircle.addChild(playButton);
				songBox.addChild(playCircle);
				songInfo.addChild(songTitle);
				songInfo.addChild(artistName);
				songBox.addChild(songInfo);
				songBox.addChild(songDuration);

				songSect.addChild(songBox)
			})
    	})
		return songSect;
	}
}