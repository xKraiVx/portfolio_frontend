import { axiosDecorator } from "../index";
import { homeQuery } from "@api/queries/page/home-query";
import { IHome } from "@cms/types/page/home";
import { normalizeHome } from "@cms/normalize/page/normalize-home";
import { getQuery } from "@api/queries";

const getHomePage = async (locale: string = "en") => {
  try {
    const data = await axiosDecorator<IHome>(
      getQuery("home", homeQuery(locale))
    );
    return normalizeHome(data);
  } catch (error) {
    return error;
  }
};

export const homePageApi = {
  getHomePage,
};
