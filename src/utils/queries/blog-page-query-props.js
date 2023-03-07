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
         }
         sys{
           publishedAt
         }
       }
     }
    }
`;
export default querySingleBlogPage;
