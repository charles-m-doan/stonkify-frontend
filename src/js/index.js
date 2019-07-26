import ComponentManager from "./Components/ComponentManager";

const blockTypes = [
	"unknownBlock",
	"homeBlock",
	"allArtistsBlock",
	"allAlbumsBlock",
	"singleArtistBlock",
	"singleAlbumBlock"
];

console.log("Starting App!");
let componentManager = new ComponentManager();
componentManager.renderContentBlock("homeBlock", "");
// componentManager.renderContentBlock("singleArtistBlock", "27");
// componentManager.renderContentBlock("singleAlbumBlock", "20");
