import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    id : {type : mongoose.Schema.Types.UUID },
    name : {type : String, required : true},
    price : {type : Number, require : true}
}, {versionKey : false});

const product = mongoose.model('product', ProductSchema);

export default product;