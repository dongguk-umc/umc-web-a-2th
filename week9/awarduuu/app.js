// app이 express를 사용한다고 선언
const express = require('express')
const app = express()

// 포트 설정
const port = 3000

app.use(express.json());

// data
const users = [
    {
        id: 1,
        name: "james",
        username: "joker",
        email: "james101@gmail.com",
        phonenumber: "123-456-7979",
    },
    {
        id: 2,
        name: "christine",
        username: "crystal",
        email: "christine101@gmail.com",
        phonenumber: "453-326-1299",
    },
    {
        id: 3,
        name: "jammie",
        username: "jam",
        email: "jammie101@gmail.com",
        phonenumber: "963-332-3719",
    },
];

// get

// nodemon을 사용하면 서버를 재실행 할 필요 없이 실시간 적용 가능
app.get('/', (req, res) => {
    res.send('Hello World!!')
})

// url = /users에 get 요청 -> users json 반환 response 수행
app.get('/users', (req, res) => {
    res.json(users);
})

// url에 구별을 줘 유저아이디의 특정값에 따라 데이터 선택해서 가져오기 가능
app.get('/users/:userId', (req, res) => {
    // console.log(req.params.userId);

    const user = users.find((user)=> user.id === parseInt(req.params.userId));

    // 예외처리
    if(!user){
        res.status(404).send("요청한 userId를 찾을 수 없습니다.");
    }
    res.status(200).json(user);

})

// post

app.post("/users", (req, res) => {
    const newUser = req.body;

    if(Object.keys(newUser).length === 0){
        res.status(400).send("user에 관한 정보를 입력해주세요");
    }
    else if(Object.keys(newUser).length < 4){
        res.status(400).send('user를 추가하기 위해 필요한 정보를 모두 입력해주세요.');
    }


    // 아이디는 자동 증가, 나머지는 새로 넣기
    users.push({
        id: users[users.length-1].id + 1,
        ...newUser
    })

    res.json(users);


})

// put

app.put("/users/:userId", (req, res) => {
    const id = users.findIndex(user => user.id === parseInt(req.params.userId));

    if(id === -1){
        res.status(404).send("요청한 id를 찾을 수 없습니다.")
    }
    users[id] = {
        ...users[id],
        ...req.body
    }

    res.status(200).json(users);

})

// delete

app.delete("/users/:userId", (req, res)=> {
    const id = users.findIndex(user => user.id === parseInt(req.params.userId));

    if(id === -1){
        res.status(404).send("요청한 id를 찾을 수 없습니다.")
    }

    users.splice(id, 1);

    res.status(200).json(users);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})