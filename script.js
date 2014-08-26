$(document).ready(function() {
    
//GLOBAL VARIABLES//
    var numberCorrect = 0;
    var currentQuestion = 0;
    var previousQuestion = currentQuestion - 1;
    
//QUESTIONS ARRAY//
   	var questions = [{
        question: "A clockwork orange is a film directed by . . .",
        choices: [" Martin Scorsese", "Stanley Kubrick", "James Cameron", "David Cronenberg"],
        qNum : 0,
        correct : 1,
        fact: "A Clockwork Orange is a 1971 British film written, produced, and directed by Stanley Kubrick"
        },
        {
        question: "Which of these directors won the Palme d'Or twice",
        choices: ["Woddy Allen", "Andrei Tarkovsky", "Emir Kusturica", "Terrence Malick"],
        qNum : 1,
        correct : 2,
        fact: "Emir Kusturica has twice won the Palme d'Or at Cannes (for When Father Was Away on Business and Underground"
        },
        {
        question: "Jaws is a film directed by...",
        choices: ["Cohen Brothers", "Quentin Tarantino", "Eli Roth", "Steven Spielberg"],
        qNum : 2,
        correct : 3,
        fact: "Jaws is a 1975 American thriller film directed by Steven Spielberg and based on Peter Benchley's novel of the same name"
        },
        {
        question: "Mrs. Doubtfire was played by . . .",
        choices: ["Sean Connery", "Charles Bronson", "Robbin Williams", "Billy Cristal"],
        qNum : 3,
        correct : 2,
        fact: "Mrs. Doubtfire is a 1993 American comedy film starring Robin Williams and Sally Field and based on the novel Alias Madame Doubtfire by Anne Fine."
        },
        {
        question: "Which actor played Batman on BATMAN by Tim Burton . . .",
        choices: ["Adam West", "Michael Keaton", "George Clooney", "Christian Bale"],
        qNum : 4,
        correct : 1,
        fact: "Michael Keaton was the Tim Burton´s BATMAN"
    	},
        {
        question: "T2 was played by . . .",
        choices: ["Arnold Schwarzenegger", "Tom Cruise", "Sylvester Stallone", "Dolph Lundgren"],
        qNum : 5,
        correct : 0,
        fact: "Arnold Schwarzenegger was T2, hasta la vista, baby"
    }]

//enter button event
    $("#introDiv").on("click", "#enter", function (event) {
        $("#introDiv").fadeOut();
        $('#questionDiv').fadeIn();
        loadQuestion();
        imgChange();
        event.preventDefault();
    });

//Submit button
    $("#questionDiv").on("click", "#submit", function (event) {
        answerCheck();
        event.preventDefault();
    });

//cont button
    $("#resultDiv").on("click", "#cont", function (event) {
        if (currentQuestion < 5) {
            currentQuestion++;
            loadQuestion();
            imgChange();
            $('#resultDiv').fadeOut();
            $('.resultNegative').fadeOut();
            $('.resultPositive').fadeOut();
            $('#questionDiv').fadeIn();
        }else{
            $('#questionDiv').fadeOut();
            $('#resultDiv').fadeOut();
            $('.resultNegative').fadeOut();
            $('.resultPositive').fadeOut();
            $('#endDiv').slideDown();
            $("#result").html("You correctly answered " +numberCorrect+ " out of 6");
        };
        event.preventDefault();
    });

//retry button
    $("#endDiv").on("click", "#retry", function (event) {
        retry();
        event.preventDefault();
    });

//load question
    function loadQuestion() { 
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span></br><div id="answerSelect"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div>';
            $("#questionArea").html(newQuestion);   
    };

//Answer check
    function answerCheck() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == undefined) {
                alert('Please select an answer');
        }else if (answer == questions[currentQuestion].correct){
                console.log("Correct!");
                numberCorrect++;
                $('#questionDiv').fadeOut();
                $('#resultDiv').fadeIn();
                $('.resultPositive').fadeIn();
                $("#explain").html("<p>"+questions[currentQuestion].fact+"</p>");
        }else{
                console.log("Wrong");
                $('#questionDiv').fadeOut();
                $('#resultDiv').fadeIn();
                $('.resultNegative').fadeIn();
                $("#explain").html("<p>"+questions[currentQuestion].fact+"</p>");
        };
    }
    
//Image change
    function imgChange() {
    	if (currentQuestion == 0) {
    		document.getElementById("charIcon").src = "images/1.jpg";
    	} else if (currentQuestion == 1){
    		document.getElementById("charIcon").src = "images/palme.jpg";
    	} else if (currentQuestion == 2){
    		document.getElementById("charIcon").src = "images/jaws.png";
    	} else if (currentQuestion == 3){
    		document.getElementById("charIcon").src = "images/mrs-doubtfire.jpg";
    	} else if (currentQuestion == 4){
    		document.getElementById("charIcon").src = "images/batman.jpg";
    	} else if (currentQuestion == 5){
    		document.getElementById("charIcon").src = "images/t2.jpg";
    	};
    }

//Retry function
    function retry() {
        numberCorrect = 0;
        currentQuestion = 0;
        $("#introDiv").fadeIn();
        $('#endDiv').fadeOut();
    }

});	


