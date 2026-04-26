/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const ENGELSK_MEMORY_P4: Partial<Record<Grade, GameContent[]>> = {
  5: Array.from({ length: 50 }, (_, i) => ({
    id: `en5-me-p4-${i}`,
    type: 'Memory',
    question: 'Space Exploration',
    instruction: 'Match the pairs',
    answer: '',
    context: 'Galaxy:Galaxy|Orbit:Orbit|Planet:Planet|Space:Space|Pilot:Pilot|Ship:Ship'
  })),
  6: Array.from({ length: 50 }, (_, i) => ({
    id: `en6-me-p4-${i}`,
    type: 'Memory',
    question: 'Internet Safety',
    instruction: 'Match the pairs',
    answer: '',
    context: 'Safe:Safe|Lock:Lock|Passward:Password|User:User|Link:Link|Web:Web'
  })),
  7: Array.from({ length: 50 }, (_, i) => ({
    id: `en7-me-p4-${i}`,
    type: 'Memory',
    question: 'Human Rights',
    instruction: 'Match the pairs',
    answer: '',
    context: 'Equal:Equal|Free:Free|Voice:Voice|Vote:Vote|Law:Law|Right:Right'
  })),
  8: Array.from({ length: 50 }, (_, i) => ({
    id: `en8-me-p4-${i}`,
    type: 'Memory',
    question: 'Economy Basics',
    instruction: 'Match the pairs',
    answer: '',
    context: 'Money:Money|Trade:Trade|Bank:Bank|Cost:Cost|Sell:Sell|Buy:Buy'
  })),
  9: Array.from({ length: 50 }, (_, i) => ({
    id: `en9-me-p4-${i}`,
    type: 'Memory',
    question: 'Future Tech',
    instruction: 'Match the pairs',
    answer: '',
    context: 'Robot:Robot|AI:AI|Nano:Nano|Cyber:Cyber|Fast:Fast|Smart:Smart'
  }))
};
