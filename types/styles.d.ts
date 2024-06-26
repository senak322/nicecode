declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const content: any;
  export default content;
}