const querySingleWorkPage = `query GetWorksPostBySlug($slug: String!) {
  worksCollection(where: { 
  slug: $slug },
   limit: 1) {
    items {
      title
      jobPosition
      shortDescription
      siteUrl
      workDescription {
  json
  links {
    entries {
      inline {
        sys {
          id
        }
        __typename
        ... on CodeBlocks {
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

      readTime
      outcome
      coreApproach
      background
      language
      readTime
      blogImage {
        url
        width
        height
      }
     
      sys {
        publishedAt
      }
    }
  }
}
  `;
export default querySingleWorkPage;
