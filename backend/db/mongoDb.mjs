import mongoose from 'mongoose';
import 'dotenv/config'
import chalk from 'chalk';

const dbName = 'hackathon-project1'; // Define the database name
const url = `${process.env.MONGO_URL}/${dbName}`;

const connectToDB=async()=>{
    mongoose.connection.on("open", () => {
      console.log(chalk.white.bold.bgGreen("MongoDB connected"));
    });
    mongoose.connection.on("error", () => {
      console.error(chalk.bold.bgRed("Error in connecting MongoDB"));
    });
}

mongoose.connect(url)
export default connectToDB;