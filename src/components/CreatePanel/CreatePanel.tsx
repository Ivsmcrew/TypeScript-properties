import { FC, useState } from "react"
import styles from './CreatePanel.module.css'
import { CreatePanelProps, IPanelData } from './CreatePanel.props'

const CreatePanel:FC<CreatePanelProps> = ({params, setParams, model, setModel}) => {
  const [panelData, setPanelData] = useState<IPanelData>({
    id: '',
    name: '',
    value: ''
  })

  function checkData() {
    let isDataValid = true
    params.forEach((item) => {
      if (item.id == panelData.id) {
        isDataValid = false
      }
    })
    return isDataValid
  }
  function handleButton() {
    if (panelData.id && panelData.name && panelData.value && checkData()) {
      setParams([...params, {id: panelData.id, name: panelData.name}])
      setModel({'paramValues': [
        ...model.paramValues, {paramId: panelData.id, value: panelData.value}
      ]})
      setPanelData({
        id: '',
        name: '',
        value: ''
      })
    }
  }

  return (
    <>
    <h4>CREATE A NEW PARAMETER</h4>
      <div>
        <label className={styles.label}>
          <span className={styles.paramName}>Param ID</span> 
          <input 
            className={styles.paramValue}
            value={panelData.id}
            onChange={(e) => {setPanelData({...panelData, id: e.target.value})}}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.paramName}>Param name</span> 
          <input 
            className={styles.paramValue}
            value={panelData.name}
            onChange={(e) => {setPanelData({...panelData, name: e.target.value})}}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.paramName}>Param value</span> 
          <input 
            className={styles.paramValue}
            value={panelData.value}
            onChange={(e) => {setPanelData({...panelData, value: e.target.value})}}
          />
        </label>
      </div>
      <button 
        className={styles.createButton}
        onClick={handleButton}
      >
        CREATE
      </button>
    </>
  )
}

export default CreatePanel