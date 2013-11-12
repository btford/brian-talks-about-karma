class Animal
  constructor: (@name) ->

  move: (meters) ->
    alert @name + " moved #{meters}m."

class Horse extends Animal
  move: ->
    alert "Galloping..."
    super 45
