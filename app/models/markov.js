var MarkovChain = require('markovchain').MarkovChain,
  quotes = new MarkovChain({ files: 'quotes.txt' });

var useUpperCase = function(wordList) {
  var tmpList = Object.keys(wordList).filter(function(word) { return word[0] >= 'A' && word[0] <= 'Z' })
  return tmpList[~~(Math.random()*tmpList.length)]
}

function Markov () {
  this.generateQuote = quotes.start(useUpperCase).end(10).process(function(err,s){
    return s;
  });
  this.quote = quotes.sentence;
}

module.exports = Markov;
