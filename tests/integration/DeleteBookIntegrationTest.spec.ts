import request from 'supertest';

import app from '../../src/infra/server/server';

describe('DELETE / books', () => {

    let createdBookId: string;

    beforeEach(async () => {
        const createdResponse = await request(app).post('/api/library/create-book').send({
            title: 'Não Sou Eu Mulher? Mulheres Negras e Feminismo',
            author: 'bell hooks',
            publishedYear: 1981
        });

        createdBookId = createdResponse.body.id;
    });

    it('deve deletar um livro da lista', async () => {
        const response = await request(app).delete(`/api/library/delete-book/${createdBookId}`);

        expect(response.status).toBe(204);
    });
});