/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const DANSK_WORDSORT: Partial<Record<Grade, GameContent[]>> = {
  2: [
    {
      id: 'da2-ws1',
      type: 'WordSort',
      instruction: 'Sorter ordene i Navneord og Udsagnsord',
      question: 'Navneord vs Udsagnsord',
      answer: '',
      options: ['Navneord', 'Udsagnsord'],
      context: 'hund:Navneord|løber:Udsagnsord|bord:Navneord|spiser:Udsagnsord|kat:Navneord|sover:Udsagnsord'
    },
    {
      id: 'da2-ws2',
      type: 'WordSort',
      instruction: 'Vokaler eller Konsonanter?',
      question: 'Vokaler vs Konsonanter',
      answer: '',
      options: ['Vokal', 'Konsonant'],
      context: 'a:Vokal|b:Konsonant|e:Vokal|s:Konsonant|i:Vokal|t:Konsonant|o:Vokal|u:Vokal|k:Konsonant'
    }
  ],
  3: [
    {
      id: 'da3-ws1',
      type: 'WordSort',
      instruction: 'Sorter ordene i Navneord, Udsagnsord og Tillægsord',
      question: 'Ordklasser',
      answer: '',
      options: ['Navneord', 'Udsagnsord', 'Tillægsord'],
      context: 'bil:Navneord|hvisker:Udsagnsord|grøn:Tillægsord|pige:Navneord|hopper:Udsagnsord|hurtig:Tillægsord|skole:Navneord|tænker:Udsagnsord|sød:Tillægsord'
    }
  ],
  4: [
    {
      id: 'da4-ws1',
      type: 'WordSort',
      instruction: 'Sorter efter køn',
      question: 'En eller Et?',
      answer: '',
      options: ['En', 'Et'],
      context: 'bil:En|hus:Et|kat:En|æble:Et|stol:En|bord:Et|mand:En|barn:Et'
    }
  ]
};
