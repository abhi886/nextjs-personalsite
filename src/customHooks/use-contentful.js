/* eslint-disable no-console */
// const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_KEY } = process.env;
const { CONTENTFUL_SPACE_ID } = process.env;
const { CONTENTFUL_ACCESS_KEY } = process.env;
const useContentful = async (query) => {
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/?access_token=${CONTENTFUL_ACCESS_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
      }
    );
    const { data } = await res.json();
    return data;
  } catch (e) {
    console.error(e.message);
    throw new Error('Cant fetch');
  }
};
export default useContentful;
