import { IBlogN } from "@cms/normalized-types/page/blog-normalized";
import PostsList from "@features/widgets/posts-list/posts-list";
import { DefaultLayout } from "@layouts/default-layout/default-layout";
import { Container, Typography } from "@mui/material";
import { blogPageApi } from "@requests/blog-page.api";
import { homePageApi } from "@requests/home-page.api";
import { GetStaticProps, NextPage } from "next";

const Blog: NextPage<IBlogN> = (data) => {
  const { header, blogPage, posts } = data;
  const { seo, title } = blogPage || {};

  homePageApi.getHomePage("en");

  return (
    <DefaultLayout headerData={header} seo={seo}>
      <Container>
        <Typography variant="h1">{title}</Typography>
        <PostsList postsData={posts} />
      </Container>
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
