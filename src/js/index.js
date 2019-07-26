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
// componentManager.renderContentBlock("singleArtistBlock", "12");
componentManager.renderContentBlock("singleAlbumBlock", "20");
componentManager.renderContentBlock("singleAlbumBlock", "20");

// const parentEntities = componentManager.getParentEntities()
// console.log(parentEntities)
