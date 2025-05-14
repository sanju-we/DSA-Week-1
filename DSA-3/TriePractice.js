// Trie Node
class TrieNode {
  constructor() {
    this.children = {}; // key: character, value: TrieNode
    this.isEndOfWord = false;
  }
}

// Trie Data Structure
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let curr = this.root;
    for (let ch of word) {
      if (!curr.children[ch]) {
        curr.children[ch] = new TrieNode();
      }
      curr = curr.children[ch];
    }
    curr.isEndOfWord = true;
  }

  // Search for a complete word
  search(word) {
    let curr = this.root;
    for (let ch of word) {
      if (!curr.children[ch]) return false;
      curr = curr.children[ch];
    }
    return curr.isEndOfWord;
  }

  // Delete a word
  delete(word) {
    this._delete(this.root, word, 0);
  }

  _delete(node, word, index) {
    if (index === word.length) {
      if (!node.isEndOfWord) return false; // word not found
      node.isEndOfWord = false;
      return Object.keys(node.children).length === 0; // delete node if it has no children
    }

    const ch = word[index];
    const nextNode = node.children[ch];
    if (!nextNode) return false;

    const shouldDelete = this._delete(nextNode, word, index + 1);

    if (shouldDelete) {
      delete node.children[ch];
      return Object.keys(node.children).length === 0 && !node.isEndOfWord;
    }

    return false;
  }
}


class SuffixTrieNode {
  constructor() {
    this.children = {}; // character => SuffixTrieNode
  }
}

class SuffixTrie {
  constructor() {
    this.root = new SuffixTrieNode();
  }

  // Build a suffix trie for the given string
  build(str) {
    for (let i = 0; i < str.length; i++) {
      console.log(str.substring(i))
      this.insertSuffix(str.substring(i));
    }
  }

  insertSuffix(suffix) {
    let curr = this.root;
    for (let ch of suffix) {
      if (!curr.children[ch]) {
        curr.children[ch] = new SuffixTrieNode();
      }
      curr = curr.children[ch];
    }
    curr.children['*'] = null; // End marker
  }

  // Search for a pattern in the string
  contains(pattern) {
    let curr = this.root;
    for (let ch of pattern) {
      if (!curr.children[ch]) return false;
      curr = curr.children[ch];
    }
    return true;
  }
}

let trie = new SuffixTrie()
trie.build('sanju')
console.log(trie.contains('san'))