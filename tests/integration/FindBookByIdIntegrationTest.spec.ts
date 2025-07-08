import request from 'supertest';

import app from '../../src/infra/server/server';

describe('GET / books', () => {

    let createdBookId: string;

    beforeEach(async () => {
        const createdResponse = await request(app).post('/api/library/create-book').send({
            title: 'Ensinando a Transgredir: A Educação como Prática da Liberdade',
            author: 'bell hooks',
            publishedYear: 1994,
        });

        createdBookId = createdResponse.body.id;
    });

    it('deve retornar um livro da lista pelo id', async () => {
        const response = await request(app).get(`/api/library/book/${createdBookId}`);

        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Ensinando a Transgredir: A Educação como Prática da Liberdade');
    });

    
});