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

import * as rendering from "./Components/RenderFunctions";
import ComponentManager from "./Components/ComponentManager";

console.log("Starting App!");

rendering.renderPageSkeleton();

rendering.renderContentBlockHome();

rendering.renderContentBlockAllArtists();

rendering.renderContentBlockAllAlbums();

rendering.renderContentBlockSingleArtist();

rendering.renderContentBlockSingleAlbum();

let componentManager = new ComponentManager();

componentManager.renderPageSkeleton();
componentManager.renderPageSkeleton();
componentManager.renderPageSkeleton();
