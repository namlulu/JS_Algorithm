def swap(tree, index_1, index_2):
    """완전 이진 트리의 노드 index_1과 노드 index_2의 위치를 바꿔준다"""
    temp = tree[index_1]
    tree[index_1] = tree[index_2]
    tree[index_2] = temp


def heapify(tree, index, tree_size):
    """heapify 함수"""
    # 왼쪽 자식 노드의 인덱스와 오른쪽 자식 노드의 인덱스를 계산
    left_child_index = 2 * index
    right_child_index = 2 * index + 1

    # 코드를 쓰세요.
    largest = index

    if 0 < left_child_index < tree_size and tree[largest] < tree[left_child_index]:
        largest = left_child_index
    
    if 0 < right_child_index < tree_size and tree[largest] < tree[right_child_index]:
        largest = right_child_index
    
    if largest != index:
        swap(tree, index, largest)
        heapify(tree, largest, tree_size)

def heapsort(tree):
    """힙 정렬 함수"""
    tree_size = len(tree)

    for index in range(tree_size, 0, -1):
        heapify(tree, index, tree_size)

    for i in range(tree_size - 1, 0, -1):
        swap(tree, 1, i)
        heapify(tree, 1, i)

    

# 실행 코드
tree = [None, 15, 5, 12, 14, 9, 10, 6, 2, 11, 1]  # heapify하려고 하는 완전 이진 트리
heapsort(tree)
print(tree) 