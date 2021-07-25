import sys

iterator = int(sys.stdin.readline())

for _ in range(iterator):

    user_input = list(map(int, sys.stdin.readline().split()))
    number_students = user_input[0]

    scores = user_input[1:]
    avg_scores = sum(scores) / len(scores)

    count = 0
    for score in scores:
        if score > avg_scores:
            count += 1
    
    print("{0:.3f}%" .format(count / len(scores) * 100))
        

