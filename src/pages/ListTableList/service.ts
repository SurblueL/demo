import request from '@/utils/request';

// 获取模板
export async function getTemplate() {
  return request('/api/getTemplate', {});
}

// 获取模板类型
export async function getTemplateType() {
  return request('/api/getTemplateType', {});
}

// 获取模板类型信息预览
export async function geTemplateInfo(params: any) {
  return request('/api/geTemplateInfo', {
    method: 'GET',
    params,
  });
}
