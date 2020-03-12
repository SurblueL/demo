import React, { PureComponent } from 'react';
import { Menu, Row, Col, Empty, Card } from 'antd';
// import { IDropDataItem, DustbinState } from './data.d';
import TemplateSettings from './components/FormCollect/TemplateSettings';
import ModuleSetting from './components/FormCollect/ModuleSetting';
// import { FormComponentProps } from 'antd/es/form';

// import styles from './ConfigurationTab.less';
// const { SubMenu } = Menu;

export interface IProps {
  type: string;
}

const initialState = {
  tabKey: 'template', // 1
  menu: [
    {
      title: '模板设置',
      key: 'template',
    },
    {
      title: '组件设置',
      key: 'modal',
    },
  ],
};
interface IState {
  tabKey: string;
  menu: { title: string; key: string }[];
}

class ConfigurationTab extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  private handleClick = (e: any) => {
    this.setState({
      tabKey: e.key,
    });
  };

  private setMenu = () => {
    const { menu } = this.state;
    const node =
      menu &&
      menu.map((item: { title: string; key: string }) => {
        const { title, key } = item;
        return <Menu.Item key={key}>{title}</Menu.Item>;
      });
    return node;
  };

  render() {
    const { tabKey } = this.state;
    const { type } = this.props;
    // console.log(this.props, tabKey);
    return (
      <Row>
        <Col span={6}>
          <Menu
            onClick={this.handleClick}
            // style={{ width: 256 }}
            defaultSelectedKeys={[tabKey]}
            defaultOpenKeys={[tabKey]}
            mode="inline"
          >
            {this.setMenu()}
          </Menu>
        </Col>
        <Col span={18}>
          {tabKey === 'template' && <TemplateSettings />}

          {tabKey !== 'template' && type && <ModuleSetting type={type} />}
          {tabKey !== 'template' && !type && (
            <Card title="组件设置">
              <Empty description="请先选择需要配置的组件" />
            </Card>
          )}
        </Col>
      </Row>
    );
  }
}

export default ConfigurationTab;
