import { IDataActions } from "../../interface/interface"
const initialState = {
    contractual: {
        location: [],
        customerPremises: [],
        office: [],
        condominium: [],
        storage: [],
        other: [],
        optionalInfo: []
    },
    oneTime: {
        location: [],
        basicCleaning: [],
        floorWaxing: [],
        windowCleaning: [],
        constructionSiteEndCleaning: [],
        fittedCarpetCleaning: [],
        optionalInfo: []
    }
}


export const valueDataReducer = (state = initialState, action: IDataActions) => {
    const oldState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'ADD_VALUE':
            const filterArray = oldState[action.payload.valueType][action.payload.actionType].filter((item: any) => item.id !== action.payload.id)
            oldState[action.payload.valueType][action.payload.actionType] = [...filterArray, {
                actionType: action.payload.actionType,
                id: action.payload.id,
                string: action.payload.string,
                placeholder: action.payload.placeholder
            },
        ]
            return {
                ...state,
                ...oldState,
            }
        default:
            return state
    }
}