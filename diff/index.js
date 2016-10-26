// @flow

type A = {
  id: number,
  name: string,
  description: string,
};

type B = {
  id: number,
};

type C = $Diff<A, B>;

function acceptC(input:C) {
  console.log(input);
}

const c = {
  name: "asdf",
};

acceptC(c);
