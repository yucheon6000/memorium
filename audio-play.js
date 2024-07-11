
const audioList = [
    {
        "file-name": "0.m4a",
        "content": "우리 지훈이 결혼했나? 혼자 왔니?"
    },
    {
        "file-name": "1.m4a",
        "content": "기억해줘서 고마워요."
    },
    {
        "file-name": "2.m4a",
        "content": "오랜만이네요. 이렇게 이야기하게 되어서 정말 감사합니다!"
    },
    {
        "file-name": "3.m4a",
        "content": "항상 먼 길 찾아 와주셔서 정말 고마워요."
    },
    {
        "file-name": "4.m4a",
        "content": "헬로 나이스 투 미 츄~"
    },
    {
        "file-name": "5.m4a",
        "content": "덕분에 행복하게 생을 마감하고 있습니다. 부디 그 축복받은 남은 삶 행복하게 보내시길 바래요."
    },
    {
        "file-name": "6.m4a",
        "content": "헤이~ 왓 업 베이비~, 컴 온 베이비!"
    },
    {
        "file-name": "7.m4a",
        "content": "저도 재밌게 녹음하고 있거든요. 그니까 저 없다고 울지 그러시지 말고"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    let audioIdx = Math.floor(Math.random() * 8);

    let playBtn = document.querySelector("#play-btn");
    var audio = new Audio(`./audios/${audioIdx}.m4a`);
    audio.addEventListener("ended", () => {
        setPlayIcon();
        isPlaying = false;
    });

    let isPlaying = false;

    playBtn.addEventListener("click", () => {
        if (isPlaying) {
            isPlaying = false;
            audio.pause();
            setPlayIcon();
        }
        else {
            isPlaying = true;
            setStopIcon();
            audio.play();
        }
    });

    let audioTitle = document.querySelector(".audio-title");
    audioTitle.innerHTML = audioList[audioIdx].content;


    let dwlBtn = document.querySelector("#download-btn");
    dwlBtn.addEventListener("click", () => {
        clickHandler(`./audios/${audioIdx}.m4a`, "고 천경자씨가 전하는 인사말.m4a");
    });
});


function setPlayIcon() {
    let i = document.querySelector("#play-btn > i");
    i.classList = "icon bi bi-play-fill";
}

function setStopIcon() {
    let i = document.querySelector("#play-btn > i");
    i.classList = "icon bi bi-stop-fill";
}

const clickHandler = async (url, name) => {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' })
    const blobURL = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = blobURL
    a.style.display = 'none'
    if (name && name.length) {
        a.download = name
    }

    document.body.appendChild(a)
    a.click()
    a.remove()
}