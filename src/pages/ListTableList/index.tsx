import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col, Form, Button, Select, Modal } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import router from 'umi/router';

import styles from './index.less';

const { Option } = Select;

const initialState = {
  nodeList: [{ lable: '节点一', value: 1 }],
  typeList: [{ lable: '类型一', value: 1 }],
  activeData: [
    {
      id: 1,
      title: '双十二拼团砍价',
      inTheLasDays: 42,
      Total: 4235,
      recommended: true,
      spellGroup: true,
    },
    {
      id: 2,
      title: '双十二拼团砍价',
      inTheLasDays: 42,
      Total: 4235,
      recommended: true,
      spellGroup: true,
    },
    {
      id: 3,
      title: '双十二拼团砍价',
      inTheLasDays: 42,
      Total: 4235,
      recommended: true,
      spellGroup: true,
    },
    {
      id: 4,
      title: '双十二拼团砍价',
      inTheLasDays: 42,
      Total: 4235,
      recommended: true,
      spellGroup: true,
    },
  ],
  visible: false,
};

export interface IProps extends FormComponentProps {}

interface IState {
  nodeList: ISelect[];
  typeList: ISelect[];
  activeData: IActiveItem[];
  visible: boolean;
}
interface ISelect {
  lable: string;
  value: string | number;
}
interface IActiveItem {
  id: string | number;
  title: string;
  inTheLasDays: number;
  Total: number;
  recommended: boolean;
  spellGroup: boolean;
}

class TableList extends PureComponent<IProps, IState> {
  readonly state: IState = initialState;

  private handleSearch = () => {};

  private getAllFilter = (filter: any) => {
    const dom =
      filter &&
      filter.map((item: ISelect) => (
        <Option key={item.value} value={item.value}>
          {item.lable}
        </Option>
      ));
    return dom;
  };

  private setSeach = () => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const { nodeList, typeList } = this.state;
    return (
      <Form className={styles.searchRight} layout="inline">
        <Form.Item label="运营节点">
          {getFieldDecorator('node')(
            <Select style={{ width: '160px' }} placeholder="请选择">
              {this.getAllFilter(nodeList)}
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="模板类型">
          {getFieldDecorator('type')(
            <Select style={{ width: '160px' }} placeholder="请选择">
              {this.getAllFilter(typeList)}
            </Select>,
          )}
        </Form.Item>
        <Form.Item colon={false}>
          <Button type="primary" className="mr-8 ml-14" onClick={this.handleSearch}>
            查询
          </Button>
        </Form.Item>
      </Form>
    );
  };

  private setActiveCard = () => {
    const { activeData } = this.state;
    const node =
      activeData &&
      activeData.map((item: IActiveItem) => {
        const { id, title, inTheLasDays, Total, recommended, spellGroup } = item;
        return (
          <Card
            key={id}
            className={styles.cardItem}
            hoverable
            style={{ width: 240 }}
            cover={
              <div className={styles.imageWrap}>
                <img
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  alt="d"
                  className="imageCover"
                />
                <div className={styles.preview}>
                  <Button type="dashed" onClick={() => this.handlePreview(id)}>
                    预览
                  </Button>
                </div>
              </div>
            }
          >
            <div className={styles.cardInfo}>
              <div>
                <div className={styles.title}>{title}</div>
                <div>{spellGroup && <div className={styles.booking}>拼团</div>}</div>
              </div>
              <div>
                <div className="mt-5">{Total}</div>
              </div>
              <div className={styles.activeBottom}>
                <div className={styles.inTheLasDays}>最近30天：{inTheLasDays}</div>
                <div>
                  <Button type="primary" onClick={() => this.createActive(id)}>
                    创建活动
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        );
      });
    return node;
  };

  private createActive = (id: string | number) => {
    router.push(`/template/create/${id}`);
  };

  private handlePreview = (id: string | number) => {
    this.setState({ visible: true }, () => {
      // eslint-disable-next-line no-console
      // console.log(id);
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <Row>
          <Col span={24}>
            <Card className={styles.condition} title={this.setSeach()} />
          </Col>
          <Col span={24} className={styles.activeWrap}>
            {this.setActiveCard()}
          </Col>
        </Row>
        <Modal
          title="模板预览"
          visible={visible}
          // onOk={this.handleOk}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          footer={null}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Fragment>
    );
  }
}

export default Form.create()(TableList);
// export default TableList
