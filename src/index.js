// write your code here
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

// Deliverable number 1

fetch('http://localhost:3000/images/1')
.then(response => response.json())
.then(data => insertCardData(data))

const imageCard = document.querySelector('.image-card')

function insertCardData(cards) {
    const cardTitle = document.getElementById('card-title')
    cardTitle.innerText = cards.title
    const cardImg = document.getElementById('card-image')
    cardImg.src = cards.image
    const cardLikes = document.getElementById('like-count')
    cardLikes.innerText = cards.likes
    const cardComments = document.getElementById('comments-list')
    const getCardComments = cards.comments
    const firstLi = document.getElementsByTagName('li')[0]
    const secondLi = document.getElementsByTagName('li')[1]
    const thirdLi = document.getElementsByTagName('li')[2]
    firstLi.textContent = getCardComments[0].content
    secondLi.textContent = getCardComments[1].content
    thirdLi.textContent = getCardComments[2].content

}

// Deliverable number 2

const likeButton = document.getElementById('like-button')
likeButton.addEventListener('click', increaseLike)

function increaseLike(event) {
    const likeCount = document.getElementById('like-count')
    likeCount.innerText++
}

// Deliverable number 3

const commentForm = document.getElementById('comment-form')

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newComment = e.target.comment.value
    const commentsList = document.getElementById('comments-list')
    const makeLi = document.createElement('li')
    makeLi.innerText = newComment
    commentsList.append(makeLi)
    
})


// Bonus Deliverables