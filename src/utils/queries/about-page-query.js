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
     fullProfileDescription{
      json
    }
   }
 }
     }
   `;
export default query;
