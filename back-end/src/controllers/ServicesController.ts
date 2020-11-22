import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Services } from '../../models/Service';
import service_view from '../views/serviceView';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response) {
        const {
            name,
            url,
            description
        } = request.body;

        console.log("Inserting a new service into the database...");
        
        const servicesRepository = getRepository(Services);
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
        const servicesRepository = getRepository(Services);

        const service = await servicesRepository.findOneOrFail(id);

        return response.json(service_view.render(service));
    },

    async showAll(request: Request, response: Response) {
        const servicesRepository = getRepository(Services);

        const services = await servicesRepository.find();

        return response.json(service_view.renderMany(services));
    },

    async showByUrl(request: Request, response: Response) {
        let { url } = request.params;

        if (url.charAt(0) !== '/') url = '/' + url;

        const servicesRepository = getRepository(Services);

        const services = await servicesRepository.find();

        services.forEach((service) => {
            if (service.url === url) return response.json(service_view.render(service));
        });

    },

    async deleteAll(request: Request, response: Response) {
        const servicesRepository = getRepository(Services);

        servicesRepository.createQueryBuilder().delete().execute().then((res) => {
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