relu = (x) => Math.max(0, x)
sigmoid = (x) => 1 / (1 + (Math.E ** -x))
softmax = (arr) => {
  const d = arr.map(Math.exp).reduce((a, b) => a + b)
  return arr.map(y => Math.exp(y) / d)
}

example1=[ 0.9780449271202087,
  0.01590355671942234,
  0.0019390975357964635,
  0.0015482910675927997,
  0.0012942816829308867,
  0.0006004497990943491,
  0.0004827099328394979,
  0.0001868270628619939 ]

console.log(softmax(example1))