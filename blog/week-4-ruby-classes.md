Blog: Ruby Classes

Let's face it: you want to look your best, but sometimes fashion is hard. Especially when it's 7am and you need to be out the door 5 minutes ago.

Make life easier by using this outfit planner class. Plan your outfits once a week, so you know exactly what to wear every day!

Here's how it works:

Class Outfit

  def initialize(name)
    @outfit = []
    puts "Ready to add items to your #{name} outfit"
  end

  def add_item(item)
    @outfit << item
  end

  def remove_item(item)
    @outfit.delete(item)
  end

  def see_outfit()
    puts @outfit
  end

end #class

Start by creating a new outfit and giving it a name.

Outfit.new("Monday")

Great! Now add some items to it! Remember to be descriptive so that your sleepy 7am self will know what to grab. "Blue knee-length skirt" rather than "Skirt", please.

Monday.add_item("Watermelon skirt")

You can add more than one item at a time, if you like.

Monday.add_item(["Black tights", "Black ballet flats", "Black t-shirt", "Floral jacket", "Silver earrings", "Blue scarf"])

Excellent work! Now, on Monday morning, simply type the following, and you'll see a list of exactly what to wear.

Monday.see_outfit

Congratulations! You are now well-dressed AND on time. Go out there and conquer the world!