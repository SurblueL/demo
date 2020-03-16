import React, { PureComponent, Fragment } from 'react';
import { Form, Input } from 'antd';
import { connect } from 'dva';
import { ConnectProps, ConnectState } from '@/models/connect';
import { FormComponentProps } from 'antd/es/form';
import { TemplateModelItem } from '@/models/template';
import { ModuleType } from '../../../data';
import styles from './index.less';

export interface IProps extends FormComponentProps, ConnectProps {
  collectFormData: TemplateModelItem[];
  tabKey: string;
}
export interface IFormProps extends FormComponentProps, ConnectProps {
  id: string;
  tabKey: string;
  expertId?: string;
  customerId?: string;
  hideAll?(): void;
  initDetail?(): void;
  success?(): void;
  openUpdate?(id: string): void;
}

const initialState = {};
interface IState {}

class GroupPurchase extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  render() {
    const { tabKey } = this.props;
    return (
      <Fragment>
        {tabKey === 'merchandiseNews' && <WrapperBlurbForm />}
        {tabKey === 'rules' && <WrapperRuleFrom />}
        {tabKey === 'registration' && <WrapperRegistrationFrom />}
      </Fragment>
    );
  }
}

/**
 * 商品信息
 */
class BlurbForm extends PureComponent<IFormProps, object> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      // isSubmit:false,
      // buttonActive:false
    };
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
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
        <Form.Item label="活动名称">
          {getFieldDecorator('name', {
            // initialValue: (data && data.data.template_name) || 'single poster',
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
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      // isSubmit:false,
      // buttonActive:false
    };
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
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
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      // isSubmit:false,
      // buttonActive:false
    };
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
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
        <Form.Item label="测试">
          {getFieldDecorator('test', {
            // initialValue: (data && data.data.template_name) || 'single poster',
          })(<Input style={{ width: 295 }} placeholder="暑期班开班啦，限时优惠200" />)}
        </Form.Item>
      </Form>
    );
  }
}

const WrapperBlurbForm = connect(({ template }: ConnectState) => ({
  collectFormData: template.collectFormData,
}))(
  Form.create({
    onFieldsChange(props, changedFields, allFields) {
      console.log(props, changedFields, allFields, '1');
      const { dispatch } = props;
      const payloads = {
        type: ModuleType.group,
        data: [
          {
            blurb: {
              name: allFields.name.value,
            },
          },
        ],
      };
      // console.log(imageAds);
      if (dispatch) {
        console.log('dispatch');
        dispatch({
          type: 'template/handleCollect',
          payload: payloads,
        });
      }
    },
  })(BlurbForm),
);

const WrapperRuleFrom = Form.create({
  onFieldsChange(props, changedFields, allFields) {
    console.log(props, changedFields, allFields, '2');
    const { dispatch } = props;
    const payloads = {
      type: ModuleType.group,
      data: [
        {
          blurb: {
            name: allFields.number_pepole.value,
          },
        },
      ],
    };
    // console.log(imageAds);
    if (dispatch) {
      dispatch({
        type: 'template/handleCollect',
        payload: payloads,
      });
    }
  },
})(RuleFrom);
const WrapperRegistrationFrom = Form.create({
  onFieldsChange(props, changedFields, allFields) {
    console.log(props, changedFields, allFields, '2');
    const { dispatch } = props;
    const payloads = {
      type: ModuleType.group,
      data: [
        {
          blurb: {
            name: allFields.test.value,
          },
        },
      ],
    };
    // console.log(imageAds);
    if (dispatch) {
      dispatch({
        type: 'template/handleCollect',
        payload: payloads,
      });
    }
  },
})(RegistrationFrom);

export default connect(({ template }: ConnectState) => ({
  collectFormData: template.collectFormData,
}))(Form.create<IProps>()(GroupPurchase));
