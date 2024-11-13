import mongoose, { Schema, Document, Model } from "mongoose";

interface IVisit extends Document {
  date: Date;
  count: number;
}

const VisitSchema: Schema<IVisit> = new Schema({
  date: {
    type: Date,
    required: true,
    default: () => new Date().setHours(0, 0, 0, 0),
  },
  count: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Visit: Model<IVisit> =
  mongoose.models.Visit || mongoose.model<IVisit>("Visit", VisitSchema);
export default Visit;
