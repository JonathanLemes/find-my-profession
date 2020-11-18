import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../entity/User';
import * as Yup from 'yup';
import user_view from '../views/user_view';

export default {
    async create(request: Request, response: Response) {
        const {
            firstName,
            lastName,
            email,
            address,
            country,
            state,
            zip,
            tier_id
        } = request.body;

        console.log("Inserting a new user into the database...");
        
        const usersRepository = getRepository(User);
        const data = {
            firstName,
            lastName,
            email,
            address,
            country,
            state,
            zip,
            tier_id: parseInt(tier_id)
        }
        const schema = Yup.object().shape({
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            email: Yup.string().required(),
            address: Yup.string().required(),
            country: Yup.string().required(),
            state: Yup.string().required(),
            zip: Yup.string().required(),
            tier_id: Yup.number().required()
        });

        await schema.validate(data, {
            abortEarly: false
        });

        const user_data = usersRepository.create(data);
        await usersRepository.save(user_data);

        console.log("User created! Returning user data...");

        return response.status(201).json(user_data);
    },

    async showAll(request: Request, response: Response) {
        const usersRepository = getRepository(User);

        const users = await usersRepository.find();

        let users_data: User[] = [];

        users.forEach((user) => {
            users_data.push({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                address: user.address,
                country: user.country,
                state: user.state,
                zip: user.zip,
                tier_id: user.tier_id
            });
        });

        return response.json(user_view.renderMany(users_data));
    },

    async deleteAll(request: Request, response: Response) {
        const usersRepository = getRepository(User);

        usersRepository.createQueryBuilder().delete().execute().then((res) => {
            response.status(401).json({
                check: true,
                res: res
            });
        }).catch((err) => {
            response.status(500).json({
                check: false,
                res: err
            });
        });
    }
}