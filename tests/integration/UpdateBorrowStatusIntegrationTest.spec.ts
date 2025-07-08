import request from 'supertest';

import app from '../../src/infra/server/server';

describe('UPDATE  BORROW / books', () => {

    let createdBookId: string;

    beforeEach(async () => {
        const createdResponse = await request(app).post('/api/library/create-book').send({
            title: 'Ensinando a Transgredir: A Educação como Prática da Liberdade',
            author: 'bell hooks',
            publishedYear: 1994,
        });

        createdBookId = createdResponse.body.id;
    });

    it('deve atualizar todos os campos de um livro', async () => {
        const response = await request(app).patch(`/api/library/update-borrow/${createdBookId}`);

        expect(response.status).toBe(204);
        const getResponse = await request(app).get(`/api/library/book/${createdBookId}`);
        expect(getResponse.body.isBorrowed).toBe(true);
    });
});