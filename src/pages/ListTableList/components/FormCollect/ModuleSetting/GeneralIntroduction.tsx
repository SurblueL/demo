/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { ConnectProps, ConnectState } from '@/models/connect';
import { TemplateModelItem } from '@/models/template';
// import { FormComponentProps } from 'antd/es/form';
// import { Form } from 'antd';
// import styles from './GeneralIntroduction.less';

export interface IProps extends ConnectProps {
  collectFormData: TemplateModelItem[];
  tabKey: string;
}

const initialState = {};
interface IState {}

class GeneralIntroduction extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  render() {
    return <div>通用介绍</div>;
  }
}

export default connect(({ template }: ConnectState) => ({
  collectFormData: template.collectFormData,
}))(GeneralIntroduction);
