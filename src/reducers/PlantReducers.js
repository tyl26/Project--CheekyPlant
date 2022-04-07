const initState = {
    plants: [],
    MyList: [],
    currentPlant: [],
}



export const PlantReducer = (state = initState, {
    type,
    payload
}) => {


    switch (type) {
        case 'SET_PLANTS':

            return {
                ...state, plants: payload
            };
        case 'CHOOSEN_PLANT':

            return {
                ...state, currentPlant: payload
            };

        case 'ADD_TO_JUNGLE':
            //getting plant
            const getPlant = state.plants.find(
                (plants) => plants.id === payload.id
            );
            // checking if plant is already in Jungle
            const alreadyInCart = state.MyList.find((plant) =>
                plant.id === payload.id ? true : false
            );


            return {

                //what is happingning if plant is already in cart
                ...state, MyList: alreadyInCart ? state.MyList.map((plant) => plant.id === payload.id ? {
                        ...plant,

                    } : plant)
                    //otherwise do this 
                    :
                    [...state.MyList, {
                        ...getPlant,

                    }]

            };

        case 'REMOVE_FROM_JUNGLE':

            return {
                ...state, MyList: state.MyList.filter((plant) => plant.id !== payload.id)
            };


        default:
            return state
    }

}