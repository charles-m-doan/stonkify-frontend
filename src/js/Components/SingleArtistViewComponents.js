import CommonComponents from "./CommonComponents";
import Html from "../Html/Html";
import Api from "../Api/Api";

export default function() {
  return new SingleArtistViewComponents();
}

class SingleArtistViewComponents {
  renderSingleArtistView() {
    CommonComponents().createPageSkeleton();
    this.renderMainContent();
  }

  renderMainContent() {
    const main = CommonComponents().getMainContentBlock();
    console.log(main);
  }

  
}
