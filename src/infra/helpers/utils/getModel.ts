import { DomainGetModelListModel, GetModelListModel } from "@src/types";
import { createSafeUrl } from "./createSafeUrl";

export const getModelFromGetModelListModel = (
  models: GetModelListModel[],
  modelName: string
) => {
  modelName = decodeURIComponent(modelName);

  return models?.find((model) => {
    return [createSafeUrl(model.name), createSafeUrl(model.arName)].includes(
      modelName
    );
  });
};

export const getModelFromDomainGetModelListModel = (
  models: DomainGetModelListModel[],
  modelName: string
) => {
  modelName = decodeURIComponent(modelName);

  return models?.find((model) => {
    return [createSafeUrl(model.enName), createSafeUrl(model.arName)].includes(
      modelName
    );
  });
};
