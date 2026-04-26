/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const FRANSK_WORDSORT: Partial<Record<Grade, GameContent[]>> = {
  3: [
    { id: 'fr3-ws1', type: 'WordSort', instruction: 'Trier par genre', question: 'Le vs La', answer: '', options: ['Le', 'La'], context: 'chat:Le|maison:La|chien:Le|fille:La|garçon:Le|table:La|soleil:Le|lune:La' },
    { id: 'fr3-ws2', type: 'WordSort', instruction: 'Noms ou Verbes?', question: 'Noms vs Verbes', answer: '', options: ['Nom', 'Verbe'], context: 'chien:Nom|manger:Verbe|maison:Nom|marcher:Verbe|école:Nom|chanter:Verbe|pomme:Nom|jouer:Verbe' },
    { id: 'fr3-ws3', type: 'WordSort', instruction: 'Singulier ou Pluriel?', question: 'Singulier vs Pluriel', answer: '', options: ['Singulier', 'Pluriel'], context: 'le chat:Singulier|les chats:Pluriel|un chien:Singulier|des chiens:Pluriel|une table:Singulier|les tables:Pluriel' }
  ],
  4: [
    { id: 'fr4-ws1', type: 'WordSort', instruction: 'Articles définis ou indéfinis?', question: 'Défini vs Indéfini', answer: '', options: ['Défini', 'Indéfini'], context: 'le:Défini|un:Indéfini|la:Défini|une:Indéfini|les:Défini|des:Indéfini' },
    { id: 'fr4-ws2', type: 'WordSort', instruction: 'Sort par adjectif ou nom', question: 'Adjectif vs Nom', answer: '', options: ['Adjectif', 'Nom'], context: 'beau:Adjectif|fleur:Nom|petit:Adjectif|maison:Nom|grand:Adjectif|garçon:Nom|bleu:Adjectif|ciel:Nom' }
  ],
  5: [
    { id: 'fr5-ws1', type: 'WordSort', instruction: 'Présent ou Passé Composé?', question: 'Présent vs Passé', answer: '', options: ['Présent', 'Passé'], context: 'je mange:Présent|j\'ai mangé:Passé|tu parles:Présent|tu as parlé:Passé|il joue:Présent|il a joué:Passé' }
  ],
  6: [
    { id: 'fr6-ws1', type: 'WordSort', instruction: 'Masculin ou Féminin?', question: 'Masculin vs Féminin', answer: '', options: ['Masculin', 'Féminin'], context: 'un livre:Masculin|une gomme:Féminin|le cahier:Masculin|la règle:Féminin|un stylo:Masculin|une chaise:Féminin' }
  ]
};
