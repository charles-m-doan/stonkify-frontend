import CommonComponents from "./CommonComponents";
import SkeletonViewComponents from "./SkeletonViewComponents";
import SingleArtistViewComponents from "./SingleArtistViewComponents";
import ArtistsViewComponents from "./ArtistsViewComponents";
import SingleAlbumViewComponents from "./SingleAlbumViewComponents";
import HomeViewComponents from "./HomeViewComponents";
import AlbumsViewComponents from "./AlbumsViewComponents";
import Html from "../Html/Html";
import Api from "../Api/Api";

function renderPageSkeleton() {
	console.log("Render Page Skeleton!");
}

function renderContentBlockHome() {
	console.log("Render Home Content!");
}

function renderContentBlockAllArtists() {
	console.log("Render All Artists!");
}

function renderContentBlockAllAlbums() {
	console.log("Render All Albums!");
}

function renderContentBlockSingleArtist() {
	console.log("Render Single Artist!");
}

function renderContentBlockSingleAlbum() {
	console.log("Render Single Album!");
}

export {
	renderPageSkeleton,
	renderContentBlockHome,
	renderContentBlockAllArtists,
	renderContentBlockAllAlbums,
	renderContentBlockSingleArtist,
	renderContentBlockSingleAlbum
};
