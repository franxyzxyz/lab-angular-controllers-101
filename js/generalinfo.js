app.controller('GeneralInfoController', GeneralInfoController);

function GeneralInfoController(){
  this.hours = {
    Monday: "10:00 a.m. - 5:30 p.m.",
    Tuesday: "10:00 a.m. - 5:30 p.m.",
    Wednesday: "10:00 a.m. - 5:30 p.m.",
    Thursday: "10:00 a.m. - 5:30 p.m.",
    Friday: "10:00 a.m. - 9:00 p.m.",
    Saturday: "10:00 a.m. - 9:00 p.m.",
    Sunday: "10:00 a.m. - 9:00 p.m."
  };
  this.admission = {
    adults: 25,
    seniors: 17,
    students: 12
  }
  return this
}