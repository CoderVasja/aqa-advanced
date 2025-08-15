let averageGrade = 91;

switch (true) {
    case averageGrade < 60:
        console.log("You failed");
        break;
    case averageGrade >= 60 && averageGrade < 70:
        console.log("You got a D");
        break;
    case averageGrade >= 70 && averageGrade < 80:
        console.log("You got a C");
        break;
    case averageGrade >= 80 && averageGrade < 90:
        console.log("You got a B");
        break;
    case averageGrade >= 90 && averageGrade <= 100:
        console.log("You got an A");
        break;

}
