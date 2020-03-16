import React, { PureComponent } from 'react';
import { Card, Row, Col, Button, Modal } from 'antd';
import router from 'umi/router';
import { getTemplateType } from '../service';
import { ITemplateTypeItem } from '../type.d';
import { ModuleTypeZh } from '../data';
import styles from './SelectTemplateType.less';

export interface IProps {
  visible: boolean;
  onCancel: () => void;
}

const initialState = {
  templateType: [],
};
interface IState {
  templateType: ITemplateTypeItem[];
}

class SelectTemplateType extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  componentDidUpdate(prevProps: IProps) {
    const { visible } = prevProps;
    if (visible !== this.props.visible && this.props.visible) {
      this.getTemplateType();
    }
  }

  private getTemplateType = () => {
    getTemplateType().then(res => {
      if (res) {
        this.setState({
          templateType: res.data.templateTypeData,
        });
      }
    });
  };

  private setTemplateType = () => {
    const { templateType } = this.state;
    const node =
      templateType &&
      templateType.map((item: ITemplateTypeItem) => {
        const { title, MarketingType, id } = item;
        return (
          <Col span={8} className={styles.typeSelectMoule}>
            <Card
              className={styles.typeItem}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <div className={styles.title}>{title}</div>
              <div className={styles.apply}>
                <div className={styles.marketingType}>{ModuleTypeZh[MarketingType]}</div>
                <Button
                  type="primary"
                  className="mr-8 ml-14"
                  onClick={() => this.apply(id, MarketingType)}
                >
                  立即应用
                </Button>
              </div>
            </Card>
          </Col>
        );
      });
    return node;
  };

  private apply = (id: number | string, type: string) => {
    // router.push(`/template/create/${id}&&${type}`);
    router.push({
      pathname: `/template/create/${id}`,
      query: {
        type,
      },
    });
  };

  render() {
    const { visible, onCancel } = this.props;
    return (
      <Modal title="选择模板类型" width={888} visible={visible} onCancel={onCancel} footer={null}>
        <Row className={styles.addRowWrap} gutter={[16, 16]}>
          {this.setTemplateType()}
        </Row>
      </Modal>
    );
  }
}

export default SelectTemplateType;
