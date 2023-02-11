relu = (x) => Math.max(0, x)
sigmoid = (x) => 1 / (1 + (Math.E ** -x))
softmax = (arr) => {
  const d = arr.map(Math.exp).reduce((a, b) => a + b)
  return arr.map(y => Math.exp(y) / d)
}
transpose = (m) => m[0].map((x,i) => m.map(x => x[i]))
sliceTrainTest = (m, size = .8) => {
  const d = ~~(m.length * size)
  return [m.slice(0, d), m.slice(d)]
} // const [train, test] = sliceTrainTest(matrix)

forward_prop = (source, weight, bias, target_size) => {
   const target = new Array(target_size).fill(0)
   for(i in target) {
     for(c in source)
       target[i] += (source[c] * weight[c]) + bias
     
     // Activation function
     target[i] = relu(target[i])
   }
   return target
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
