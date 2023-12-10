import * as fs from "fs";

export const transfromDocToData = (file: string): string[] => {
  const data: Array<string> = file.trim().split("\n");
  return data;
};

export const extractNumbers = (str: string): number[] => {
  const numbers: number[] = [];
  for (const char of str) {
    if (char >= "0" && char <= "9") {
      numbers.push(parseInt(char));
    }
  }
  return numbers;
};

export const extractFirstAndLast = (numbers: number[]): number => {
  const first = numbers[0];
  const last = numbers[numbers.length - 1];

  return parseInt(`${first}${last}`);
};

export const sumUpEveryLine = (numbers: number[]): number => {
  let answer: number = 0;
  numbers.forEach((n: number) => {
    answer += n;
  });

  return answer;
};

export const replaceNumbers = (str: string): string => {
  const wordList: { [key: string]: string } = {
    one: "one1one",
    two: "two2two",
    three: "three3three",
    four: "four4four",
    five: "five5five",
    six: "six6six",
    seven: "seven7seven",
    eight: "eight8eight",
    nine: "nine9nine",
  };
  for (let num of Object.keys(wordList)) {
    str = str.replaceAll(num, wordList[num]);
  }
  return str;
};

const inputs: string = fs.readFileSync("./inputs/personnal/day_01.txt", "utf8");
const inputsArray: string[] = transfromDocToData(inputs);

const parseInputs = (inputs: string[], puzzle: string): number => {
  const getNumbers = (line: string) =>
    extractFirstAndLast(
      puzzle === "first"
        ? extractNumbers(line)
        : extractNumbers(replaceNumbers(line))
    );

  return sumUpEveryLine(inputs.map(getNumbers));
};

console.log("first : ", parseInputs(inputsArray, "first"));
console.log("second : ", parseInputs(inputsArray, "second"));
