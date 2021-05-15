let re;
// Literal Characters
re = /hello/;

// metacharacter symbols
re = /^h/i; // must start with h
re = /d$/i; // must end with d
re = /^hello$/i; // must end and start with hello. 'can only be hello'
re = /h.llo/i; // match any ONE wildcard character
re = /h*llo/i; // match any character 0 or more times
re = /gre?a?y/i; // optional a or e
re = /gre?a?y\?/i; // escape characters

// [] = character sets
re = /gr[ae]y/i; // must be a or e
re = /[GF]ray/; // must be upper case G or F
re = /[^GF]ray/; // match anything EXCEPT G or F
re = /[A-Z]ray/; // match anything from A-Z
re = /[a-z]ray/; // match anything from a-z

// string to match
const str = 'Gray?';

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
	if (re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	} else {
		console.log(`${str} does NOT match ${re.source}`);
	}
}

reTest(re, str);
