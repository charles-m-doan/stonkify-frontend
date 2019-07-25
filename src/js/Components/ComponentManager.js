import Html from "../Html/Html";
import logoAvatar from "../../images/memeMan.png";

export default class ComponentManager {
	constructor() {
		this.skeletonHasBeenRendered = false;
	}

	getAppContext() {
		return Html().select("#app");
	}

	renderPageSkeleton() {
		if (this.skeletonHasBeenRendered == false) {
			console.log("Rendering Page Skeleton!");
			this.skeletonHasBeenRendered = true;
		} else {
			console.log("Page Skeleton has already been rendered!");
		}
	}
}
