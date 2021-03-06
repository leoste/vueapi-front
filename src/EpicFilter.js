// teoreetiliselt kuna eesti keeles enamik käändeid ehituvad üles sõna omastavale käändele midagi liites, saaks seda ka arvestada ja teha targema süsteemi. aga ma ei viitsi

const wordTypes = {
  'kaand': {
    '1': {
      /* all rules are original */
      'definition': 'original',
      'ainsus': {
        /* all changes are based on word root */
        'nimetav': [{'definition': 'original','changes': { '*': {'offset': 0, 'text': ''}}}],
        'omastav': [{'definition': 'addon','lead': 'ainsus/nimetav', 'changes': { '*': {'offset': 0, 'text': ''}}}],
        'osastav': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 't'}}}],
        /* all changes are based on lead */
        'sisse': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'sse'}}}],
        'sees': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 's'}}}],
        'seest': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'st'}}}],
        'alale': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'le'}}}],
        'alal': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'l'}}}],
        'alalt': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'lt'}}}],
        'saav': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'ks'}}}],
        'rajav': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'ni'}}}],
        'olev': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'na'}}}],
        'ilma': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'ta'}}}],
        'kaasa': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'ga'}}}],
      },
      'mitmus': {
        'nimetav': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'd'}}}],
        'omastav': [{'definition': 'addon','lead': 'ainsus/omastav', 'changes': { '*': {'offset': 0, 'text': 'te'}}}],
        'osastav': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'id'}}}],
        'sisse': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'sse'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'sse'}}}
        ],
        'sees': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 's'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 's'}}}
        ],
        'seest': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'st'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'st'}}}
        ],
        'alale': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'le'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'le'}}}
        ],
        'alal': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'l'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'l'}}}
        ],
        'alalt': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'lt'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'lt'}}}
        ],
        'saav': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ks'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'ks'}}}
        ],
        'rajav': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ni'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'ni'}}}
        ],
        'olev': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'na'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'na'}}}
        ],
        'ilma': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ta'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'ta'}}}
        ],
        'kaasa': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ga'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'ga'}}}
        ]
      }
    },
    '1e': {
      /* rules are copied from lead, unless overwritten by new definition */
      'definition': 'copy',
      'lead': '1',
      'ainsus': {
        
      },
      'mitmus': {
        'osastav': [{'definition': 'addon','lead':'ainsus/omastav','changes': { '*': {'offset': -1, 'text': 'eid'}}}],
      }
    },
    '2': {
      'definition': 'copy',
      'lead': '1',
      'ainsus': {
        'omastav': [
          {
            'definition': 'original',
            'changes': {
              'g': {'offset': 0, 'text': 'u'},
              'k': {'offset': 0, 'text': 'u'},
              's': {'offset': 0, 'text': 'a'},
              'm': {'offset': 0, 'text': 'a'},
              'v': {'offset': 0, 'text': 'a'},
              'b': {'offset': 0, 'text': 'e'},
              /* 'ud' has to be before 'd' because otherwise all 'ud' would get counted as 'd' */
              'ud': {'offset': -1, 'text': ''},
              'd': {'offset': 0, 'text': 'e'},
              'e': {'offset': 0, 'text': 'da'},
              'oodne': {'offset': -2, 'text': 'sa'},
              'ne': {'offset': -2, 'text': 'se'},
              'sas': {'offset': -1, 'text': 'nda'},
              's': {'offset': -1, 'text': ''},
              'er': {'offset': -2, 'text': 'ra'},
              'el': {'offset': -2, 'text': 'la'},
              'ev': {'offset': -2, 'text': 'va'},
              'en': {'offset': -2, 'text': 'na'},
              'is': {'offset': -2, 'text': 'sa'},
              'us': {'offset': -2, 'text': 'sa'},
              'ur': {'offset': -2, 'text': 'ru'}, 
            }  
          }
        ]
      },
      'mitmus': {

      }
    },
    '2e': {
      'definition': 'copy',
      'lead': '1e',
      'ainsus': {
        'omastav': [
          {
            'definition': 'addon','lead': 'ainsus/nimetav',
            'changes': {
              'er': {'offset': -2, 'text': 'ri'},
              'el': {'offset': -2, 'text': 'li'},
              '*': {'offset': 0, 'text': 'i'}
            }
          }
        ]
      },
      'mitmus': {
        
      }
    }
  },
  'poord': {
    
  }  
};

