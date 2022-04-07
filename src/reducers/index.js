import {combineReducers} from 'redux'
import {PlantReducer} from './PlantReducer'


const allReducers = combineReducers({
    allPlants: PlantReducer,
})

export default allReducers