function fn() {
  let max = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (max < arguments[i]) {
      max = arguments[i];
    }
  }
  console.log(max);
  return max;
}

fn(5, 116, 8);