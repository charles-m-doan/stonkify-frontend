import CommonComponents from "./CommonComponents";
import Html from "../Html/Html";
import Api from "../Api/Api";

export default function() {
	return new AlbumsViewComponents();
}

class AlbumsViewComponents {

	renderAlbumsView() {
		CommonComponents().createPageSkeleton();
		this.renderMainContent();
	}
	  
	renderMainContent() {
		const main = CommonComponents().getMainContentBlock();
        console.log(main);

        const pageTitle = Html().create("h1").addClass("page-title").text("Albums")
        main.addChild(pageTitle);
        main.addChild(this.renderAlbums());
        // main.addChild(this.renderFeaturedAlbums());
        // main.addChild(this.renderFeaturedSongs());
    }

    renderAlbums(){
        const albumsSect = Html().create("section").addClass("card-gallery");

        Api().getRequest(`http://localhost:8080/api/albums`, (responseObject) => {
            responseObject.forEach((album) =>{
                const albumCard = Html().create("article").addClass("card");
                const albumTitle = Html().create("h3").addClass("card__title").text(album.title);
                const albumCover = Html().create("figure").addClass("album-card__cover-image");
                const coverImg = Html().create("img").addAttribute("src", album.imgUrl);
                const artistName = Html().create("h4").addClass("album-card__artist-name").text("Artist name not found");
                const releaseDate = Html().create("h5").addClass("album-card__date").text("Publish date not found");

                albumCover.addChild(coverImg);
                albumCard.addChild(albumTitle);
                albumCard.addChild(albumCover);
                albumCard.addChild(artistName);
                albumCard.addChild(releaseDate);

                albumsSect.addChild(albumCard);
            })
        })
        return albumsSect;
    }


}