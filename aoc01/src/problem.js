const fs = require("fs");
const path = require("path");
const nReadlines = require("n-readlines");

const _getMostCaloriedElf = (allElves) => {
  return allElves.reduce(
    (maxElf, elf, currentElf) => {
      const cal = elf.reduce((totalCalories, calories) => {
        return Number(totalCalories) + Number(calories);
      }, 0);
      if (cal > maxElf.totalCalories) {
        maxElf = {
          elf: currentElf + 1,
          totalCalories: cal,
        };
      }
      return maxElf;
    },
    { elf: 0, totalCalories: 0 }
  );
};

module.exports = {
  loadFile: (f) => {
    try {
      const thepath = path.resolve(`${f}`);
      const lines = new nReadlines(thepath);
      let result = [];
      while ((line = lines.next())) {
        result.push(line.toString());
      }
      return result;
    } catch (err) {
      return err;
    }
  },
  generateElves: (a) => {
    let elves = [];
    let elf = [];
    a.forEach((element, idx, array) => {
      if (!!element) {
        elf.push(element);
        if (idx === array.length - 1) {
          if (elf.length > 0) {
            elves.push([...elf]);
            elf = [];
          }
        }
      } else {
        if (elf.length > 0) {
          elves.push([...elf]);
          elf = [];
        }
      }
    });
    return elves;
  },
  getMostCaloriedElf: (elves) => _getMostCaloriedElf(elves),
  getTopX: (allElves, topN) => {
    let topElves = [];
    let remainingElves = [...allElves];
    for (let i = 0; i < topN; i++) {
      const topElf = _getMostCaloriedElf(remainingElves);
      topElves.push({ ...topElf });
      remainingElves = remainingElves.filter((item, idx) => {
        return idx !== topElf.elf - 1;
      });
    }
    return topElves;
  },
  sumCalories: (elves) => {
    return elves.reduce((totalCalories, elf) => {
      return (totalCalories += elf.totalCalories);
    }, 0);
  },
};
