def solution(l):
    total = 0
    size = len(l)
    count = [0 for i in range(size)]
    if not size:
        return total
    for i in range(size):
        num1 = l[i]
        for j in range(i+1, size):
            num2 = l[j]
            if num2 % num1 == 0:
                count[j] += 1
                total += count[i]
    return total