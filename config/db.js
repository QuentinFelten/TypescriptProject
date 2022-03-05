const mongoose = require("mongoose"); // Uses promises

// Connect to database with mongoose
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // Returns promise

    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
