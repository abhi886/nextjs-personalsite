const query = `
query {
  profileCollection(limit: 2){
   items{
     fullName
     position
     facebookLink
     githubLink
     linkedinLink
     location
     profileImage {
       url    
     }
     profileDescription{
       json
       
     }
     fullProfileDescription{
      json
      
      links{
        
        entries{
          inline{
            sys{
              id
            }
             __typename
                ... on BasicDiv {
                  heading
                  description {
                    json
                  }
                }
          }
           block {
                sys {
                  id
                }
                __typename
                ... on BasicDiv {
                 heading
                  description {
                    json
                  }
                  
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
