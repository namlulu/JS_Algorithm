import sys

user_input = int(sys.stdin.readline())
store = user_input
temp = 0
count = 0

while True:
    temp = store // 10 + store % 10
    if temp < 10:
        store = store % 10 * 10 + temp
    else:
        store = store % 10 * 10 + temp % 10
    
    count += 1

    if store == user_input:
        break

print(count)