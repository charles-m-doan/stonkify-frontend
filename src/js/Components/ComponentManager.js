import Html from "../Html/Html";
import logoAvatar from "../../images/memeMan.png";
import UnknownBlock from "../Components/ContentBlocks/UnknownBlock";
import HomeBlock from "../Components/ContentBlocks/HomeBlock";
import AllArtistsBlock from "../Components/ContentBlocks/AllArtistsBlock";
import AllAlbumsBlock from "../Components/ContentBlocks/AllAlbumsBlock";

export default class ComponentManager {
	constructor() {
		this.skeletonHasBeenRendered = false;
		this.blockTypes = [
			"unknownBlock",
			"homeBlock",
			"allArtistsBlock",
			"allAlbumsBlock"
		];
	}

	getAppContext() {
		return Html().select("#app");
	}

	renderContentBlock(blockType, requestedData) {
		if (this.skeletonHasBeenRendered == false) {
			this.renderPageSkeleton();
		}
		if (blockType === undefined) {
			blockType = "homeBlock";
		}
		if (requestedData === undefined) {
			requestedData = "/";
		}

		// Branch Based on Block Type

		if (blockType == "homeBlock") {
			const block = new HomeBlock();
			block.renderContent(requestedData);
		} else if (blockType == "allArtistsBlock") {
			const block = new AllArtistsBlock();
			block.renderContent(requestedData);
		} else if (blockType == "allAlbumsBlock") {
			const block = new AllAlbumsBlock();
			block.renderContent(requestedData);
		} else {
			const unknownBlock = new UnknownBlock();
			unknownBlock.renderContent();
		}
	}

	renderPageSkeleton() {
		if (this.skeletonHasBeenRendered == false) {
			// console.log("Rendering Page Skeleton!");

			this.renderWrapper();
			this.renderSidebar();
			this.renderEmptyContentPane();
			this.renderMain();
			this.renderFooter();

			this.skeletonHasBeenRendered = true;
		} else {
			console.log("Page Skeleton has already been rendered!");
		}
	}

	renderWrapper() {
		const app = Html().select("#app");
		const wrapper = Html()
			.create("div")
			.addClass("wrapper");
		app.addChild(wrapper);
	}

	renderSidebar() {
		const wrapper = Html().select(".wrapper");

		const banner = Html()
			.create("section")
			.addClass("banner")
			.addClass("sidebar");
		const bannerLogo = Html()
			.create("div")
			.addClass("banner__logo");
		const bannerLogoFigure = Html()
			.create("figure")
			.addClass("banner__logo__image");
		const figureImg = Html()
			.create("img")
			.addAttribute("src", logoAvatar)
			.addAttribute("alt", "Meme Man");

		const bannerLogoTitle = Html()
			.create("h1")
			.addClass("banner__logo__title")
			.text("Stonkify");

		const bannerNavList = Html()
			.create("ul")
			.addClass("banner__nav-list");

		//HOME BUTTON

		const homeViewItem = Html()
			.create("li")
			.addClass("nav-list__item");
		homeViewItem.addChild(
			Html()
				.create("a")
				.addClass("nav-list__anchor")
				.addAttribute("href", "homeBlock")
				.text("Home")
				.click(event => {
					event.preventDefault();
					// console.log("Home clicked!");
					this.renderContentBlock("homeBlock", "/");
				})
		);

		//ARTISTS BUTTON

		const artistsViewItem = Html()
			.create("li")
			.addClass("nav-list__item");
		artistsViewItem.addChild(
			Html()
				.create("a")
				.addClass("nav-list__anchor")
				.addAttribute("href", "allArtistsBlock")
				.text("Artists")
				.click(event => {
					event.preventDefault();
					// console.log("Artists clicked!");
					this.renderContentBlock("allArtistsBlock", "/");
				})
		);

		//ALBUMS BUTTON

		const albumsViewItem = Html()
			.create("li")
			.addClass("nav-list__item");
		albumsViewItem.addChild(
			Html()
				.create("a")
				.addClass("nav-list__anchor")
				.addAttribute("href", "allAlbumsBlock")
				.text("Albums")
				.click(event => {
					event.preventDefault();
					// console.log("Albums clicked!");
					this.renderContentBlock("allAlbumsBlock", "/");
				})
		);

		bannerLogoFigure.addChild(figureImg);
		bannerLogo.addChild(bannerLogoFigure);

		banner.addChild(bannerLogo);
		banner.addChild(bannerLogoTitle);

		bannerNavList.addChild(homeViewItem);
		bannerNavList.addChild(artistsViewItem);
		bannerNavList.addChild(albumsViewItem);
		banner.addChild(bannerNavList);

		wrapper.addChild(banner);
	}

	renderEmptyContentPane() {
		const wrapper = Html().select(".wrapper");
		const contentPane = Html()
			.create("section")
			.addClass("content");
		wrapper.addChild(contentPane);
	}

	renderMain() {
		const contentPane = Html().select(".content");

		const main = Html()
			.create("main")
			.addClass("main");

		contentPane.addChild(main);
	}

	renderFooter() {
		const contentPane = Html().select(".content");
		const footer = Html()
			.create("footer")
			.addClass("footer");
		const footerContents = Html()
			.create("h2")
			.html("&copy;2019 Stonkify Freemium");

		footer.addChild(footerContents);
		contentPane.addChild(footer);
	}
}
