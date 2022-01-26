class RateLimiter {
    counter = 0
    constructor(max) {
        this.max = max
        setInterval(() => {
            this.counter = 0
        }, 1000)
    }
    func() {
        if (this.counter > this.max)
            throw new Error('Rate limit exceeded')
        this.counter++
        console.log('done')
    }
}

const rl = new RateLimiter(5)
for (let i = 0; i < 5; i++) {
    rl.func()
}
