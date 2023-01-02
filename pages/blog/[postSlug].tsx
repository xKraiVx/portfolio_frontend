import { DefaultLayout } from "@layouts/default-layout/default-layout";
import { ELocalization } from "@cms/types/general/enums/localization";
import { postApi } from "@api/requests/post.api";
const Post = ({ data }: any): JSX.Element => {
  const getPost = async () => {
    const test: any = await postApi.getPostPage("en", "test");
    console.log(test.post.attributes);

    return test;
  };
  getPost();

  return (
    <DefaultLayout>
      <main>
        <h1>{data}</h1>
      </main>
    </DefaultLayout>
  );
};

export default Post;

export async function getStaticPaths() {
  const postSlugs = await postApi.getPostSlugs();

  const paths = postSlugs.reduce((acc, postSlug) => {
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

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = "";
  return {
    props: {
      data,
    },
  };
}
