<script>
  import Counter from "./Counter.svelte";


    let newPerson = '';

    let peopleList = [{text: 'Emily'}]

    function addPeople () { 
        peopleList = [...peopleList, {text: newPerson}];
    newPerson = '';
    }

    function removePeople(index) {
        peopleList.splice(index, 1)
        peopleList = peopleList;
    }

</script>
<main>
    <input bind:value={newPerson} type="text">
    <button on:click={addPeople}>Add</button>

    <br />
    

</main>
<style>

</style>