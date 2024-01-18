let start = document.getElementById('start')
let home = document.getElementById('quizapp')
let quiz1 = document.getElementById('firstpage')
let picone = document.getElementById('picone')
let gamefinish = document.getElementById('gamefinish')
let pictwo = document.getElementById('pictwo')
let input = document.getElementById('input')
let submit = document.getElementById('submit')
let skip = document.getElementById('skip')
let again = document.getElementById('again')
let finish = document.getElementById('finish')
let finished = document.getElementById('finished')
let urscore = document.getElementById('score')
let finalscore = document.getElementById('finalscore')
let score = 0; 
let sum = 0;
let win = document.getElementById('win')
let wrong = document.getElementById('wrong')
let fail = document.getElementById('fail')
let audio = document.getElementById('audio')
again.onclick= function(){
    location.reload();
}
start.onclick = function () {
    // getting the game space
    home.classList.add('hide');
    quiz1.classList.remove('hide')
        // getting the data 
    let ques = fetch('quiz.json').then(function (result) {
        let data = result.json()
        return data
    }).then(function (data) {
          // showing the data
        let i = 0;
        picone.setAttribute('src', `./pics/${data[i].firstpic}`)
        pictwo.setAttribute('src', `./pics/${data[i].secondpic}`)
        input.addEventListener("keypress", function (e) {
            if (e.key === 'Enter') {
                submit.click()
}
        })
        submit.onclick = function () {
            if (input.value.toLowerCase().trim().replaceAll(" ","")== data[i].answer) {
                audio.play()
                console.log(input.value)
                score=10
                sum = sum + score
                urscore.innerHTML = `${sum}/ 100`      
                i < data.length;
                i++
                console.log(input.value)
                console.log(i)
                picone.setAttribute('src', `./pics/${data[i].firstpic}`)
                pictwo.setAttribute('src', `./pics/${data[i].secondpic}`)
                input.value =" "
                if (i=== data.length-1) {
                    submit.classList.add('hide')
                    finish.classList.remove('hide')
                    skip.classList.add('hide')
              }
            } 
            else {
                wrong.play()
                score=0
                sum = sum + score
                i < data.length;
                i++
                picone.setAttribute('src', `./pics/${data[i].firstpic}`)
                pictwo.setAttribute('src', `./pics/${data[i].secondpic}`)
                input.value =" "
                if (i=== data.length-1) {
                    submit.classList.add('hide')
                    finish.classList.remove('hide')
                    skip.classList.add('hide')
                    return console.log('end')
            } 
            }
        }
        skip.onclick = function () {
            i < data.length;
            i++
            picone.setAttribute('src', `./pics/${data[i].firstpic}`)
            pictwo.setAttribute('src',`./pics/${data[i].secondpic}`)
            console.log(`i is ${i} `)
            input.value =" "
            if (i=== data.length-1) {
                submit.classList.add('hide')
                finish.classList.remove('hide')
                skip.classList.add('hide')
          }
        } 
        finish.onclick = function () {
            if (input.value.toLowerCase().trim().replaceAll(" ","") == data[data.length - 1].answer) {
                submit.classList.add('hide')
                quiz1.classList.add('hide')
                finished.classList.remove('hide')
                score = 10
                sum = score + sum
                console.log('d')
                if (sum == 100) {
                    win.play()
                    gamefinish.innerHTML = `Amazing !!!!!!!!!!! You Won` 
                    
                }
                else {
                    fail.play()
                    gamefinish.innerHTML = `Gameover`  
                    finalscore.innerHTML = `your score is ${sum}`  
             }
            }
            else {
                    fail.play()
                    gamefinish.innerHTML = `Gameover`  
                  finished.classList.remove('hide')
                  quiz1.classList.add('hide')
                  finalscore.innerHTML = `your score is ${sum}`  
             }
        }
        
    })
  
}

