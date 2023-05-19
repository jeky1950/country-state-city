const fs = require("fs");
const city = require("./city.json");
const country = require("./country.json");
const state = require("./state.json");

let result = country.map(i => {
    return {
        ...i,
        state: [
            ...state.filter(({ country_id }) => country_id === i.id)
                    .map(_i => {
                        return {
                            ..._i,
                            city: [
                                ...city.filter(({ state_id }) => state_id === _i.id)
                            ]
                        }
                    })
        ]
    }
});

console.log(JSON.stringify(result[0]))

fs.writeFile('test.json', JSON.stringify(result, null, 4), function (err) {
    if (err) throw err;
    console.log('Saved!');
});