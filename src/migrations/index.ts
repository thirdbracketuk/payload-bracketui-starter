import * as migration_20251219_215102_initial from './20251219_215102_initial';
import * as migration_20260106_192516 from './20260106_192516';

export const migrations = [
  {
    up: migration_20251219_215102_initial.up,
    down: migration_20251219_215102_initial.down,
    name: '20251219_215102_initial',
  },
  {
    up: migration_20260106_192516.up,
    down: migration_20260106_192516.down,
    name: '20260106_192516'
  },
];
