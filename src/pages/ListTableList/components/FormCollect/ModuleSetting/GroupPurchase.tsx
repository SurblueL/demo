import React, { PureComponent, Fragment } from 'react';
import { Form, Input } from 'antd';
import { connect } from 'dva';
import { mapValues } from 'lodash';
import { ConnectProps, ConnectState } from '@/models/connect';
import { FormComponentProps } from 'antd/es/form';
import { TemplateModelItem } from '@/models/template';
import update from 'immutability-helper';
import styles from './GroupPurchase.less';

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

export interface IProps extends ConnectProps {
  collectFormData: TemplateModelItem[];
  tabKey: string;
}
export interface IFormProps extends FormComponentProps {
  handleChange(key: string, changedFields: any, allFields: any): void;
  groupPurchase: { type: string; data: { [key: string]: any } };
}

const initialState = {
  groupPurchase: {
    type: 'group',
    data: {},
  },
};
interface IState {
  groupPurchase: { type: string; data: { [key: string]: any } };
}

class GroupPurchase extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  private handleChange = (key: string, changedFields: any, allFields: any) => {
    const { dispatch } = this.props;
    const { groupPurchase } = this.state;
    const setGroupPurchase = update(groupPurchase, {
      data: {
        [key]: {
          $set: mapValues(allFields, 'value'),
        },
      },
    });
    this.setState(
      {
        groupPurchase: setGroupPurchase,
      },
      () => {
        if (dispatch) {
          dispatch({
            type: 'template/handleCollect',
            payload: this.state.groupPurchase,
          });
        }
      },
    );
  };

  render() {
    const { tabKey } = this.props;
    const { groupPurchase } = this.state;
    return (
      <Fragment>
        {tabKey === 'merchandiseNews' && (
          <WrapperBlurbForm groupPurchase={groupPurchase} handleChange={this.handleChange} />
        )}
        {tabKey === 'rules' && (
          <WrapperRuleFrom groupPurchase={groupPurchase} handleChange={this.handleChange} />
        )}
        {tabKey === 'registration' && (
          <WrapperRegistrationFrom groupPurchase={groupPurchase} handleChange={this.handleChange} />
        )}
      </Fragment>
    );
  }
}

/**
 * 商品信息
 */
class BlurbForm extends PureComponent<IFormProps, object> {
  render() {
    const {
      groupPurchase,
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form className={styles.searchRight} {...formItemLayout}>
        <Form.Item label="活动名称">
          {getFieldDecorator('name', {
            initialValue:
              groupPurchase.data && groupPurchase.data.blurb && groupPurchase.data.blurb.name,
          })(<Input style={{ width: 295 }} placeholder="暑期班开班啦，限时优惠200" />)}
        </Form.Item>
        <Form.Item label="价格">
          {getFieldDecorator('price', {
            initialValue:
              groupPurchase.data && groupPurchase.data.blurb && groupPurchase.data.blurb.price,
          })(<Input style={{ width: 295 }} placeholder="暑期班开班啦，限时优惠200" />)}
        </Form.Item>
        <Form.Item label="上传图片">
          {getFieldDecorator('price', {
            initialValue:
              groupPurchase.data && groupPurchase.data.blurb && groupPurchase.data.blurb.price,
          })(<Input style={{ width: 295 }} placeholder="暑期班开班啦，限时优惠200" />)}
        </Form.Item>
      </Form>
    );
  }
}
/**
 * 拼团规则
 */
class RuleFrom extends PureComponent<IFormProps, object> {
  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form className={styles.searchRight} {...formItemLayout}>
        <Form.Item label="拼团人数">
          {getFieldDecorator('number_pepole', {
            // initialValue: (data && data.data.template_name) || 'single poster',
          })(<Input style={{ width: 295 }} placeholder="暑期班开班啦，限时优惠200" />)}
        </Form.Item>
      </Form>
    );
  }
}
/**
 * 报名信息
 */
class RegistrationFrom extends PureComponent<IFormProps, object> {
  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form className={styles.searchRight} {...formItemLayout}>
        <Form.Item label="测试">
          {getFieldDecorator('test', {
            // initialValue: (data && data.data.template_name) || 'single poster',
          })(<Input style={{ width: 295 }} placeholder="暑期班开班啦，限时优惠200" />)}
        </Form.Item>
      </Form>
    );
  }
}

const WrapperBlurbForm = Form.create<IFormProps>({
  onFieldsChange(props, changedFields, allFields) {
    props.handleChange('blurb', changedFields, allFields);
  },
})(BlurbForm);

const WrapperRuleFrom = Form.create<IFormProps>({
  onFieldsChange(props, changedFields, allFields) {
    props.handleChange('rule', changedFields, allFields);
  },
})(RuleFrom);

const WrapperRegistrationFrom = Form.create<IFormProps>({
  onFieldsChange(props, changedFields, allFields) {
    props.handleChange('registration', changedFields, allFields);
  },
})(RegistrationFrom);

export default connect(({ template }: ConnectState) => ({
  collectFormData: template.collectFormData,
}))(GroupPurchase);
