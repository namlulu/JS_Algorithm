class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

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

    def find_node_at(self, index):
        iterator = self.head
        
        for _ in range(index):
            iterator = iterator.next

        return iterator

    def find_node_with_data(self, data):
        iterator = self.head

        while iterator is not None:
            if iterator.data == data:
                return iterator
            
            iterator = iterator.next
        
        return None
        
    def append(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node
    
    def prepend(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

    def insert_after(self, previous_node, data):
        new_node = Node(data)

        if previous_node is self.tail:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node
        else:
            new_node.prev = previous_node
            new_node.next = previous_node.next

            previous_node.next.prev = new_node
            previous_node.next = new_node
    
    def delete(self, node_to_delete):
        if self.head is self.tail:
            store = self.head
            self.head = None
            self.tail = None
            return store.data
        elif node_to_delete is self.head:
            self.head = self.head.next
            self.head.prev = None
        elif node_to_delete is self.tail:
            self.tail = self.tail.prev
            self.tail.next = None
        else:
            node_to_delete.prev.next = node_to_delete.next
            node_to_delete.next.prev = node_to_delete.prev
        
        return node_to_delete.data

my_list = LinkedList()

my_list.prepend(11)
my_list.prepend(7)
my_list.prepend(5)
my_list.prepend(3)
my_list.prepend(2)

print(my_list)
print(my_list.head.data)
print(my_list.tail.data)