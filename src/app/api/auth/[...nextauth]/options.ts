import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any): Promise<any> {
                await dbConnect()
                try {
                    const user = await UserModel.findOne({
                        $or: [
                            { email: credentials.identifier },
                            { username: credentials.identifier }
                        ]
                    })
                    if (!user) {
                        throw new Error("No User Found With This Email");
                    }
                    if (!user.isVerified) {
                        throw new Error("Verify Your Account");
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.password.toString(), user.password.toString());
                    if (isPasswordCorrect) {
                        return user
                    } else {
                        throw new Error("Invalid Password");
                    }
                } catch (err: any) {
                    throw new Error(err)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id?.toString()
                token.isverified = user.isverified;
                token.isAcceptingMessages = user.isAcceptingMessages;
                token.username = user.username
            }

            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id
                session.user.isverified = token.isverified
                session.user.isAcceptingMessages = token.isAcceptingMessages
                session.user.username = token.username
            }

            return session
        }
    },
    pages: {
        signIn: '/sign-in',
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}