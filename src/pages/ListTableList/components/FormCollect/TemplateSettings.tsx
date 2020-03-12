import React, { PureComponent } from 'react';
import { Card } from 'antd';
import BasicSetting from './TemplateSetting/BasicSetting';
import SharingSettings from './TemplateSetting/SharingSettings';

export interface IProps {}

const initialState = {
  key: 'basicSetting',
};
interface IState {
  key: string;
}

class TemplateSettings extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  onTabChange = (key: string) => {
    // console.log(key, type);
    this.setState({ key });
  };

  render() {
    const tabList = [
      {
        key: 'basicSetting',
        tab: '基础设置',
      },
      {
        key: 'sharingSettings',
        tab: '分享设置',
      },
      //   {
      //     key: 'pageSetup',
      //     tab: '页面设置',
      //   },
    ];
    const contentList = {
      basicSetting: <BasicSetting />,
      sharingSettings: <SharingSettings />,
      //   pageSetup: <Input placeholder="页面设置" />,
    };
    return (
      <Card
        style={{ width: '100%' }}
        title="模板设置"
        // extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={this.state.key}
        onTabChange={key => {
          this.onTabChange(key);
        }}
      >
        {contentList[this.state.key]}
      </Card>
    );
  }
}

export default TemplateSettings;
