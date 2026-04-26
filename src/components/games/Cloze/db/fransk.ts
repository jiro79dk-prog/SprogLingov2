/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { FRANSK_CLOZE_P1 } from './fransk_part1';
import { FRANSK_CLOZE_P2 } from './fransk_part2';

export const FRANSK_CLOZE: Partial<Record<Grade, GameContent[]>> = {
  ...FRANSK_CLOZE_P1,
  ...FRANSK_CLOZE_P2,
};
