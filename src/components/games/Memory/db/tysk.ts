/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const TYSK_MEMORY: Partial<Record<Grade, GameContent[]>> = {
  0: [
    { id: 'de0-me1', type: 'Memory', question: 'Tiere', instruction: 'Finde die Paare', answer: '', context: 'Hund:Hund|Katze:Katze|Vogel:Vogel|Pferd:Pferd|Fisch:Fisch|Schlange:Schlange' }
  ]
};
