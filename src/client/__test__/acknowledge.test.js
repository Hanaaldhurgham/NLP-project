import "babel-polyfill"

const acknowledge= require('../js/acknowledge');

    test("acknowledge test ",async()=> {
        expect(acknowledge).toBeDefined();
    });
