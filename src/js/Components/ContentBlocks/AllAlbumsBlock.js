import Html from "../../Html/Html";
import Api from "../../Api/Api";

export default class AllAlbumsBlock {
	constructor() {
		this.rootDataURL = Api().getRootURL() + "albums";
		console.log(this.rootDataURL);
	}

	renderContent(requestedData) {
		const main = Html().select(".main");
		const content = this.generateContent();
		main.replace(content);
	}

	generateContent() {
		const pageTitle = Html()
			.create("h1")
			.addClass("page-title")
			.text("Albums");
		const albumGallery = this.generateAlbumGallery();

		const content = Html()
			.create("div")
			.addChild(pageTitle)
			.addChild(albumGallery);
		return content;
	}

	generateAlbumGallery() {
		const albumGallery = Html()
			.create("section")
			.addClass("card-gallery");

		Api().getRequest(this.rootDataURL, albumCollection => {
			albumCollection.forEach(album => {
				const albumCard = Html()
					.create("article")
					.addClass("card");
				const albumTitle = Html()
					.create("h3")
					.addClass("card__title")
					.text(album.title);
				const albumCover = Html()
					.create("figure")
					.addClass("album-card__cover-image");
				const coverImg = Html()
					.create("img")
					.addAttribute("src", album.imgUrl);
				const artistName = Html()
					.create("h4")
					.addClass("album-card__artist-name")
					.text(album.parentName);
				const releaseDate = Html()
					.create("h4")
					.addClass("album-card__date")
					.text(album.publishYear);

				albumCover.addChild(coverImg);
				albumCard.addChild(albumTitle);
				albumCard.addChild(albumCover);
				albumCard.addChild(artistName);
				albumCard.addChild(releaseDate);

				albumGallery.addChild(albumCard);
			});
		});
		return albumGallery;
	}
}
