import { Router, Request } from "express";
import ItunesService from "../../services/ItunesService";

const router = Router();

type SearchQueryParamers = {
  term: string;
  page: number;
}

router.get("/", async (request: Request<unknown, unknown, unknown, SearchQueryParamers>, response) => {
  const { term, page } = request.query;
  
  response.set("x-pagination-current-page", `${page}`);
  response.set("x-pagination-page-size", " 10");
  response.json(await ItunesService.search(term, page));
});

export default router;
