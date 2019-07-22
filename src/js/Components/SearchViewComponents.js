import GeneralComponents from "./GeneralComponents";
import Html from "../Html/Html";
import Api from "../Api/Api";
import logoAvatar from "../../images/memeMan.png";

export default function() {
  return new SearchViewComponents();
}

class SearchViewComponents {
  renderSearchView() {
    const app = GeneralComponents().getAppContext();
    GeneralComponents().renderSideBar();
    this.renderContentPane();
  }

  renderContentPane() {
    // GeneralComponents().renderContentPane();
  }
}
