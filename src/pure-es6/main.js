import answer from "the-answer";
import { of } from "rxjs";
import { map } from "rxjs/operators";

function main() {
  console.log("the answer is " + answer);
  const src = of([1, 2, 3]);
  const res = src.pipe(map(item => item.map(num => num * num)));
  res.subscribe(console.log);
}

main();
