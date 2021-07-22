import sys

a, b = map(int, sys.stdin.readline().split())
c = list(map(int, sys.stdin.readline().split()))
answer = ""

for i in range(len(c)):
    if c[i] < b:
        answer = answer + f"{c[i]} "

print(answer.strip())
