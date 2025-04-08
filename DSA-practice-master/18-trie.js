class TrieNode {
    constructor(){
        this.child = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let current = this.root;
        for(let char of word){
            if(!current.child[char]){
                current.child[char] = new TrieNode();
            }
            current = current.child[char];
        }
        current.isEnd = true;
    }

    
    search(word){
        let current = this.root;
        for(let char of word){
            if(!current.child[char]) return false;
            current = current.child[char];
        }
        return current.isEnd;
    }
    
    startWith(prefix){
        let current = this.root;
        for(let char of word){
            if(!current.child[char]) return false;
            current = current.child[char];
        }
        return true;
    }
    
}


const newtrie = new Trie()

newtrie.insert('int');
newtrie.insert('inter');
newtrie.insert('internet');







console.log(newtrie);