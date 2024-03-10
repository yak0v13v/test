import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;

const ArrowIcon = ({ width = 20, height = 20, viewBox = "0 0 20 20", className }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.31541 9.932C5.31541 9.82 5.37141 9.764 5.48341 9.764H12.2734L9.44541 6.978C9.36141 6.90333 9.36141 6.824 9.44541 6.74L10.1734 6.026C10.2574 5.95133 10.3367 5.95133 10.4114 6.026L14.6254 10.352C14.6907 10.436 14.6907 10.5153 14.6254 10.59L10.4114 14.916C10.3367 14.9907 10.2574 14.9907 10.1734 14.916L9.44541 14.202C9.36141 14.1273 9.36141 14.0527 9.44541 13.978L12.2734 11.192H5.48341C5.37141 11.192 5.31541 11.136 5.31541 11.024V9.932Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { ArrowIcon };
