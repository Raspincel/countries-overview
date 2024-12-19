import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export class AppError extends Error {
  public readonly status: number;

  constructor(_status: number = 400, _message: string) {
    super(_message);
    this.status = _status;
  }
}

export const errorHandler: ErrorRequestHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error handler:", err);
  console.error("At:", new Date().toISOString());
  console.error("Request:", req.method, req.url);
  console.error("Body:", req.body);
  console.error("Headers:", req.headers);
  console.error("IP:", req.ip);

  if (err instanceof AppError) {
    res.status(err.status).json({ message: err.message });
    return;
  }

  res.status(500).json({ message: "Interval server error." });
};
