import React, { PureComponent } from 'react';
import { Card } from 'antd';
// import { IContent } from '../../data.d';
import { ModuleTabChild, ModuleCollect } from '../../data';
import { ICollectType } from '../../type.d';

interface IProps extends ICollectType {}

const initialState = {
  tabKey: '',
};
interface IState {
  tabKey: string;
}

class TemplateSettings extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  onTabChange = (tabKey: string) => {
    this.setState({ tabKey });
  };

  render() {
    // const { name, contentList, tabList } = this.props.checkedCollection;
    const { tabKey } = this.state;
    const { type } = this.props;
    const tabData = ModuleTabChild[type];
    console.log(ModuleTabChild,type);
    // const {tabList}=tabList
    return (
        // <div>sss</div>
      <Card
        title={tabData.title}
        tabList={tabData.tabList}
        activeTabKey={tabKey}
        defaultActiveTabKey={tabData.tabList.length > 0 ? tabData.tabList[0].key : ''}
        onTabChange={key => {
          this.onTabChange(key);
        }}
      >
        {ModuleCollect[type](tabKey)}
      </Card>
    );
  }
}

export default TemplateSettings;
