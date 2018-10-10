import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ],
    weight: 65
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe('Tests for convertsPoundsToKilograms', () => {
    it('Should return 0 if entered 0', () => {
        expect(convertPoundsToKilograms(0)).toEqual(0);
    })
    it('Should return 1 if entered 2.205', () => {
        expect(convertPoundsToKilograms(2.205)).toEqual(1);
    })
});