# flowtype-hoc-exploration
A repository to play around with flowtype and higher-order react components.

## Usage

    $ npm install
    $ npm run -s flow

## Results

Behaves as expected when everything is in one file:

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

When using LoggedProfile from a different file, I get an error I don't understand:

    $ npm run -s flow
    Profile.js:22
     22: const LoggedProfile = logOnRender(Profile);
                               ^^^^^^^^^^^^^^^^^^^^ type parameter `FirstOrderProps` of function call. Missing annotation


    Found 1 error

Separating logOnRender into its own file gives me 0 errors which is not expected:

    $ npm run -s flow
    No errors!
