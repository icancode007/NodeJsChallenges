function LinkedList(){
  this.head = null;
  this.tail = null;
}
function Node(data,next,prev){
  this.nextv = next;
  this.prev = prev;
  this.data = data
}

LinkedList.prototype.addToHead=function(value){
  var newNode = new Node(value,this.head,null);
  //its being added to the head therefore theres no need to add previous
  if(this.head) this.head.prev = newNode;
  //the old head prev becomes the newNode
  else this.tail = newNode;
       this.head = newNode;
  // if it didnt find a head then the  the head and the tail both point to the newNode
};
 // just checking the outoputs of the addToHead 
  // But it results way better when you check it in the console because it breaks it down to whos the next , prev , head and tail of who
// var ll = new LinkedList();
// ll.addToHead(50);
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);
// console.log(ll);
LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value,null,this.tail);
  if(this.tail) this.tail.nextv = newNode;
  //if theres a tail then make the next value of that tail the newNode
  else this.head = newNode;
        this.tail = newNode;
}
// var ll = new LinkedList();
// ll.addToHead("song1");
// ll.addToHead("song2");
// ll.addToTail("song3");
// ll.addToTail("songby4");
// console.log(ll);
LinkedList.prototype.removeHead = function(){
  if(!this.head) return null;
  var headToremove = this.head.data;
  this.head = this.head.nextv;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return headToremove;
};

//var ll = new LinkedList();

// ll.addToTail("song2");
// ll.addToHead("sing2");
// ll.addToTail(25);

// console.log(ll.removeHead());

LinkedList.prototype.removeTail = function(){
  if(!this.tail) return null;
  var tailToremove = this.tail.data;
  this.tail = this.tail.prev;
 if(this.tail) this.tail.nextv = null; 
 else this.head = null;
 return tailToremove;
};
// var ll = new LinkedList();

// ll.addToTail("song2");
// ll.addToHead("sing2");
// ll.addToTail(25); 
// ll.addToTail("hongkong");
// ll.addToTail("hawaii");

// console.log(ll.removeTail());

LinkedList.prototype.searchValue = function(searchValue){
  var currentNode = this.head;
  while(currentNode !== null){
    if(currentNode.data === searchValue){
      return currentNode;
    }
    currentNode = currentNode.nextv;
  }
  return null;
};

// var ll = new LinkedList();

// ll.addToTail("song2");
// ll.addToHead("sing2");
// ll.addToTail(25); 
// ll.addToTail("hongkong");
// ll.addToTail("hawaii");
// ll.addToTail("rue");
// ll.addToHead(48);
// ll.addToHead(32);
// ll.addToTail(35);
// ll.addToHead(65);

// console.log(ll.searchValue(18));
LinkedList.prototype.indexOf = function(value){
  var currentNode = this.head;
  var count = 0;
  while(currentNode){
    count++;
    if(currentNode.data === value)return count;
    currentNode=currentNode.nextv;
  }
}
