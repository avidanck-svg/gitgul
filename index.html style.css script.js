<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FastDeliver - Home Delivery Services</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
    <nav>
        <h1>FastDeliver</h1>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section id="home">
        <h2>Welcome to FastDeliver</h2>
        <p>Reliable home delivery at your doorstep.</p>
        <div id="3d-scene-home"></div>
        <button onclick="rotateTruck()">Rotate Truck</button>
    </section>

    <section id="about">
        <h2>About Us</h2>
        <p>We deliver happiness with speed and care.</p>
        <div id="3d-scene-about"></div>
    </section>

    <section id="services">
        <h2>Our Services</h2>
        <p>Explore our delivery zones worldwide.</p>
        <div id="3d-scene-services"></div>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <form id="contact-form">
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
        <div id="3d-scene-contact"></div>
    </section>

    <footer>
        <p>&copy; 2023 FastDeliver. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #f0f8ff, #e6f7ff);
    color: #333;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #007bff;
    color: white;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}

nav a {
    color: white;
    text-decoration: none;
}

section {
    padding: 2rem;
    text-align: center;
    min-height: 100vh;
}

#3d-scene-home, #3d-scene-about, #3d-scene-services, #3d-scene-contact {
    width: 100%;
    height: 400px;
    margin: 1rem 0;
    border: 1px solid #ccc;
}

button {
    padding: 0.5rem 1rem;
    background: #28a745;
    color: white;
    border: none;
    cursor: pointer;
}

form {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

input, textarea {
    padding: 0.5rem;
}

footer {
    text-align: center;
    padding: 1rem;
    background: #007bff;
    color: white;
}
a// Global variables
let truck, logo, globe, cube;

// Home Scene: Delivery Truck
function initHomeScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 400);
    document.getElementById('3d-scene-home').appendChild(renderer.domElement);

    // Simple truck model (box + wheels)
    const truckGeometry = new THREE.BoxGeometry(2, 1, 4);
    const truckMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    truck = new THREE.Mesh(truckGeometry, truckMaterial);
    scene.add(truck);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        truck.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

// Rotate truck on button click
function rotateTruck() {
    if (truck) truck.rotation.x += 0.5;
}

// About Scene: Rotating Logo
function initAboutScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 400);
    document.getElementById('3d-scene-about').appendChild(renderer.domElement);

    const logoGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 32);
    const logoMaterial = new THREE.MeshBasicMaterial({ color: 0x007bff });
    logo = new THREE.Mesh(logoGeometry, logoMaterial);
    scene.add(logo);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        logo.rotation.y += 0.02;
        renderer.render(scene, camera);
    }
    animate();
}

// Services Scene: 3D Globe
function initServicesScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 400);
    document.getElementById('3d-scene-services').appendChild(renderer.domElement);

    const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    camera.position.z = 3;

    function animate() {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

// Contact Scene: Confirmation Cube
function initContactScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 400);
    document.getElementById('3d-scene-contact').appendChild(renderer.domElement);

    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (Demo only)');
    if (cube) cube.material.color.setHex(0x00ff00); // Change cube color on submit
});

// Initialize scenes on load
window.onload = function() {
    initHomeScene();
    initAboutScene();
    initServicesScene();
    initContactScene();
};
