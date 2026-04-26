/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const TYSK_WORDSORT: Partial<Record<Grade, GameContent[]>> = {
  3: [
    { id: 'de3-ws1', type: 'WordSort', instruction: 'Sortiere nach Artikel', question: 'Der, Die, Das', answer: '', options: ['Der', 'Die', 'Das'], context: 'Hund:Der|Katze:Die|Haus:Das|Apfel:Der|Lampe:Die|Kind:Das|Tisch:Der|Blume:Die' },
    { id: 'de3-ws2', type: 'WordSort', instruction: 'Nomen oder Verben?', question: 'Nomen vs Verben', answer: '', options: ['Nomen', 'Verb'], context: 'Haus:Nomen|laufen:Verb|Baum:Nomen|essen:Verb|Auto:Nomen|singen:Verb|Kind:Nomen|spielen:Verb' },
    { id: 'de3-ws3', type: 'WordSort', instruction: 'Singular oder Plural?', question: 'Einzahl vs Mehrzahl', answer: '', options: ['Einzahl', 'Mehrzahl'], context: 'Hund:Einzahl|Hunde:Mehrzahl|Katze:Einzahl|Katzen:Mehrzahl|Haus:Einzahl|Häuser:Mehrzahl' }
  ],
  4: [
    { id: 'de4-ws1', type: 'WordSort', instruction: 'Groß oder Kleinschreibung?', question: 'Nomen vs Adjektive', answer: '', options: ['Nomen', 'Adjektiv'], context: 'Freude:Nomen|schön:Adjektiv|Angst:Nomen|schnell:Adjektiv|Hunger:Nomen|blau:Adjektiv|Liebe:Nomen|klein:Adjektiv' },
    { id: 'de4-ws2', type: 'WordSort', instruction: 'Sortiere nach der Endung', question: '-heit, -keit, -ung', answer: '', options: ['-heit', '-keit', '-ung'], context: 'Freiheit:-heit|Einsamkeit:-keit|Übung:-ung|Krankheit:-heit|Heiterkeit:-keit|Bildung:-ung' }
  ],
  5: [
    { id: 'de5-ws1', type: 'WordSort', instruction: 'Präsens oder Präteritum?', question: 'Gegenwart vs Vergangenheit', answer: '', options: ['Präsens', 'Präteritum'], context: 'ich gehe:Präsens|ich ging:Präteritum|du isst:Präsens|du aßt:Präteritum|er spielt:Präsens|er spielte:Präteritum' }
  ],
  6: [
    { id: 'de6-ws1', type: 'WordSort', instruction: 'Konkrete oder Abstrakte Nomen?', question: 'Konkret vs Abstrakt', answer: '', options: ['Konkret', 'Abstrakt'], context: 'Tisch:Konkret|Liebe:Abstrakt|Stuhl:Konkret|Hoffnung:Abstrakt|Apfel:Konkret|Mut:Abstrakt' }
  ],
  7: [
    { id: 'de7-ws1', type: 'WordSort', instruction: 'Sortiere nach Kasus', question: 'Nominativ vs Akkusativ', answer: '', options: ['Nominativ', 'Akkusativ'], context: 'der Hund:Nominativ|den Hund:Akkusativ|ein Apfel:Nominativ|einen Apfel:Akkusativ|das Kind:Nominativ|das Kind:Akkusativ' }
  ]
};
