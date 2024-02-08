// his pages serves api routes.
export default function handler(req, res) {
	res.status(200).json({ text: 'Hello' })
	console.log(req.body)
	res.status(200).json(req.body)
	res.status(300).json({'text': 'Error'})
	res.status(400).json({'text': 'Error'})
}

