import { Reducer } from 'redux';
import { concat, some, remove, cloneDeep } from 'lodash';

// import { Effect } from 'dva';

export interface TemplateModelState {
  collectFormData: TemplateModelItem[];
}

/**
 * @TemplateModelItem
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
  data: { [key: string]: any } | ITabsData[];
}
interface ITabsData {
  [key: string]: any
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
