function Student(name, roll_no, className, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
    this.printReportCard = function () {
      console.log("+--------------------+");
      console.log('|     REPORT CARD    |');
      console.log("+--------------------+");
      console.log(`| Name    -  ${this.name}   |`);
      console.log(`| Rollno  -  ${this.roll_no}       |`);
      console.log(`| Class   - ${this.class}      |`);
      console.log(`| Section - ${this.section}        |`);
      console.log(`| Science - ${this.marks_of_5_subjects.science}       |`);
      console.log(`| S.Sc    - ${this.marks_of_5_subjects.social_science}       |`);
      console.log(`| Maths   - ${this.marks_of_5_subjects.maths}       |`);
      console.log(`| English - ${this.marks_of_5_subjects.english}       |`);
      console.log(`| Hindi - ${this.marks_of_5_subjects.hindi}         |`);
      console.log(`| Prectage -${prectage(this.marks_of_5_subjects)}    |`);
      console.log("+--------------------+");
    }
    this.top3sub = function(){
      top3subjects(this.marks_of_5_subjects);
      }
  }
  
  
  // top get 3 subjects
  
  
  function top3subjects(marks) {
    console.log("+--------------------+");
    console.log('|   Top 3 Subjects   |');
    console.log("+--------------------+");
  
    const sortedSubjects = Object.keys(marks).sort(function (a, b) {
      return marks[b] - marks[a];
    });
  
    for (let i = 0; i < 3; i++) {
      const subject = sortedSubjects[i];
      const subjectMarks = marks[subject];
      console.log(`| ${i + 1}. ${subject} - ${subjectMarks}    |`);
    }
  }
  // end 
  
  
  
  // funtion to get persentage for in loop 
  
  
  function prectage (obj){
    let totalMarks = 0;
    let getedMarks = 0;
  
    for (let subject in obj) {
      if (obj.hasOwnProperty(subject)) {
        totalMarks += 100;
        getedMarks += obj[subject];
      }
    }
  
    let percentage = (getedMarks / totalMarks) * 100;
  
    return percentage.toFixed(2);
  }
  
  // top 3 subjectdata getting funtuion 
  
  
  
  // data of student add In objs
  
  
   let Student1 = new Student("bhanu","3","2nd","A",{
      science: 72,
      maths: 75,
      social_science: 79,
      english: 80,
      hindi: 67
  });
  let student2 = new Student("ankit", "2", "2nd", "A", {
    science: 77,
    maths: 45,
    social_science: 47,
    english: 75,
    hindi: 74
  });
  
  
  Student1.printReportCard()
  Student1.top3sub()
  