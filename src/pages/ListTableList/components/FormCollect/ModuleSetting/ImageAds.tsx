/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { Form, InputNumber, Radio } from 'antd';
import { connect } from 'dva';
import { find } from 'lodash';
import { FormComponentProps } from 'antd/es/form';
import { ConnectProps, ConnectState } from '@/models/connect';
import { TemplateModelItem, ITabsData } from '@/models/template';
import { ModuleType } from '../../../data';

import styles from './index.less';

export interface IProps extends FormComponentProps, ConnectProps {
  collectFormData: TemplateModelItem[];
  tabKey:string
}

// const initialState = {};
interface IState {}

class ImageAds extends PureComponent<IProps, IState> {
  render() {
    const { collectFormData } = this.props;
    const data: TemplateModelItem | ITabsData | undefined = find(
      collectFormData,
      item => item.type === 'image_ads',
    );
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
        <Form.Item label="海报类型">
          {getFieldDecorator('template_name', {
            initialValue: (data && data.data.template_name) || 'single poster',
          })(
            <Radio.Group>
              <Radio value="single poster">单张海报</Radio>
              <Radio value="poster">轮播海报</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        {/* <Form.Item label="上传海报">
          {getFieldDecorator('poster')(
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
        </Form.Item> */}
        <Form.Item label="切换间隔">
          {getFieldDecorator('switching_interval', {
            initialValue: (data && data.data.switching_interval) || 3,
          })(<InputNumber min={1} max={10} />)}
        </Form.Item>
      </Form>
    );
  }
}


export default connect(({ template }: ConnectState) => ({
  collectFormData: template.collectFormData,
}))(
  Form.create<IProps>({
    onFieldsChange(props, changedFields, allFields) {
      const { dispatch } = props;
      const imageAds = {
        type: ModuleType.image_ads,
        data: {
          template_name: allFields.template_name.value,
          switching_interval: allFields.switching_interval.value,
        },
      };
      // console.log(imageAds);
      if (dispatch) {
        dispatch({
          type: 'template/handleCollect',
          payload: imageAds,
        });
      }
    },
  })(ImageAds),
);
