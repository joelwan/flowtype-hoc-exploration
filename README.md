# flowtype-hoc-exploration
A repository to play around with flowtype and higher-order react components.

## Usage

    $ npm install
    $ npm run -s flow

## Results

Flow reports 2 errors as expected:

    $ npm run -s flow
    App.js:6
      6:   <LoggedProfile
           ^ React element `LoggedProfile`
      7:     username={1234}
                       ^^^^ number. This type is incompatible with
      6: type ProfileProps = {username:string, onEdit:Function}
                                       ^^^^^^ string. See: Profile.js:6

    App.js:6
      6:   <LoggedProfile
           ^ React element `LoggedProfile`
      8:     onEdit={"not implemented yet"}
                     ^^^^^^^^^^^^^^^^^^^^^ string. This type is incompatible with
      6: type ProfileProps = {username:string, onEdit:Function}
                                                      ^^^^^^^^ function type. See: Profile.js:6


    Found 2 errors
