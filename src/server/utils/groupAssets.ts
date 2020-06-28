import { groupBy } from 'lodash';

const updatePath = (path = '') => (path.startsWith('/') ? path : `/${path}`);
const getExtension = (filename: string) => filename.split('.').pop() || '';

export default function groupAssets(assets: Record<string, string>) {
  return groupBy(Object.values(assets).map(updatePath), getExtension);
}
