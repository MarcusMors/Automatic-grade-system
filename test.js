// const Buffer = require("buffer")

const text1 =
	"DQpDQ09NUDItMSAtIDU4MzIyIC0-IFRhcmVhIC0-IFJlYWxpemFyIGludmVzdGlnYWNpw7NuIHNvYnJlIExlbmd1YWplcyBkZQ0KUHJvZ3JhbWFjacOzbg0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tDQpLZWxseSBWaXpjb25kZSBMYSBNb3R0YSBoYSBoZWNobyB1biBjb21lbnRhcmlvIGRlIHJldHJvYWxpbWVudGFjacOzbiBlbiBzdQ0KZW50cmVnYSBkZSBsYSB0YXJlYSBSZWFsaXphciBpbnZlc3RpZ2FjacOzbiBzb2JyZSBMZW5ndWFqZXMgZGUNClByb2dyYW1hY2nDs24uDQoNClB1ZWRlIHZlcmxhIGFkanVudGEgYSBzdSBlbnRyZWdhIGVuDQoNCmh0dHBzOi8vdmlydHVhbC51Y3NwLmVkdS5wZS9tb2QvYXNzaWduL3ZpZXcucGhwP2lkPTQ1ODM2Mw0mdXRtX3NvdXJjZT1zZW5kZ3JpZC5jb20mdXRtX21lZGl1bT1lbWFpbCZ1dG1fY2FtcGFpZ249d2Vic2l0ZQ0KDQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0NCg=="

const text2 =
	"ClB1ZWRlIHZlcmxhIGFkanVudGEgYSBzdSBlbnRyZWdhIGVuCgpodHRwczovL3ZpcnR1YWwudWNzcC5lZHUucGUvbW9kL2Fzc2lnbi92aWV3LnBocD9pZD00NTgzNjMKJnV0bV9zb3VyY2U9c2VuZGdyaWQuY29tJnV0bV9tZWRpdW09ZW1haWwmdXRtX2NhbXBhaWduPXdlYnNpdGU="

const text3 =
	"DQoNCmh0dHBzOi8vdmlydHVhbC51Y3NwLmVkdS5wZS9tb2QvYXNzaWduL3ZpZXcucGhwP2lkPTQ1ODM2Mw0mdXRtX3NvdXJjZT1zZW5kZ3JpZC5jb20mdXRtX21lZGl1bT1lbWFpbCZ1dG1fY2FtcGFpZ249d2Vic2l0ZQ0KDQ"

const text4 =
	"DQoNCmh0dHBzOi8vdmlydHVhbC51Y3NwLmVkdS5wZS9tb2QvYXNzaWduL3ZpZXcucGhwP2lkPTQ1ODM2Mw"
const text5 =
	"PTQ1ODM2Mw0mdXRtX3NvdXJjZT1zZW5kZ3JpZC5jb20mdXRtX21lZGl1bT1lbWFpbCZ1dG1fY2FtcGFpZ249d2Vic2l0ZQ0KDQ"
const text6 = "PTQ1ODM2Mw0mdXRtX3NvdXJjZ"

//create buffer
const bufferText1 = Buffer.from(text1, "base64")
const bufferText2 = Buffer.from(text2, "base64")
const bufferText3 = Buffer.from(text3, "base64")
const bufferText4 = Buffer.from(text4, "base64")
const bufferText5 = Buffer.from(text5, "base64")
const bufferText6 = Buffer.from(text6, "base64")
//decode buffer as UTF-8
const decodedText1 = bufferText1.toString("ascii")
const decodedText2 = bufferText2.toString("ascii")
const decodedText3 = bufferText3.toString("ascii")
const decodedText4 = bufferText4.toString("ascii")
const decodedText5 = bufferText5.toString("ascii")
const decodedText6 = bufferText6.toString("ascii")

console.log(decodedText1)
console.log(decodedText2)
console.log(decodedText3)
console.log(decodedText4)
console.log(decodedText5)
console.log(decodedText6)
