import mongoose from "mmongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxLenght: 60,
    },
    address: {
      type: String,
      required: true,
      maxLenght: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { tmestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
