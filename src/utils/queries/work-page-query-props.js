const querySingleWorkPage = `query GetWorksPostBySlug($slug: String!) {
  worksCollection(where: { 
  slug: $slug },
   limit: 1) {
    items {
      title
      readTime
      workParser
      blogImage {
        url
        width
        height
      }
     
      sys {
        publishedAt
      }
    }
  }
}
  `;
export default querySingleWorkPage;
