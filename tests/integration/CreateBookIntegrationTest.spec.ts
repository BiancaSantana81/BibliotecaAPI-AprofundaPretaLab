import request from 'supertest';

import app from '../../src/infra/server/server';

describe('POST / books', () => {

    it('deve criar um novo livro com sucesso', async () => {
        const response = await request(app).post('/api/library/create-book').send({
            title: 'Não Sou Eu Mulher? Mulheres Negras e Feminismo',
            author: 'bell hooks',
            publishedYear: 1981
        });

        expect(response.status).toBe(201);
    });

    it('deve retornar erro ao tentar criar um livro sem título', async () => {
        const response = await request(app).post('/api/library/create-book').send({
            title: '',
            author: 'bell hooks',
            publishedYear: 1981
        });

        expect(response.status).toBe(400);
    });
});