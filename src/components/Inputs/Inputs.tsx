//@ts-nocheck
import React, { useRef, useState } from 'react'
import { IInputs, IRootReducer } from '../../interface/interface'
import classNames from 'classnames'

import './Inputs.scss'
import { useDispatch, useSelector } from 'react-redux'

export const Inputs: React.FC<IInputs> = ({ options, placeholder, error, type, id, actionType, select, selectOption, dataType, valueType }) => {
    const dispatch = useDispatch()
    const valueData = useSelector(({ valueData }: IRootReducer) => valueData[valueType])
    const [selectOptions, setSelectOptions] = useState(0)
    const ref = useRef(null)
    console.log(ref);
    
    const changeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.value.length >= 5) {
            dispatch({ type: 'ADD_VALUE', payload: { id, actionType, string: e.target.value, placeholder, dataType, valueType } })
            dispatch({ type: 'SUCCES', payload: { id, actionType, dataType } })
        } else {
            dispatch({ type: 'ERROR', payload: { id, actionType, dataType } })
            dispatch({ type: 'ADD_VALUE', payload: { id, actionType, string: e.target.value, placeholder, dataType, valueType } })
        }

    }

    const onSelectHandler: React.MouseEventHandler = () => {
        if (!select) {
            dispatch({ type: 'SELECTED', payload: { actionType, placeholder, dataType } })
            dispatch({ type: 'SELECTED_OPTIONS', payload: { id, actionType, selectOption, dataType } })
            dispatch({ type: 'ADD_VALUE', payload: { id, actionType, placeholder, dataType, valueType, string: options[selectOptions] } })
        } else {
            dispatch({ type: 'ERROR', payload: { id, actionType, dataType } })
            dispatch({ type: 'SELECTED', payload: { actionType, placeholder, dataType } })
        }

    }
    const onSelectOptionHandler = (e: any, index: number) => {
        if (select) {
            dispatch({ type: 'SELECTED_OPTIONS', payload: { id, actionType, selectOption: index, dataType } })
            dispatch({ type: 'ADD_VALUE', payload: { id, actionType, placeholder, dataType, valueType, string: e.target.id } })
            setSelectOptions(index)
        }
    }
    const generateInput = () => {
        if (type === 'number') {
            return (
                <>
                    <input onChange={(e) => changeInputHandler(e)} value={valueData[actionType].length >= 1 && valueData[actionType][0].string} type={type} placeholder={placeholder} />
                    {error && <span>Error !</span>}
                </>
            )
        } else if (type === 'text') {
            return (
                <>
                    <input onChange={(e) => changeInputHandler(e)} value={valueData[actionType].length >= 1 && valueData[actionType][0].string} type={type} placeholder={placeholder} />
                    {error && <span>Error !</span>}
                </>
            )
        } else {
            return (
                <>
                    <div
                        className={classNames('checkInput')}>
                        <div onClick={(e) => onSelectHandler(e)}  className={classNames('checkInput__title', { 'selected': select ? true : false })}>{placeholder}</div>
                        <ul>
                            {select && options!.map((item, index) => {
                                return (
                                    <li key={index} onClick={(e) => onSelectOptionHandler(e, index)} id={item} className={classNames({ 'selectOptions': index === selectOption })}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </>
            )
        }
    }

    return (
        <div className={classNames('Input', { 'error': error })}>
            {generateInput()}
        </div>
    )
}
