from math import sqrt


def distance_between(xy, ab):
    return sqrt((xy[0] - ab[0])**2 + (xy[1] - ab[1])**2)

def solution(dimensions, your_position, trainer_position, max_distance):
    directions = 0
    # base
    if distance_between(your_position, trainer_position) <= max_distance:
        directions += 1
    # off walls

    return directions


# [1, 0], [1, 2], [1, -2], [3, 2], [3, -2], [-3, 2], and [-3, -2]
s = solution([3, 2], [1, 1], [2, 1], 4)
print(s)
