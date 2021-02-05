
export interface IContract {
    id: number,
    select?: boolean,
    selectOption?: null | number,
    title: string,
    actionType: 'location' | 'customerPremises' | 'office' | 'optionalInfo' | 'other' | 'storage' | 'condominium',
    disabled?: boolean,
    inputs: IInputsData[]
}
export interface IOneTime {
    id: number,
    select?: boolean,
    selectOption?: null | number,
    title: string,
    actionType: 'location' | 'basicCleaning' | 'floorWaxing' | 'windowCleaning' | 'constructionSiteEndCleaning' | 'fittedCarpetCleaning' | 'optionalInfo',
    disabled?: boolean,
    inputs: IInputsData[]
}


export interface IInputsData {
    id: number,
    string?: string,
    select?: boolean,
    selectOption?: null | number,
    type: string,
    error: boolean,
    placeholder: string,
    options?: string[]
}

export interface IInputs extends IInputsData {
    actionType: 'location' | 'customerPremises' | 'office' | 'optionalInfo' | 'other' | 'storage' | 'condominium' | 'basicCleaning' | 'floorWaxing' | 'windowCleaning' | 'constructionSiteEndCleaning' | 'fittedCarpetCleaning'
    dataType: 'oneTimeData' | 'contractualData',
    valueType: 'contractual' | 'oneTime'
}

export interface IContractualReducer {
    location: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    customerPremises: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    office: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    condominium: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    storage: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    other: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    optionalInfo: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[]
}

export interface IOneTimeReducer {
    location: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    customerPremises: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    office: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    condominium: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    storage: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    other: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[],
    optionalInfo: {
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        actionType: string,
        placeholder?: string
    }[]
}

export interface IActions {
    type: string,
    payload: any
}

export interface IInputsActions extends IActions {
    payload: {
        actionType: string,
        string: string,
    }
}

export interface IDataActions extends IActions {
    payload: {
        actionType: 'location' | 'customerPremises' | 'office' | 'optionalInfo' | 'other' | 'storage' | 'condominium' | 'basicCleaning' | 'floorWaxing' | 'windowCleaning' | 'constructionSiteEndCleaning' | 'fittedCarpetCleaning'
        id: number,
        select?: boolean,
        selectOption?: null | number,
        string: string,
        placeholder?: any,
        dataType: 'contractualData' | 'oneTimeData',
        valueType: 'contractual' | 'oneTime'
    }
}


export interface IRootReducer {
    valueData: {
        contractual: IContractualReducer,
        oneTime: IOneTimeReducer,
    }
    data: IDataReducer
}

export interface IDataReducer {
    contractualData: IContract[],
    oneTimeData: IOneTime[]
}


export interface IDataMain {
    dataMain: IContract[] | IOneTime[],
    dataType: 'contractualData' | 'oneTimeData',
    valueType: 'contractual' | 'oneTime'
}