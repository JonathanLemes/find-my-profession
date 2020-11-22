import { createConnection } from 'typeorm';
import request from 'supertest';
import app from '../../server';

const connect = async () => {
    await createConnection({
        type: "sqlite",
        database: "./__tests__/unit/database.sqlite",
        migrations: [
            "src/migration/*.ts"
        ],
        entities: [
            "models/*.ts"
        ],
        migrationsRun: true,
        cli: {
            migrationsDir: "src/migration"
        }
    }).catch(error => console.log(error));
}

describe('database', () => {
    it('should create a new service', async () => {
        await connect();

        const data = {
            name: 'Test Service',
            url: '/service-test',
            description: 'This is a test service designed with TDD'
        }

        const server = request(app);

        const response = await server.post('/service').send(data);

        expect(response.status).toBe(201);
    });

    afterEach(async () => {
        const server = request(app);

        await server.delete('/services');
        await server.delete('/tiers');
        await server.delete('/users');
    })
});