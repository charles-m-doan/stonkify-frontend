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
		const pageTitle = Html()
			.create("h1")
			.text("Unknown Endpoint.");
		const pageSubTitle = Html()
			.create("h2")
			.text("Welcome to the Void.");
		const content = Html()
			.create("div")
			.addChild(pageTitle)
			.addChild(pageSubTitle);
		return content;
	}
}
