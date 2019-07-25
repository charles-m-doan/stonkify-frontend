import Html from "../../Html/Html";
import Api from "../../Api/Api";

export default class AllArtistsBlock {
	constructor(requestedData) {
		if (requestedData === undefined) {
			requestedData = "";
		}
		this.rootDataURL = Api().getRootURL() + "artists";
		this.resourceURL = this.rootDataURL + "/" + requestedData;
		console.log(this.resourceURL);
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
			.text("Artists");

		const cardGallery = Html()
			.create("section")
			.addClass("card-gallery");

		Api().getRequest(this.resourceURL, artistCollection => {
			artistCollection.forEach(artist => {
				const card = Html()
					.create("article")
					.addClass("card");

				const cardFigure = Html()
					.create("figure")
					.addClass("card__figure");

				const cardFigurePortrait = Html()
					.create("img")
					.addClass("card__figure__portrait")
					.addAttribute("src", artist.imgUrl);

				const cardTitle = Html()
					.create("h3")
					.addClass("card__title")
					.text(artist.name);

				card.addChild(cardFigure);
				cardFigure.addChild(cardFigurePortrait);
				card.addChild(cardTitle);
				cardGallery.addChild(card);
			});
		});

		const content = Html()
			.create("div")
			.addChild(pageTitle)
			.addChild(cardGallery);
		return content;
	}
}
