const querySingleBlogPage = `query GetBlogPostBySlug($slug:String!) {
  blogCollection(where: {
   slug:$slug
 }, limit:1){
       items{
        languages
         title
         readTime
         blogImage{
           url
           width
           height
         }
         blogDescription{
          json
          links{
            entries{
              inline{
                 sys{
            id
          }
              __typename
              ... on CodeBlocks{
                title
                codeBlockContent
              }
              }
              block {
                sys {
                  id
                }
                __typename
                ... on CodeBlocks {
                 title
                 codeBlockContent
                  
                              }

              
              }
            }
          }
        }
         sys{
           publishedAt
         }
       }
     }
    }
`;
export default querySingleBlogPage;
