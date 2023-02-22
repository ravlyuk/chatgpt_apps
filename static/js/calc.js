function calc() {
    const title = document.getElementById('title');
    title.innerHTML = `Percentage Calculator`;
    const raceview = document.getElementById('page-content');
    raceview.innerHTML = '';

    const race = document.createElement("div");
    race.classList.add("race");
    raceview.appendChild(race);

    race.innerHTML = `
    <div class="container">
            <div class="col-md-6 offset-md-3 col-sm-12">
                <form>
                    <label>Enter the number 1:</label>
                    <input type="number" id="number" placeholder="Enter a number...">
                        <label>Enter the number 2:</label>
                        <input type="number" id="percentage" placeholder="Enter a percentage...">
                            <button type="button" class="btn" onclick="calculate()">Calculate</button>
                </form>
                <p class="result" id="result"></p>
            </div>
        </div>
    `;


}


function calculate() {
    var number = document.getElementById("number").value;
    var percentage = document.getElementById("percentage").value;
    var result = ((number / percentage) * 100).toFixed(2);
    document.getElementById("result").innerHTML = "Result: " + result + "%";
}