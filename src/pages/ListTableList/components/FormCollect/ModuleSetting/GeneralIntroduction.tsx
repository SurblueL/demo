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
  tabKey: string;
}

const initialState = {};
interface IState {}

class CreateActive extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  render() {
    return <div>通用介绍</div>;
  }
}

// export default CreateActive;

export default connect(({ template }: ConnectState) => ({
  collectFormData: template.collectFormData,
}))(
  Form.create<IProps>({
    // onFieldsChange(props, changedFields, allFields) {
    //   const { dispatch } = props;
    //   const imageAds = {
    //     type: ModuleType.image_ads,
    //     data: {
    //       template_name: allFields.template_name.value,
    //       switching_interval: allFields.switching_interval.value,
    //     },
    //   };
    //   // console.log(imageAds);
    //   if (dispatch) {
    //     dispatch({
    //       type: 'template/handleCollect',
    //       payload: imageAds,
    //     });
    //   }
    // },
  })(CreateActive),
);
