from functools import reduce
import sys

iterator = input()
user_input = list(map(int, list(sys.stdin.readline())[:-1]))
answer = reduce(lambda pre, cur: pre + cur, user_input, 0)
print(answer)