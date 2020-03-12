/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { Form, Button, InputNumber, Input, Radio } from 'antd';
import { connect } from 'dva';
import { FormComponentProps } from 'antd/es/form';
import { ConnectProps, ConnectState } from '@/models/connect';
import styles from './index.less';

export interface IProps extends FormComponentProps, ConnectProps {}

// const initialState = {};
interface IState {}

class ImageAds extends PureComponent<IProps, IState> {
  private handlePreview = () => {
    const { form, dispatch } = this.props;
    form.validateFields(async (err, values) => {
      if (!err) {
        const imageAds = { type: 'imageAds', data: { ...values } };
        if (dispatch) {
          dispatch({
            type: 'template/handleCollect',
            payload: imageAds,
          });
        }
      }
    });
  };

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
        <Form.Item label="海报类型">
          {getFieldDecorator('template_name', {
            initialValue: 1,
          })(
            <Radio.Group>
              <Radio value={1}>单张海报</Radio>
              <Radio value={2}>轮播海报</Radio>
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
            initialValue: 3,
          })(<InputNumber min={1} max={10} />)}
        </Form.Item>
        <Form.Item colon={false}>
          <Button type="primary" className="mr-8 ml-14" onClick={this.handlePreview}>
            预览
          </Button>
          <Button
            type="primary"
            className="mr-8 ml-14"
            // onClick={
            //     // this.handleSubmit
            // }
          >
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

// export default Form.create()(ImageAds);

export default connect(({ template }: ConnectState) => ({
  collectFormData: template.collectFormData,
}))(Form.create()(ImageAds));
