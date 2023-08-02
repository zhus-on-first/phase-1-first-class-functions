function receivesAFunction(postWalkActivity) {
  postWalkActivity();
}

function returnsANamedFunction() {
  return function postWalkActivity() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
