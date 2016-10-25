# flowtype-hoc-exploration
A repository to play around with flowtype and higher-order react components.

## Usage

    $ npm install
    $ npm run -s flow

## Results

When using LoggedProfile from a different file, I get an error I don't understand:

    $ npm run -s flow
    Profile.js:22
     22: const LoggedProfile = logOnRender(Profile);
                               ^^^^^^^^^^^^^^^^^^^^ type parameter `FirstOrderProps` of function call. Missing annotation


    Found 1 error
