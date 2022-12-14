import mongoose from "mmongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLenght: 60,
    },
    desc: {
      type: String,
      required: true,
      maxLenght: 200,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  },
  { tmestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
