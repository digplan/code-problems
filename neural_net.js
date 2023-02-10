relu = (x) => Math.max(0, x)
sigmoid = (x) => 1/(1+Math.exp(-x))
softmax = (arr) => (index) => Math.exp(arr[index]) / arr.map(y => Math.exp(y)).reduce((a, b) => a + b);

function softmax(arr) {
    return arr.map(function(value,index) { 
      return Math.exp(value) / arr.map( function(y /*value*/){ return Math.exp(y) } ).reduce( function(a,b){ return a+b })
    })
}

example1=[ 0.9780449271202087,
  0.01590355671942234,
  0.0019390975357964635,
  0.0015482910675927997,
  0.0012942816829308867,
  0.0006004497990943491,
  0.0004827099328394979,
  0.0001868270628619939 ]
softmax1=softmax(example1)


console.log(sigmoid(2))
