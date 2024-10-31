const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({name: "Foo Fighters", genre: "Rock"})
        expect(testBand.name).toBe('Foo Fighters');
        expect(testBand.genre).toBe('Rock');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({name: "Dave Grohl", instrument: "Electric Guitar"})
        expect(testMusician.name).toBe("Dave Grohl");
        expect(testMusician.instrument).toBe("Electric Guitar");
    })

    test('can create a Song', async () => {
        const testSong = await Song.create({title: "Monkey Wrench", year: 1997, length: 3.51})
        expect(testSong.name).toBe('Monkey Wrench');
        expect(testSong.year).toBe(1997);
        expect(testSong.length).toBe(3.51);
    })

    test('can update a Band', async () => {
        const updatedBand = await Band.update({name: "Ghost", genre: "Metal"})
        expect(updatedBand.name).toBe('Ghost');
        expect(updatedBand.genre).toBe('Metal');
    })

    test('can update a Musician', async () => {
        const updatedMusician = await Musician.update({name: "Tobias Forge", instrument: "Bass"})
        expect(updatedMusician.name).toBe("Tobias Forge");
        expect(updatedMusician.instrument).toBe("Bass");
    })

    test('can update a Song', async () => {
        const updatedSong = await Song.create({title: "Ritual", year: 2010, length: 4.28})
        expect(updatedSong.name).toBe('Ritual');
        expect(updatedSong.year).toBe(2010);
        expect(updatedSong.length).toBe(4.28);
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})