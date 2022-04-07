export const setPlants = (plants) => {

    return {
        type: 'SET_PLANTS',
        payload: plants
    }
}
export const currentPlant = (plant) => {
    return {
        type: 'CHOOSEN_PLANT',
        payload: plant
    }
}
export const addToCart = (plant) => {
    return {
        type: 'ADD_TO_JUNGLE',
        payload: plant
    }
}
export const removeFromList = (plant) => {
    return {
        type: 'REMOVE_FROM_JUNGLE',
        payload: plant
    }
}