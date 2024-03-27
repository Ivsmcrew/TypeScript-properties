export interface IParamValue {
  paramId: number | string,
  value: string
}

export interface IModel {
  paramValues: IParamValue[]
}

export interface IParam {
  id: number | string,
  name: string 
}

export interface ITableState {
  params: IParam[],
  model: IModel
}
