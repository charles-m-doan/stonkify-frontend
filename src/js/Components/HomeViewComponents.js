import Html from "../Html/Html";
import Api from "../Api/Api";

export default function() {
	return new HomeViewComponents();
}

class HomeViewComponents {
	renderHomeView() {
		CommonComponents().createPageSkeleton();
		this.renderMainContent();
	}

	renderMainContent() {
		const main = CommonComponents().getMainContentBlock();
		console.log(main);

		main.addChild(this.renderFeaturedArtists());
		main.addChild(this.renderFeaturedAlbums());
		main.addChild(this.renderFeaturedSongs());
	}
	renderFeaturedArtists() {
		const artistsContainer = Html()
			.create("div")
			.addClass("artist-container");
		const artistsHeader = Html()
			.create("h2")
			.addClass("artist_container--header")
			.text("Featured Artists");
		artistsContainer.addChild(artistsHeader);

		Api().getRequest(`http://localhost:8080/api/artists`, responseObject => {
			responseObject.forEach(artist => {
				const artistBox = Html()
					.create("div")
					.addClass("artist-box");
				const artistFigure = Html()
					.create("figure")
					.addClass("artist-cover");
				const artistImg = Html()
					.create("img")
					.addClass("avatar-figure__img-artist")
					.addAttribute("src", artist.imgUrl);
				const artistName = Html()
					.create("h3")
					.text(artist.name);

				artistFigure.addChild(artistImg);
				artistBox.addChild(artistFigure);
				artistBox.addChild(artistName);
				artistsContainer.addChild(artistBox);
			});
		});
		return artistsContainer;
	}

	renderFeaturedAlbums() {
		const albumsContainer = Html()
			.create("div")
			.addClass("album-container");
		const albumsHeader = Html()
			.create("h2")
			.addClass("album_container--header")
			.text("Featured Albums");
		albumsContainer.addChild(albumsHeader);

		Api().getRequest(`http://localhost:8080/api/albums`, responseObject => {
			responseObject.forEach(album => {
				const albumBox = Html()
					.create("div")
					.addClass("album-box");
				const albumFigure = Html()
					.create("figure")
					.addClass("album-cover");
				const albumImg = Html()
					.create("img")
					.addClass("avatar-figure__img-artist")
					.addAttribute("src", album.imgUrl);
				const albumTitle = Html()
					.create("h3")
					.text(album.title);

				albumFigure.addChild(albumImg);
				albumBox.addChild(albumFigure);
				albumBox.addChild(albumTitle);
				albumsContainer.addChild(albumBox);
			});
		});
		return albumsContainer;
	}

	renderFeaturedSongs() {
		const songsContainer = Html()
			.create("div")
			.addClass("song-container");
		const songsHeader = Html()
			.create("h2")
			.addClass("song_container--header")
			.text("Featured Songs");
		songsContainer.addChild(songsHeader);

		Api().getRequest(`http://localhost:8080/api/songs`, responseObject => {
			responseObject.forEach(song => {
				const songBox = Html()
					.create("div")
					.addClass("song-box");
				const playCircle = Html()
					.create("div")
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
					.text("can't get artist name");
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

				songsContainer.addChild(songBox);
			});
		});
		return songsContainer;
	}
}
