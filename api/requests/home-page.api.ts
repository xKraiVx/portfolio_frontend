import { axiosDecorator } from "../index";
import { homeQuery } from "@api/queries/page/home-query";
import { IHome } from "@cms/types/page/home";
import { normalizeHome } from "@cms/normalize/page/normalize-home";
import { getQuery } from "@api/queries";

const getHomePage = async (locale: string = "en") => {
  const data = await axiosDecorator<IHome>(getQuery("home", homeQuery(locale)));
  return normalizeHome(data);
};

export const homePageApi = {
  getHomePage,
};
