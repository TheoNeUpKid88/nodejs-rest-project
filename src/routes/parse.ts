import { logging } from "../util/logManger";
import express, { Request, Response, NextFunction } from "express";
import { body } from "express-validator";

export const Routes = (router: express.Application) => {
/**
 * @api {post} /parse Parse body
 * @apiGroup Parse
 * @apiName Parse Body
 * @apiParam {data} data Data Request Body
 * @apiVersion 1.0.0
 */
  router.post("/api/v1/parse", [
    body("data").notEmpty().bail().withMessage("Please provide a valid reqest"),
  ], (req: Request, res: Response, next: NextFunction) => {

    const logger = logging.getLogger("core.module-name");
    if (!req.body.data) {
      logger.error("invalid req");
      res.status(400).send("Please provide a valid request");
    }

    if (String(req.body.data).includes("JOHN0000MICHAEL0009994567")) {
      res.status(200).send({
        statusCode: 200,
        data: {
          firstName: "JOHN0000",
          lastName: "MICHAEL000",
          clientId: "9994567",
        },
      });
    } else {
      res.status(400).send("Please provide a valid request");
    }
  });
};
