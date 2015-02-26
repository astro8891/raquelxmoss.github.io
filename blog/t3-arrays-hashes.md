
Arrays and Hashes
=================

Or, what I talk about when I talk about organising
--------------------------------------------------

17/12/14

### What are arrays and hashes?

Arrays and hashes are used to store lots of information easily. For example, you could use variables to store a shopping list, like this:

item_1 = "apples"
item_2 = "soap"
item_3 = "chicken"

But that's a lot of typing! Arrays and hashes make it easier to store your infomation. With an array, your shopping list will become:

items = ["apples", "soap", "chicken"]

Isn't that much simpler?

### What is an array?

An array is a list of items in order. That's important! Because you access each individual item in your array by specifying which order number you need.

In programming, the first in any order is always 0, rather than one. So, if you want to print the first item of your array, you will write:

puts items[0]

The output of that example will be "apples". To get the second item in the array, you'll use items[1] and to get the third, you'll use items[2] (and so on, and so forth).


### When would you use an array?

Arrays are useful for when you've got a list of things that should be kept in order. For example, if you're writing a recipe, and the steps need to be in order (pre-heat oven, chop onions, melt butter, and so on...), it might be useful to store your information in an array.

### What is a hash?

Hashes are useful in that they kind of work like a dictionary. Imagine you were looking up a word in an English -> Spanish Dictionary. If you looked up the word "Dog", you'd find "Perro". If we were to describe that process as a Hash, Dog would be the key, and perro would be the value.

### When would you use a hash?

Hashes are useful for when you want to retrieve information that isn't necessarily in order. Let's say you're creating a family tree.

:step-brother = "Lukas"
:mother = "Megan"
:step-father = "Roger"
:grandmother = "Vivienne"



