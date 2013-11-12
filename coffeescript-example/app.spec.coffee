
describe 'tom', ->
  log = ''
  tom = null

  window.alert = (text) ->
    log += text

  beforeEach ->
    tom = new Horse "Tommy the Palomino"
    log = ''

  it 'should should have a name', ->
    expect(tom.name).toBe 'Tommy the Palomino'

  it 'should gallop', ->
    tom.move()
    expect(log).toBe 'Galloping...Tommy the Palomino moved 45m.'
