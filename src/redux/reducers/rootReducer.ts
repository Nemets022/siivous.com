import {combineReducers} from "redux";
import {valueDataReducer as valueData} from './valueDataReducer'
import {dataReducers as data} from './dataReducers'
export const rootReducer = combineReducers({
    valueData,
    data
})


export type RootReducer = ReturnType<typeof rootReducer>