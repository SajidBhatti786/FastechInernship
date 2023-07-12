
// document.getElementById() returns an element that represent an html element and id that matchs a specific string 
// returns null when no element is found with given id

// It's quick way to access an html element because id is unique in html document
// It's available on document object only

// he id is unique within an HTML document. However, HTML is a forgiving language. If the HTML document has multiple elements with the same id, 
// the document.getElementById() method returns the first element it encounters.

const para = document.getElementById("message");
console.log(para)