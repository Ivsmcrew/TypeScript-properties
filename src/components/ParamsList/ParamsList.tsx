import { FC } from 'react'
import UniInput from '../UniInput/UniInput'
import styles from './ParamsList.module.css'
import { ParamsListProps } from './ParamsList.props'
import { IParamValue } from '../../interfaces/interfaces'
import { deleteFromModel, getNewParamValues } from '../../utils/utils'

const ParamsList:FC<ParamsListProps> = ({params, setParams, model, setModel}) => {
  function getInputValueById(id:number | string): IParamValue {
    let paramValue = model.paramValues.find(paramValue => paramValue.paramId === id)
 
    return paramValue ? paramValue : {paramId: -1, value: ''}
  }

  return(
    <>
      <h4>LIST OF ACTIVE PARAMETERS</h4>
      {params.map(param => {
        return(
          <label key={param.id} className={styles.label}>
            <span className={styles.paramName}>{param.name}</span> 
            <UniInput 
              startValue={getInputValueById(param.id).value} 
              effectFunc={(value) => {
                setModel({
                  'paramValues': getNewParamValues(model, getInputValueById(param.id), value)
                })
              }}
            />
            <button 
              onClick={() => deleteFromModel(param, model, setModel, params, setParams)}
              className={styles.deleteButton}
            >
              Delete
            </button> 
          </label>
        )
      })}
    </>
  )
}

export default ParamsList