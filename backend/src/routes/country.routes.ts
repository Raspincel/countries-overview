import { Router } from "express";

const countryRouter = Router();
import {
  getAllCountriesController,
  getCountryByCodeController,
} from "../controllers/country.controllers";
import { countryCodeMiddleware } from "../middlewares/countries/country-code.middleware";

countryRouter.get("/", getAllCountriesController);
countryRouter.get("/:code", countryCodeMiddleware, getCountryByCodeController);

export default countryRouter;
