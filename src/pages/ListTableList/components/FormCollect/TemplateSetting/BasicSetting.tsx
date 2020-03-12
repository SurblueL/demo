/* eslint-disable no-plusplus */
import React, { PureComponent } from 'react';
import { Form, Button, Select, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import styles from './index.less';
// import { FormComponentProps } from 'antd/es/form';
const { Option } = Select;

export interface IProps extends FormComponentProps {}

const initialState = {};
interface IState {}

class BasicSetting extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  private handleSubmit = () => {
    const { form } = this.props;
    form.validateFields(async (err, values) => {
      if (!err) {
        // console.log(values);
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    const formItemLayout = {
      labelCol: {
        xs: { span: 4 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 20 },
      },
    };
    return (
      <Form className={styles.searchRight} {...formItemLayout}>
        <Form.Item label="模板名称">
          {getFieldDecorator('node')(<Input placeholder="请输入模板名称" />)}
        </Form.Item>
        <Form.Item label="运营节点">
          {getFieldDecorator('type')(
            <Select
              mode="tags"
              size="default"
              placeholder="请选择运营节点"
              // defaultValue={['a10', 'c12']}
              // onChange={handleChange}
              style={{ width: '100%' }}
            >
              {children}
            </Select>,
          )}
        </Form.Item>
        <Form.Item colon={false}>
          <Button type="primary" className="mr-8 ml-14" onClick={this.handleSubmit}>
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default Form.create()(BasicSetting);
