
// Basics of String
console.log("\nStrings In Javascript")
let str1 = "Osama Arain"

console.log("String 1 : "+str1)

console.log("Length of String 1 : "+str1.length)
console.log("String 1 in Upper Case : "+str1.toUpperCase())
console.log("String 1 in Lower Case : "+str1.toLowerCase())

// String Concatenation
console.log("\nString Concatenation")
let str3 = "Osama "
let str4 = "Arain"
let str5 = str3 + " " + str4
console.log("String 3 : "+str3)
console.log("String 4 : "+str4)
console.log("String 5 : "+str5)

// String Indexing
console.log("\nString Indexing")
console.log("String 1 : "+str1)
console.log("Character at index 0 : "+str1[0])
console.log("Character at index 1 : "+str1[1])
console.log("Character at index 2 : "+str1[2])
console.log("Character at index 3 : "+str1[3])

// String Slicing
console.log("\nString Slicing")
console.log("String 1 : "+str1)
console.log("String 1 Sliced from index 2 to 4 : "+str1.slice(2,4))
console.log("String 1 Sliced from index 0 to 2 : "+str1.slice(0,2))

// String Splitting
console.log("\nString Splitting")
console.log("String 1 : "+str1)
console.log("String 1 Split : "+str1.split(" "))
console.log("String 1 Split : "+str1.split("a"))

// String Replacing
console.log("\nString Replacing")
console.log("String 1 : "+str1)
console.log("String 1 Replaced : "+str1.replace("Arain","Bin Azam"))

// String Searching
console.log("\nString Searching")
console.log("String 1 : "+str1)
console.log("String 1 Searched : "+str1.search("Arain"))

// String Trim
console.log("\nString Trim")
let str6 = "    Osama Arain    "
console.log("String 6 : "+str6)
console.log("String 6 Trimmed : "+str6.trim())

// String Padding
console.log("\nString Padding")
let str7 = "Osama"
console.log("String 7 : "+str7)
console.log("String 7 Padded : "+str7.padStart(10,"*"))
console.log("String 7 Padded : "+str7.padEnd(10,"*"))

// String Repeat
console.log("\nString Repeat")
let str8 = "Osama"
console.log("String 8 : "+str8)
console.log("String 8 Repeated : "+str8.repeat(5))

// String Includes
console.log("\nString Includes")
let str9 = "Osama"
console.log("String 9 : "+str9)
console.log("String 9 Includes 'O' : "+str9.includes("O"))
console.log("String 9 Includes 'o' : "+str9.includes("o"))
console.log("String 9 Includes 'a' : "+str9.includes("a"))

// String StartsWith
console.log("\nString StartsWith")
let str10 = "Osama"
console.log("String 10 : "+str10)
console.log("String 10 Starts With 'O' : "+str10.startsWith("O"))
console.log("String 10 Starts With 'o' : "+str10.startsWith("o"))
console.log("String 10 Starts With 'a' : "+str10.startsWith("a"))

// String EndsWith
console.log("\nString EndsWith")
let str11 = "Osama"
console.log("String 11 : "+str11)
console.log("String 11 Ends With 'O' : "+str11.endsWith("O"))
console.log("String 11 Ends With 'o' : "+str11.endsWith("o"))
console.log("String 11 Ends With 'a' : "+str11.endsWith("a"))

// String CharAt
console.log("\nString CharAt")
let str12 = "Osama"
console.log("String 12 : "+str12)
console.log("String 12 CharAt 0 : "+str12.charAt(0))
console.log("String 12 CharAt 1 : "+str12.charAt(1))

// String CharCodeAt
console.log("\nString CharCodeAt")
let str13 = "Osama"
console.log("String 13 : "+str13)
console.log("String 13 CharCodeAt 0 : "+str13.charCodeAt(0))
console.log("String 13 CharCodeAt 1 : "+str13.charCodeAt(1))


// Common String Functions
console.log("\nCommon String Functions")
let str14 = "Osama"
console.log("String 14 : "+str14)
console.log("String 14 Length : "+str14.length)
console.log("String 14 UpperCase : "+str14.toUpperCase())
console.log("String 14 LowerCase : "+str14.toLowerCase())
console.log("String 14 Slice : "+str14.slice(0,2))
console.log("String 14 Split : "+str14.split("a"))
console.log("String 14 Replace : "+str14.replace("a","A"))
console.log("String 14 Search : "+str14.search("a"))
console.log("String 14 Trim : "+str14.trim())
console.log("String 14 PadStart : "+str14.padStart(10,"*"))
console.log("String 14 PadEnd : "+str14.padEnd(10,"*"))
console.log("String 14 Repeat : "+str14.repeat(5))
console.log("String 14 Includes : "+str14.includes("a"))
console.log("String 14 StartsWith : "+str14.startsWith("O"))
console.log("String 14 EndsWith : "+str14.endsWith("a"))
console.log("String 14 CharAt : "+str14.charAt(0))
console.log("String 14 CharCodeAt : "+str14.charCodeAt(0))

// String Template Literals
console.log("\nString Template Literals")
let str15 = "Osama"
let str16 = "Arain"
console.log("String 15 : "+str15)
console.log("String 16 : "+str16)
console.log("String 15 + String 16 : "+str15+" "+str16)
console.log("String 15 + String 16 : "+`${str15} ${str16}`)
console.log("String 15 + String 16 : "+`${str15} ${str16} ${2+2}`)




