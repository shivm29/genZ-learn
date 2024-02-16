import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema(
    {
        comment: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            default: 0
        },
        videoId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        replies: {
            type: [mongoose.Schema.Types.ObjectId]
        },
        parentComment: {
            type: mongoose.Schema.Types.ObjectId,
            default: null
        }
    },
    { timestamps: true }
);

export default mongoose.model('comments', commentsSchema)
