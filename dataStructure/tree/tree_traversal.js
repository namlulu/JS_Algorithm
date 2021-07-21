class Node {
    constructor(data) {
        this.data = data
        this.leftNode = null
        this.rightNode = null
    }
}

function traversalInOrder (node) {
    if (node) {
        traversalInOrder(node.leftNode)
        console.log(node.data);
        traversalInOrder(node.rightNode)
    }
}

const nodeA = new Node("A")
const nodeB = new Node("B")
const nodeC = new Node("C")
const nodeD = new Node("D")
const nodeE = new Node("E")
const nodeF = new Node("F")
const nodeG = new Node("G")
const nodeH = new Node("H")
const nodeI = new Node("I")

nodeF.leftNode = nodeB
nodeF.rightNode = nodeG

nodeB.leftNode = nodeA
nodeB.rightNode = nodeD

nodeD.leftNode = nodeC
nodeD.rightNode = nodeE

nodeG.rightNode = nodeI

nodeI.leftNode = nodeH

const root = nodeF
traversalInOrder(root)