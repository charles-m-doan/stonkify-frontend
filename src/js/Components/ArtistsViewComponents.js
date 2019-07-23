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

    const artistCollection = [0, 0, 0, 0, 0, 0, 0];
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
        .addAttribute(
          "src",
          "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxODMyODA0ODc3/frank-zappa-9540382-1-402.jpg"
        );

      const cardTitle = Html()
        .create("h3")
        .addClass("card__title")
        .text("Frank Zappa");

      card.addChild(cardFigure);
      cardFigure.addChild(cardFigurePortrait);
      card.addChild(cardTitle);
      cardGallery.addChild(card);
    });

    main.addChild(pageTitle);
    main.addChild(cardGallery);
    
  }
}
