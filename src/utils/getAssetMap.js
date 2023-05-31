function getAssetMap(links) {
  // create an entry map
  const assetMap = new Map();
  // loop through the block linked entries and add them to the map
  // eslint-disable-next-line no-restricted-syntax
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }
  return assetMap;
}
export default getAssetMap;
