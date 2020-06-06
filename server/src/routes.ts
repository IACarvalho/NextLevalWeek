import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const pointsContreoller = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.post("/points", pointsContreoller.create);
routes.get('/points/:id', pointsContreoller.show)
routes.get('/points', pointsContreoller.index)

export default routes;
