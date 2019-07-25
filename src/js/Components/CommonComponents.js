import Html from "../Html/Html";
import logoAvatar from "../../images/memeMan.png";

export default function() {
  return new CommonComponents();
}

class CommonComponents {
  getAppContext() {
    return Html().select("#app");
  }

  getMainContentBlock() {
    const mainContentBlock = Html().select(".main");
    return mainContentBlock;
  }

  createPageSkeleton() {
    this.createWrapper();
    this.createSidebar();
    this.createContentPane();
    this.createMain();
    this.createFooter();
  }

  createWrapper() {
    const app = Html().select("#app");
    const wrapper = Html()
      .create("div")
      .addClass("wrapper");
    app.addChild(wrapper);
  }

  createSidebar() {
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

    const homeViewItem = Html()
      .create("a")
      .addClass("nav-list__anchor")
      .addAttribute("href", "./homeView.html");
    homeViewItem.addChild(
      Html()
        .create("li")
        .addClass("nav-list__item")
        .text("Home")
    );

    const searchViewItem = Html()
      .create("a")
      .addClass("nav-list__anchor")
      .addAttribute("href", "./searchView.html");
    searchViewItem.addChild(
      Html()
        .create("li")
        .addClass("nav-list__item")
        .text("Search")
    );

    const artistsViewItem = Html()
      .create("a")
      .addClass("nav-list__anchor")
      .addAttribute("href", "./artistsView.html");
    artistsViewItem.addChild(
      Html()
        .create("li")
        .addClass("nav-list__item")
        .text("Artists")
    );

    const albumsViewItem = Html()
      .create("a")
      .addClass("nav-list__anchor")
      .addAttribute("href", "./albumsView.html");
    albumsViewItem.addChild(
      Html()
        .create("li")
        .addClass("nav-list__item")
        .text("Albums")
    );

    const songsViewItem = Html()
      .create(a)
      .addClass("nav-list__anchor")
      .addAttribute("href", "./songsView.html");
    songsViewItem.addChild(
      Html()
        .create("li")
        .addClass("nav-list__item")
        .text("Songs")
    );

    // Nest Elements
    bannerLogoFigure.addChild(figureImg);
    bannerLogo.addChild(bannerLogoFigure);

    banner.addChild(bannerLogo);
    banner.addChild(bannerLogoTitle);

    bannerNavList.addChild(homeViewItem);
    bannerNavList.addChild(searchViewItem);
    bannerNavList.addChild(artistsViewItem);
    bannerNavList.addChild(albumsViewItem);
    bannerNavList.addChild(songsViewItem);
    banner.addChild(bannerNavList);

    wrapper.addChild(banner);
  }

  createContentPane() {
    const wrapper = Html().select(".wrapper");
    const contentPane = Html()
      .create("section")
      .addClass("content");
    wrapper.addChild(contentPane);
  }

  createMain() {
    const contentPane = Html().select(".content");

    const main = Html()
      .create("main")
      .addClass("main");

    contentPane.addChild(main);
  }

  createFooter() {
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
