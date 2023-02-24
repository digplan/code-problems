relu = (x) => Math.max(0, x)
sigmoid = (x) => 1 / (1 + (Math.E ** -x))
softmax = (x, i, ar) => Math.exp(x)/ar.map(Math.exp).reduce((a, b) => a + b)

transpose = (m) => m[0].map((x,i) => m.map(x => x[i]))
[test, train] = [data.splice(data.length * .8), data]
errors = (predictions, actuals) => predictions.map((p, i) => .5 * (p-actuals[i]) ** 2)

// source = [2, 3]; weights = [[.11, .21], [.12, .08]]; bias = 0
// target = [.85, .48]
forward_prop = (source, weights, bias, activation_fn) => {
   const target = new Array(weights.length).fill(0)
   for(i in target) {
     for(c in source)
       target[i] += (source[c] * weights[c, i]) + bias
     
     // Activation function
     target[i] = activation_fn(target[i])
   }
   return target
}

// predictions = [.191], actuals = [1], weights = [.14, 15], learning_rate = .05, output = [.17, .17]
back_prop = (predictions, actuals, learning_rate) => {
  const deltas = predictions.map((p, i) => (p - actuals[i]) * learning_rate)
  return weights.map((w, i) => w - deltas[i])
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
