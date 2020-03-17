import React, { PureComponent } from 'react';
import { ConnectProps, ConnectState } from '@/models/connect';
import { TemplateModelItem } from '@/models/template';
import { connect } from 'dva';
// import { Card, Row, Col, Form, Button, Select, Modal } from 'antd';
// import { FormComponentProps } from 'antd/es/form';
// import styles from './Bargain.less';

export interface IProps extends ConnectProps {
  collectFormData: TemplateModelItem[];
  tabKey: string;
}

const initialState = {};
interface IState {}

class Bargain extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  render() {
    return <div>砍价</div>;
  }
}

export default connect(({ template }: ConnectState) => ({
  collectFormData: template.collectFormData,
}))(Bargain);
