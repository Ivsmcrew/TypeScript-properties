import { Dispatch, SetStateAction } from "react"
import { IModel, IParam, IParamValue } from "../interfaces/interfaces"

type TypeGetNewParamValues = (
                              model: IModel, 
                              updatingParamValue: IParamValue, 
                              newValue: string
                             ) => IParamValue[] 
export const getNewParamValues: TypeGetNewParamValues = (model, updatingParamValue, newValue) => {
  return model.paramValues.map((item) => {
    if (item.paramId === updatingParamValue.paramId) {
      return {'paramId': updatingParamValue.paramId, 'value': newValue}
    } else {
      return item
    }
  })
}

type TypeDeleteFromModel = (
                            param: IParam,
                            model: IModel,
                            setModel: Dispatch<SetStateAction<IModel>>,
                            params: IParam[],
                            setParams: Dispatch<SetStateAction<IParam[]>>
                           ) => void
export const deleteFromModel: TypeDeleteFromModel = (param, model, setModel, params, setParams) => { 
  const newParamValues:IParamValue[] = [];
  model.paramValues.forEach((item) => {
    if (item.paramId !== param.id) {
      newParamValues.push(item)
    } 
  })
  setModel({
    'paramValues': newParamValues
  })

  const newParams:IParam[] = [];
  params.forEach((item) => {
    if (item.id !== param.id) {
      newParams.push(item)
    }
  })
  setParams(newParams)
}