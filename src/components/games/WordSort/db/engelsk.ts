/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const ENGELSK_WORDSORT: Partial<Record<Grade, GameContent[]>> = {
  3: [
    { id: 'en3-ws1', type: 'WordSort', instruction: 'Sort into Nouns and Verbs', question: 'Nouns vs Verbs', answer: '', options: ['Noun', 'Verb'], context: 'cat:Noun|run:Verb|jump:Verb|apple:Noun|dance:Verb|table:Noun|sing:Verb|book:Noun|sleep:Verb|chair:Noun' },
    { id: 'en3-ws2', type: 'WordSort', instruction: 'Vowels or Consonants?', question: 'Vowels vs Consonants', answer: '', options: ['Vowel', 'Consonant'], context: 'a:Vowel|b:Consonant|e:Vowel|t:Consonant|i:Vowel|s:Consonant|o:Vowel|u:Vowel|k:Consonant|m:Consonant' },
    { id: 'en3-ws3', type: 'WordSort', instruction: 'Animals or Fruits?', question: 'Animals vs Fruits', answer: '', options: ['Animal', 'Fruit'], context: 'dog:Animal|apple:Fruit|cat:Animal|banana:Fruit|elephant:Animal|pear:Fruit|lion:Animal|grape:Fruit' },
    { id: 'en3-ws4', type: 'WordSort', instruction: 'Colors or Numbers?', question: 'Colors vs Numbers', answer: '', options: ['Color', 'Number'], context: 'red:Color|one:Number|blue:Color|five:Number|green:Color|ten:Number|white:Color|three:Number' },
    { id: 'en3-ws5', type: 'WordSort', instruction: 'Sort by syllable count', question: '1 vs 2 Syllables', answer: '', options: ['1 Syllable', '2 Syllables'], context: 'cat:1 Syllable|apple:2 Syllables|dog:1 Syllable|tiger:2 Syllables|sun:1 Syllable|baby:2 Syllables|house:1 Syllable|water:2 Syllables' }
  ],
  4: [
    { id: 'en4-ws1', type: 'WordSort', instruction: 'Singular or Plural?', question: 'Singular vs Plural', answer: '', options: ['Singular', 'Plural'], context: 'dog:Singular|cats:Plural|child:Singular|children:Plural|mouse:Singular|mice:Plural|box:Singular|boxes:Plural|man:Singular|men:Plural' },
    { id: 'en4-ws2', type: 'WordSort', instruction: 'Sort words by Part of Speech', question: 'Adjectives vs Adverbs', answer: '', options: ['Adjective', 'Adverb'], context: 'happy:Adjective|happily:Adverb|quick:Adjective|quickly:Adverb|slow:Adjective|slowly:Adverb|beautiful:Adjective|beautifully:Adverb' },
    { id: 'en4-ws3', type: 'WordSort', instruction: 'Sort by Gender (if applicable/conceptual)', question: 'Male vs Female', answer: '', options: ['Male', 'Female'], context: 'boy:Male|girl:Female|king:Male|queen:Female|actor:Male|actress:Female|prince:Male|princess:Female' },
    { id: 'en4-ws4', type: 'WordSort', instruction: 'Living or Non-Living?', question: 'Living vs Non-Living', answer: '', options: ['Living', 'Non-Living'], context: 'tree:Living|rock:Non-Living|cat:Living|car:Non-Living|flower:Living|phone:Non-Living|bird:Living|table:Non-Living' }
  ],
  5: [
    { id: 'en5-ws1', type: 'WordSort', instruction: 'Subject or Object Pronouns?', question: 'Subject vs Object', answer: '', options: ['Subject', 'Object'], context: 'I:Subject|me:Object|he:Subject|him:Object|she:Subject|her:Object|we:Subject|us:Object|they:Subject|them:Object' },
    { id: 'en5-ws2', type: 'WordSort', instruction: 'Sort by Tense', question: 'Present vs Past', answer: '', options: ['Present', 'Past'], context: 'walk:Present|walked:Past|sing:Present|sang:Past|eat:Present|ate:Past|go:Present|went:Past|sleep:Present|slept:Past' },
    { id: 'en5-ws3', type: 'WordSort', instruction: 'Synonyms or Antonyms?', question: 'Synonyms vs Antonyms', answer: '', options: ['Synonym', 'Antonym'], context: 'big-large:Synonym|hot-cold:Antonym|fast-quick:Synonym|high-low:Antonym|smart-clever:Synonym|up-down:Antonym' }
  ],
  6: [
    { id: 'en6-ws1', type: 'WordSort', instruction: 'Concrete or Abstract Nouns?', question: 'Concrete vs Abstract', answer: '', options: ['Concrete', 'Abstract'], context: 'chair:Concrete|love:Abstract|table:Concrete|freedom:Abstract|apple:Concrete|happiness:Abstract|mountain:Concrete|courage:Abstract' },
    { id: 'en6-ws2', type: 'WordSort', instruction: 'Proper or Common Nouns?', question: 'Proper vs Common', answer: '', options: ['Proper', 'Common'], context: 'London:Proper|city:Common|Peter:Proper|man:Common|Earth:Proper|planet:Common|Amazon:Proper|river:Common' }
  ],
  7: [
    { id: 'en7-ws1', type: 'WordSort', instruction: 'Sort by Greek or Latin Origin', question: 'Greek vs Latin', answer: '', options: ['Greek', 'Latin'], context: 'philosophy:Greek|education:Latin|biology:Greek|liberty:Latin|physics:Greek|nature:Latin|theater:Greek|social:Latin' }
  ],
  8: [
    { id: 'en8-ws1', type: 'WordSort', instruction: 'Formal or Informal?', question: 'Formal vs Informal', answer: '', options: ['Formal', 'Informal'], context: 'commence:Formal|start:Informal|terminate:Formal|end:Informal|request:Formal|ask:Informal|ascertain:Formal|find out:Informal' }
  ],
  9: [
    { id: 'en9-ws1', type: 'WordSort', instruction: 'Sort by Literary Device', question: 'Simile vs Metaphor', answer: '', options: ['Simile', 'Metaphor'], context: 'as brave as a lion:Simile|he is a lion:Metaphor|cries like a river:Simile|the world is a stage:Metaphor|white as snow:Simile|life is a roller coaster:Metaphor' }
  ]
};
