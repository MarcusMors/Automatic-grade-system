const fs = require("fs")
const readline = require("readline")
const { google } = require("googleapis")

const CLIENT_ID =
	"370893304975-6t6qm1eimle30k01q945rl7uc4tulsm0.apps.googleusercontent.com"
const API_KEY = "AIzaSyCGXCtc65WKVPwD4ShcuahvZiZzFN7M4mw"
let semester = 1 // begins in 0
// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/gmail.modify"]
// The file token.json stores the user's access and refresh tokens
const TOKEN_PATH = "token.json"

class Label
{
	constructor(name, id)
	{
		this.name = name
		this.id = id
	}
}

let labels = []
let label = new Label

var HandOut = []; //HandOut id = Label_3197057039086202307
HandOut[0] = "Label_7402988032110922463"
HandOut[1] = "Label_1386651267497447277"
HandOut[2] = "Label_3962313398028581919"
HandOut[3] = "Label_4586647617297683920"
HandOut[4] = "Label_7532251755110091104"
HandOut[5] = "Label_8199435610973804112"
HandOut[6] = "Label_4252622583663875872"
HandOut[7] = "Label_6787597412663589833"
HandOut[8] = "Label_3288543716285994114"
HandOut[9] = "Label_7217554370074992071"
var HandIn = [] //HandIn id = Label_7389428858295709722
HandIn[0] = "Label_7295851260933591875"
HandIn[1] = "Label_4866027500765102174"
HandIn[2] = "Label_6920174069850366298"
HandIn[3] = "Label_4615971342525090388"
HandIn[4] = "Label_5701924927007081391"
HandIn[5] = "Label_2244782371449742490"
HandIn[6] = "Label_4964081810423258117"
HandIn[7] = "Label_3193921923528978977"
HandIn[8] = "Label_4989672742850804216"
HandIn[9] = "Label_3930793675886300391"

function getMessages(auth) {
	const gmail = google.gmail({ version: "v1", auth })
	gmail.users.messages.list()
	gmail.users.labels.list(
		{
			userId: "me",
		},
		(err, res) => {
			if (err) return console.log("The API returned an error: " + err)
			const labels = res.data.labels
			if (labels.length) {
				console.log("Labels:")
				labels.forEach((label) => {
					console.log(`- ${label.name} - ${label.id}`)
				})
			} else {
				console.log("No labels found.")
			}
		}
	)
	gmail.users.
}

/**
 * Create an OAuth2 client with the credentials, then execute callback.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
	const { client_secret, client_id, redirect_uris } = credentials.installed
	const oAuth2Client = new google.auth.OAuth2(
		client_id,
		client_secret,
		redirect_uris[0]
	)

	// Check if we have previously stored a token.
	fs.readFile(TOKEN_PATH, (err, token) => {
		if (err) return getNewToken(oAuth2Client, callback)
		oAuth2Client.setCredentials(JSON.parse(token))
		callback(oAuth2Client)
	})
}

// Load client secrets from a local file.
fs.readFile("credentials.json", (err, content) => {
	if (err) return console.log("Error loading client secret file:", err)
	// Authorize a client with credentials, then call the Gmail API.
	authorize(JSON.parse(content), getMessages)
})
// @ts-ignore

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: "offline",
		scope: SCOPES,
	})
	console.log("Authorize this app by visiting this url:", authUrl)
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	})
	rl.question("Enter the code from that page here: ", (code) => {
		rl.close()
		oAuth2Client.getToken(code, (err, token) => {
			if (err) return console.error("Error retrieving access token", err)
			oAuth2Client.setCredentials(token)
			// Store the token to disk for later program executions
			fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
				if (err) return console.error(err)
				console.log("Token stored to", TOKEN_PATH)
			})
			callback(oAuth2Client)
		})
	})
}

//* node . to run this code
