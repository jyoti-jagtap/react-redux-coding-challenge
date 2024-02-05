import React from 'react';
import { CustomCellRendererProps } from 'ag-grid-react';
import './ActionCellRenderer.sass';
import Button from '@mui/material/Button';
const ActionCellRenderer = (props: CustomCellRendererProps) => {
  const invokeParentMethod = () => {
    props.context.methodFromParent(props.data);
  };
  return (
    <Button variant="contained" onClick={invokeParentMethod}>
      View
    </Button>
  );
};
export default ActionCellRenderer;
