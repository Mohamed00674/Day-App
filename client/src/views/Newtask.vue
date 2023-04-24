<template>
  <Navbar />
  <div class="container"   >
    <div class="alert alert-success" v-if="success" role="alert">
      {{ success }}
    </div>
    <form @submit.prevent  >
      <!-- Name input -->
      <div class="form-outline mb-4">
        <label class="form-label" id="TaskTtitle" for="form4Example1"
          >Task Title</label
        >
        <input
          v-model="form.TaskTitle"
          type="text"
          id="form4Example1"
          class="form-control"
          required
        />
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label" id="email" for="form4Example2"
          >Email address</label
        >
        <input
          v-model="form.email"
          type="email"
          id="form4Example2"
          class="form-control"
          required
        />
      </div>

      <!-- Message input -->
      <div class="form-outline mb-4">
        <label class="form-label" id="des" for="form4Example3"
          >Description</label
        >
        <textarea
          v-model="form.description"
          class="form-control"
          id="form4Example3"
          rows="2"
          required
        ></textarea>
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" id="date">Date</label>
        <input v-model="form.date" class="form-control" type="date" required />
      </div>
      <div class="form-outline mb-4">
        <label class="form-label" id="st"> Starting time</label>
        <input v-model="form.time" class="form-control" type="time" required />
      </div>

      <!-- Checkbox -->
      <div class="form-check d-flex justify-content-center mb-4">
        <input
          class="form-check-input me-2"
          type="checkbox"
          value=""
          id="form4Example4"
          checked
        />
        <label class="form-check-label" for="form4Example4">
          Send me an email 15 minutes before the beginning of the task
        </label>
      </div>

      <!-- Submit button -->
      <button
        type="submit"
        class="btn btn-primary btn-block mb-4"
        @click="submit(), sendEmail()"
      >
        Send
      </button>
    </form>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import emailjs from "emailjs-com";
import Footer from "../components/Footer.vue";
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Newtask",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const route = useRouter();
    const success = ref("");
    const form = reactive({
      TaskTitle: "",
      email: "",
      description: "",
      date: "",
      time: "",
    });
    const submit = async () => {
      try {
        const response = await axios.post("http://localhost:2400/tasks/", form);
        console.log(response);
        success.value = response.data.message;
      } catch (error) {
        console.log(error);
      }
    };
      
    const sendEmail =  () => {
      try {
        emailjs.sendForm("service_uwdf5cg", "template_nw40sf5", 'form' , 'CWVJdXb0KwNrc2YUN');
      } catch (error) {
       console.log(error)
      }
    };

    return { success, submit, form, sendEmail  };
  },
};
</script>

<style scoped>
.container {
  width: 500px;
  margin-top: 40px;
  background-color: #f7f5ef;
}
#st {
  margin-right: 380px;
}
#date {
  margin-right: 420px;
}
#TaskTtitle {
  margin-top: 20px;
  margin-right: 400px;
}
#email {
  margin-right: 370px;
}
#des {
  margin-right: 400px;
}
</style>
