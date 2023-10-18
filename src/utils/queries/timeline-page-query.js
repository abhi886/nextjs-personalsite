const query = `
query {
  everyDayBlockCollection(limit:10){
    items{
      date
      heading
      shortDescription
     description{
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
            assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
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
export default query;
