<script>
  import Counter from "./Counter.svelte";

// the newPerson needs to be an open string because this will change, which is why we are using let instead of const
    let newPerson = '';
// we are to declaring the intial start of the list
    let peopleList = [{text: 'Emily'}]
//this function allows the user to add more people. So, it is saying something like "check the peopleList, then add in the text with the newPerson that we declared above and note that the new person's name can be any string"
    function addPeople () { 
        peopleList = [...peopleList, {text: newPerson}];
    newPerson = '';
    }
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced() - Mozilla Dev Defination 
    function removePeople(index) {
        peopleList.splice(index, 1)
        peopleList = peopleList;
    }

</script>

<main >
    <input bind:value={newPerson} type="text" placeholder="add a player">
    <button on:click={addPeople}>Add</button>

    <br />
<!-- for each variable access this specific property and the index of the current item? I think...still learning this logic-->
    {#each peopleList as person, index}
    
    <!-- the reason we have to say person.text is because we are looping through each of the people in the PeopleList and looking for the what the 'text' is being declared as-->
    <div> {person.text} </div> 
    <!-- on click remove the person using the x-->
    <Counter />
    <span on:click={() => removePeople(index)}>X</span>
    <br />
    {/each}

</main>

<style>

</style>