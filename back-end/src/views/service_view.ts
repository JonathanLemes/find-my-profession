import { Service } from '../../entity/Service';

export default {
    render(service: Service) {
        return {
            id: service.id,
            name: service.name,
            url: service.url,
            description: service.description
        };
    },

    renderMany(services: Service[]) {
        return services.map(service => this.render(service));
    }
}