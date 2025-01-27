import isEmpty from "lodash.isempty";

export interface IItem {
  id: string;
}

export type ItemResult = Record<IItem["id"], IItem>;

export function normalizeById(items: IItem[] = []): ItemResult {
  return items.reduce<ItemResult>((result, item) => {
    if (isEmpty(item.id)) return result;

    result[item.id] = item;
    return result;
  }, {});
}
