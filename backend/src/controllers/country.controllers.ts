import { Request, Response } from "express";
import getAllCountriesService from "../services/country/getAll";
import getOneCountry from "../services/country/getOne";

export async function getAllCountriesController(req: Request, res: Response) {
  const { data, status } = await getAllCountriesService();
  res.status(status).json({ countries: data });
}

export async function getCountryByCodeController(req: Request, res: Response) {
  const { code } = req.params;

  const data = await getOneCountry(code);
  res.status(200).json(data);
}
