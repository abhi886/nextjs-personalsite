function getEntryMap(links) {
  // create an entry map
  const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  // eslint-disable-next-line no-restricted-syntax
  for (const entry of links) {
    entryMap.set(entry.sys.id, entry);
  }
  return entryMap;
}
export default getEntryMap;
