import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Service } from '../../entity/Service';
import service_view from '../views/service_view';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response) {
        const {
            name,
            url,
            description
        } = request.body;

        console.log("Inserting a new service into the database...");
        
        const servicesRepository = getRepository(Service);
        const data = {
            name,
            url,
            description
        }
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            url: Yup.string().required(),
            description: Yup.string().required()
        });

        await schema.validate(data, {
            abortEarly: false
        });

        const service_data = servicesRepository.create(data);
        await servicesRepository.save(service_data);

        console.log("Service created! Returning service data...");

        return response.status(201).json(service_data);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const servicesRepository = getRepository(Service);

        const service = await servicesRepository.findOneOrFail(id);

        return response.json(service_view.render(service));
    },

    async showAll(request: Request, response: Response) {
        const servicesRepository = getRepository(Service);

        const service = await servicesRepository.find();

        return response.json(service_view.renderMany(service));
    }
}