const vormid = ['ainsus','mitmus'];
const kaanded = ['nimetav','omastav','osastav','sisse','sees','seest','alale','alal','alalt','saav','rajav','olev','ilma','kaasa'];

// text: word in its root form, for example "akvaarium", "loeng"
// type: words type, 'kaand' or 'poord'
// type word: word's typeword, for example 1, 2e
const getWord = function(text, type, typeWord) {
  return {'text': text,'type': type, 'typeWord': typeWord};
}

const getWordTransformations = function(word) {
  let ruleset = getRuleset(word.type, word.typeWord);

  let transformations = {}

  vormid.forEach((v) => {
    transformations[v] = {};

    kaanded.forEach((k) => {
      transformations[v][k] = getTransforms(word.text, v, k, ruleset);
    });
  });
  return transformations;
}

const getTransforms = function(text, v, k, ruleset) {
  let transforms = [];

  let rules = ruleset[v][k];
  for (let i = 0; i < rules.length; i++)
  {
    let rule = rules[i];
        
    let edits;
    if (rule.definition == 'original') edits = [ text ];
    else if (rule.definition == 'addon') {
      let path = rule.lead.split('/');
      edits = getTransforms(text, path[0], path[1], ruleset);
    }

    for (let l = 0; l < edits.length; l++) {
      let edit = edits[l];
      let ch = rule.changes;

      for (var key in ch) {
        if (ch.hasOwnProperty(key)) {
          if (textEndsWith(edit, key)) {
            var change = ch[key];
            var newText = edit.substring(0, edit.length + change.offset) + change.text;
            transforms.push(newText);
          }
        }
      }
    }
  }

  return transforms;
}

const textEndsWith = function(text, ending) {
  if (ending == '*') return true;
  else {
    if (text.length >= ending.length) {
      let textEnd = text.substring(text.length - ending.length);
      return textEnd == ending;
    }
    else return false;
  }
}

const getRuleset = function(type, typeWord) {
  let ruleset = {};

  let word = wordTypes[type][typeWord];

  vormid.forEach((v) => {
    ruleset[v] = {};

    kaanded.forEach((k) => {  
      let kaane = getKaane(type, typeWord, v, k);

      ruleset[v][k] = kaane;
    });
  });

  return ruleset;
}

const getKaane = function(type, typeWord, vorm, kaane) {
  let word = wordTypes[type][typeWord];

  if (word.definition == 'original') return word[vorm][kaane];
  else if (word.definition == 'copy') {
    if (word[vorm][kaane]) return word[vorm][kaane];
    else return getKaane(type, word.lead, vorm, kaane);
  }
}

const nl = "\\s,.;\\:\\!\\?\\-_\\(\\)\\[\\]\\{\\}/\\+=*'\"@#"; //\\s\\pP\\p{Sc}

// (?:^|[\s\pP\p{Sc}])veski(?=[\s\pP\p{Sc}]|$)

export default class EpicFilter {
  constructor() {
    this.masterList = [];
  };

  clean(text) {
    
    //return "puhas";    
    this.masterList.forEach((bad) => {

      let regex = "(?:^|[" + nl + "])" + bad + "(?=[" + nl + "]|$)";

      // index is offset 1 because of NON-CAPTURING GROUP CAPTURING but luckily it doesnt matter
      let index = text.search(regex);

      if (index != -1) {
        let good = '*'.repeat(bad.length);
        text = text.replace(bad, good);
      }
    });

    return text;
  }

  addSwearWord(word) {
    let transformations = getWordTransformations(word);

    vormid.forEach((v) => {  
      kaanded.forEach((k) => { 
        transformations[v][k].forEach((word) => {
          this.masterList.push(word);
        });   
      });
    });
  }

  getKaandWord(text, typeGroup) {
    return getWord(text, "kaand", typeGroup);
  }

  getPoordWord(text, typeGroup) {
    return getWord(text, "poord", typeGroup);
  }
}