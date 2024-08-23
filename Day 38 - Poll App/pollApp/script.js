//Data stored in the starter 'poll' object.
const poll = {
    question : "What is your favourite programming language?",
    option : ["0 : JavaScript","1 : Python","2 : Rust","3 : C++"],
    answers : [0,0,0,0],

    registerNewAnswer(){
        let message = `${poll.question} \n ${poll.option[0]} \n ${poll.option[1]} \n ${poll.option[2]} \n ${poll.option[3]}`
        let answer = prompt(message)

        if (answer>=0 && answer<=3 ) { 
            poll.answers[answer]++ // Increment the value of selected option
            displayResults()
        } else {
            alert("Please enter a valid option number!")
        }
    }
}

const displayResults = () => console.log(`Poll Result = ${poll.answers}`)