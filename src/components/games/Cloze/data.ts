/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Grade, GameContent } from '../../../types';
import { FRANSK_CLOZE } from './db/fransk';
import { DANSK_CLOZE } from './db/dansk';
import { ENGELSK_CLOZE } from './db/engelsk';
import { TYSK_CLOZE } from './db/tysk';

export const CLOZE_DATA: Record<Language, Partial<Record<Grade, GameContent[]>>> = {
  'Fransk': FRANSK_CLOZE,
  'Dansk': DANSK_CLOZE,
  'Engelsk': ENGELSK_CLOZE,
  'Tysk': TYSK_CLOZE,
};
