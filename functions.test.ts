const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Array should contain letter d', () => {
        expect(shuffleArray("dog")).toContain("d")
    })
    test('Array does not contain c', () => {
        expect(shuffleArray("rat")).not.toContain("c")
    })
});

