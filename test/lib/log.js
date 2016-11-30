log.js

function log(message)
{	
	let indent = Array(80).join(' ')
	let prefix = "LOG:"

	console.log(indent, prefix, message)
}

module.exports = log