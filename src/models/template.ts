import { Reducer } from 'redux';
import { concat } from 'lodash';

// import { Effect } from 'dva';

export interface TemplateModelState {
  collectFormData: any;
}

export interface TemplateType {
  namespace: 'template';
  state: TemplateModelState;
  //   effects: {
  //     fetchTemplate: Effect;
  //   };
  reducers: {
    handleCollect: Reducer<any>;
  };
}

const TemplateModel: TemplateType = {
  namespace: 'template',

  state: {
    collectFormData: {},
  },

  //   effects: {
  //     *fetchTemplate({ payload }, { call, put }) {
  //       yield put({
  //         type: 'handleCollect',
  //         payload,
  //       });
  //     },
  //   },

  reducers: {
    handleCollect(state, { payload }) {
      const setPayload = concat(state.collectFormData, payload);
      // console.log(state, payload);
      return {
        // ...state,
        collectFormData: setPayload,
      };
    },
  },
};

export default TemplateModel;
