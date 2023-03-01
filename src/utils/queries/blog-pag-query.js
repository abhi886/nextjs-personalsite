const query = `query {
  blogCollection{
    items{
      title
      blogImage{
        url
      }
      slug
      sys{
        publishedAt
        
      }
    }
  }
  seoCollection(where:{whichPage:"Blogs Page"}){
    items{
      title
      description
      url
      pageImage{
        url
      }
      pageSeoImageType
      whichPage
      pageImageAltText
    }
  }
     }
`;
export default query;
