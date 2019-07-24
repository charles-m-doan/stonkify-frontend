import CommonComponents from "./CommonComponents";
import Html from "../Html/Html";
import Api from "../Api/Api";

export default function() {
	return new ArtistsViewComponents();
}

class ArtistsViewComponents {
	renderArtistsView() {
		CommonComponents().createPageSkeleton();
		this.renderMainContent();
	}

	renderMainContent() {
		const main = CommonComponents().getMainContentBlock();

		const pageTitle = Html()
			.create("h1")
			.addClass("page-title")
			.text("Artists");

		const cardGallery = Html()
			.create("section")
			.addClass("card-gallery");

		Api().getRequest(`http://localhost:8080/api/artists`, artistCollection => {
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

		main.addChild(pageTitle);
		main.addChild(cardGallery);
	}
}
