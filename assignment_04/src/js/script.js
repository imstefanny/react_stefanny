displayPortfolio = () => {
    let portfolio = JSON.parse(localStorage.getItem('portfolio'));
    if (!portfolio) {
        portfolio = {
            name: "Stefanny",
            role: "Front End Developer",
            availability: "Full Time",
            usia: 20,
            lokasi: "Medan",
            experience: 2,
            email: "stefanny@witech.co.id"
        };
        localStorage.setItem('portfolio', JSON.stringify(portfolio));
    }
    document.getElementById("name").innerText = portfolio.name;
    document.getElementById("role").innerText = portfolio.role;
    document.getElementById("availability").innerText = portfolio.availability;
    document.getElementById("usia").innerText = portfolio.usia;
    document.getElementById("lokasi").innerText = portfolio.lokasi;
    document.getElementById("experience").innerText = portfolio.experience;
    document.getElementById("email").innerText = portfolio.email;
}

submitPortfolio = () => {
    let name = document.getElementById("nameForm").value;
    let role = document.getElementById("roleForm").value;
    let availability = document.getElementById("availabilityForm").value;
    let usia = document.getElementById("usiaForm").value;
    let lokasi = document.getElementById("lokasiForm").value;
    let experience = document.getElementById("experienceForm").value;
    let email = document.getElementById("emailForm").value;
    let portfolio = JSON.parse(localStorage.getItem('portfolio'));
    portfolio = {
        name: name,
        role: role,
        availability: availability,
        usia: usia,
        lokasi: lokasi,
        experience: experience,
        email: email
    };
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
}

editPortfolio = () => {
    document.getElementById("formEditor").classList.remove("d-none");
    let portfolio = JSON.parse(localStorage.getItem('portfolio'));
    document.getElementById("nameForm").value = portfolio.name;
    document.getElementById("roleForm").value = portfolio.role;
    document.getElementById("availabilityForm").value = portfolio.availability;
    document.getElementById("usiaForm").value = portfolio.usia;
    document.getElementById("lokasiForm").value = portfolio.lokasi;
    document.getElementById("experienceForm").value = portfolio.experience;
    document.getElementById("emailForm").value = portfolio.email;
}
