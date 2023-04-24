<template>
  <Navbar />
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Task Name</th>
        <th scope="col">Completed</th>
        <th scope="col">Date</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in Tasks" :key="task._id">
        <th scope="row">{{ task._id }}</th>
        <td>{{ task.TaskTitle }}</td>
        <td>{{ task.isCompleted }}</td>
        <td>{{ task.date }}</td>
        <td>
          <button type="button" class="btn btn-primary">Edit</button>
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
        console.log(response.data);
        Tasks.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });

    const deleteTask =  async (id) => {
      const res = await axios.delete(`http://localhost:2400/tasks/${$_id} `)
      
    };

    return { Tasks };
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
