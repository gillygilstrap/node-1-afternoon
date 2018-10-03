const messageArr = [];
let id = 0;

module.exports = {
    readMsg: (req,res) => {
        res.json(messageArr);
    },
    createMsg: (req,res) => {
        const {time, text} = req.body;
        const newMsg = {
            time,
            text,
            id
        }
        id = id + 1;
        messageArr.push(newMsg)
        res.json(messageArr)
    },
    editMsg: (req,res) => {
        const {time, text} = req.body;
        const msgId = req.params.id 
        for (let i = 0; i < messageArr.length; i++) {
            if( messageArr[i].id === +msgId ) {
                messageArr[i].text = text;
                

            }
        }
        res.json(messageArr)
    },
    deleteMsg: (req, res) => {
        const msgId = req.params.id
        let i=0
        for (i = 0; i < messageArr.length; i++) {
            if (messageArr[i].id === +msgId) {
                break;
            }

        } 
        if(i === messageArr.length) {
            res.status(404).send("Ain't no messages with that id!!")
            return;
        }
         messageArr.splice(i,1)
         res.json(messageArr)
    } 
}