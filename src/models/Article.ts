import { IArticle } from "@/interface/article";
import mongoose, { Schema } from "mongoose";


const ArticleSchema = new Schema<IArticle>({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryArticle',
        required: [true, 'Category is required']
    },
    imageUrl: {
        type: String,

    },
    slug: {
        type: String,
        required: [true, 'Slug is required']
    },
    published: {
        type: Boolean,
        default: false
    },
    imagenArray: {
        type: Array,
        default: []
    },
},
    {
        timestamps: true, // Agrega createdAt y updatedAt automáticamente
    });

const Article = mongoose.models.Article || mongoose.model('Article', ArticleSchema);

export { Article };