// 동기 = 순서대로 일을 처리하는 방식
// 비동기 = 빨리 처리할 수 있는 것들을 먼저 처리하는 방식

const posts = [
    { post_id: 1, post_title: "첫번쨰 글" },
    { post_id: 2, post_title: "두번쨰 글" },
    { post_id: 3, post_title: "세번쨰 글" },
];

const comments = [
    { post_id: 1, comment_id: 1, comment: "첫번쨰 글 첫번쨰 코멘트" },
    { post_id: 2, comment_id: 1, comment: "두번쨰 글 첫번쨰 코멘트" },
    { post_id: 2, comment_id: 2, comment: "두번쨰 글 두번쨰 코멘트" },
    { post_id: 2, comment_id: 3, comment: "두번쨰 글 세번쨰 코멘트" },
    { post_id: 3, comment_id: 1, comment: "세번쨰 글 첫번쨰 코멘트" },
    { post_id: 3, comment_id: 2, comment: "세번쨰 글 두번쨰 코멘트" },
];

const postNum = 2;

// const getPost = (id, onSuccess, onError) => {
//     setTimeout(()=>{
//         const post = posts.find(post => posts.post_id === id);
//         if(post){
//             onSuccess(posts.post_id);
//         }
//         else{
//             onError("찾는 포스트가 없습니다.")
//         }
//     }, 3000);
//
// }

const getPost = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        const post = posts.find(post => posts.post_id === id);
        if(post){
            resolve(posts.post_id);
        }
        else{
            reject("찾는 포스트가 없습니다.")
        }
    }, 3000);
        }
    )
}

// const getComments = (post_id, onSuccess, onError) => {
//     setTimeout(()=>{
//         const result = posts.filter(comments => comments.post_id === post_id);
//         if(result.length > 0){
//             onSuccess(result);
//         }
//         else{
//             onError("찾는 포스트의 댓글이 없습니다.")
//         }
//     }, 4000);
//
// }

const getComments = (post_id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        const result = posts.filter(comments => comments.post_id === post_id);
        if(result.length > 0){
            resolve(result);
        }
        else{
            reject("찾는 포스트의 댓글이 없습니다.");
        }
    }, 4000);
        }

    )
}


// 콜백지옥
// 인자로 받는 함수인 콜백함수들이 종속적으로 너무 많이 사용하였다.
// getPost(
//     postNum,
//     (postId)=>{
//         console.log('Post', postId);
//         getComments(
//             postId,
//             (result) => console.log('Comments', result),
//             (msg) => console.log(msg)
//         )
//     },
//     (msg)=>{
//         console.log(msg);
//     })

// Promise : pending(진행중), fulfilled(성공적으로 끝낸 상태), rejected(실패로 끝난 상태)

getPost(postNum)
.then(postId => {
    console.log('Post:', postId)
    return getComments(postId);
})
    .then(result => console.log('Comments: ', result))
.catch(msg => console.log(msg));

// async await

async function getResult(){
    const postId_result = await getPost(postNum);
    const comments_result = await getComments(postId_result)
    console.log('Post: ', postId_result, 'Comments: ', comments_result);

}