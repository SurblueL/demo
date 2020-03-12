
import React, { PureComponent } from 'react';
// import { Card, Row, Col, Form, Button, Select, Modal } from 'antd';
// import { FormComponentProps } from 'antd/es/form';

// import styles from './CreateActive.less';
export interface IProps   {}

const initialState = {};
interface IState {}

class CreateActive extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  render() {
    return <div>机构地址</div>;
  }
}

export default CreateActive;