const query = `
query {
    timelineCollection(limit: 2){
      items{
       sys {
         publishedAt
       }
       everyDay{
         json
           links{
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
                 entries{
             inline{
               sys{
                 id
               }
                __typename
                   ... on EveryDayBlock {
                     date
                     description {
                       json
                       links{
                         entries{
                          inline {
                           sys{
                             id
                           }
                           
                         }
                         }
                       }
                       
                     }
                     heading
                   }
             }
                     block {
                   sys {
                     id
                   }
                   __typename
                   ... on EveryDayBlock {
                    heading
                     description {
                       json
                     }
                     date
                     shortDescription
                     
                                 }
   
                 }
            
       }
             
       }
         
     }
   }
   }
   }
     
   `;
export default query;
