<template>
  <Navbar />
  <div class="container">
    <form @submit.prevent>
      <!-- Name input -->
      <div class="form-outline mb-4">
        <label class="form-label" id="TaskTtitle" for="form4Example1"
          >Task Title</label
        >
        <input type="text" id="form4Example1" class="form-control" required />
      </div>
      <!-- Message input -->
      <div class="form-outline mb-4">
        <label class="form-label" id="des" for="form4Example3"
          >Description</label
        >
        <textarea
          class="form-control"
          id="form4Example3"
          rows="2"
          required
        ></textarea>
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" id="date">Date</label>
        <input class="form-control" type="date" required />
      </div>
      <div class="form-outline mb-4">
        <label class="form-label" id="st"> Starting time</label>
        <input class="form-control" type="time" required />
      </div>
      <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
    </form>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "edit",
  components: { Navbar, Footer },
  setup(props) {

  },
};
</script>

<style>
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
