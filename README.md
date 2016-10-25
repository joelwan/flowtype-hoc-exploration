# flowtype-hoc-exploration
A repository to play around with flowtype and higher-order react components.

## Usage

    $ npm install
    $ npm run -s flow

## Results

Behaves as expected when everything is in one file.

    $ npm run -s flow
    Profile.js:25
     25:   <LoggedProfile
           ^ React element `LoggedProfile`
     26:     username={1234}
                       ^^^^ number. This type is incompatible with
      6: function Profile(props:{username:string, onEdit:Function}) {
                                          ^^^^^^ string

    Profile.js:25
     25:   <LoggedProfile
           ^ React element `LoggedProfile`
     27:     onEdit={"not implemented yet"}
                     ^^^^^^^^^^^^^^^^^^^^^ string. This type is incompatible with
      6: function Profile(props:{username:string, onEdit:Function}) {
                                                         ^^^^^^^^ function type


    Found 2 errors
