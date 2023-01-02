const p = require("../problem");

const result = [
  "1000",
  "2000",
  "3000",
  "",
  "4000",
  "",
  "5000",
  "6000",
  "",
  "7000",
  "8000",
  "9000",
  "",
  "10000",
];

describe("AOC Day 1", () => {
  it("reads in data file", () => {
    expect(
      p.loadFile("/home/trevornightingale/src/aoc01/src/data/test.txt")
    ).toEqual(result);
  });
  it("creates ordered elves", () => {
    expect(p.generateElves(result).length).toEqual(5);
  });
  it("get elf with most calories", () => {
    const elves = p.generateElves(result);
    const elf = p.getMostCaloriedElf(elves);
    expect(elf.elf).toEqual(4);
    expect(elf.totalCalories).toEqual(24000);
  });
  it("get top 3 elves", () => {
    const elves = p.generateElves(result);
    const topElves = p.getTopX(elves, 3);
    expect(topElves.length).toEqual(3);
    console.log(topElves);
  });
  it("top x elves", () => {
    const elves = p.generateElves(result);
    const topElves = p.getTopX(elves, 3);
    expect(topElves.length).toEqual(3);
    console.log(topElves);
  });
  it("sum elf calories", () => {
    const calories = p.sumCalories([
      { elf: 4, totalCalories: 24000 },
      { elf: 3, totalCalories: 11000 },
      { elf: 3, totalCalories: 10000 },
    ]);
    expect(calories).toEqual(45000);
  });
});

describe("Solve part one", () => {
  it("shows the fattest elf", () => {
    const rawdata = p.loadFile(
      "/home/trevornightingale/src/aoc01/src/data/data.txt"
    );
    expect(rawdata.length).toEqual(2237);
    const elves = p.generateElves(rawdata);
    const elf = p.getMostCaloriedElf(elves);
    console.log("Elf with most calories", elf);
    const top3Elves = p.getTopX(elves, 3);
    expect(top3Elves.length).toEqual(3);
    const calorieTotal = p.sumCalories(top3Elves);
    console.log("Top 3 total calories: ", calorieTotal);
  });
});
