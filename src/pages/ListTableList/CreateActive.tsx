/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { Layout, Card, Row, Col } from 'antd';
import Backend from 'react-dnd-html5-backend';
import { connect } from 'dva';
import { DndProvider } from 'react-dnd';
import update from 'immutability-helper';
import { isEqual, without } from 'lodash';
import { ConnectProps, ConnectState } from '@/models/connect';
import { TemplateModelItem } from '@/models/template';
import { ModuleData, ModulePreview } from './data';
import DustbinItem from './components/DustbinItem';
import GridBox from './components/GridBox';
import ConfigurationTab from './ConfigurationTab';

import { IBoxesState, IChildren, IDustbinState } from './type.d';

import styles from './index.less';

const { Sider } = Layout;
export interface IProps extends ConnectProps {
  collectFormData: TemplateModelItem[];
}

interface IState {
  dustbins: IDustbinState[]; // 用作容器的元素 盛放被拖拽元素
  boxes: IBoxesState[]; // 可被拖拽的元素
  droppedBoxTypes: string[]; // 已经被拖拽过的元素的type集合
  checkedType: string; // 正在被选中的容器的type
  // collectData: any;
  // data: any; // dva 点击预览后的得到的数据
}
const initialState = {
  dustbins: [],
  boxes: ModuleData,
  droppedBoxTypes: [],
  checkedType: '',

  // data: {},
};

class CreateActive extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  componentDidUpdate(prevProps: IProps) {
    const { collectFormData } = prevProps;
    if (isEqual(collectFormData, this.props.collectFormData)) {
      // this.handleCollect(this.props.collectFormData);
    }
  }

  // private handleCollect = (collectFormData: any) => {
  //   const { dustbins } = this.state;
  //   dustbins.map((item: IDustbinState, index: number) => {
  //     if (item.accept[0] === collectFormData.type) {
  //       this.setState({
  //         dustbins: update(dustbins, {
  //           [index]: {
  //             collectFormData: {
  //               $set: item,
  //             },
  //           },
  //         }),
  //       });
  //     }
  //     return null;
  //   });
  // };

  // 判断是否被拖拽过
  private isDropped = (boxType: string) => {
    const { droppedBoxTypes } = this.state;
    return droppedBoxTypes.indexOf(boxType) > -1;
  };

  private setCard = () => {
    const { boxes } = this.state;
    const node =
      boxes &&
      boxes.map((item: IBoxesState) => {
        const { title, children } = item;
        return (
          <Card title={title} className={styles.modalGrid}>
            {this.setGrid(children)}
          </Card>
        );
      });
    return node;
  };

  private setGrid = (content: IChildren[]) => {
    const { droppedBoxTypes } = this.state;
    const node =
      content &&
      content.map((item: IChildren) => {
        const { type } = item;
        return (
          <GridBox
            {...item}
            isDropped={this.isDropped(type)}
            onDropped={() => this.onDropped(item)}
            droppedBoxTypes={droppedBoxTypes}
          />
        );
      });
    return node;
  };

  private setDustbin = () => {
    const { dustbins, checkedType } = this.state;
    const node =
      dustbins &&
      dustbins.map((dustbinsItem, index) => {
        const { accept } = dustbinsItem;
        return (
          <DustbinItem
            accept={accept}
            onDrop={item => this.handleDrop(index, item, dustbinsItem)}
            onClick={() => this.dustbinClick(index, accept[0])}
            isChecked={isEqual(checkedType, accept[0])}
            dustbinsIndex={[index, dustbins.length]}
            onDelectItem={() => this.handleDelect(index, accept[0], dustbinsItem)}
            onUpItem={() => this.onUpItem(index, dustbinsItem)}
            onDownItem={() => this.onDownItem(index, dustbinsItem)}
          >
            {ModulePreview[accept[0]](checkedType)}
          </DustbinItem>
        );
      });
    return node;
  };

  //  刪除当前容器
  private handleDelect = (index: number, type: string, dustbinsItem: IDustbinState) => {
    const { dustbins, droppedBoxTypes } = this.state;
    const setDustbins = without(dustbins, dustbinsItem);
    const setDroppedBoxNames = without(droppedBoxTypes, type);
    this.setState({
      dustbins: setDustbins,
      droppedBoxTypes: setDroppedBoxNames,
    });
  };

  // 排序 上移
  private onUpItem = (index: number, dustbinsItem: IDustbinState) => {
    const { dustbins } = this.state;
    const setDustbins = update(dustbins, {
      $splice: [
        [index, 1],
        [index - 1, 0, dustbinsItem],
      ],
    });

    this.setState({
      dustbins: setDustbins,
    });
  };

  // 排序 下移
  private onDownItem = (index: number, dustbinsItem: IDustbinState) => {
    const { dustbins } = this.state;
    const setDustbins = update(dustbins, {
      $splice: [
        [index, 1],
        [index + 1, 0, dustbinsItem],
      ],
    });

    this.setState({
      dustbins: setDustbins,
    });
  };

  // 元素被拖拽时 动态创建容器接受垃圾
  private onDropped = (item: IChildren) => {
    const { type } = item;
    const { dustbins } = this.state;
    const setDustbins = update(dustbins, {
      $push: [
        {
          accept: [type],
          // lastDroppedItem: undefined,
          // TODO:当拖拽进行到一半然后取消拖拽时 容器消失 而不是只要拖拽开始后无法停止？？？
          // lastDroppedItem: item,
        },
      ],
    });
    this.setState({
      dustbins: setDustbins,
      // checkedType: type,
    });
  };

  // 拖拽方法（已经拖拽到容器内） 拖拽后向容器记录已被拖拽的元素的type
  private handleDrop = (index: any, item: IChildren, dustbinsItem: IDustbinState) => {
    const { type } = item;
    const { droppedBoxTypes } = this.state;
    // console.log(item, dustbinsItem);
    // TODO:
    // const setDustbins = update(dustbins, {
    //   [index]: {
    //     lastDroppedItem: {
    //       $set: item,
    //     },
    //   },
    // });

    const setDroppedBoxNames = update(droppedBoxTypes, type ? { $push: [type] } : { $push: [] });
    this.setState({
      // dustbins: setDustbins,
      droppedBoxTypes: setDroppedBoxNames,
      checkedType: type,
    });
    return item;
  };

  // 点击容器 切换当前被选中的垃圾（容器）type
  private dustbinClick = (index: number, type: string) => {
    this.setState({
      checkedType: type,
    });
  };

  render() {
    const { checkedType } = this.state;
    // console.log(this.props.collectFormData, this.state.dustbins);
    // const dataSet = concat(boxes[0].content, boxes[1].content);
    return (
      <DndProvider backend={Backend}>
        <Layout className={styles.activeLayout}>
          {/* TODO:将card替换成折叠面板 和 栅格 */}
          <Sider className={styles.activeSidert}>{this.setCard()}</Sider>
          <Layout>
            <Layout>
              <Row>
                <Col span={10} className={styles.dustbinFlex}>
                  {this.setDustbin()}
                </Col>
                <Col span={14}>
                  <ConfigurationTab type={checkedType} />
                </Col>
              </Row>
            </Layout>
          </Layout>
        </Layout>
      </DndProvider>
    );
  }
}

export default connect(({ template }: ConnectState) => ({
  collectFormData: template.collectFormData,
}))(CreateActive);
