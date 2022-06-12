import type { TransformOptions } from '@parcel/css';
export type Options = Omit<TransformOptions, 'code' | 'filename'>;
