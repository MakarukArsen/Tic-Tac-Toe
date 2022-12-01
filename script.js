const content = document.querySelector(".content");
const result = document.querySelector(".result");
const scoreX = document.querySelector(".score-x");
const scoreO = document.querySelector(".score-o");
const resetBtn = document.querySelector(".button");

let playersMove = "X";
let map = ["", "", "", "", "", "", "", "", ""];
const score = [0, 0];

function startGame() {
    content.innerHTML = "";
    content.classList.remove("finished");
    playersMove = "X";
    result.innerHTML = `Наразі ходить гравець ${playersMove}`;
    map = ["", "", "", "", "", "", "", "", ""];
    fillContent();

    content.addEventListener("click", function (e) {
        let cellIndex = [...this.children].findIndex((el) => el == e.target);
        const target = e.target;

        if (target.classList.value !== "area") {
            return;
        }
        target.classList.add("used");

        if (playersMove === "X") {
            target.classList.add("X");
        } else {
            target.classList.add("O");
        }
        if (checkMap(cellIndex)) {
            finishGame();
            return;
        }
        changePlayer();
    });
}
startGame();

function fillContent() {
    for (let i = 1; i <= 9; i++) {
        const area = document.createElement("div");
        area.classList.add("area");
        content.append(area);
    }
}

function changePlayer() {
    if (playersMove === "X") {
        playersMove = "O";
    } else {
        playersMove = "X";
    }
    return (result.innerHTML = `Наразі ходить гравець ${playersMove}`);
}

function checkMap(index) {
    map[index] = playersMove;
    if (map[0] === playersMove && map[1] === playersMove && map[2] === playersMove) return true;
    if (map[3] === playersMove && map[4] === playersMove && map[5] === playersMove) return true;
    if (map[6] === playersMove && map[7] === playersMove && map[8] === playersMove) return true;

    if (map[0] === playersMove && map[3] === playersMove && map[6] === playersMove) return true;
    if (map[1] === playersMove && map[4] === playersMove && map[7] === playersMove) return true;
    if (map[2] === playersMove && map[5] === playersMove && map[8] === playersMove) return true;

    if (map[0] === playersMove && map[4] === playersMove && map[8] === playersMove) return true;
    if (map[2] === playersMove && map[4] === playersMove && map[6] === playersMove) return true;

    if (!map.includes("")) return true;
}

function finishGame() {
    content.classList.add("finished");
    if (!map.includes("")) return (result.innerHTML = "Нічия!");
    if (playersMove === "X") {
        scoreX.innerHTML = `X: ${(score[0] += 1)}`;
    } else {
        scoreO.innerHTML = `O: ${(score[1] += 1)}`;
    }
    return (result.innerHTML = `Переміг гравець ${playersMove}`);
}
resetBtn.addEventListener("click", startGame);
