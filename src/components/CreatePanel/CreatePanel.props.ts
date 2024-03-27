import { Dispatch, SetStateAction } from "react";
import { IModel, IParam } from "../../interfaces/interfaces";

export interface CreatePanelProps {
  params: IParam[],
  setParams: Dispatch<SetStateAction<IParam[]>>,
  model: IModel,
  setModel: Dispatch<SetStateAction<IModel>>
}

export interface IPanelData {
  id: number | string,
  name: string,
  value: string
}