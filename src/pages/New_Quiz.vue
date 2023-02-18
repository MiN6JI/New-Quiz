<template>
    <q-img 
    class="window-width window-height " 
      src="src/assets/New Quiz.jpg"
      :ratio="16/9" 
    />
    <div class="row content-start absolute-center" id="main">
                            
                    <!-- |   HEADER  | -->

        <div id="header" class="q-my-lg">
            <div id="NewQuiz"  class="float-left text-h6"><strong>New Quiz</strong></div>
            <div id="info" class="float-right q-py-sm">MINGJI</div>
        </div>
        
                    <!-- |   Q n A  | -->

        <div v-if = "index < count">
        <div id="qna" class="q-my-lg -pt-lg">

            <p>Questions 0{{ index + 1 }}</p>
            <p class="text-h4 text-weight-bold">{{ questions[index]['question'] }}</p>
        </div>

                    <!-- |   OPTIONS   | -->

        <div id="content">

        <div class="">
            <label 
            :for="key" 
            class="q-mr-lg q-mt-lg q-pa-md" 
            v-for="(opt,key) in questions[index]['options']"
            :key="opt"
            :class="{'bg-black' : selectedAnswer == key}"
            >
            <input type="radio" 
            :id="key"
            :value="key"
            class="hidden" 
            @change="selected($event)"
            />{{ opt }}
            </label>
        </div>

                    <!-- |   BUTTONS   | -->

        <div class="q-mt-lg">
            <q-btn 
            unelevated
            color="black"
            label="Next"
            class="float-right q-mt-lg"
            @click="next(key)"
            v-if="selectedAnswer != '' && index < count - 1"
          ></q-btn>
            <q-btn
            outline
            class="q-mt-lg"
            color="black"
            label="Previous"
            @click="prev()"
            v-if="index >= 1"
            >
            </q-btn>
            <q-btn 
            unelevated
            color="black"
            label="submit"
            class="float-right q-mt-lg"
            @click="submit()"
            v-if="selectedAnswer != '' && index == count - 1"
          ></q-btn>
        </div>

        </div>

    </div>

                    <!-- |   RESULT  | -->

    <div v-else class="" id="result">
        <div class="text-h3 text-weight-bold">Result</div>
        <div class="q-mt-lg">
            <p class="text-h6 text-weight-light">Total score out of 
                <strong><span>{{ correctAnswer }}</span></strong>
            </p>
        </div>
    </div>
</div>
</template>

<script>

    export default {
        data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 5,
            questions: [
                {
                    question: "Chlorofluorocarbons are accountable for which of the following process?",
                    options: {a: 'Ozone depletion', b: 'Acid rain', c: 'Soil pollution'},
                    // answer: 'c'
                    // answer:  {a: 3, b: 2, c: 1}
                },
                {
                    question: "Which of the following gases is responsible for bleaching of plants?",
                    options: {a: 'NO2', b: 'SO3', c: 'SO2'},
                    // answer: 'c'
                },
                {
                    question: "Which of the following water disinfecting procedures results in maximum wastage of water?",
                    options: {a: ' Boiling', b: 'Reverse Osmosis (RO)', c: 'Adding chlorine'},
                    // answer: 'c'
                },
                {
                    question: "Why is it recommended to avoid getting wet in the first rain?",
                    options: {a: 'It will damage the clothes', b: 'First rain may contain harmful pollutants', c: ' It will spoil the shoes'},
                    // answer: 'b'
                },
                {
                    question: "Inside of car getting warmer than outside because of sunlight",
                    options: {a: 'Heat', b: 'Change of weather', c: 'Lightning'},
                    // answer: 'a'
                }
            ]
        }
    },
    methods: {
        selected(e){
            this.selectedAnswer = e.target.value
            console.log(this.selectedAnswer);
 
            if (this.selectedAnswer === "a") {
                this.correctAnswer = this.correctAnswer + 3;
                console.log(this.correctAnswer + "")
            } else if (this.selectedAnswer === "b") {
                this.correctAnswer = this.correctAnswer + 2;
                console.log(this.correctAnswer + "")
            } else {
                this.correctAnswer = this.correctAnswer + 1;
                console.log(this.correctAnswer + "")
            }

            // for(questions[1]['options']){
            //     if (this.selectedAnswer === "a") {
            //     this.correctAnswer = this.correctAnswer + 3;
            //     console.log(this.correctAnswer + "")
            // } else if (this.selectedAnswer === "b") {
            //     this.correctAnswer = this.correctAnswer + 2;
            //     console.log(this.correctAnswer + "")
            // } else {
            //     this.correctAnswer = this.correctAnswer + 1;
            //     console.log(this.correctAnswer + "")
            // }
            // }
        },
        next() {
        this.index++
        this.selectedAnswer = ''
        },
        prev() {
         this.index--
        },
        submit(){
        this.index++   
        }


    }
}
</script>
<style scoped>
#main{
    width: 80%;
    height: 100vh;
}
#header{
    width: 100%;
    height: 100px;
}
label{
    border: 1px solid black ;
    /* display: block; */
}
#qna{
    height: 150px;
}

#content{
    height: 300px;
}
#result{
    width: 100%;
    height: 200px;
}

</style>
