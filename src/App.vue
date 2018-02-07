<template>

  <div  v-if="show" >

    <table align="center" border="0" class="container-fluid">
      <tr >
        <td >PLAN_DEPART</td>
        <td  width="25%">CARRIER</td>
        <td >ORIG</td>
        <td >DEST</td>
        <td  width="10%">TRIP</td>
        <td>BOOKING_NUMBER</td>
        <td >STATUS</td>
        <td >OFFERED</td>
      </tr>
    </table>
    <marquee scrollamount="5" behavior="scroll" direction="up" vspace="0px" style="position: absolute; "
             loop="true"
             height="100%"
             onfinish="alert('onFinish')">
    <table align="center" border="0" class="container-fluid">
      <tr >
        <td >PLAN_DEPART</td>
        <td  width="25%">CARRIER</td>
        <td >ORIG</td>
        <td >DEST</td>
        <td  width="10%">TRIP</td>
        <td>BOOKING_NUMBER</td>
        <td >STATUS</td>
        <td >OFFERED</td>
      </tr>
      <tr  v-for="u in users" v-bind:class="u.COLOR" >
        <td>{{ u.PLAN_DEPART}}</td>
        <td width="25%">{{ u.CARRIER }}</td>
        <td>{{ u.ORIG }}</td>
        <td>{{ u.DEST }}</td>
        <td>{{ u.TRIP }}</td>
        <td>{{u.BOOKING_NUMBER }}</td>
        <td>{{u.STATUS}}</td>
        <td>{{u.OFFERED}}</td>
      </tr>
    </table>
    </marquee>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        users: [],
        show: true,
        load: true,
        elementWidth: 100
      }
    },
    mounted:function () {
      this.fetchData()
    },
    methods: {
      onFinish() {
        this.fetchData()
        console.log('onFinish!')
      },
      fetchData() {
        axios.get(`http://localhost:1337/all`)
          .then(response => {
            this.users = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      addItem(){
        const pos = Math.floor(Math.random() * this.users.length);
        this.users.splice(pos, 0, this.user.length + 1);
      },
      removeItem(index){
        this.users.splice(index, 1);
      }
    }
  }
</script>

<style>


  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  margin-top: 50px;
}
.red {
  background-color: salmon;
  color: blue;
}
.yellow {
  background-color: lemonchiffon;
  color: blue;
}
#verticalScroller {
  position: absolute;
  width:52px;
  height: 180px;
  border: 1px solid red;
  overflow: hidden;
}
#verticalScroller > div{
  position:absolute;
  width:50px;
  height:50px;
  border: 1px solid blue;
  overflow:hidden;
}

</style>
