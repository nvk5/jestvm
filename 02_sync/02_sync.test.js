const Lodash = require('./02_sync')

describe('lodash compact', () => {

    let _ = new Lodash();
    let array = [];

    beforeEach(() => {
        array = [false, 42, 5, 0, '', 100, true, null, 'hello']
    })

    afterEach(() => {
        _ = new Lodash();
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    });

    test('should remove falsy values from array', () => {
        const result = [42, 5, 100, true, 'hello']

        expect(_.compact(array)).toEqual(result);
    });

    test('should NOT contain falsy values', () => {
        expect(_.compact((array))).not.toContain(false);
        expect(_.compact((array))).not.toContain(0);
        expect(_.compact((array))).not.toContain('');
        expect(_.compact((array))).not.toContain(null);
    });
});
