import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col, Form, Button, Select, Modal, Icon, Tooltip } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { getTemplat } from './service';
import router from 'umi/router';

import styles from './index.less';

const { Option } = Select;
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
  // readonly state: IState = initialState;
  constructor(props: IProps) {
    super(props);
    this.state = {
      nodeList: [{ lable: '节点一', value: 1 }],
      typeList: [{ lable: '类型一', value: 1 }],
      activeData: [],
      visible: false,
    };
  }

  componentDidMount() {
    this.getTemplat();
  }

  private getTemplat = () => {
    getTemplat().then(res => {
      this.setState({
        activeData: res.data.activeData,
      });
    });
  };

  // private handleSearch = () => {};

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
          <Button
            type="primary"
            className="mr-8 ml-14"
            // onClick={this.handleSearch}
          >
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
          <Col span={6}>
            <Card
              key={id}
              className={styles.cardItem}
              hoverable
              cover={
                <div className={styles.imageWrap}>
                  <img
                    className="imageCover"
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                  <div className={styles.preview}>
                    <Button type="dashed">
                      {/* TODO:替换为二维码图片 */}
                      预览
                    </Button>
                  </div>
                </div>
              }
              actions={[
                <Tooltip placement="top" title="置顶">
                  <Icon type="up" />
                </Tooltip>,
                <Tooltip placement="top" title="编辑">
                  <Icon type="edit" key="edit" />
                </Tooltip>,
                <Tooltip placement="top" title="数据">
                  <Icon type="profile" />
                </Tooltip>,
                <Tooltip placement="top" title="删除">
                  <Icon type="delete" key="delete" />
                </Tooltip>,
              ]}
            >
              <div className={styles.cardInfo}>
                <div>
                  <div className={styles.title}>{title}</div>
                  <div>{spellGroup && <div className={styles.booking}>拼团</div>}</div>
                </div>
                <div className="mt-10">
                  <div>{Total}</div>
                  <div className={styles.inTheLasDays}>最近30天：{inTheLasDays}</div>
                </div>
              </div>
            </Card>
          </Col>
        );
      });
    return node;
  };

  private createActive = (id: string | number) => {
    router.push(`/template/create/${id}`);
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
            <Row className={styles.addRowWrap} gutter={[16, 16]}>
              <Col className={styles.addWrap} span={6}>
                <Button
                  className={styles.addTemplate}
                  type="dashed"
                  size="large"
                  icon="plus"
                  ghost
                  onClick={() => {
                    this.setState({ visible: true });
                  }}
                >
                  新增模板
                </Button>
              </Col>
              {this.setActiveCard()}
            </Row>
          </Col>
        </Row>
        <Modal
          title="选择模板类型"
          visible={visible}
          // onOk={this.handleOk}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          footer={null}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            // actions={[
            //   <Icon type="edit" key="edit" />,

            // ]}
          >
            <div className={styles.booking}>拼团</div>
            <Button type="primary" className="mr-8 ml-14">
              立即应用
            </Button>
          </Card>
        </Modal>
      </Fragment>
    );
  }
}

export default Form.create()(TableList);
// export default TableList
