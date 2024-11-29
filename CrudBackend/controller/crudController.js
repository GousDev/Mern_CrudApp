import userModel from "../models/crudmodel.js";

class crudController {
  //to get all documents
  static getAll = async (req, res) => {
    try {
      const result = await userModel.find();
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  };

  //to create a Document
  static create = async (req, res) => {
    try {
      const { name, age, email } = req.body;
      const result = new userModel({
        name,
        age,
        email,
      });
      await result.save();
      res.json({ success: true, message: " User Added Succesfully " });
    } catch (error) {
      console.log(error);
    }
  };

  //to get document for edit
  static getEdit = async (req, res) => {
    try {
      const { id } = req.params.id;
      // console.log(req.params.id);
      const result = await userModel.findById(req.params.id);
      // console.log(result)
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  };

  //to update the document
  static update = async (req, res) => {
    try {
      // const {id}=req.params.id;
      // console.log(req.body)
      const result = await userModel.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
      });
      res.json(result);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  //to delete a document
  static delete = async (req, res) => {
    try {
      // const { id }=req.params.id;
      // console.log(req.params.id)
      const result = await userModel.findByIdAndDelete(req.params.id);
      // console.log(result);
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  };
}

export default crudController;
