<template>
    <q-img 
    class="window-width window-height " 
      src="src/assets/New Quiz.jpg"
      :ratio="16/9" 
    />
    <div class="absolute-center" id="main">
        <div id="header" class="row item-start justify-between">
            <div id="NewQuiz"  class="text-h6"><strong>New Quiz</strong></div>
            <div id="info">MINGJI</div>
        </div>

        <div id="qnA" class="q-mt-lg -pt-lg">
            <p>Questions 00/05</p>
            <p class="text-h3">This is where the question comes</p>
        </div>
        <label class="">
            <q-input type="radio" color="teal"  outlined />option 1
        </label>
        <label>
            <q-input type="radio" color="teal" outlined/>option 2
        </label>
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
    }
}
</script>
<style scoped>
#main{
    width: 80%;
}

</style>