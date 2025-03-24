// src/lib/types.ts
export type ButtonVariant = 'primary' | 'secondary' | 'accent';

export type IconProps = {
  className?: string;
  size?: number;
};

// export type WithChildren<T = {}> = T & {
//   children: React.ReactNode;
// };