import { IPagination } from "@cms/types/general/strapi-node";
import { Pagination, SxProps } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";

interface Props {
  paginationData: IPagination;
  currentPage: number;
  route: string;
  sx?: SxProps;
}

export const UiPagination = ({
  paginationData,
  sx,
  route,
  currentPage = 1,
}: Props) => {
  const { pageCount } = paginationData || {};
  const router = useRouter();

  const handleChange = (e: ChangeEvent, page: number) => {
    router.push(`${route}/page-${page}`);
  };

  if (!paginationData || pageCount === 1) {
    return null;
  }

  return (
    <Pagination
      onChange={handleChange}
      page={currentPage}
      sx={sx}
      count={pageCount}
      color="primary"
    />
  );
};
