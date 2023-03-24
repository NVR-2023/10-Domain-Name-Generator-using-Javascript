import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// General comments
// 1. Offered two distinct solutions to the exercise
// 2. Solved the "feeling confident " Challenge without using any native JavaScript's string moethods"
// 3. Experimented wuh conditional Console.logging, specifically, with CSS applied to consoel.log

// Initializing data
const pronoun = ["the", "our"];
const adjective = ["great", "funny", "profitable"];
const noun = ["jogger", "racoon", "sitcom", "churches", "bio"];
const extension = [".com", ".net", ".us", ".io", ".now", ".es", ".pt"];
const dataSet = [pronoun, adjective, noun, extension];

//Two main functions:
// Solution #1: All-purpose function.
// Takes in any matrix, i. e., array of arrays,
// and outputs all possible combinations of its elements
const getAllPossibleCombinations = set => {
  let allPossibleCombinations = [[]];
  for (let i = 0; i < set.length; i++) {
    const currentSubArray = set[i];
    const temporaryArray = [];
    for (let j = 0; j < currentSubArray.length; j++) {
      for (let k = 0; k < allPossibleCombinations.length; k++) {
        const newCombination = `${allPossibleCombinations[k]}${currentSubArray[j]}`;
        temporaryArray.push(newCombination);
      }
    }
    allPossibleCombinations = temporaryArray;
  }
  return allPossibleCombinations;
};

// Solution #2: Specialized function.
// Returns all possible domain names with puns.
const getAllPossibleCombinationsWithPuns = () => {
  // Subfunction #1: removes dot from any given extension
  const removeDotFromExtension = extensionName => {
    let dotLessExtension = "";
    for (let i = 1; i < extensionName.length; i++) {
      dotLessExtension += extensionName[i];
    }
    return dotLessExtension;
  };
  // Subfunction #2: Checks if domain name already ends with given domain extension
  const isExtensionInName = (domainName, extensionName) => {
    let dotLessExtension = removeDotFromExtension(extensionName);
    for (
      let i = domainName.length - dotLessExtension.length, j = 0;
      i < domainName.length;
      i++, j++
    ) {
      if (domainName[i] !== dotLessExtension[j]) return false;
    }
    return true;
  };
  // Subfunction #3: Renders pun
  const renderPun = (domainName, extensionName) => {
    let punDomainName = "Pun: "; // To identify Puns when console.logging
    let dotLessExtension = removeDotFromExtension(extensionName);
    for (let i = 0; i < domainName.length - dotLessExtension.length; i++) {
      punDomainName += domainName[i];
    }
    punDomainName += "." + dotLessExtension;
    return punDomainName;
  };
  //Main body of Function
  let allPossibleCombinationsWithPuns = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let currentDomainName = pronoun[i] + adjective[j] + noun[k];
        for (let l = 0; l < extension.length; l++) {
          if (isExtensionInName(currentDomainName, extension[l])) {
            allPossibleCombinationsWithPuns.push(
              renderPun(currentDomainName, extension[l])
            );
          } else
            allPossibleCombinationsWithPuns.push(
              currentDomainName + extension[l]
            );
        }
      }
    }
  }
  return allPossibleCombinationsWithPuns;
};

// Prints function #1 - Simple Results
let simpleResults = getAllPossibleCombinations(dataSet);
console.log("Solution #1 of 2  - Universal Function");
for (let i = 0; i < simpleResults.length; i++) {
  console.log(`${i + 1}   ${simpleResults[i]}`);
}

// Prints function #2 - Results with Puns
let resultsWithPuns = getAllPossibleCombinationsWithPuns();
console.log("%cSolution #2 of 2  -  Feeling Confident Challenge", `color: red`);
for (let i = 0; i < resultsWithPuns.length; i++) {
  if (resultsWithPuns[i][0] === "P") {
    console.log(`%c ${i + 1}   ${resultsWithPuns[i]}`, `color: red`);
  } else console.log(`${i + 1}   ${resultsWithPuns[i]}`);
}
