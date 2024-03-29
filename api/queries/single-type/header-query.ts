import { componentLinkQuery } from "../components/components/component-link-query";
import { componentLogoQuery } from "../components/components/component-logo-query";

export const headerQuery = (locale: string) => `
    header(locale: "${locale}"){
        data {
            attributes {
                logo {
                   ${componentLogoQuery}
                }
                navigation {
                    ... on ComponentComponentsLink {
                       ${componentLinkQuery}
                    }
                }
            }
        }
    }
`;
