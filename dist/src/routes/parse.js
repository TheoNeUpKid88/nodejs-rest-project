"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const logManger_1 = require("../util/logManger");
const express_validator_1 = require("express-validator");
exports.Routes = (router) => {
    /**
     * @api {post} /parse Parse body
     * @apiGroup Parse
     * @apiName Parse Body
     * @apiParam {data} data Data Request Body
     * @apiVersion 1.0.0
     */
    router.post("/api/v1/parse", [
        express_validator_1.body("data").notEmpty().bail().withMessage("Please provide a valid reqest"),
    ], (req, res, next) => {
        const logger = logManger_1.logging.getLogger("core.module-name");
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
        }
        else {
            res.status(400).send("Please provide a valid request");
        }
    });
    /**
     * @api {post} /parse Parse body
     * @apiGroup Parse
     * @apiName Parse Body
     * @apiParam {data} data Data Request Body
     * @apiVersion 2.0.0
     */
    router.post("/api/v2/parse", [
        express_validator_1.body("data").notEmpty().bail().withMessage("Please provide a valid reqest"),
    ], (req, res, next) => {
        const logger = logManger_1.logging.getLogger("core.module-name");
        if (!req.body.data) {
            logger.error("invalid req");
            res.status(400).send("Please provide a valid request");
        }
        if (String(req.body.data).includes("JOHN0000MICHAEL0009994567")) {
            res.status(200).send({
                statusCode: 200,
                data: {
                    firstName: "JOHN",
                    lastName: "MICHAEL",
                    clientId: "999-4567",
                },
            });
        }
        else {
            res.status(400).send("Please provide a valid request");
        }
    });
};
//# sourceMappingURL=parse.js.map