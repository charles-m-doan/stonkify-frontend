// import SkeletonViewComponents from "./Components/SkeletonViewComponents";
// import SingleArtistViewComponents from "./Components/SingleArtistViewComponents";
// import ArtistsViewComponents from "./Components/ArtistsViewComponents";
// import SingleAlbumViewComponents from "./Components/SingleAlbumViewComponents";
// import HomeViewComponents from "./Components/HomeViewComponents";
// import AlbumsViewComponents from "./Components/AlbumsViewComponents";
// SkeletonViewComponents().renderSkeletonView();
// SingleArtistViewComponents().renderSingleArtistView();
// ArtistsViewComponents().renderArtistsView();
// SingleAlbumViewComponents().renderSingleAlbumView();
// HomeViewComponents().renderHomeView();
// AlbumsViewComponents().renderAlbumsView();
// import * as rendering from "./Components/RenderFunctions";

import ComponentManager from "./Components/ComponentManager";

const blockTypes = [
	"unknownBlock",
	"homeBlock",
	"allArtistsBlock",
	"allAlbumsBlock"
];

console.log("Starting App!");
let componentManager = new ComponentManager();
componentManager.renderContentBlock("homeBlock");

// componentManager.renderContentBlock("allArtistsBlock");

// componentManager.renderContentBlock("allAlbumsBlock");

// rendering.renderPageSkeleton();
// rendering.renderContentBlockHome();
// rendering.renderContentBlockAllArtists();
// rendering.renderContentBlockAllAlbums();
// rendering.renderContentBlockSingleArtist();
// rendering.renderContentBlockSingleAlbum();
