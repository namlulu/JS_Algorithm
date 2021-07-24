from functools import reduce
import sys

user_input = int(sys.stdin.readline())
array = list(map(int, sys.stdin.readline().split()))

max = max(array)
manipulate_list = list(map(lambda x: x / max * 100, array))

answer = reduce(lambda acc, cur: acc + cur, manipulate_list, 0) / len(manipulate_list)

print(answer)