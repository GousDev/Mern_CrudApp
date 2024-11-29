import mongoose from "mongoose";

const DB_OPTIONS={
    dbName:"crud"
};

const connectDB= async(DATABASE_URL)=>{
    try {
      await mongoose.connect(DATABASE_URL,DB_OPTIONS);
      console.log('Connected Succesfully');
    } catch (error) {
        console.log(error)
    }
}

export default connectDB