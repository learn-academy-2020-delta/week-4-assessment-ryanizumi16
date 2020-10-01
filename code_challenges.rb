

# # --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.
#
full_arr_1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# # Expected output: [-9, 7, 9, 199]
full_arr_2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# # Expected output: [-823, 7, 23]
new_arr = []

full_arr_1.map do |value|
  new_arr = full_arr_1.select { |element| element.is_a? (Integer)}
  end

puts new_arr.sort



# # --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

class Bike
  def initialize (model, wheels, frame_size)
    @model = 'Trek'
    @wheels = 2
    @frame_size = '168cm'
    @bell = 'Beep Beep!'
    @speedometer = 0
  end

  def get_info
    @model
    @wheels
    @frame_size
  end

  def show_description
    puts " The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
  end

  def get_ring_bell
    @bell
  end

  def get_speedometer
    @speedometer
  end

  def pedal_faster
    @speedometer += 10
  end

  def break
    @speedometer -= 5
  end
end

my_bike = Bike.new "Trek", 2, "168cm"
puts my_bike.get_info
puts my_bike.show_description
puts my_bike.get_ring_bell
puts my_bike.get_speedometer
puts my_bike.pedal_faster
puts my_bike.break
# # Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'
#
#
# # -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
#
#
#
#
#
# # Expected output example: my_bike.ring_bell => 'Beep beep!'
#
#
# # -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.
#
#
#
#
#
# # Expected output example: my_bike.speed => 0
#
#
# # -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.
#
#
#
#
#
# # Expected output example: my_bike.pedal_faster 10 => 10
# # Expected output example: my_bike.brake 15 => 0
