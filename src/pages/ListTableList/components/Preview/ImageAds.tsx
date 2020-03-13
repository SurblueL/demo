import React, { PureComponent } from 'react';
// import { Carousel } from 'antd';
import { find } from 'lodash';
import { ConnectProps, ConnectState } from '@/models/connect';
import { TemplateModelItem } from '@/models/template';
import { connect } from 'dva';

export interface IProps extends ConnectProps {
  collectFormData: TemplateModelItem[];
}

const initialState = {};
interface IState {}

class ImageAds extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  render() {
    const { collectFormData } = this.props;
    const data: TemplateModelItem | undefined = find(
      collectFormData,
      item => item.type === 'image_ads',
    );
    // console.log(this.props, data);
    return (
      <>
        {/* // <Carousel autoplay>
      //   <div>
      //     <h3>1</h3>
      //   </div>
      //   <div>
      //     <h3>2</h3>
      //   </div>
      //   <div>
      //     <h3>3</h3>
      //   </div>
      //   <div>
      //     <h3>4</h3>
      //   </div>
      // </Carousel> */}
        <div>图片广告</div>
        <div>海报类型：{(data && data.data.template_name) || 'single poster'}</div>
        <div>时间间隔：{(data && data.data.switching_interval) || 3}s</div>
      </>
    );
  }
}

// export default ImageAds;
export default connect(({ template }: ConnectState) => ({
  collectFormData: template.collectFormData,
}))(ImageAds);
