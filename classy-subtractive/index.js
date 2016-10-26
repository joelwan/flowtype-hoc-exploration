// @flow
// https://github.com/facebook/flow/issues/1601#issuecomment-220285858
import React from 'react';

type Props = {abacus: string, bear: number};

class Test extends React.Component<void, Props, void> {
  render () {
    return <div>Hello</div>
  }
                                                      }

declare function hoc<D, P, S, C: React$Component<D, P, S>>(
  component: Class<C>,
    config: any
  ): Class<React$Component<D, $Diff<P, {bear: number}>, S>>

const HOCTest = hoc(Test, {})

// This works correctly, it knows you don't need `bear`
const y1 = <HOCTest abacus='sd' />

// These are errors
const y2 = <HOCTest /> // missing prop
const y3 = <HOCTest abacus={12} /> // incorrect type for abacus
