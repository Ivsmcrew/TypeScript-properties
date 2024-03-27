import { FC, useEffect, useState } from "react"
import styles from "./Table.module.css"
import { TableProps } from "./Table.props"
import { IParam, IParamValue } from "../../interfaces/interfaces"

const Table:FC<TableProps> = ({tableState}) => {
  const [tableParams, setTableParams] = useState<IParam[]>([])
  const [paramValues, setParamValues] = useState<IParamValue[]>([])

  useEffect(() => {
    if (tableState) {
      setTableParams(tableState.params)
      setParamValues(tableState.model.paramValues)
    }
  }, [tableState])

  function isDataReady() {
    if (tableParams && paramValues) {
      return true
    } else {
      return false
    }
  }

  return (
    isDataReady() 
      ?
      <table className={styles.table}>
        <caption className={styles.caption}>
          <h4>TABLE OF OUR MODEL</h4>
        </caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>PARAM</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          {tableParams.map((tableParam) => {
            return(
              <tr key={tableParam.id} className={styles.tr}>
                <td className={styles.td}>{tableParam.id}</td>
                <td className={styles.td}>{tableParam.name}</td>
                <td className={styles.td}>{paramValues.find(item => item.paramId === tableParam.id)?.value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      :
      null
  )
}

export default Table