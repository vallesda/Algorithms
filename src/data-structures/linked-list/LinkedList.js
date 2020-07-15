import LinkedListNode from './LinkedListNode';

class LinkedList {
    constructor() {
        /** @var LinkedListNode */
        this.head = null;
        /** @var LinkedListNode */
        this.tail = null;
    }

    /**
     * @param {*} value
     * @return {LinkedList}
     */
    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
        }

        if (!this.tail) {
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        if (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
            return deletedNode;
        }

        const currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }

    deleteTail() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deletedTail;
        }

        const currentNode = this.head;
        
        while(currentNode.next) {
            if (currentNode.next.next === null) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deletedTail;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        
        return deletedHead;
    }

    find(value) {
        if (!this.head || value === undefined ) {
            return null;
        }

        const currentNode = this.head;

        while(currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }

        return null
    }

    toArray() {
        const nodes = [];
    
        let currentNode = this.head;
        while (currentNode) {
          nodes.push(currentNode);
          currentNode = currentNode.next;
        }
    
        return nodes;
    }
}