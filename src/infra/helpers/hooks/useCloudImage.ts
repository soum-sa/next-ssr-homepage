"use client";

import { useState, useEffect } from "react";

import { useCloudImgAdminSetting } from "@app/factory/usecases";
interface IUseCloudImageProps {
  src: string;
  altSrc: string;
}

/**
 * Depending on the value of cloudimage_image_optimization_web
 * we show images from cloudimg if true otherwise on false
 * use the usual image source
 *
 * useEffect and handling of image load error are only required when
 * use cloudimg
 */
export function useCloudImage(props: IUseCloudImageProps) {
  const { data } = useCloudImgAdminSetting();

  const cloudImgAdminSetting = data?.value ?? false;

  const choosenSource = cloudImgAdminSetting ? props.src : props.altSrc;

  const [src, setSrc] = useState(choosenSource);

  function handleImageOnLoadError() {
    if (cloudImgAdminSetting) {
      setSrc(props.altSrc);
    }
  }

  useEffect(() => {
    if (cloudImgAdminSetting) setSrc(props.src);
  }, [cloudImgAdminSetting, props.src]);

  return {
    src,
    onError: handleImageOnLoadError,
  };
}
