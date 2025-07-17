import request from 'supertest';

import app from '../../src/infra/server/server';

describe('UPDATE / books', () => {

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
        const response = await request(app).put(`/api/library/update-book/${createdBookId}`).send({
            title: 'Tudo Sobre Amor: Novas Perspectivas',
            author: 'bell hooks',
            publishedYear: 2000,
        });

        expect(response.status).toBe(200);
        const getResponse = await request(app).get(`/api/library/book/${createdBookId}`);
        expect(getResponse.body.title).toBe('Tudo Sobre Amor: Novas Perspectivas');
    });
});