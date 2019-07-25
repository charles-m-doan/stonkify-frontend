import Html from "../../Html/Html";
import Api from "../../Api/Api";

export default class UnknownBlock {
	constructor() {
		this.rootDataURL = Api().getRootURL() + "unknown";
		console.log(this.rootDataURL);
	}

	renderContent(requestedData) {
		const main = Html().select(".main");
		const content = this.generateContent();
		main.replace(content);
	}

	generateContent() {
		const title = Html()
			.create("h1")
			.text("Unknown Endpoint. Welcome to the Void.");
		return title;
	}
}
