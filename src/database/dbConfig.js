import mongoose from "mongoose"; 

async function connectData () {
    mongoose.connect('mongodb+srv://varallo:varallo@cluster0.ggii1mk.mongodb.net/?retryWrites=true&w=majority');

    return mongoose.connection
}

export default connectData;