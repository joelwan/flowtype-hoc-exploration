# Simplified Flow typing for a class based subtractive HOC

See notes in simplified-functional-subtractive. This demonstrates Flow typing for a class based component wrapped using a higher order component. It supports defaultProps.

## Usage

    $ npm install
    $ npm run -s flow

## Results

Flow reports 2 errors as expected:

    $ npm run -s flow
    App.js:6
      6:   <HideableProfile
           ^ props of React element `HideableProfile`
      7:     username={1234}
                       ^^^^ number. This type is incompatible with
     15:   username: "World",
                     ^^^^^^^ string. See: Profile.js:15

    App.js:6
      6:   <HideableProfile
           ^ React element `HideableProfile`
      8:     onEdit={"not implemented yet"}
                     ^^^^^^^^^^^^^^^^^^^^^ string. This type is incompatible with
     10:   onEdit:Function,
                  ^^^^^^^^ function type. See: Profile.js:10


    Found 2 errors
