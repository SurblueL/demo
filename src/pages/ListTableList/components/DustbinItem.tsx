import React, { Children } from 'react';
import { useDrop } from 'react-dnd';
import { Icon } from 'antd';
import styles from './DustbinItem.less';

const style: React.CSSProperties = {
  height: '12rem',
  width: '12rem',
  // marginRight: '1.5rem',
  marginBottom: '1.5rem',
  // color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};

export interface DustbinProps {
  accept: string[];
  onDrop: (item: any) => void;
  onClick: (item: any) => void;
  onDelectItem: (item: any) => void;
  onUpItem: (item: any) => void;
  onDownItem: (item: any) => void;
  isChecked: boolean;
  dustbinsIndex: number[]; // 第一个元素是当前容器的下标 第二个元素是容器的个数(数组长度)
}

const Dustbin: React.FC<DustbinProps> = props => {
  const {
    accept,
    onDrop,
    onClick,
    isChecked,
    dustbinsIndex,
    onDelectItem,
    onUpItem,
    onDownItem,
    children,
  } = props;
  const [{ isOver, canDrop }, drop] = useDrop({
    accept, // 容器可接受的拖拽物类型
    drop: onDrop, // 拖拽事件的方法
    collect: monitor => ({
      // 把拖拽过程中需要信息注入组件的 props
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
    }),
  });
  const isActive = isOver && canDrop;
  let backgroundColor = '#fff';
  let border = 'none';
  if (isActive) {
    backgroundColor = '#1790FF';
  } else if (canDrop) {
    backgroundColor = '#1790FF';
  } else if (isChecked) {
    border = '2px solid #1890FF';
  }
  return (
    <div className={styles.dustbinItem}>
      <div ref={drop} style={{ ...style, backgroundColor, border }} onClick={onClick}>
        {canDrop && <p>模块放置区域</p>}
        {isChecked && <p>选中：</p>}
        {children && Children.only(children)}
      </div>
      {isChecked && (
        <div className={styles.iconWrap}>
          <Icon
            className={styles.iconItem}
            onClick={onDelectItem}
            type="close-circle"
            theme="filled"
          />

          {/* 只要不是第一条 就能上移 */}
          {dustbinsIndex[0] !== 0 && (
            <Icon className={styles.iconItem} onClick={onUpItem} type="up-circle" theme="filled" />
          )}
          {/* 只要不是最后一条 就上下移 */}
          {dustbinsIndex[0] + 1 !== dustbinsIndex[1] && (
            <Icon
              className={styles.iconItem}
              onClick={onDownItem}
              type="down-circle"
              theme="filled"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Dustbin;
