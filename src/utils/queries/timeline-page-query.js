const query = `
query {
  timelineCollection(limit: 1){
    items{
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
