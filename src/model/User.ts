import mongoose, {Schema, Document} from "mongoose";
import { boolean } from "zod";


export interface Message extends Document{
    content: String;
    createdAt: Date;
}

const MessageSchema: Schema <Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
}) 


export interface User extends Document{
    username: String;
    email: String;
    password: String;
    verifyCode: String;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}

const UserSchema: Schema <User> = new Schema({
    username: {
        type: String,
        required: [true, "Username Required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "E-mail Required"],
        unique: true,
        match: [/.+\@.+\../, "Use a valid E-mail"]
    },
    password: {
        type: String,
        required: [true, "Password Required"]
    },
    verifyCode: {
        type: String,
        required: [true, "Verify Code is Required"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify Code Expiry is Required"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
}) 


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;