const query = `
query {
  profileCollection{
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
   }
 }
   seoCollection{
     items{
       title,
       description,
       url,
       pageImage{
         url
       },
       pageSeoImageType,
       pageImageAltText
       
     }
   }
   }
 
 
   `;
export default query;
