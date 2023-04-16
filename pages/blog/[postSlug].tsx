import { DefaultLayout } from "@layouts/default-layout/default-layout";
import { ELocalization } from "@cms/types/general/enums/localization.enum";
import { postApi } from "@api/requests/post.api";
import { blogPageApi } from "@requests/blog-page.api";
import { EDynamicPageType } from "@common/enums/dynamic-page-type.enum";
import { Box, Container, Typography } from "@mui/material";
import PostsList from "@features/widgets/posts-list/posts-list";
import { IBlogN } from "@cms/normalized-types/page/blog-normalized";
import { TextEditor } from "@common/components/text-editor/text-editor";
import { ISinglePostN } from "@cms/normalized-types/page/single-post-normalized.type";

type Props =
  | {
      data: IBlogN;
      pageNumber: number;
      type: EDynamicPageType.BLOG;
    }
  | {
      data: ISinglePostN;
      type: EDynamicPageType.POST;
    };

const PostSlug = (props: Props): JSX.Element => {
  const { type, data } = props;

  if (type === EDynamicPageType.BLOG) {
    const { header, blogPage, posts } = data;
    const { seo, title } = blogPage || {};

    return (
      <DefaultLayout headerData={header} seo={seo}>
        <Container>
          <Typography variant="h1">{title}</Typography>
          <PostsList postsData={posts} currentPage={props.pageNumber} />
        </Container>
      </DefaultLayout>
    );
  }

  const { post, header } = data;
  const { title, seo, description } = post;

  return (
    <DefaultLayout headerData={header} seo={seo}>
      <Container>
        <Typography variant="h1">{title}</Typography>
        <Box>
          <TextEditor data={description} />
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default PostSlug;

export async function getStaticPaths() {
  const preparePaths = async () => {
    const blogPagePaths = await Object.values(ELocalization).reduce(
      async (acc, local) => {
        const { posts } = await blogPageApi.getBlogPage(local);

        const pages = posts?.pagination?.pageCount || 0;
        if (pages === 0) {
          return acc;
        }
        for (let pageNumber = 1; pageNumber <= pages; pageNumber++) {
          (await acc).push({
            params: {
              postSlug: `page-${pageNumber}`,
            },
            locale: local,
          });
        }

        return acc;
      },
      Promise.resolve([])
    );

    const postSlugs = await postApi.getPostSlugs();
    const postSlugPaths = postSlugs.reduce((acc, postSlug) => {
      Object.keys(ELocalization).forEach((locale) =>
        acc.push({
          params: {
            postSlug,
          },
          locale: ELocalization[locale],
        })
      );
      return acc;
    }, []);

    return [...blogPagePaths, ...postSlugPaths];
  };

  const paths = await preparePaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params, locale } = context;

  if (params.postSlug.includes("page-")) {
    const pageNumber = Number(params.postSlug.split("-")[1]);
    const blogPageData = await blogPageApi.getBlogPage(locale, pageNumber);
    return {
      props: {
        data: blogPageData,
        type: EDynamicPageType.BLOG,
        pageNumber,
      },
    };
  }

  const postPageData = await postApi.getPostPage(locale, params.postSlug);

  return {
    props: {
      data: postPageData,
      type: EDynamicPageType.POST,
    },
  };
}
