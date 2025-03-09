import {
  createSystem,
  defineSemanticTokens,
  defineTokens,
  defineTextStyles,
  defineConfig,
  defaultConfig,
} from '@chakra-ui/react';

const colors = {
  black: { value: '#000000' },
  white: { value: '#FFFFFF' },
  neutral: {
    950: { value: '#090909' },
    900: { value: '#0F0F0F' },
    800: { value: '#171717' },
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
    950: { value: '#006B70' },
    900: { value: '#007F86' },
    800: { value: '#00959E' },
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
    950: { value: '#A9300B' },
    900: { value: '#C73D12' },
    800: { value: '#E54A1A' },
    700: { value: '#FE632F' },
    DEFAULT: { value: '#FF8156' },
    500: { value: '#FFA487' },
    400: { value: '#FFC8B6' },
    300: { value: '#FFE1D6' },
    200: { value: '#FFF2EE' },
    100: { value: '#FFF6F3' },
    50: { value: '#FFFCFC' },
  },
  danger: {
    950: { value: '#950A0C' },
    900: { value: '#B31012' },
    800: { value: '#D01C1F' },
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
    950: { value: '#9A5C00' },
    900: { value: '#BD7000' },
    800: { value: '#E08600' },
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
    950: { value: '#055733' },
    900: { value: '#066D40' },
    800: { value: '#088550' },
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
    950: { value: '#15338A' },
    900: { value: '#1D44A9' },
    800: { value: '#2A59C5' },
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

const semanticColors = {
  // Primary (como brand)
  brand: {
    solid: {
      value: {
        _light: '{colors.primary.DEFAULT}',
        _dark: '{colors.primary.500}',
      },
    },
    contrast: {
      value: {
        _light: '{colors.white}',
        _dark: '{colors.black}',
      },
    },
    fg: {
      value: {
        _light: '{colors.primary.900}',
        _dark: '{colors.primary.100}',
      },
    },
    muted: {
      value: {
        _light: '{colors.primary.100}',
        _dark: '{colors.primary.900}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.primary.200}',
        _dark: '{colors.primary.800}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.primary.300}',
        _dark: '{colors.primary.700}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.primary.500}',
        _dark: '{colors.primary.400}',
      },
    },
  },

  // Danger
  danger: {
    solid: {
      value: {
        _light: '{colors.danger.DEFAULT}',
        _dark: '{colors.danger.500}',
      },
    },
    contrast: {
      value: {
        _light: '{colors.white}',
        _dark: '{colors.black}',
      },
    },
    fg: {
      value: {
        _light: '{colors.danger.900}',
        _dark: '{colors.danger.100}',
      },
    },
    muted: {
      value: {
        _light: '{colors.danger.100}',
        _dark: '{colors.danger.900}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.danger.200}',
        _dark: '{colors.danger.800}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.danger.300}',
        _dark: '{colors.danger.700}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.danger.500}',
        _dark: '{colors.danger.400}',
      },
    },
  },

  // Warning
  warning: {
    solid: {
      value: {
        _light: '{colors.warning.DEFAULT}',
        _dark: '{colors.warning.500}',
      },
    },
    contrast: {
      value: {
        _light: '{colors.black}',
        _dark: '{colors.black}',
      },
    },
    fg: {
      value: {
        _light: '{colors.warning.900}',
        _dark: '{colors.warning.100}',
      },
    },
    muted: {
      value: {
        _light: '{colors.warning.100}',
        _dark: '{colors.warning.900}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.warning.200}',
        _dark: '{colors.warning.800}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.warning.300}',
        _dark: '{colors.warning.700}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.warning.500}',
        _dark: '{colors.warning.400}',
      },
    },
  },

  // Success
  success: {
    solid: {
      value: {
        _light: '{colors.success.DEFAULT}',
        _dark: '{colors.success.500}',
      },
    },
    contrast: {
      value: {
        _light: '{colors.white}',
        _dark: '{colors.black}',
      },
    },
    fg: {
      value: {
        _light: '{colors.success.900}',
        _dark: '{colors.success.100}',
      },
    },
    muted: {
      value: {
        _light: '{colors.success.100}',
        _dark: '{colors.success.900}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.success.200}',
        _dark: '{colors.success.800}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.success.300}',
        _dark: '{colors.success.700}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.success.500}',
        _dark: '{colors.success.400}',
      },
    },
  },

  // Info
  info: {
    solid: {
      value: {
        _light: '{colors.info.DEFAULT}',
        _dark: '{colors.info.500}',
      },
    },
    contrast: {
      value: {
        _light: '{colors.white}',
        _dark: '{colors.black}',
      },
    },
    fg: {
      value: {
        _light: '{colors.info.900}',
        _dark: '{colors.info.100}',
      },
    },
    muted: {
      value: {
        _light: '{colors.info.100}',
        _dark: '{colors.info.900}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.info.200}',
        _dark: '{colors.info.800}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.info.300}',
        _dark: '{colors.info.700}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.info.500}',
        _dark: '{colors.info.400}',
      },
    },
  },

  // Auxiliary
  auxiliary: {
    solid: {
      value: {
        _light: '{colors.auxiliary.DEFAULT}',
        _dark: '{colors.auxiliary.500}',
      },
    },
    contrast: {
      value: {
        _light: '{colors.white}',
        _dark: '{colors.black}',
      },
    },
    fg: {
      value: {
        _light: '{colors.auxiliary.900}',
        _dark: '{colors.auxiliary.100}',
      },
    },
    muted: {
      value: {
        _light: '{colors.auxiliary.100}',
        _dark: '{colors.auxiliary.900}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.auxiliary.200}',
        _dark: '{colors.auxiliary.800}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.auxiliary.300}',
        _dark: '{colors.auxiliary.700}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.auxiliary.500}',
        _dark: '{colors.auxiliary.400}',
      },
    },
  },

  // Neutral
  neutral: {
    solid: {
      value: {
        _light: '{colors.neutral.DEFAULT}',
        _dark: '{colors.neutral.500}',
      },
    },
    contrast: {
      value: {
        _light: '{colors.white}',
        _dark: '{colors.black}',
      },
    },
    fg: {
      value: {
        _light: '{colors.neutral.900}',
        _dark: '{colors.neutral.100}',
      },
    },
    muted: {
      value: {
        _light: '{colors.neutral.100}',
        _dark: '{colors.neutral.900}',
      },
    },
    subtle: {
      value: {
        _light: '{colors.neutral.200}',
        _dark: '{colors.neutral.800}',
      },
    },
    emphasized: {
      value: {
        _light: '{colors.neutral.300}',
        _dark: '{colors.neutral.700}',
      },
    },
    focusRing: {
      value: {
        _light: '{colors.neutral.500}',
        _dark: '{colors.neutral.400}',
      },
    },
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

export const system = createSystem(defaultConfig, myConfig);
