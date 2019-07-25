import Html from "../../Html/Html";
import Api from "../../Api/Api";

export default class HomeBlock {
	constructor(requestedData) {
		if (requestedData === undefined) {
			requestedData = "";
		}
		this.rootDataURL = Api().getRootURL() + "home";
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
			.text("Home");
		const pageSubTitle = Html()
			.create("h2")
			.text(this.resourceURL);
		const content = Html()
			.create("div")
			.addChild(pageTitle)
			.addChild(pageSubTitle);
		return content;
	}
}
