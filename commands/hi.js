module.exports = {
    //FIRST COMMAND ADDED FOR TESTING PURPOSES AND THE SETUP OF ARGUMENTS
    //NAME OF COMMAND (ALSO THE TEXT THAT IS NEEDED TO EXECUTE THE COMMAND)
    name: 'hi',
    //DESCRIPTION OF COMMAND (DESCRIPTIONS AND NAMES WILL BE USED IN FUTURE VERSIONS FOR DYNAMIC HELP COMMAND)
    description: 'a command that says hi and waves',
    //CODE EXECUTION
    execute(message, args) {
        if(message.guild) {
            //ARGS IS AS AN ARRAY [0] IS THE BASE COMMAND [1] IS THE FIRST ARGUMENT [2] IS THE SECOND, AND SO ON.
            //IF COMMAND IS EXECUTED THE BOT SENDS "hello :wave:"
            message.channel.send('hello :wave:');
            //CONSOLE LOGS HI EVERY TIME COMMAND IS EXECUTED AND SPECIFIES WHERE IT WAS EXECUTED (THE SERVER)
            console.log(message.author.tag + " said hi to the bot in " + message.guild);
            //DETERMINES WHAT TO DO WITH THE FIRST ARGUMENT. IF THE FIRST ARGUMENT IS 1 THEN  IT REPLIES WITH A 1, IF ANYTHING ELSE OR NOTHING THEN IT WILL SIMPLY TELL THE USER THAT IT IS INVALID0
            if(args[1] == 1) {
                message.channel.send('1')
            } else {
                message.channel.send('Invalid argument!!!!!');
            }
        }
    },
};