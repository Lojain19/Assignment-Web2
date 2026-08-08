```javascript
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const fileName = item.getAttribute("data-file");

        fetch("json/" + fileName)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("JSON file not found");
                }

                return response.json();
            })
            .then(function(data) {

                let output = "";

                data.forEach(function(food) {

                    output += `
                        <div class="food-item">
                            <h2>${food.name}</h2>
                            <p>${food.description}</p>
                        </div>
                    `;

                });

                document.body.innerHTML = `
                    <h1>Menu Details</h1>
                    <div class="food-container">
                        ${output}
                    </div>
                `;

            })
            .catch(function(error) {

                console.error(error);
                alert("There is a problem loading the JSON file.");

            });

    });

});
```
