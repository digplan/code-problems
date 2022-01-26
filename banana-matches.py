from itertools import combinations


def gcd(x, y):
    while y:
        x, y = y, x % y
    return x


def loop(x, y):
    base = int((x + y) / gcd(x, y))
    return bool(base & (base - 1))


def solution(banana_list):
    banana_list = sorted(banana_list)
    new_list = banana_list[:]
    for combo in combinations(banana_list, 2):
        if loop(*combo):
            if combo[0] in new_list and combo[1] in new_list:
                new_list.remove(combo[0])
                new_list.remove(combo[1])
    return len(new_list)

print(solution([1,1]))