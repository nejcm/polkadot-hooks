import { create } from '@storybook/theming/create';
import pkg from '../package.json';

export default create({
  base: 'light',
  brandTitle: `Polkadot hooks ${pkg.version}`,
  brandUrl: 'https://nejcmursic.com',
  brandImage:
    'https://raw.githubusercontent.com/nejcm/assets/master/assets/nm-logo.svg',
  
});
