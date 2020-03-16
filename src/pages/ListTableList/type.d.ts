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
  [type: string]: (tabKey: string) => ReactElement<any> | ReactNode<any>;
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

export interface ISelect {
  lable: string;
  value: string | number;
}
export interface IActiveItem {
  id: string | number;
  title: string;
  inTheLasDays: number;
  total: number;
  recommended: boolean; // 是否推荐
  MarketingType: string; // 营销类型：拼团、等
  image: string;
}

export interface ITemplateTypeItem {
  id: string | number;
  title: string;
  MarketingType: string; // 营销类型：拼团、等
  image: string;
}
