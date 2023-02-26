import { IBlogN } from "@cms/normalized-types/page/blog-normalized";
import { DefaultLayout } from "@layouts/default-layout/default-layout";
import { blogPageApi } from "@requests/blog-page.api";
import { GetStaticProps, NextPage } from "next";

const Blog: NextPage<IBlogN> = (data) => {
  const { header, blogPage } = data;
  const { seo, title } = blogPage || {};
  const test = blogPageApi.getBlogPage("en");

  return (
    <DefaultLayout headerData={header} seo={seo}>
      {title}
    </DefaultLayout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await blogPageApi.getBlogPage(locale);

  return {
    props: {
      ...data,
    },
  };
};
