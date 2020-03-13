import { Reducer } from 'redux';
import { concat, some, remove, cloneDeep } from 'lodash';

// import { Effect } from 'dva';

export interface TemplateModelState {
  collectFormData: TemplateModelItem[];
}

export interface TemplateModelItem {
  type: string;
  data: { [key: string]: any };
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
    collectFormData: [],
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
      const { collectFormData } = state;
      const newCollectFormData = cloneDeep(collectFormData);
      const isExist = some(collectFormData, ['type', payload.type]);
      if (isExist) {
        remove(newCollectFormData, (item: TemplateModelItem) => {
          return item.type === payload.type;
        });
      }
      return {
        collectFormData: concat(newCollectFormData, payload),
      };
    },
  },
};

export default TemplateModel;
