import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Contract.scss'

import { IDataMain } from '../../interface/interface'
import { Inputs } from '../Inputs/Inputs'

export const Contract = ({ dataMain, dataType, valueType }: IDataMain) => {
    const [idData, setIdData] = useState(0)
    const [disabledPrev, setDisabledPrev] = useState(false)
    const history = useHistory()
    const data = dataMain![idData]


    const nextQuest = () => {
        setDisabledPrev(false)
        if (dataMain!.length === idData + 1) {
            history.push('login')
        }
        setIdData(prev => prev + 1)
    }
    const prevQuest = () => {
        if (idData < 1) {
            history.push('/')

        }
        setIdData(prev => prev - 1)
    }
        const isDisable = !(data.inputs.filter((item) => item.select === true).length >= 1) && data.disabled       
    return (
        <div className="contract">
            <div className="contract__inner">
                <div className="contract__title"><h6>{data.title}</h6></div>
                <div className="contract__inputs">
                    {data.inputs.map((item, index) => {
                        const { type, options, error, placeholder, select, selectOption } = item
                        return (
                            <Inputs key={data.title + index + dataType}
                                valueType={valueType} dataType={dataType}
                                id={item.id} select={select}
                                selectOption={selectOption}
                                actionType={data.actionType}
                                type={type}
                                placeholder={placeholder}
                                options={options}
                                error={error} />
                        )
                    })}
                </div>
            </div>
            <div className="contract__buttonbox">
                <button disabled={disabledPrev} className="contract__btn btn outline ultrasmall" onClick={() => prevQuest()}>Back</button>
                <button disabled={isDisable} className="contract__btn btn ultrasmall" onClick={() => nextQuest()}>Next</button>
            </div>
        </div>
    )
}
