class TrieNode{
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode();
    }
    // int , I
    // inter
    insert(word){
        let current = this.root; // {"root":{"children":{"i":{children":{"n":{children":{"t":{children":{"e":{children":{"r":{children":{},"isEndOfWord":true}},"isEndOfWord":false}},"isEndOfWord":true}},"isEndOfWord":false}},"isEndOfWord":false}},"isEndOfWord":false}}
        for(let char of word){
            if(!current.children[char]){
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true; 
    }
    search(word){
        // intern // i n
        let current = this.root;
        for(let char of word){
            if(!current.children[char]) return false;
            current = current.children[char];
        }
        return current.isEndOfWord;
    }
    // inte
    startWith(prefix){
        let current = this.root;
        for(let char of prefix){
            if(!current.children[char]) return false;
            current = current.children[char];
        }
        return true;
    }
    longestPrefix(){
        let current = this.root;
        let prefix = "";
        while(Object.keys(current.children).length===1&&!current.isEndOfWord){
            prefix+=Object.keys(current.children)[0];
            current = current.children[Object.keys(current.children)[0]];
        }
        return prefix;
    }
    countWordWithPrefix(prefix){
        let current = this.root;
        for(let char of prefix){
            if(!current.children[char]) return 0;
            current = current.children[char];
        }
        return this.countWord(current);
    }
    countWord(node){
        let count = 0;
        if(node.isEndOfWord) count++;
        for(let char in node.children){
            count+= this.countWord(node.children[char]);
        }
        return count;
    }
}


const newTrie = new Trie();

newTrie.insert('intern');
// newTrie.insert('internet');
// newTrie.insert('interview');
// newTrie.insert('instagram');f

// console.log(JSON.stringify(newTrie));
// console.log(newTrie.countWordsWithPrefix('in'))
console.log(newTrie.search('intern'));
// console.log(newTrie.countWordWithPrefix(''));


// (root)
//   └── i
//       └── n
//           └── t
//               └── e
//                   └── r
//                       └── n (isEndOfWord: true)
//                           └── e
//                               └── t (isEndOfWord: true)
//                       └── v
//                           └── i
//                               └── e
//                                   └── w (isEndOfWord: true)
//          └── s
//              └── t
//                  └── a
//                      └── g
//                          └── r
//                              └── a
//                                  └── m (isEndOfWord: true)