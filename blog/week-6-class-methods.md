Blog: Ruby Class Methods

In Ruby, an instance method is pretty straightforward, and we use them all the time.

class Example

  def instance
      puts 'This is an instance method'
  end

end

An instance method can be called on an instance of a class.

A Class method is, as the name would suggest, a method that can be called on a Class.

To create a Class method:

  class Example
    class << self
      def class_method
        puts 'This is a class method'
      end
    end
  end

There are other ways to do this, but I think I prefer this notation as, according this this blog post (http://www.railstips.org/blog/archives/2009/05/11/class-and-instance-methods-in-ruby/), it is used quite a lot in Rails, which I will be learning soon.

When to use a class method:

A class method should be used when you are dealing with the class alone, rather than instances of the class. You should use a class method when you know that all of the instances of the class are going to have this same method.

One use I can think of for this is to have a class method that puts a description of what the class does. So you could call Example.description and it would puts "Examples does x, y, z."

Another use might be if you are creating a booking system for a company that has only one location. In that case, the code might go something like this:

  class Booking
    class << self
      def location
        puts '742 Evergreen Terrace'
      end
    end
  end

  It is difficult to think of many uses for class methods, as it's not often that all instances of a class share exactly the same information. However, when the need arises, I can see that it might be quite useful.

