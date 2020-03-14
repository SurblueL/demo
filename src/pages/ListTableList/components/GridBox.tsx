import React from 'react';
import { useDrag } from 'react-dnd';
import { Card } from 'antd';
import { indexOf } from 'lodash';
import { FileImageOutlined } from '@ant-design/icons';
import { GridProps } from '../type.d';

const { Grid } = Card;

const style: React.CSSProperties = {
  cursor: 'move',
  fontSize: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
};

const gridStyle = {
  width: '50%',
};

const GridBox: React.FC<GridProps> = props => {
  const { isDropped, name, onDropped, droppedBoxTypes } = props;
  const [{ opacity, cursor }, drag] = useDrag({
    item: { ...props },
    begin() {
      onDropped(props);
    },
    canDrag: !(indexOf(droppedBoxTypes, name) > -1),
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
      cursor: indexOf(droppedBoxTypes, name) > -1 ? 'default' : 'move',
    }),
  });

  return (
    <Grid style={gridStyle}>
      <div ref={drag} style={{ ...style, opacity, cursor }}>
        <FileImageOutlined className="mb-5" />
        {isDropped ? <s>{name}</s> : name}
      </div>
    </Grid>
  );
};

export default GridBox;
