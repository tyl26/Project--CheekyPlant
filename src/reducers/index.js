import {combineReducers} from 'redux'
import {PlantReducer} from './PlantReducers'


const allReducers = combineReducers({
    allPlants: PlantReducer,
})

export default allReducers