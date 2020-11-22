import { Services } from '../../models/Service';

export default {
    render(service: Services) {
        return {
            id: service.id,
            name: service.name,
            url: service.url,
            description: service.description
        };
    },

    renderMany(services: Services[]) {
        return services.map(service => this.render(service));
    }
}