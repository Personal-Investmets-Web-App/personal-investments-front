import {
  createSystem,
  defineSemanticTokens,
  defineTokens,
  defineTextStyles,
  defineConfig,
  defaultConfig,
  mergeConfigs,
} from '@chakra-ui/react';

const colors = {
  black: { value: '#000000' },
  white: { value: '#FFFFFF' },
  neutral: {
    700: { value: '#1F1F1F' },
    DEFAULT: { value: '#4B4B4B' },
    500: { value: '#8E8E8E' },
    400: { value: '#CACACA' },
    300: { value: '#E1E1E1' },
    200: { value: '#EEEEEE' },
    100: { value: '#F5F5F5' },
    50: { value: '#FAFAFA' },
  },
  primary: {
    700: { value: '#00ABB6' },
    DEFAULT: { value: '#15C5CE' },
    500: { value: '#47CFD6' },
    400: { value: '#7DDDE1' },
    300: { value: '#B0EBEC' },
    200: { value: '#DFF7F7' },
    100: { value: '#EEFCFC' },
    50: { value: '#F9FFFF' },
  },
  auxiliary: {
    700: { value: '#FE632F' },
    DEFAULT: { value: '#FF8156' },
    500: { value: '#FFA487' },
    400: { value: '#FFC8B6' },
    300: { value: '#FFE1D6' },
    200: { value: '#FFF2EE' },
    100: { value: '#FFF6F3' },
    50: { value: '#FFFCFC' },
  },
};

const semanticColors = {
  danger: {
    700: { value: '#EC2D30' },
    DEFAULT: { value: '#F64C4C' },
    500: { value: '#EB6F70' },
    400: { value: '#F49898' },
    300: { value: '#FFCCD2' },
    200: { value: '#FFEBEE' },
    100: { value: '#FEF2F2' },
    50: { value: '#FFFBFB' },
  },
  warning: {
    700: { value: '#FE9B0E' },
    DEFAULT: { value: '#FFAD0D' },
    500: { value: '#FFC62B' },
    400: { value: '#FFDD82' },
    300: { value: '#FFEAB3' },
    200: { value: '#FFF7E1' },
    100: { value: '#FFF9EE' },
    50: { value: '#FFFDFA' },
  },
  success: {
    700: { value: '#0C9D61' },
    DEFAULT: { value: '#47B881' },
    500: { value: '#6BC497' },
    400: { value: '#97D4B4' },
    300: { value: '#C0E5D1' },
    200: { value: '#E5F5EC' },
    100: { value: '#F2FAF6' },
    50: { value: '#FBFEFC' },
  },
  info: {
    700: { value: '#3A70E2' },
    DEFAULT: { value: '#3B82F6' },
    500: { value: '#4BA1FF' },
    400: { value: '#93C8FF' },
    300: { value: '#BDDDFF' },
    200: { value: '#E4F2FF' },
    100: { value: '#F1F8FF' },
    50: { value: '#F8FCFF' },
  },
};

const fonts = {
  body: { value: 'Quicksand' },
};

const fontWeights = {
  regular: { value: '400' },
  medium: { value: '500' },
  bold: { value: '600' },
};

const typography = {
  h1: {
    value: {
      fontSize: '30px',
      lineHeight: '38px',
    },
  },
  h2: {
    value: {
      fontSize: '24px',
      lineHeight: '32px',
    },
  },
  h3: {
    value: {
      fontSize: '20px',
      lineHeight: '28px',
    },
  },
  title: {
    value: {
      fontSize: '18px',
      lineHeight: '26px',
    },
  },
  subtitle: {
    value: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  body: {
    value: {
      fontSize: '14px',
      lineHeight: '22px',
    },
  },
  caption: {
    value: {
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
};

const shadows = {
  elevation: {
    1: { value: '0 1px 1px 0 rgba(255, 255, 255, 0.02)' },
    2: { value: '0 1px 4px 0 rgba(255, 255, 255, 0.04)' },
    3: { value: '0 2px 20px 0 rgba(255, 255, 255, 0.04)' },
    4: { value: '0 8px 20px 0 rgba(255, 255, 255, 0.06)' },
  },
};

const tokens = defineTokens({
  colors,
  shadows,
  fonts,
  fontWeights,
});

const semanticTokens = defineSemanticTokens({
  colors: semanticColors,
});

const textStyles = defineTextStyles(typography);

const myConfig = defineConfig({
  theme: { tokens, semanticTokens, textStyles },
});

const config = mergeConfigs(defaultConfig, myConfig);

export const system = createSystem(config);
