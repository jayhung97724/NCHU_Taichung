$('.page.dimmer').dimmer('toggle');
//global variables
var monthEl = $(".c-main");
var dataCel = $(".c-cal__cel");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate().toString().padStart(2, "0");
var year = dateObj.getUTCFullYear();
var monthText = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var indexMonth = month;
var todayBtn = $(".c-today__btn");
var addBtn = $(".js-event__add");
var saveBtn = $(".js-event__save");
var closeBtn = $(".js-event__close");
var winCreator = $(".js-event__creator");
var inputDate = $(this).data();
today = year + "-" + month + "-" + day;

var eventList = [];

// ------ functions control -------

//button of the current day
todayBtn.on("click", function () {
  if (month < indexMonth) {
    var step = indexMonth % month;
    movePrev(step, true);
  } else if (month > indexMonth) {
    var step = month - indexMonth;
    moveNext(step, true);
  }
});

//higlight the cel of current day
dataCel.each(function () {
  if ($(this).data("day") === today) {
    $(this).addClass("isToday");
    fillEventSidebar($(this));
  }
});


function filterEventByDate(date) {
  return eventList.filter((event) => {
    return event.date == date;
  });
}
// $.getJSON("./data/eventDetail.json", (file) => {
//   eventList = file;
//   findUniqueDateNaddClass();
//   // console.log(eventList[1]);
// });
eventList = [
  {
    "date": "2018-09-29",
    "work": "wiki",
    "note": "Main Page Navigation bar template finished.",
    "image": ""
  },
  {
    "date": "2018-10-01",
    "work": "wiki",
    "note": "Sticky side bar template finished.",
    "image": "http://2018.igem.org/wiki/images/6/65/T--NCHU_Taichung--example.png"
  },
  {
    "date": "2018-10-03",
    "work": "wiki",
    "note": "Paragraph page design finished.",
    "image": ""
  },
  {
    "date": "2018-10-05",
    "work": "wiki",
    "note": "Member page design completed, start collecting details.",
    "image": ""
  },
  {
    "date": "2018-09-26",
    "work": "wiki",
    "note": "Discussion on main web architecture.",
    "image": ""
  },
  {
    "date": "2018-07-06",
    "work": "phyto",
    "note": "test the endophytic of PsJN",
    "image": ""
  },
  {
    "date": "2018-07-07",
    "work": "phyto",
    "note": "test the endophytic of PsJN",
    "image": ""
  },
  {
    "date": "2018-07-08",
    "work": "phyto",
    "note": "test the endophytic of PsJN",
    "image": ""
  },
  {
    "date": "2018-07-09",
    "work": "phyto",
    "note": "test the endophytic of PsJN",
    "image": ""
  },
  {
    "date": "2018-07-10",
    "work": "phyto",
    "note": "test the endophytic of PsJN",
    "image": ""
  },
  {
    "date": "2018-07-14",
    "work": "phyto",
    "note": "UPLC instrument set up",
    "image": ""
  },
  {
    "date": "2018-07-15",
    "work": "phyto",
    "note": "UPLC TCDD standard curve",
    "image": ""
  },
  {
    "date": "2018-07-16",
    "work": "phyto",
    "note": "pretest of planting Arabidopsis thaliana(WT) into solid 1/2MS medium",
    "image": ""
  },
  {
    "date": "2018-07-23",
    "work": "phyto",
    "note": "plant Arabidopsis thaliana(WT) 、start to plant Vetiver in greenhouse",
    "image": ""
  },
  {
    "date": "2018-07-25",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-07-26",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-07-27",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-07-28",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-07-29",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-07-30",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-07-31",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-08-01",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-08-02",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-08-03",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-08-04",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-08-05",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-08-06",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-08-07",
    "work": "phyto",
    "note": "pretest of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-08-08",
    "work": "phyto",
    "note": "change method of extract TCDD form solid MS medium",
    "image": ""
  },
  {
    "date": "2018-08-10",
    "work": "phyto",
    "note": "plant Arabidopsis thaliana (WT)",
    "image": ""
  },
  {
    "date": "2018-08-13",
    "work": "phyto",
    "note": "seeds germination",
    "image": ""
  },
  {
    "date": "2018-08-14",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-15",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-16",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-17",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-18",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-19",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-20",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-21",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-22",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-23",
    "work": "phyto",
    "note": "collect the sample of Vetiver soil(day 0)",
    "image": ""
  },
  {
    "date": "2018-08-24",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-25",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-26",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-27",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-28",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-08-29",
    "work": "phyto",
    "note": "collect the sample of Vetiver soil(day 6)",
    "image": ""
  },
  {
    "date": "2018-08-31",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-09-01",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-09-02",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-09-03",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-09-04",
    "work": "phyto",
    "note": "collect the sample of Vetiver soil(day 12)",
    "image": ""
  },
  {
    "date": "2018-09-05",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-09-06",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-09-07",
    "work": "phyto",
    "note": "try to solve UPLC problem",
    "image": ""
  },
  {
    "date": "2018-09-08",
    "work": "phyto",
    "note": "grow PsJN、869T2",
    "image": ""
  },
  {
    "date": "2018-09-09",
    "work": "phyto",
    "note": "inoculation of Arabidopsis thaliana (WT) with 869T2 and PSJN with and with out TCDD",
    "image": ""
  },
  {
    "date": "2018-09-10",
    "work": "phyto",
    "note": "collect the sample of Vetiver soil(day 18)",
    "image": ""
  },
  {
    "date": "2018-09-13",
    "work": "phyto",
    "note": "wash all vial",
    "image": ""
  },
  {
    "date": "2018-09-16",
    "work": "phyto",
    "note": "collect the sample of Vetiver soil(day 24)",
    "image": ""
  },
  {
    "date": "2018-09-17",
    "work": "phyto",
    "note": "plant Arabidopsis thaliana (WT)",
    "image": ""
  },
  {
    "date": "2018-09-18",
    "work": "phyto",
    "note": "prepared solid MS medium TCDD",
    "image": ""
  },
  {
    "date": "2018-09-20",
    "work": "phyto",
    "note": "grow PsJN、869T2",
    "image": ""
  },
  {
    "date": "2018-09-21",
    "work": "phyto",
    "note": "collect the sample of Vetiver soil(day 30)",
    "image": ""
  },
  {
    "date": "2018-09-24",
    "work": "phyto",
    "note": "take the picture about phenotype of Vetiver after planting 30 days",
    "image": ""
  },
  {
    "date": "2018-09-25",
    "work": "phyto",
    "note": "do the Inoculation of Arabidopsis thaliana (WT) with 869T2 and PsJN again",
    "image": ""
  },
  {
    "date": "2018-10-05",
    "work": "phyto",
    "note": "collect samples of Arabidopsis thaliana (WT)solid MS agar",
    "image": ""
  },
  {
    "date": "2018-10-07",
    "work": "phyto",
    "note": "take the Arabidopsis thaliana (WT) sample pictures",
    "image": ""
  },
  {
    "date": "2018-10-10",
    "work": "phyto",
    "note": "collect sample of Arabidopsis thaliana (WT) solid MS agar",
    "image": ""
  },
  {
    "date": "2018-10-12",
    "work": "phyto",
    "note": "take the Arabidopsis thaliana (WT) sample pictures",
    "image": ""
  },
  {
    "date": "2018-09-06",
    "work": "toxicology",
    "note": "prepare different concentrations of TCDD solution",
    "image": ""
  },
  {
    "date": "2018-09-11",
    "work": "toxicology",
    "note": "culture Hep G2",
    "image": ""
  },
  {
    "date": "2018-09-14",
    "work": "toxicology",
    "note": "subculture Hep G2",
    "image": ""
  },
  {
    "date": "2018-09-17",
    "work": "toxicology",
    "note": "replace medium",
    "image": ""
  },
  {
    "date": "2018-09-20",
    "work": "toxicology",
    "note": "subculture Hep G2 and cell culture in 96-well plate (10000 cells per well)",
    "image": ""
  },
  {
    "date": "2018-09-21",
    "work": "toxicology",
    "note": "add TCDD solution in each well",
    "image": ""
  },
  {
    "date": "2018-09-22",
    "work": "toxicology",
    "note": "subculture Hep G2 and MTT assay",
    "image": ""
  },
  {
    "date": "2018-09-24",
    "work": "toxicology",
    "note": "subculture Hep G2 and cell culture in 96-well plate (10000 and 15000 cells per well)",
    "image": ""
  },
  {
    "date": "2018-09-25",
    "work": "toxicology",
    "note": "add TCDD solution in each well",
    "image": ""
  },
  {
    "date": "2018-09-26",
    "work": "toxicology",
    "note": "subculture Hep G2 and MTT assay",
    "image": ""
  },
  {
    "date": "2018-09-27",
    "work": "toxicology",
    "note": "replace medium",
    "image": ""
  },
  {
    "date": "2018-09-28",
    "work": "toxicology",
    "note": "replace medium",
    "image": ""
  },
  {
    "date": "2018-09-29",
    "work": "toxicology",
    "note": "cell pollution(we have no cell :-<)",
    "image": ""
  },
  {
    "date": "2018-10-01",
    "work": "toxicology",
    "note": "reculture Hep G2",
    "image": ""
  },
  {
    "date": "2018-10-03",
    "work": "toxicology",
    "note": "replace medium",
    "image": ""
  },
  {
    "date": "2018-10-04",
    "work": "toxicology",
    "note": "cell pollution(we have no cell again :-<)",
    "image": ""
  },
  {
    "date": "2018-10-05",
    "work": "toxicology",
    "note": "reculture Hep G2",
    "image": ""
  },
  {
    "date": "2018-10-06",
    "work": "toxicology",
    "note": "replace medium",
    "image": ""
  },
  {
    "date": "2018-10-09",
    "work": "toxicology",
    "note": "subculture Hep G2",
    "image": ""
  },
  {
    "date": "2018-10-10",
    "work": "toxicology",
    "note": "subculture Hep G2 and cell culture in 96-well plate (15000 cells per well)",
    "image": ""
  },
  {
    "date": "2018-10-11",
    "work": "toxicology",
    "note": "prepare different concentrations of HAD solution and culture with TCDD to add in each well",
    "image": ""
  },
  {
    "date": "2018-10-11",
    "work": "toxicology",
    "note": "subculture Hep G2",
    "image": ""
  },
  {
    "date": "2018-10-12",
    "work": "toxicology",
    "note": "MTT assay and replace medium",
    "image": ""
  },
  {
    "date": "2018-10-15",
    "work": "toxicology",
    "note": "cell culture in 96-well plate (15000 cells per well)",
    "image": ""
  },
  {
    "date": "2018-10-15",
    "work": "toxicology",
    "note": "different concentrations of HAD and TCDD solution and add in each well",
    "image": ""
  },
  {
    "date": "2018-10-16",
    "work": "toxicology",
    "note": "MTT assay and replace medium",
    "image": ""
  },
  {
    "date": "2017-07-17",
    "work": "human practice",
    "note": "2017 iGEM Taiwan Conference",
    "image": ""
  },
  {
    "date": "2017-07-31",
    "work": "human practice",
    "note": "2017 5th iGEM Asia-Pacific Conference",
    "image": ""
  },
  {
    "date": "2017-08-01",
    "work": "human practice",
    "note": "2017 5th iGEM Asia-Pacific Conference",
    "image": ""
  },
  {
    "date": "2017-08-02",
    "work": "human practice",
    "note": "2017 5th iGEM Asia-Pacific Conference",
    "image": ""
  },
  {
    "date": "2017-08-03",
    "work": "human practice",
    "note": "2017 5th iGEM Asia-Pacific Conference",
    "image": ""
  },
  {
    "date": "2017-09-11",
    "work": "human practice",
    "note": "School Club Fair",
    "image": ""
  },
  {
    "date": "2017-09-16",
    "work": "human practice",
    "note": "iGEM NYMU-Taipei 10 Years Exhibition",
    "image": ""
  },
  {
    "date": "2018-03-16",
    "work": "human practice",
    "note": "CSMU iGEM Open House",
    "image": ""
  },
  {
    "date": "2018-04-02",
    "work": "human practice",
    "note": "iGEM Team Communication(Mindao High School)",
    "image": ""
  },
  {
    "date": "2018-04-02",
    "work": "human practice",
    "note": "Visit Vietnam",
    "image": ""
  },
  {
    "date": "2018-04-03",
    "work": "human practice",
    "note": "Visit Vietnam",
    "image": ""
  },
  {
    "date": "2018-04-04",
    "work": "human practice",
    "note": "Visit Vietnam",
    "image": ""
  },
  {
    "date": "2018-04-05",
    "work": "human practice",
    "note": "Visit Vietnam",
    "image": ""
  },
  {
    "date": "2018-05-25",
    "work": "human practice",
    "note": "Visit Agricultural Chemicals and Toxic Substances Research Institute",
    "image": ""
  },
  {
    "date": "2018-06-15",
    "work": "human practice",
    "note": "iGEM Team Communication(Stockholm iGEM)",
    "image": ""
  },
  {
    "date": "2018-06-30",
    "work": "human practice",
    "note": "Food Evolution Forum",
    "image": ""
  },
  {
    "date": "2018-07-08",
    "work": "human practice",
    "note": "Huazhong iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-07-09",
    "work": "human practice",
    "note": "Huazhong iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-07-10",
    "work": "human practice",
    "note": "Huazhong iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-07-11",
    "work": "human practice",
    "note": "Huazhong iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-07-12",
    "work": "human practice",
    "note": "Huazhong iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-07-13",
    "work": "human practice",
    "note": "Huazhong iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-07-14",
    "work": "human practice",
    "note": "Huazhong iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-07-15",
    "work": "human practice",
    "note": "Huazhong iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-07-20",
    "work": "human practice",
    "note": "Visit EPA Environmental Inspection",
    "image": ""
  },
  {
    "date": "2018-07-20",
    "work": "human practice",
    "note": "European Meet Up iGEM 2018",
    "image": ""
  },
  {
    "date": "2018-07-21",
    "work": "human practice",
    "note": "European Meet Up iGEM 2018",
    "image": ""
  },
  {
    "date": "2018-07-22",
    "work": "human practice",
    "note": "European Meet Up iGEM 2018",
    "image": ""
  },
  {
    "date": "2018-07-30",
    "work": "human practice",
    "note": "2018 Asia-Pacific iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-07-31",
    "work": "human practice",
    "note": "2018 Asia-Pacific iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-08-01",
    "work": "human practice",
    "note": "iGEM Team Communication(Hebrew iGEM)",
    "image": ""
  },
  {
    "date": "2018-08-01",
    "work": "human practice",
    "note": "2018 Asia-Pacific iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-08-02",
    "work": "human practice",
    "note": "2018 Asia-Pacific iGEM Conference",
    "image": ""
  },
  {
    "date": "2018-08-02",
    "work": "human practice",
    "note": "Youth Education (Dong Yuan Elementary School )",
    "image": ""
  },
  {
    "date": "2018-08-28",
    "work": "human practice",
    "note": "The Fifth Conference of China iGEMer Community (CCiC)",
    "image": ""
  },
  {
    "date": "2018-08-29",
    "work": "human practice",
    "note": "The Fifth Conference of China iGEMer Community (CCiC)",
    "image": ""
  },
  {
    "date": "2018-08-30",
    "work": "human practice",
    "note": "The Fifth Conference of China iGEMer Community (CCiC)",
    "image": ""
  },
  {
    "date": "2018-08-31",
    "work": "human practice",
    "note": "The Fifth Conference of China iGEMer Community (CCiC)",
    "image": ""
  },
  {
    "date": "2018-09-03",
    "work": "human practice",
    "note": "Visit Houli Refuse Incinerator Plant",
    "image": ""
  },
  {
    "date": "2018-09-28",
    "work": "human practice",
    "note": "Visit China Petrochemical Development Corporation",
    "image": ""
  },
  {
    "date": "2018-10-12",
    "work": "human practice",
    "note": "Genetic-modified-microorganism on Board",
    "image": ""
  },
  {
    "date": "2018-07-05",
    "work": "Interlab",
    "note": "OD600 Reference point - LUDOX Protocol and Particle Standard Curve - Microsphere Protocol and Fluorescence standard curve - Fluorescein Protocol",
    "image": ""
  },
  {
    "date": "2018-07-06",
    "work": "Interlab",
    "note": "Cell measurement protocol",
    "image": ""
  },
  {
    "date": "2018-07-07",
    "work": "Interlab",
    "note": "pick colonies and Grow the cells overnight",
    "image": ""
  },
  {
    "date": "2018-07-08",
    "work": "Interlab",
    "note": "Cell growth, sampling, and assay",
    "image": ""
  },
  {
    "date": "2018-07-09",
    "work": "Interlab",
    "note": "Colony Forming Units per 0.1 OD600 E. coli cultures",
    "image": ""
  },
  {
    "date": "2018-08-05",
    "work": "Interlab",
    "note": "OD600 Reference point - LUDOX Protocol and Particle Standard Curve - Microsphere Protocol and Fluorescence standard curve - Fluorescein Protocol",
    "image": ""
  },
  {
    "date": "2018-08-06",
    "work": "Interlab",
    "note": "Cell measurement protocol",
    "image": ""
  },
  {
    "date": "2018-08-07",
    "work": "Interlab",
    "note": "pick colonies and Grow the cells overnight",
    "image": ""
  },
  {
    "date": "2018-08-08",
    "work": "Interlab",
    "note": "Cell growth, sampling, and assay",
    "image": ""
  },
  {
    "date": "2018-08-09",
    "work": "Interlab",
    "note": "Colony Forming Units per 0.1 OD600 E. coli cultures",
    "image": ""
  },
  {
    "date": "2018-06-29",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-07-22",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-08-11",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-08-18",
    "work": "micro",
    "note": "OD machine testing",
    "image": ""
  },
  {
    "date": "2018-08-21",
    "work": "micro",
    "note": "Medium Testing, Growth Curve Testing",
    "image": ""
  },
  {
    "date": "2018-08-23",
    "work": "micro",
    "note": "Growth Curve Testing",
    "image": ""
  },
  {
    "date": "2018-08-23",
    "work": "micro",
    "note": "Transform PsJN",
    "image": ""
  },
  {
    "date": "2018-08-24",
    "work": "micro",
    "note": "Transforming",
    "image": ""
  },
  {
    "date": "2018-08-24",
    "work": "micro",
    "note": "Colony PCR",
    "image": ""
  },
  {
    "date": "2018-08-25",
    "work": "micro",
    "note": "Plasmid PCR",
    "image": ""
  },
  {
    "date": "2018-08-26",
    "work": "micro",
    "note": "Plasmid PCR",
    "image": ""
  },
  {
    "date": "2018-08-27",
    "work": "micro",
    "note": "Medium Testing, Growth Curve Testing",
    "image": ""
  },
  {
    "date": "2018-08-29",
    "work": "micro",
    "note": "restriction enzyme",
    "image": ""
  },
  {
    "date": "2018-08-29",
    "work": "micro",
    "note": "Transform PsJN, PCR Clean Up, Restriction Enzyme Digestion",
    "image": ""
  },
  {
    "date": "2018-08-30",
    "work": "micro",
    "note": "PCR",
    "image": ""
  },
  {
    "date": "2018-08-30",
    "work": "micro",
    "note": "Clolony PCR, E. coli Transform, Ligation",
    "image": ""
  },
  {
    "date": "2018-08-31",
    "work": "micro",
    "note": "Growth Curve Testing",
    "image": ""
  },
  {
    "date": "2018-08-31",
    "work": "micro",
    "note": "Plasmid PCR, Colony PCR",
    "image": ""
  },
  {
    "date": "2018-09-01",
    "work": "micro",
    "note": "Plasmid Extraction",
    "image": ""
  },
  {
    "date": "2018-09-01",
    "work": "micro",
    "note": "Plasmid PCR",
    "image": ""
  },
  {
    "date": "2018-09-02",
    "work": "micro",
    "note": "Transform PsJN",
    "image": ""
  },
  {
    "date": "2018-09-02",
    "work": "micro",
    "note": "Growth Curve, Medium Testing",
    "image": ""
  },
  {
    "date": "2018-09-03",
    "work": "micro",
    "note": "BamHI HindIII Enzyme Digestion",
    "image": ""
  },
  {
    "date": "2018-09-04",
    "work": "micro",
    "note": "IC Testing",
    "image": ""
  },
  {
    "date": "2018-09-07",
    "work": "micro",
    "note": "BamHI HindIII Enzyme Digestion",
    "image": ""
  },
  {
    "date": "2018-09-10",
    "work": "micro",
    "note": "BamHI HindIII Enzyme Digestion",
    "image": ""
  },
  {
    "date": "2018-09-12",
    "work": "micro",
    "note": "BamHI HindIII Enzyme Digestion",
    "image": ""
  },
  {
    "date": "2018-09-15",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-09-16",
    "work": "micro",
    "note": "BamHI HindIII Enzyme Digestion",
    "image": ""
  },
  {
    "date": "2018-09-17",
    "work": "micro",
    "note": "Clean OD machine",
    "image": ""
  },
  {
    "date": "2018-09-18",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-09-19",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-09-21",
    "work": "micro",
    "note": "Antibiotic Test",
    "image": ""
  },
  {
    "date": "2018-09-22",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-09-23",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-09-24",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-09-25",
    "work": "micro",
    "note": "PsJN Transform",
    "image": ""
  },
  {
    "date": "2018-09-27",
    "work": "micro",
    "note": "Plasmid PCR",
    "image": ""
  },
  {
    "date": "2018-09-28",
    "work": "micro",
    "note": "PsJN Transform",
    "image": ""
  },
  {
    "date": "2018-09-29",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-09-30",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-09-30",
    "work": "micro",
    "note": "PsJN Transform",
    "image": ""
  },
  {
    "date": "2018-10-02",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-10-02",
    "work": "micro",
    "note": "Plasmid PCR",
    "image": ""
  },
  {
    "date": "2018-10-03",
    "work": "micro",
    "note": "BBa-K2546004 Complete",
    "image": "http://parts.igem.org/wiki/images/a/ab/BBa_K2546004_RFP_vers_BBa_J044500-pSB1C3_.jpeg"
  },
  {
    "date": "2018-10-04",
    "work": "micro",
    "note": "BBa-K2546004 Complete",
    "image": "http://parts.igem.org/wiki/images/4/48/BBa_K2546004_RE_digestion_result.png"
  },
  {
    "date": "2018-10-07",
    "work": "micro",
    "note": "Restriction enzyme digestion",
    "image": ""
  },
  {
    "date": "2018-10-08",
    "work": "micro",
    "note": "PCR",
    "image": ""
  },
  {
    "date": "2018-10-10",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-10-10",
    "work": "micro",
    "note": "Plasmid Extraction",
    "image": ""
  },
  {
    "date": "2018-10-11",
    "work": "micro",
    "note": "PsJN Transform",
    "image": ""
  },
  {
    "date": "2018-10-15",
    "work": "micro",
    "note": "Growth Curve",
    "image": ""
  },
  {
    "date": "2018-10-16",
    "work": "micro",
    "note": "GFP test",
    "image": "http://parts.igem.org/wiki/images/2/2d/OD_NCHU.png"
  },
  {
    "date": "2018-07-09",
    "work": "micro",
    "note": "E.coli liquid cliture for Laccase extraction",
    "image": ""
  },
  {
    "date": "2018-07-10",
    "work": "micro",
    "note": "E.coli cell lysate run SDS-page",
    "image": ""
  },
  {
    "date": "2018-08-13",
    "work": "micro",
    "note": "E.coli liquid cliture for HAD extraction",
    "image": ""
  },
  {
    "date": "2018-08-15",
    "work": "micro",
    "note": "HAD purification",
    "image": ""
  },
  {
    "date": "2018-08-23",
    "work": "micro",
    "note": "HAD activity test",
    "image": ""
  },
  {
    "date": "2018-08-27",
    "work": "micro",
    "note": "E.coli liquid cliture for Laccase extraction",
    "image": ""
  },
  {
    "date": "2018-08-29",
    "work": "micro",
    "note": "Laccase purification",
    "image": ""
  },
  {
    "date": "2018-08-30",
    "work": "micro",
    "note": "Laccase activity test",
    "image": ""
  },
  {
    "date": "2018-09-05",
    "work": "micro",
    "note": "HAD activity test",
    "image": ""
  },
  {
    "date": "2018-04-30",
    "work": "micro",
    "note": "Tonb TLcc HAD plasmid extraction",
    "image": ""
  },
  {
    "date": "2018-05-01",
    "work": "micro",
    "note": "competent cell preparation",
    "image": ""
  },
  {
    "date": "2018-05-02",
    "work": "micro",
    "note": "transformation",
    "image": ""
  },
  {
    "date": "2018-05-03",
    "work": "micro",
    "note": "check and enzyme restriction with EcoRI",
    "image": ""
  },
  {
    "date": "2018-05-11",
    "work": "micro",
    "note": "extract plasmid to check whether the transfomation is correct or not",
    "image": ""
  },
  {
    "date": "2018-05-14",
    "work": "micro",
    "note": "incubate and pcr",
    "image": ""
  },
  {
    "date": "2018-05-15",
    "work": "micro",
    "note": "growth curve preparation",
    "image": ""
  },
  {
    "date": "2018-05-24",
    "work": "micro",
    "note": "pcr to check",
    "image": ""
  },
  {
    "date": "2018-05-25",
    "work": "micro",
    "note": "preparation for competent cell",
    "image": ""
  },
  {
    "date": "2018-05-26",
    "work": "micro",
    "note": "competent cell and transformation",
    "image": ""
  },
  {
    "date": "2018-05-27",
    "work": "micro",
    "note": "colony pcr + HAD competent cell +TonB plasmid extraction",
    "image": ""
  },
  {
    "date": "2018-05-28",
    "work": "micro",
    "note": "plasmid extraction+colony pcr",
    "image": ""
  },
  {
    "date": "2018-06-15",
    "work": "micro",
    "note": "transformation biobricks",
    "image": ""
  },
  {
    "date": "2018-06-16",
    "work": "micro",
    "note": "plasmid extraction+enzyme restriction",
    "image": ""
  },
  {
    "date": "2018-06-17",
    "work": "micro",
    "note": "practice biobrick for 3O+cj",
    "image": ""
  },
  {
    "date": "2018-06-18",
    "work": "micro",
    "note": "plasmid extraction",
    "image": ""
  },
  {
    "date": "2018-06-19",
    "work": "micro",
    "note": "plasmid extraction",
    "image": ""
  },
  {
    "date": "2018-06-20",
    "work": "micro",
    "note": "cut",
    "image": ""
  },
  {
    "date": "2018-07-03",
    "work": "micro",
    "note": "plasmid extraction",
    "image": ""
  },
  {
    "date": "2018-07-04",
    "work": "micro",
    "note": "plasmid extration+digestion+gel extraction",
    "image": ""
  },
  {
    "date": "2018-07-05",
    "work": "micro",
    "note": "plasmid extraction",
    "image": ""
  },
  {
    "date": "2018-07-06",
    "work": "micro",
    "note": "plasmid extraction+digestion+gel extraction",
    "image": ""
  },
  {
    "date": "2018-07-07",
    "work": "micro",
    "note": "plasmod extraction+digestion+gel extraction+ligation",
    "image": ""
  },
  {
    "date": "2018-07-08",
    "work": "micro",
    "note": "transformation",
    "image": ""
  },
  {
    "date": "2018-07-09",
    "work": "micro",
    "note": "colony check",
    "image": ""
  },
  {
    "date": "2018-07-10",
    "work": "micro",
    "note": "plasmid extraction for check success!!!",
    "image": ""
  },
  {
    "date": "2018-08-13",
    "work": "micro",
    "note": "pcr idt",
    "image": ""
  },
  {
    "date": "2018-08-14",
    "work": "micro",
    "note": "pcr idt+clean up",
    "image": ""
  },
  {
    "date": "2018-08-15",
    "work": "micro",
    "note": "digestion+ligation",
    "image": ""
  },
  {
    "date": "2018-08-16",
    "work": "micro",
    "note": "colony",
    "image": ""
  },
  {
    "date": "2018-08-17",
    "work": "micro",
    "note": "pcr plasmid",
    "image": ""
  },
  {
    "date": "2018-08-18",
    "work": "micro",
    "note": "check",
    "image": ""
  },
  {
    "date": "2018-08-19",
    "work": "micro",
    "note": "PCR gibson",
    "image": ""
  },
  {
    "date": "2018-08-20",
    "work": "micro",
    "note": "clean up + digestion+ligation",
    "image": ""
  },
  {
    "date": "2018-08-21",
    "work": "micro",
    "note": "transform",
    "image": ""
  },
  {
    "date": "2018-08-22",
    "work": "micro",
    "note": "colony",
    "image": ""
  },
  {
    "date": "2018-08-23",
    "work": "micro",
    "note": "check pcr plasmid",
    "image": ""
  },
  {
    "date": "2018-08-24",
    "work": "micro",
    "note": "check",
    "image": ""
  },
  {
    "date": "2018-08-27",
    "work": "micro",
    "note": "digestion check",
    "image": ""
  },
  {
    "date": "2018-08-28",
    "work": "micro",
    "note": "gibson",
    "image": ""
  },
  {
    "date": "2018-08-29",
    "work": "micro",
    "note": "gibson",
    "image": ""
  },
  {
    "date": "2018-08-30",
    "work": "micro",
    "note": "gibson+3A",
    "image": ""
  },
  {
    "date": "2018-08-31",
    "work": "micro",
    "note": "check colony gibson and 3A",
    "image": ""
  },
  {
    "date": "2018-09-01",
    "work": "micro",
    "note": "plasmid pcr",
    "image": ""
  },
  {
    "date": "2018-09-06",
    "work": "micro",
    "note": "pcr 3A",
    "image": ""
  },
  {
    "date": "2018-09-07",
    "work": "micro",
    "note": "cut",
    "image": ""
  },
  {
    "date": "2018-09-08",
    "work": "micro",
    "note": "cut plasmid extraction ligation transform",
    "image": ""
  },
  {
    "date": "2018-09-09",
    "work": "micro",
    "note": "transform",
    "image": ""
  },
  {
    "date": "2018-09-10",
    "work": "micro",
    "note": "check",
    "image": ""
  },
  {
    "date": "2018-09-11",
    "work": "micro",
    "note": "gel extraction cut ligation",
    "image": ""
  },
  {
    "date": "2018-09-12",
    "work": "micro",
    "note": "ligation cut",
    "image": ""
  },
  {
    "date": "2018-09-13",
    "work": "micro",
    "note": "gibson transformation",
    "image": ""
  },
  {
    "date": "2018-09-14",
    "work": "micro",
    "note": "pcr 3A",
    "image": ""
  },
  {
    "date": "2018-09-15",
    "work": "micro",
    "note": "pcr idt clean up cut ligation transformation",
    "image": ""
  },
  {
    "date": "2018-09-16",
    "work": "micro",
    "note": "colony",
    "image": ""
  },
  {
    "date": "2018-09-17",
    "work": "micro",
    "note": "plasmid",
    "image": ""
  },
  {
    "date": "2018-09-18",
    "work": "micro",
    "note": "idt pcr promoter conformation",
    "image": ""
  },
  {
    "date": "2018-09-19",
    "work": "micro",
    "note": "plasmid extraction cut gel extraction",
    "image": ""
  },
  {
    "date": "2018-09-20",
    "work": "micro",
    "note": "coat plate",
    "image": ""
  },
  {
    "date": "2018-09-21",
    "work": "micro",
    "note": "cut plasmid extraction ligation transform",
    "image": ""
  },
  {
    "date": "2018-09-22",
    "work": "micro",
    "note": "coat plate colony pcr",
    "image": ""
  },
  {
    "date": "2018-09-23",
    "work": "micro",
    "note": "cut gel extraction ligation transformation",
    "image": ""
  },
  {
    "date": "2018-09-24",
    "work": "micro",
    "note": "colony pcr",
    "image": ""
  },
  {
    "date": "2018-09-25",
    "work": "micro",
    "note": "cut",
    "image": ""
  },
  {
    "date": "2018-09-26",
    "work": "micro",
    "note": "gel extraction clean up ligation transformation",
    "image": ""
  },
  {
    "date": "2018-09-27",
    "work": "micro",
    "note": "plasmid extraction cut gel extraction",
    "image": ""
  },
  {
    "date": "2018-09-28",
    "work": "micro",
    "note": "cut gel extraction ligation gibson",
    "image": ""
  },
  {
    "date": "2018-09-29",
    "work": "micro",
    "note": "transform",
    "image": ""
  },
  {
    "date": "2018-09-30",
    "work": "micro",
    "note": "check plasmid",
    "image": ""
  },
  {
    "date": "2018-10-01",
    "work": "micro",
    "note": "double plasmid clone",
    "image": ""
  },
  {
    "date": "2018-10-02",
    "work": "micro",
    "note": "transform promoter gibson Tc plasmid extraction",
    "image": ""
  },
  {
    "date": "2018-10-03",
    "work": "micro",
    "note": "check",
    "image": ""
  },
  {
    "date": "2018-10-04",
    "work": "micro",
    "note": "plasmid extraction cut gel extraction ligation",
    "image": ""
  },
  {
    "date": "2018-10-05",
    "work": "micro",
    "note": "check",
    "image": ""
  },
  {
    "date": "2018-10-06",
    "work": "micro",
    "note": "plasmid extraction cut gel extraction ligation",
    "image": ""
  },
  {
    "date": "2018-10-07",
    "work": "micro",
    "note": "transformation",
    "image": ""
  },
  {
    "date": "2018-10-08",
    "work": "micro",
    "note": "check digestion",
    "image": ""
  },
  {
    "date": "2018-10-09",
    "work": "micro",
    "note": "plasmid pcr",
    "image": ""
  },
  {
    "date": "2018-10-10",
    "work": "micro",
    "note": "double plasmid transformation",
    "image": ""
  },
  {
    "date": "2018-10-11",
    "work": "micro",
    "note": "check all transform",
    "image": ""
  },
  {
    "date": "2018-10-12",
    "work": "micro",
    "note": "pcr digestion",
    "image": ""
  },
  {
    "date": "2018-10-13",
    "work": "micro",
    "note": "pcr",
    "image": ""
  },
  {
    "date": "2018-10-14",
    "work": "micro",
    "note": "check digestiom",
    "image": ""
  },
  {
    "date": "2018-10-15",
    "work": "micro",
    "note": "check double and all",
    "image": ""
  },
  {
    "date": "2018-10-17",
    "work": "wiki",
    "note": "write wiki",
    "image": ""
  }
];
findUniqueDateNaddClass();
// findUniqueDate and add class event
function findUniqueDateNaddClass() {
  uniqueDays = $.unique(eventList.map(function (e) {
    return e.date;
  }));
  uniqueDays.forEach((dataDay) => {
    var date = $('*[data-day=' + dataDay + ']');
    // date.addClass("event");
  });
  console.log(uniqueDays);
}

