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
   blogCollection(where:{displayFrontPage:true}){
    items{
      displayFrontPage
      title
      slug
      readTime
      languages
      blogImage{
        url
      }
      blogDescription{
        json 
      }
      sys{
        firstPublishedAt
      }
    }
  }
  worksCollection(where:{featuredWork:true}) {
    items{
      thumbnail{
        url
      }
      title
      shortDescription
      language
      gitUrl
      siteUrl
      slug
    }
  }
   }
   `;
export default query;
