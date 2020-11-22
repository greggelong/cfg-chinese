// sentence expanding algorithm based on 

// Daniel Shiffman
// context free grammar videos
// from his 
//Session 7 of my Programming from A to Z class - Fall 2016. 
//http://shiffman.net/a2z/


// chinese based on 100 sentece frames
//

 

function expand(start, expansion) {
  if (rules[start]) {
    var pick = random(rules[start]);
    console.log(pick);
    for (var i = 0; i < pick.length; i++) {
      expand(pick[i], expansion);
    }
  } else {
    expansion.push(start);
  }
  return expansion.join(" ");
}

var button;

let myp;

function setup() {
  noCanvas();
  myp = createP("Click generate for a randomly generated Chinese Sentence")
  button = createButton('generate');
  button.mousePressed(cfg);
}

function cfg() {

  var start = "S";
  var expansion = [];
  var result = expand(start, expansion);
  console.log(result);
  myp.html(result);

}
