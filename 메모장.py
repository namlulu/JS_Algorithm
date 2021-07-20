a, b = map(int, input().split())

if b - 45 >= 0:
    print(a, b - 45)
else:
    if a - 1 >= 0:
        print(a - 1, 60 + (b - 45))
    else:
        print(24 + (a - 1), 60 + (b - 45))

