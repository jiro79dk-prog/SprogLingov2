/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { TYSK_CLOZE_P1 } from './tysk_part1';
import { TYSK_CLOZE_P2 } from './tysk_part2';

export const TYSK_CLOZE: Partial<Record<Grade, GameContent[]>> = {
  ...TYSK_CLOZE_P1,
  ...TYSK_CLOZE_P2,
};
