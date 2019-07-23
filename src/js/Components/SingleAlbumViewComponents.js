import GeneralComponents from "./GeneralComponents";
import Html from "../Html/Html";
import Api from "../Api/Api";

export default function() {
	return new SingleAlbumViewComponents();
}

class SingleAlbumViewComponents {
	renderSingleAlbumView() {
		const app = GeneralComponents().getAppContext();
		GeneralComponents().renderSideBar();
		this.renderContentPane();
	}

	renderContentPane() {
		// GeneralComponents().renderContentPane();
	}
}
