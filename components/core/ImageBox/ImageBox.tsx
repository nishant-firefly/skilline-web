import React from "react";
import { ImageBoxStyleTwo } from "./ImageBoxStyleTwo";
import { ImageBoxStyleOne } from "./ImageBoxStyleOne";
import { ImageBoxStyleThree } from "./ImageBoxStyleThree";
import { ColorStyleType, ImageBoxStyleFour } from "./ImageBoxStyleFour";
type ComponentType = "style-1" | "style-2" | "style-3" | "style-4";
type ImageContentBox = {
  data: any;
  type: ComponentType;
  imageAlign?: "left" | "right";
  color?: ColorStyleType;
  seqNumber?: string;
};

export const ImageBox = ({
  type,
  imageAlign,
  data,
  color,
  seqNumber,
}: ImageContentBox) => {
  const ComponentType: Record<ComponentType, any> = {
    "style-1": ImageBoxStyleOne,
    "style-2": ImageBoxStyleTwo,
    "style-3": ImageBoxStyleThree,
    "style-4": ImageBoxStyleFour,
  };
  const ImageComponent = ComponentType[type];
  if (!ComponentType) {
    return <div className="text-red-500">Component not found</div>;
  }

  if (type === "style-4") {
    return (
      <ImageComponent
        data={data}
        color={color}
        seqNumber={seqNumber}
        imageAlign={imageAlign}
      />
    );
  }
  return <ImageComponent data={data} imageAlign={imageAlign} />;
};
