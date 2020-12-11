# cfg-chinese
Building a Chinese Context Free Grammar rule set based on Chinese sentence frames.


[see it live](https://greggelong.github.io/cfg-chinese/)

I am using a random sentence expansion based on code by Dan Shiffman and Allison Parrish.

The Chinese rule set is very different from an English rule set, as expected.

I am working my way through a Chinese grammar book that uses sentence frames to explain Chinese grammar.

A syntactically correct sentence is one that follows the rules.  I am trying to do the best at syntax for each sentence

However, the meaning is sometimes a little strange.  

I have so far completed 4 sentence types.

```js
let rules = {
  "S": [
    ["Subjective", "Linking",  "Relative"], //13
    ["Subjective", "Possessing", "Belongings"], //14
    ["locationIn", "ExistingY", "Subjective"],  //15
    ["locationOn", "ExistingY", "Subjective"], //15  change location on to only be things 
    ["Subjective", "ExistingZ", "locationIn"],  //16
    ["Subjective", "ExistingZ", "locationOn"]  //16  that way you wont get silly things like artists on book shelves
  ],
  "Subjective": [
    ["Pronoun"],
    ["PropName"],
    ["Possessive", "Nthing"],
    ["Possessive", "Adj", "Nthing"],
    ["Nperson"],
    ["Nthing"]
  ],

  "Relative": [
    ["Pronoun"],
    ["Possessive", "Nthing"],
    ["Possessive", "Adj", "Nthing"],
    ["PropName"],
    ["Nperson"],
    ["Nthing"]
  ],

```
