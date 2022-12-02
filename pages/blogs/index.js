import React, { useMemo, useState } from "react";
import HeaderSection from "../../src/components/HeaderSection";
import FooterSection from "../../src/components/FooterSection";
import { createClient } from "contentful";
import BlogCard from "../../src/components/BlogCard/BlogCard";
import Layout from "../../src/components/OtherPageLayout";
import { NextSeo } from "next-seo";
import logo from "../../public/images/logo.png";
import { SearchIcon } from "@heroicons/react/outline";
import SearchBox from "../../src/components/SearchBox/SearchBox";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });
  const resSEO = await client.getEntries({ content_type: "seo" });

  return {
    props: {
      blogs: res.items,
      seoData: resSEO.items,
    },
    revalidate: 1,
  };
}

function index({ blogs, seoData }) {
  const [searchQuery, SetSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const blogPageSEOData = seoData.filter(
    (data) => data.fields.whichPage == "Blogs Page"
  );
  const {
    title,
    description,
    url,
    pageImage,
    pageSeoImageType,
    pageImageAltText,
  } = blogPageSEOData[0].fields;
  const handleSearch = (query) => {
    SetSearchQuery(query);
  };

  const getFilteredBlogs = useMemo(() => {
    return filteredBlogs.filter((b) =>
      b.fields.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }, [filteredBlogs, searchQuery]);
  const { totalCount, data } = useMemo(() => {
    if (!filteredBlogs) return { totalCount: 0, data: {} };
    let filtered = filteredBlogs;
    if (searchQuery) {
      filtered = getFilteredBlogs;
    }
    // const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    // const finalData = paginate(sorted, currentPage, PAGESIZE);
    return { totalCount: filtered.length, data: filtered };
  }, [filteredBlogs, searchQuery]);
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: url,
          title: title,
          description: description,
          images: [
            {
              url: `https:${pageImage.fields.file.url}`,
              width: 800,
              height: 600,
              alt: pageImageAltText,
              type: pageSeoImageType,
            },
          ],
          type: "article",
        }}
      />
      <section className='px-4 py-5 min-h-screen lg:px-44 lg:py-8'>
        <div>
          <p className='text-xl text-personal_blue md:text-4xl md:leading-tight'>
            <strong>Blog</strong> Posts
          </p>
          <p class='text-base text-gray-600 my-2 md:text-xl'>
            I write articles about modern Full Stack Web Development. View my
            recent articles and blog posts.
          </p>
        </div>
        <SearchBox
          totalCount={totalCount}
          value={searchQuery}
          onChange={handleSearch}
        ></SearchBox>
        <div className='grid gap-10 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 '>
          {data.map((fb, i) => (
            <BlogCard key={i} {...fb.fields} {...fb.sys}></BlogCard>
          ))}
        </div>
      </section>
    </>
  );
}

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default index;
