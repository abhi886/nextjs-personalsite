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
    seoCollection{
      items{
        title
        description
        url
        pageImage{
          url
        }
        pageSeoImageType
      }
    }
       }`;
export default query;
