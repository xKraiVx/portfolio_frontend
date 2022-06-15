import { normalizeHomePageData } from '@common/utils/normalize';
import { axiosDecorator } from '../index';
import { HomePageStrapi } from '@cms/types/home-page';

const getHomePage = async () => {

  const query = `
    query getHome {
        homePage{
            data{
            attributes{
            title
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
                          alternativeText
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
                        url
                        alternativeText
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
    const data = await axiosDecorator(query) as HomePageStrapi
    return normalizeHomePageData(data)
  } catch (error) {
    return error;
  }
}

export const homePageApi = {
  getHomePage
}