// fillDayEvents 
function fillDayEvents(e) {
  var thisName = e.work;
  var thisNotes = e.note;
  var thisImage = (e.image == '') ? '' : '<br><br><img src="' + e.image + '">';
  // console.log(thisImage);
  var thisImportant = (e.work == 'phyto');
  var thisBirthday = ((e.work == 'toxicology') || (e.work == 'Interlab'));
  var thisFestivity = (e.work == 'micro');
  var thisEvent = true;
  var thisParagraph = thisNotes + thisImage;
  // console.log(thisParagraph);
  switch (true) {
    case thisImportant:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--important'>" +
        thisName +
        ":<br><span> • " +
        thisParagraph +
        "</span></p>"
      );
      break;
    case thisBirthday:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--birthday'>" +
        thisName +
        ":<br><span> • " +
        thisParagraph +
        "</span></p>"
      );
      break;
    case thisFestivity:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--festivity'>" +
        thisName +
        ":<br><span> • " +
        thisParagraph +
        "</span></p>"
      );
      break;
    case thisEvent:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event'>" +
        thisName +
        ":<br><span> • " +
        thisParagraph +
        "</span></p>"
      );
      break;
  }
}



//fill sidebar event info
function fillEventSidebar(self) {
  $(".c-aside__event").remove();
  var thisDay = self.attr("data-day");
  var thisName = self.attr("data-name");
  var thisNotes = self.attr("data-notes");
  var thisImportant = self.hasClass("event--important");
  var thisBirthday = self.hasClass("event--birthday");
  var thisFestivity = self.hasClass("event--festivity");
  var thisEvent = self.hasClass("event");

  eventsOnDay = filterEventByDate(thisDay);
  // console.log(eventsOnDay);
  eventsOnDay.forEach((e)=>{fillDayEvents(e)});
};
dataCel.on("click", function () {
  var thisEl = $(this);
  var thisDay = $(this)
    .attr("data-day")
    .slice(8);
  var thisMonth = $(this)
    .attr("data-day")
    .slice(5, 7);

  fillEventSidebar($(this));

  $(".c-aside__num").text(thisDay);
  $(".c-aside__month").text(monthText[thisMonth - 1]);

  dataCel.removeClass("isSelected");
  thisEl.addClass("isSelected");

});

