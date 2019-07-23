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
    
    const containerDiv = Html().create("div").addClass("container")
    main.addChild(containerDiv)
    this.renderArtistAvatar()
    this.renderArtistNav()

    const pageTitle = Html().create("h1").addClass("page-title").text("Albums")
    main.addChild(pageTitle)
    this.renderAlbumGallery()
    // this.testApi()
  }

  renderArtistAvatar(){
    const containerDiv = Html().select(".container")

    const avatarSect = Html().create("section").addClass("avatar")
    const avatarFig = Html().create("figure").addClass("avatar__figure")
    const artistImg = Html().create("img").addClass("avatar-figure__img-artist").addAttribute("src", "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxODMyODA0ODc3/frank-zappa-9540382-1-402.jpg")
    const artistNameHeading = Html().create("h1").addClass("avatar__title").text("Artist Name")
    
    avatarFig.addChild(artistImg)
    avatarSect.addChild(avatarFig)
    avatarSect.addChild(artistNameHeading)

    containerDiv.addChild(avatarSect)
  }

  renderArtistNav(){
    const containerDiv = Html().select(".container")

    const artistNav = Html().create("nav").addClass("artist-view__nav")
    const artistUl = Html().create("ul").addClass("artist-view__nav__list")
    let liElements

    const navItems = ["play", "about", "related"]

    liElements = navItems.map((navItem) =>{
      const liElement = Html().create("li").addClass("nav-list__item").text(navItem)
      artistUl.addChild(liElement)
    })

    artistNav.addChild(artistUl)
    containerDiv.addChild(artistNav)
  }

  renderAlbumGallery(){
    const main = CommonComponents().getMainContentBlock();

    const cardGallery = Html().create("section").addClass("card-gallery")

    // main.addChild(cardGallery)

    // let albumCards
    Api().getRequest(`http://localhost:8080/api/artists/1`, (responseObject) => {
      console.log(responseObject.albums)
      responseObject.albums.forEach((album) =>{
        const albumCard = Html().create("article").addClass("card")
        const albumTitle = Html().create("h3").addClass("card__title").text(album.title)
        const albumFig = Html().create("figure").addClass("card__title")
        const albumImg = Html().create("img").addAttribute("src", album.imgUrl)
        albumFig.addChild(albumImg)
        // const publishDate = Html().create("h4").addClass("album-card__date").text(album.date)

        albumCard.addChild(albumTitle)
        albumCard.addChild(albumFig)
        // albumCard.addChild(publishDate)
        cardGallery.addChild(albumCard)
      });
    }); 
    main.addChild(cardGallery) 
  }

  // testApi(){
  //   const main = CommonComponents().getMainContentBlock();
  //   Api().getRequest(`http://localhost:8080/api/artists/1`, (responseObject) => {
  //             console.log(responseObject.albums)
  //             responseObject.albums.forEach((album) =>{
  //               console.log(album)
  //               const albumTitle = Html().create("h3").addClass("card__title").text(album.title)
  //               main.addChild(albumTitle)
  //             })
              
  //               let name

  //               if (item.title) {
  //                   name = item.title
  //               } else if (item.firstName) {
  //                   name = `${item.firstName} ${item.lastName}`
  //               } else {
  //                   name = item.location
  //               }

  //               const contentBlockListItem = Html()
  //                   .create('li')
  //                   .addClass('content-block__list-item')
  //                   .addChild(Html()
  //                       .create('a')
  //                       .addAttribute('href', `/${requestedData}/${item.id}`)
  //                       .text(name));
  //               contentBlockList.addChild(contentBlockListItem);
            
  //       });
  // }
}
