const data = [
    {
        name: 'John Doe',
        age: '32',
        gender: 'Male',
        lookingfor: 'female',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg',
    },
    {
        name: 'Jen Smith',
        age: '26',
        gender: 'Female',
        lookingfor: 'male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg',
    },
    {
        name: 'William Johnson',
        age: '38',
        gender: 'Male',
        lookingfor: 'female',
        location: 'Lynn, MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg',
    }
];

const profiles = profileIterator(data);


// call first profile
nextProfile();

// next event listener
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Preference: Looking for ${currentProfile.lookingfor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">`;
    } else { 
        // no moore profiles, reload page
        window.location.reload();
    }
}

// profile iterator 
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? 
            { value: profiles [nextIndex++], done: false} :
            { done: true} 
        }
    };
}