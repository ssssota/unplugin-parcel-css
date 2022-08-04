import { transform } from '@parcel/css';
import { createUnplugin } from 'unplugin';
import type { Options } from './types';

export default createUnplugin<Options>((options) => {
  const queryWhitelist = ['direct'];
  const matcherRegex = new RegExp(
    `\\.css\\??(?:${queryWhitelist.join('|')})?$`,
    'i'
  );

  return {
    name: 'unplugin-parcel-css',
    transformInclude(id) {
      return matcherRegex.test(id);
    },
    transform(css, id) {
      try {
        const { code } = transform({
          minify: true,
          sourceMap: false,
          ...options,
          code: Buffer.from(css),
          filename: id,
        });
        return code.toString('utf8');
      } catch {
        return css;
      }
    },
  };
});
