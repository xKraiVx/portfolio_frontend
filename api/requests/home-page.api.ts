import { normalizeHomePageData } from '@common/utils/normalize';
import { axiosDecorator } from '../index';
import { HomePStrapi } from '@cms/types/home-page';
import { HomePNormalized } from '@common/types/home-page';

const getHomePage = async (): Promise<HomePNormalized> => {

  const query = `
    query getHome {
      homePage{
        data{
          attributes{
          title
          widgets{
            ... on ComponentHomeWidgetHero{
              id
              name
              slide {
                text,
                video {
                  data{
                    attributes{
                      url,
                      alternativeText,
                      width,
                      height
                    }
                  }
                },
                image {
                  data{
                    attributes{
                      url,
                      alternativeText,
                      width,
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    header{
      data{
        attributes{
          navigation{
            ... on ComponentComponentsLink{
              text,
              icon{
                data{
                  attributes{
                    url,
                    alternativeText,
                    width,
                    height
                  }
                }
              },
              href
            }
          }
          logo{
            image{
              data{
                attributes{
                  url,
                  alternativeText,
                  width,
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`

  try {
    const data = await axiosDecorator(query);
    return normalizeHomePageData(data);
  } catch (error) {
    return error;
  }
}

export const homePageApi = {
  getHomePage
}