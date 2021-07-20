class Node:
    def __init__(self, data) -> None:
        self.data = data
        self.left_child = None
        self.right_child = None

root_node = Node(2)
node_B = Node(3)
node_C = Node(5)
node_D = Node(7)
node_E = Node(11)

root_node.left_child = node_B
root_node.right_child = node_C

node_B.left_child = node_D
node_B.right_child = node_E