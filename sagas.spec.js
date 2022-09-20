import { incrementAsync, delay } from "./saga";
import { describe, expect, test } from "@jest/globals";
import { put, call } from "redux-saga/effects";


describe('incrementAsync Saga test', ()=> {
  const gen = incrementAsync();
  
  test("incrementAsync Saga must call delay(1000)", ()=> {
    expect(gen.next().value).toEqual(call(delay, 1000));
  })

  test("incrementAsync Saga must dispatch an INCREMENT action", () => {
    expect(gen.next().value).toEqual(put({ type: "INCREMENT" }));
  });

  test("incrementAsync Saga must be done", () => {
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
})

// describe("sum module", () => {
//   test("adds 1 + 2 to equal 3", () => {
//     expect(1+2).toBe(3);
//   });
// });

// test('incrementAsync Saga test', (assert) => {
//   const gen = incrementAsync()
  
//   assert.deepEqual(
//     gen.next().value,
//     call(delay, 1000),
//     "incrementAsync Saga must call delay(1000)"
//   );

//   assert.deepEqual(
//     gen.next().value,
//     put({ type: "INCREMENT" }),
//     "incrementAsync Saga must dispatch an INCREMENT action"
//   );

//   assert.deepEqual(
//     gen.next(),
//     { done: true, value: undefined },
//     "incrementAsync Saga must be done"
//   );

//   assert.end()
// })
