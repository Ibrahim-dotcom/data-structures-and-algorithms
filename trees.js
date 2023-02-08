class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

class BinaryTreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this._root = null;
    }

    traversePreOrder(){
        traversePreOrderHelper(this._root);

        function traversePreOrderHelper(node){
            if(!node) return;
            console.log(node.value);
            traversePreOrderHelper(node.left);
            traversePreOrderHelper(node.right);
        }
    }

    traverseInOrder(){
        traverseInOrderHelper(this._root);
        
        function traverseInOrderHelper(node){
            if(!node) return;
            traverseInOrderHelper(node.left);
            console.log(node.value);
            traverseInOrderHelper(node.right);
        }
    }

    traversePostOrder(){
        traversePostOrderHelper(this._root);

        function traversePostOrderHelper(node){
            if(!node) return;
            traversePostOrderHelper(node.left);
            traversePostOrderHelper(node.right);
            console.log(node.value);
        }
    }

    traverseLevelOrder(){
        let root = this._root;
        let queue = [];
        if(!root) return;
        queue.push(root);
        while (queue.length) {
            let temp = queue.shift();
            console.log(temp.value);
            if(temp.left) queue.push(temp.left);
            if(temp.right) queue.push(temp.right);
        }
    }

    
}

class BinarySearchTree{
    constructor(){
        this._root = null;
    }

    insert(value) {
        if(!this._root){
            this._root = {left: null, right: null, value: value};
            return;
        }
       insertHelper(this._root, value);
        function insertHelper(currentRoot, value){
            let thisNode = {left: null, right: null, value: value};
            if(!currentRoot) currentRoot = thisNode;
            else if(value < currentRoot.value){     
                currentRoot.left = insertHelper(currentRoot.left, value)
            }
            else if(value > currentRoot.value){
                currentRoot.right = insertHelper(currentRoot.right, value)
            }
            return currentRoot;

        }
    }

    findNode(value){
        let currentRoot = this._root, found = false;
        while (currentRoot) {
            if(currentRoot.value > value) currentRoot = currentRoot.left;
            else if(currentRoot.value < value) currentRoot = currentRoot.right;
            else{
                found = true;
                break;
            } 
        }
        return found;
    }

    remove(value){
        return deleteRecursively(this._root, value);
        function deleteRecursively(root, value) {
            if(!root) return null;
            else if(value < root.value){
                root.left = deleteRecursively(root.left, value);
            }
            else if (value > root.value){
                root.right = deleteRecursively(root.right, value);
            }
            else{
                if(!root.left && !root.right) return null;
                else if(!root.left) root = root.right;
                else if(!root.right) root = root.left;
                else{
                    let min = findMin(root.right);
                    root.value = min.value;
                    root.right = deleteRecursively(root.right, min.value)
                }
            }
            return root;
        }
        function findMin(root){
            while(root.left){
                root = root.left;
            }
            return root;
        }
    }
}

class AVLTree{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
        this.depth = 1;
    }
    setDepthBasedOnChildren(value){
        if(this.node == null) this.depth = 0;
        else this.depth = 1;

        if(this.left != null) this.depth = this.left.depth + 1;
        if (this.right != null && this.depth <= this.right.depth) this.depth = this.right.depth + 1;
    }
}

let bst = new BinarySearchTree();
bst.insert(5)
bst.insert(7)
bst.insert(3)
bst.insert(2)
bst.insert(4)
bst.insert(15)
bst.remove(3)
console.log(bst._ro)