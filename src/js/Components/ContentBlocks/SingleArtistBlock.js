import Html from "../../Html/Html";
import Api from "../../Api/Api";

export default class SingleArtistBlock {
	constructor(requestedData) {
		if (requestedData === undefined) {
			requestedData = "1";
		} else if (requestedData == "") {
			requestedData = "1";
		}
		this.rootDataURL = Api().getRootURL() + "artists";
		this.resourceURL = this.rootDataURL + "/" + requestedData;
		console.log(this.resourceURL);
	}

	renderContent() {
		const main = Html().select(".main");
		const content = this.generateContent();
		main.replace(content);
	}

	generateContent() {
		const pageTitle = Html()
			.create("h1")
			.text("Single Artist");
		const pageSubTitle = Html()
			.create("h2")
			.text(this.resourceURL);

		const avatarSection = this.generateArtistAvatar();
		const artistNav = this.generateArtistNav();
		const albumGallery = this.generateAlbumGallery();

		const content = Html()
			.create("div")
			.addClass("container")
			.addChild(pageTitle)
			.addChild(pageSubTitle)
			.addChild(avatarSection)
			.addChild(artistNav)
			.addChild(albumGallery);
		return content;
	}

	generateArtistAvatar() {
		const avatarSection = Html()
			.create("section")
			.addClass("avatar");

		Api().getRequest(this.resourceURL, artist => {
			console.log(artist);
			const avatarFig = Html()
				.create("figure")
				.addClass("avatar__figure");
			const artistImg = Html()
				.create("img")
				.addClass("avatar-figure__img-artist")
				.addAttribute("src", artist.imgUrl);
			const artistNameHeading = Html()
				.create("h1")
				.addClass("avatar__title")
				.text(artist.name);

			avatarFig.addChild(artistImg);
			avatarSection.addChild(avatarFig);
			avatarSection.addChild(artistNameHeading);
		});

		return avatarSection;
	}

	generateArtistNav() {
		const artistNav = Html()
			.create("nav")
			.addClass("artist-view__nav");
		const artistUl = Html()
			.create("ul")
			.addClass("artist-view__nav__list");
		let liElements;

		const navItems = ["play", "about", "related"];

		liElements = navItems.map(navItem => {
			const liElement = Html()
				.create("li")
				.addClass("nav-list__item");
			liElement.addChild(
				Html()
					.create("a")
					.addClass("nav-list__anchor")
					.text(navItem)
			);
			artistUl.addChild(liElement);
		});

		artistNav.addChild(artistUl);

		return artistNav;
	}

	generateAlbumGallery() {
		const cardGallery = Html()
			.create("section")
			.addClass("card-gallery");

		Api().getRequest(this.resourceURL, artist => {
			console.log(artist);
			artist.albums.forEach(album => {
				const albumCard = Html()
					.create("article")
					.addClass("card");
				const albumTitle = Html()
					.create("h3")
					.addClass("card__title")
					.text(album.title);
				const albumFig = Html()
					.create("figure")
					.addClass("card__title");
				const albumImg = Html()
					.create("img")
					.addAttribute("src", album.imgUrl);
				albumFig.addChild(albumImg);
				// const publishDate = Html().create("h4").addClass("album-card__date").text(album.date)

				albumCard.addChild(albumTitle);
				albumCard.addChild(albumFig);
				// albumCard.addChild(publishDate)
				cardGallery.addChild(albumCard);
			});
		});
		return cardGallery;
	}
}
