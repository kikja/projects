import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 60,
        },
        desc: {
            type: String,
            required: true,
            maxlength: 200,
        },
        img: {
            type: String,
            required: true,
        },
        price: {
            type: [Number],
            required: true,
        },
        descoration: {
            type: String,
            required: true,
            maxlength: 20,
        },

    },
    { timestamps: true }
);
export default mongoose.models.Product || mongoose.model('Product', ProductSchema);