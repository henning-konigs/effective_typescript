// Function overload
function test(a: number, b: number): number;
function test(a: string, b: string): string;

function test(a: any, b: any) {
  return a + b;
}

console.log(test(4, 3), test("a", "b"));
// test(true,false) Isn't possible
