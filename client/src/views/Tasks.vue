<template>
  <Navbar />
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#Id</th>
        <th scope="col">Task Name</th>
        <th scope="col">Description</th>
        <th scope="col">Date</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, index) in Tasks" :key="task._id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ task.TaskTitle }}</td>
        <td>{{ task.description }}</td>
        <td>{{ task.date }}</td>
        <td>
          <router-link to="/edit ">
            <button type="button" class="btn btn-primary">Edit</button>
          </router-link>
          <button type="button" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <Footer />
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { onMounted, ref } from "vue";
export default {
  name: "Tasks",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const Tasks = ref([]);
    const getTasks = onMounted(async () => {
      try {
        const response = await axios.get("http://localhost:2400/tasks");
        Tasks.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });

    return { Tasks};
  },
};
</script>

<style scoped>
.table-hover {
  width: 1000px;
  padding: 1000px;
  margin-left: 100px;
}
</style>
