# Description

This contains Javascript-implemented data structures, similar to my ruby
data structures repository. All functions are supported by official JS
testing frameworks.

# Doubly Linked List

To use the doubly linked list, simply use the provided functions:

```
var list = new LinkedList;

list.insert('John') =>// Adds a node with value 'John' to the list, replacing
                          the head.

list.search('Abby') =>// Searches for and returns the node if found, else null

list.remove(10) =>// Searches for a node with value 10 and removes it

list.toString =>// Returns a comma-separated format of all values in the list

list.each( function(node) {} ); =>// runs the defined function for each node.
                                      Node is a required parameter which refers
                                      to each node during the iteration.
```

# Testing

The test suite runs automatically in the test.html file. In order to use it,
you must first run browserify as follows:

```
$ browserify test/linked_list_test.js -o test/test_bundle.js
```

Once the test bundle is generated locally, you can see the tests run in your
browser.

Beware - while running tests with the mocha command in your main console will
work, it will run all tests twice due to their replication between the main test
files and the browserified test_bundle.js file. It is preferable to use
browserify and the test_bundle.js file.
