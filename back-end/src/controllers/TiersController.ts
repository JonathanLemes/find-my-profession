import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Tier } from '../../entity/Tier';
import tier_view from '../views/tier_view';
import * as Yup from 'yup';
import { Service } from '../../entity/Service';

interface Tier_data extends Tier {
    service_name: string
}

export default {
    async create(request: Request, response: Response) {
        const {
            name,
            price,
            service_id
        } = request.body;

        console.log("Inserting a new tier into the database...");
        
        const tiersRepository = getRepository(Tier);
        const data = {
            name,
            price: parseFloat(price),
            service_id: parseInt(service_id)
        }
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required(),
            service_id: Yup.number().required()
        });

        await schema.validate(data, {
            abortEarly: false
        });

        const tier_data = tiersRepository.create(data);
        await tiersRepository.save(tier_data);

        console.log("Tier created! Returning tier data...");

        return response.status(201).json(tier_data);
    },

    async createByServiceName(request: Request, response: Response) {
        const {
            name,
            price,
            service_name
        } = request.body;

        console.log("Looking for the service by name...");
        
        const servicesRepository = getRepository(Service);
        const services = await servicesRepository.find();
        let service_id = -1;

        services.forEach((service) => {
            if (service.name === service_name) service_id = service.id;
        });

        if (service_id === -1) return response.status(404).json({ message: "Error: Service not found!" });
        
        console.log("Service found! Inserting a new tier into the database...");
        
        const tiersRepository = getRepository(Tier);
        const data = {
            name,
            price,
            service_id
        }
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required(),
            service_id: Yup.number().required()
        });

        await schema.validate(data, {
            abortEarly: false
        });

        const tier_data = tiersRepository.create(data);
        await tiersRepository.save(tier_data);

        console.log("Tier created! Returning tier data...");

        return response.status(201).json(tier_data);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const tiersRepository = getRepository(Tier);
        const servicesRepository = getRepository(Service);

        const tier = await tiersRepository.findOneOrFail(id);
        const services = await servicesRepository.find();

        services.forEach((service) => {
            if (service.id === tier.service_id) {
                let tier_data = {
                    id: tier.id,
                    name: tier.name,
                    price: tier.price,
                    service_id: tier.service_id,
                    service_name: service.name
                }

                return response.json(tier_view.render(tier_data));
            }
        });
    },

    async showAll(request: Request, response: Response) {
        const tiersRepository = getRepository(Tier);
        const servicesRepository = getRepository(Service);

        const tiers = await tiersRepository.find();
        const services = await servicesRepository.find();

        let tiers_data: Tier_data[] = [];

        services.forEach((service) => {
            tiers.forEach((tier) => {
                if (service.id === tier.service_id) {
                    tiers_data.push({
                        id: tier.id,
                        name: tier.name,
                        price: tier.price,
                        service_id: tier.service_id,
                        service_name: service.name
                    });
                }
            });
        });

        return response.json(tier_view.renderMany(tiers_data));
    },

    async showByServiceUrl(request: Request, response: Response) {
        let { url } = request.params;

        if (url.charAt(0) !== '/') url = '/' + url;

        const tiersRepository = getRepository(Tier);
        const servicesRepository = getRepository(Service);

        const services = await servicesRepository.find();

        services.forEach(async (service) => {
            if (service.url === url) {
                const service_data = await servicesRepository.findOneOrFail(service.id);
                const tiers = await tiersRepository.find();
                
                let tiers_data: Tier_data[] = [];
        
                tiers.forEach((tier) => {
                    if (service_data.id === tier.service_id) {
                        tiers_data.push({
                            id: tier.id,
                            name: tier.name,
                            price: tier.price,
                            service_id: tier.service_id,
                            service_name: service_data.name
                        });
                    }
                });
        
                return response.json(tier_view.renderMany(tiers_data));
            }
        });
    }
}