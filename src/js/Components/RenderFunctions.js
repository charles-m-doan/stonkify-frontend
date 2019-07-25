// This script doesn't really do anything.  I was just practicing with exports and kept it around for reference. -Charles

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
