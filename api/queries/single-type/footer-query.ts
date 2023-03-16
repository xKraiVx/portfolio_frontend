import { componentLinkQuery } from "../components/components/component-link-query";

export const footerQuery = (locale: string) => `
    footer(locale: "${locale}"){
        data {
            attributes {
                rights
                designed_by {
                    ${componentLinkQuery}
                }
            }
        }
    }
`;
