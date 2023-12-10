import { expect, test } from "vitest";
import {
  extractFirstAndLast,
  extractNumbers,
  replaceNumbers,
  sumUpEveryLine,
} from "../src/day_01";

test("day 01 first puzzle", () => {
  const firstLine = "1abc2";
  const secondLine = "pqr3stu8vwx";
  const thirdLine = "a1b2c3d4e5f";
  const fourthLine = "treb7uchet";

  expect(extractNumbers(firstLine)).toEqual([1, 2]);
  expect(extractNumbers(secondLine)).toEqual([3, 8]);
  expect(extractNumbers(thirdLine)).toEqual([1, 2, 3, 4, 5]);
  expect(extractNumbers(fourthLine)).toEqual([7]);

  expect(extractFirstAndLast(extractNumbers(firstLine))).toBe(12);
  expect(extractFirstAndLast(extractNumbers(secondLine))).toBe(38);
  expect(extractFirstAndLast(extractNumbers(thirdLine))).toBe(15);
  expect(extractFirstAndLast(extractNumbers(fourthLine))).toBe(77);

  expect(
    sumUpEveryLine([
      extractFirstAndLast(extractNumbers(firstLine)),
      extractFirstAndLast(extractNumbers(secondLine)),
      extractFirstAndLast(extractNumbers(thirdLine)),
      extractFirstAndLast(extractNumbers(fourthLine)),
    ])
  ).toBe(142);
});

test("day 01 second puzzle", () => {
  const firstLine = "two1nine";
  const secondLine = "eightwothree";
  const thirdLine = "abcone2threexyz";
  const fourthLine = "xtwone3four";
  const fifthLine = "4nineeightseven2";
  const sixthLine = "zoneight234";
  const seventhLine = "7pqrstsixteen";

  expect(extractNumbers(replaceNumbers(firstLine))).toEqual([2, 1, 9]);
  expect(extractNumbers(replaceNumbers(secondLine))).toEqual([8, 2, 3]);
  expect(extractNumbers(replaceNumbers(thirdLine))).toEqual([1, 2, 3]);
  expect(extractNumbers(replaceNumbers(fourthLine))).toEqual([2, 1, 3, 4]);
  expect(extractNumbers(replaceNumbers(fifthLine))).toEqual([4, 9, 8, 7, 2]);
  expect(extractNumbers(replaceNumbers(sixthLine))).toEqual([1, 8, 2, 3, 4]);
  expect(extractNumbers(replaceNumbers(seventhLine))).toEqual([7, 6]);

  expect(extractFirstAndLast(extractNumbers(replaceNumbers(firstLine)))).toBe(
    29
  );
  expect(extractFirstAndLast(extractNumbers(replaceNumbers(secondLine)))).toBe(
    83
  );
  expect(extractFirstAndLast(extractNumbers(replaceNumbers(thirdLine)))).toBe(
    13
  );
  expect(extractFirstAndLast(extractNumbers(replaceNumbers(fourthLine)))).toBe(
    24
  );
  expect(extractFirstAndLast(extractNumbers(replaceNumbers(fifthLine)))).toBe(
    42
  );
  expect(extractFirstAndLast(extractNumbers(replaceNumbers(sixthLine)))).toBe(
    14
  );
  expect(extractFirstAndLast(extractNumbers(replaceNumbers(seventhLine)))).toBe(
    76
  );

  expect(
    sumUpEveryLine([
      extractFirstAndLast(extractNumbers(replaceNumbers(firstLine))),
      extractFirstAndLast(extractNumbers(replaceNumbers(secondLine))),
      extractFirstAndLast(extractNumbers(replaceNumbers(thirdLine))),
      extractFirstAndLast(extractNumbers(replaceNumbers(fourthLine))),
      extractFirstAndLast(extractNumbers(replaceNumbers(fifthLine))),
      extractFirstAndLast(extractNumbers(replaceNumbers(sixthLine))),
      extractFirstAndLast(extractNumbers(replaceNumbers(seventhLine))),
    ])
  ).toBe(281);
});
