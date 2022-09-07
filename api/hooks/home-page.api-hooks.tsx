
import useSWR from "swr"
import { homePageApi } from "../requests/home-page.api"

const useGetHomePageQuery = (local) => {
    return useSWR(`/api/home-page/${local}`, () => homePageApi.getHomePage(local));
}

export const homePageHooks = {
    useGetHomePageQuery
}