//function for move the months
function moveNext(fakeClick, indexNext) {
  for (var i = 0; i < fakeClick; i++) {
    $(".c-main").css({
      left: "-=100%"
    });
    $(".c-paginator__month").css({
      left: "-=100%"
    });
    switch (true) {
      case indexNext:
        indexMonth += 1;
        break;
    }
  }
}
function movePrev(fakeClick, indexPrev) {
  for (var i = 0; i < fakeClick; i++) {
    $(".c-main").css({
      left: "+=100%"
    });
    $(".c-paginator__month").css({
      left: "+=100%"
    });
    switch (true) {
      case indexPrev:
        indexMonth -= 1;
        break;
    }
  }
}

//months paginator
function buttonsPaginator(buttonId, mainClass, monthClass, next, prev) {
  switch (true) {
    case next:
      $(buttonId).on("click", function () {
        if (indexMonth >= 2) {
          $(mainClass).css({
            left: "+=100%"
          });
          $(monthClass).css({
            left: "+=100%"
          });
          indexMonth -= 1;
        }
        return indexMonth;
      });
      break;
    case prev:
      $(buttonId).on("click", function () {
        if (indexMonth <= 11) {
          $(mainClass).css({
            left: "-=100%"
          });
          $(monthClass).css({
            left: "-=100%"
          });
          indexMonth += 1;
        }
        return indexMonth;
      });
      break;
  }
}

buttonsPaginator("#next", monthEl, ".c-paginator__month", false, true);
buttonsPaginator("#prev", monthEl, ".c-paginator__month", true, false);

//launch function to set the current month
moveNext(indexMonth - 1, false);

//fill the sidebar with current day
$(".c-aside__num").text(day);
$(".c-aside__month").text(monthText[month - 1]);
