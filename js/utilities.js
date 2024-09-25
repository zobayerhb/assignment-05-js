function showSection(id){
    document.getElementById("transaction-section").classList.add('hidden');
    document.querySelector('#flood-section').classList.add("hidden");
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}