import { Reducer } from 'redux';
import { concat, some, remove, cloneDeep, isArray } from 'lodash';

// import { Effect } from 'dva';

export interface TemplateModelState {
  collectFormData: TemplateModelItem[];
}

/**
 * [
 * {
 *    type:'image_ads',
 *    data:{pic:'xxx',a:'xxx',...}
 * },{
 *     type:'group',   // 拼团等有多个tab数据时的数据结构
 *      data:[
 *        {merchandiseNews:{a:'xxx',b:'xxx'}}
 *        {rules:{a:'xxx',b:'xxx'}}
 *        {registration:{a:'xxx',b:'xxx'}}
 *          ]
 * }
 * ]
 *
 */
export interface TemplateModelItem {
  type: string;
  data: { [key: string]: any };
}
export interface ITabsData {
  type: string;
  data: { [key: string]: any }[];
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
      console.log(payload);
      const { collectFormData } = state;
      const newCollectFormData = cloneDeep(collectFormData);
      const isExist = some(collectFormData, ['type', payload.type]);
      if (isArray(payload.data)) {
        console.log(payload);
      }
      if (isExist) {
        remove(newCollectFormData, (item: TemplateModelItem) => item.type === payload.type);
      }
      return {
        collectFormData: concat(newCollectFormData, payload),
      };
    },
  },
};

export default TemplateModel;
