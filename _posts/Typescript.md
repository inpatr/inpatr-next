#syntax #JavaScript

# Type Script

**cmd + click = gives you the documentation of the type**
a typed superset of JavaScript that compiles to plain JavaScript.

const binding **:** type = content

## Type Safety

Use types to prevent programs from doing invalid things.

## Static type checking

verifying type safety - shows errors while you code.
dramatically speeds up the process of coding!

JS errors only in runtime.

## Type System

implicit & explicit

1. implicit
2. explicit

## Strongly Typed

Values are bound to specific data types.

# Types

union / intersection
_allows to build new types from existing ones_
_union_: combines if both types are complete
_intersection_: combines parts of both types

primitive types:

- number
- strings
- boolean

complex types:

- arrays
- tuple (array of declared types)
- enum ( list of variables )
  difference to objects : access by index
- functions
- objects

## Alias

type Name = {object} / primitive type

The name is a placeholder for your own type.
creates objects where you can declare keys and their types
'keyname?'' : key is optional

union: '& name' (at the end of the object bzw. type)
intersection: 'typeName | anotherTypeName' ---> typeName OR anotherTypeName

## Interface ?

almost like Type. Syntax difference (type --> interface + no "=")

_with 'interface' you can add elements to types!_

union: 'interface currentTypeName extends otherTypeName'
--> currentType will be added to otherType

## Generics ?

typed with <>
just placeholder if you don't know the type yet

## Special Types

**void** = absence of value
**any** = can be any type
**unknown** = type is not known yet, you can verify it later (TYPEGUARD)
**undefined** = variable that has not been defined yet
**null** = absence of a value(empty)
**never** = function never returns (or forever)

# Type Utilities

### Partial \<type>

every key of this type becomes optional

### Required \<type>

kind of the opposite of partial. everything has to be declared!

### Pick\<type , keys | keys>

pick and define from type

### Omit \<type, keys | keys>

kind of the opposite of pick. Removes from type
name the key you want to remove and declare the others

---

# Notes

- combine types f. e. an array

type 'maintype' = type1 | type2
const array: maintype\[] = \[...\]

if you see a binding with a \[\], think wether or not it is an object or an array. Or look into the code for the type. If it's an array, the value inside the brackets should be a number! (index)

objects are Records in TS!

# Interfaces

only interfaces can be extended!
