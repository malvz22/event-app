import prisma from "@/prisma";
import {Request, Response, NextFunction} from "express"

export class AuthController {
    async registerUser(req: Request, res: Response, next: NextFunction){
        try {

            const {username, email, firstName, lastName, password, referalcode} = req.body

            console.log(req.body);
            const newUser = await prisma.user.create({
                data: {
                    username,
                    email,
                    firstName,
                    lastName,
                    password,
                    referalcode
                }
            });

            res.status(201).send(newUser);

        } catch (error:any) {
            console.log(error);
            return res.status(500).send(error);
        }
    }
}