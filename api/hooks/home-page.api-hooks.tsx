
import useSWR from "swr"
import { homePageApi } from "../requests/home-page.api"

const useGetHomePageQuery = () => {
    return useSWR('/api/home-page/', homePageApi.getHomePage);
}

export const homePageHooks = {
    useGetHomePageQuery
}
