import { Tiers } from '../../models/Tier';

interface Tier_data extends Tiers {
    service_name: string
}

export default {
    render(tier: Tier_data) {
        return {
            id: tier.id,
            name: tier.name,
            price: tier.price,
            service_id: tier.service_id,
            service_name: tier.service_name
        };
    },

    renderMany(tiers: Tier_data[]) {
        return tiers.map(tier => this.render(tier));
    }
}