// Async function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Remove the "Loading..." message
        dataContainer.innerHTML = '';

        // Create the list element
        const userList = document.createElement('ul');

        // Loop through users and create list items
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error("Error fetching users:", error);
    }
}

// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
