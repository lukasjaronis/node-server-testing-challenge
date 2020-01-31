const CompanyModel = require('./model');
const db = require('../data/db-Config');

describe('company model', () => {
    describe('insert()', () => {
        it('should insert a company', async () => {
            await CompanyModel.insert({ companyName: 'Amazon', founder: 'Jeff Bezos' });

            const companies = await db('companies');
            expect(companies.length).not.toBeLessThan(1)
        })
    });
});

describe('remove()', () => {
    it('should delete a company', async () => {
        await CompanyModel.remove({ id: 1 });
        const companies = await db('companies');
        expect(companies).not.toContain({
            companyName: 'ICBC',
            founder: 'Jiang Jianqing'
        })
    });
});
