export default {
  'GET /api/getTemplate': {
    code: 0,
    data: {
      activeData: [
        {
          id: 1,
          title: '双十二拼团砍价',
          inTheLasDays: 42,
          total: 4235,
          recommended: true,
          MarketingType: '拼团',
          image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 2,
          title: '双十二拼团砍价',
          inTheLasDays: 42,
          total: 4235,
          recommended: true,
          MarketingType: '好友助力',
          image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 3,
          title: '双十二拼团砍价',
          inTheLasDays: 42,
          total: 4235,
          recommended: true,
          MarketingType: '拼团',
          image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
      ],
    },
    msg: 'succeed',
  },
  'GET /api/getTemplateType': {
    code: 0,
    data: {
      templateTypeData: [
        {
          id: 1,
          title: '教育培训-K12',
          MarketingType: 'group',
          image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 2,
          title: '教育培训-兴趣教训',
          MarketingType: 'bargain',
          image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 3,
          title: '教育培训-亲子早教',
          MarketingType: 'help',
          image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 4,
          title: '教育培训-亲子早教',
          MarketingType: 'vote',
          image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 5,
          title: '教育培训-亲子早教',
          MarketingType: 'leaflet',
          image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 6,
          title: '教育培训-亲子早教',
          MarketingType: 'discount',
          image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
      ],
    },
    msg: 'succeed',
  },
  'GET /api/getDefaultPreview': {
    code: 0,
    data: {
      previewData: {},
    },
    msg: 'succeed',
  },
};
