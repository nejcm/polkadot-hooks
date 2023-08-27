import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'Getting Started', 'hooks', 'helpers'],
      },
    },
    docs: {
      toc: true,
      theme: themes.dark,
    },
  },
};

export default preview;