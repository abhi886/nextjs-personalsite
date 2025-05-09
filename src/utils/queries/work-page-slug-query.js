const query = `query {
    worksCollection(where: { slug_exists: true }){
     items{
       slug
     }
   }
        }
   `;
export default query;
