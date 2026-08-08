
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function(item) {
    item.addEventListener("click", function() {

        const fileName = item.getAttribute("data-file");

        fetch("json/" + fileName)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {

                let output = "";

                data.forEach(function(food) {
                    output += '<div class="food-item">';
                    output += '<h2>' + food.name + '</h2>';
                    output += '<p>' + food.description + '</p>';
                    output += '</div>';
                });

                document.body.innerHTML =
                    '<h1>Menu Details</h1>' +
                    '<div class="food-container">' +
                    output +
                    '</div>';

            })
            .catch(function(error) {
                console.log(error);
                alert("There is a problem loading the JSON file.");
            });

    });
});
