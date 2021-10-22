import {loginUser} from '../auth'


describe('OrderCard', () => {
    beforeEach(() => {

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({access_token: '123'}),
            })
        );
    });
    test('call for token ', async () => {
        const response = await loginUser({username: 'test', password: 'test'});
        expect(response).toEqual('123');
    });
});