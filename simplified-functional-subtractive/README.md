# Simplified Flow typing for a functional subtractive HOC

For simplicity (because I couldn't get it to work the other way), I am not Flow typing the HOC itself, but I am typing the wrapped component returned by the HOC function. This allows checking props passed to the wrapped component which was my original goal.

## Usage

    $ npm install
    $ npm run -s flow

## Results

Flow gives 2 errors as expected:

    $ npm run -s flow
    App.js:6
      6:   <HideableProfile
           ^ React element `HideableProfile`
      7:     username={1234}
                       ^^^^ number. This type is incompatible with
      7:   username:string,
                    ^^^^^^ string. See: Profile.js:7

    App.js:6
      6:   <HideableProfile
           ^ React element `HideableProfile`
      8:     onEdit={"not implemented yet"}
                     ^^^^^^^^^^^^^^^^^^^^^ string. This type is incompatible with
      8:   onEdit:Function,
                  ^^^^^^^^ function type. See: Profile.js:8


    Found 2 errors
