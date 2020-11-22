import { User } from '../../models/User';

export default {
    render(user: User) {
        return {
            id: user.id,
            fisrtName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address: user.address,
            country: user.country,
            state: user.state,
            zip: user.zip,
            tier_id: user.tier_id
        };
    },

    renderMany(users: User[]) {
        return users.map(user => this.render(user));
    }
}