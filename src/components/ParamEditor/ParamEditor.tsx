import { FC, useState } from "react";
import classes from './ParamEditor.module.css'
import CreatePanel from "../CreatePanel/CreatePanel";
import ParamsList from "../ParamsList/ParamsList";
import Table from "../Table/Table";
import { IModel, IParam, ITableState } from "../../interfaces/interfaces";

const ParamEditor:FC = () => {
  const [params, setParams] = useState<IParam[]>(
    [
      {id: 1, name: `Назначение`},
      {id: 2, name: `Длина`},
      {id: 3, name: `Цвет`},
    ]
  );
  const [model, setModel] = useState<IModel>(
    {
      'paramValues': [
        {'paramId': 1, 'value': 'повседневное'},
        {'paramId': 2, 'value': 'короткий'},
        {'paramId': 3, 'value': 'красный'},
      ]
    }
  );
  const [tableState, setTableState] = useState<ITableState | null>(null); 

  function getModel():IModel {
    return model
  }
  function refreshTable():void {
    setTableState({
      params: params,
      model: model
    })
  }

  return (
    <div className={classes.paramEditor}>
      <CreatePanel 
        params={params} 
        setParams={setParams} 
        model={model}
        setModel={setModel} 
      />

      <ParamsList
        params={params} 
        setParams={setParams} 
        model={model}
        setModel={setModel} 
      />

      <button 
        className={classes.refreshButton}
        onClick={refreshTable}
      >
        PRINT MODEL
      </button>

      {tableState ?
      <Table tableState={tableState} /> :
      <span className={classes.refreshButton}>Print it!</span>
      }
    </div>
  )
}


export default ParamEditor