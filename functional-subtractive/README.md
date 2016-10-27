# Functional subtractive HOC

## Usage

    $ npm install
    $ npm run -s flow

## Results

Got these un-understood errors:

    Profile.js:22
     22: const HideableProfile:FunctionalComponent<$Diff<ProfileProps, HideableProps>> = hideable(Profile);
                                                         ^^^^^^^^^^^^ ProfileProps. Expected object instead of
     22: const HideableProfile:FunctionalComponent<$Diff<ProfileProps, HideableProps>> = hideable(Profile);
                                                         ^^^^^^^^^^^^ ProfileProps

    hideable.js:9
      9: function hideable<FirstOrderProps>(
         ^ some incompatible instantiation of `FirstOrderProps`. Expected object instead of
      9: function hideable<FirstOrderProps>(
         ^ some incompatible instantiation of `FirstOrderProps`

    hideable.js:9
      9: function hideable<FirstOrderProps>(
                           ^^^^^^^^^^^^^^^ FirstOrderProps. Expected object instead of
      9: function hideable<FirstOrderProps>(
                           ^^^^^^^^^^^^^^^ FirstOrderProps

    hideable.js:14
     14:     return <FirstOrderComponent {...propsWithoutHide} hide={true} />;
                                             ^^^^^^^^^^^^^^^^ spread of FirstOrderProps. Expected object instead of
     14:     return <FirstOrderComponent {...propsWithoutHide} hide={true} />;
                                             ^^^^^^^^^^^^^^^^ FirstOrderProps
