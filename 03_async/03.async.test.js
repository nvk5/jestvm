const Ajax = require('./03_async');
const axios = require('axios');

jest.mock('axios');

describe('Ajax echo', () => {

    test('should be defined', () => {
        expect(Ajax.echo).toBeDefined();
        expect(Ajax.echo).not.toBeUndefined()
    });

    test('should return value async', async () => {
        const result = await Ajax.echo('some data');

        expect(result).toBe('some data')
    });
    test('should return value with promise', () => {
        return Ajax.echo('some data').then(data => {
            expect(data).toBe('some data')
        })
    });

    test('should catch error with async', async () => {
        try {
            await Ajax.echo();
        } catch (error) {
            expect(error.message).toBe('error');
        }
    });
    test('should catch error with promise', () => {
        return Ajax.echo('some data').catch(error => {
            expect(error).toBeInstanceOf(Error)
        })
    });
});

describe('ajax get', () => {
    let response;
    let todos;

    beforeEach(() => {
        todos = [
            {id: 1, title: 'Todo 1', complited: false}
        ]

        response = {
            data: {
                todos
            }
        }
    })

    test('should return data from backend', () => {
        axios.get.mockReturnValue(response);

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    });
});

