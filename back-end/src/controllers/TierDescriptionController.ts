import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Tiers } from '../../models/Tier';
import { TierDescription } from '../../models/TierDescription';
import tier_description_view from '../views/tierDescriptionView';
import * as Yup from 'yup';

interface TierDescription_data extends TierDescription {
    tier_name: string
}

export default {
    async create(request: Request, response: Response) {
        const {
            name,
            tier_id
        } = request.body;

        console.log("Inserting a new tier description into the database...");
        
        const tiersDescriptionRepository = getRepository(TierDescription);
        const data = {
            name,
            tier_id: parseInt(tier_id)
        }
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            tier_id: Yup.number().required()
        });

        await schema.validate(data, {
            abortEarly: false
        });

        const tier_description_data = tiersDescriptionRepository.create(data);
        await tiersDescriptionRepository.save(tier_description_data);

        console.log("Tier description created! Returning tier description data...");

        return response.status(201).json(tier_description_data);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const tiersRepository = getRepository(Tiers);
        const tiersDescriptionRepository = getRepository(TierDescription);

        const tier_description = await tiersDescriptionRepository.findOneOrFail(id);
        const tiers = await tiersRepository.find();

        tiers.forEach((tier) => {
            if (tier.id === tier_description.tier_id) {
                let tier_description_data = {
                    id: tier_description.id,
                    name: tier_description.name,
                    tier_id: tier_description.id,
                    tier_name: tier.name
                }

                return response.json(tier_description_view.render(tier_description_data));
            }
        });
    },

    async showAll(request: Request, response: Response) {
        const tiersRepository = getRepository(Tiers);
        const tierDescriptionRepository = getRepository(TierDescription);

        const tiers = await tiersRepository.find();
        const tier_descriptions = await tierDescriptionRepository.find();

        let tier_descriptions_data: TierDescription_data[] = [];

        tiers.forEach((tier) => {
            tier_descriptions.forEach((tier_description) => {
                if (tier.id === tier_description.tier_id) {
                    tier_descriptions_data.push({
                        id: tier_description.id,
                        name: tier_description.name,
                        tier_id: tier_description.tier_id,
                        tier_name: tier.name
                    });
                }
            });
        });

        return response.json(tier_description_view.renderMany(tier_descriptions_data));
    },

    async deleteAll(request: Request, response: Response) {
        const tiersDescriptionRepository = getRepository(TierDescription);

        tiersDescriptionRepository.createQueryBuilder().delete().execute().then((res) => {
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