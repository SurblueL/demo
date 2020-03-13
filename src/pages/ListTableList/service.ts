import request from '@/utils/request';

export async function getTemplat() {
  return request('/api/getTemplat', {});
}
