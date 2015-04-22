# Each iterator

# Define function each that takes in an array
def each(arr)
  # Define variable i, set to 0
  i = 0
  # Start while loop to iterate over array
  while i < arr.length
    # While iterating over array, call yield (callback) of each (below)
    yield(arr[i])
    # Increment i to continue iteration
    i += 1
  end
end

# Callback for each takes in an array
each [1,2,3,4] do |x|
  # Puts element from array
  puts x
end

# Map iterator (using each)

# Define function map that takes in an array
def map(arr)
  # Create empty array result
  result = []
  
  # Call each iterator within map to iterate through array
  each(arr) do |x|
    # Push result from yield/callback (below) into result array
    result << yield(x)
  end
  
  # Implicitly return result array
  result
end

# Callback for map takes in an array
map [1,2,3,4] do |x|
  # Returns x * x
  x * x
end

# Filter iterator (using each)

# Define function filter that takes in an array
def filter(arr)
    # Create empty array result
    result = []

    # Call each iterator within filter to iterate through array
    each(arr) do |x|
        # If yield is true (if x is even - from filter callback below) 
        if yield(x)
            # push x into result array
            result << x
        end
    end
    # Implicitly return result array
    result
end

# Callback for filter takes in an array
filter [1, 2, 3, 4] do |x|
    # Checks if each element in array is even and returns true or false
    x.even?
end