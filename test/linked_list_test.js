var expect = require("chai").expect;
var Node = require("../lib/linked_list.js").Node;
var LinkedList = require("../lib/linked_list.js").LinkedList;

describe('a doubly linked list', function() {
  describe('#insert', function() {
    it('should change the head', function() {
      var list = new LinkedList;
      list.insert('John');
      expect(list.head.val).to.equal('John');
    })

    it('should change the links', function() {
      var list = new LinkedList;
      list.insert('John');
      expect(list.head.next).to.be.null;
      expect(list.head.prev).to.be.null;
      list.insert('Abby');
      expect(list.head.val).to.equal('Abby');
      expect(list.head.next.val).to.equal('John');
      expect(list.head.next.prev.val).to.equal('Abby');
    })
  })

  describe('#size', function() {
    it('should report size 0 for an empty list', function() {
      var list = new LinkedList;
      expect(list.size).to.equal(0);
    })

    it('should increase the size when nodes are added', function() {
      var list = new LinkedList;
      list.insert('John');
      expect(list.size).to.equal(1);
    })
  })

  describe('#search', function() {
    it('should return the requested node if head is requested', function() {
      var list = new LinkedList;
      list.insert('John');
      list.insert('Abby');
      expect(list.search('Abby').val).to.equal('Abby');
    })

    it('should return the requested node from anywhere else', function() {
      var list = new LinkedList;
      list.insert('John');
      list.insert('Abby');
      expect(list.search('John').val).to.equal('John');
    })

    it('should return null if the requested node does not exist', function() {
      var list = new LinkedList;
      list.insert('John');
      list.insert('Abby');
      expect(list.search('Randall')).to.be.null;
    })
  })

  describe('#remove', function() {
    it('should return the value of the removed node', function() {
      var list = new LinkedList;
      list.insert('John');
      list.insert('Abby');
      expect(list.remove('Abby')).to.equal('Abby');
    })

    it('should remove the head and reassign links', function() {
      var list = new LinkedList;
      list.insert('John');
      list.insert('Abby');
      list.remove('Abby');
      expect(list.head.val).to.equal('John');
      expect(list.head.prev).to.be.null;
    })

    it('should remove any other node and reassign links', function() {
      var list = new LinkedList;
      list.insert('John');
      list.insert('Abby');
      list.insert('Lizzy');
      list.remove('Abby');
      expect(list.head.next.val).to.equal('John');
      expect(list.head.next.prev.val).to.equal('Lizzy');
    })
  })

  describe('#toString', function() {
    it('should give a comma separated list of values', function() {
      var list = new LinkedList;
      list.insert('John');
      list.insert('Abby');
      list.insert('Lizzy');
      expect(list.toString()).to.equal('Lizzy, Abby, John');
    })
  })
})
