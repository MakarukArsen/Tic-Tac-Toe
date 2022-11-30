const content = document.querySelector(".content");
const result = document.querySelector(".result");

let playersMove = "X";
const map = ["", "", "", "", "", "", "", "", ""];

for (let i = 1; i <= 9; i++) {
    const area = document.createElement("div");
    area.classList.add("area");
    content.append(area);
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
}

function finishGame() {
    content.classList.add("finished");
    return (result.innerHTML = `Переміг гравець ${playersMove}`);
}

content.addEventListener("click", function handleClick(e) {
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
        content.removeEventListener("click", handleClick);
        return;
    }
    changePlayer();
});
