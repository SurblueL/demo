import { ReactElement, ReactNode } from 'react';

export interface IBoxesState {
  type: string;
  title: string;
  icon: string;
  children: IChildren[];
}

export interface IChildren {
  id: number;
  name: string;
  icon: string;
  type: string;
}

export interface ITabList {
  key: string;
  tab: string;
}

export interface ITabChild {
  [type: string]: {
    title: string;
    tabList: ITabList[];
  };
}

export interface INode {
  [type: string]: (tabKey: string) => ReactElement | ReactNode;
}

export interface DustbinState {
  accept: string[];
  lastDroppedItem?: IContent;
  // collectFormData?: any;
}

export interface ICollectType {
  type: string;
}

export interface IDustbinState {
  accept: string[];
  lastDroppedItem?: IContent;
  // collectFormData?: any;
}

export interface GridProps {
  type: string;
  isDropped?: boolean;
  name: string;
  id?: string | number;
  icon?: string;
  onDropped: (item: any) => void;
  droppedBoxTypes: string[];
}
