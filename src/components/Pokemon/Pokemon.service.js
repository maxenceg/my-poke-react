export const getFirstAbility = (pokemon) =>
{
    if (pokemon.abilities[0])
    {
        return (pokemon.abilities[0].ability.name);
    }
    return (null);
}

export const convertPoundsToKilograms = (weight) => {
    return (weight/2.205);
}