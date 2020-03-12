import React from 'react';
import { IBoxesState, INode, ITabChild } from './type.d';
import {
  ImageAds,
  // GeneralIntroduction,
  // Bargain,
  // ContactInformation,
  // FriendsHelp,
  // GroupPurchase,
  // InstitutionAddress,
  // Promotion,
  // TinyLeaflets,
  // Vote,
} from './components/FormCollect/ModuleSetting/index';
import {
  ImageAdsPreview,
  // GeneralIntroductionPreview,
  // BargainPreview,
  // ContactInformationPreview,
  // FriendsHelpPreview,
  // GroupPurchasePreview,
  // InstitutionAddressPreview,
  // PromotionPreview,
  // TinyLeafletsPreview,
  // VotePreview,
} from './components/Preview/index';

const ModuleData: IBoxesState[] = [
  {
    type: 'temlate',
    title: '模板设置',
    icon: 'table',
    children: [
      {
        id: 1,
        name: '图片广告',
        icon: 'smail',
        type: 'image_ads',
        // tabList: [],
      },
      {
        id: 2,
        name: '通用介绍',
        icon: 'smail',
        type: 'General_introduction',
        // tabList: [],
      },
      // {
      //   id: 3,
      //   name: '机构地址',
      //   icon: 'smail',
      //   type: 'institution_address',
      //   tabList: [],
      // },
      // {
      //   id: 4,
      //   name: '联系方式',
      //   icon: 'smail',
      //   type: 'contact_way',
      //   tabList: [],
      // },
    ],
  },
  {
    type: 'marketing',
    title: '组件设置',
    icon: 'smail',
    children: [
      {
        id: 5,
        name: '多人拼团',
        icon: 'smail',
        type: 'group',
        // tabList: [
        //   {
        //     key: 'merchandiseNews',
        //     tab: '商品信息',
        //   },
        //   {
        //     key: 'rules',
        //     tab: '拼团规则',
        //   },
        // ],
      },
      // {
      //   id: 6,
      //   name: '砍价',
      //   icon: 'smail',
      //   type: 'bargain',
      //   tabList: [],
      // },
      // {
      //   id: 7,
      //   name: '好友助力',
      //   icon: 'smail',
      //   type: 'help',
      //   tabList: [],
      // },
      // {
      //   id: 8,
      //   name: '投票',
      //   icon: 'smail',
      //   type: 'vote',
      //   tabList: [],
      // },
      // {
      //   id: 9,
      //   name: '微传单',
      //   icon: 'smail',
      //   type: 'leaflet',
      //   tabList: [],
      // },
      // {
      //   id: 10,
      //   name: '限时折扣',
      //   icon: 'smail',
      //   type: 'discount',
      //   tabList: [],
      // },
    ],
  },
];

// 表单
const ModuleCollect: INode = {
  image_ads: (tabKey: string) => <ImageAds key={tabKey} />,
  General_introduction: (tabKey: string) => <ImageAds key={tabKey} />,
  group: (tabKey: string) => <ImageAds key={tabKey} />,
};

// 预览
const ModulePreview: INode = {
  image_ads: () => <ImageAdsPreview />,
  General_introduction: () => <ImageAdsPreview />,
  group: () => <ImageAdsPreview />,
};

const ModuleTabChild: ITabChild = {
  image_ads: {
    title: '图片广告',
    tabList: [],
  },
  General_introduction: {
    title: '通用介绍',
    tabList: [],
  },
  group: {
    title: '多人拼团',
    tabList: [
      {
        key: 'merchandiseNews',
        tab: '商品信息',
      },
      {
        key: 'rules',
        tab: '拼团规则',
      },
    ],
  },
};

export { ModuleData, ModuleCollect, ModulePreview, ModuleTabChild };
