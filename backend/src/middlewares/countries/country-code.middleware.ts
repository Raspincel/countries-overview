import { Request, Response, NextFunction } from "express";

export function countryCodeMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { code } = req.params;

  if (!code) {
    res.status(400).json({
      message: "Country code is required",
    });
    return;
  }

  if (code.length !== 2) {
    res.status(400).json({
      message: "Country code must have 2 characters",
    });
    return;
  }

  next();
}
