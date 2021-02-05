import { IDataReducer, IActions } from '../../interface/interface'
const initialState: IDataReducer = {
    contractualData: [
        {
            id: 1,
            title: 'Location:',
            disabled: true,
            actionType: 'location',
            inputs: [{ id: 1, type: 'number', error: false, placeholder: 'Post area code', options: [] }]
        },
        {
            id: 2,
            title: 'Customer premises:',
            disabled: true,
            actionType: 'customerPremises',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Customer areas', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 2, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: "WC's / Rest rooms", options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 3, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Other', options: ['5 times/week', '2 times/week', '1 times/week'] },
            ]
        },
        {
            id: 3,
            title: 'Office:',
            disabled: true,
            actionType: 'office',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Office area, m2', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 2, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: "WC's / Rest rooms", options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 3, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Kitchens', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 4, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Meeting rooms', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 5, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Other', options: ['5 times/week', '2 times/week', '1 times/week'] },
            ]
        },
        {
            id: 4,
            title: 'Condominium:',
            disabled: true,
            actionType: 'condominium',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Stairways', options: ['3 floors per stairway', '2 floors per stairway', '1 floors per stairway'] }
            ]
        },
        {
            id: 5,
            title: 'Storage:',
            disabled: true,
            actionType: 'storage',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Separate storage areas', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 2, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: "WC's / Rest rooms", options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 3, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Other', options: ['5 times/week', '2 times/week', '1 times/week'] },
            ]
        },
        {
            id: 6,
            title: 'Other:',
            disabled: true,
            actionType: 'other',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Office area, m2', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 2, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: "WC's / Rest rooms", options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 3, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Laundry rooms', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 4, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Drying rooms', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 5, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Storage area', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 6, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Cellar', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 7, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Attic', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 8, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Hobby rooms', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 9, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Other', options: ['5 times/week', '2 times/week', '1 times/week'] },
            ]
        }
    ],
    oneTimeData: [
        {
            id: 1,
            title: 'Location:',
            disabled: true,
            actionType: 'location',
            inputs: [{ id: 1, type: 'number', error: false, placeholder: 'Post area code', options: [] }]
        },
        {
            id: 2,
            title: 'Basic cleaning:',
            disabled: true,
            actionType: 'basicCleaning',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Customer areas', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 2, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: "WC's / Rest rooms", options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 3, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Other', options: ['5 times/week', '2 times/week', '1 times/week'] },
            ]
        },
        {
            id: 3,
            title: 'Floor waxing:',
            disabled: true,
            actionType: 'floorWaxing',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Square meters', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 2, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: "Start date for contract", options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 3, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Floor clearing', options: ['5 times/week', '2 times/week', '1 times/week'] }
            ]
        },
        {
            id: 4,
            title: 'Window cleaning:',
            disabled: true,
            actionType: 'windowCleaning',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'text', error: false, placeholder: 'Amount of windows' },
                { id: 2, select: false, selectOption: 0, type: 'text', error: false, placeholder: 'Total size of windows surface'},
                { id: 3, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Blinds', options: ['3 floors per stairway', '2 floors per stairway', '1 floors per stairway'] },
                { id: 4, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Is lift required?', options: ['3 floors per stairway', '2 floors per stairway', '1 floors per stairway'] },
            ]
        },
        {
            id: 5,
            title: 'Construction site end cleaning:',
            disabled: true,
            actionType: 'constructionSiteEndCleaning',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Site type', options: ['New', 'Renovation'] },
                { id: 2, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: "Work type", options: ['Ongoing cleaning', 'Cleanup after site ready'] },
            ]
        },
        {
            id: 6,
            title: 'Fitted carpet cleaning:',
            disabled: true,
            actionType: 'fittedCarpetCleaning',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'text', error: false, placeholder: 'Square meters'},
                { id: 2, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Clearing work area', options: ['Ongoing cleaning', 'Cleanup after site ready'] },
            ]
        },
        {
            id: 7,
            title: 'Optional info:',
            disabled: true,
            actionType: 'optionalInfo',
            inputs: [
                { id: 1, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Cleaning time', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 2, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Start date for contract', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 3, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Offer open', options: ['5 times/week', '2 times/week', '1 times/week'] },
                { id: 4, select: false, selectOption: 0, type: 'checkbox', error: false, placeholder: 'Attachments', options: ['5 times/week', '2 times/week', '1 times/week'] },
            ]
        }
    ]
}


export const dataReducers = (state = initialState, action: IActions) => {
    const oldState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'SUCCES':
            oldState[action.payload.dataType].forEach((item: any) => {
                if (item.actionType === action.payload.actionType) {
                    item.disabled = false
                    item.select = true
                    item.inputs.forEach((input: any) => {
                        if (input.id === action.payload.id) {
                            input.error = false
                        }
                    })
                }
            })
            return {
                ...state,
                contractualData: [...oldState.contractualData],
                oneTimeData: [...oldState.oneTimeData]
            }
        case 'ERROR':
            oldState[action.payload.dataType].forEach((item: any) => {
                if (item.actionType === action.payload.actionType) {
                    item.disabled = true
                    item.select = false
                    item.inputs.forEach((input: any) => {
                        if (input.id === action.payload.id) {
                            input.error = true
                        }
                    })
                }
            })
            return {
                ...state,
                contractualData: [...oldState.contractualData],
                oneTimeData: [...oldState.oneTimeData]
            }
        case 'SELECTED':
            oldState[action.payload.dataType].forEach((item: any) => {
                if (item.actionType === action.payload.actionType) {
                    return {
                        ...item,
                        inputs: item.inputs.forEach((item: any) => {
                            if (item.placeholder === action.payload.placeholder) {
                                item.select = !item.select
                            }
                        })
                    }
                }
            })
            return {
                ...state,
                contractualData: [...oldState.contractualData],
                oneTimeData: [...oldState.oneTimeData]
            }
        case 'SELECTED_OPTIONS':
            oldState[action.payload.dataType].forEach((item: any) => {
                if (item.actionType === action.payload.actionType) {
                    item.inputs.forEach((item: any) => {
                        if (item.id === action.payload.id) {
                            item.selectOption = action.payload.selectOption
                        }
                    })
                }
            })
            return {
                ...state,
                contractualData: [...oldState.contractualData],
                oneTimeData: [...oldState.oneTimeData]
            }
        default:
            return state
    }
}