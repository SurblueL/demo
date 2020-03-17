import React from 'react';
import { IBoxesState, INode, ITabChild } from './type.d';
import {
  ImageAds,
  GeneralIntroduction,
  Bargain,
  ContactInformation,
  FriendsHelp,
  GroupPurchase,
  InstitutionAddress,
  Promotion,
  TinyLeaflets,
  Vote,
} from './components/FormCollect/ModuleSetting/index';
import {
  ImageAdsPreview,
  GeneralIntroductionPreview,
  BargainPreview,
  ContactInformationPreview,
  FriendsHelpPreview,
  GroupPurchasePreview,
  InstitutionAddressPreview,
  PromotionPreview,
  TinyLeafletsPreview,
  VotePreview,
} from './components/Preview/index';

const ModuleType: { [key: string]: string } = {
  image_ads: 'image_ads',
  general_introduction: 'general_introduction',
  institution_address: 'institution_address',
  contact_way: 'contact_way',
  group: 'group',
  bargain: 'bargain',
  help: 'help',
  vote: 'vote',
  leaflet: 'leaflet',
  discount: 'discount',
};

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
        type: ModuleType.image_ads,
      },
      {
        id: 2,
        name: '通用介绍',
        icon: 'smail',
        type: ModuleType.general_introduction,
      },
      {
        id: 3,
        name: '机构地址',
        icon: 'smail',
        type: 'institution_address',
      },
      {
        id: 4,
        name: '联系方式',
        icon: 'smail',
        type: 'contact_way',
      },
    ],
  },
  // {
  //   type: 'marketing',
  //   title: '组件设置',
  //   icon: 'smail',
  //   children: [
  //     {
  //       id: 5,
  //       name: '多人拼团',
  //       icon: 'smail',
  //       type: ModuleType.group,
  //       // tabList: [
  //       //   {
  //       //     key: 'merchandiseNews',
  //       //     tab: '商品信息',
  //       //   },
  //       //   {
  //       //     key: 'rules',
  //       //     tab: '拼团规则',
  //       //   },
  //       // ],
  //     },
  //     // {
  //     //   id: 6,
  //     //   name: '砍价',
  //     //   icon: 'smail',
  //     //   type: 'bargain',
  //     //   tabList: [],
  //     // },
  //     // {
  //     //   id: 7,
  //     //   name: '好友助力',
  //     //   icon: 'smail',
  //     //   type: 'help',
  //     //   tabList: [],
  //     // },
  //     // {
  //     //   id: 8,
  //     //   name: '投票',
  //     //   icon: 'smail',
  //     //   type: 'vote',
  //     //   tabList: [],
  //     // },
  //     // {
  //     //   id: 9,
  //     //   name: '微传单',
  //     //   icon: 'smail',
  //     //   type: 'leaflet',
  //     //   tabList: [],
  //     // },
  //     // {
  //     //   id: 10,
  //     //   name: '限时折扣',
  //     //   icon: 'smail',
  //     //   type: 'discount',
  //     //   tabList: [],
  //     // },
  //   ],
  // },
];

// 表单
const ModuleCollect: INode = {
  image_ads: (tabKey: string) => <ImageAds tabKey={tabKey} />,
  general_introduction: (tabKey: string) => <GeneralIntroduction tabKey={tabKey} />,
  institution_address: (tabKey: string) => <InstitutionAddress tabKey={tabKey} />,
  contact_way: (tabKey: string) => <ContactInformation tabKey={tabKey} />,
  group: (tabKey: string) => <GroupPurchase tabKey={tabKey} />,
  bargain: (tabKey: string) => <Bargain tabKey={tabKey} />,
  help: (tabKey: string) => <FriendsHelp tabKey={tabKey} />,
  vote: (tabKey: string) => <Vote tabKey={tabKey} />,
  leaflet: (tabKey: string) => <TinyLeaflets tabKey={tabKey} />,
  discount: (tabKey: string) => <Promotion tabKey={tabKey} />,
};

// 预览
const ModulePreview: INode = {
  image_ads: () => <ImageAdsPreview />,
  general_introduction: () => <GeneralIntroductionPreview />,
  institution_address: () => <InstitutionAddressPreview />,
  contact_way: () => <ContactInformationPreview />,
  group: () => <GroupPurchasePreview />,
  bargain: () => <BargainPreview />,
  help: () => <FriendsHelpPreview />,
  vote: () => <VotePreview />,
  leaflet: () => <TinyLeafletsPreview />,
  discount: () => <PromotionPreview />,
};

// tab
const ModuleTabChild: ITabChild = {
  image_ads: {
    title: '图片广告',
    tabList: [],
  },
  general_introduction: {
    title: '通用介绍',
    tabList: [],
  },
  institution_address: {
    title: '机构地址',
    tabList: [],
  },
  contact_way: {
    title: '联系方式',
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
      {
        key: 'registration',
        tab: '报名信息',
      },
    ],
  },
  bargain: {
    title: '砍价',
    tabList: [
      {
        key: 'merchandiseNews',
        tab: '商品信息',
      },
      {
        key: 'rules',
        tab: '砍价规则',
      },
      {
        key: 'registration',
        tab: '报名信息',
      },
    ],
  },
  help: {
    title: '好友助力',
    tabList: [
      {
        key: 'merchandiseNews',
        tab: '商品信息',
      },
      {
        key: 'rules',
        tab: '砍价规则',
      },
      {
        key: 'registration',
        tab: '报名信息',
      },
    ],
  },
  vote: {
    title: '投票',
    tabList: [
      {
        key: 'merchandiseNews',
        tab: '商品信息',
      },
      {
        key: 'rules',
        tab: '砍价规则',
      },
      {
        key: 'registration',
        tab: '报名信息',
      },
    ],
  },
  leaflet: {
    title: '微传单',
    tabList: [
      {
        key: 'merchandiseNews',
        tab: '商品信息',
      },
      {
        key: 'rules',
        tab: '砍价规则',
      },
      {
        key: 'registration',
        tab: '报名信息',
      },
    ],
  },
  discount: {
    title: '限时折扣',
    tabList: [
      {
        key: 'merchandiseNews',
        tab: '商品信息',
      },
      {
        key: 'rules',
        tab: '砍价规则',
      },
      {
        key: 'registration',
        tab: '报名信息',
      },
    ],
  },
};

const ModuleTypeZh: { [key: string]: string } = {
  image_ads: '图片广告',
  general_introduction: '通用介绍',
  institution_address: '机构地址',
  contact_way: '联系方式',
  group: '拼团',
  bargain: '砍价',
  help: '好友助力',
  vote: '投票',
  leaflet: '微传单',
  discount: '限时折扣',
};

export { ModuleData, ModuleCollect, ModuleTypeZh, ModulePreview, ModuleTabChild, ModuleType };
