/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";

async function errorMiddleware(err: string, req: Request, res: Response, next: NextFunction) {
  console.error('Middleware de erro: ', err);
  return res.sendStatus(500);
}

export default errorMiddleware;
