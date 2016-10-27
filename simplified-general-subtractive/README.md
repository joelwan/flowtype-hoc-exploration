# Simplified Flow typing for a functional or classed based subtractive HOC

Tried to generalize ClassyComponent and FunctionalComponent into a single Component type using the union operator, but it did not work for me.

## Usage

    $ npm install
    $ npm run -s flow

## Results

Flow reports 6 errors when I expect 4:

  $ npm run -s flow
  App.js:7
    7:   <ClassyProfile
         ^ props of React element `ClassyProfile`
    8:     username={1234}
                     ^^^^ number. This type is incompatible with
    9:   username:string,
                  ^^^^^^ string. See: ClassyProfile.js:9

  App.js:7
    7:   <ClassyProfile
         ^ React element `ClassyProfile`
    8:     username={1234}
                     ^^^^ number. This type is incompatible with
   15:   username: "World",
                   ^^^^^^^ string. See: ClassyProfile.js:15

  App.js:7
    7:   <ClassyProfile
         ^ props of React element `ClassyProfile`
    9:     onEdit={"not implemented yet"}
                   ^^^^^^^^^^^^^^^^^^^^^ string. This type is incompatible with
   10:   onEdit:Function,
                ^^^^^^^^ function type. See: ClassyProfile.js:10

  App.js:14
   14:   <ClassyProfile
         ^ React element `ClassyProfile`
   37: const HideableProfile:HideableComponent<Props, DefaultProps> = hideable(Profile);
                                                      ^^^^^^^^^^^^ property `username`. Property not found in. See: ClassyProfile.js:37
   14:   <ClassyProfile
         ^ props of React element `ClassyProfile`

  App.js:20
   20:   <FunctionalProfile
         ^ props of React element `FunctionalProfile`
   21:     username={1234}
                     ^^^^ number. This type is incompatible with
    7:   username?:string,
                   ^^^^^^ string. See: FunctionalProfile.js:7

  App.js:20
   20:   <FunctionalProfile
         ^ props of React element `FunctionalProfile`
   22:     onEdit={"not implemented yet"}
                   ^^^^^^^^^^^^^^^^^^^^^ string. This type is incompatible with
    8:   onEdit:Function,
                ^^^^^^^^ function type. See: FunctionalProfile.js:8


  Found 6 errors
