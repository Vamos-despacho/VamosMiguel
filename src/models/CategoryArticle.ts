import mongoose, { Schema, model } from 'mongoose'

const CategoryArticleSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Category is required'],
        unique: true
    },

});

CategoryArticleSchema.methods.toJSON = function () {
    const { __v, ...name } = this.toObject();

    return name
}

// export default model('CategoryArticle', CategoryArticleSchema)
const CategoryArticle = mongoose.models.CategoryArticle || mongoose.model('CategoryArticle', CategoryArticleSchema);

export { CategoryArticle };
