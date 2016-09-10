import formatName from '../formatName'

test('type will format in pascal case', () => {
  expect(formatName.type('hello_world')).toBe('HelloWorld')
  expect(formatName.type('hello-world')).toBe('HelloWorld')
  expect(formatName.type('helloWorld')).toBe('HelloWorld')
  expect(formatName.type('HelloWorld')).toBe('HelloWorld')
  expect(formatName.type('HELLO_WORLD')).toBe('HelloWorld')
  expect(formatName.type('_helloWorld')).toBe('_HelloWorld')
  expect(formatName.type('__hello_world__')).toBe('__HelloWorld__')
  expect(formatName.type('HELLO_WORLD_')).toBe('HelloWorld_')
})

test('field will format in camel case', () => {
  expect(formatName.field('hello_world')).toBe('helloWorld')
  expect(formatName.field('hello-world')).toBe('helloWorld')
  expect(formatName.field('helloWorld')).toBe('helloWorld')
  expect(formatName.field('HelloWorld')).toBe('helloWorld')
  expect(formatName.field('HELLO_WORLD')).toBe('helloWorld')
  expect(formatName.field('_HelloWorld')).toBe('_helloWorld')
  expect(formatName.field('__hello_world__')).toBe('__helloWorld__')
  expect(formatName.field('HELLO_WORLD_')).toBe('helloWorld_')
})

test('arg will format in camel case', () => {
  expect(formatName.arg('hello_world')).toBe('helloWorld')
  expect(formatName.arg('hello-world')).toBe('helloWorld')
  expect(formatName.arg('helloWorld')).toBe('helloWorld')
  expect(formatName.arg('HelloWorld')).toBe('helloWorld')
  expect(formatName.arg('HELLO_WORLD')).toBe('helloWorld')
  expect(formatName.arg('_HelloWorld')).toBe('_helloWorld')
  expect(formatName.arg('__hello_world__')).toBe('__helloWorld__')
  expect(formatName.arg('HELLO_WORLD_')).toBe('helloWorld_')
})

test('enumValue will format in constant case', () => {
  expect(formatName.enumValue('hello_world')).toBe('HELLO_WORLD')
  expect(formatName.enumValue('hello-world')).toBe('HELLO_WORLD')
  expect(formatName.enumValue('helloWorld')).toBe('HELLO_WORLD')
  expect(formatName.enumValue('HelloWorld')).toBe('HELLO_WORLD')
  expect(formatName.enumValue('HELLO_WORLD')).toBe('HELLO_WORLD')
  expect(formatName.enumValue('_HelloWorld')).toBe('_HELLO_WORLD')
  expect(formatName.enumValue('__hello_world__')).toBe('__HELLO_WORLD__')
  expect(formatName.enumValue('HELLO_WORLD_')).toBe('HELLO_WORLD_')
})
