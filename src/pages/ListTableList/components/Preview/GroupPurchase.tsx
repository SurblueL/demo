import React, { PureComponent } from 'react';
// import { Card, Row, Col, Form, Button, Select, Modal } from 'antd';
// import { FormComponentProps } from 'antd/es/form';

// import styles from './CreateActive.less';
export interface IProps {
  // key: string;
}

const initialState = {};
interface IState {}

class CreateActive extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  render() {
    // console.log(this.props);
    return <div>多人拼团预览</div>;
  }
}

export default CreateActive;
