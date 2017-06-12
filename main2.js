// The possible first names are: Ellen, Heather, Rick, Walter
// The possible last names are: Bartley, DeForest, Fairview, Gray
// The possible states are: Ohio, Montana, Texas, Washington
// The possible events are: anniversary, birthday, house warming, wedding
// The possible relationships are: cousin, father, friend, sister

// Solution format:
// Heather Bartley lives in Ohio and is Greg's sister. She had a birthday on Thursday.

// Determine the full name of each person he shipped a gift to, what state each lived in, what each event was, each person’s relationship to Greg, and what day of the week each event was taking place (Wednesday through Saturday).

const firstNameArr = ['Ellen', 'Heather', 'Rick', 'Walter'];
const lastNameArr = ['Bartley', 'DeForest', 'Fairview', 'Gray'];
const statesArr = ['Ohio', 'Montana', 'Texas', 'Washington'];
const eventArr = ['anniversary', 'birthday', 'house warming', 'wedding'];
const relationshipsArr = ['cousin', 'father', 'friend', 'sister'];
const dayArr = ['Wednesday', 'Thursday', 'Friday', 'Saturday'];

var ellenArr = ['She','Ellen'];
var heatherArr = ['She','Heather'];
var rickArr = ['He','Rick'];
var walterArr = ['He','Walter'];

var ellen = {
  Bartley: [lastNameArr[0], 2],
  DeForest: [lastNameArr[1], 2],
  Fairview: [lastNameArr[2], 2],
  Gray: [lastNameArr[3], 2],
  Ohio: [statesArr[0], 2],
  Montana: [statesArr[1], 2],
  Texas: [statesArr[2], 2],
  Washington: [statesArr[3], 2],
  anniversary: [eventArr[0], 2],
  birthday: [eventArr[1], 2],
  houseWarming: [eventArr[2], 2],
  wedding: [eventArr[3], 2],
  cousin: [relationshipsArr[0], 2],
  father: [relationshipsArr[1], 2],
  friend: [relationshipsArr[2], 2],
  sister: [relationshipsArr[3], 2],
  Wednesday: [dayArr[0], 2],
  Thursday: [dayArr[1], 2],
  Friday: [dayArr[2], 2],
  Saturday: [dayArr[3], 2]
};

var heather = {
  Bartley: [lastNameArr[0], 2],
  DeForest: [lastNameArr[1], 2],
  Fairview: [lastNameArr[2], 2],
  Gray: [lastNameArr[3], 2],
  Ohio: [statesArr[0], 2],
  Montana: [statesArr[1], 2],
  Texas: [statesArr[2], 2],
  Washington: [statesArr[3], 2],
  anniversary: [eventArr[0], 2],
  birthday: [eventArr[1], 2],
  houseWarming: [eventArr[2], 2],
  wedding: [eventArr[3], 2],
  cousin: [relationshipsArr[0], 2],
  father: [relationshipsArr[1], 2],
  friend: [relationshipsArr[2], 2],
  sister: [relationshipsArr[3], 2],
  Wednesday: [dayArr[0], 2],
  Thursday: [dayArr[1], 2],
  Friday: [dayArr[2], 2],
  Saturday: [dayArr[3], 2]
};

var rick = {
  Bartley: [lastNameArr[0], 2],
  DeForest: [lastNameArr[1], 2],
  Fairview: [lastNameArr[2], 2],
  Gray: [lastNameArr[3], 2],
  Ohio: [statesArr[0], 2],
  Montana: [statesArr[1], 2],
  Texas: [statesArr[2], 2],
  Washington: [statesArr[3], 2],
  anniversary: [eventArr[0], 2],
  birthday: [eventArr[1], 2],
  houseWarming: [eventArr[2], 2],
  wedding: [eventArr[3], 2],
  cousin: [relationshipsArr[0], 2],
  father: [relationshipsArr[1], 2],
  friend: [relationshipsArr[2], 2],
  sister: [relationshipsArr[3], 2],
  Wednesday: [dayArr[0], 2],
  Thursday: [dayArr[1], 2],
  Friday: [dayArr[2], 2],
  Saturday: [dayArr[3], 2]
};

var walter = {
  Bartley: [lastNameArr[0], 2],
  DeForest: [lastNameArr[1], 2],
  Fairview: [lastNameArr[2], 2],
  Gray: [lastNameArr[3], 2],
  Ohio: [statesArr[0], 2],
  Montana: [statesArr[1], 2],
  Texas: [statesArr[2], 2],
  Washington: [statesArr[3], 2],
  anniversary: [eventArr[0], 2],
  birthday: [eventArr[1], 2],
  houseWarming: [eventArr[2], 2],
  wedding: [eventArr[3], 2],
  cousin: [relationshipsArr[0], 2],
  father: [relationshipsArr[1], 2],
  friend: [relationshipsArr[2], 2],
  sister: [relationshipsArr[3], 2],
  Wednesday: [dayArr[0], 2],
  Thursday: [dayArr[1], 2],
  Friday: [dayArr[2], 2],
  Saturday: [dayArr[3], 2]
};

// Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The birthday girl didn’t have her party on Friday.
// Rick’s last name wasn’t Bartley but his event was on Saturday night.
// Greg’s father wasn’t getting married, but his last name was Gray.
// The friend having a house warming didn’t live in Ohio.
// The wedding was for Greg’s cousin. Heather, who didn’t live in Texas, was Greg’s sister but her event wasn’t on Wednesday night.
// Walter’s event was one day earlier than the person whose last name was DeForest but after the person who lived in Washington. The anniversary was held in Montana.

console.log(ellen, heather, rick, walter);
