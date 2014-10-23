(function(exports) {

  var LinkedList = function() {
    this.head = null;
    this.size = 0;
  };

  var Node = function(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  };

  LinkedList.prototype.insert = function(val) {
    var node = new Node(val);
    var head = this.head;
    node.next = head;
    this.head = node;
    if (head != null) {
      head.prev = node;
    }
    this.size++;
  };

  LinkedList.prototype.search = function(search_crit) {
    var current_node = this.head;
    while (current_node != null) {
      if (current_node.val == search_crit) {
        return current_node;
      } else {
        current_node = current_node.next;
      }
    }
    return null;
  };

  LinkedList.prototype.remove = function(search_crit) {
    var toRemove = this.search(search_crit);
    if (toRemove != null) {
      if (toRemove.next != null) {
        toRemove.next.prev = toRemove.prev;
      }
      if (toRemove.prev != null) {
        toRemove.prev.next = toRemove.next;
      } else {
        this.head = toRemove.next;
      }
    } else {
      return null;
    }
    return toRemove.val;
  };

  LinkedList.prototype.toString = function() {
    var result = '';
    this.each(function(node) {
      if (node.next != null) {
        result += node.val + ', ';
      } else {
        result += node.val;
      }
    });
    return result;
  };

  LinkedList.prototype.each = function(doThis) {
    var current_node = this.head;
    while (current_node != null) {
      doThis(current_node);
      current_node = current_node.next;
    }
  };

  module.exports = {
    Node: Node,
    LinkedList: LinkedList
  }

})(this);
