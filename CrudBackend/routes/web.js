import express from "express";
import crudController from "../controller/crudController.js";

const router=express.Router()

router.get("/getAll",crudController.getAll);
router.get("/edit/:id",crudController.getEdit);

router.post("/create",crudController.create);

router.put("/update/:id",crudController.update);

router.delete("/delete/:id",crudController.delete)

export default router