import { Dispatch, SetStateAction } from "react";
import { IModel, IParam } from "../../interfaces/interfaces";

export interface ParamsListProps {
  params: IParam[],
  setParams: Dispatch<SetStateAction<IParam[]>>
  model: IModel,
  setModel: Dispatch<SetStateAction<IModel>>
}