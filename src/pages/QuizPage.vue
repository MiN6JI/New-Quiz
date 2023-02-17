<template>
  <q-page class="q-pa-md">
    <div class="row">
      <!-- loop through the questions -->
      <div
        class="col-12"
        v-for="(question, questionIndex) in questions"
        :key="questionIndex"
        v-show="currentPage == questionIndex + 1"
      >
        <h4>Q.{{ questionIndex + 1 }} {{ question.question }}</h4>
        <!-- loop through the options -->
        <q-radio
          v-for="(option, optionIndex) in question.options"
          :key="optionIndex"
          v-model="quiz['q' + questionIndex + 1]"
          :label="option.label"
          :val="option.value"
          :name="quiz['q' + questionIndex + 1]"
        ></q-radio>
      </div>

      <div class="flex justify-center q-py-lg" style="gap: 1rem; width: 100%">
        <q-btn
          unelevated
          color="primary"
          label="Previous"
          @click="prev()"
          v-if="currentPage >= 2"
        ></q-btn>
        <q-btn
          unelevated
          color="primary"
          label="Next"
          @click="next(questionIndex)"
          v-if="currentPage <= questions.length - 1"
        ></q-btn>

        <q-btn
          unelevated
          color="primary"
          label="Submit"
          @click="calculateScore()"
          v-if="currentPage == questions.length"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";

const questions = [
  {
    question: "I am the first question",
    options: [
      {
        label: "I am option 1 of question 1",
        value: 3,
      },
      {
        label: "I am option 2 of question 1",
        value: 2,
      },
      {
        label: "I am option 3 of question 1",
        value: 1,
      },
    ],
  },
  {
    question: "I am the second question",
    options: [
      {
        label: "I am option 1 of question 2",
        value: 3,
      },
      {
        label: "I am option 2 of question 2",
        value: 2,
      },
      {
        label: "I am option 3 of question 2",
        value: 1,
      },
    ],
  },
  {
    question: "I am the third question",
    options: [
      {
        label: "I am option 1 of question 3",
        value: 3,
      },
      {
        label: "I am option 2 of question 3",
        value: 2,
      },
      {
        label: "I am option 3 of question 3",
        value: 1,
      },
    ],
  },
];
export default {
  setup() {
    let currentPage = ref(1);
    const score = ref(0);
    const quiz = ref([]);

    // navigate to the next question
    function next() {
      currentPage.value = currentPage.value + 1;
    }

    // navigate to the previous question
    function prev() {
      currentPage.value = currentPage.value - 1;
    }

    // calculate the final score
    function calculateScore() {}

    return {
      questions,

      currentPage,
      score,
      quiz,

      next,
      prev,
      calculateScore,
    };
  },
};
</script>
