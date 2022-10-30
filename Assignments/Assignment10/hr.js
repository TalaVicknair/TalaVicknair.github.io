let json = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
      {
        "firstName": "Sam",
        "department": "tech",
        "designation": "manager",
        "salary": 40000,
        "raiseEligible": true
      },
      {
        "firstName": "Mary",
        "department": "finance",
        "designation": "trainee",
        "salary": 18500,
        "raiseEligible": true
      },
      {
        "firstName": "Bill",
        "department": "HR",
        "designation": "executive",
        "salary": 21200,
        "raiseEligible": false
      }
    ]
  };

console.log(json); //print initial JSON for #1 and #2 to console

const newemployee = {
    "firstName": "Anna",
    "department": "tech",
    "designation": "executive",
    "salary": 25600,
    "raiseEligible": false
};

json["employees"].push(newemployee);  

console.log(json); //print updated JSON to console for #3
  
totSal = 0

for (let i = 0; i < 4; i++) { //this iterates through employee salaries, how can you use this to find the total salary for #4?
    totSal += json["employees"][i].salary;
    
}

console.log(`Total Salary: ${totSal}`);

function raise() {
    for (let i = 0; i < 4; i++) {
        let raiseEligible = json["employees"][i].raiseEligible;
        let salary = json["employees"][i].salary;
        if (json["employees"][i].raiseEligible === true) {
            salary *= 1.1;
            raiseEligible = false;
            console.log(salary, raiseEligible); //problem 5
        }
    }
}

raise();

for (let i = 0; i < 4; i++) {
    const workFromHomeTrue = {"wfh": true};
    const workFromHomeFalse = {"wfh": false};
    if (json["employees"][0] === "Anna" || "Sam") {
        json["employees"].push(workFromHomeTrue);
    }
    else {json["employees"].push(workFromHomeFalse);}
}
console.log(json); //problem 6