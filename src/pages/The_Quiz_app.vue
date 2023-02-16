<template>
 <!-- eslint-disable -->
    <div id="main" class="fixed-center">
        <div id="content">
            <h1 id="header" class="text-h2">QUIZ</h1>
            <q-sparator/>
            <div>
                <div id="working" class="shadow-box" v-for="n in 1" :key="n" :class="`shadow-${n}`">
                    <p class="text-h6 text-blue-5 q-pa-sm">{{ questions[this.index]['question'] }}</p>
                    <label 
                    id="options"
                    class="q-mt-sm q-pa-sm q-mb-md"
                    :for="key"
                    v-for="answer,key in questions[index]['options']"
                    :class="{'hover:bg-gray-100 cursor-pointer' : selectedAnswer == ''},
                    {'bg-red-200' : selectedAnswer == key},
                    {'bg-green-200' : key == questions[index]['answer'] && selectedAnswer != ''}"
                    >
                        <input
                        type="radio"
                        class="bg-green"
                        :id="key"
                        :value="key"
                        @change="answered($event)"
                        v-model="selectedAnswer"
                        :disabled="selectedAnswer != ''"
                        />
                        {{ answer }}
                    </label>
                    <div 
                    id="btn"
                    class="q-mt-sm">
                        <q-btn 
                        id="next"
                        class="float-right bg-positive text-white q-ma-sm" v-show="selectedAnswer != ''"
                        @click="nextQuestion"
                        >
                        Next >
                        </q-btn>
                        <q-btn 
                        id="finish"
                        class="float-right bg-accent text-white q-ma-sm" v-show="selectedAnswer != '' && index > count"
                        @click="showResults"
                        >
                        Finish >
                        </q-btn>
                    </div>
                    <div 
                    id="dynext">
                        <h2 id="result"
                        class="text-h4 row justify-center   ">
                            Results
                        </h2>
                        <div
                        class="row justify-center">
                            <p id="crrAns"
                            class="q-ma-sm"
                            >
                                Correct Answers:
                                <span 
                                class="text-h6 text-green">
                                {{ answer }}
                                </span>
                            </p>
                            <p id="wrnAns"
                            class="q-ma-sm"
                            >
                            Wrong Answers:
                            <span
                            class="text-h6 text-red">
                            {{ wrongAnswer }}
                            </span>
                            </p>
                        </div>
                        <div id="repeat"
                        class="row justify-end">
                            <q-btn id="playAgian"
                            class="bg-info text-white q-ma-lg"
                            @click="resetQuiz">
                            Play again
                            </q-btn>
                        </div>
                    </div>
                </div>
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
            answer: 0,
            wrongAnswer: 0,
            count: 5,
            questions: [
                {
                    question: "Chlorofluorocarbons are accountable for which of the following process?",
                    options: {a: 'Ozone depletion', b: 'Acid rain', c: 'Soil pollution', d: 'Genetic mutation'},
                    answer: 'a'
                },
                {
                    question: "Which of the following gases is responsible for bleaching of plants?",
                    options: {a: 'NO2', b: 'SO3', c: 'SO2', d: 'CO2'},
                    answer: 'c'
                },
                {
                    question: "Which of the following water disinfecting procedures results in maximum wastage of water?",
                    options: {a: ' Boiling', b: 'Reverse Osmosis (RO)', c: 'Adding chlorine', d: 'Irradiation'},
                    answer: 'c'
                },
                {
                    question: "Why is it recommended to avoid getting wet in the first rain?",
                    options: {a: 'It will damage the clothes', b: 'First rain may contain harmful pollutants', c: ' It will spoil the shoes', d: 'None of the above'},
                    answer: 'b'
                },
                {
                    question: "Inside of car getting warmer than outside because of sunligh",
                    options: {a: 'Heat', b: 'Change of weather', c: 'Lightning', d: 'None of the above'},
                    answer: 'a'
                }
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['answer'])
                this.answer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.answer = 0
            this.wrongAnswer = 0
        }
    }
}
</script>

<style scoped>
#main{
    width: 700px;
}

label{
    display: block;
}
</style>