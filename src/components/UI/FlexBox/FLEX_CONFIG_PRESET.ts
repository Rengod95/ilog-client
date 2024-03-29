import { FlexStyleConfig, FlexVariant } from '.';

export const DEFAULT_WRAP_CONFIG = 'nowrap';
export const DEFAULT_GROW_CONFIG = 0;

export const DEFAULT_FLEX_BOX_PRESET: Record<FlexVariant, FlexStyleConfig> = {
  rowStart: {
    direction: 'row',
    wrap: DEFAULT_WRAP_CONFIG,
    grow: DEFAULT_GROW_CONFIG,
    justify: 'flex-start',
    align: 'center',
  },
  rowCenter: {
    direction: 'row',
    wrap: DEFAULT_WRAP_CONFIG,
    grow: DEFAULT_GROW_CONFIG,
    justify: 'center',
    align: 'center',
  },
  rowEnd: {
    direction: 'row',
    wrap: DEFAULT_WRAP_CONFIG,
    grow: DEFAULT_GROW_CONFIG,
    justify: 'flex-end',
    align: 'center',
  },
  columnStart: {
    direction: 'column',
    wrap: DEFAULT_WRAP_CONFIG,
    grow: DEFAULT_GROW_CONFIG,
    justify: 'flex-start',
    align: 'center',
  },
  columnCenter: {
    direction: 'column',
    wrap: DEFAULT_WRAP_CONFIG,
    grow: DEFAULT_GROW_CONFIG,
    justify: 'center',
    align: 'center',
  },
  columnEnd: {
    direction: 'column',
    wrap: DEFAULT_WRAP_CONFIG,
    grow: DEFAULT_GROW_CONFIG,
    justify: 'flex-end',
    align: 'center',
  },
};
