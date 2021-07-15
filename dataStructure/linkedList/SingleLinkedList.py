class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def __str__(self) -> str:
        res_str = "|"

        iterator = self.head

        while iterator is not None:
            res_str += f" {iterator.data} |"
            iterator = iterator.next 

        return res_str
    
    def append(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
        else:
            self.tail.next = new_node
        self.tail = new_node

    def find_node_at(self, index):
        iterator = self.head
        
        for _ in range(index):
            iterator = iterator.next

        return iterator

    def prepend(self, data):
        new_node = Node(data)
        
        if self.head is None:
            self.tail = new_node
        else:
            new_node.next = self.head
        
        self.head = new_node

    def insert_after(self, previous_node, data):
        new_node = Node(data)

        if previous_node is self.tail:
            self.tail.next = new_node
            self.tail = new_node
        else:
            new_node.next = previous_node.next
            previous_node.next = new_node

    def pop_left(self):
        data = self.head.data
        
        if self.head is self.tail:
            self.head = None
            self.tail = None
        else:
            self.head = self.head.next

        return data
    
    def delete_after(self, previous_node):
        data = previous_node.next.data

        if previous_node.next is self.tail:
            previous_node.next = None
            self.tail = previous_node

        else:
            previous_node.next = previous_node.next.next
        
        return data
        
        


my_list = LinkedList()

my_list.append(2)
my_list.append(3)
my_list.append(5)
my_list.append(7)
my_list.append(11)

node_2 = my_list.find_node_at(2)

print(my_list.delete_after(node_2))
print(my_list)

print(my_list.pop_left())
print(my_list)