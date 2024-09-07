import mongoose, { Document, Model } from 'mongoose';

interface IdeaDocument extends Document {
    content: string;
    autor: string;
}

interface IdeaModel extends Model<IdeaDocument> {
    getIdeas(): Promise<IdeaDocument[]>;
    postIdea(content:string , autor:string): Promise<IdeaDocument>;
    getIdeaById(id: string): Promise<IdeaDocument | null>;
}

const ideaSchema = new mongoose.Schema({
    content: String,
    autor: String
});

ideaSchema.statics.getIdeas = async function() {
    return await this.find().lean();
};

ideaSchema.statics.getIdeaById = async function(id: string) {
    return await this.findOne({ _id: id }).lean();
};

ideaSchema.statics.postIdea = async function (content:string , autor:string) {
    return await this.create({content, autor});
}

const Idea = mongoose.model<IdeaDocument, IdeaModel>('Idea', ideaSchema);

export = Idea;