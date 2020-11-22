import { TierDescription } from '../../models/TierDescription';

interface TierDescription_data extends TierDescription {
    tier_name: string
}

export default {
    render(tier_description: TierDescription_data) {
        return {
            id: tier_description.id,
            name: tier_description.name,
            tier_id: tier_description.tier_id,
            tier_name: tier_description.tier_name
        };
    },

    renderMany(tier_descriptions: TierDescription_data[]) {
        return tier_descriptions.map(tier_description => this.render(tier_description));
    }
}