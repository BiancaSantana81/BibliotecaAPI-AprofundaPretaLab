import request from 'supertest';

import app from '../../src/infra/server/server';

describe('GET / books', () => {

    beforeEach(async () => {
        await request(app).post('/api/library/create-book').send({
            title: 'Ensinando a Transgredir: A Educação como Prática da Liberdade',
            author: 'bell hooks',
            publishedYear: 1994,
        });

        await request(app).post('/api/library/create-book').send({
            title: 'O Feminismo é para Todo Mundo: Políticas Arrebatadoras',
            author: 'bell hooks',
            publishedYear: 2000,
        });
    });

    it('deve retornar a  lista de livros', async () => {
        const response = await request(app).get(`/api/library/books/`);

        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(2);
        expect(response.body[0].title).toBe('Ensinando a Transgredir: A Educação como Prática da Liberdade');
        expect(response.body[1].title).toBe('O Feminismo é para Todo Mundo: Políticas Arrebatadoras');
    });
});